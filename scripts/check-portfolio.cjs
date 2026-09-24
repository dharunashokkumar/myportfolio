// Run from the repository root: node scripts/check-portfolio.cjs
// Requires playwright-core (or PLAYWRIGHT_CORE_PATH pointing to an installed copy).
// CHROMIUM_PATH optionally selects an existing Chromium executable.
// Screenshots go to the operating system's temporary directory.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_CORE_PATH || 'playwright-core');
const root = process.cwd();
const types = {'.html':'text/html', '.css':'text/css', '.js':'text/javascript', '.webp':'image/webp', '.png':'image/png', '.svg':'image/svg+xml', '.woff2':'font/woff2'};
const server = http.createServer((req, res) => {
  const route = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  let file = path.resolve(root, '.' + (route === '/' ? '/index.html' : route));
  if (!file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
  if (!path.extname(file)) file += '.html';
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404).end(); return; }
  res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
  res.end(fs.readFileSync(file));
});

(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const origin = `http://127.0.0.1:${server.address().port}`;
  let browser;
  const failures = [];
  try {
    browser = await chromium.launch({headless: true, executablePath: process.env.CHROMIUM_PATH});
    const context = await browser.newContext();
    await context.route('**/*', route => route.request().url().startsWith(origin) ? route.continue() : route.abort());
    const page = await context.newPage();
    page.on('pageerror', error => failures.push(error.message));
    const pages = ['/', '/about', '/projects', '/contact', '/resume', '/opensource', '/reflections', ...fs.readdirSync('projects').filter(p => p.endsWith('.html')).map(p => '/projects/' + p), ...fs.readdirSync('reflections').filter(p => p.endsWith('.html')).map(p => '/reflections/' + p)];
    for (const width of [320, 768, 1280]) {
      await page.setViewportSize({width, height: 900});
      for (const url of pages) {
        await page.goto(origin + url);
        await page.evaluate(() => document.fonts.ready);
        const info = await page.evaluate(() => {
          const ids = [...document.querySelectorAll('[id]')].map(el => el.id);
          const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
          const bodyText = document.querySelector('#content p');
          const overflow = document.documentElement.scrollWidth > innerWidth + 1;
          const offenders = overflow ? [...document.querySelectorAll('body *')].filter(el => el.getBoundingClientRect().right > innerWidth + 1).slice(0, 5).map(el => el.tagName + '.' + el.className) : [];
          document.querySelectorAll('script[type="application/ld+json"]').forEach(el => JSON.parse(el.textContent));
          return {duplicates, overflow, offenders, size: bodyText && getComputedStyle(bodyText).fontSize};
        });
        if (info.overflow || info.duplicates.length) failures.push({url, width, ...info});
      }
    }
    await page.goto(origin + '/');
    const homeLinks = await page.locator('#content a').evaluateAll(elements => elements.map(el => el.getAttribute('href')).filter(href => !/^(https?:|mailto:)/.test(href)));
    for (const href of homeLinks) {
      const url = new URL(href, origin);
      const response = await context.request.get(url.href);
      assert.equal(response.status(), 200, href);
      if (url.hash) assert.ok((await response.text()).includes(`id="${url.hash.slice(1)}"`), 'missing anchor: ' + href);
    }
    await page.locator('.map-node summary').first().focus();
    await page.keyboard.press('Enter');
    assert.equal(await page.locator('.map-node').first().getAttribute('open'), '');
    await page.keyboard.press('Enter');
    assert.equal(await page.locator('.map-node').first().getAttribute('open'), null);
    await page.setViewportSize({width: 320, height: 900});
    await page.locator('.map-node').evaluateAll(nodes => nodes.forEach(node => node.open = true));
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), true, 'expanded map fits mobile');
    assert.ok(await page.locator('#intro-title').evaluate(el => parseFloat(getComputedStyle(el).fontSize)) >= 28, 'hero hierarchy');
    assert.equal(await page.locator('.home-intro > p').nth(1).evaluate(el => getComputedStyle(el).fontSize), '16px');
    await page.goto(origin + '/projects/open-clearing-engine');
    assert.equal(await page.locator('[data-previous]').isDisabled(), true);
    for (let i = 0; i < 3; i++) await page.locator('[data-next]').click();
    assert.match(await page.locator('[data-stage]').innerText(), /210 units gross → 60 units payable/);
    assert.equal(await page.locator('[data-next]').isDisabled(), true);
    await page.locator('[data-previous]').click();
    assert.match(await page.locator('[data-stage]').innerText(), /pays 60/);
    await page.locator('[data-reset]').click();
    assert.match(await page.locator('[data-stage]').innerText(), /step 1 of 4/);
    await page.selectOption('#clearing-scenario', 'balanced');
    for (let i = 0; i < 3; i++) await page.locator('[data-next]').click();
    assert.match(await page.locator('[data-stage]').innerText(), /300 units gross → 0 units payable/);
    assert.match(await page.locator('[data-stage]').innerText(), /no cash transfers remain/);
    await page.selectOption('#clearing-scenario', 'uneven');
    assert.match(await page.locator('[data-stage]').innerText(), /step 1 of 4/);
    const noJS = await browser.newContext({javaScriptEnabled: false});
    await noJS.route('**/*', route => route.request().url().startsWith(origin) ? route.continue() : route.abort());
    const fallback = await noJS.newPage();
    await fallback.goto(origin + '/projects/open-clearing-engine');
    assert.match(await fallback.locator('[data-stage]').innerText(), /210 units gross → 60 units payable/);
    assert.equal(await fallback.locator('[data-next]').isVisible(), false);
    await noJS.close();
    await page.goto(origin + '/');
    await page.setViewportSize({width: 1280, height: 900});
    await page.locator('.portrait-note img').scrollIntoViewIfNeeded();
    await page.waitForFunction(() => [...document.images].every(img => img.complete && img.naturalWidth > 0));
    await page.evaluate(() => scrollTo(0, 0));
    await page.screenshot({path: path.join(os.tmpdir(), 'portfolio-home-desktop.png'), fullPage: true});
    await page.setViewportSize({width: 390, height: 844});
    await page.screenshot({path: path.join(os.tmpdir(), 'portfolio-home-mobile.png'), fullPage: true});
    await page.goto(origin + '/projects/open-clearing-engine');
    await page.locator('#clearing-demo').screenshot({path: path.join(os.tmpdir(), 'portfolio-clearing-demo.png')});
    console.log(JSON.stringify({pages: pages.length, widths:[320,768,1280], interactionChecks:'passed', homeLinks:homeLinks.length, failures}, null, 2));
    if (failures.length) process.exitCode = 1;
  } finally {
    if (browser) await browser.close();
    server.close();
  }
})().catch(error => { console.error(error); server.close(); process.exitCode = 1; });
