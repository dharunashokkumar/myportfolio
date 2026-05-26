# Dharun Ashokkumar — Classic Portfolio Design System

A design system extracted from Dharun Ashokkumar's personal portfolio at
[**dharunashokkumar.com**](https://dharunashokkumar.com). The system codifies
the site's small, deliberate vocabulary so you can design new pages, writeups,
slides and micro-sites without breaking the feel.

> *a classic, lowercase, wiki-leaning personal portfolio — quietly
> typographic, greyscale, with a single watercolor portrait at the heart of it.*

---

## Sources

| Source | How to read it |
| --- | --- |
| Local codebase | `Portfolio-pages/` (mounted on `local_read` / `local_ls`) |
| GitHub repo | [`dharunashokkumar/myportfolio`](https://github.com/dharunashokkumar/myportfolio) — default branch `main` |
| Live site | <https://dharunashokkumar.com> |
| Reference snapshot in this project | `reference/*.html`, `reference/styles.css` |

A snapshot of the upstream pages (`index`, `about`, `projects`, `resume`,
`contact`, `reflections`, `opensource`, `vault`, `galley`) and the shared
stylesheet are copied into `reference/` so this system stays self-contained.

---

## Index (what's where)

| Path | What it is |
| --- | --- |
| `README.md` | This file. |
| `colors_and_type.css` | All visual tokens (CSS custom properties) + semantic element defaults. |
| `SKILL.md` | Agent-skill manifest. Cross-compatible with Claude Code skills. |
| `assets/` | Real brand assets copied from the portfolio (`main.webp`, `lpulogo.jpeg`, `linecube.png`, `ribbon.png`, `signal.png`, `shadow.png`). |
| `reference/` | Untouched snapshots of the upstream portfolio pages + styles + JS. |
| `preview/` | Small visual cards that render in the Design System tab. |
| `ui_kits/portfolio/` | A faithful, click-through recreation of the portfolio. |

---

## The product at a glance

The site is a single-author **personal portfolio + writing surface**. It is
not marketing; it is not a product. The owner is an LPU BTech CSE student who
works across web development, Linux sysadmin, IoT, cybersecurity and open
source. Pages in the source tree:

- **`index.html`** — home. Hero paragraph, watercolor portrait, social row.
- **`projects.html`** — archive list + thumb list of featured projects.
- **`reflections.html`** — essay / blog index. Currently a placeholder
  "disclaimer" block explaining the archive is being rebuilt.
- **`resume.html`** — interactive editorial resume. **This is the one page
  that breaks the site's base visual system** — it imports Instrument Serif,
  Inter and Caveat, and uses a larger, art-directed type treatment. Treat it
  as its own micro-brand within the brand.
- **`about.html`** — Wikipedia-style biography, infobox on the right.
- **`contact.html`** — classic contact cards grid.
- **`opensource.html`**, **`galley.html`**, **`vault.html`** — sub-surfaces.
- **`lfprojects/`** — a mini-app exploring all 765 Linux Foundation projects.
- **`projects/*.html`**, **`reflections/*.html`** — standalone write-ups.

The home page teases `lfprojects` via a **top-drawer slider** ("pull me
down!") with a hand-drawn SVG Tux penguin — the single most playful element
on the site, and a hint at the owner's Linux interest.

---

## Content fundamentals

> **tone is quiet, specific, and in lowercase.**

- **Voice is first-person** ("i build…", "i work with…", "i <a>make</a>,
  <a>reflect</a>, and <a>learn</a>.") Never royal-we, never third-person on
  the home page. The *about* page alone flips to third-person,
  Wikipedia-style ("Dharun's interest in technology began…") because it is
  deliberately formatted as an encyclopedia article.
- **Casing is lowercase, site-wide.** Enforced by
  `html { text-transform: lowercase }`. You write sentence-case and the
  browser flattens it. Project names (`LPU Labs`, `Linux sysadmin`) are
  stored cased in HTML so they preserve correctly if the rule is ever
  lifted, but visually everything is lower.
- **Contractions and punctuation are casual**: "i'm", "i've", `—` em-dashes
  without spaces, `;` and `:` used to tie clauses together, ellipses (`.....`)
  as a pause rather than a proper `…`.
- **Sentences are short and concrete.** "no frameworks, no bloat. just fast,
  clean, and mine." No adjectives you could swap for another. Avoid VC-pitch
  verbs like *empower*, *unlock*, *leverage*.
- **No emoji in body copy.** (The upstream `README.md` on GitHub uses emoji
  in section headings — 🙋 🛠 🚀 📫 — but none appear in the site itself.
  The site uses Unicode dingbats sparingly: `→`, `↗`, `↑`, `\9660`/`\9650`
  for the drawer arrow.)
- **Hyperlinks do the work of callouts.** Most paragraphs contain three or
  four inline links rather than a call-to-action button. The `.highlight`
  yellow marker is the only "look here" emphasis.
- **Self-deprecating, in-progress honesty.** The reflections page ships a
  disclaimer admitting the archive is half-migrated: *"some writings are
  unpolished. that's intentional."* Keep that vibe when you add new copy.
- **SEO and schema are over-invested.** Nearly every page carries 3–6
  `application/ld+json` blobs (Person, ProfilePage, WebSite, FAQPage,
  BreadcrumbList). When you create new pages for this system, mirror the
  structure — it's part of how the site is built.

### Representative copy (lift verbatim when helpful)

> hello, i'm dharun ashokkumar

> software developer and open source contributor from india. i build things
> that solve real problems

> i make, reflect, and learn.

> i work with docker, linux, rabbitmq, mongodb, and devops tools.

> i am currently exploring all 765 linux foundation projects. want to see
> what i've found so far?

> pull me down!  ·  push me up!  (drawer states)

> no reflection posts are published right now. this page is reserved for
> future writing.

---

## Visual foundations

### Colors

Entirely greyscale, with two highlighter-pen accents.

- Page is **pure white** (`#ffffff`). No off-white.
- Body ink is **`#555`** — a friendly mid-grey, not true black. Black
  (`#000`) is reserved for the horizontal rule and the `:active` link ink.
- Panel backgrounds are `#eee`, `#e8e8e8`, `#f8f9fa`. Borders step
  `#ddd → #ccc → #a2a9b1` (the wiki-table border color).
- **Highlighter yellow `#fe9`** is the only chromatic accent used in
  running copy. It wraps `<span class="highlight">` like a marker pen.
- **Gold `#fb0`** flags featured archive entries.
- There is **no blue, green, red or gradient** anywhere in the base system.
  The resume page adds a dashed-muted palette of its own (`--cr-ink:#333`,
  `--cr-muted:#888`, `--cr-accent:#555`) but keeps the greyscale feel.
- Imagery brings the only warmth: the hero portrait is a sepia watercolor.

### Typography

- **Merriweather** is the whole site. Used in two weights: **300 (light)**
  for body, **900 (black)** for headings and anything emphatic.
- Italic is a Merriweather italic (both 300 and 900 italics are loaded).
- Body size is `0.81rem` (~13px) — **smaller than modern defaults by
  design.** Line-height is a tight `1.395rem`. Vertical rhythm is locked to
  that value; every margin is a multiple of it.
- Measure is **36rem** for all long-form text. Everything wider is an
  image, a table, or a grid.
- Captions and meta text are `0.7425rem` with `opacity: 0.67`.
- Resume page (and only the resume page) pulls in **Instrument Serif** for
  giant display headings, **Inter** for UI labels, **Caveat** for
  handwritten annotations. That is the system's *editorial* escape hatch.

### Spacing and rhythm

- Vertical rhythm follows `--leading: 1.395rem`. Scale multiples:
  `0.45 / 0.6975 / 1.395 / 2.79 / 3.6 / 5.4` rem.
- Container max-width **1280px**. Text measure **36rem**. On screens below
  1280px the container flexes to 95vw; below 960px to 90vw.
- Sections breathe: `#header`, `#content`, `#footer` are `3.6rem` apart,
  with the footer pushed an extra `5.4rem` from content above.

### Backgrounds, imagery, texture

- **Pure white canvas.** No patterns, no gradients, no grain behind copy.
- A single hero image per page, editorial-scale, usually a
  hand-painted / watercolor / photographic still life. The portfolio's
  `img/main.webp` is a warm sepia watercolor of a figure with a cardboard
  box on their head; supporting assets (`linecube.png`, `ribbon.png`,
  `signal.png`, `shadow.png`) are minimal white-backdrop object studies.
- Thumbnail fallback pattern is a `slash-ccc-4px.gif` diagonal hatch
  (referenced from the parent site, not bundled in this repo).

### Animation

- **Almost none.** The one animation in the system is the `top-slider`
  drawer with a `max-height 0.4s ease` open transition and an arrow flip.
- Footer opacity fades `0 → 1` on hover over `0.6s`.
- Link hover swaps background over `0.3s`; thumbnail arrow colour swaps
  over `0.2s`.
- No spring physics, no scroll parallax, no view transitions, no hero
  reveals. Restraint is the rule.

### Hover / press states

- **Links:** dotted underline becomes solid; background flips to `#ccc`;
  colour stays at `#555`. A `:active` state nudges ink to `#000`. That's it.
- **Buttons (`.slider-btn`):** invert — foreground and background swap.
- **Thumblist tiles:** static; only the corner `↗` arrow darkens on hover.
- **Footer nav:** the whole `#footer` lifts from `opacity 0.25` to `1`
  when you enter it.

### Borders, rules, shadows

- The system is dominated by **hairline borders** and **thick rules**.
- `hr` default is a **6px solid black** bar spanning the 36rem measure.
  `.dotted` and `.solid` variants exist. It's the most graphic element.
- Cards (thumblist, contact, infobox) use `1px solid #ddd/#a2a9b1`.
- **Exactly one shadow exists** in the codebase: `0 2px 8px rgba(0,0,0,.08)`
  on the top-slider drawer. Everywhere else, depth is communicated by
  border + white space alone.
- No inner shadows. No neumorphism. No backdrop-blur.

### Corners

- Nearly everything is square. Radius shows up in:
  - `8px` on the inner thumbnail image
  - `10px` on the outer thumblist tile
  - `0 0 10px 10px` on the top-slider drawer (bottom only)
  - `50%` on the secret-lock icon hit target and the drawer arrow badge
- When in doubt, use `border-radius: 0`.

### Transparency and blur

- No `backdrop-filter`, ever.
- `opacity` is used sparingly: `0.25` (footer idle), `0.4` (h6 meta),
  `0.5` (archive date), `0.67` (captions), `0.85` (thumblist arrow bg).

### Cards

A "card" in this system is **a thin 1-px border around a small tile, with
internal padding and a square-but-slightly-rounded corner.** No elevation.
No hover lift. See `.contact-card` and `ul.archive.thumblist li`.

### Layout rules

- Everything is a single centered column at `36rem` unless it is a
  thumblist grid, a wiki-infobox-plus-body pairing, or a contact 2-col grid.
- The `#header` is a title (`Dharun Ashokkumar`, cased, black 900) over a
  horizontal nav of lowercased links. The `#footer` is the same shape,
  faded, at the bottom.
- **Two fixed elements** float over the page: the `#secret-lock` icon
  (top-right, `opacity: 0.18` at rest) and the `#topSlider` drawer (top
  centre, peeking down a few pixels).

---

## Iconography

**There is no icon system.** The portfolio does not use an icon font, a
sprite sheet, or Lucide/Heroicons/FontAwesome. Instead:

- **Four inline SVG social glyphs** are hard-coded in `index.html` and
  rendered at `24×24` inside a 30×30 circular hit target: GitHub, LinkedIn,
  Email, Instagram. Each is the canonical brand mark, filled with
  `currentColor`. Copy these directly from `reference/index.html` lines
  ~333–360 when you need them.
- **One custom SVG mascot** — the `tab-tux` penguin — is defined inline in
  the top-slider tab. Body/head/belly ellipses, two eyes with highlights,
  an orange beak and feet. It is the *only* illustrative SVG on the site.
- **One 22×22 padlock SVG** sits top-right as the "secret vault" affordance.
- **Unicode dingbats do the rest of the work**: `→` (timeline bullets),
  `↗` (external-link arrow on thumbnails), `↑` (caption prefix),
  `\9660` `\9650` (drawer open/close arrow), `·` (marquee separator on the
  resume page).
- **Logos**: `lpulogo.jpeg` (the Lovely Professional University sun-and-ring
  badge) is inlined next to the school's name at `1.05rem` square with
  `opacity: 0.70` to soften it into running text. This `.lpu-inline-badge`
  pattern is the system's one inline-logo convention.
- **Favicon**: `/favicon/favicon.png` (not bundled here; grab from the live
  site if needed).
- **Emoji are not used anywhere in the site's rendered copy.** The upstream
  GitHub `README.md` does use them as section headers, but those don't
  appear on the site itself.

### When you need more icons

Reach for Unicode or a plain SVG stroke first. If you genuinely need a set,
pull **Lucide** from CDN — same low-contrast, single-weight, unfussy line
style as the site's hand-rolled glyphs — and document the substitution in
the page you're building. **Flag any substitution to Dharun** because the
current site has deliberately avoided branded icon families.

---

## Font substitutions

None needed. Merriweather, Instrument Serif, Inter and Caveat are all
available on Google Fonts and are loaded directly from
`fonts.googleapis.com` in source. This design system loads them the same
way in `colors_and_type.css`.

---

## Known gaps / caveats

- No favicon bundled. The live site ships `/favicon/favicon.png`; grab it
  from the server when you need it.
- No "brand logo" beyond the plain text wordmark "Dharun Ashokkumar" in
  Merriweather 900. Treat that wordmark as the logo.
- The resume page's editorial micro-system (Instrument Serif + Inter +
  Caveat) is tokenised in `colors_and_type.css` under `--font-editorial` /
  `--font-ui` / `--font-hand` but we have **not** made a dedicated UI kit
  for it; if you need that look, read `reference/resume.html` directly.
