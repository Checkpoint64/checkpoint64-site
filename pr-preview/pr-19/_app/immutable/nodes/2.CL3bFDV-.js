import{C as e,M as t,P as n,T as r,b as i,d as a,f as o,j as s,l as c,m as l,n as u,o as d,p as f,w as p}from"../chunks/DrYhI6pn.js";import{a as m,i as h,r as g,t as _}from"../chunks/-KrVE41v.js";import"../chunks/v_jBEYI6.js";var v=`checkpoint64/checkpoint64`,y=`https://github.com/${v}/releases`,b=`https://api.github.com/repos/${v}/releases?per_page=1`,x=[{key:`windows`,label:`WINDOWS`,prefer:[/\.msi$/i,/\.exe$/i],placeholderHint:`.msi`},{key:`macos-arm`,label:`MACOS · APPLE SILICON`,prefer:[/(?:^|[-_.])(aarch64|arm64|apple[-_]silicon)(?=[-_.]).*\.(dmg|pkg)$/i],placeholderHint:`.dmg · arm64`},{key:`linux`,label:`LINUX`,prefer:[/\.AppImage$/i,/\.deb$/i,/\.rpm$/i],placeholderHint:`.deb / .rpm`}];function S(e){if(!e||!Array.isArray(e.assets))return null;let t={};for(let n of x){let r=null;for(let t of n.prefer)if(r=e.assets.find(e=>t.test(e.name)),r)break;r&&(t[n.key]={url:r.browser_download_url,size:r.size,name:r.name})}return{tag:e.tag_name||``,name:e.name||``,url:e.html_url||y,publishedAt:e.published_at||``,platforms:t}}async function ee(e=globalThis.fetch){if(typeof e!=`function`)return null;try{let t=await e(b,{headers:{Accept:`application/vnd.github+json`}});if(!t.ok)return null;let n=await t.json();return S(Array.isArray(n)?n[0]:n)}catch{return null}}function C(e){return!e||e<0?``:e<1024*1024?`${Math.max(1,Math.round(e/1024))} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}function w(e){if(!e)return``;let t=e.match(/\.(tar\.gz|tar\.bz2)$/i);if(t)return t[1].toLowerCase();let n=e.lastIndexOf(`.`);return n>=0?e.slice(n+1).toLowerCase():``}var T=`4790820`;`${T}`,`${T}`,`${T}`;function E(e){let t=Number(e);if(!Number.isFinite(t)||t<=0)return``;let n=Math.round(t/60);return n<1?`<1 hr`:`${n.toLocaleString(`en-US`)} ${n===1?`hr`:`hrs`}`}var D={USD:1,GBP:1,EUR:1},O=new Set([`AT`,`BE`,`CY`,`DE`,`EE`,`ES`,`FI`,`FR`,`GR`,`HR`,`IE`,`IT`,`LT`,`LU`,`LV`,`MT`,`NL`,`PT`,`SI`,`SK`]),k={"Europe/London":`GBP`,"America/New_York":`USD`,"America/Detroit":`USD`,"America/Kentucky/Louisville":`USD`,"America/Kentucky/Monticello":`USD`,"America/Indiana/Indianapolis":`USD`,"America/Indiana/Vincennes":`USD`,"America/Indiana/Winamac":`USD`,"America/Indiana/Marengo":`USD`,"America/Indiana/Petersburg":`USD`,"America/Indiana/Vevay":`USD`,"America/Indiana/Knox":`USD`,"America/Indiana/Tell_City":`USD`,"America/Chicago":`USD`,"America/Menominee":`USD`,"America/North_Dakota/Center":`USD`,"America/North_Dakota/New_Salem":`USD`,"America/North_Dakota/Beulah":`USD`,"America/Denver":`USD`,"America/Boise":`USD`,"America/Phoenix":`USD`,"America/Los_Angeles":`USD`,"America/Anchorage":`USD`,"America/Juneau":`USD`,"America/Sitka":`USD`,"America/Metlakatla":`USD`,"America/Yakutat":`USD`,"America/Nome":`USD`,"America/Adak":`USD`,"Pacific/Honolulu":`USD`,"Europe/Vienna":`EUR`,"Europe/Brussels":`EUR`,"Asia/Famagusta":`EUR`,"Asia/Nicosia":`EUR`,"Europe/Tallinn":`EUR`,"Europe/Helsinki":`EUR`,"Europe/Paris":`EUR`,"Europe/Berlin":`EUR`,"Europe/Busingen":`EUR`,"Europe/Athens":`EUR`,"Europe/Dublin":`EUR`,"Europe/Rome":`EUR`,"Europe/Riga":`EUR`,"Europe/Vilnius":`EUR`,"Europe/Luxembourg":`EUR`,"Europe/Malta":`EUR`,"Europe/Amsterdam":`EUR`,"Europe/Lisbon":`EUR`,"Atlantic/Azores":`EUR`,"Atlantic/Madeira":`EUR`,"Europe/Bratislava":`EUR`,"Europe/Ljubljana":`EUR`,"Europe/Madrid":`EUR`,"Africa/Ceuta":`EUR`,"Atlantic/Canary":`EUR`,"Europe/Zagreb":`EUR`};function A(e){if(!e)return null;let t;try{t=new Intl.Locale(e).maximize().region}catch{return null}return t===`US`?`USD`:t===`GB`?`GBP`:O.has(t)?`EUR`:null}function j(e){return e&&k[e]||null}function te(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{return null}}function ne({locales:e,timeZone:t}={}){let n=j(t||te());if(n)return n;let r=Array.isArray(e)?e:e?[e]:[];for(let e of r){let t=A(e);if(t)return t}return`EUR`}function M(e,t,n){let r=Math.round(e*D[t]);return new Intl.NumberFormat(n||`en-IE`,{style:`currency`,currency:t,maximumFractionDigits:0}).format(r)}var N=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]);function P(e,{suffix:t=``,to:n=null,intl:r}={}){let i=M(e,`EUR`,r),a=n==null?`${i}${t}`:`${i}–${M(n,`EUR`,r)}${t}`;return`<span class="money" data-money="${e}"${n==null?``:` data-money-to="${n}"`}${t?` data-money-suffix="${N(t)}"`:``}>${a}</span>`}var F={sm:{w:200,topH:22,fontMul:.85},md:{w:250,topH:28,fontMul:1},lg:{w:320,topH:36,fontMul:1.18}};function I({color:e=`#ff5f4e`,name:t=`SATISFACTORY`,meta:n=`2d · 308 KB`,files:r=`2 files`,status:i=`AUTO ON`,statusKind:a=`on`,lock:o=null,tilt:s=0,size:c=`md`,showVersions:l=!0,scribble:u=null}={}){let d=F[c]||F.md,f=[`--c:${e}`,`width:${d.w}px`,s?`transform:rotate(${s}deg)`:``].filter(Boolean).join(`;`),p=`font-size:${12*d.fontMul}px`,m=d.topH+14,h=o?`<span class="chip ${N(o.kind)}">${N(o.txt)}</span>`:``;return`
    <div class="cart" style="${f}">
      <div class="top" style="height:${d.topH}px"></div>
      <div class="screws" style="top:${m}px">
        <span class="s"></span>
        <span class="s"></span>
      </div>
      <div class="lbl">
        <div class="name" style="${p}">${N(t)}</div>
        <div class="meta">${N(n)}</div>
        ${r?`<div class="meta">${N(r)}</div>`:``}
        <div class="chiprow">
          <span class="chip ${N(a)}">${N(i)}</span>
          ${h}
        </div>
        ${l?`
          <div class="versions">
            <div class="vbtn"><span>VERSIONS</span><span>→</span></div>
          </div>
        `:``}
      </div>
      <div class="pins"></div>
      ${u?`<span class="scribble">${N(u)}</span>`:``}
    </div>
  `}function L(e,t){let n=_.find(e=>e.code===t)||_[0],r=_.map(e=>{let n=e.code===`en`?`./`:`./${e.code}/`,r=e.code===t;return`<a class="lang-opt${r?` cur`:``}" href="${n}" hreflang="${e.code}" data-lang="${e.code}"${r?` aria-current="true"`:``}>${N(e.name)}</a>`}).join(``);return`
          <details class="lang-menu menu">
            <summary aria-label="${N(e.nav.switcherAria)}" title="${N(e.nav.switcherAria)}">
              <span class="lang-cur">${N(n.label)}</span>
              <span class="lang-caret" aria-hidden="true">▾</span>
            </summary>
            <div class="lang-pop">${r}</div>
          </details>`}function R(e,t){let n=e.nav,r=[[`#how`,n.links.how],[`#shelf`,n.links.shelf],[`#features`,n.links.features],[`#creators`,n.links.creators],[`#savings`,n.links.savings],[`#pricing`,n.links.pricing],[`#faq`,n.links.faq]].map(([e,t])=>`<a href="${e}">${N(t)}</a>`).join(`
          `),i=`<a href="./blog/" class="blog">${N(n.links.blog)}</a>`;return`
    <nav class="top" aria-label="Primary">
      <div class="inner">
        <a href="/" class="brand" aria-label="${N(n.brandAria)}">CHECKPOINT64</a>
        <div class="links">
          ${r}
          ${i}
        </div>
        <div class="nav-actions">
          ${L(e,t)}
          <button class="theme-toggle" data-theme-toggle type="button" aria-label="Switch to light mode" title="Toggle theme">
            <span class="theme-toggle-icon" data-theme-icon aria-hidden="true">☀</span>
          </button>
          <a class="cta" href="#download" aria-label="${N(n.ctaAria)}">${N(n.cta)} ↗</a>
          <details class="nav-menu menu">
            <summary class="nav-toggle" aria-label="${N(n.menuAria)}" title="${N(n.menuAria)}">
              <span class="nav-toggle-icon" aria-hidden="true">☰</span>
            </summary>
            <div class="nav-pop">
              <a class="nav-dl" href="#download" aria-label="${N(n.ctaAria)}">${N(n.cta)} ↗</a>
              ${r}
              ${i}
            </div>
          </details>
        </div>
      </div>
    </nav>
  `}function z(e){let t=e.hero;return`
    <header class="hero" role="banner">
      <div class="wrap">
        <div class="grid">
          <div>
            <p class="eyebrow">
              <span class="dot" aria-hidden="true"></span>
              EARLY BUILD · FREE · WIN · MAC · LINUX
            </p>
            <h1>${t.h1Html}</h1>
            <p class="sub">${N(t.sub)}</p>
            <div class="ctas">
              <a href="#download" class="btn prim" aria-label="${N(t.ctaPrimaryAria)}">${N(t.ctaPrimary)} <span aria-hidden="true">↗</span></a>
              <a href="#how" class="btn ghost" aria-label="${N(t.ctaSecondaryAria)}">${N(t.ctaSecondary)}</a>
            </div>
            <p class="small">
              ${t.small.map(e=>`<span>${N(e)}</span>`).join(`
              `)}
            </p>
          </div>
          <div class="hero-art" aria-hidden="true">
            <div class="hero-stack">
              ${[{slot:`slot-a`,opts:{color:`#3df0ff`,name:`FACTORIO`,meta:`6h · 14.2 MB`,files:`48 files`,status:`SYNCED`,statusKind:`on`,tilt:-7,size:`md`}},{slot:`slot-b`,opts:{color:`#ffd23f`,name:`STARDEW Y3 SPRING`,meta:`just now · 4.1 MB`,files:`3 files`,status:`AUTO ON`,statusKind:`on`,lock:{txt:`LOCK U`,kind:`on`},tilt:5,size:`md`}},{slot:`slot-c`,opts:{color:`#ff5f4e`,name:`SATISFACTORY`,meta:`2d · 308 KB`,files:`2 files`,status:`AUTO ON`,statusKind:`on`,tilt:2,size:`lg`}},{slot:`slot-d`,opts:{color:`#a07cff`,name:`ELDEN RING NG+3`,meta:`11h · 92 KB`,files:`1 file`,status:`DIRTY`,statusKind:`warn`,tilt:-3,size:`sm`}}].map(e=>`<div class="slot ${e.slot}">${I(e.opts)}</div>`).join(``)}
            </div>
          </div>
        </div>
      </div>
    </header>
  `}function B(e,t){let n=e.problems,r=n.woes.map((n,r)=>({...n,stamp:r===2?P(15,{suffix:e.money.perMonthShort,intl:t}):N(n.stamp)}));return`
    <section style="padding:90px 0 100px" aria-labelledby="problems-heading">
      <div class="wrap">
        <div class="head">
          <span class="tape">${N(n.tape)}</span>
        </div>
        <h2 id="problems-heading">${n.h2Html}</h2>
        <ul class="problem-grid">
          ${r.map(e=>`
            <li class="problem-card">
              <div class="head">
                <span><span aria-hidden="true">▸ </span>${e.stamp}</span>
                <span class="tag">${N(e.tag)}</span>
              </div>
              <p class="text">${N(e.text)}</p>
            </li>
          `).join(``)}
        </ul>
      </div>
    </section>
  `}function V(e){let t=e.how;return`
    <section class="paper" id="how" aria-labelledby="how-heading">
      <div class="wrap">
        <div class="head">
          <span class="tape" style="color:#a82828">▮ ${N(t.tape)}</span>
        </div>
        <h2 id="how-heading">${t.h2Html}</h2>
        <p class="lede">${N(t.lede)}</p>

        <div class="steps">
          <div class="step">
            <div class="n">${N(t.steps[0].label)}</div>
            <h3>${t.steps[0].h3Html}</h3>
            <p>${t.steps[0].bodyHtml}</p>
            <div class="visual step-upload">
              <div class="src-label">SOURCE</div>
              <div class="src-path">C:\\Users\\you\\AppData\\Local\\FactoryGame\\Saved\\…</div>
              <div class="arrow">↓</div>
              <div class="v-pill">v#001 · UPLOADED</div>
            </div>
          </div>

          <div class="step">
            <div class="n">${N(t.steps[1].label)}</div>
            <h3>${t.steps[1].h3Html}</h3>
            <p>${t.steps[1].bodyHtml}</p>
            <div class="visual step-auto" data-step-auto>
              <div class="bars">
                <div class="bar on"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
              </div>
              <div class="label" data-auto-label>WATCHING…</div>
              <div class="meta">${N(t.autoMeta)}</div>
            </div>
          </div>

          <div class="step">
            <div class="n">${N(t.steps[2].label)}</div>
            <h3>${t.steps[2].h3Html}</h3>
            <p>${t.steps[2].bodyHtml}</p>
            <div class="visual step-restore">
              <div class="v-row"><span>v#012</span><span class="when">12m ago</span><span class="restore">RESTORE</span></div>
              <div class="v-row cur"><span>v#011</span><span class="when">2h ago</span><span class="here">← HERE</span></div>
              <div class="v-row"><span>v#010</span><span class="when">yesterday</span><span class="restore">RESTORE</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function H(e){let t=e.shelf;return`
    <section id="shelf" aria-labelledby="shelf-heading">
      <div class="wrap">
        <div class="head">
          <span class="tape">▮ ${N(t.tape)}</span>
          <span class="hand" style="color:var(--accent);font-size:22px">${N(t.hand)}</span>
        </div>
        <h2 id="shelf-heading">${t.h2Html}</h2>
        <p class="lede">${N(t.lede)}</p>

        <div class="shelf-frame">
          <div class="bar">
            <span><span class="accent">▮</span> CHECKPOINT64 · CART SHELF</span>
            <span style="opacity:.7">3 games · 7 carts</span>
          </div>
          <div class="body">
            ${[{name:`Satisfactory`,path:`C:\\Users\\you\\AppData\\Local\\FactoryGame\\Saved\\…`,carts:[{color:`#ff5f4e`,name:`DEDI`,meta:`2d · 308 KB`,files:`2 files`,status:`AUTO ON`,statusKind:`on`,lock:{txt:`LOCK U`,kind:`on`}},{color:`#ff5f4e`,name:`SOLO RUN`,meta:`5h · 1.2 MB`,files:`4 files`,status:`SYNCED`,statusKind:`on`},{color:`#ff5f4e`,name:`MOD TEST`,meta:`3d · 880 KB`,files:`3 files`,status:`AUTO ─`,statusKind:`dim`}]},{name:`Stardew Valley`,path:`%AppData%\\StardewValley\\Saves\\`,carts:[{color:`#ffd23f`,name:`Y3 SPRING WEDDING`,meta:`now · 4.1 MB`,files:`3 files`,status:`SYNCED`,statusKind:`on`},{color:`#ffd23f`,name:`CO-OP W/ JESS`,meta:`yesterday · 5.6 MB`,files:`5 files`,status:`DIRTY`,statusKind:`warn`,lock:{txt:`JESS`,kind:`warn`}}]},{name:`Elden Ring`,path:`%AppData%\\EldenRing\\…`,noEmpty:!0,carts:[{color:`#a07cff`,name:`NG+3 RL1`,meta:`11h · 92 KB`,files:`1 file`,status:`AUTO ON`,statusKind:`on`},{color:`#a07cff`,name:`FAITH BUILD`,meta:`1w · 92 KB`,files:`1 file`,status:`ERROR`,statusKind:`err`}]}].map(e=>`
              <section class="shelf-game">
                <div class="sechead">
                  <h3>${N(e.name)}</h3>
                  <span class="pa">${N(e.path)}</span>
                  <span class="add" aria-hidden="true">+ <b>another</b></span>
                </div>
                <div class="shelf-grid">
                  ${e.carts.map(e=>I({...e,size:`md`})).join(``)}
                  ${e.noEmpty?``:`<span class="empty" aria-hidden="true">+ slot</span>`}
                </div>
              </section>
            `).join(``)}
          </div>
        </div>
      </div>
    </section>
  `}function U(e){let t=e.features;return`
    <section id="features" aria-labelledby="features-heading">
      <div class="wrap">
        <div class="head">
          <span class="tape">▮ ${N(t.tape)}</span>
        </div>
        <h2 id="features-heading">${t.h2Html}</h2>
        <p class="lede">${N(t.lede)}</p>
        <div class="features">
          ${t.items.map(e=>`
            <div class="feat">
              <div class="ico">▮ ${N(e.tag)}</div>
              <h3>${N(e.title)}</h3>
              <p>${N(e.body)}</p>
            </div>
          `).join(``)}
        </div>
      </div>
    </section>
  `}function W(e){let t=e.logbook,n=[{t:`12m`,who:`you`,tag:`v#012`,body:`uploaded a new version`,id:`8af23901`},{t:`1h`,who:`jess`,tag:`lock`,body:`claimed the lock`,id:`8af23901`},{t:`1h`,who:`jess`,tag:`v#011`,body:`auto-backed up`,id:`8af23901`},{t:`3h`,who:`you`,tag:`lock`,body:`released the lock`,id:`8af23901`},{t:`yest`,who:`kel`,tag:`rest`,body:`restored a prior version`,id:`2b91f0c4`},{t:`yest`,who:`you`,tag:`save`,body:`created <b>STARDEW Y3 SPRING</b>`,id:`2b91f0c4`}];return`
    <section class="paper" aria-labelledby="logbook-heading">
      <div class="wrap">
        <div class="head">
          <span class="tape" style="color:#a82828">▮ ${N(t.tape)}</span>
          <span class="hand" style="color:#a82828;font-size:22px">${N(t.hand)}</span>
        </div>
        <h2 id="logbook-heading">${t.h2Html}</h2>
        <p class="lede">${N(t.lede)}</p>

        <div class="logbook">
          <div class="lh">
            <span class="t">▮ LOGBOOK</span>
            <span class="c">${n.length} ${N(t.eventsLabel)}</span>
          </div>
          ${n.map(e=>`
            <div class="logentry">
              <span class="stamp">${N(e.t)}</span>
              <div>
                <b>${N(e.tag)}</b>
                <b>${N(e.who)}</b>
                <span> ${e.body}</span>
              </div>
              <span class="go">→ ${N(e.id.slice(0,8))}</span>
            </div>
          `).join(``)}
          <div class="live">${N(t.liveCaption)}</div>
        </div>
      </div>
    </section>
  `}function G(e){let t=e.creators,n=I({color:`#3df0ff`,name:`STREAM WORLD`,meta:`now · 6.0 MB`,files:null,status:`READ-ONLY`,statusKind:`dim`,showVersions:!1,size:`sm`});return`
    <section id="creators" aria-labelledby="creators-heading">
      <div class="wrap">
        <div class="head">
          <span class="tape">▮ ${N(t.tape)}</span>
          <span class="hand" style="color:var(--accent);font-size:22px">${N(t.hand)}</span>
        </div>
        <h2 id="creators-heading">${t.h2Html}</h2>
        <p class="lede">${N(t.lede)}</p>

        <div class="steps">
          ${t.steps.map(e=>`
            <div class="step">
              <div class="n">${N(e.label)}</div>
              <h3>${e.h3Html}</h3>
              <p>${N(e.body)}</p>
            </div>
          `).join(``)}
        </div>

        <div class="hosted">
          <div class="bar">
            <span><span class="accent">▮</span> HOSTED ACCESS</span>
            <span class="ro">READ-ONLY · PRO</span>
          </div>
          <div class="body">
            <div class="code-label">SHARE CODE</div>
            <div class="code-row">
              <span class="code">RUN-W1TH-ME</span>
              <span class="copy">COPY LINK</span>
            </div>
            <div class="hchips">
              <span class="hchip">∞ USES</span>
              <span class="hchip">218 JOINED</span>
              <span class="hchip">NO SEATS USED</span>
              <span class="hchip warn">REVOKE</span>
            </div>
            <div class="fans-label">fans who grabbed it</div>
            <div class="fans" aria-hidden="true">
              ${n}${n}${n}
              <span class="more">+215</span>
            </div>
          </div>
        </div>

        <ul class="creator-points">
          ${t.points.map(e=>`<li><span aria-hidden="true">▸ </span>${N(e)}</li>`).join(``)}
        </ul>
        <p class="creator-pro">${t.proNoteHtml}</p>
      </div>
    </section>
  `}function K(e,t){let n=E(e.playtimeMinutes),r=(e.author||`?`).trim().charAt(0).toUpperCase()||`?`,i=e.votesUp>0?g(t.helpfulTpl,e.votesUp.toLocaleString(`en-US`)):``;return`
    <figure class="steam-card">
      <div class="steam-card-head">
        <span class="steam-rec"><span aria-hidden="true">▲ </span>${N(t.recommended)}</span>
        ${n?`<span class="steam-hrs">${N(g(t.hoursTpl,n))}</span>`:``}
      </div>
      <blockquote class="steam-text">${N(e.text)}</blockquote>
      <figcaption class="steam-meta">
        <span class="steam-avatar" aria-hidden="true">${N(r)}</span>
        <span class="steam-author">${N(e.author||t.anonymous)}</span>
        ${i?`<span class="steam-helpful">${N(i)}</span>`:``}
      </figcaption>
    </figure>
  `}function q(e,{steam:t}={}){if(!t||!Array.isArray(t.reviews)||!t.reviews.length)return``;let n=e.steam,r=t.totalReviews?g(n.countTpl,t.totalReviews.toLocaleString(`en-US`)):``;return`
    <section id="reviews" aria-labelledby="reviews-heading">
      <div class="wrap">
        <div class="head">
          <span class="tape">${N(n.tape)}</span>
          <span class="hand" style="color:var(--accent);font-size:22px">${N(n.hand)}</span>
        </div>
        <h2 id="reviews-heading">${n.h2Html}</h2>
        <p class="lede">${N(n.lede)}</p>

        <div class="steam-summary">
          ${t.scoreDesc?`<span class="steam-badge"><span aria-hidden="true">▲ </span>${N(t.scoreDesc)}</span>`:``}
          ${r?`<span class="steam-count">${N(r)}</span>`:``}
          <a class="steam-link" href="${N(t.storeUrl)}" target="_blank" rel="noopener noreferrer">${N(n.viewOnSteam)} <span aria-hidden="true">↗</span></a>
        </div>

        <div class="steam-grid">
          ${t.reviews.map(e=>K(e,n)).join(``)}
        </div>

        <p class="steam-note">${N(g(n.placeholderTpl,t.appName))}</p>
      </div>
    </section>
  `}function J(e,t){let n=e.savings,r=e.money,i=[P(15,{suffix:r.perMonthShort,intl:t}),`~3.6%`,P(0,{suffix:r.perMonthShort,intl:t})],a=[g(n.cards[0].bodyTpl,P(15,{suffix:r.aMonth,intl:t}),P(180,{suffix:r.aYear,intl:t}),P(900,{suffix:r.overFive,intl:t})),g(n.cards[1].bodyTpl),g(n.cards[2].bodyTpl)],o=[P(180,{intl:t}),`~312`,`~8,448`,`~${P(173,{intl:t})}`];return`
    <section class="paper" id="savings" aria-labelledby="savings-heading">
      <div class="wrap">
        <div class="head">
          <span class="tape" style="color:#a82828">▮ ${N(n.tape)}</span>
          <span class="hand" style="color:#a82828;font-size:22px">${N(n.hand)}</span>
        </div>
        <h2 id="savings-heading">${n.h2Html}</h2>
        <p class="lede">${N(n.lede)}</p>

        <div class="steps">
          ${n.cards.map((e,t)=>`
            <div class="step">
              <div class="n">${i[t]} · ${N(e.tag)}</div>
              <h3>${N(e.title)}</h3>
              <p>${a[t]}</p>
            </div>
          `).join(``)}
        </div>

        <div class="dedi-receipt" aria-label="${N(n.receiptAria)}">
          <div class="rh">
            <span>${g(n.receiptLabelTpl,P(15,{suffix:r.perMonthShort,intl:t}))}</span>
            <span class="hand" style="font-size:18px">${N(n.receiptYear)}</span>
          </div>
          ${n.lineKeys.map((e,t)=>`
            <div class="rrow"><span>${N(e)}</span><b>${o[t]}</b></div>
          `).join(``)}
          <div class="rrow total">
            <span>${N(n.totalLabel)}</span>
            <b class="accent">${P(180,{suffix:r.perYear,intl:t})}</b>
          </div>
          <div class="rfoot">
            ${g(n.footTpl,P(900,{intl:t}))}
          </div>
        </div>
      </div>
    </section>
  `}function re({tag:e,price:t,unit:n,tagline:r,features:i,cta:a,highlight:o,badge:s}){return`
    <div class="price-card${o?` hl`:``}">
      ${o?`<div class="badge">${N(s)}</div>`:``}
      <div class="tag">▮ ${N(e)}</div>
      <div class="priceline">
        <span class="price">${t}</span>
        <span class="unit">${N(n)}</span>
      </div>
      <div class="tagline">${N(r)}</div>
      <ul>${i.map(e=>`<li>${N(e)}</li>`).join(``)}</ul>
      <a href="#download" class="cta-btn">${N(a)}</a>
    </div>
  `}function Y(e,t){let n=e.pricing,r=[P(0,{intl:t}),9.99,5];return`
    <section id="pricing" aria-labelledby="pricing-heading">
      <div class="wrap">
        <div class="head">
          <span class="tape">▮ ${N(n.tape)}</span>
        </div>
        <h2 id="pricing-heading">${n.h2Html}</h2>
        <p class="lede">${N(n.lede)}</p>

        <div class="price-grid">
          ${n.cards.map((e,t)=>re({tag:e.tag,price:r[t],unit:e.unit,tagline:e.tagline,features:e.features,cta:e.cta,highlight:t===1,badge:n.badge})).join(`
          `)}
        </div>
      </div>
    </section>
  `}function X(e,t,n){let r=n.download,i=t?.platforms?.[e.key],a=t?.url||y;if(i){let n=w(i.name),a=C(i.size),o=[n&&`.${n}`,t.tag,a].filter(Boolean).join(` · `);return`
      <a class="dl" data-platform="${N(e.key)}" href="${N(i.url)}"
         aria-label="${N(g(r.tileAriaLiveTpl,e.label,t.tag))}">
        <span>${N(e.label)}</span>
        <span class="arch">${N(o)}</span>
      </a>
    `}return`
    <a class="dl" data-platform="${N(e.key)}" href="${N(a)}"
       aria-label="${N(g(r.tileAriaSoonTpl,e.label))}">
      <span>${N(e.label)}</span>
      <span class="arch">${N(e.placeholderHint)} · ${N(r.comingSoon)}</span>
    </a>
  `}function ie(){return`
   
        <a class="steam-badge" href="https://store.steampowered.com/app/4790820" target="_blank" rel="noopener noreferrer">
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
    
  `}function ae(e,{releases:t}={}){let n=e.download,r=x.map(n=>X(n,t,e)).join(``),i=t?.tag?n.headlineLiveHtml:n.headlineSoonHtml,a=t?.tag?n.blurbLive:n.blurbSoon,o=t?.tag?`<span aria-hidden="true">↘ </span>${g(n.signoffLiveTpl,N(t.url))}`:`<span aria-hidden="true">↘ </span>${N(n.signoffSoon)}`;return`
    <section class="cta-strip" id="download" aria-labelledby="download-heading">
      <div class="wrap">
   
        <div class="inner">
          <div>
            <h2 id="download-heading">${i}</h2>
            <p>${N(a)}</p>
            <p class="signoff">${o}</p>
          </div>
          <div class="downloads">
           ${ie()}
            ${r}
          </div>
        </div>
      </div>
    </section>
  `}function oe(e,t){let n=e.faq,r=P(120,{to:240,suffix:e.money.aYear,intl:t});return`
    <section id="faq" aria-labelledby="faq-heading">
      <div class="wrap">
        <div class="head">
          <span class="tape">▮ ${N(n.tape)}</span>
        </div>
        <h2 id="faq-heading">${n.h2Html}</h2>
        <div class="faq">
          ${n.items.map(e=>`
            <details>
              <summary>${N(e.q)}</summary>
              <div class="body">${g(e.a,r)}</div>
            </details>
          `).join(``)}
        </div>
      </div>
    </section>
  `}function se(e,t){let n=e.footer;return`
    <footer class="bot" role="contentinfo">
      <div class="wrap">
        <div class="inner">
          <div class="col1">
            <div class="brand">CHECKPOINT64</div>
            <p class="blurb">${N(n.blurb)}</p>
            <p class="sign">${N(n.sign)} <span aria-hidden="true">✦</span></p>
          </div>
          <nav aria-label="${N(n.ariaProduct)}">
            <h2 class="footer-h">${N(n.product)}</h2>
            <ul>
              <li><a href="#how">${N(n.links.how)}</a></li>
              <li><a href="#features">${N(n.links.features)}</a></li>
              <li><a href="#pricing">${N(n.links.pricing)}</a></li>
              <li><a href="#download">${N(n.links.joinList)}</a></li>
              <li><a href="https://github.com/checkpoint64/checkpoint64/releases" target="_blank" rel="noopener noreferrer" aria-label="${N(n.changelogAria)}">${N(n.links.changelog)}</a></li>
            </ul>
          </nav>
          <nav aria-label="${N(n.ariaResources)}">
            <h2 class="footer-h">${N(n.resources)}</h2>
            <ul>
              <li><a href="./blog/">${N(n.links.blog)}</a></li>
              <li><a href="./games/">Game save backup guides</a></li>
              <!-- ponytail: guide-page labels hardcoded EN (pages are EN-only; render.js can't import pages/load.js — it must stay browser-safe). localize.js rewrites ./ -> ../ for locale pages. -->
              <li><a href="./steam-cloud-alternative/">Steam Cloud alternative</a></li>
              <li><a href="./dedicated-server-alternative/">Dedicated server alternative</a></li>
              <li><a href="./modded-game-save-backup/">Modded save backup</a></li>
              <li><a href="./emulator-save-backup/">Emulator save backup</a></li>
            </ul>
          </nav>
          <nav aria-label="${N(n.ariaCompany)}">
            <h2 class="footer-h">${N(n.company)}</h2>
            <ul>
              <li><a href="https://discord.gg/kxeYwuuHEn" target="_blank" rel="noopener noreferrer" aria-label="${N(n.discordAria)}">${N(n.links.discord)}</a></li>
              <li><a href="./terms/">${N(n.links.terms)}</a></li>
              <li><a href="./privacy/">${N(n.links.privacy)}</a></li>
            </ul>
          </nav>
        </div>
        <div class="copyline">
          <span>${N(g(n.copyTpl,t))}</span>
          <span style="opacity:.6">${N(n.notAffiliated)}</span>
        </div>
      </div>
    </footer>
  `}function ce({year:e=new Date().getFullYear(),releases:t=null,steam:n=null,locale:r=`en`}={}){let i=h(r),a=i.t,o=i.intl,s=i.code;return[R(a,s),`<main id="main" role="main">`,z(a),B(a,o),V(a),H(a),U(a),W(a),G(a),q(a,{steam:n}),J(a,o),Y(a,o),ae(a,{releases:t}),oe(a,o),`</main>`,se(a,e)].join(``)}var Z=`https://checkpoint64.com`,Q=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),le=`game save backup, cloud save sync, save file versioning, rollback save game, minecraft world backup, modded minecraft save backup, stardew valley save sync, skyrim save backup, palworld save backup, valheim world backup, factorio save backup, satisfactory save backup, elden ring save backup, project zomboid save backup, enshrouded save backup, co-op save sharing, dedicated server alternative, emulator save sync, retroarch save backup, save state history, PC game save cloud, automatic save backup, game save manager, game progress backup, save game transfer, cloud save manager`,ue=`    <script data-collect-dnt="true" async src="https://scripts.simpleanalyticscdn.com/latest.js"><\/script>
    <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif?collect-dnt=true" alt=""
                   referrerpolicy="no-referrer-when-downgrade"/></noscript>
    <script src="https://analytics.ahrefs.com/analytics.js" data-key="n2SnzJRiCEhdWzHYmrw/Yg" async><\/script>

    <!-- Clarity tracking code for https://checkpoint64.com/ -->
    <script>
        (function (c, l, a, r, i, t, y) {
            c[a] = c[a] || function () {
                (c[a].q = c[a].q || []).push(arguments)
            };
            t = l.createElement(r);
            t.async = 1;
            t.src = "https://www.clarity.ms/tag/" + i + "?ref=bwt";
            y = l.getElementsByTagName(r)[0];
            y.parentNode.insertBefore(t, y);
        })(window, document, "clarity", "script", "wt2sg869vg");
    <\/script>`,de=`    <script>
        (function () {
            try {
                if (location.pathname !== '/') return;
                if (localStorage.getItem('cp64-lang')) return;
                if (/bot|crawl|spider|slurp|bingpreview/i.test(navigator.userAgent || '')) return;
                var supported = ['de', 'fr', 'es'];
                var langs = (navigator.languages && navigator.languages.length)
                    ? navigator.languages : [navigator.language || ''];
                for (var i = 0; i < langs.length; i++) {
                    var code = String(langs[i]).slice(0, 2).toLowerCase();
                    if (code === 'en') return;
                    if (supported.indexOf(code) !== -1) { location.replace('./' + code + '/'); return; }
                }
            } catch (e) { /* leave on the English page */ }
        })();
    <\/script>`,fe=`    <script>
        (function () {
            try {
                var saved = localStorage.getItem('cp64-theme');
                var theme = saved || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
                if (theme === 'light') document.documentElement.setAttribute('data-theme', 'light');
            } catch (e) { /* localStorage blocked — fall through to default dark theme */
            }
        })();
    <\/script>`,pe=[`    <link rel="alternate" hreflang="en" href="${Z}/"/>`,`    <link rel="alternate" hreflang="de" href="${Z}/de/"/>`,`    <link rel="alternate" hreflang="fr" href="${Z}/fr/"/>`,`    <link rel="alternate" hreflang="es" href="${Z}/es/"/>`,`    <link rel="alternate" hreflang="x-default" href="${Z}/"/>`].join(`
`);function $(e,t){return`${M(120,`EUR`,t)}–${M(240,`EUR`,t)}${e.money.aYear}`}function me({code:e,t,intl:n}){let r=t.jsonld;return[{"@context":`https://schema.org`,"@type":`Organization`,name:`Checkpoint64`,alternateName:`Checkpoint 64`,url:`${Z}/`,logo:`${Z}/retro_save_icon.svg`,description:r.orgDescription,sameAs:[`https://discord.gg/kxeYwuuHEn`]},{"@context":`https://schema.org`,"@type":`WebSite`,name:`Checkpoint64`,url:`${Z}/`,inLanguage:e},{"@context":`https://schema.org`,"@type":`SoftwareApplication`,name:`Checkpoint64`,alternateName:`Checkpoint 64`,applicationCategory:`UtilitiesApplication`,applicationSubCategory:`Backup Software`,operatingSystem:`Windows, macOS, Linux`,url:`${Z}/`,description:r.softwareDescription,image:`${Z}/og-image.png`,softwareVersion:`0.4`,downloadUrl:`${Z}/#download`,publisher:{"@type":`Organization`,name:`Checkpoint64`,url:`${Z}/`},offers:{"@type":`Offer`,price:`0`,priceCurrency:`USD`,availability:`https://schema.org/InStock`,url:`${Z}/#pricing`},featureList:r.featureList},{"@context":`https://schema.org`,"@type":`HowTo`,name:r.howToName,description:r.howToDescription,totalTime:`PT2M`,supply:r.howToSupply.map(e=>({"@type":`HowToSupply`,name:e})),tool:[{"@type":`HowToTool`,name:r.howToTool}],step:r.howToSteps.map((e,t)=>({"@type":`HowToStep`,position:t+1,name:e.name,text:e.text,url:`${Z}/#how`}))},{"@context":`https://schema.org`,"@type":`FAQPage`,mainEntity:r.faq.map((e,r)=>({"@type":`Question`,name:e.q,acceptedAnswer:{"@type":`Answer`,text:r===3?g(e.a,$(t,n)):e.a}}))}].map(e=>`    <script type="application/ld+json">\n${JSON.stringify(e,null,8).replace(/^/gm,`    `)}\n    <\/script>`).join(`
`)}function he({locale:e=`en`,includeAnalytics:t=!0}={}){let n=h(e),r=n.t,i=n.intl,a=n.code,o=n.ogLocale,s=a===`en`?`./`:`../`,c=`${Z}${m(a)}`;return`    <meta name="msvalidate.01" content="91385F5B3EAE099308DBAAF85B0EF115"/>
${t?`${ue}\n`:``}    <title>${Q(r.meta.title)}</title>
    <meta name="description" content="${Q(r.meta.description)}"/>
    <meta name="keywords" content="${Q(le)}"/>
    <meta name="author" content="Checkpoint64"/>
    <meta name="publisher" content="Checkpoint64"/>
    <meta name="application-name" content="Checkpoint64"/>
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
    <meta name="googlebot" content="index, follow"/>
    <meta name="bingbot" content="index, follow"/>
    <meta name="referrer" content="strict-origin-when-cross-origin"/>
    <meta name="format-detection" content="telephone=no"/>
    <meta name="theme-color" content="#f5efe1" media="(prefers-color-scheme: light)"/>
    <meta name="theme-color" content="#1a1814" media="(prefers-color-scheme: dark)"/>
    <meta name="color-scheme" content="light dark"/>
    <link rel="canonical" href="${c}"/>
${pe}
${de}
${fe}
    <link rel="icon" type="image/svg+xml" href="${s}retro_save_icon.svg"/>
    <link rel="alternate icon" href="${s}retro_save_icon.svg"/>
    <link rel="mask-icon" href="${s}retro_save_icon.svg" color="#ff5f4e"/>
    <link rel="apple-touch-icon" href="${s}retro_save_icon.svg"/>
    <meta name="apple-mobile-web-app-title" content="Checkpoint64"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Checkpoint64"/>
    <meta property="og:title" content="${Q(r.meta.ogTitle)}"/>
    <meta property="og:description" content="${Q(r.meta.ogDescription)}"/>
    <meta property="og:url" content="${c}"/>
    <meta property="og:image" content="${Z}/og-image.png"/>
    <meta property="og:image:type" content="image/png"/>
    <meta property="og:image:width" content="1200"/>
    <meta property="og:image:height" content="630"/>
    <meta property="og:image:alt" content="${Q(r.meta.ogImageAlt)}"/>
    <meta property="og:locale" content="${o}"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:title" content="${Q(r.meta.twitterTitle)}"/>
    <meta name="twitter:description" content="${Q(r.meta.twitterDescription)}"/>
    <meta name="twitter:image" content="${Z}/og-image.png"/>
    <meta name="twitter:image:alt" content="${Q(r.meta.twitterImageAlt)}"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=VT323&family=Press+Start+2P&family=Patrick+Hand&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet"/>
${me({code:a,t:r,intl:i})}`}function ge(e=`en`){let t=h(e).t;return`<noscript>
    <p style="max-width:60ch;margin:1.5rem auto;padding:1rem;border:2px dashed #a82828;font-family:ui-monospace,monospace;text-align:center">
        ${Q(t.meta.noscriptHtml)}
    </p>
</noscript>`}var _e=l(`<a class="skip-link" href="#main"> </a> <!> <!>`,1);function ve(l,m){t(m,!0);let _=h(m.data.locale).t,v=he({locale:m.data.locale,includeAnalytics:!0}),y=ge(m.data.locale),b=ce({releases:m.data.releases,steam:m.data.steam,locale:m.data.locale,year:m.data.year});m.data.locale!==`en`&&(b=b.replace(/"\.\//g,`"../`)),u(()=>{let e=[];{let t=Array.from(document.querySelectorAll(`details.menu`));if(t.length){document.querySelectorAll(`.lang-menu [data-lang]`).forEach(e=>{e.addEventListener(`click`,()=>{try{localStorage.setItem(`cp64-lang`,e.dataset.lang)}catch{}})}),t.forEach(e=>{e.addEventListener(`toggle`,()=>{e.open&&t.forEach(t=>{t!==e&&(t.open=!1)})}),e.addEventListener(`keydown`,t=>{t.key===`Escape`&&(e.open=!1,e.querySelector(`summary`)?.focus())}),e.querySelectorAll(`a`).forEach(t=>{t.addEventListener(`click`,()=>{e.open=!1})})});let n=e=>{t.forEach(t=>{t.open&&!t.contains(e.target)&&(t.open=!1)})};document.addEventListener(`click`,n),e.push(()=>document.removeEventListener(`click`,n))}}{let e=document.querySelector(`[data-theme-toggle]`);if(e){let t=e.querySelector(`[data-theme-icon]`),n=n=>{n===`light`?document.documentElement.setAttribute(`data-theme`,`light`):document.documentElement.removeAttribute(`data-theme`),t&&(t.textContent=n===`light`?`☾`:`☀`),e.setAttribute(`aria-label`,n===`light`?`Switch to dark mode`:`Switch to light mode`)},r=()=>document.documentElement.getAttribute(`data-theme`)===`light`?`light`:`dark`;n(r()),e.addEventListener(`click`,()=>{let e=r()===`light`?`dark`:`light`;n(e);try{localStorage.setItem(`cp64-theme`,e)}catch{}})}}(async()=>{let e=document.querySelectorAll(`a.dl[data-platform]`);if(!e.length)return;let t=await ee();t&&e.forEach(e=>{let n=t.platforms[e.dataset.platform],r=e.querySelector(`.arch`);if(n){e.href=n.url;let i=(x.find(t=>t.key===e.dataset.platform)||{}).label||e.dataset.platform;if(e.setAttribute(`aria-label`,g(_.download.tileAriaLiveTpl,i,t.tag)),r){let e=w(n.name);r.textContent=[e&&`.${e}`,t.tag,C(n.size)].filter(Boolean).join(` · `)}}else t.url&&(e.href=t.url)})})();{let e=document.querySelectorAll(`[data-money]`);if(e.length){let t=typeof navigator<`u`&&(navigator.languages?.length?navigator.languages:navigator.language?[navigator.language]:[])||[],n=ne({locales:t}),r=t[0]||void 0;e.forEach(e=>{let t=Number(e.dataset.money);if(!Number.isFinite(t))return;let i=e.dataset.moneySuffix||``,a=e.dataset.moneyTo,o=M(t,n,r);e.textContent=a!=null&&a!==``?`${o}–${M(Number(a),n,r)}${i}`:`${o}${i}`})}}{let t=document.querySelector(`[data-step-auto]`);if(t){let n=[`WATCHING…`,`CHANGES DETECTED`,`UPLOADING…`,`SYNCED`],r=[`#3df0ff`,`#ffe0a8`,`#a07cff`,`#c8efb8`],i=t.querySelectorAll(`.bar`),a=t.querySelector(`[data-auto-label]`),o=typeof window.matchMedia==`function`&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,s=0,c=()=>{i.forEach((e,t)=>e.classList.toggle(`on`,t<=s)),a.textContent=n[s],a.style.background=r[s]};if(o)s=n.length-1,c();else{c();let t=setInterval(()=>{s=(s+1)%n.length,c()},1100);e.push(()=>clearInterval(t))}}}return()=>e.forEach(e=>e())});var S=_e();d(`ypbj28`,e=>{var t=f();c(p(t),()=>v),o(e,t)});var T=p(S),E=e(T,!0);n(T);var D=r(T,2);c(D,()=>b),c(r(D,2),()=>y),i(()=>a(E,_.meta.skipLink)),o(l,S),s()}export{ve as component};