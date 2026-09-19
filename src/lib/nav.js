// The site's page structure — one source for the nav, the footer, the sitemap,
// llms.txt and svelte.config.js's prerender entries.
//
// This is what replaced the single long homepage. Everything the old page
// stacked into one scroll (hero, how, shelf, features, creators, savings,
// pricing, download, FAQ) now lives on its own route, and the homepage keeps a
// hero plus three teasers that link out to them.
//
// Framework-free on purpose: svelte.config.js imports it at build time to
// enumerate prerender entries, the same way it can't import a .svelte file.

// Product pages, localized like the homepage — they carry the copy that used to
// be homepage sections, so a /de/ visitor must not be dropped onto English.
// `key` is the nav-label key under `t.nav.links`.
export const SITE_PAGES = [
  { slug: 'features', key: 'features' },
  { slug: 'how-it-works', key: 'how' },
  { slug: 'co-op', key: 'coop' },
  { slug: 'creators', key: 'creators' },
  { slug: 'pricing', key: 'pricing' },
  { slug: 'download', key: 'download' },
  { slug: 'help', key: 'help' },
]

export const PAGE_SLUGS = SITE_PAGES.map((p) => p.slug)

// The English-only guide cluster, grouped the way the footer shows it. Two
// groups because "where does Valheim keep its saves" and "is this better than
// Steam Cloud" are different errands, and the one RESOURCES list that used to
// hold both (eleven links of five kinds) made a visitor read all of it to find
// either. `label` lives here rather than in the locale files because these
// pages exist in English only, like the blog. `hub` marks /games/, which is its
// own route (src/routes/games/) rather than a markdown guide, so GUIDE_SLUGS
// below leaves it out.
//
// Every entry is a footer link on all forty localized pages — this site's main
// internal linking into the guide cluster. Dropping one is an SEO change, not
// a layout one.
export const GUIDE_GROUPS = [
  {
    key: 'guides', // heading is t.footer.guides, landmark name t.footer.aria.guides
    items: [
      { slug: 'steam-cloud-alternative', label: 'Steam Cloud alternative' },
      { slug: 'dedicated-server-alternative', label: 'Dedicated server alternative' },
      { slug: 'modded-game-save-backup', label: 'Modded game save backup' },
      { slug: 'emulator-save-backup', label: 'Emulator save backup' },
      { slug: 'game-config-backup', label: 'Game config backup' },
      { slug: 'compare', label: 'Compare backup tools' },
    ],
  },
  {
    key: 'saves',
    items: [
      { slug: 'games', label: 'All games', hub: true },
      { slug: 'steam-save-file-location', label: 'Steam saves' },
      { slug: 'ubisoft-connect-save-location', label: 'Ubisoft Connect saves' },
    ],
  },
]

// The flat markdown guides (content/pages/*.md), in footer order. pages/load.js
// builds its route list, sitemap entries and "More guides" nav from this, so a
// guide the footer links always renders and a guide that renders is always
// linked.
export const GUIDE_SLUGS = GUIDE_GROUPS.flatMap((g) => g.items)
  .filter((item) => !item.hub)
  .map((item) => item.slug)

// The "Who it's for" dropdown. Compare is an existing markdown guide
// (content/pages/compare.md), so it is English-only and linked with the
// site-root prefix rather than the locale one.
export const AUDIENCE_MENU = [
  { slug: 'co-op', key: 'coop', localized: true },
  { slug: 'creators', key: 'creators', localized: true },
  { slug: 'compare', key: 'compare', localized: false },
]

// Top-level nav order, left to right. `menu` renders as a disclosure.
export const PRIMARY_NAV = [
  { slug: 'features', key: 'features', localized: true },
  { slug: 'how-it-works', key: 'how', localized: true },
  { key: 'audience', menu: AUDIENCE_MENU },
  { slug: 'pricing', key: 'pricing', localized: true },
  { slug: 'help', key: 'help', localized: true },
  { slug: 'blog', key: 'blog', localized: false },
]

// Number of path segments in a prerendered URL: '/' → 0, '/de/' → 1,
// '/features/' → 1, '/de/features/' → 2.
function depthOf(pathname) {
  return pathname.split('/').filter(Boolean).length
}

const up = (n) => (n === 0 ? './' : '../'.repeat(n))

// Relative path back to the SITE root (the English homepage). What the language
// switcher and every English-only link (blog, guides, legal, about) hang off.
// Relative rather than root-absolute because PR previews are served from a
// subpath — see `paths.relative` in svelte.config.js.
export function sitePrefix(pathname) {
  return up(depthOf(pathname))
}

// Relative path back to the CURRENT LOCALE's root — './' at '/', '../' at
// '/features/' and at '/de/', '../../' at '/de/features/'. Localized links
// (the product pages) hang off this one so /de/features/ points at
// /de/pricing/ and not the English page.
export function localePrefix(pathname, locale = 'en') {
  const depth = depthOf(pathname)
  return up(locale === 'en' ? depth : depth - 1)
}
