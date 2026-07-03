<script>
  import { money } from '$lib/money.js'
  import { fmt } from '$lib/i18n/config.js'

  let { t, intl } = $props()
  const f = t.faq
  // Item index 3 (dedicated-server answer) carries the dynamic savings figure.
  const dedi = money(120, { to: 240, suffix: t.money.aYear, intl })
</script>

<section id="faq" aria-labelledby="faq-heading">
  <div class="wrap">
    <div class="head">
      <span class="tape">{f.tape}</span>
    </div>
    <h2 id="faq-heading">{@html f.h2Html}</h2>
    <div class="faq">
      {#each f.items as it}
        <details>
          <summary>{it.q}</summary>
          <div class="body">{@html fmt(it.a, dedi)}</div>
        </details>
      {/each}
    </div>
  </div>
</section>
