import './style.css'

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[c]))

const CART_SIZES = {
  sm: { w: 200, topH: 22, fontMul: 0.85 },
  md: { w: 250, topH: 28, fontMul: 1 },
  lg: { w: 320, topH: 36, fontMul: 1.18 },
}

function cartridge({
  color = '#ff5f4e',
  name = 'SATISFACTORY',
  meta = '2d · 308 KB',
  files = '2 files',
  status = 'AUTO ON',
  statusKind = 'on',
  lock = null,
  tilt = 0,
  size = 'md',
  showVersions = true,
  scribble = null,
} = {}) {
  const s = CART_SIZES[size] || CART_SIZES.md
  const style = [
    `--c:${color}`,
    `width:${s.w}px`,
    tilt ? `transform:rotate(${tilt}deg)` : '',
  ].filter(Boolean).join(';')
  const nameStyle = `font-size:${12 * s.fontMul}px`
  const screwTop = s.topH + 14

  const lockChip = lock
    ? `<span class="chip ${esc(lock.kind)}">${esc(lock.txt)}</span>`
    : ''

  return `
    <div class="cart" style="${style}">
      <div class="top" style="height:${s.topH}px"></div>
      <div class="screws" style="top:${screwTop}px">
        <span class="s"></span>
        <span class="s"></span>
      </div>
      <div class="lbl">
        <div class="name" style="${nameStyle}">${esc(name)}</div>
        <div class="meta">${esc(meta)}</div>
        ${files ? `<div class="meta">${esc(files)}</div>` : ''}
        <div class="chiprow">
          <span class="chip ${esc(statusKind)}">${esc(status)}</span>
          ${lockChip}
        </div>
        ${showVersions ? `
          <div class="versions">
            <div class="vbtn"><span>VERSIONS</span><span>→</span></div>
          </div>
        ` : ''}
      </div>
      <div class="pins"></div>
      ${scribble ? `<span class="scribble">${esc(scribble)}</span>` : ''}
    </div>
  `
}

function topNav() {
  return `
    <nav class="top">
      <div class="inner">
        <div class="brand">CHECKPOINT64</div>
        <div class="links">
          <a href="#how">HOW IT WORKS</a>
          <a href="#shelf">THE SHELF</a>
          <a href="#features">FEATURES</a>
          <a href="#pricing">PRICING</a>
          <a href="#faq">FAQ</a>
        </div>
        <a class="cta" href="#download">JOIN LIST ↗</a>
      </div>
    </nav>
  `
}

function hero() {
  const heroCarts = [
    { slot: 'slot-a', opts: { color: '#3df0ff', name: 'FACTORIO',          meta: '6h · 14.2 MB',  files: '48 files', status: 'SYNCED',  statusKind: 'on',   tilt: -7, size: 'md' } },
    { slot: 'slot-b', opts: { color: '#ffd23f', name: 'STARDEW Y3 SPRING', meta: 'just now · 4.1 MB', files: '3 files', status: 'AUTO ON', statusKind: 'on',   lock: { txt: 'LOCK U', kind: 'on' }, tilt: 5, size: 'md' } },
    { slot: 'slot-c', opts: { color: '#ff5f4e', name: 'SATISFACTORY DEDI', meta: '2d · 308 KB',   files: '2 files',  status: 'AUTO ON', statusKind: 'on',   tilt: 2,  size: 'lg', scribble: 'latest run!' } },
    { slot: 'slot-d', opts: { color: '#a07cff', name: 'ELDEN RING NG+3',   meta: '11h · 92 KB',   files: '1 file',   status: 'DIRTY',   statusKind: 'warn', tilt: -3, size: 'sm' } },
  ]

  return `
    <header class="hero">
      <div class="wrap">
        <div class="grid">
          <div>
            <div class="eyebrow">
              <span class="dot"></span>
              v1.4.2 · OUT NOW · WIN · MAC · LINUX
            </div>
            <h1>NEVER LOSE<br/>A SAVE <span class="accent">AGAIN.</span></h1>
            <p class="sub">
              Checkpoint64 watches your game save folders and quietly versions
              them to the cloud. Restore from any checkpoint. Co-op with friends
              without overwriting each other. Sleep well after that 14-hour run.
            </p>
            <div class="ctas">
              <a href="#download" class="btn prim">JOIN THE LIST <span>↗</span></a>
              <a href="#how" class="btn ghost">SEE IT WORK</a>
            </div>
            <div class="small">
              <span>one-time purchase</span>
              <span>no subscription</span>
              <span>yours, forever</span>
            </div>
          </div>
          <div style="position:relative;min-height:480px">
            <div class="hero-stack">
              ${heroCarts.map(c => `<div class="slot ${c.slot}">${cartridge(c.opts)}</div>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </header>
  `
}

function problemStrip() {
  const woes = [
    { stamp: '01:14 AM', text: 'factorio 2.1 dropped, your save migration crashed mid-write', tag: 'RIP' },
    { stamp: 'WED 6PM', text: 'co-op partner saved over your stardew year 4 wedding run',     tag: 'OW'  },
    { stamp: 'TUE',     text: 'swapped to the new laptop, your appdata folder did not come along', tag: 'SAD' },
    { stamp: '??',      text: "you don't even know which file is the right one anymore",      tag: '?'   },
  ]
  return `
    <section style="padding:90px 0 100px">
      <div class="wrap">
        <div class="head">
          <span class="tape">A LOAD-BEARING TYPE OF PAIN</span>
        </div>
        <h2>WHAT THIS SOLVES,<br/><span class="accent">ROUGHLY.</span></h2>
        <div class="problem-grid">
          ${woes.map(w => `
            <div class="problem-card">
              <div class="head">
                <span>▸ ${esc(w.stamp)}</span>
                <span class="tag">${esc(w.tag)}</span>
              </div>
              <div class="text">${esc(w.text)}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `
}

function howItWorks() {
  return `
    <section class="paper" id="how">
      <div class="wrap">
        <div class="head">
          <span class="tape" style="color:#a82828">▮ HOW CHECKPOINT64 WORKS</span>
        </div>
        <h2>POINT IT AT A FOLDER.<br/><span class="accent">FORGET ABOUT IT.</span></h2>
        <p class="lede">
          The whole point is that you don't have to think about save files anymore.
          Three steps, once, and you're done forever.
        </p>

        <div class="steps">
          <div class="step">
            <div class="n">01 · UPLOAD</div>
            <h3>HIT UPLOAD ↑</h3>
            <p>Grab whatever your save folder looks like right now and send a copy
            to the cloud. Each upload becomes its own labelled <em>version</em>.</p>
            <div class="visual step-upload">
              <div class="src-label">SOURCE</div>
              <div class="src-path">C:\\Users\\you\\AppData\\Local\\FactoryGame\\Saved\\…</div>
              <div class="arrow">↓</div>
              <div class="v-pill">v#001 · UPLOADED</div>
            </div>
          </div>

          <div class="step">
            <div class="n">02 · AUTO-BACKUP</div>
            <h3>FLIP AUTO ON</h3>
            <p>Checkpoint64 peeks at your save folder every couple of minutes. If
            anything changed since last time, it uploads a fresh version on its
            own. Differential — only changed files transfer.</p>
            <div class="visual step-auto" data-step-auto>
              <div class="bars">
                <div class="bar on"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
              </div>
              <div class="label" data-auto-label>WATCHING…</div>
              <div class="meta">every 2 minutes · differential</div>
            </div>
          </div>

          <div class="step">
            <div class="n">03 · RESTORE</div>
            <h3>ROLL IT BACK</h3>
            <p>Click <b>Versions →</b> on any save to see every backup. From there,
            download or <b>Restore</b> — Checkpoint64 writes the files back
            and marks that version as current.</p>
            <div class="visual step-restore">
              <div class="v-row"><span>v#012</span><span class="when">12m ago</span><span class="restore">RESTORE</span></div>
              <div class="v-row cur"><span>v#011</span><span class="when">2h ago</span><span class="here">← HERE</span></div>
              <div class="v-row"><span>v#010</span><span class="when">yesterday</span><span class="restore">RESTORE</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}

function shelfMock() {
  const games = [
    {
      name: 'Satisfactory',
      path: 'C:\\Users\\you\\AppData\\Local\\FactoryGame\\Saved\\…',
      carts: [
        { color: '#ff5f4e', name: 'DEDI',     meta: '2d · 308 KB', files: '2 files', status: 'AUTO ON', statusKind: 'on',   lock: { txt: 'LOCK U', kind: 'on' } },
        { color: '#ff5f4e', name: 'SOLO RUN', meta: '5h · 1.2 MB', files: '4 files', status: 'SYNCED',  statusKind: 'on'   },
        { color: '#ff5f4e', name: 'MOD TEST', meta: '3d · 880 KB', files: '3 files', status: 'AUTO ─',  statusKind: 'dim'  },
      ],
    },
    {
      name: 'Stardew Valley',
      path: '%AppData%\\StardewValley\\Saves\\',
      carts: [
        { color: '#ffd23f', name: 'Y3 SPRING WEDDING', meta: 'now · 4.1 MB',       files: '3 files', status: 'SYNCED', statusKind: 'on'   },
        { color: '#ffd23f', name: 'CO-OP W/ JESS',     meta: 'yesterday · 5.6 MB', files: '5 files', status: 'DIRTY',  statusKind: 'warn', lock: { txt: 'JESS', kind: 'warn' } },
      ],
    },
    {
      name: 'Elden Ring',
      path: '%AppData%\\EldenRing\\…',
      noEmpty: true,
      carts: [
        { color: '#a07cff', name: 'NG+3 RL1',    meta: '11h · 92 KB', files: '1 file', status: 'AUTO ON', statusKind: 'on'  },
        { color: '#a07cff', name: 'FAITH BUILD', meta: '1w · 92 KB',  files: '1 file', status: 'ERROR',   statusKind: 'err' },
      ],
    },
  ]

  return `
    <section id="shelf">
      <div class="wrap">
        <div class="head">
          <span class="tape">▮ A LOOK AT THE APP</span>
          <span class="hand" style="color:var(--accent);font-size:22px">not a screenshot — live</span>
        </div>
        <h2>YOUR LIBRARY<br/>IS A <span class="accent">CARTRIDGE SHELF.</span></h2>
        <p class="lede">
          Every save is a cartridge. Same game, different runs? Same shelf, different
          carts. Hover, click, drag — it's an app, not a backup tool with a UI bolted on.
        </p>

        <div class="shelf-frame">
          <div class="bar">
            <span><span class="accent">▮</span> CHECKPOINT64 · CART SHELF</span>
            <span style="opacity:.7">3 games · 7 carts</span>
          </div>
          <div class="body">
            ${games.map(g => `
              <section class="shelf-game">
                <div class="sechead">
                  <h4>${esc(g.name)}</h4>
                  <span class="pa">${esc(g.path)}</span>
                  <a class="add" href="#">+ <b>another</b></a>
                </div>
                <div class="shelf-grid">
                  ${g.carts.map(c => cartridge({ ...c, size: 'md' })).join('')}
                  ${g.noEmpty ? '' : '<a href="#" class="empty">+ slot</a>'}
                </div>
              </section>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `
}

function features() {
  const feats = [
    { tag: 'VERSION HISTORY', title: 'EVERY UPLOAD\nIS A VERSION.',
      body: 'Browse a flat timeline of every backup with file count, size, and the diff from the previous version. Restore writes back AND marks current — no confusion.' },
    { tag: 'CO-OP LOCKS', title: 'ONE PERSON\nUPLOADS AT A TIME.',
      body: 'Share a namespace with friends. Whoever holds the lock can upload; everyone else sees who. Lock expired? Take it over with a warning prompt.' },
    { tag: 'DIFFERENTIAL', title: 'ONLY CHANGED\nBYTES TRANSFER.',
      body: 'Every save is split into content-addressed blobs. A 14 MB save where only one file moved uploads 8 KB. Your bandwidth and quota will be fine.' },
    { tag: 'PER-GAME RULES', title: 'INCLUDE / EXCLUDE\nWHAT MATTERS.',
      body: 'Glob patterns per save. Skip the crash dumps and screenshots, keep the .sav. Auto-detected for the 40+ games Checkpoint64 already knows.' },
    { tag: 'AGENT', title: 'RUNS IN THE\nBACKGROUND.',
      body: "Native Tauri app — tiny memory, no Electron. Polls every 2 minutes, sleeps when nothing changes. Doesn't lock files while the game is running." },
    { tag: 'LOGBOOK', title: 'WHO DID WHAT,\nWHEN.',
      body: 'Every claim, upload, restore, and lock-takeover ends up in the namespace logbook. Useful when your co-op partner blames you for the bad run.' },
  ]
  return `
    <section id="features">
      <div class="wrap">
        <div class="head">
          <span class="tape">▮ FEATURES</span>
        </div>
        <h2>WHAT'S IN <span class="accent">THE BOX.</span></h2>
        <p class="lede">
          Built the way a long-time save-scummer would build it. No ceremony,
          no SaaS fluff, no "powered by AI." Just a working save vault.
        </p>
        <div class="features">
          ${feats.map(f => `
            <div class="feat">
              <div class="ico">▮ ${esc(f.tag)}</div>
              <h3>${esc(f.title)}</h3>
              <p>${esc(f.body)}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `
}

function logbookPreview() {
  const entries = [
    { t: '12m',  who: 'you',  tag: 'v#012', body: 'uploaded a new version',                  id: '8af23901' },
    { t: '1h',   who: 'jess', tag: 'lock',  body: 'claimed the lock',                        id: '8af23901' },
    { t: '1h',   who: 'jess', tag: 'v#011', body: 'auto-backed up',                          id: '8af23901' },
    { t: '3h',   who: 'you',  tag: 'lock',  body: 'released the lock',                       id: '8af23901' },
    { t: 'yest', who: 'kel',  tag: 'rest',  body: 'restored a prior version',                id: '2b91f0c4' },
    { t: 'yest', who: 'you',  tag: 'save',  body: 'created <b>STARDEW Y3 SPRING</b>',        id: '2b91f0c4' },
  ]
  return `
    <section class="paper">
      <div class="wrap">
        <div class="head">
          <span class="tape" style="color:#a82828">▮ LOGBOOK · LIVE</span>
          <span class="hand" style="color:#a82828;font-size:22px">shared with your namespace</span>
        </div>
        <h2>BLAME THE <span class="accent">RIGHT PERSON.</span></h2>
        <p class="lede">
          Every action a namespace member takes is written to a tape. Useful for
          co-op groups, modded servers, speedrunning teams, and "wait, who deleted that?"
        </p>

        <div class="logbook">
          <div class="lh">
            <span class="t">▮ LOGBOOK</span>
            <span class="c">${entries.length} events</span>
          </div>
          ${entries.map(e => `
            <div class="logentry">
              <span class="stamp">${esc(e.t)}</span>
              <div>
                <b>${esc(e.tag)}</b>
                <b>${esc(e.who)}</b>
                <span> ${e.body}</span>
              </div>
              <span class="go">→ ${esc(e.id.slice(0, 8))}</span>
            </div>
          `).join('')}
          <div class="live">live · refresh on visit</div>
        </div>
      </div>
    </section>
  `
}

function priceCard({ tag, price, unit, tagline, features: fs, cta, highlight }) {
  return `
    <div class="price-card${highlight ? ' hl' : ''}">
      ${highlight ? '<div class="badge">★ MOST CARTS</div>' : ''}
      <div class="tag">▮ ${esc(tag)}</div>
      <div class="priceline">
        <span class="price">${esc(price)}</span>
        <span class="unit">${esc(unit)}</span>
      </div>
      <div class="tagline">${esc(tagline)}</div>
      <ul>${fs.map(f => `<li>${esc(f)}</li>`).join('')}</ul>
      <a href="#download" class="cta-btn">${esc(cta)}</a>
    </div>
  `
}

function pricing() {
  return `
    <section id="pricing">
      <div class="wrap">
        <div class="head">
          <span class="tape">▮ PRICING</span>
        </div>
        <h2>PAY ONCE.<br/><span class="accent">KEEP IT FOREVER.</span></h2>
        <p class="lede">
          A one-time license. No subscription, no per-seat games, no surprise bill
          when you forget to cancel. Pricing's not locked in yet — sign up below
          and we'll let you know before launch.
        </p>

        <div class="price-grid">
          ${priceCard({
            tag: 'SOLO', price: '$TBC', unit: 'one-time',
            tagline: 'for one player',
            features: ['unlimited games', 'full version history', 'local backups', 'cloud sync', 'lifetime updates'],
            cta: 'NOTIFY ME',
          })}
          ${priceCard({
            tag: 'CO-OP', price: '$TBC', unit: 'one-time',
            tagline: 'for groups up to 8',
            features: ['everything in solo', 'shared namespaces', 'co-op locks', 'activity logbook', '8 seats included'],
            cta: 'NOTIFY ME', highlight: true,
          })}
          ${priceCard({
            tag: 'CLAN', price: '$TBC', unit: 'one-time',
            tagline: 'for modded servers',
            features: ['everything in co-op', 'unlimited seats', 'webhook integrations', 'retention policies', 'priority support'],
            cta: 'TALK TO US',
          })}
        </div>

        <div class="notify-strip">
          <div>
            <span class="hand" style="color:var(--accent);font-size:20px;margin-right:10px">↘</span>
            Pricing isn't final yet. Drop your email and we'll tell you the day it ships.
          </div>
          <form data-notify-form>
            <input type="email" placeholder="you@somewhere.com" />
            <button type="submit" class="btn prim">NOTIFY ME</button>
          </form>
        </div>
      </div>
    </section>
  `
}

function downloadStrip() {
  return `
    <section class="cta-strip" id="download">
      <div class="wrap">
        <div class="inner">
          <div>
            <h2>SHIPPING SOON.<br/>GET ON THE<br/><span class="invert">LIST.</span></h2>
            <p>
              We're in private beta. Drop your email, pick a platform, and we'll
              ping you the moment your build is ready.
            </p>
            <div class="signoff">↘ no spam, one email at launch</div>
          </div>
          <div class="downloads">
            <a class="dl" href="#"><span>WINDOWS</span><span class="arch">.msi · coming soon</span></a>
            <a class="dl" href="#"><span>MACOS</span><span class="arch">.dmg · arm64 + x64 · soon</span></a>
            <a class="dl" href="#"><span>LINUX</span><span class="arch">.appimage · coming soon</span></a>
            <form data-notify-form>
              <input type="email" placeholder="you@somewhere.com" />
              <button type="submit" class="dl"><span>NOTIFY ↗</span></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `
}

function faq() {
  const items = [
    { q: "WHAT IS A 'SAVE'?",
      a: 'Whatever your game decides to put on disk. Checkpoint64 treats one or more files in a folder as one save and versions the whole bundle together. You point it at the folder and tell it which files matter (glob patterns) — defaults are set for 40+ common games.' },
    { q: 'DO YOU UPLOAD WHILE THE GAME IS RUNNING?',
      a: 'Yes, carefully. The agent never holds a write lock on save files. If a file is mid-write when it polls, the upload skips that tick and tries again — no torn writes, no crashes. Most games close their handles between autosaves anyway.' },
    { q: 'CAN I USE IT WITHOUT THE CLOUD?',
      a: "Yep. Local-only mode keeps every version on a second disk or external drive. You lose co-op and cross-device, but you keep version history and restore — useful if you self-host or just don't trust the cloud." },
    { q: 'WHAT HAPPENS IF MY CO-OP PARTNER OVERWRITES MY UPLOAD?',
      a: "They can't, by design. Only the lock-holder can upload. If they want to push, they have to claim the lock — which kicks you out with a warning. Your last version stays intact in history; you can always restore back to it." },
    { q: 'DOES THIS WORK FOR CONSOLE SAVES?',
      a: 'Only for consoles that expose their save folder to a PC — so emulators, cloud save exports from PS+/Xbox, and Steam-cloud-via-PC. The agent runs on Win/Mac/Linux only; no console clients.' },
    { q: 'WHAT WILL IT COST?',
      a: "A one-time license — no subscription, no per-month, no per-seat fees. We're still settling on the exact number. Sign up to the launch list and we'll tell you before everyone else, and lock you in at the early-bird rate." },
    { q: 'WHEN DOES IT SHIP?',
      a: "Soon — we're in private beta now and aiming for a public launch later this year. Get on the list and we'll send one email the day Windows / Mac / Linux builds are ready." },
  ]
  return `
    <section id="faq">
      <div class="wrap">
        <div class="head">
          <span class="tape">▮ FAQ</span>
        </div>
        <h2>FREQUENTLY <span class="accent">CHECKED.</span></h2>
        <div class="faq">
          ${items.map(it => `
            <details>
              <summary>${esc(it.q)}</summary>
              <div class="body">${esc(it.a)}</div>
            </details>
          `).join('')}
        </div>
      </div>
    </section>
  `
}

function footer() {
  return `
    <footer class="bot">
      <div class="wrap">
        <div class="inner">
          <div class="col1">
            <div class="brand">CHECKPOINT64</div>
            <div class="blurb">
              A small save-vault for big runs. Built by people who lost a 200-hour
              Factorio base and never recovered.
            </div>
            <div class="sign">made on a long weekend ✦</div>
          </div>
          <div>
            <h5>PRODUCT</h5>
            <ul>
              <li><a href="#how">How it works</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#download">Join the list</a></li>
              <li><a href="#">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h5>RESOURCES</h5>
            <ul>
              <li><a href="#">Game database</a></li>
              <li><a href="#">Roadmap</a></li>
              <li><a href="#">Beta access</a></li>
              <li><a href="#">Press kit</a></li>
            </ul>
          </div>
          <div>
            <h5>COMPANY</h5>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Discord</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Status</a></li>
            </ul>
          </div>
        </div>
        <div class="copyline">
          <span>© 2026 CHECKPOINT64 · ALL RIGHTS RESERVED</span>
          <span style="opacity:.6">NOT AFFILIATED WITH ANY GAME LISTED ABOVE</span>
        </div>
      </div>
    </footer>
  `
}

document.querySelector('#app').innerHTML = [
  topNav(),
  hero(),
  problemStrip(),
  howItWorks(),
  shelfMock(),
  features(),
  logbookPreview(),
  pricing(),
  downloadStrip(),
  faq(),
  footer(),
].join('')

// Animated auto-backup ticker on the "How it works" step
const autoEl = document.querySelector('[data-step-auto]')
if (autoEl) {
  const labels = ['WATCHING…', 'CHANGES DETECTED', 'UPLOADING…', 'SYNCED']
  const colors = ['#3df0ff', '#ffe0a8', '#a07cff', '#c8efb8']
  const bars = autoEl.querySelectorAll('.bar')
  const labelEl = autoEl.querySelector('[data-auto-label]')
  let tick = 0
  const apply = () => {
    bars.forEach((b, i) => b.classList.toggle('on', i <= tick))
    labelEl.textContent = labels[tick]
    labelEl.style.background = colors[tick]
  }
  apply()
  setInterval(() => { tick = (tick + 1) % labels.length; apply() }, 1100)
}

// Handle form submissions to backend API
document.querySelectorAll('[data-notify-form]').forEach((form) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    
    const emailInput = form.querySelector('input[type="email"]')
    const submitBtn = form.querySelector('button[type="submit"]')
    const email = emailInput.value.trim()
    
    if (!email) {
      alert('Please enter your email address')
      return
    }
    
    // Disable form while submitting
    emailInput.disabled = true
    submitBtn.disabled = true
    const originalText = submitBtn.innerHTML
    submitBtn.innerHTML = '<span>SENDING...</span>'
    
    try {
      const response = await fetch('https://savebetter.fly.dev/public/api/waitingList', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email})
      })
      
      if (response.ok) {
        // Success
        submitBtn.innerHTML = '<span>✓ ADDED</span>'
        emailInput.value = ''
        setTimeout(() => {
          submitBtn.innerHTML = originalText
        }, 3000)
      } else {
        // Server error
        throw new Error(`Server error: ${response.status}`)
      }
    } catch (error) {
      // Network or other error
      console.error('Error submitting form:', error)
      alert('Failed to join the waiting list. Please try again later.')
      submitBtn.innerHTML = originalText
    } finally {
      // Re-enable form
      emailInput.disabled = false
      submitBtn.disabled = false
    }
  })
})
