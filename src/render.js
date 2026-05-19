// Pure HTML-string renderers for the Checkpoint64 site.
//
// This module is imported BOTH from the browser entry (src/main.js) and from
// Node (vite.config.js) at build time, so it must stay free of any DOM /
// browser-only APIs. Everything in here is just string templates.

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
    <nav class="top" aria-label="Primary">
      <div class="inner">
        <a href="/" class="brand" aria-label="Checkpoint64 — home">CHECKPOINT64</a>
        <div class="links">
          <a href="#how">HOW IT WORKS</a>
          <a href="#shelf">THE SHELF</a>
          <a href="#features">FEATURES</a>
          <a href="#pricing">PRICING</a>
          <a href="#faq">FAQ</a>
        </div>
        <a class="cta" href="#download" aria-label="Join the launch list">JOIN LIST ↗</a>
      </div>
    </nav>
  `
}

function hero() {
  const heroCarts = [
    { slot: 'slot-a', opts: { color: '#3df0ff', name: 'FACTORIO',          meta: '6h · 14.2 MB',  files: '48 files', status: 'SYNCED',  statusKind: 'on',   tilt: -7, size: 'md' } },
    { slot: 'slot-b', opts: { color: '#ffd23f', name: 'STARDEW Y3 SPRING', meta: 'just now · 4.1 MB', files: '3 files', status: 'AUTO ON', statusKind: 'on',   lock: { txt: 'LOCK U', kind: 'on' }, tilt: 5, size: 'md' } },
    { slot: 'slot-c', opts: { color: '#ff5f4e', name: 'SATISFACTORY', meta: '2d · 308 KB',   files: '2 files',  status: 'AUTO ON', statusKind: 'on',   tilt: 2,  size: 'lg', scribble: 'latest run!' } },
    { slot: 'slot-d', opts: { color: '#a07cff', name: 'ELDEN RING NG+3',   meta: '11h · 92 KB',   files: '1 file',   status: 'DIRTY',   statusKind: 'warn', tilt: -3, size: 'sm' } },
  ]

  return `
    <header class="hero" role="banner">
      <div class="wrap">
        <div class="grid">
          <div>
            <p class="eyebrow">
              <span class="dot" aria-hidden="true"></span>
              v1 · OUT SOON · WIN · MAC · LINUX
            </p>
            <h1>NEVER LOSE<br/>A SAVE <span class="accent">AGAIN.</span></h1>
            <p class="sub">
              Your saves, backed up forever. Pass worlds between friends like cartridges.
              No more "who has the latest?" Everyone stays in sync. Roll back bad runs.
              Host goes offline? Someone else picks up. Solo or co-op, always protected.
            </p>
            <div class="ctas">
              <a href="#download" class="btn prim" aria-label="Join the Checkpoint64 launch list">JOIN THE LIST <span aria-hidden="true">↗</span></a>
              <a href="#how" class="btn ghost" aria-label="See how Checkpoint64 works">SEE IT WORK</a>
            </div>
            <p class="small">
              <span>one-time purchase</span>
              <span>no subscription</span>
              <span>yours, forever</span>
            </p>
          </div>
          <div class="hero-art" aria-hidden="true">
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
    { stamp: '01:14 AM', text: "the host's factorio crashed mid-save — 80 hours of shared world, gone",     tag: 'RIP'   },
    { stamp: 'WED 6PM',  text: 'your co-op friend played alone and saved over your run',                    tag: 'OW'    },
    { stamp: '$15/MO',   text: 'paying for a 24/7 server when your group only plays six hours a week',      tag: 'BILL'  },
    { stamp: 'SAT',      text: "host is on holiday — nobody else has the latest valheim world",             tag: 'STUCK' },
  ]
  return `
    <section style="padding:90px 0 100px" aria-labelledby="problems-heading">
      <div class="wrap">
        <div class="head">
          <span class="tape">STUFF THAT REALLY HURTS</span>
        </div>
        <h2 id="problems-heading">WHAT THIS FIXES,<br/><span class="accent">BASICALLY.</span></h2>
        <ul class="problem-grid">
          ${woes.map(w => `
            <li class="problem-card">
              <div class="head">
                <span><span aria-hidden="true">▸ </span>${esc(w.stamp)}</span>
                <span class="tag">${esc(w.tag)}</span>
              </div>
              <p class="text">${esc(w.text)}</p>
            </li>
          `).join('')}
        </ul>
      </div>
    </section>
  `
}

function howItWorks() {
  return `
    <section class="paper" id="how" aria-labelledby="how-heading">
      <div class="wrap">
        <div class="head">
          <span class="tape" style="color:#a82828">▮ HOW CHECKPOINT64 WORKS</span>
        </div>
        <h2 id="how-heading">POINT IT AT A FOLDER.<br/><span class="accent">FORGET ABOUT IT.</span></h2>
        <p class="lede">
          The whole point is that you don't have to think about save files anymore.
          Three steps, once, and you're done forever.
        </p>

        <div class="steps">
          <div class="step">
            <div class="n">01 · UPLOAD</div>
            <h3>HIT UPLOAD ↑</h3>
            <p>Grab a snapshot of your save folder and send a copy to the cloud.
            Each upload becomes its own labelled <em>version</em>.</p>
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
            <p>Checkpoint64 checks your save folder every couple of minutes. If
            anything changed, it uploads a fresh version on its own. Only the
            changed files get sent — the rest is skipped.</p>
            <div class="visual step-auto" data-step-auto>
              <div class="bars">
                <div class="bar on"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
              </div>
              <div class="label" data-auto-label>WATCHING…</div>
              <div class="meta">every 2 minutes · only what changed</div>
            </div>
          </div>

          <div class="step">
            <div class="n">03 · RESTORE</div>
            <h3>ROLL IT BACK</h3>
            <p>Click <b>Versions →</b> on any save to see every backup. Pick one
            and hit <b>Restore</b> — Checkpoint64 puts the files back and marks
            that version as the current one.</p>
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
    <section id="shelf" aria-labelledby="shelf-heading">
      <div class="wrap">
        <div class="head">
          <span class="tape">▮ A LOOK AT THE APP</span>
          <span class="hand" style="color:var(--accent);font-size:22px">not a screenshot — live</span>
        </div>
        <h2 id="shelf-heading">YOUR LIBRARY<br/>IS A <span class="accent">CARTRIDGE SHELF.</span></h2>
        <p class="lede">
          Every save is a cartridge. Same game, different runs? Same shelf,
          different carts.
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
      body: 'Scroll through every backup with file count, size, and what changed since last time. Hit Restore and it puts the save back AND marks it as current — no confusion.' },
    { tag: 'CO-OP LOCKS', title: 'ONE PERSON\nHOLDS THE WORLD.',
      body: 'Games like Factorio, Satisfactory, Valheim, and V Rising only have one live world file at a time. Whoever holds the lock can upload it; everyone else just downloads. Nobody using it? Grab the lock yourself — no more "who has the latest save?"' },
    { tag: 'ONLY WHAT CHANGED', title: 'TINY\nUPLOADS.',
      body: 'We only send the bits that actually changed. A 14 MB save where one file moved? Uploads 8 KB. Easy on your internet, easy on your storage.' },
    { tag: 'PER-GAME RULES', title: 'PICK WHAT\nGETS BACKED UP.',
      body: 'Choose which files to back up and which to ignore. Skip the crash logs and screenshots, keep the save. Already set up for the 40+ games Checkpoint64 knows about.' },
    { tag: 'BACKGROUND APP', title: 'RUNS IN THE\nBACKGROUND.',
      body: "A small, light app that barely uses any memory. Checks every 2 minutes and rests when nothing's changed. Won't get in the way while you're playing." },
    { tag: 'LOGBOOK', title: 'WHO DID WHAT,\nWHEN.',
      body: "Every upload, restore, and lock-grab gets written down in your group's logbook. Handy when your co-op partner blames you for the bad run." },
  ]
  return `
    <section id="features" aria-labelledby="features-heading">
      <div class="wrap">
        <div class="head">
          <span class="tape">▮ FEATURES</span>
        </div>
        <h2 id="features-heading">WHAT'S IN <span class="accent">THE BOX.</span></h2>
        <p class="lede">
          Built by people who reload saves a lot. No fluff, no charge per
          person, no "powered by AI." Just a save vault that works.
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
    <section class="paper" aria-labelledby="logbook-heading">
      <div class="wrap">
        <div class="head">
          <span class="tape" style="color:#a82828">▮ LOGBOOK · LIVE</span>
          <span class="hand" style="color:#a82828;font-size:22px">shared with your group</span>
        </div>
        <h2 id="logbook-heading">BLAME THE <span class="accent">RIGHT PERSON.</span></h2>
        <p class="lede">
          Everything anyone in your group does gets written down. Handy for
          co-op friends, modded servers, speedrun teams, and the classic
          "wait, who deleted that?"
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
    <section id="pricing" aria-labelledby="pricing-heading">
      <div class="wrap">
        <div class="head">
          <span class="tape">▮ PRICING</span>
        </div>
        <h2 id="pricing-heading">PICK YOUR<br/><span class="accent">CART.</span></h2>
        <p class="lede">
          Three ways to play it. Free to try, paid for life, or Pro for crews who
          save together. No charge per person, no surprise fees, no rip-cords.
          Final prices aren't set yet — drop your email and we'll tell you before launch.
        </p>

        <div class="price-grid">

          ${priceCard({
            tag: 'FREE', price: '$0', unit: 'no card required',
            tagline: 'kick the tires, see if your saves come back',
            features: [
              '1 personal space (no teams)',
              '20 MiB cloud storage',
              'automatic backup + full version history',
              'join a friend’s team for co-op',
            ],
            cta: 'GET FREE',
          })}

          ${priceCard({
            tag: 'LIFETIME', price: '$TBC', unit: 'one-time, yours forever',
            tagline: 'pay once, your saves live forever',
            features: [
              'personal space + up to 2 teams',
              '5 GiB storage per space',
              'co-op locks + shared activity logbook',
              'no subscription, ever',
              'unlock via Steam or direct',
            ],
            cta: 'NOTIFY ME', highlight: true,
          })}

          ${priceCard({
            tag: 'PRO', price: '$TBC', unit: 'monthly, cancel anytime',
            tagline: 'for crews, streamers, modding groups',
            features: [
              'personal space + up to 5 teams',
              '50 GiB storage per space',
              '25 seats per team (guaranteed minimum)',
              '100 versions / 90 days kept (guaranteed minimum)',
              'priority bandwidth (2× the API throughput)',
            ],
            cta: 'NOTIFY ME',
          })}

        </div>

        <div class="notify-strip">
          <div>
            <span class="hand" style="color:var(--accent);font-size:20px;margin-right:10px">↘</span>
            Pricing isn't final yet. Drop your email and we'll tell you the day it ships.
          </div>
          <form data-notify-form aria-label="Notify me about Checkpoint64 pricing">
            <label for="notify-email-pricing" class="visually-hidden">Email address</label>
            <input id="notify-email-pricing" name="email" type="email" autocomplete="email" required placeholder="you@somewhere.com" />
            <button type="submit" class="btn prim">NOTIFY ME</button>
          </form>
        </div>
      </div>
    </section>
  `
}

function downloadStrip() {
  return `
    <section class="cta-strip" id="download" aria-labelledby="download-heading">
      <div class="wrap">
        <div class="inner">
          <div>
            <h2 id="download-heading">SHIPPING SOON.<br/>GET ON THE<br/><span class="invert">LIST.</span></h2>
            <p>
              We're still testing in private. Drop your email, pick what you
              play on, and we'll let you know the moment it's ready.
            </p>
            <p class="signoff"><span aria-hidden="true">↘ </span>no spam, one email at launch</p>
          </div>
          <div class="downloads">
            <a class="dl" href="#" aria-label="Checkpoint64 for Windows — coming soon"><span>WINDOWS</span><span class="arch">.msi · coming soon</span></a>
            <a class="dl" href="#" aria-label="Checkpoint64 for macOS — coming soon"><span>MACOS</span><span class="arch">.dmg · arm64 + x64 · soon</span></a>
            <a class="dl" href="#" aria-label="Checkpoint64 for Linux — coming soon"><span>LINUX</span><span class="arch">.appimage · coming soon</span></a>
            <form data-notify-form aria-label="Notify me when Checkpoint64 ships">
              <label for="notify-email-download" class="visually-hidden">Email address</label>
              <input id="notify-email-download" name="email" type="email" autocomplete="email" required placeholder="you@somewhere.com" />
              <button type="submit" class="dl"><span>NOTIFY <span aria-hidden="true">↗</span></span></button>
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
      a: 'Whatever your game writes to your hard drive. Checkpoint64 treats the files in a folder as one save and backs them up together. You point it at the folder and pick which files count. We’ve already set this up for 40+ popular games.' },
    { q: 'DO YOU UPLOAD WHILE THE GAME IS RUNNING?',
      a: 'Yes, carefully. Checkpoint64 never locks your save files. If the game is in the middle of saving when we check, we wait a moment and try again — no broken files, no crashes. Most games finish saving in a split second anyway.' },
    { q: 'WHAT HAPPENS IF MY CO-OP PARTNER OVERWRITES MY UPLOAD?',
      a: "They can’t, on purpose. Only the person holding the lock can upload. If they want to push their version, they have to grab the lock first — and that warns you before it happens. Your last version stays safe in the history; you can always roll back to it." },
    { q: 'DO I STILL NEED A DEDICATED SERVER?',
      a: "For most groups, no. The whole point of a dedicated server is keeping your world online when the host’s PC is off. Checkpoint64 covers about 90% of that for a one-time fee: whoever wants to play grabs the lock, plays their session, then pushes the save back. A typical co-op group saves $120–240 a year compared to renting a 24/7 server that sits idle 18 hours a day." },
    { q: 'DOES THIS WORK FOR CONSOLE SAVES?',
      a: 'Only if you can get your console saves onto a PC — like emulators, Xbox or PS+ cloud save exports, and Steam Cloud through your PC. Checkpoint64 itself only runs on Windows, Mac, and Linux.' },
    { q: 'WHAT WILL IT COST?',
      a: "Three tiers: Free (20 MiB, personal only), Lifetime (one-time payment, 5 GiB per space + 2 teams), and Pro (monthly, 50 GiB per space + 5 teams, for bigger crews). No charge per person on any tier. Final numbers aren’t set — sign up to the launch list and we’ll tell you before everyone else, plus lock you in at the early-bird price." },
    { q: 'WHEN DOES IT SHIP?',
      a: "Soon — we’re testing in private now and aiming for a public launch later this year. Get on the list and we’ll send one email the day the Windows / Mac / Linux versions are ready." },
  ]
  return `
    <section id="faq" aria-labelledby="faq-heading">
      <div class="wrap">
        <div class="head">
          <span class="tape">▮ FAQ</span>
        </div>
        <h2 id="faq-heading">FREQUENTLY <span class="accent">CHECKED.</span></h2>
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

function footer(year) {
  return `
    <footer class="bot" role="contentinfo">
      <div class="wrap">
        <div class="inner">
          <div class="col1">
            <div class="brand">CHECKPOINT64</div>
            <p class="blurb">
              A safe place for your big runs. Built by people who lost a
              200-hour Factorio base and never got over it.
            </p>
            <p class="sign">made for me. <span aria-hidden="true">✦</span></p>
          </div>
          <nav aria-label="Product">
            <h2 class="footer-h">PRODUCT</h2>
            <ul>
              <li><a href="#how">How it works</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#download">Join the list</a></li>
              <li><a href="#">Changelog</a></li>
            </ul>
          </nav>
          <nav aria-label="Resources">
            <h2 class="footer-h">RESOURCES</h2>
            <ul>
              <li><a href="#">Game database</a></li>
              <li><a href="#">Roadmap</a></li>
              <li><a href="#">Beta access</a></li>
              <li><a href="#">Press kit</a></li>
            </ul>
          </nav>
          <nav aria-label="Company">
            <h2 class="footer-h">COMPANY</h2>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="https://discord.gg/kxeYwuuHEn" target="_blank" rel="noopener noreferrer" aria-label="Join the Checkpoint64 Discord (opens in a new tab)">Discord</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Status</a></li>
            </ul>
          </nav>
        </div>
        <div class="copyline">
          <span>© ${year} CHECKPOINT64 · ALL RIGHTS RESERVED</span>
          <span style="opacity:.6">NOT AFFILIATED WITH ANY GAME LISTED ABOVE</span>
        </div>
      </div>
    </footer>
  `
}

export function renderApp({ year = new Date().getFullYear() } = {}) {
  return [
    topNav(),
    '<main id="main" role="main">',
    hero(),
    problemStrip(),
    howItWorks(),
    shelfMock(),
    features(),
    logbookPreview(),
    pricing(),
    downloadStrip(),
    faq(),
    '</main>',
    footer(year),
  ].join('')
}
