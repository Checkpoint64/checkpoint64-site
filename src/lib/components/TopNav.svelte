<script>
  import { onMount } from 'svelte'
  import LangSwitch from './LangSwitch.svelte'
  import ThemeToggle from './ThemeToggle.svelte'

  let { t, locale, prefix } = $props()
  const n = t.nav
  // Single source for the in-page section anchors — rendered into the desktop
  // row and again into the mobile drawer.
  const sections = [
    ['#how', n.links.how],
    ['#shelf', n.links.shelf],
    ['#features', n.links.features],
    ['#creators', n.links.creators],
    ['#savings', n.links.savings],
    ['#pricing', n.links.pricing],
    ['#faq', n.links.faq],
  ]

  // Nav disclosure menus (language picker + mobile drawer): close siblings on
  // open, Escape, outside-click, close on link tap; persist explicit language
  // choice. Children mount before this, so both menus are in the DOM here.
  onMount(() => {
    const menus = Array.from(document.querySelectorAll('details.menu'))
    if (!menus.length) return
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
      menus.forEach((menu) => { if (menu.open && !menu.contains(e.target)) menu.open = false })
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  })
</script>

<nav class="top" aria-label="Primary">
  <div class="inner">
    <a href="/" class="brand" aria-label={n.brandAria}>CHECKPOINT64</a>
    <div class="links">
      {#each sections as [h, l]}<a href={h}>{l}</a>{/each}
      <a href="{prefix}blog/" class="blog">{n.links.blog}</a>
    </div>
    <div class="nav-actions">
      <LangSwitch {t} {locale} {prefix} />
      <ThemeToggle />
      <a class="cta" href="#download" aria-label={n.ctaAria}>{n.cta} ↗</a>
      <details class="nav-menu menu">
        <summary class="nav-toggle" aria-label={n.menuAria} title={n.menuAria}>
          <span class="nav-toggle-icon" aria-hidden="true">☰</span>
        </summary>
        <div class="nav-pop">
          <a class="nav-dl" href="#download" aria-label={n.ctaAria}>{n.cta} ↗</a>
          {#each sections as [h, l]}<a href={h}>{l}</a>{/each}
          <a href="{prefix}blog/" class="blog">{n.links.blog}</a>
        </div>
      </details>
    </div>
  </div>
</nav>
