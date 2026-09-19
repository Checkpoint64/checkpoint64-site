<script>
  import { fmt } from '$lib/i18n/config.js'
  import { SITE_PAGES, GUIDE_GROUPS } from '$lib/nav.js'

  // Two prefixes, same split as TopNav: `lp` reaches the current locale's
  // product pages, `prefix` reaches the site root for the English-only content
  // (blog, guides, legal, about, contact).
  //
  // Four link columns, one per kind of page. The old three were PRODUCT /
  // RESOURCES / COMPANY, and RESOURCES was eleven links of five kinds — a blog,
  // a help page, the games hub, five how-to guides, two launcher pages and a
  // changelog — in one flat list. Now PRODUCT reads SITE_PAGES so it cannot
  // drift from the top nav; GUIDES and SAVE LOCATIONS read GUIDE_GROUPS (their
  // labels stay English there because those pages are); COMPANY keeps the
  // people-and-news links; and the legal links sit in the bottom bar, where a
  // visitor expects to find them.
  let { t, year, prefix, lp = prefix, onCookieSettings } = $props()
  const f = t.footer
</script>

<footer class="bot" role="contentinfo">
  <div class="wrap">
    <div class="inner">
      <div class="col1">
        <div class="brand">CHECKPOINT64</div>
        <p class="blurb">{f.blurb}</p>
        <p class="sign">{f.sign} <span aria-hidden="true">✦</span></p>
      </div>
      <nav class="fcol" aria-label={f.aria.product}>
        <h2 class="footer-h">{f.product}</h2>
        <ul>
          {#each SITE_PAGES as page}
            <li><a href="{lp}{page.slug}/">{f.links[page.key]}</a></li>
          {/each}
        </ul>
      </nav>
      {#each GUIDE_GROUPS as group}
        <nav class="fcol" aria-label={f.aria[group.key]}>
          <h2 class="footer-h">{f[group.key]}</h2>
          <ul>
            {#each group.items as item}
              <li><a href="{prefix}{item.slug}/" class:hub={item.hub}>{item.label}</a></li>
            {/each}
          </ul>
        </nav>
      {/each}
      <nav class="fcol" aria-label={f.aria.company}>
        <h2 class="footer-h">{f.company}</h2>
        <ul>
          <li><a href="{prefix}about/">{f.links.about}</a></li>
          <li><a href="{prefix}blog/">{f.links.blog}</a></li>
          <li><a href="https://github.com/checkpoint64/checkpoint64/releases" target="_blank" rel="noopener noreferrer" aria-label={f.changelogAria}>{f.links.changelog}</a></li>
          <li><a href="{prefix}press/">{f.links.press}</a></li>
          <li><a href="{prefix}contact/">{f.links.contact}</a></li>
          <li><a href="https://discord.gg/kxeYwuuHEn" target="_blank" rel="noopener noreferrer" aria-label={f.discordAria}>{f.links.discord}</a></li>
        </ul>
      </nav>
    </div>
    <div class="copyline">
      <span class="copy">{fmt(f.copyTpl, year)}</span>
      <nav class="legal" aria-label={f.aria.legal}>
        <a href="{prefix}terms/">{f.links.terms}</a>
        <a href="{prefix}privacy/">{f.links.privacy}</a>
        <button type="button" class="footer-linkbtn" onclick={onCookieSettings}>{f.links.cookies}</button>
      </nav>
      <span class="disclaimer">{f.notAffiliated}</span>
    </div>
  </div>
</footer>
