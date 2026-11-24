
import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { pathToFileURL } from 'node:url';

const output = resolve(import.meta.dirname, '../dist');
const recipient = 'olasupoazeezolawale@gmail.com';
const limits = { firstName: 80, lastName: 80, email: 254, subject: 150, message: 5000 };
const types = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8', '.svg': 'image/svg+xml', '.xml': 'application/xml',
  '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.jfif': 'image/jpeg',
};
const failure = 'Your message could not be sent. Please try again or use the email address on this page.';
const status = (res, code, message) => {
  res.writeHead(code, {'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store'});
  res.end(JSON.stringify(code === 200 ? {ok:true} : {ok:false, message}));
};

async function readForm(req) {
  let size = 0;
  const chunks = [];
  for await (const chunk of req.iterator({destroyOnReturn: false})) {
    size += chunk.length;
    if (size > 65536) {
      req.resume();
      return null;
    }
    chunks.push(chunk);
  }
  return new URLSearchParams(Buffer.concat(chunks).toString('utf8'));
}

export function portfolioHandler({env = process.env, send = fetch} = {}) {
  const attempts = new Map();
  const windowMs = 15 * 60_000;
  let lastCleanup = 0;

  function withinRateLimit(ip) {
    const now = Date.now();
    if (now - lastCleanup > 60_000) {
      for (const [address, record] of attempts) if (record.expiry <= now) attempts.delete(address);
      lastCleanup = now;
    }
    const active = attempts.get(ip);
    const record = active?.expiry > now ? active : { count: 0, expiry: now + windowMs };
    if (attempts.size >= 10000 && !active) return false;
    attempts.set(ip, record);
    return ++record.count <= 5;
  }

  async function contact(req, res) {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return status(res, 405, 'Use the contact form to send a message.');
    }
    const origin = req.headers.origin;
    const expected = env.SITE_URL ? new URL(env.SITE_URL).origin : null;
    if (req.headers['sec-fetch-site'] === 'cross-site' ||
        (origin && (expected ? origin !== expected : new URL(origin).host !== req.headers.host))) {
      return status(res, 403, failure);
    }
    if (!req.headers['content-type']?.startsWith('application/x-www-form-urlencoded')) {
      return status(res, 415, 'Submit the form from the contact page.');
    }
    if (!withinRateLimit(req.socket.remoteAddress)) {
      res.setHeader('Retry-After', '900');
      return status(res, 429, 'Too many attempts. Please wait 15 minutes or use the email address on this page.');
    }
    const form = await readForm(req);
    if (!form) return status(res, 413, 'Your message is too large.');
    const values = Object.fromEntries(Object.keys(limits).map(key => [key, (form.get(key) || '').trim()]));
    const invalidField = Object.entries(limits).some(([key,max]) =>
      form.getAll(key).length !== 1 || !values[key] || values[key].length > max ||
      (key !== 'message' && /[\u0000-\u001f\u007f]/.test(values[key])));
    if (invalidField || form.get('website') || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      return status(res, 400, 'Check all fields and make sure your email address is valid.');
    }
    if (!env.RESEND_API_KEY || !env.CONTACT_FROM) return status(res, 503, failure);
    const {firstName,lastName,email,subject,message} = values;
    const response = await send('https://api.resend.com/emails', {
      method:'POST',
      headers: {Authorization: 'Bearer ' + env.RESEND_API_KEY, 'Content-Type':'application/json'},
      signal: AbortSignal.timeout(9000),
      body: JSON.stringify({
        from:env.CONTACT_FROM, to:[recipient], reply_to:email, subject,
        text:'Name: ' + firstName + ' ' + lastName + '\nEmail: ' + email + '\nSubject: ' + subject +
          '\nSubmitted (UTC): ' + new Date().toISOString() + '\n\n' + message
      })
    });
    const acceptance = await response.json();
    return response.ok && acceptance.id ? status(res, 200) : status(res, 502, failure);
  }

  return async (req,res) => {
    res.setHeader('X-Content-Type-Options','nosniff');
    res.setHeader('Referrer-Policy','strict-origin-when-cross-origin');
    res.setHeader('Content-Security-Policy',"default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'");
    try {
      const url = new URL(req.url, 'http://portfolio.local');
      if (url.pathname === '/api/contact') return await contact(req,res);
      if (!['GET','HEAD'].includes(req.method)) {
        res.setHeader('Allow','GET, HEAD');
        res.writeHead(405).end('Method not allowed');
        return;
      }
      const pathname = decodeURIComponent(url.pathname);
      let file = resolve(output, '.' + pathname);
      if (file !== output && !file.startsWith(output + sep)) {
        res.writeHead(404).end('Page not found');
        return;
      }
      const info = await stat(file).catch(() => null);
      if (info?.isDirectory()) {
        if (!pathname.endsWith('/')) {
          res.writeHead(308,{Location: url.pathname + '/' + url.search}).end();
          return;
        }
        file = resolve(file,'index.html');
      }
      const mime = types[extname(file).toLowerCase()];
      if (!mime || !(await stat(file).catch(() => null))?.isFile()) {
        res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'}).end('Page not found');
        return;
      }
      res.writeHead(200, {'Content-Type':mime,'Cache-Control':file.endsWith('.html') ? 'no-cache' : 'public, max-age=3600'});
      if (req.method === 'HEAD') res.end();
      else createReadStream(file).on('error', () => res.destroy()).pipe(res);
    } catch {
      if (!res.headersSent) status(res, 502, failure);
      else res.destroy();
    }
  };
}

export function portfolioServer(options) {
  return createServer(portfolioHandler(options));
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  if (process.loadEnvFile) {
    try { process.loadEnvFile(); } catch (error) { if (error.code !== 'ENOENT') throw error; }
  }
  const port = Number(process.env.PORT || 3000);
  portfolioServer().listen(port, () => console.log('Portfolio running at http://localhost:' + port));
}
