<script>
  // Checkpoint Connect — v2's Steam P2P tunnel, pitched on /co-op/ right after
  // the dedicated-server receipt: the receipt says "stop renting a box", this
  // says "and when you do want everyone in at once, host it yourself". The
  // chips and the 127.0.0.1 line are app chrome, so they stay English.
  let { t } = $props()
  const c = t.coop.connect
  const chipKinds = ['', 'on', 'on']
</script>

<section id="connect" class="connect" aria-labelledby="connect-heading">
  <div class="wrap">
    <div class="head">
      <span class="tape">{c.tape}</span>
      <span class="hand" style="color:var(--accent);font-size:22px">{c.hand}</span>
    </div>
    <h2 id="connect-heading">{@html c.h2Html}</h2>
    <p class="lede">{c.lede}</p>

    <div class="connect-route" aria-hidden="true">
      <span class="connect-end">TEAMMATE · 127.0.0.1:2456</span>
      <span class="connect-wire">═══ STEAM ═══</span>
      <span class="connect-end">HOST · VALHEIM SERVER</span>
    </div>

    <div class="steps">
      {#each c.steps as s, i}
        <div class="step step-chipped">
          <div class="n">{s.label}</div>
          <h3>{s.h3}</h3>
          <p>{s.body}</p>
          <div class="step-chiprow">
            <span class="step-chip {chipKinds[i]}">{s.chip}</span>
          </div>
        </div>
      {/each}
    </div>

    <ul class="creator-points">
      {#each c.points as p}<li><span aria-hidden="true">▸ </span>{p}</li>{/each}
    </ul>
    <p class="creator-pro">{@html c.pairsHtml}</p>
  </div>
</section>
