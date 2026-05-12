# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page marketing site for **Checkpoint64** (checkpoint64.com), a save-file backup tool. The site is a static Vite build with no framework — vanilla JS template-string rendering — deployed to GitHub Pages.

## Commands

- `npm run dev` — Vite dev server with HMR
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the built `dist/` locally

There are no tests, no linter, and no type checker configured.

## Architecture

The entire page is rendered by **`src/main.js`**: each section (`hero`, `problemStrip`, `howItWorks`, `shelfMock`, `features`, `logbookPreview`, `pricing`, `downloadStrip`, `faq`, `footer`) is a function returning an HTML string. They are concatenated and assigned to `#app.innerHTML` once at load. All section content (cartridge specs, FAQ items, pricing tiers, etc.) is defined as inline data arrays inside the section function that consumes it — there is no central content/data module.

The `cartridge(...)` helper renders the recurring "game save cartridge" visual and is shared by `hero()` and `shelfMock()`. `CART_SIZES` controls its `sm`/`md`/`lg` sizing.

All user-visible strings interpolated into templates must go through `esc(...)` (defined at the top of `main.js`) to prevent HTML injection — the existing code follows this rigorously.

After the innerHTML write, two small bits of imperative JS attach:
1. An interval on `[data-step-auto]` cycles the "auto-backup" animation labels/bars.
2. `[data-notify-form]` submit handlers send email addresses to the backend API at `http://localhost:8080/public/api/waitingList` via POST request with the email as a JSON string.

Styling lives entirely in **`src/style.css`**, organized by section with header comments (`---------- NAV ----------`, etc.). The look is a paper/cartridge aesthetic driven by CSS custom properties on `:root` (`--ink`, `--paper`, `--accent`, plus four font-family vars loaded from Google Fonts in `index.html`).

## Deployment

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on push. **The workflow triggers on `main`, but the local default branch is `master`** — pushing to `master` will not deploy. The `CNAME` file pins the custom domain to `checkpoint64.com`; do not delete it (a prior commit already lost and restored it).

`vite.config.js` sets `base: '/'` because the site is served from the apex domain, not a `/repo/` GitHub Pages path.