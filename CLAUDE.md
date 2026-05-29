# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static personal portfolio website for **dharunashokkumar.com**. Pure HTML, CSS, and vanilla JavaScript — no build tools, no frameworks, no package manager, no dependencies.

## Development

There is no build step, linter, or test suite. Three ways to develop:

- Open any `.html` file directly in a browser.
- Use VS Code **Live Server** (port `5501`, set in `.vscode/settings.json`).
- Serve the root with any static server (e.g. `python -m http.server 5501`) — required for the `lfprojects/` sub-app because it fetches JSON/Markdown at runtime, which file:// blocks.

Deployment is whatever pushes the repo root to `dharunashokkumar.com` (treat the working tree as the deployable artifact — no transform happens).

## Architecture

### Top-level pages (site sections)
`index.html`, `projects.html`, `reflections.html`, `resume.html`, `about.html`, `contact.html`, `opensource.html`, `galley.html`, `vault.html` (PIN-protected).

- The PDF preview/download (embedded `<object>` + download buttons) lives in a collapsible "document & download" section inside `resume.html`; there is no separate preview page.
- `reflections.html` is a single index page; there is **no** `reflections/` directory. New reflections currently live inline on that page.
- `projects/` holds individual project write-ups as standalone HTML pages (currently `lpulabs.html`, `sysadmin.html`) plus a `projects/asset/` folder for their images.

### `lfprojects/` — Linux Foundation projects explorer (self-contained sub-app)
- `index.html` — listing page. Fetches `projects.json` at runtime and renders cards client-side.
- `project.html?slug=<slug>` — detail template. Reads the `slug` URL param, looks it up in `projects.json`, then `fetch`es and renders the markdown file from `lfprojects/projects/<slug>.md` client-side.
- `projects.json` — single source of truth for the project list (each entry includes `slug` and `md_file`).
- `lfprojects/projects/*.md` — one markdown file per project.

**Adding a new LF project:** append an entry to `projects.json` *and* create the matching `projects/<slug>.md`. Both are required; the listing won't show entries missing either side cleanly.

### `galley/` — interactive experiments
Standalone single-file experiments (CPU architecture explorer, shader wallpapers, organic loaders, htop widget, year-in-pixels, satisfying buttons, etc.). Each is self-contained (its own inline CSS/JS) and is linked from `galley.html`. **Adding a new experiment:** drop the file in `galley/` and add a link card on `galley.html`. They are not auto-discovered.

> Historical note: this directory used to be called `explorer/`; it was renamed to `galley/` in commit `529ec58`. If you see old references, update them.

### Shared front-end assets
- `css/main.css` — single global stylesheet entry point. It only `@import`s, in order, five ordered partials that together hold the whole shared system (Merriweather, lowercase text-transform globally on `<html>`):
  - `css/base.css` — reset, html/body, typography, headings/lists/blockquote, `#container`/header/footer/nav.
  - `css/layout.css` — images, `.video*`, `div.media` / `.item` / `.item-halfwidth`, captions.
  - `css/components.css` — links, `.social-links`, `.nav-grid`, header nav, archive pages & `.thumblist`, single-post meta.
  - `css/responsive.css` — the global `@media screen` breakpoints and the `@media print` block.
  - `css/modules.css` — `.featured_post`, wiki/about, contact-grid, timeline, project-card components, `#secret-lock`, vault, top-slider (each keeps its own embedded media queries).
  - **Cascade order is load-bearing** — the partials are sequential slices of the old monolith; keep the `@import` order in `main.css` unchanged.
- Page-scoped stylesheets (each linked only from its one page, never `@import`ed into `main.css`): `css/resume.css` (resume.html — the Instrument Serif + Inter + Caveat micro-system, kept isolated), `css/opensource.css` (opensource.html), `css/lpulabs.css` (projects/lpulabs.html).
- `img/` — site imagery (`main.webp`, `lpulogo.jpeg`, still-life PNGs, etc.).
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
- The resume page (`resume.html`) is the **one** page allowed its own micro-system (Instrument Serif + Inter + Caveat). Do not extend that escape hatch to any other page.
- **Voice:** first-person, lowercase, contractions ok, short sentences, no marketing verbs.

## Conventions

- All visible text is lowercase (enforced by `text-transform: lowercase` on `<html>`). Author copy in lowercase; don't rely on CSS to fix capitalization (it won't catch alt text, titles, or JSON-LD).
- Every page shares the same header/nav and links to `css/main.css`.
- Google Analytics tag `G-DGWHDZMCF6` is included in every page's `<head>`.
- SEO: structured data (Schema.org JSON-LD), Open Graph, and Twitter Card meta are present on key pages; `sitemap.xml` and `robots.txt` live at root. **New content pages (projects, reflections) must be added to `sitemap.xml` manually.**

## Vault (PIN-protected page)

`vault.html` is hidden behind a client-side SHA-256 PIN check. The flow:

1. `index.html` shows a lock icon (top-right) that calls `promptSecretPin()`.
2. The handler hashes the entered PIN with `crypto.subtle.digest('SHA-256', …)`, compares it to a hardcoded hex digest in `index.html`, and on match sets `sessionStorage.vault_access = 'granted'` and redirects to `vault.html`.

**To rotate the PIN:** generate a new SHA-256 hex digest and replace the expected hash inside `index.html` (the gate logic lives there, not in `vault.html`). The console snippet in the comment near the check shows the exact command. This is client-side obfuscation only — anyone reading the source can see the hash; do not treat the vault as security.
