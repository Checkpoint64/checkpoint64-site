<script>
  import { LOCALES, DEFAULT_LOCALE } from '$lib/i18n/config.js'

  // `prefix` is './' at the site root and '../' on the depth-1 localized pages
  // (/de/, /fr/, /es/) — the same rewrite the old string build applied.
  let { t, locale, prefix } = $props()
  const current = $derived(LOCALES.find((l) => l.code === locale) || LOCALES[0])
</script>

<details class="lang-menu menu">
  <summary aria-label={t.nav.switcherAria} title={t.nav.switcherAria}>
    <span class="lang-cur">{current.label}</span>
    <span class="lang-caret" aria-hidden="true">▾</span>
  </summary>
  <div class="lang-pop">
    {#each LOCALES as l}
      <a
        class="lang-opt"
        class:cur={l.code === locale}
        href={l.code === DEFAULT_LOCALE ? prefix : `${prefix}${l.code}/`}
        hreflang={l.code}
        data-lang={l.code}
        aria-current={l.code === locale ? 'true' : undefined}
      >{l.name}</a>
    {/each}
  </div>
</details>
