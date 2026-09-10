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
`index.html`, `projects.html`, `reflections.html`, `resume.html`, `about.html`, `contact.html`, `opensource.html`, `galley.html`, `vault.html` (PIN-protected).

- The PDF preview/download (embedded `<object>` + download buttons) lives in a collapsible "document & download" section inside `resume.html`; there is no separate preview page.
- `reflections.html` is the index page: a list of post links (`.reflect-list`). Individual reflections are standalone pages in `reflections/` (e.g. `clearing-engine.html`), each using the `.post` container like `projects/*.html`. **Adding a reflection:** create `reflections/<slug>.html`, add a `<li>` to the `.reflect-list` on `reflections.html`, add a `blogPost` entry to that page's JSON-LD, and add the URL to `sitemap.xml`.
- `projects/` holds individual project write-ups as standalone HTML pages (currently `lpulabs.html`, `sysadmin.html`) plus a `projects/asset/` folder for their images.

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
- Page-scoped stylesheets (each linked only from its one page, and always *after* the six above): `css/resume.css` (resume.html — layout for the collapsible resume sections, scoped to `.resume-page`; uses the global Merriweather/greyscale system, no separate fonts), `css/opensource.css` (opensource.html), `css/lpulabs.css` (projects/lpulabs.html).
- `fonts/` — the four self-hosted Merriweather `.woff2` files (latin and latin-ext, roman and italic). They are Google's own files, unmodified; `css/fonts.css` is Google's CSS with the URLs rewritten, so rendering is identical. Only latin and latin-ext are kept — no page that loads the global system contains a character in the cyrillic or vietnamese ranges. `_headers` caches them `immutable` for a year, so a different cut must land under a **new filename**. Every page also `<link rel="preload">`s `merriweather-latin-normal.woff2`, the roman body face.
- `img/` — site imagery (`main.webp`, `lpulogo.webp`, still-life PNGs, etc.). `main.webp` is 1024×1024 and must stay that size: it is the `og:image`/`twitter:image` on every page and those `og:image:width`/`height` tags say 1024. (Lighthouse calls it oversized for its 371px slot; that assumes a 1× display and is wrong for the 2–3× phones that actually load it.) `img/lpulogo.jpeg` is kept only because the read-only `design-system/` snapshots reference it — live pages use `img/lpulogo.webp`.
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
- Google Analytics tag `G-6EGD879ZLL` is included in every page's `<head>`, as the first thing inside `<head>`. It is the only property — the previous tag `G-DGWHDZMCF6` was removed in July 2026 and must not be reintroduced. **New pages must include the snippet manually.**
- SEO: structured data (Schema.org JSON-LD), Open Graph, and Twitter Card meta are present on key pages; `sitemap.xml` and `robots.txt` live at root. **New content pages (projects, reflections) must be added to `sitemap.xml` manually.**

## AI & machine-readable surface

The site is meant to be read, quoted and cited by AI assistants, not just ranked by search engines. Four root files carry that, and **all of them are maintained by hand — nothing is generated at build time, because there is no build**:

- `llms.txt` — the [llmstxt.org](https://llmstxt.org) entry point: an H1, a blockquote summary, then linked sections (start here / projects / reflections / contact / optional). Keep it to one screen of scannable links.
- `llms-full.txt` — the whole profile in a single fetch, so a model never has to stitch pages together. Numbered sections, plain assertions, and a closing Q&A block phrased the way people actually ask. **Every claim in it must already be true on a real page** — it is a mirror, not a place to add new facts.
- `feed.xml` — Atom feed for `reflections/`. Newest entry first. `<updated>` on the feed must match the newest entry's `<updated>`.
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

## Vault (PIN-protected page)

`vault.html` is hidden behind a client-side SHA-256 PIN check. The flow:

1. `index.html` shows a lock icon (top-right) that calls `promptSecretPin()`.
2. The handler hashes the entered PIN with `crypto.subtle.digest('SHA-256', …)`, compares it to a hardcoded hex digest in `index.html`, and on match sets `sessionStorage.vault_access = 'granted'` and redirects to `vault.html`.

**To rotate the PIN:** generate a new SHA-256 hex digest and replace the expected hash inside `index.html` (the gate logic lives there, not in `vault.html`). The console snippet in the comment near the check shows the exact command. This is client-side obfuscation only — anyone reading the source can see the hash; do not treat the vault as security.
