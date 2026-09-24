<script>
  // The full feature grid, on /features/. `showHead` is false when the page
  // header has already stated the heading — /features/'s <h1> is "WHAT'S IN THE
  // BOX", so repeating it as an <h2> directly underneath would just be noise.
  // `notes` renders the footnotes the design puts under the grid.
  let { t, showHead = true, notes = [] } = $props()
  const f = t.features
  // Without the section <h2> the tiles sit straight under the page's <h1>, so
  // they step up a level rather than skip one (h1 → h3 breaks the outline).
  const tileHeading = showHead ? 'h3' : 'h2'
</script>

<section id="features" aria-labelledby={showHead ? 'features-heading' : undefined} aria-label={showHead ? undefined : f.tape}>
  <div class="wrap">
    {#if showHead}
      <div class="head">
        <span class="tape">{f.tape}</span>
      </div>
      <h2 id="features-heading">{@html f.h2Html}</h2>
      <p class="lede">{f.lede}</p>
    {/if}
    <div class="features">
      {#each f.items as it}
        <div class="feat">
          <div class="ico">▮ {it.tag}</div>
          <svelte:element this={tileHeading}>{it.title}</svelte:element>
          <p>{it.body}</p>
        </div>
      {/each}
    </div>
    {#if notes.length}
      <p class="grid-notes">
        {#each notes as n}<span>{n}</span>{/each}
      </p>
    {/if}
  </div>
</section>
