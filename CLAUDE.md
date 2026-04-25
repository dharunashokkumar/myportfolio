# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static personal portfolio website for dharunashokkumar.com. Pure HTML, CSS, and vanilla JavaScript — no build tools, no frameworks, no package manager.

## Development

Open any `.html` file directly in a browser, or use VS Code Live Server (configured on port 5501 in `.vscode/settings.json`).

There is no build step, no linter, and no test suite.

## Architecture

- **Root HTML pages** — top-level site sections: `index.html`, `projects.html`, `reflections.html`, `resume.html`, `about.html`, `contact.html`, `opensource.html`, `vault.html` (PIN-protected). `portfolio.html` exists only as a redirect to `resume.html`.
- **`projects/`** — individual project write-up pages (standalone HTML files)
- **`reflections/`** — individual blog/reflection pages (standalone HTML files)
- **`lfprojects/`** — Linux Foundation projects explorer, a self-contained sub-app:
  - `index.html` — listing page that loads `projects.json` dynamically
  - `project.html` — template page that renders individual project markdown files from `lfprojects/projects/*.md` client-side
  - `projects.json` — project metadata index
- **`explorer/`** — standalone interactive pages (e.g., CPU architecture explorer)
- **`css/styles.css`** — single shared stylesheet (Merriweather font, lowercase text-transform globally)
- **`js/rv.js`** — responsive video iframe height adjustment
- **`js/cfme.js`** — float correction for `.media` containers with `.item-halfwidth` children; runs on load and resize
- **`design-system/`** — the canonical brand/design-system bundle for this portfolio. Read this before making any visual change. Key files:
  - `design-system/README.md` — handoff bundle overview
  - `design-system/project/README.md` — full visual + content rules (colors, type, spacing, voice, iconography)
  - `design-system/project/colors_and_type.css` — design tokens (CSS custom properties)
  - `design-system/project/SKILL.md` — fast-orientation summary
  - `design-system/project/reference/` — read-only snapshot of upstream pages; **do not edit**, treat as ground truth
  - `design-system/project/ui_kits/portfolio/` — JSX recreation of the components

## Design system rules (summary)

- Greyscale only. The only chromatic accents allowed are `#fe9` (highlighter yellow, `.highlight`) and `#fb0` (gold, `.featured_post`). **No blue, green, red, or gradient anywhere.**
- No emoji in rendered copy. Use Unicode arrows (`→`, `↗`, `↑`, `▼`/`▲`) and the inline SVGs in `design-system/project/ui_kits/portfolio/Icons.jsx`.
- `border-radius` only at `0`, `8px` (thumbnail image), `10px` (thumblist tile / drawer bottom), or `50%` (lock badge). Use `0` by default.
- Animation: almost none. Drawer `max-height 0.4s`, footer fade `0.6s`, link hover `0.3s`, thumblist arrow `0.2s`. **No shimmer, parallax, or scroll-driven effects.**
- One shadow exists: `0 2px 8px rgba(0,0,0,.08)` on the top-slider drawer only.
- Body ink is `#555`, never `#000` or `#333` (those are reserved for `:active` and infobox labels).
- The resume page (`resume.html`) is the **one** page allowed its own micro-system (Instrument Serif + Inter + Caveat). Do not extend that escape hatch elsewhere.

## Conventions

- All visible text is lowercase (enforced by `text-transform: lowercase` on `html`)
- Pages share a common header/nav structure and link to `css/styles.css`
- Google Analytics (G-DGWHDZMCF6) is included in page `<head>` sections
- SEO: structured data (Schema.org JSON-LD), Open Graph, Twitter Cards on key pages; `sitemap.xml` and `robots.txt` at root
- `vault.html` is hidden behind a client-side SHA-256 PIN check (accessed via lock icon on homepage)
- New content pages (projects/reflections) should be added to `sitemap.xml`
