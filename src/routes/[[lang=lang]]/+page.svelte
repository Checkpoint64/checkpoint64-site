<script>
  import { onMount } from 'svelte'
  import { dev } from '$app/environment'
  import '$lib/styles/style.css'
  import { renderApp } from '$lib/render.js'
  import { homeHead, noscriptNotice } from '$lib/i18n/head.js'
  import { getLocale, fmt } from '$lib/i18n/config.js'
  import { fetchLatestRelease, formatSize, extensionOf, PLATFORMS } from '$lib/releases.js'
  import { detectCurrency, formatMoney } from '$lib/currency.js'

  let { data } = $props()

  const t = getLocale(data.locale).t
  const head = homeHead({ locale: data.locale, includeAnalytics: !dev })
  const noscript = noscriptNotice(data.locale)
  // renderApp emits root-relative "./…" links; the localized copies live one
  // directory deep, so rewrite them to "../…" exactly as the old localize.js did.
  let body = renderApp({ releases: data.releases, steam: data.steam, locale: data.locale, year: data.year })
  if (data.locale !== 'en') body = body.replace(/"\.\//g, '"../')

  // ---- Interactivity (ported verbatim from the old src/main.js). Attaches to
  // the prerendered DOM by query after mount — never rewrites the body. ----
  onMount(() => {
    const cleanups = []

    // Nav disclosure menus (language picker + mobile drawer).
    {
      const menus = Array.from(document.querySelectorAll('details.menu'))
      if (menus.length) {
        document.querySelectorAll('.lang-menu [data-lang]').forEach((a) => {
          a.addEventListener('click', () => {
            try { localStorage.setItem('cp64-lang', a.dataset.lang) } catch (e) { /* storage blocked */ }
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
        const onDocClick = (e) => {
          menus.forEach((menu) => {
            if (menu.open && !menu.contains(e.target)) menu.open = false
          })
        }
        document.addEventListener('click', onDocClick)
        cleanups.push(() => document.removeEventListener('click', onDocClick))
      }
    }

    // Theme toggle. Initial theme is set pre-paint by the head bootstrap script;
    // this only handles clicks and keeps the icon/aria in sync.
    {
      const btn = document.querySelector('[data-theme-toggle]')
      if (btn) {
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
          try { localStorage.setItem('cp64-theme', next) } catch (e) { /* storage blocked */ }
        })
      }
    }

    // Refresh download tiles from the live GitHub Releases API (best-effort).
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

    // Reformat baked-in USD amounts in the visitor's currency.
    {
      const nodes = document.querySelectorAll('[data-money]')
      if (nodes.length) {
        const locales = (typeof navigator !== 'undefined' && (navigator.languages?.length ? navigator.languages : navigator.language ? [navigator.language] : [])) || []
        const currency = detectCurrency({ locales })
        const displayLocale = locales[0] || undefined
        nodes.forEach((el) => {
          const amount = Number(el.dataset.money)
          if (!Number.isFinite(amount)) return
          const suffix = el.dataset.moneySuffix || ''
          const toRaw = el.dataset.moneyTo
          const headMoney = formatMoney(amount, currency, displayLocale)
          el.textContent = toRaw != null && toRaw !== ''
            ? `${headMoney}–${formatMoney(Number(toRaw), currency, displayLocale)}${suffix}`
            : `${headMoney}${suffix}`
        })
      }
    }

    // Animated auto-backup ticker on the "How it works" step (reduced-motion aware).
    {
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
          const id = setInterval(() => { tick = (tick + 1) % labels.length; apply() }, 1100)
          cleanups.push(() => clearInterval(id))
        }
      }
    }

    return () => cleanups.forEach((fn) => fn())
  })
</script>

<svelte:head>{@html head}</svelte:head>

<a class="skip-link" href="#main">{t.meta.skipLink}</a>
{@html body}
{@html noscript}
