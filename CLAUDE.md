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

## Conventions

- All visible text is lowercase (enforced by `text-transform: lowercase` on `html`)
- Pages share a common header/nav structure and link to `css/styles.css`
- Google Analytics (G-DGWHDZMCF6) is included in page `<head>` sections
- SEO: structured data (Schema.org JSON-LD), Open Graph, Twitter Cards on key pages; `sitemap.xml` and `robots.txt` at root
- `vault.html` is hidden behind a client-side SHA-256 PIN check (accessed via lock icon on homepage)
- New content pages (projects/reflections) should be added to `sitemap.xml`
