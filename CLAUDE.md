# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The marketing site for **Checkpoint64** (checkpoint64.com), a game-save backup desktop app. A static Vite build with no framework — string-template rendering — deployed to GitHub Pages. The site is prerendered at build time (crawlers get full HTML), localized into four languages, and carries a markdown blog plus legal pages.

The product source of truth lives in the sibling repo (`../savebetter`): `PHASES.md` (feature status), `MARKETING.md` (voice + positioning), `backend/src/main/resources/application.yml` (plan caps/quotas), `games/CatalogSeeder.java` (supported-game count). Check those before changing factual claims (game counts, plan limits, poll cadence, platforms).

## Commands

- `npm run dev` — Vite dev server with HMR (blog/legal/localized pages served by middleware)
- `npm run build` — production build to `dist/` (emits `/`, `/de/`, `/fr/`, `/es/`, `/blog/…`, `/terms/`, `/privacy/`, `sitemap.xml`)
- `npm run preview` — serve the built `dist/` locally

There are no tests, no linter, and no type checker configured.

## Architecture

**Copy lives in `src/i18n/locales/{en,de,fr,es}.js`** — `en.js` is the source of truth; the other three mirror its key structure exactly. Keys ending in `Html`/`Tpl` are raw HTML / `{0}`-interpolation templates (not escaped); everything else is escaped at render time via `esc(...)`. App-mockup chrome (game names, paths, status chips, log entries) deliberately stays English in all locales because it depicts the real app UI.

- `src/render.js` — pure HTML-string renderers for every section (`hero`, `problemStrip`, `howItWorks`, `shelfMock`, `features`, `logbookPreview`, `dediStrip`, `pricing`, `downloadStrip`, `faq`, `footer`). Imported by both the browser entry and Node at build time, so it must stay DOM-free. The `cartridge(...)` helper renders the recurring cartridge visual.
- `src/main.js` — browser entry. The body is already prerendered into `#app` by `vite.config.js`; this module only owns CSS import + interactivity (language menu, theme toggle, live release-tile refresh, currency rewrite, auto-backup ticker animation, waitlist form POSTs to `https://app.checkpoint64.com/public/api/waitingList`). Do NOT overwrite `#app.innerHTML` here.
- `src/releases.js` — GitHub Releases lookup (`Checkpoint64/Checkpoint64` repo). Download tiles are baked at build time and refreshed client-side. Platform list = Windows, macOS Apple Silicon, Linux (.deb/.rpm). There is deliberately **no Intel-Mac tile** — that build is disabled in the app's release matrix; don't add one without checking the app repo.
- `src/currency.js` — money amounts are stored as raw USD numbers, SSR-rendered in EUR (the default), and rewritten client-side to the visitor's currency (USD/GBP/EUR). Use `money(...)` in render.js, never hardcode amounts in copy.
- `src/i18n/config.js` — locale registry (order = switcher order). Adding a language: drop `src/i18n/locales/<code>.js`, register it here; build, sitemap, hreflang, and switcher all follow.
- `src/i18n/localize.js` — turns the built English HTML into `/de/`, `/fr/`, `/es/` copies: swaps `<html lang>`, body, title/meta/OG, regenerates the JSON-LD from the locale's `t.jsonld`, and rewrites `"./` links to `"../`. **The English `index.html` `<head>` is hand-maintained** — when copy changes in `en.js` `meta`/`jsonld`, mirror it manually in `index.html` (title, description, keywords, OG/Twitter, and all five JSON-LD blocks). The visible FAQ and the FAQPage JSON-LD must stay in sync (Google penalizes mismatch), and the dedicated-server FAQ answer must stay at **index 3** — both `render.js` and `localize.js` hardcode that index for the `{0}` savings substitution.
- `content/blog/*.md` — posts with gray-matter frontmatter (`title`, `date`, `excerpt`, `tags`, optional `pinned`, `draft`). Filename `YYYY-MM-DD-slug.md` → `/blog/slug/`. Rendered by `src/blog/{load,render}.js`. House style: semicolons in titles, launch-list CTA footer.
- `content/legal/{terms,privacy}.md` — rendered by `src/legal/{load,render}.js` at `/terms/`, `/privacy/`.

Styling lives in `src/style.css`, organized by section with header comments. Paper/cartridge aesthetic via CSS custom properties on `:root`; fonts from Google Fonts in `index.html`.

## Deployment

`.github/workflows/main.yml` builds and deploys to GitHub Pages on push to `master`. `preview.yml` publishes PR previews to a subpath (which is why `vite.config.js` uses `base: './'` and pages emit relative links). The `CNAME` file pins checkpoint64.com; do not delete it (a prior commit already lost and restored it).
