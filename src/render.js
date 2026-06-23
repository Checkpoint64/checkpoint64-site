// Pure HTML-string renderers for the Checkpoint64 site.
//
// This module is imported BOTH from the browser entry (src/main.js) and from
// Node (vite.config.js) at build time, so it must stay free of any DOM /
// browser-only APIs. Everything in here is just string templates.
//
// All user-visible copy comes from the locale `t` object (src/i18n/locales/*).
// Pass `locale` to renderApp to render the page in that language; English is
// the default. Links are always emitted relative to the site root ("./blog/",
// "./de/"); localizeHtml() in src/i18n/localize.js rewrites them to "../" for
// the depth-1 localized pages.

import { PLATFORMS, RELEASES_PAGE_URL, formatSize, extensionOf } from './releases.js'
import { DEFAULT_CURRENCY, formatMoney } from './currency.js'
import { LOCALES, DEFAULT_LOCALE, getLocale, fmt } from './i18n/config.js'

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[c]))

// Money amounts are stored as raw USD numbers and emitted as <span data-money>
// formatted in DEFAULT_CURRENCY (EUR), in the current page's locale, at build
// time. src/main.js then detects the visitor's region and rewrites each span
// into USD / GBP / EUR via the rate table in src/currency.js, falling back to
// EUR for unknown regions.
function money(amount, { suffix = '', to = null, intl } = {}) {
  const head = formatMoney(amount, DEFAULT_CURRENCY, intl)
  const text = to != null
    ? `${head}–${formatMoney(to, DEFAULT_CURRENCY, intl)}${suffix}`
    : `${head}${suffix}`
  const attrTo = to != null ? ` data-money-to="${to}"` : ''
  const attrSuffix = suffix ? ` data-money-suffix="${esc(suffix)}"` : ''
  return `<span class="money" data-money="${amount}"${attrTo}${attrSuffix}>${text}</span>`
}

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

// Compact language picker: a <details> disclosure showing the current locale's
// label, expanding to a menu of real <a> links (kept as anchors so crawlers
// still see every localized URL). Collapses to a single control so the nav
// stays tidy on tablet widths.
function langSwitch(t, locale) {
  const current = LOCALES.find((l) => l.code === locale) || LOCALES[0]
  const options = LOCALES.map((l) => {
    const href = l.code === DEFAULT_LOCALE ? './' : `./${l.code}/`
    const cur = l.code === locale
    return `<a class="lang-opt${cur ? ' cur' : ''}" href="${href}" hreflang="${l.code}" data-lang="${l.code}"${cur ? ' aria-current="true"' : ''}>${esc(l.name)}</a>`
  }).join('')
  return `
          <details class="lang-menu">
            <summary aria-label="${esc(t.nav.switcherAria)}" title="${esc(t.nav.switcherAria)}">
              <span class="lang-cur">${esc(current.label)}</span>
              <span class="lang-caret" aria-hidden="true">▾</span>
            </summary>
            <div class="lang-pop">${options}</div>
          </details>`
}

function topNav(t, locale) {
  const n = t.nav
  return `
    <nav class="top" aria-label="Primary">
      <div class="inner">
        <a href="/" class="brand" aria-label="${esc(n.brandAria)}">CHECKPOINT64</a>
        <div class="links">
          <a href="#how">${esc(n.links.how)}</a>
          <a href="#shelf">${esc(n.links.shelf)}</a>
          <a href="#features">${esc(n.links.features)}</a>
          <a href="#savings">${esc(n.links.savings)}</a>
          <a href="#pricing">${esc(n.links.pricing)}</a>
          <a href="#faq">${esc(n.links.faq)}</a>
          <a href="./blog/" class="blog">${esc(n.links.blog)}</a>
        </div>
        <div class="nav-actions">
          ${langSwitch(t, locale)}
          <button class="theme-toggle" data-theme-toggle type="button" aria-label="Switch to light mode" title="Toggle theme">
            <span class="theme-toggle-icon" data-theme-icon aria-hidden="true">☀</span>
          </button>
          <a class="cta" href="#download" aria-label="${esc(n.ctaAria)}">${esc(n.cta)} ↗</a>
        </div>
      </div>
    </nav>
  `
}

function hero(t) {
  const h = t.hero
  const heroCarts = [
    { slot: 'slot-a', opts: { color: '#3df0ff', name: 'FACTORIO',          meta: '6h · 14.2 MB',  files: '48 files', status: 'SYNCED',  statusKind: 'on',   tilt: -7, size: 'md' } },
    { slot: 'slot-b', opts: { color: '#ffd23f', name: 'STARDEW Y3 SPRING', meta: 'just now · 4.1 MB', files: '3 files', status: 'AUTO ON', statusKind: 'on',   lock: { txt: 'LOCK U', kind: 'on' }, tilt: 5, size: 'md' } },
    { slot: 'slot-c', opts: { color: '#ff5f4e', name: 'SATISFACTORY', meta: '2d · 308 KB',   files: '2 files',  status: 'AUTO ON', statusKind: 'on',   tilt: 2,  size: 'lg' } },
    { slot: 'slot-d', opts: { color: '#a07cff', name: 'ELDEN RING NG+3',   meta: '11h · 92 KB',   files: '1 file',   status: 'DIRTY',   statusKind: 'warn', tilt: -3, size: 'sm' } },
  ]

  return `
    <header class="hero" role="banner">
      <div class="wrap">
        <div class="grid">
          <div>
            <p class="eyebrow">
              <span class="dot" aria-hidden="true"></span>
              EARLY BUILD · FREE · WIN · MAC · LINUX
            </p>
            <h1>${h.h1Html}</h1>
            <p class="sub">${esc(h.sub)}</p>
            <div class="ctas">
              <a href="#download" class="btn prim" aria-label="${esc(h.ctaPrimaryAria)}">${esc(h.ctaPrimary)} <span aria-hidden="true">↗</span></a>
              <a href="#how" class="btn ghost" aria-label="${esc(h.ctaSecondaryAria)}">${esc(h.ctaSecondary)}</a>
            </div>
            <p class="small">
              ${h.small.map((s) => `<span>${esc(s)}</span>`).join('\n              ')}
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

function problemStrip(t, intl) {
  const p = t.problems
  const woes = p.woes.map((w, i) => ({
    ...w,
    // index 2 carries the dynamic price stamp; the rest are plain text.
    stamp: i === 2 ? money(15, { suffix: t.money.perMonthShort, intl }) : esc(w.stamp),
  }))
  return `
    <section style="padding:90px 0 100px" aria-labelledby="problems-heading">
      <div class="wrap">
        <div class="head">
          <span class="tape">${esc(p.tape)}</span>
        </div>
        <h2 id="problems-heading">${p.h2Html}</h2>
        <ul class="problem-grid">
          ${woes.map(w => `
            <li class="problem-card">
              <div class="head">
                <span><span aria-hidden="true">▸ </span>${w.stamp}</span>
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

function howItWorks(t) {
  const h = t.how
  return `
    <section class="paper" id="how" aria-labelledby="how-heading">
      <div class="wrap">
        <div class="head">
          <span class="tape" style="color:#a82828">▮ ${esc(h.tape)}</span>
        </div>
        <h2 id="how-heading">${h.h2Html}</h2>
        <p class="lede">${esc(h.lede)}</p>

        <div class="steps">
          <div class="step">
            <div class="n">${esc(h.steps[0].label)}</div>
            <h3>${h.steps[0].h3Html}</h3>
            <p>${h.steps[0].bodyHtml}</p>
            <div class="visual step-upload">
              <div class="src-label">SOURCE</div>
              <div class="src-path">C:\\Users\\you\\AppData\\Local\\FactoryGame\\Saved\\…</div>
              <div class="arrow">↓</div>
              <div class="v-pill">v#001 · UPLOADED</div>
            </div>
          </div>

          <div class="step">
            <div class="n">${esc(h.steps[1].label)}</div>
            <h3>${h.steps[1].h3Html}</h3>
            <p>${h.steps[1].bodyHtml}</p>
            <div class="visual step-auto" data-step-auto>
              <div class="bars">
                <div class="bar on"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
              </div>
              <div class="label" data-auto-label>WATCHING…</div>
              <div class="meta">${esc(h.autoMeta)}</div>
            </div>
          </div>

          <div class="step">
            <div class="n">${esc(h.steps[2].label)}</div>
            <h3>${h.steps[2].h3Html}</h3>
            <p>${h.steps[2].bodyHtml}</p>
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

function shelfMock(t) {
  const sh = t.shelf
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
          <span class="tape">▮ ${esc(sh.tape)}</span>
          <span class="hand" style="color:var(--accent);font-size:22px">${esc(sh.hand)}</span>
        </div>
        <h2 id="shelf-heading">${sh.h2Html}</h2>
        <p class="lede">${esc(sh.lede)}</p>

        <div class="shelf-frame">
          <div class="bar">
            <span><span class="accent">▮</span> CHECKPOINT64 · CART SHELF</span>
            <span style="opacity:.7">3 games · 7 carts</span>
          </div>
          <div class="body">
            ${games.map(g => `
              <section class="shelf-game">
                <div class="sechead">
                  <h3>${esc(g.name)}</h3>
                  <span class="pa">${esc(g.path)}</span>
                  <span class="add" aria-hidden="true">+ <b>another</b></span>
                </div>
                <div class="shelf-grid">
                  ${g.carts.map(c => cartridge({ ...c, size: 'md' })).join('')}
                  ${g.noEmpty ? '' : '<span class="empty" aria-hidden="true">+ slot</span>'}
                </div>
              </section>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `
}

function features(t) {
  const f = t.features
  return `
    <section id="features" aria-labelledby="features-heading">
      <div class="wrap">
        <div class="head">
          <span class="tape">▮ ${esc(f.tape)}</span>
        </div>
        <h2 id="features-heading">${f.h2Html}</h2>
        <p class="lede">${esc(f.lede)}</p>
        <div class="features">
          ${f.items.map(it => `
            <div class="feat">
              <div class="ico">▮ ${esc(it.tag)}</div>
              <h3>${esc(it.title)}</h3>
              <p>${esc(it.body)}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `
}

function logbookPreview(t) {
  const lb = t.logbook
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
          <span class="tape" style="color:#a82828">▮ ${esc(lb.tape)}</span>
          <span class="hand" style="color:#a82828;font-size:22px">${esc(lb.hand)}</span>
        </div>
        <h2 id="logbook-heading">${lb.h2Html}</h2>
        <p class="lede">${esc(lb.lede)}</p>

        <div class="logbook">
          <div class="lh">
            <span class="t">▮ LOGBOOK</span>
            <span class="c">${entries.length} ${esc(lb.eventsLabel)}</span>
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
          <div class="live">${esc(lb.liveCaption)}</div>
        </div>
      </div>
    </section>
  `
}

function dediStrip(t, intl) {
  const sv = t.savings
  const m = t.money
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

  return `
    <section class="paper" id="savings" aria-labelledby="savings-heading">
      <div class="wrap">
        <div class="head">
          <span class="tape" style="color:#a82828">▮ ${esc(sv.tape)}</span>
          <span class="hand" style="color:#a82828;font-size:22px">${esc(sv.hand)}</span>
        </div>
        <h2 id="savings-heading">${sv.h2Html}</h2>
        <p class="lede">${esc(sv.lede)}</p>

        <div class="steps">
          ${sv.cards.map((c, i) => `
            <div class="step">
              <div class="n">${cardN[i]} · ${esc(c.tag)}</div>
              <h3>${esc(c.title)}</h3>
              <p>${cardBody[i]}</p>
            </div>
          `).join('')}
        </div>

        <div class="dedi-receipt" aria-label="${esc(sv.receiptAria)}">
          <div class="rh">
            <span>${fmt(sv.receiptLabelTpl, money(15, { suffix: m.perMonthShort, intl }))}</span>
            <span class="hand" style="font-size:18px">${esc(sv.receiptYear)}</span>
          </div>
          ${sv.lineKeys.map((k, i) => `
            <div class="rrow"><span>${esc(k)}</span><b>${lineVals[i]}</b></div>
          `).join('')}
          <div class="rrow total">
            <span>${esc(sv.totalLabel)}</span>
            <b class="accent">${money(180, { suffix: m.perYear, intl })}</b>
          </div>
          <div class="rfoot">
            ${fmt(sv.footTpl, money(900, { intl }))}
          </div>
        </div>
      </div>
    </section>
  `
}

function priceCard({ tag, price, unit, tagline, features: fs, cta, highlight, badge }) {
  return `
    <div class="price-card${highlight ? ' hl' : ''}">
      ${highlight ? `<div class="badge">${esc(badge)}</div>` : ''}
      <div class="tag">▮ ${esc(tag)}</div>
      <div class="priceline">
        <span class="price">${price}</span>
        <span class="unit">${esc(unit)}</span>
      </div>
      <div class="tagline">${esc(tagline)}</div>
      <ul>${fs.map(f => `<li>${esc(f)}</li>`).join('')}</ul>
      <a href="#download" class="cta-btn">${esc(cta)}</a>
    </div>
  `
}

function pricing(t, intl) {
  const pr = t.pricing
  const prices = [money(0, { intl }), esc(pr.tbc), esc(pr.tbc)]
  return `
    <section id="pricing" aria-labelledby="pricing-heading">
      <div class="wrap">
        <div class="head">
          <span class="tape">▮ ${esc(pr.tape)}</span>
        </div>
        <h2 id="pricing-heading">${pr.h2Html}</h2>
        <p class="lede">${esc(pr.lede)}</p>

        <div class="price-grid">
          ${pr.cards.map((c, i) => priceCard({
            tag: c.tag,
            price: prices[i],
            unit: c.unit,
            tagline: c.tagline,
            features: c.features,
            cta: c.cta,
            highlight: i === 1,
            badge: pr.badge,
          })).join('\n          ')}
        </div>
      </div>
    </section>
  `
}

function downloadTile(platform, releases, t) {
  const d = t.download
  const asset = releases?.platforms?.[platform.key]
  const fallbackHref = releases?.url || RELEASES_PAGE_URL

  if (asset) {
    const ext = extensionOf(asset.name)
    const size = formatSize(asset.size)
    const sub = [ext && `.${ext}`, releases.tag, size].filter(Boolean).join(' · ')
    return `
      <a class="dl" data-platform="${esc(platform.key)}" href="${esc(asset.url)}"
         aria-label="${esc(fmt(d.tileAriaLiveTpl, platform.label, releases.tag))}">
        <span>${esc(platform.label)}</span>
        <span class="arch">${esc(sub)}</span>
      </a>
    `
  }

  return `
    <a class="dl" data-platform="${esc(platform.key)}" href="${esc(fallbackHref)}"
       aria-label="${esc(fmt(d.tileAriaSoonTpl, platform.label))}">
      <span>${esc(platform.label)}</span>
      <span class="arch">${esc(platform.placeholderHint)} · ${esc(d.comingSoon)}</span>
    </a>
  `
}

// Steam-branded badge linking to the Steam store. The "AVAILABLE ON Steam"
// wording is brand chrome and stays in English across all locales.
function steamStrip() {
  return `
    <section class="steam-strip" aria-label="Available on Steam">
      <div class="wrap">
        <a class="steam-badge" href="https://store.steampowered.com/" target="_blank" rel="noopener noreferrer">
          <span class="steam-badge-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.662 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.252 0-2.265-1.014-2.265-2.265z"/>
            </svg>
          </span>
          <span class="steam-badge-text">
            <span class="steam-badge-kicker">AVAILABLE ON</span>
            <span class="steam-badge-brand">Steam</span>
          </span>
        </a>
      </div>
    </section>
  `
}

function downloadStrip(t, { releases } = {}) {
  const d = t.download
  const tiles = PLATFORMS.map((p) => downloadTile(p, releases, t)).join('')
  const headline = releases?.tag ? d.headlineLiveHtml : d.headlineSoonHtml
  const blurb = releases?.tag ? d.blurbLive : d.blurbSoon
  const signoff = releases?.tag
    ? `<span aria-hidden="true">↘ </span>${fmt(d.signoffLiveTpl, esc(releases.url))}`
    : `<span aria-hidden="true">↘ </span>${esc(d.signoffSoon)}`

  return `
    <section class="cta-strip" id="download" aria-labelledby="download-heading">
      <div class="wrap">
        <div class="inner">
          <div>
            <h2 id="download-heading">${headline}</h2>
            <p>${esc(blurb)}</p>
            <p class="signoff">${signoff}</p>
          </div>
          <div class="downloads">
            ${tiles}
          </div>
        </div>
      </div>
    </section>
  `
}

function faq(t, intl) {
  const f = t.faq
  // Item index 3 (dedicated-server answer) carries the dynamic savings figure.
  const dedi = money(120, { to: 240, suffix: t.money.aYear, intl })
  return `
    <section id="faq" aria-labelledby="faq-heading">
      <div class="wrap">
        <div class="head">
          <span class="tape">▮ ${esc(f.tape)}</span>
        </div>
        <h2 id="faq-heading">${f.h2Html}</h2>
        <div class="faq">
          ${f.items.map(it => `
            <details>
              <summary>${esc(it.q)}</summary>
              <div class="body">${fmt(it.a, dedi)}</div>
            </details>
          `).join('')}
        </div>
      </div>
    </section>
  `
}

function footer(t, year) {
  const f = t.footer
  return `
    <footer class="bot" role="contentinfo">
      <div class="wrap">
        <div class="inner">
          <div class="col1">
            <div class="brand">CHECKPOINT64</div>
            <p class="blurb">${esc(f.blurb)}</p>
            <p class="sign">${esc(f.sign)} <span aria-hidden="true">✦</span></p>
          </div>
          <nav aria-label="${esc(f.ariaProduct)}">
            <h2 class="footer-h">${esc(f.product)}</h2>
            <ul>
              <li><a href="#how">${esc(f.links.how)}</a></li>
              <li><a href="#features">${esc(f.links.features)}</a></li>
              <li><a href="#pricing">${esc(f.links.pricing)}</a></li>
              <li><a href="#download">${esc(f.links.joinList)}</a></li>
              <li><a href="https://github.com/checkpoint64/checkpoint64/releases" target="_blank" rel="noopener noreferrer" aria-label="${esc(f.changelogAria)}">${esc(f.links.changelog)}</a></li>
            </ul>
          </nav>
          <nav aria-label="${esc(f.ariaResources)}">
            <h2 class="footer-h">${esc(f.resources)}</h2>
            <ul>
              <li><a href="./blog/">${esc(f.links.blog)}</a></li>
            </ul>
          </nav>
          <nav aria-label="${esc(f.ariaCompany)}">
            <h2 class="footer-h">${esc(f.company)}</h2>
            <ul>
              <li><a href="https://discord.gg/kxeYwuuHEn" target="_blank" rel="noopener noreferrer" aria-label="${esc(f.discordAria)}">${esc(f.links.discord)}</a></li>
              <li><a href="./terms/">${esc(f.links.terms)}</a></li>
              <li><a href="./privacy/">${esc(f.links.privacy)}</a></li>
            </ul>
          </nav>
        </div>
        <div class="copyline">
          <span>${esc(fmt(f.copyTpl, year))}</span>
          <span style="opacity:.6">${esc(f.notAffiliated)}</span>
        </div>
      </div>
    </footer>
  `
}

export function renderApp({ year = new Date().getFullYear(), releases = null, locale = DEFAULT_LOCALE } = {}) {
  const L = getLocale(locale)
  const t = L.t
  const intl = L.intl
  const code = L.code
  return [
    topNav(t, code),
    '<main id="main" role="main">',
    hero(t),
    problemStrip(t, intl),
    howItWorks(t),
    shelfMock(t),
    features(t),
    logbookPreview(t),
    dediStrip(t, intl),
    pricing(t, intl),
    steamStrip(),
    downloadStrip(t, { releases }),
    faq(t, intl),
    '</main>',
    footer(t, year),
  ].join('')
}
