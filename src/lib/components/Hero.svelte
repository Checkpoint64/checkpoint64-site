<script>
  import Cartridge from './Cartridge.svelte'

  let { t } = $props()
  const h = t.hero
  const heroCarts = [
    { slot: 'slot-a', opts: { color: '#3df0ff', name: 'FACTORIO', meta: '6h · 14.2 MB', files: '48 files', status: 'SYNCED', statusKind: 'on', tilt: -7, size: 'md' } },
    { slot: 'slot-b', opts: { color: '#ffd23f', name: 'STARDEW Y3 SPRING', meta: 'just now · 4.1 MB', files: '3 files', status: 'AUTO ON', statusKind: 'on', lock: { txt: 'LOCK U', kind: 'on' }, tilt: 5, size: 'md' } },
    { slot: 'slot-c', opts: { color: '#ff5f4e', name: 'SATISFACTORY', meta: '2d · 308 KB', files: '2 files', status: 'AUTO ON', statusKind: 'on', tilt: 2, size: 'lg' } },
    { slot: 'slot-d', opts: { color: '#a07cff', name: 'ELDEN RING NG+3', meta: '11h · 92 KB', files: '1 file', status: 'DIRTY', statusKind: 'warn', tilt: -3, size: 'sm' } },
  ]
</script>

<header class="hero" role="banner">
  <div class="wrap">
    <div class="grid">
      <div>
        <p class="eyebrow">
          <span class="dot" aria-hidden="true"></span>
          EARLY BUILD · FREE · WIN · MAC · LINUX
        </p>
        <h1>{@html h.h1Html}</h1>
        <p class="sub">{h.sub}</p>
        <div class="ctas">
          <a href="#download" class="btn prim" aria-label={h.ctaPrimaryAria}>{h.ctaPrimary} <span aria-hidden="true">↗</span></a>
          <a href="#how" class="btn ghost" aria-label={h.ctaSecondaryAria}>{h.ctaSecondary}</a>
        </div>
        <p class="small">
          {#each h.small as s}<span>{s}</span>{/each}
        </p>
      </div>
      <div class="hero-art" aria-hidden="true">
        <div class="hero-stack">
          {#each heroCarts as c}<div class="slot {c.slot}"><Cartridge {...c.opts} /></div>{/each}
        </div>
      </div>
    </div>
  </div>
</header>
