
const email='olasupoazeezolawale@gmail.com', github='https://github.com/paragon-tech001', linkedin='https://www.linkedin.com/in/olasupo-azeez/';
const portrait='Olasupo, Azeez Olawale_Passport Photograph.jpg';
const pages=[
  ['', 'Home', 'Data scientist and industrial engineer working across analytics, automation and operations.'],
  ['projects','Projects','Practical work in procurement intelligence, data science and operations research.'],
  ['experience','Experience','Professional experience in supply chain analytics, AI data quality and energy.'],
  ['certifications','Certifications','Fifteen credentials in data science, business intelligence, operations and project management.'],
  ['hobbies','Hobbies','Football, calisthenics and the stories behind life outside work.'],
  ['contact','Contact','Get in touch about analytical projects, opportunities and collaboration.']
].map(([slug,label,description])=>({slug,label,description}));
const e=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const media=f=>'/media/'+encodeURIComponent(f);
const route=s=>s?`/${s}/`:'/';
const image=(f,alt,hero=false,thumbnail=false)=>`<img src="${media(thumbnail ? f + '.webp' : f)}" alt="${e(alt)}" ${hero?'fetchpriority="high"':'loading="lazy"'} decoding="async">`;
const link=(url,label,css='')=>`<a href="${e(url)}" class="${css}" ${url.startsWith('https:')?'target="_blank" rel="noopener noreferrer"':''}>${e(label)}</a>`;
const button=(url,label,secondary=false)=>link(url,label,'button'+(secondary?' secondary':''));
const icons={
  chart:'<path d="M3 3v18h18M7 16l4-5 4 2 5-7"/>',
  focus:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/>',
  layers:'<path d="m12 2 10 6-10 6L2 8l10-6ZM2 12l10 6 10-6M2 16l10 6 10-6"/>',
  moon:'<path d="M20.9 13.3A9 9 0 0 1 10.7 3.1 9 9 0 1 0 20.9 13.3Z"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l2 2m10 10 2 2m0-14-2 2M7 17l-2 2"/>',
  menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  send:'<path d="m22 2-7 20-4-9-9-4 20-7ZM11 13 22 2"/>'
};
const icon=name=>`<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round">${icons[name]}</svg>`;
const paras=v=>v.trim().split(/\r?\n\s*\r?\n/).map(p=>`<p>${e(p.trim())}</p>`).join('');
const cut=(v,start,end)=>v.split(start)[1].split(end)[0].trim();
const heading=(label,title)=>`<header class="section-heading"><span class="eyebrow">${e(label)}</span><h2>${e(title)}</h2></header>`;
const hero=(label,title,headline,copy,extra='')=>`<section class="page-hero"><div class="wrap"><span class="eyebrow">${e(label)}</span><h1>${e(title)}</h1><p class="headline">${e(headline)}</p><div class="prose">${paras(copy)}</div>${extra}</div></section>`;
const intro=(b,label)=>hero(label,cut(b,'**Main heading:**','**Supporting headline:**'),cut(b,'**Supporting headline:**','**Introduction:**'),cut(b,'**Introduction:**','\n---').split(/\r?\n\*\*|\r?\n#+ /)[0]);
const section=(label,title,body,band=false)=>`<section class="${band?'band':'section'}"><div class="wrap">${heading(label,title)}${body}</div></section>`;
const close=(title,copy,actions)=>`<section class="closing"><div class="wrap"><h2>${e(title)}</h2><p>${e(copy)}</p><div class="actions">${actions}</div></div></section>`;
const tile=(title,copy,glyph='focus',actions='')=>`<article class="card tile">${icon(glyph)}<h3>${e(title)}</h3><p>${e(copy)}</p>${actions}</article>`;
const tiles=items=>`<div class="grid">${items.map((v,i)=>tile(...v,['chart','layers','focus'][i%3])).join('')}</div>`;
const tags=(skills,count=3)=>{
  if(!skills?.length)return '';
  const more=skills.slice(count);
  return `<div class="tags">${skills.slice(0,count).map(s=>`<span class="tag">${e(s)}</span>`).join('')}${more.length?`<details class="more"><summary aria-label="Show ${more.length} more skills">+${more.length}</summary><div class="popover">${more.map(s=>`<span>${e(s)}</span>`).join('')}</div></details>`:''}</div>`;
};
const categories=data=>[...new Set(data.map(i=>i.category))].sort();
const directory=(name,data,card)=>`<div data-directory="${name.toLowerCase()}"><div class="filters"><div class="filter-buttons" role="group" aria-label="${name} categories">${['',...categories(data)].map(c=>`<button type="button" data-filter="${e(c)}" aria-pressed="${!c}">${e(c||'All '+name)}</button>`).join('')}</div><label>Search ${name.toLowerCase()}<input type="search" data-search placeholder="Title, category or skill"></label></div><p class="result-count" data-count aria-live="polite">${data.length} ${name.toLowerCase()}</p><div class="grid">${data.map(i=>card(i,true)).join('')}</div><p data-empty class="empty" hidden>No ${name.toLowerCase()} match your search.</p></div>`;
const attrs=i=>`data-item data-category="${e(i.category)}" data-search-text="${e([i.title,i.category,i.institution,...i.skills].join(' '))}"`;
const art='<div class="chart-art" aria-hidden="true"><div class="bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div>';
const project=(i,filter=false)=>`<article class="card project-card" ${filter?attrs(i):''}><div class="project-art">${i.image?image(i.image,i.title+' preview'):art}<span>${String(i.number).padStart(2,'0')}</span></div><div class="card-body"><p class="eyebrow">${e(i.category)}</p><h3>${link(i.url,i.title,'card-link')}</h3><p>${e(i.description)}</p>${tags(i.skills)}<span class="project-source">GitHub <span aria-hidden="true">↗</span></span></div></article>`;
const home=({briefs,projects})=>{
  const b=briefs.homepage;
  const tools=[...cut(b,'## 5. TECHNICAL TOOLKIT','## 6.').matchAll(/^\*\*(.+?)\*\*\s*\r?\n((?:- .+(?:\r?\n|$))+)/gm)];
  const interests=[...cut(b,'## 6. AREAS OF INTEREST','## 7.').matchAll(/^\*\*(.+?)\*\*\s*\r?\n([^\r\n]+)/gm)];
  return `<section class="home-hero"><div class="wrap hero-grid"><div class="hero-copy"><p class="eyebrow">Data science · Engineering · Operations</p><h1>Hello, I’m<br><em>Azeez Olawale.</em></h1><p class="identity">Data Scientist <span>·</span> AI &amp; Workflow Automation <span>·</span> Industrial Engineer</p><h2>Turning data into intelligence.<br>Transforming intelligence into better decisions.</h2><p>I bring an industrial engineering perspective to analytics, using data and statistical thinking to solve business and operational problems.</p><div class="actions">${button('/projects/','Explore My Projects')}${button('/contact/','Let’s Connect',true)}</div></div><figure class="portrait">${image(portrait,'Professional portrait of Azeez Olawale',true,true)}<figcaption><strong>Azeez Olawale</strong><span>Industrial engineer · Data scientist</span></figcaption></figure></div></section>
  <section class="band"><div class="wrap split">${heading('Professional approach','Engineering Perspective. Analytical Thinking. Business Impact.')}<div class="prose">${paras(cut(b,'**Content:**','## 5.'))}</div></div></section>
  ${section('Selected work','From Analysis to Application.',`<div class="grid">${projects.slice(0,3).map(i=>project(i)).join('')}</div><div class="actions">${button('/projects/','Explore All Projects',true)}</div>`)}
  ${section('Specializations','Areas of Interest',tiles(interests.map(([,t,p])=>[t,p])),true)}
  ${section('Methods and platforms','Technical Toolkit',`<div class="grid">${tools.map(([,t,list])=>`<article class="card tile"><h3>${e(t)}</h3>${tags([...list.matchAll(/^- (.+)$/gm)].map(m=>m[1].trim()),20)}</article>`).join('')}</div>`)}
  <section class="band"><div class="wrap split">${heading('Education and learning','An Engineering Foundation.')}<div class="prose"><h3>University of Ibadan, Nigeria</h3><p>Industrial and Production Engineering. My education grounds my work in systems optimization, operations management and quantitative decision-making.</p><h3>Professional Development</h3><p>My training spans Google Data Analytics and Project Management, IBM IT Project Management, supply chain at Rutgers, Six Sigma, Tableau, SQL and applied data science. I also participated in 3MTT Nigeria as a Data Science Fellow.</p>${button('/certifications/','View My Certifications',true)}</div></div></section>
  <section class="section"><div class="wrap quote"><blockquote>“I don't approach data as numbers waiting to be analysed. I approach it as information waiting to answer a question, solve a problem, or reveal an opportunity.”</blockquote><p>Azeez Olawale</p></div></section>
  ${close('Have a Problem Worth Solving?','I welcome analytical challenges, collaborative projects and opportunities to apply data science to real-world problems.',button('/contact/','Get In Touch')+button(linkedin,'Connect on LinkedIn',true))}`;
};
const projectsPage=({briefs,projects})=>{
  const f=projects.find(p=>p.featured);
  return `${intro(briefs.projectpage,'Selected work')}${f?`<section class="wrap section featured"><div class="feature-art">${f.image?image(f.image,f.title+' preview'):art}</div><div class="feature-copy">${heading('Featured project',f.title)}<p>${e(f.description)}</p>${tags(f.skills)}${button(f.url,'View on GitHub')}</div></section>`:''}${section('Project directory','Explore the Work',directory('Projects',projects,project))}${close('Every Dataset Has a Story. Every Problem Has an Opportunity.','I’m continuously exploring new datasets and developing analytical solutions for business and industrial environments.',button(github,'Explore My GitHub')+button('/contact/','Let’s Collaborate',true))}`;
};
const experience=({briefs,roles})=>`${intro(briefs.experiencepage,'Career')}
  ${section('Career timeline','Professional Progression',`<ol class="timeline">${[...roles].reverse().map((r,i)=>`<li><a href="#role-${roles.length-i}"><span>${e(r.period)}</span><strong>${e(r.institution)}</strong><span>${e(r.title)}</span></a></li>`).join('')}</ol><div class="roles">${roles.map((r,i)=>`<article id="role-${i+1}" class="card role"><header><p class="eyebrow">${e(r.status)} · ${e(r.period)}</p><h3>${e(r.title)}</h3><p class="headline">${e(r.institution)}</p><p>${e(r.category)}</p></header><div class="prose">${paras(r.description)}</div><details class="responsibilities"><summary>Key Responsibilities &amp; Contributions</summary><div class="grid two">${r.responsibilities.map(g=>`<section><h4>${e(g.label)}</h4><ul>${g.items.map(x=>`<li>${e(x)}</li>`).join('')}</ul></section>`).join('')}</div></details>${tags(r.skills,4)}</article>`).join('')}</div>`)}
  ${section('Industry exposure','Working Across Data, AI and Operations',tiles([['Energy and Supply Chain','Procurement visibility, supplier coordination and operational decision support.'],['Artificial Intelligence','Data annotation, subject matter evaluation and data quality.'],['Data Analytics','Data preparation, interpretation and business reporting.']]),true)}
  ${close('The Journey Continues.','I’m interested in opportunities that bring analytical thinking to real operational and business problems.',button('/projects/','Explore My Projects')+button('/contact/','Let’s Connect',true))}`;
const preview=(file,title,alt,group='',css='')=>`<a href="${media(file)}" class="${css}" data-preview data-group="${group}" data-title="${e(title)}" data-alt="${e(alt)}" aria-label="${e('View '+title)}">${image(file,alt,false,true)}<span>${group?'View gallery':'View certificate'}</span></a>`;
const cert=i=>`<article class="card cert-card" ${attrs(i)}>${preview(i.image,i.title,i.title+' certificate','','certificate-thumb')}<div class="card-body"><p class="eyebrow">${e(i.category)}</p><h3>${e(i.title)}</h3><p class="issuer">${e(i.institution)}</p><p>${e(i.description)}</p>${tags(i.skills)}</div></article>`;
const certification=({briefs,certificates})=>`${hero('Professional development','Learning Never Stops.','A Commitment to Growth. A Foundation for Impact.',cut(briefs.certificationpage,'### Introduction','### Hero visual direction').replace(/^"|"$/g,''),`<div class="metrics"><span><b>${certificates.length}</b> certificates</span><span><b>${categories(certificates).length}</b> disciplines</span></div>`)}
  ${section('Credential gallery','My Certifications & Professional Development',directory('Certificates',certificates,cert))}
  ${section('A multidisciplinary foundation','One Learning Journey. Multiple Perspectives.',tiles([['Data & Intelligence','Use data to understand patterns and inform decisions.'],['Business & Operations','Connect analytical work to how organizations operate.'],['Process & Improvement','Investigate variation and improve processes.'],['Planning & Execution','Plan work, communicate clearly and coordinate delivery.']]),true)}
  ${close('Still Learning. Always Building.','Each credential marks a stage in a learning journey that continues in the problems I investigate and the work I build.',button('/projects/','Explore What I’ve Built'))}`;
const gallery=['WhatsApp Image 2026-11-20 at 3.57.17 PM.jpeg','WhatsApp Image 2026-11-20 at 3.57.18 PM.jpeg','WhatsApp Image 2026-11-20 at 3.57.19 PM.jpeg','IMG-20251127-WA0018.jpg'];
const hobbies=({briefs})=>{
  const b=briefs.hobbiespage;
  return `${intro(b,'Outside work')}
  <section class="wrap section split">${heading('On the pitch','Football — More Than a Game.')}<div class="prose">${paras(cut(b,'**Supporting text:**','Give this section'))}</div></section>
  <section class="band"><div class="wrap split story-photo">${image('Sportman Award.jpg','2025 Faculty of Technology Sportsman of the Year finalist recognition')}<div>${heading('University of Ibadan · Faculty of Technology · 2025','Finalist — Sportsman of the Year.')}<div class="prose">${paras(cut(b,'### Achievement Description','### IMAGE ASSET'))}</div></div></div></section>
  <section class="wrap section"><article class="editorial">${heading('University of Ibadan Interdepartmental Football Competition','Raising the Flag. Representing My Department.')}<div class="prose">${paras(cut(b,'### Content','### ARTICLE / MEDIA FEATURE'))}</div><p><strong>Sportlight Series (02)</strong> · UIMSA Press</p>${button('https://uimsapress.org/sportlight-series-02-azeez-paragon-olasupo/','Read the Article')}</article></section>
  ${section('Football during my NYSC journey','Still Competing. Still Representing.',`<div class="prose">${paras(cut(b.split('# 6. FOOTBALL STORY')[1],'### Content','### IMAGE GALLERY'))}</div><div class="gallery">${gallery.map((f,i)=>preview(f,'NYSC football photograph '+(i+1),'NYSC football gallery photograph '+(i+1),'nysc',i?'gallery-photo':'gallery-photo cover')).join('')}</div>`)}
  <section class="band"><div class="wrap split story-photo">${image('Full Planche.jfif','Reference photograph of an athlete performing a planche')}<div>${heading('Bodyweight training','Calisthenics — Strength Through Discipline.')}<p class="headline">Mastering Movement. Building Strength. Embracing Consistency.</p><div class="prose">${paras(cut(b.split('# 7. SECONDARY INTEREST')[1],'### Content','### IMAGE ASSET'))}</div></div></div></section>
  ${section('Lessons from sport','More Than Hobbies. Personal Values.',tiles([['Discipline','Consistent practice and preparation create room to improve.'],['Teamwork','Shared goals depend on collaboration, trust and communication.'],['Resilience','Recover from setbacks, keep focus and continue improving.'],['Continuous Improvement','Progress comes with patience and deliberate practice.']]))}
  ${close('There’s Always Room to Grow.','Sport gives me a place to practice the discipline, curiosity and teamwork I value in my professional life.',button('/contact/','Let’s Connect'))}`;
};
const contact=({briefs})=>`${intro(briefs.contactpage,'Get in touch')}
  <section class="wrap section contact-layout"><article class="card form-card">${heading('Contact form','Send Me a Message')}<p>Have a question, opportunity, or project you’d like to discuss? I’d be glad to hear from you.</p>
  <form id="contact-form" method="post" action="/api/contact"><div class="grid two"><label>First Name<input name="firstName" placeholder="Your first name" autocomplete="given-name" maxlength="80" required></label><label>Last Name<input name="lastName" placeholder="Your last name" autocomplete="family-name" maxlength="80" required></label></div><label>Email Address<input name="email" type="email" placeholder="you@example.com" autocomplete="email" maxlength="254" required></label><label>Subject<input name="subject" placeholder="What's this about?" maxlength="150" required></label><label>Message<textarea name="message" placeholder="Tell me a little about what you have in mind..." maxlength="5000" rows="6" required></textarea></label><div class="website-trap" aria-hidden="true"><label>Leave blank<input name="website" tabindex="-1" autocomplete="off"></label></div><button class="button" type="submit">${icon('send')}<span>Send Message</span></button><p data-form-status role="status" hidden></p></form>
  <div data-success hidden tabindex="-1"><h3>Message Sent Successfully!</h3><p>Thank you for reaching out. I’ll get back to you as soon as possible.</p><button class="button secondary" type="button" data-reset>Send another message</button></div></article>
  <aside class="contact-links">${tile('LinkedIn','Connect for professional opportunities and conversations.','layers',button(linkedin,'Connect on LinkedIn',true))}${tile('GitHub','Explore my repositories and practical analytical work.','chart',button(github,'Visit GitHub',true))}
  <article class="card tile">${icon('mail')}<h3>Email</h3><p>${link('mailto:'+email,email)}</p><button class="button secondary" data-copy="${email}" type="button">Copy email address</button><p data-copy-status role="status" hidden></p></article></aside></section>
  ${section('Availability','Open to the Right Conversation.','<p>Reach out about analytical projects, job opportunities, collaboration or conversations about data science, supply chain analytics and business intelligence.</p>',true)}`;
const layouts={'':home,projects:projectsPage,experience,certifications:certification,hobbies,contact};
function render({slug,label,description},context){
  const title=slug?label+' | Azeez Olawale':'Azeez Olawale | Data Scientist & Industrial Engineer';
  const url=context.site&&new URL(route(slug),context.site).href;
  const nav=pages.map(p=>`<a href="${route(p.slug)}" ${slug===p.slug?'aria-current="page"':''}>${p.label}</a>`).join('');
  const brand='<a class="brand" href="/"><span class="brand-mark" aria-hidden="true">AO</span><span>Azeez Olawale</span></a>';
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${e(title)}</title><meta name="description" content="${e(description)}"><meta property="og:title" content="${e(title)}"><meta property="og:description" content="${e(description)}"><meta property="og:type" content="website"><meta property="og:image" content="${context.site?new URL(media(portrait),context.site).href:media(portrait)}">${url?`<link rel="canonical" href="${e(url)}"><meta property="og:url" content="${e(url)}">`:''}<link rel="icon" href="/favicon.svg" type="image/svg+xml"><script src="/theme.js"></script><link rel="stylesheet" href="/styles.css"><script defer src="/site.js"></script></head><body class="page-${slug||'home'}"><a class="skip" href="#main">Skip to content</a>
  <header class="topbar"><div class="wrap navigation">${brand}<nav id="site-nav" aria-label="Main navigation">${nav}</nav><div class="nav-controls"><button class="icon-button theme" type="button" aria-label="Switch theme"><span data-moon>${icon('moon')}</span><span data-sun>${icon('sun')}</span></button><button class="icon-button menu" type="button" aria-label="Open navigation" aria-controls="site-nav" aria-expanded="false">${icon('menu')}</button></div></div></header>
  <main id="main">${layouts[slug](context)}</main><footer class="footer"><div class="wrap footer-grid"><div>${brand}<p>Data Scientist · Supply Chain Analytics · Industrial Engineer</p></div><nav aria-label="Footer navigation">${nav}</nav><div class="footer-links">${link(linkedin,'LinkedIn')}${link(github,'GitHub')}${link('mailto:'+email,email)}</div><small>© <span data-year>${new Date().getFullYear()}</span> Azeez Olawale</small></div></footer>
  <dialog class="lightbox" aria-labelledby="preview-title"><header><h2 id="preview-title"></h2><form method="dialog"><button class="icon-button" aria-label="Close preview">×</button></form></header><img alt=""><div class="lightbox-controls"><button type="button" data-prev>Previous</button><span data-position aria-live="polite"></span><button type="button" data-next>Next</button></div></dialog></body></html>`;
}

export { pages, render, portrait };
