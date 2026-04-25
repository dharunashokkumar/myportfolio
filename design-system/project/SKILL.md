---
name: dharun-ashokkumar-design
description: Use this skill to generate well-branded interfaces and assets for Dharun Ashokkumar's classic portfolio, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Fast orientation

- **Aesthetic**: classic, lowercase, wiki-leaning personal portfolio. Greyscale + a highlighter-yellow marker and a gold featured flag. Merriweather 300/900, body 13px, measure 36rem. No gradients, no emoji, no icon fonts.
- **Start from**: `colors_and_type.css` (tokens + semantic defaults). Import it first — don't reinvent the scale.
- **Copy assets from** `assets/` (`main.webp`, `lpulogo.jpeg`, still-life PNGs). Never redraw the watercolor hero.
- **Components**: for any UI with nav, header, thumblist, infobox, contact-grid or top-slider, clone from `ui_kits/portfolio/` instead of rebuilding.
- **Voice**: first-person, lowercase, contractions ok, short sentences, no marketing verbs.
- **Icons**: inline SVGs in `ui_kits/portfolio/Icons.jsx` (GitHub, LinkedIn, Mail, Instagram, Padlock, Tux). Unicode arrows otherwise. If you truly need a new set, substitute Lucide and flag it.

## When unsure

Open `reference/*.html` — those are untouched snapshots of the source pages. They're the ground truth when a token or spacing rule feels ambiguous.
