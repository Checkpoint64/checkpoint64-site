<script>
  let { t } = $props()
  const f = t.features
</script>

<section id="features" aria-labelledby="features-heading">
  <div class="wrap">
    <div class="head">
      <span class="tape">▮ {f.tape}</span>
    </div>
    <h2 id="features-heading">{@html f.h2Html}</h2>
    <p class="lede">{f.lede}</p>
    <div class="features">
      {#each f.items as it}
        <div class="feat">
          <div class="ico">▮ {it.tag}</div>
          <h3>{it.title}</h3>
          <p>{it.body}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
