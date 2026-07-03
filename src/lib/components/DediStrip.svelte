<script>
  import { money } from '$lib/money.js'
  import { fmt } from '$lib/i18n/config.js'

  // `prefix` builds the depth-correct href for the one link embedded in the
  // savings copy (footTpl's {1}): './blog/…' at the root, '../blog/…' on the
  // localized pages. Keeping the URL out of the copy string avoids any ./→../
  // string rewriting.
  let { t, intl, prefix = './' } = $props()
  const sv = t.savings
  const m = t.money
  const dediGuideUrl = `${prefix}blog/ditch-the-dedicated-server/`
  const cardN = [
    money(15, { suffix: m.perMonthShort, intl }),
    '~3.6%',
    money(0, { suffix: m.perMonthShort, intl }),
  ]
  const cardBody = [
    fmt(sv.cards[0].bodyTpl,
      money(15, { suffix: m.aMonth, intl }),
      money(180, { suffix: m.aYear, intl }),
      money(900, { suffix: m.overFive, intl })),
    fmt(sv.cards[1].bodyTpl),
    fmt(sv.cards[2].bodyTpl),
  ]
  const lineVals = [
    money(180, { intl }),
    '~312',
    '~8,448',
    `~${money(173, { intl })}`,
  ]
</script>

<section class="paper" id="savings" aria-labelledby="savings-heading">
  <div class="wrap">
    <div class="head">
      <span class="tape" style="color:#a82828">{sv.tape}</span>
      <span class="hand" style="color:#a82828;font-size:22px">{sv.hand}</span>
    </div>
    <h2 id="savings-heading">{@html sv.h2Html}</h2>
    <p class="lede">{sv.lede}</p>

    <div class="steps">
      {#each sv.cards as c, i}
        <div class="step">
          <div class="n">{@html cardN[i]} · {c.tag}</div>
          <h3>{c.title}</h3>
          <p>{@html cardBody[i]}</p>
        </div>
      {/each}
    </div>

    <div class="dedi-receipt" aria-label={sv.receiptAria}>
      <div class="rh">
        <span>{@html fmt(sv.receiptLabelTpl, money(15, { suffix: m.perMonthShort, intl }))}</span>
        <span class="hand" style="font-size:18px">{sv.receiptYear}</span>
      </div>
      {#each sv.lineKeys as k, i}
        <div class="rrow"><span>{k}</span><b>{@html lineVals[i]}</b></div>
      {/each}
      <div class="rrow total">
        <span>{sv.totalLabel}</span>
        <b class="accent">{@html money(180, { suffix: m.perYear, intl })}</b>
      </div>
      <div class="rfoot">
        {@html fmt(sv.footTpl, money(900, { intl }), dediGuideUrl)}
      </div>
    </div>
  </div>
</section>
