// Central locale registry. Framework-free: imported from the browser entry,
// from src/render.js, and from vite.config.js at build time.
//
// English lives at the site root ("/"); every other locale is built into its
// own subdirectory ("/de/", "/fr/", "/es/") by the i18n() plugin in
// vite.config.js. Adding a language is: drop a src/i18n/locales/<code>.js file
// and add an entry here — the build, sitemap, hreflang tags, and the in-nav
// switcher all read from this list.

import en from './locales/en.js'
import de from './locales/de.js'
import fr from './locales/fr.js'
import es from './locales/es.js'

export const DEFAULT_LOCALE = 'en'

// Order here is the order the language switcher renders in.
export const LOCALES = [
  { code: 'en', label: 'EN', name: 'English',  ogLocale: 'en_US', intl: 'en-US', t: en },
  { code: 'de', label: 'DE', name: 'Deutsch',  ogLocale: 'de_DE', intl: 'de-DE', t: de },
  { code: 'fr', label: 'FR', name: 'Français', ogLocale: 'fr_FR', intl: 'fr-FR', t: fr },
  { code: 'es', label: 'ES', name: 'Español',  ogLocale: 'es_ES', intl: 'es-ES', t: es },
]

const BY_CODE = new Map(LOCALES.map((l) => [l.code, l]))

export function getLocale(code) {
  return BY_CODE.get(code) || BY_CODE.get(DEFAULT_LOCALE)
}

export const LOCALE_CODES = LOCALES.map((l) => l.code)

// "/" for the default locale, "/de/" etc. for the rest.
export function pathForLocale(code) {
  return code === DEFAULT_LOCALE ? '/' : `/${code}/`
}

// Simple {0}/{1}/… template interpolation. Values are spliced in as-is (no
// escaping) because the only callers pass pre-built, trusted HTML (money spans)
// into already-trusted translation strings.
export function fmt(template, ...args) {
  return String(template).replace(/\{(\d+)\}/g, (_, i) => (args[i] != null ? args[i] : ''))
}
