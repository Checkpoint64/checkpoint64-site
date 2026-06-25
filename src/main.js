// Browser entry point. The page body is pre-rendered into #app at build time
// by the prerender plugin in vite.config.js (using src/render.js), so this
// module only owns CSS + interactivity. Do NOT overwrite #app.innerHTML here.

import './style.css'
import { fetchLatestRelease, formatSize, extensionOf, PLATFORMS } from './releases.js'
import { detectCurrency, formatMoney } from './currency.js'
import { getLocale, fmt } from './i18n/config.js'

// Copy for this page's language (set on <html lang>). Used for the few strings
// produced at runtime — currently just the live download-tile aria labels.
const t = getLocale(document.documentElement.lang || 'en').t

// Nav disclosure menus (language picker + mobile hamburger drawer): close on
// outside-click / Escape, close the others when one opens so two panels never
// overlap, and close on link tap (in-page anchor jumps don't fire the
// outside-click handler). The rest is native <details> behaviour.
;(() => {
  const menus = Array.from(document.querySelectorAll('details.menu'))
  if (!menus.length) return

  // Remember the visitor's explicit language choice so the auto-detect redirect
  // in index.html leaves them alone next time.
  document.querySelectorAll('.lang-menu [data-lang]').forEach((a) => {
    a.addEventListener('click', () => {
      try { localStorage.setItem('cp64-lang', a.dataset.lang) } catch (e) { /* storage blocked — link still navigates */ }
    })
  })

  menus.forEach((menu) => {
    menu.addEventListener('toggle', () => {
      if (menu.open) menus.forEach((m) => { if (m !== menu) m.open = false })
    })
    menu.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { menu.open = false; menu.querySelector('summary')?.focus() }
    })
    menu.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => { menu.open = false })
    })
  })

  document.addEventListener('click', (e) => {
    menus.forEach((menu) => {
      if (menu.open && !menu.contains(e.target)) menu.open = false
    })
  })
})()

// Theme toggle. The initial theme is already set by an inline script in
// index.html <head> (to avoid flash-of-wrong-theme); this only handles clicks
// and keeps the button's icon/aria-label in sync.
;(() => {
  const btn = document.querySelector('[data-theme-toggle]')
  if (!btn) return
  const icon = btn.querySelector('[data-theme-icon]')
  const apply = (theme) => {
    if (theme === 'light') document.documentElement.setAttribute('data-theme', 'light')
    else document.documentElement.removeAttribute('data-theme')
    if (icon) icon.textContent = theme === 'light' ? '☾' : '☀'
    btn.setAttribute('aria-label', theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode')
  }
  const current = () => document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'
  apply(current())
  btn.addEventListener('click', () => {
    const next = current() === 'light' ? 'dark' : 'light'
    apply(next)
    try { localStorage.setItem('cp64-theme', next) } catch (e) { /* storage blocked — toggle still works for the session */ }
  })
})()

// Refresh the download tiles from the live GitHub Releases API so a newly
// published release shows up without needing to rebuild the site. The tiles
// already have baked-at-build URLs, so this is a best-effort upgrade — if the
// fetch fails (offline, rate-limited, etc.) the static links stay in place.
;(async () => {
  const tiles = document.querySelectorAll('a.dl[data-platform]')
  if (!tiles.length) return
  const releases = await fetchLatestRelease()
  if (!releases) return
  tiles.forEach((a) => {
    const asset = releases.platforms[a.dataset.platform]
    const arch = a.querySelector('.arch')
    if (asset) {
      a.href = asset.url
      const label = (PLATFORMS.find((p) => p.key === a.dataset.platform) || {}).label || a.dataset.platform
      a.setAttribute('aria-label', fmt(t.download.tileAriaLiveTpl, label, releases.tag))
      if (arch) {
        const ext = extensionOf(asset.name)
        arch.textContent = [ext && `.${ext}`, releases.tag, formatSize(asset.size)].filter(Boolean).join(' · ')
      }
    } else if (releases.url) {
      a.href = releases.url
    }
  })
})()

// Reformat baked-in USD amounts in the visitor's currency. Spans are emitted
// by money() in src/render.js with the raw USD amount on data-money. The SSR
// fallback already shows EUR (the default), so this only swaps to USD or GBP
// when the visitor's region calls for it. detectCurrency prefers IANA time
// zone because navigator.language is often en-US on machines outside the US.
;(() => {
  const nodes = document.querySelectorAll('[data-money]')
  if (!nodes.length) return
  const locales = (typeof navigator !== 'undefined' && (navigator.languages?.length ? navigator.languages : navigator.language ? [navigator.language] : [])) || []
  const currency = detectCurrency({ locales })
  const displayLocale = locales[0] || undefined
  nodes.forEach((el) => {
    const amount = Number(el.dataset.money)
    if (!Number.isFinite(amount)) return
    const suffix = el.dataset.moneySuffix || ''
    const toRaw = el.dataset.moneyTo
    const head = formatMoney(amount, currency, displayLocale)
    el.textContent = toRaw != null && toRaw !== ''
      ? `${head}–${formatMoney(Number(toRaw), currency, displayLocale)}${suffix}`
      : `${head}${suffix}`
  })
})()

// Animated auto-backup ticker on the "How it works" step. Honour
// prefers-reduced-motion: when set, skip the loop and show the final
// "SYNCED" frame statically instead of cycling labels/bars.
const autoEl = document.querySelector('[data-step-auto]')
if (autoEl) {
  const labels = ['WATCHING…', 'CHANGES DETECTED', 'UPLOADING…', 'SYNCED']
  const colors = ['#3df0ff', '#ffe0a8', '#a07cff', '#c8efb8']
  const bars = autoEl.querySelectorAll('.bar')
  const labelEl = autoEl.querySelector('[data-auto-label]')
  const reduceMotion = typeof window.matchMedia === 'function'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  let tick = 0
  const apply = () => {
    bars.forEach((b, i) => b.classList.toggle('on', i <= tick))
    labelEl.textContent = labels[tick]
    labelEl.style.background = colors[tick]
  }
  if (reduceMotion) {
    tick = labels.length - 1
    apply()
  } else {
    apply()
    setInterval(() => { tick = (tick + 1) % labels.length; apply() }, 1100)
  }
}
