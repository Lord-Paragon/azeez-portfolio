
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { once } from 'node:events';
import { portfolioServer } from './server.mjs';

const routes = ['/', '/projects/', '/experience/', '/certifications/', '/hobbies/', '/contact/'];

async function withServer(context, options) {
  const server = portfolioServer(options).listen(0, '127.0.0.1');
  await once(server, 'listening');
  context.after(() => new Promise(resolve => server.close(resolve)));
  return new URL('http://127.0.0.1:' + server.address().port);
}

test('all pages, navigation targets and referenced local assets respond', async context => {
  const base = await withServer(context);
  const documents = await Promise.all(routes.map(async route => {
    const response = await fetch(new URL(route, base));
    assert.equal(response.status, 200, route);
    const html = await response.text();
    assert.equal([...html.matchAll(/<h1>/g)].length, 1, route);
    assert.ok(html.includes('aria-current="page"'), route);
    assert.doesNotMatch(html, /\[CONTACT_PAGE_LINK\]|>undefined<|<p>\*\*/);
    for (const target of routes) assert.ok(html.includes('href="' + target + '"'), target);
    return html;
  }));
  const references = new Set(documents.flatMap(html => [...html.matchAll(/(?:src|href)="(\/[^"]+)"/g)].map(match => match[1])));
  await Promise.all([...references].map(async reference => {
    const response = await fetch(new URL(reference, base), {method:'HEAD'});
    assert.equal(response.status, 200, reference);
  }));
  assert.equal([...documents[1].matchAll(/ data-item data-category=/g)].length, 10);
  assert.equal([...documents[3].matchAll(/ data-item data-category=/g)].length, 15);
  assert.equal([...documents[3].matchAll(/data-filter="/g)].length, 7);
  assert.equal([...documents[4].matchAll(/data-group="nysc"/g)].length, 4);
  assert.equal([...documents[2].matchAll(/id="role-\d"/g)].length, 3);
  assert.equal((await fetch(new URL('/missing/',base))).status,404);
});

const values = {firstName:'Ada',lastName:'Example',email:'ada@example.com',subject:'Collaboration',message:'Testing the contact form.'};
const submit = (base, fields = {}, headers = {}) => fetch(new URL('/api/contact',base),{
  method:'POST', body:new URLSearchParams({...values,...fields}), headers
});

test('contact validates submissions and confirms provider acceptance', async context => {
  let calls = 0;
  const base = await withServer(context, {
    env:{RESEND_API_KEY:'test-key', CONTACT_FROM:'Portfolio <sender@example.com>'},
    send: async (url, request) => {
      calls++;
      assert.equal(url,'https://api.resend.com/emails');
      const body = JSON.parse(request.body);
      assert.deepEqual(body.to,['olasupoazeezolawale@gmail.com']);
      assert.equal(body.reply_to,values.email);
      assert.equal(body.subject,values.subject);
      assert.ok(body.text.includes(values.message));
      return calls === 1 ? Response.json({id:'mock-message'}) : Response.json({error:'test rejection'},{status:422});
    }
  });
  assert.equal((await submit(base, {email:'invalid'})).status,400);
  assert.equal((await submit(base, {website:'bot'})).status,400);
  assert.equal((await submit(base, {}, {Origin:'https://example.com'})).status,403);
  assert.deepEqual(await (await submit(base)).json(),{ok:true});
  assert.equal((await submit(base)).status,502);
  assert.equal((await submit(base, {firstName:''})).status,400);
  assert.equal((await submit(base)).status,429);
  assert.equal(calls,2);
});

test('unconfigured email service reports unavailability', async context => {
  const base = await withServer(context,{env:{}});
  assert.equal((await submit(base)).status,503);
});
