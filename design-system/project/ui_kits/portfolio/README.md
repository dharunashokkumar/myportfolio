# Portfolio UI Kit

A click-through recreation of **dharunashokkumar.com** — the full visual
vocabulary in one React app. Hit `index.html` and navigate.

## What's included

| File | Responsibility |
| --- | --- |
| `kit.css` | Portable stylesheet — imports `../../colors_and_type.css` and layers the portfolio-specific layout (thumblist grid, wiki-infobox, top-slider, etc.). |
| `Icons.jsx` | The four social SVGs (GitHub / LinkedIn / Mail / Instagram), the padlock, and the Tux mascot. All byte-for-byte copies of what's in the source site. |
| `Chrome.jsx` | Global scaffolding — `<Header>`, `<Footer>`, `<TopSlider>`, `<SecretLock>`, `<SocialRow>`. |
| `Pages.jsx` | The individual surfaces — `HomePage`, `ProjectsPage`, `ReflectionsPage`, `ResumePage`, `AboutPage`, `ContactPage`, `ProjectDetailPage`, `ExplorerPage`. |
| `App.jsx` | State-machine router (six pages + detail view) and wires the chrome. |

## Screens covered

- **home** — watercolor hero, one-paragraph bio, resume/projects/reflections
  entry points, social row, top-slider drawer teasing the LF explorer.
- **projects** — `.archive.thumblist` grid with six placeholder projects
  (one flagged `featured_post`).
- **reflections** — placeholder disclaimer panel + planned-pieces list. Mirrors
  the "archive being rebuilt" state of the live site.
- **resume** — tl;dr of the editorial page, with a link out to the art-
  directed version. (We didn't recreate the full editorial resume — see the
  caveats in the root README.)
- **about** — two-column Wikipedia-article treatment with right-side infobox.
- **contact** — 2×2 `.contact-card` grid + email CTA.
- **project detail** — minimal back-linked long-form stub.
- **explorer** — placeholder link-through (the live site's `lfprojects/` is a
  separate mini-app).

## Interactions

- Top-slider drawer opens / closes on tap.
- Secret padlock shows a PIN prompt (demo-only, accepts `1947`).
- Nav links highlight the active page (`.active-page` swaps to 900 weight,
  removes the dotted underline).
- Every link hover swaps the background to `#ccc` — the site's signature.

## Known shortcuts

- The watercolor image, LPU badge, and secondary stills are copied from
  `assets/`; everything else is text.
- Thumblist thumbnails use a diagonal-hatch placeholder — the live site
  uses per-project WebPs.
- No real search, no real vault, no real LF-explorer. The *shape* is faithful;
  the *data* is stubbed.
