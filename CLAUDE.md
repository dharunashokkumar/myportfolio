# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static personal portfolio website for **dharun.dev**. Pure HTML, CSS, and vanilla JavaScript — no build tools, no frameworks, no package manager, no dependencies.

> Domain note: `dharunashokkumar.com` is the previous domain (retired July 2026). Never reference it anywhere on the site — including the former `archive.dharunashokkumar.com` subdomain, whose links were deliberately removed in July 2026.

## Development

There is no build step, linter, or test suite. Three ways to develop:

- Open any `.html` file directly in a browser.
- Use VS Code **Live Server** (port `5501`, set in `.vscode/settings.json`).
- Serve the root with any static server (e.g. `python -m http.server 5501`).

Deployment is whatever pushes the repo root to `dharun.dev` (treat the working tree as the deployable artifact — no transform happens).

## Architecture

### Top-level pages (site sections)
`index.html`, `projects.html`, `explainers.html`, `reflections.html`, `resume.html`, `about.html`, `contact.html`, `opensource.html`, `homelab.html`, `now.html`, `uses.html`, `colophon.html`, `changelog.html`, `galley.html`, `vault.html` (behind a riddle), `404.html`.

The header nav stays at six items (home, projects, reflections, resume, about, contact). Everything else is reached from the home page's "around the site" list, the footer, and in-page links.

- The PDF preview/download (embedded `<object>` + download buttons) lives in a collapsible "document & download" section inside `resume.html`; there is no separate preview page.
- `reflections.html` is the index page: a list of post links (`.reflect-list`). Individual reflections are standalone pages in `reflections/` (e.g. `clearing-engine.html`), each using the `.post` container like `projects/*.html`. **Adding a reflection:** create `reflections/<slug>.html`, add a `<li>` to the `.reflect-list` on `reflections.html`, add a `blogPost` entry to that page's JSON-LD, and add the URL to `sitemap.xml`. Then see **AI & machine-readable surface** below for the feed and llms steps, add a line to the changelog, and give it a "read next" `nav.related` block and a share image.
- `explainers.html` indexes `explainers/`: posts that answer one question someone would type, with a worked example from a real project. Schema `TechArticle`, `og:type` article. **Adding an explainer:** create `explainers/<slug>.html` (first paragraph `p.answer` is the complete, quotable answer; a demo or ASCII diagram; "where it breaks"; margin notes; `nav.related`; the `p.cite-as` line), write its plain-text twin `explainers/<slug>.txt` and link it with `<link rel="alternate" type="text/plain">`, add it to `explainers.html`, `feed.xml` (bump the feed `<updated>`), `sitemap.xml`, both llms files, `txt/explainers.txt`, `txt/index.json` and the changelog.
- Margin notes (`css/notes.css`, post pages only): `<span class="sidenote-ref" aria-hidden="true"></span><small class="sidenote"><span class="note-kind">note</span> …</small>` right after the sentence, inside the paragraph. Kinds are told apart by the label only: `note`, `later, yyyy-mm-dd` (an addition after publishing — bump `dateModified` and show an "updated" date), `from the code`.
- `projects/` holds individual project write-ups as standalone HTML pages plus `projects/asset/thumbs/` (one SVG per card on `projects.html`). `projects/ds-labs.html` (D's Labs, https://labs.dharun.dev) is the main project and is first everywhere: home work item 01, the first card, first in both llms files. The old lab-platform URL 301s to it via `_redirects`; never mention the old name on the site. **Adding a project:** the page, a card + `ItemList` entry on `projects.html`, `sitemap.xml`, both llms files, `txt/projects.txt`, `txt/index.json`, a share image and a changelog line.
- Standing pages to keep fresh: `now.html` (first of each month — update the home page's "right now" excerpt too), `changelog.html` + `changelog.xml` (every ship; the home page shows the latest three lines), `homelab.html` incidents (within a day of an outage). Every one shows a visible "updated" date.

### `galley/` — interactive experiments
Standalone single-file experiments (CPU architecture explorer, shader wallpapers, organic loaders, htop widget, year-in-pixels, satisfying buttons, etc.). Each is self-contained (its own inline CSS/JS) and is linked from `galley.html`. **Adding a new experiment:** drop the file in `galley/` and add a link card on `galley.html`. They are not auto-discovered.

> Historical note: this directory used to be called `explorer/`; it was renamed to `galley/` in commit `529ec58`. If you see old references, update them.

### Shared front-end assets
- The shared system is six stylesheets, **linked individually from every page's `<head>` in this exact order** (Merriweather, lowercase text-transform globally on `<html>`):
  - `css/fonts.css` — the eight self-hosted Merriweather `@font-face` blocks. Nothing else.
  - `css/base.css` — reset, html/body, typography, headings/lists/blockquote, `#container`/header/footer/nav.
  - `css/layout.css` — images, `.video*`, `div.media` / `.item` / `.item-halfwidth`, captions.
  - `css/components.css` — links, `.social-links`, `.nav-grid`, header nav, archive pages & `.thumblist`, single-post meta.
  - `css/responsive.css` — the global `@media screen` breakpoints and the `@media print` block.
  - `css/modules.css` — `.featured_post`, wiki/about, contact-grid, timeline, project-card components, `#secret-lock`, vault, top-slider (each keeps its own embedded media queries).
  - **Cascade order is load-bearing** — the partials are sequential slices of the old monolith. Link order *is* cascade order, so keep these six `<link>` tags in this order and keep any page-scoped sheet after them.
  - **Never reintroduce `@import`.** There used to be a `css/main.css` that did nothing but `@import` the partials, and `base.css` in turn `@import`-ed Google Fonts. `@import` is invisible to the browser's preload scanner, so each file was only discovered once its parent had been fetched and parsed: `html → main.css → base.css → googleapis css → gstatic woff2`. That was five serial render-blocking round trips to deliver ~10 KB of CSS, and it was the single largest cost in the page's load. `main.css` has been deleted; add new partials as another `<link>`, not an `@import`.
- Page-scoped stylesheets (each linked only from its one page, and always *after* the six above): `css/resume.css` (resume.html — layout for the collapsible resume sections, scoped to `.resume-page`; uses the global Merriweather/greyscale system, no separate fonts), `css/opensource.css` (opensource.html). After those comes `css/editorial.css`, the reading layer that almost every page links (not the galley); it also holds the shared demo, changelog, shell, riddle and related-links styles. `css/notes.css` (margin notes) is linked after it on post pages only.
- `js/` — small deferred scripts, each loaded only by the pages that use it, and every one leaves a readable page with JavaScript off: `shell.js` (the in-page terminal; every page), `riddle.js` (the home-page lock), `steps-demo.js` (d's labs), `clearing-demo.js`, `vm-demo.js`, `cost-ticket.js` (rates copied from the backtester's verified schedule, dated on the page), `asof-demo.js`. Write output with `textContent`, never `innerHTML` with user input.
- `fonts/` — the four self-hosted Merriweather `.woff2` files (latin and latin-ext, roman and italic). They are Google's own files, unmodified; `css/fonts.css` is Google's CSS with the URLs rewritten, so rendering is identical. Only latin and latin-ext are kept — no page that loads the global system contains a character in the cyrillic or vietnamese ranges. `_headers` caches them `immutable` for a year, so a different cut must land under a **new filename**. Every page also `<link rel="preload">`s `merriweather-latin-normal.woff2`, the roman body face.
- `img/` — site imagery (`main.webp`, `lpulogo.webp` (the university's logo, used on the resume), still-life PNGs, etc.). `main.webp` is 1024×1024 and must stay that size: it is the home page's `og:image`/`twitter:image` and those `og:image:width`/`height` tags say 1024. Every other indexable page has its own 1200×630 share image in `img/og/<path-with-dashes>.png` (white, Merriweather, the title, one line of detail, the domain), made once by a throwaway script and committed — nothing is generated at deploy. (Lighthouse calls it oversized for its 371px slot; that assumes a 1× display and is wrong for the 2–3× phones that actually load it.) `img/lpulogo.jpeg` is kept only because the read-only `design-system/` snapshots reference it — live pages use `img/lpulogo.webp`.
- `files/dharun-ashokkumar-resume.pdf` — the downloadable resume.
- `favicon/favicon.png` — referenced from every page's `<head>`.

### `design-system/` — canonical brand bundle (read before any visual change)
This is a **Claude Design** handoff bundle. Treat it as ground truth for visual decisions.

- `design-system/README.md` — handoff bundle overview ("read this first").
- `design-system/chats/chat1.md`, `chat2.md`, `chat3.md` — original design conversations explaining intent. Skim before making non-obvious visual choices.
- `design-system/project/README.md` — full visual + content rules (colors, type, spacing, voice, iconography).
- `design-system/project/SKILL.md` — fast-orientation summary; matches a user-invocable skill named `dharun-ashokkumar-design`.
- `design-system/project/colors_and_type.css` — design tokens (CSS custom properties). Import this first; don't reinvent the scale.
- `design-system/project/reference/` — read-only snapshot of upstream pages. **Do not edit** — treat as ground truth.
- `design-system/project/ui_kits/portfolio/` — JSX recreation of the components (`App.jsx`, `Chrome.jsx`, `Pages.jsx`, `Icons.jsx`, `kit.css`). Clone components from here rather than rebuilding nav/header/thumblist/infobox/contact-grid/top-slider.
- `design-system/project/assets/`, `bundle/`, `preview/` — supporting assets and a self-contained preview build.

## Design system rules (enforced summary)

- **Greyscale only.** The only chromatic accents allowed are `#fe9` (highlighter yellow, `.highlight`) and `#fb0` (gold, `.featured_post`). **No blue, green, red, or gradient anywhere.**
- **No emoji** in rendered copy. Use Unicode arrows (`→`, `↗`, `↑`, `▼`/`▲`) and the inline SVGs in `design-system/project/ui_kits/portfolio/Icons.jsx`.
- `border-radius` only at `0`, `8px` (thumbnail image), `10px` (thumblist tile / drawer bottom), or `50%` (lock badge). Use `0` by default.
- **Animation: almost none.** Drawer `max-height 0.4s`, footer fade `0.6s`, link hover `0.3s`, thumblist arrow `0.2s`. **No shimmer, parallax, or scroll-driven effects.**
- One shadow exists site-wide: `0 2px 8px rgba(0,0,0,.08)` on the top-slider drawer only.
- Body ink is `#555`, never `#000` or `#333` (those are reserved for `:active` state and infobox labels).
- Every page, including `resume.html`, uses the global system (Merriweather, greyscale, lowercase). There is no per-page font escape hatch — don't introduce one.
- **Voice:** first-person, lowercase, contractions ok, short sentences, no marketing verbs.

## Conventions

- All visible text is lowercase (enforced by `text-transform: lowercase` on `<html>`). Author copy in lowercase; don't rely on CSS to fix capitalization (it won't catch alt text, titles, or JSON-LD).
- Every page shares the same header/nav, and carries the same `<head>` block: a `preload` for the roman body font followed by the six global stylesheet `<link>`s in cascade order. Copy it verbatim from an existing page — **new pages must include it manually**, with the right relative prefix (`css/…` at the root, `../css/…` under `projects/` and `reflections/`).
- Analytics is **Cloudflare Web Analytics**, enabled in the Pages project (Metrics → Web Analytics), which injects its beacon at the edge — there is no analytics snippet in the HTML. Google Analytics (`G-6EGD879ZLL`, and before it `G-DGWHDZMCF6`) was removed from every page in November 2026 and must not be reintroduced.
- Every indexable page also carries a `<script type="speculationrules">` block (prerender same-origin links on hover; excludes `/vault`, `/galley*`, `/txt/*`, `*.txt`, `*.xml`, `/files/*`), feed `<link rel="alternate">`s for `feed.xml` and `changelog.xml`, `nav.related` "read next" links on posts and projects, and the footer line `terminal · curl -L dharun.dev · colophon`. Copy them from an existing page.
- Structured data: the one full `Person` node (`@id` `https://dharun.dev/#person`) lives on `index.html`. Every other page refers to it with `{"@id": "https://dharun.dev/#person"}` — never a second, slightly different copy. No FAQ markup unless the questions are visible on the page. Positioning sentence, used for the Person description, llms files and bios: *dharun ashokkumar builds systems software in rust, go and c, and runs d's labs: browser lab environments served from a server at home.* He is described as an open-source contributor — never a Linux Foundation member or maintainer. The LFX-funded trip to Mumbai (June 2026) is real and stays.
- Contact: visible copy uses `me@dharun.dev` and `dharun.dak@gmail.com`.
- SEO: structured data (Schema.org JSON-LD), Open Graph, and Twitter Card meta are present on key pages; `sitemap.xml` and `robots.txt` live at root. **New content pages (projects, reflections, explainers) must be added to `sitemap.xml` manually**, with a real `lastmod`. Titles follow `<what the page is> · dharun ashokkumar`.
- **Run `node scripts/check-site.cjs` before every commit.** It reads files only (no dependencies) and fails on: pages missing from the sitemap, missing/out-of-order stylesheets or font preload, broken local references and share images, JSON-LD that doesn't parse, missing canonical/OG/Twitter/feed tags, posts or projects missing from their index, the feed or the llms files, a feed `<updated>` that doesn't match its newest entry, duplicate titles/descriptions, and banned strings (the retired domain, either GA tag, the old lab-platform name, the membership claim, the old email, `@import` statements). Long titles and uppercase copy are warnings.

## AI & machine-readable surface

The site is meant to be read, quoted and cited by AI assistants, not just ranked by search engines. Four root files carry that, and **all of them are maintained by hand — nothing is generated at build time, because there is no build**:

- `llms.txt` — the [llmstxt.org](https://llmstxt.org) entry point: an H1, a blockquote summary, then linked sections (start here / projects / reflections / contact / optional). Keep it to one screen of scannable links.
- `llms-full.txt` — the whole profile in a single fetch, so a model never has to stitch pages together. Numbered sections, plain assertions, and a closing Q&A block phrased the way people actually ask. **Every claim in it must already be true on a real page** — it is a mirror, not a place to add new facts.
- `feed.xml` — Atom feed for `reflections/` and `explainers/`. `changelog.xml` is a second Atom feed, one entry per changelog line. Explainers also have `.txt` twins next to them (listed in `llms.txt`), served `text/plain` and CORS-open.
- `feed.xml` ordering: Newest entry first. `<updated>` on the feed must match the newest entry's `<updated>`.
- `<key>.txt` — IndexNow key file (the filename is the key, and the file contains only that key). Used to push URL changes to Bing/Copilot, Yandex and Seznam. See below.

Discovery is wired three ways: `robots.txt` names the AI crawlers explicitly and lists both `sitemap.xml` and `feed.xml` as sitemaps; every indexable page carries `<link rel="alternate">` tags for the feed and `llms.txt`; `_headers` pins the content types (`text/plain` for the llms files, `application/atom+xml` for the feed) and opens CORS on them so browser-side agents can fetch without a proxy.

**Adding a reflection** now also means: add an `<entry>` to `feed.xml`, bump the feed's `<updated>`, and add the post to the reflections list in both `llms.txt` and `llms-full.txt`. **Adding a project** means adding it to the projects list in both llms files. Bump `Last updated:` in `llms-full.txt` whenever it changes.

**Pinging IndexNow** after a deploy (instant recrawl for Bing/Copilot, Yandex, Seznam — Google ignores it):

```sh
KEY=$(basename "$(ls *.txt | grep -E '^[0-9a-f]{32}\.txt$')" .txt)
curl -sS "https://api.indexnow.org/indexnow?url=https://dharun.dev/&key=$KEY"
```

Submit a changed page by swapping the `url=` value. One URL per request on that endpoint; the JSON bulk endpoint takes a list.

## Git

- **No AI attribution in commits.** Do not add a `Co-Authored-By` trailer (or any "Generated with Claude" / AI mention) to commit messages or PR bodies.
- Work is committed directly to `main` (trunk-based; the repo root deploys to dharun.dev). Only commit or push when asked.

## Terminal mode

- `txt/` holds hand-written 72-column plain-text versions of the main pages, `txt/man-dharun.txt` (the about page as a man page), `txt/index.json` (the shell's hand-kept page list, `whoami` and `uptime` text) and `txt/index.html` (the no-JavaScript landing the footer "terminal" link falls back to). Keep them in step with the HTML pages.
- `functions/_middleware.js` is the site's only server-side code: a Cloudflare Pages Function that returns the matching text file when the `User-Agent` starts with curl, Wget or HTTPie. `_routes.json` keeps it off asset paths. Advertise it as `curl -L dharun.dev` — Cloudflare redirects plain HTTP to HTTPS, and curl doesn't follow redirects without `-L`.
- `js/shell.js` opens a bordered panel with a prompt on `` ` ``, on the footer link, or when the reader types `sudo`. Commands come from `txt/index.json`.
- Also at the root: `humans.txt`, `.well-known/security.txt` (bump `Expires` yearly), and a 404 that reads like a one-line text adventure.

## Vault (riddle-gated page)

`vault.html` is hidden behind a riddle on the home page. The lock icon (`#secret-lock`, `data-riddle-open`) opens a small form from `js/riddle.js`; the answer is a word printed in the home-server reflection. The script SHA-256s the lowercase answer, compares it to `ANSWER_SHA256` in `js/riddle.js`, and on a match sets `sessionStorage.vault_access = 'granted'` and goes to `/vault`. Without JavaScript the lock is a plain link to `/vault`, which sends you home.

**To change the riddle:** edit the question in `js/riddle.js` and replace `ANSWER_SHA256` with the hex SHA-256 of the new lowercase answer. Never write the answer itself in a comment. It's a toy and says so in its own source — do not treat the vault as security.
