<script>
  // The recurring retro-cartridge visual. Mock chrome (game names, paths,
  // status chips) stays as passed-in text — deliberately English everywhere.
  const CART_SIZES = {
    sm: { w: 200, topH: 22, fontMul: 0.85 },
    md: { w: 250, topH: 28, fontMul: 1 },
    lg: { w: 320, topH: 36, fontMul: 1.18 },
  }
  let {
    color = '#ff5f4e', name = 'SATISFACTORY', meta = '2d · 308 KB', files = '2 files',
    status = 'AUTO ON', statusKind = 'on', lock = null, tilt = 0, size = 'md',
    showVersions = true, scribble = null,
  } = $props()
  const s = $derived(CART_SIZES[size] || CART_SIZES.md)
  const style = $derived(
    [`--c:${color}`, `width:${s.w}px`, tilt ? `transform:rotate(${tilt}deg)` : ''].filter(Boolean).join(';'),
  )
</script>

<div class="cart" style={style}>
  <div class="top" style="height:{s.topH}px"></div>
  <div class="screws" style="top:{s.topH + 14}px">
    <span class="s"></span>
    <span class="s"></span>
  </div>
  <div class="lbl">
    <div class="name" style="font-size:{12 * s.fontMul}px">{name}</div>
    <div class="meta">{meta}</div>
    {#if files}<div class="meta">{files}</div>{/if}
    <div class="chiprow">
      <span class="chip {statusKind}">{status}</span>
      {#if lock}<span class="chip {lock.kind}">{lock.txt}</span>{/if}
    </div>
    {#if showVersions}
      <div class="versions">
        <div class="vbtn"><span>VERSIONS</span><span>→</span></div>
      </div>
    {/if}
  </div>
  <div class="pins"></div>
  {#if scribble}<span class="scribble">{scribble}</span>{/if}
</div>
