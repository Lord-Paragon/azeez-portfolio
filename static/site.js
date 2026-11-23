
document.documentElement.classList.add('js');
document.body.classList.add('theme-ready');
const theme = document.querySelector('.theme');
const systemTheme = matchMedia('(prefers-color-scheme: dark)');
const isDark = () => (document.documentElement.dataset.theme || (systemTheme.matches ? 'dark' : 'light')) === 'dark';
function updateThemeLabel() {
  theme.setAttribute('aria-label', isDark() ? 'Switch to light mode' : 'Switch to dark mode');
}
updateThemeLabel();
systemTheme.addEventListener('change', updateThemeLabel);
theme.addEventListener('click', () => {
  const next = isDark() ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('portfolio-theme', next); } catch { /* Theme still works on this page. */ }
  updateThemeLabel();
});
document.querySelector('[data-year]').textContent = new Date().getFullYear();

const menu = document.querySelector('.menu');
const nav = document.querySelector('#site-nav');
function setMenu(open) {
  nav.toggleAttribute('data-open', open);
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
}
menu.addEventListener('click', () => setMenu(!nav.hasAttribute('data-open')));
nav.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
matchMedia('(max-width: 760px)').addEventListener('change', () => setMenu(false));
document.addEventListener('click', event => {
  if (!event.target.closest('.navigation')) setMenu(false);
  for (const entry of document.querySelectorAll('.more[open]')) {
    if (!entry.contains(event.target)) entry.open = false;
  }
});
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  for (const entry of document.querySelectorAll('.more[open]')) {
    if (entry.contains(document.activeElement)) entry.querySelector('summary').focus();
    entry.open = false;
  }
  if (nav.hasAttribute('data-open')) {
    setMenu(false);
    menu.focus();
  }
});
for (const entry of document.querySelectorAll('.more')) {
  const popover = entry.querySelector('.popover');
  let openedByHover = false;
  entry.addEventListener('pointerenter', event => {
    if (event.pointerType !== 'mouse' || entry.open) return;
    openedByHover = true;
    entry.open = true;
  });
  entry.addEventListener('pointerleave', () => {
    if (!openedByHover) return;
    entry.open = false;
    openedByHover = false;
  });
  entry.querySelector('summary').addEventListener('click', event => {
    if (!openedByHover) return;
    event.preventDefault();
    openedByHover = false;
  });
  entry.addEventListener('toggle', () => {
    if (!entry.open) return;
    for (const other of document.querySelectorAll('.more[open]')) if (other !== entry) other.open = false;
    popover.style.marginLeft = '';
    const rect = popover.getBoundingClientRect();
    const shift = Math.max(0, 12 - rect.left) - Math.max(0, rect.right - document.documentElement.clientWidth + 12);
    popover.style.marginLeft = shift + 'px';
  });
}

for (const directory of document.querySelectorAll('[data-directory]')) {
  const search = directory.querySelector('[data-search]');
  const buttons = [...directory.querySelectorAll('[data-filter]')];
  const cards = [...directory.querySelectorAll('[data-item]')];
  const count = directory.querySelector('[data-count]');
  const empty = directory.querySelector('[data-empty]');
  let category = '';
  function filter() {
    const words = search.value.toLowerCase().trim().split(/\s+/);
    let visible = 0;
    for (const card of cards) {
      card.hidden = Boolean(category && category !== card.dataset.category) ||
        !words.every(word => card.dataset.searchText.toLowerCase().includes(word));
      if (!card.hidden) visible++;
    }
    count.textContent = `${visible} of ${cards.length} ${directory.dataset.directory}`;
    empty.hidden = visible > 0;
  }
  search.addEventListener('input', filter);
  for (const button of buttons) button.addEventListener('click', () => {
    category = button.dataset.filter;
    for (const other of buttons) other.setAttribute('aria-pressed', String(other === button));
    filter();
  });
}
const dialog = document.querySelector('.lightbox');
const picture = dialog.querySelector('img');
const controls = dialog.querySelector('.lightbox-controls');
const position = dialog.querySelector('[data-position]');
const previews = [...document.querySelectorAll('[data-preview]')];
let group = [], index = 0, opener;
function showPreview(step = 0) {
  index = (index + step + group.length) % group.length;
  const item = group[index];
  dialog.querySelector('h2').textContent = item.dataset.title;
  picture.src = item.href;
  picture.alt = item.dataset.alt;
  controls.hidden = group.length < 2;
  position.textContent = `${index + 1} of ${group.length}`;
}
for (const item of previews) item.addEventListener('click', event => {
  if (!dialog.showModal || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  group = item.dataset.group ? previews.filter(p => p.dataset.group === item.dataset.group) : [item];
  index = group.indexOf(item);
  opener = item;
  showPreview();
  dialog.showModal();
});
dialog.querySelector('[data-prev]').addEventListener('click', () => showPreview(-1));
dialog.querySelector('[data-next]').addEventListener('click', () => showPreview(1));
dialog.addEventListener('keydown', event => {
  const step = {ArrowLeft: -1, ArrowRight: 1}[event.key];
  if (step && group.length > 1) { event.preventDefault(); showPreview(step); }
});
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
dialog.addEventListener('close', () => opener?.focus());

const copy = document.querySelector('[data-copy]');
copy?.addEventListener('click', async () => {
  const status = document.querySelector('[data-copy-status]');
  status.hidden = false;
  try {
    await navigator.clipboard.writeText(copy.dataset.copy);
    status.textContent = 'Email address copied.';
  } catch {
    status.textContent = `Copy this address: ${copy.dataset.copy}`;
  }
});

const form = document.querySelector('#contact-form');
if (form) {
  const send = form.querySelector('button');
  const label = send.querySelector('span');
  const status = form.querySelector('[data-form-status]');
  const success = document.querySelector('[data-success]');
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (send.disabled || !form.reportValidity()) return;
    send.disabled = true;
    label.textContent = 'Sending…';
    status.hidden = true;
    try {
      const body = new URLSearchParams(new FormData(form));
      const response = await fetch(form.action, {method: 'POST', body, headers: {Accept: 'application/json'}});
      const result = await response.json();
      if (!response.ok || result.ok !== true) throw new Error(result.message || '');
      form.reset();
      form.hidden = true;
      success.hidden = false;
      success.focus();
    } catch (error) {
      status.hidden = false;
      status.textContent = error.message && error instanceof Error && !['SyntaxError','TypeError'].includes(error.name)
        ? error.message : 'Your message could not be sent. Please try again or use the email address on this page.';
    } finally {
      label.textContent = 'Send Message';
      send.disabled = false;
    }
  });
  success.querySelector('[data-reset]').addEventListener('click', () => {
    success.hidden = true;
    form.hidden = false;
    form.elements.firstName.focus();
  });
}
