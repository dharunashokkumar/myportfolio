// Run from the repository root: node scripts/check-site.cjs
// Reads files only. Generates nothing, changes nothing, needs no dependencies.
// Exits 1 on any error. Warnings are printed but don't fail the run.
// Run it before every commit.
'use strict';
const fs = require('node:fs');
const path = require('node:path');

const root = process.cwd();
const errors = [];
const warnings = [];
const err = (file, msg) => errors.push(`${file}: ${msg}`);
const warn = (file, msg) => warnings.push(`${file}: ${msg}`);
const read = (f) => fs.readFileSync(path.join(root, f), 'utf8');
const exists = (f) => fs.existsSync(path.join(root, f));
const ORIGIN = 'https://dharun.dev';

// ---- which pages exist -------------------------------------------------------
const list = (dir) => (exists(dir) ? fs.readdirSync(path.join(root, dir)).filter((f) => f.endsWith('.html')).map((f) => (dir === '.' ? f : `${dir}/${f}`)) : []);
const allPages = [...list('.'), ...list('projects'), ...list('reflections'), ...list('explainers')];
const NOT_INDEXED = new Set(['404.html', 'vault.html', 'galley.html']);
const pages = allPages.filter((f) => !NOT_INDEXED.has(f));
const urlOf = (f) => `${ORIGIN}/${f === 'index.html' ? '' : f.replace(/\.html$/, '')}`;

// ---- sitemap ------------------------------------------------------------------
const sitemap = read('sitemap.xml');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
for (const f of pages) if (!locs.includes(urlOf(f))) err(f, 'missing from sitemap.xml');
for (const loc of locs) {
  const rel = loc.replace(ORIGIN, '').replace(/^\//, '');
  const file = rel === '' ? 'index.html' : `${rel}.html`;
  if (!exists(file)) err('sitemap.xml', `${loc} has no file`);
  if (/galley|vault|design-system/.test(loc)) err('sitemap.xml', `${loc} should not be listed`);
}
for (const m of sitemap.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)) {
  if (new Date(m[1]) > new Date(Date.now() + 864e5)) err('sitemap.xml', `lastmod ${m[1]} is in the future`);
}

// ---- per-page head checks -----------------------------------------------------
const STYLES = ['fonts.css', 'base.css', 'layout.css', 'components.css', 'responsive.css', 'modules.css'];
const titles = new Map();
const descs = new Map();
const attr = (html, re) => (html.match(re) || [])[1];

for (const f of allPages) {
  const html = read(f);
  const head = (html.match(/<head>([\s\S]*?)<\/head>/) || [])[1] || '';
  const dir = path.posix.dirname(f);

  // the six global stylesheets, in order, after the font preload
  const sheets = [...head.matchAll(/<link rel="stylesheet"[^>]*href="([^"]+)"/g)].map((m) => m[1]);
  const globals = sheets.filter((h) => STYLES.includes(path.posix.basename(h)));
  if (globals.map((h) => path.posix.basename(h)).join() !== STYLES.join()) err(f, `global stylesheets missing or out of order: ${globals.join(', ')}`);
  const firstGlobal = sheets.findIndex((h) => STYLES.includes(path.posix.basename(h)));
  sheets.forEach((h, i) => { if (!STYLES.includes(path.posix.basename(h)) && i < firstGlobal) err(f, `${h} is linked before the global stylesheets`); });
  const preload = head.indexOf('merriweather-latin-normal.woff2');
  if (preload < 0) err(f, 'missing the roman font preload');
  else if (preload > head.indexOf('css/fonts.css')) err(f, 'font preload should come before the stylesheets');
  if (/@import\s+(url\(|["'])/.test(head)) err(f, '@import in <head>');

  // json-ld must parse
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch (e) { err(f, `JSON-LD does not parse: ${e.message}`); }
  }
  for (const m of html.matchAll(/<script type="speculationrules">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch (e) { err(f, `speculation rules do not parse: ${e.message}`); }
  }

  // local references resolve
  const markup = html.replace(/<script(?![^>]*\bsrc=)[^>]*>[\s\S]*?<\/script>/g, '').replace(/<!--[\s\S]*?-->/g, '');
  for (const m of markup.matchAll(/(?:src|href)="([^"#?]+)(?:[#?][^"]*)?"/g)) {
    const ref = m[1];
    if (/^(https?:|mailto:|tel:|javascript:|data:|\/\/)/.test(ref) || ref === '') continue;
    let target = ref.startsWith('/') ? ref.slice(1) : path.posix.normalize(path.posix.join(dir, ref));
    if (target === '' || target === '.') target = 'index.html';
    if (target.endsWith('/')) target += 'index.html';
    // pages functions are routes too: functions/api/science.js serves /api/science.
    const candidates = [target, `${target}.html`, `${target}/index.html`, `functions/${target}.js`];
    if (!candidates.some(exists)) err(f, `broken local reference: ${ref}`);
  }
  for (const m of head.matchAll(/<meta (?:property="og:image"|name="twitter:image") content="([^"]+)"/g)) {
    if (m[1].startsWith(ORIGIN) && !exists(m[1].slice(ORIGIN.length + 1))) err(f, `share image does not exist: ${m[1]}`);
  }

  if (NOT_INDEXED.has(f)) continue;

  const canon = [...head.matchAll(/<link rel="canonical" href="([^"]+)"/g)].map((m) => m[1]);
  if (canon.length !== 1) err(f, `expected one canonical, found ${canon.length}`);
  else if (canon[0] !== urlOf(f) && !(f === 'index.html' && canon[0] === `${ORIGIN}/`)) err(f, `canonical ${canon[0]} should be ${urlOf(f)}`);
  for (const tag of ['og:title', 'og:description', 'og:image', 'og:url']) if (!head.includes(`property="${tag}"`)) err(f, `missing ${tag}`);
  if (!head.includes('name="twitter:card"')) err(f, 'missing twitter:card');
  if (!head.includes('href="https://dharun.dev/feed.xml"')) err(f, 'missing the feed <link rel="alternate">');
  if (!head.includes('href="https://dharun.dev/llms.txt"')) err(f, 'missing the llms.txt <link rel="alternate">');
  if (/^(reflections|explainers)\//.test(f)) {
    if (attr(head, /<meta property="og:type" content="([^"]+)"/) !== 'article') err(f, 'og:type should be article');
    if (!head.includes('article:published_time')) err(f, 'missing article:published_time');
  }
  if (/^(projects|reflections|explainers)\//.test(f) && !html.includes('"BreadcrumbList"')) err(f, 'missing breadcrumbs');

  const title = attr(head, /<title>([^<]*)<\/title>/) || '';
  const desc = attr(head, /<meta name="description" content="([^"]*)"/) || '';
  if (!title) err(f, 'missing <title>');
  if (!desc) err(f, 'missing meta description');
  if (titles.has(title)) err(f, `title duplicates ${titles.get(title)}`); else titles.set(title, f);
  if (descs.has(desc)) err(f, `description duplicates ${descs.get(desc)}`); else descs.set(desc, f);
  if (title.length > 60) warn(f, `title is ${title.length} characters (aim for 60)`);
  if (desc.length > 160) warn(f, `description is ${desc.length} characters (aim for 160)`);
  if (/[A-Z]/.test(title.replace(/Dharun Ashokkumar/g, ''))) warn(f, `uppercase in title: ${title}`);

  // visible body copy is authored lowercase (warn only)
  const body = (html.match(/<div id="content"[\s\S]*|<main id="content"[\s\S]*|<article id="content"[\s\S]*/) || [''])[0]
    .replace(/<(script|style|pre|code)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/g, ' ');
  const caps = body.match(/\b[a-z]*[A-Z][A-Za-z]*\b/g);
  if (caps && caps.length) warn(f, `uppercase in visible copy: ${[...new Set(caps)].slice(0, 6).join(', ')}${caps.length > 6 ? ' …' : ''}`);
}

// ---- reflections, explainers, projects are listed everywhere they should be ---
const llms = read('llms.txt');
const llmsFull = read('llms-full.txt');
const feed = read('feed.xml');
const reflIndex = read('reflections.html');
const explIndex = exists('explainers.html') ? read('explainers.html') : '';
const projIndex = read('projects.html');
for (const f of pages.filter((p) => p.startsWith('reflections/'))) {
  const slug = f.slice(0, -5);
  const url = `${ORIGIN}/${slug}`;
  if (!reflIndex.includes(`href="${slug}"`) && !reflIndex.includes(`href="/${slug}"`)) err(f, 'not listed on reflections.html');
  if (!feed.includes(`<id>${url}</id>`)) err(f, 'not in feed.xml');
  if (!llms.includes(url)) err(f, 'not in llms.txt');
  if (!llmsFull.includes(url)) err(f, 'not in llms-full.txt');
}
for (const f of pages.filter((p) => p.startsWith('explainers/'))) {
  const slug = f.slice(0, -5);
  const url = `${ORIGIN}/${slug}`;
  if (!explIndex.includes(`href="/${slug}"`)) err(f, 'not listed on explainers.html');
  if (!feed.includes(`<id>${url}</id>`)) err(f, 'not in feed.xml');
  if (!llms.includes(url)) err(f, 'not in llms.txt');
  if (!llmsFull.includes(url)) err(f, 'not in llms-full.txt');
  if (!exists(`${slug}.txt`)) err(f, `missing its plain-text twin ${slug}.txt`);
  if (!read(f).includes('class="cite-as"')) err(f, 'missing the cite-as line');
}
for (const f of pages.filter((p) => p.startsWith('projects/'))) {
  const slug = f.slice(0, -5);
  const url = `${ORIGIN}/${slug}`;
  if (!projIndex.includes(`href="/${slug}"`)) err(f, 'not listed on projects.html');
  if (!llms.includes(url)) err(f, 'not in llms.txt');
  if (!llmsFull.includes(url)) err(f, 'not in llms-full.txt');
}

// ---- feeds --------------------------------------------------------------------
for (const name of ['feed.xml', 'changelog.xml']) {
  if (!exists(name)) { err(name, 'missing'); continue; }
  const xml = read(name);
  const feedUpdated = (xml.match(/<feed[\s\S]*?<updated>([^<]+)<\/updated>/) || [])[1];
  const entryUpdated = [...xml.matchAll(/<entry>[\s\S]*?<updated>([^<]+)<\/updated>[\s\S]*?<\/entry>/g)].map((m) => m[1]).sort().reverse();
  if (entryUpdated.length && feedUpdated !== entryUpdated[0]) err(name, `<updated> ${feedUpdated} should equal the newest entry's ${entryUpdated[0]}`);
  const ids = [...xml.matchAll(/<id>([^<]+)<\/id>/g)].map((m) => m[1]);
  if (new Set(ids).size !== ids.length) err(name, 'duplicate <id>');
}
const lastUpdated = (llmsFull.match(/^Last updated: (\S+)/m) || [])[1];
if (!lastUpdated) err('llms-full.txt', 'missing "Last updated:"');

// ---- banned strings outside design-system/ and _plan/ ------------------------
const BANNED = [
  [/dharunashokkumar\.com/i, 'the retired domain'],
  [/G-DGWHDZMCF6/, 'the removed analytics tag'],
  [/googletagmanager|gtag\(/, 'google analytics (removed november 2026)'],
  [/lpulabs|lpu labs/i, 'lpu labs (now d\'s labs)'],
  [/linux foundation member|member of the linux foundation/i, 'the linux foundation membership claim'],
  [/dharuna457@gmail/i, 'the old email address'],
  [/@import\s+(url\(|["'])/, 'an @import statement'],
];
const ALLOW = { lpulabs: ['_redirects'] };
const SKIP_DIRS = new Set(['.git', 'design-system', '_plan', 'node_modules', 'galley']);
const TEXT = /\.(html|css|js|cjs|txt|xml|json|md|toml)$|^_(headers|redirects)$/;
function walk(dir) {
  for (const ent of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
    const rel = dir === '.' ? ent.name : `${dir}/${ent.name}`;
    if (ent.isDirectory()) { if (!SKIP_DIRS.has(ent.name)) walk(rel); continue; }
    if (!TEXT.test(ent.name) || rel === 'CLAUDE.md' || rel === 'README.md' || rel === 'scripts/check-site.cjs') continue;
    const text = read(rel);
    for (const [re, what] of BANNED) {
      if (!re.test(text)) continue;
      if (re.source.startsWith('lpulabs') && ALLOW.lpulabs.includes(rel)) continue;
      err(rel, `contains ${what}`);
    }
  }
}
walk('.');

// ---- report -------------------------------------------------------------------
for (const w of warnings) console.log(`warn  ${w}`);
for (const e of errors) console.error(`FAIL  ${e}`);
console.log(`\n${allPages.length} pages checked: ${errors.length} errors, ${warnings.length} warnings`);
process.exit(errors.length ? 1 : 0);
