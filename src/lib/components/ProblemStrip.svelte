<script>
  import { money } from '$lib/money.js'

  let { t, intl } = $props()
  const p = t.problems
</script>

<section class="problem-strip" aria-labelledby="problems-heading">
  <div class="wrap">
    <div class="head">
      <span class="tape">{p.tape}</span>
    </div>
    <h2 id="problems-heading">{@html p.h2Html}</h2>
    <ul class="problem-grid">
      {#each p.woes as w, i}
        <li class="problem-card">
          <div class="head">
            <span><span aria-hidden="true">▸ </span>{#if i === 2}{@html money(15, { suffix: t.money.perMonthShort, intl })}{:else}{w.stamp}{/if}</span>
            <span class="tag">{w.tag}</span>
          </div>
          <p class="text">{w.text}</p>
        </li>
      {/each}
    </ul>
  </div>
</section>
