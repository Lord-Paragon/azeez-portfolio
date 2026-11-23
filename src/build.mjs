
import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { details } from './projects.mjs';
import { render, pages } from './pages.mjs';

const root = resolve(import.meta.dirname, '..');
const out = join(root, 'dist');
const briefs = Object.fromEntries(await Promise.all(
  ['overallinstruction', 'homepage', 'projectpage', 'experiencepage', 'certificationpage', 'hobbiespage', 'contactpage']
    .map(async name => [name, await readFile(join(root, 'content', name + '.md'), 'utf8')])
));
const projectSource = briefs.projectpage.split('## 4.')[1].split('## 5.')[0];
const projects = [...projectSource.matchAll(/^\d+\. \*\*(.+?)\*\*\s+GitHub Repository: (https:\S+)/gm)]
  .map(([, title, url], i) => ({ title, url, number: i + 1, ...details[new URL(url).pathname.split('/').at(-1)] }));
const bullets = text => [...text.matchAll(/^- (.+)$/gm)].map(match => match[1].trim());
const field = (text, key) => text.match(new RegExp('\\*\\*' + key + ':\\*\\* ([^\\r\\n]+)'))?.[1].trim();
const certificates = briefs.certificationpage.split(/### Certificate \d{2}\r?\n/).slice(1).map(block => {
  const [entry, skills] = block.split('**Skills demonstrated:**');
  return {
    title: field(entry, 'Name'), institution: field(entry, 'Institution'), category: field(entry, 'Category'),
    image: field(entry, 'Filepath').split('\\').at(-1),
    description: entry.split('**Description:**')[1].trim().replace(/^"|"$/g, ''),
    skills: bullets(skills.split(/\r?\n\r?\n/).find(part => part.trim().startsWith('- ')) || ''),
  };
});
const roles = briefs.experiencepage.split(/^## EXPERIENCE \d{2} .+/m).slice(1).map(block => {
  const overview = block.split('### Professional Overview')[1].split('### Key Responsibilities')[0].trim();
  const responsibilities = block.split('### Key Responsibilities & Contributions')[1].split('### Skills Demonstrated')[0];
  const skillBlock = block.split('### Skills Demonstrated')[1].split('### Design Treatment')[0];
  return {
    title: field(block, 'Job Title'), institution: field(block, 'Organization'),
    period: field(block, 'Employment Period'), category: field(block, 'Industry'),
    status: field(block, 'Status') || field(block, 'Engagement Type') || field(block, 'Work Arrangement'),
    description: overview, skills: bullets(skillBlock),
    responsibilities: [...responsibilities.matchAll(/^\*\*(.+?)\*\*\s*\r?\n((?:- .+\r?\n)+)/gm)]
      .map(([, label, list]) => ({label, items: bullets(list)})),
  };
});
if (projects.some(project => !project.category || !project.skills?.length) || certificates.length !== 15 || roles.length !== 3) {
  throw new Error('The source directory is incomplete. Check the portfolio briefs.');
}
try { process.loadEnvFile(join(root, '.env')); }
catch (error) { if (error.code !== 'ENOENT') throw error; }
const site = process.env.SITE_URL ? new URL(process.env.SITE_URL) : null;
if (site && (!['http:', 'https:'].includes(site.protocol) || site.username || site.password || site.pathname !== '/' || site.search || site.hash)) {
  throw new Error('SITE_URL must be a site origin, such as https://example.com.');
}
await mkdir(out, {recursive: true});
await cp(join(root, 'static'), out, {recursive: true});
await cp(join(root, 'assets'), join(out, 'media'), {recursive: true});
for (const page of pages) {
  const path = join(out, page.slug);
  await mkdir(path, {recursive: true});
  await writeFile(join(path, 'index.html'), render(page, {briefs, projects, certificates, roles, site}));
}
await writeFile(join(out, 'robots.txt'), 'User-agent: *\nAllow: /\n' + (site ? 'Sitemap: ' + new URL('/sitemap.xml', site) + '\n' : ''));
if (site) {
  const urls = pages.map(({slug}) => '<url><loc>' + new URL(slug ? '/' + slug + '/' : '/', site) + '</loc></url>').join('');
  await writeFile(join(out, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + urls + '</urlset>');
}
else await rm(join(out,'sitemap.xml'),{force:true});
console.log('Built six pages with ' + projects.length + ' projects and ' + certificates.length + ' certificates.');
