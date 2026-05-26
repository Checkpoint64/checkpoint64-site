// English copy — the source of truth. Keys ending in `Html` (or `Tpl`) hold
// raw HTML / interpolation templates and are NOT escaped at render time; every
// other string is plain text and IS escaped. App-mockup chrome (game names,
// file paths, version tags, status chips, log entries) deliberately stays in
// English across all locales because it depicts the real, English app UI.

export default {
  nav: {
    brandAria: 'Checkpoint64 — home',
    links: {
      how: 'HOW IT WORKS',
      shelf: 'THE SHELF',
      features: 'FEATURES',
      savings: 'SAVINGS',
      pricing: 'PRICING',
      faq: 'FAQ',
      blog: 'BLOG',
    },
    cta: 'JOIN LIST',
    ctaAria: 'Join the launch list',
    switcherAria: 'Choose language',
  },

  hero: {
    h1Html: 'NEVER LOSE<br/>A SAVE <span class="accent">AGAIN.</span>',
    sub: 'Your saves, backed up forever. Pass worlds between friends like cartridges. No more "who has the latest?" Everyone stays in sync. Roll back bad runs. Host goes offline? Someone else picks up. Solo or co-op, always protected.',
    ctaPrimary: 'JOIN THE LIST',
    ctaPrimaryAria: 'Join the Checkpoint64 launch list',
    ctaSecondary: 'SEE IT WORK',
    ctaSecondaryAria: 'See how Checkpoint64 works',
    small: ['one-time purchase', 'no subscription', 'yours, forever'],
  },

  problems: {
    tape: 'STUFF THAT REALLY HURTS',
    h2Html: 'WHAT THIS FIXES,<br/><span class="accent">BASICALLY.</span>',
    headingId: 'What this fixes',
    woes: [
      { stamp: '01:14 AM', text: "the host's factorio crashed mid-save — 80 hours of shared world, gone", tag: 'RIP' },
      { stamp: 'WED 6PM', text: 'your co-op friend played alone and saved over your run', tag: 'OW' },
      { stamp: null, text: 'paying for a 24/7 server when your group only plays six hours a week', tag: 'BILL' },
      { stamp: 'SAT', text: "host is on holiday — nobody else has the latest valheim world", tag: 'STUCK' },
    ],
  },

  how: {
    tape: 'HOW CHECKPOINT64 WORKS',
    h2Html: 'POINT IT AT A FOLDER.<br/><span class="accent">FORGET ABOUT IT.</span>',
    lede: "The whole point is that you don't have to think about save files anymore. Three steps, once, and you're done forever.",
    steps: [
      {
        label: '01 · UPLOAD',
        h3Html: 'HIT UPLOAD ↑',
        bodyHtml: 'Grab a snapshot of your save folder and send a copy to the cloud. Each upload becomes its own labelled <em>version</em>.',
      },
      {
        label: '02 · AUTO-BACKUP',
        h3Html: 'FLIP AUTO ON',
        bodyHtml: 'Checkpoint64 checks your save folder every couple of minutes. If anything changed, it uploads a fresh version on its own. Only the changed files get sent — the rest is skipped.',
      },
      {
        label: '03 · RESTORE',
        h3Html: 'ROLL IT BACK',
        bodyHtml: 'Click <b>Versions →</b> on any save to see every backup. Pick one and hit <b>Restore</b> — Checkpoint64 puts the files back and marks that version as the current one.',
      },
    ],
    autoMeta: 'every 2 minutes · only what changed',
  },

  shelf: {
    tape: 'A LOOK AT THE APP',
    hand: 'not a screenshot — live',
    h2Html: 'YOUR LIBRARY<br/>IS A <span class="accent">CARTRIDGE SHELF.</span>',
    lede: 'Every save is a cartridge. Same game, different runs? Same shelf, different carts.',
  },

  features: {
    tape: 'FEATURES',
    h2Html: "WHAT'S IN <span class=\"accent\">THE BOX.</span>",
    lede: 'Built by people who reload saves a lot. No fluff, no charge per person, no "powered by AI." Just a save vault that works.',
    items: [
      { tag: 'VERSION HISTORY', title: 'EVERY UPLOAD\nIS A VERSION.', body: 'Scroll through every backup with file count, size, and what changed since last time. Hit Restore and it puts the save back AND marks it as current — no confusion.' },
      { tag: 'CO-OP LOCKS', title: 'ONE PERSON\nHOLDS THE WORLD.', body: 'Games like Factorio, Satisfactory, Valheim, and V Rising only have one live world file at a time. Whoever holds the lock can upload it; everyone else just downloads. Nobody using it? Grab the lock yourself — no more "who has the latest save?"' },
      { tag: 'ONLY WHAT CHANGED', title: 'TINY\nUPLOADS.', body: 'We only send the bits that actually changed. A 14 MB save where one file moved? Uploads 8 KB. Easy on your internet, easy on your storage.' },
      { tag: 'PER-GAME RULES', title: 'PICK WHAT\nGETS BACKED UP.', body: 'Choose which files to back up and which to ignore. Skip the crash logs and screenshots, keep the save. Already set up for the 40+ games Checkpoint64 knows about.' },
      { tag: 'BACKGROUND APP', title: 'RUNS IN THE\nBACKGROUND.', body: "A small, light app that barely uses any memory. Checks every 2 minutes and rests when nothing's changed. Won't get in the way while you're playing." },
      { tag: 'LOGBOOK', title: 'WHO DID WHAT,\nWHEN.', body: "Every upload, restore, and lock-grab gets written down in your group's logbook. Handy when your co-op partner blames you for the bad run." },
    ],
  },

  logbook: {
    tape: 'LOGBOOK · LIVE',
    hand: 'shared with your group',
    h2Html: 'BLAME THE <span class="accent">RIGHT PERSON.</span>',
    lede: 'Everything anyone in your group does gets written down. Handy for co-op friends, modded servers, speedrun teams, and the classic "wait, who deleted that?"',
    eventsLabel: 'events',
    liveCaption: 'live · refresh on visit',
  },

  savings: {
    tape: 'DITCH THE DEDI',
    hand: 'do the math',
    h2Html: 'NO MORE 24/7 BOX<br/><span class="accent">YOU BARELY USE.</span>',
    lede: "A dedicated server makes sense if twenty people are on it every night. For the average co-op group — four friends, a couple of evenings a week — you're renting empty hours. Checkpoint64 covers the part you actually need (the world file, lock-passing, version history) for a one-time payment instead of a forever bill.",
    cards: [
      { tag: 'WHAT A DEDI COSTS', title: 'YOU PAY 24/7.', bodyTpl: 'A rented co-op server is around {0} for the popular games — {1}, {2}. Billed whether anyone logged in this week or not.' },
      { tag: 'WHAT YOU ACTUALLY USE', title: 'IT SITS IDLE.', bodyTpl: "Four friends, two evenings a week, three hours each. That's about six hours of play out of 168 in the week. Your dedi is empty for the other 96%." },
      { tag: 'WHAT CHECKPOINT64 COSTS', title: 'PAY ONCE. DONE.', bodyTpl: 'One Lifetime payment and the cloud holds the world. Whoever wants to play grabs the lock, plays, and pushes it back. No box to keep warm.' },
    ],
    lineKeys: [
      'Server rental, 12 months',
      'Hours actually used (4 ppl)',
      'Hours nobody touched it',
      'Spent on idle uptime',
    ],
    receiptLabelTpl: '▮ RECEIPT · TYPICAL {0} DEDI',
    receiptYear: 'year one',
    receiptAria: 'Cost breakdown of a typical dedicated server billed monthly',
    totalLabel: "What you'd save with Checkpoint64 Lifetime, year two onward",
    footTpl: "Over five years that's roughly <b>{0}</b> you keep. Or a new GPU, whichever you prefer. <a href=\"./blog/ditch-the-dedicated-server/\">Read the full breakdown →</a>",
  },

  money: {
    perMonthShort: '/MO',
    aMonth: ' a month',
    aYear: ' a year',
    overFive: ' over five',
    perYear: ' / yr',
  },

  pricing: {
    tape: 'PRICING',
    h2Html: 'PICK YOUR<br/><span class="accent">CART.</span>',
    lede: "Three ways to play it. Free to try, paid for life, or Pro for crews who save together. No charge per person, no surprise fees, no rip-cords. Final prices aren't set yet — drop your email and we'll tell you before launch.",
    badge: '★ MOST CARTS',
    cards: [
      {
        tag: 'FREE', unit: 'no card required',
        tagline: 'kick the tires, see if your saves come back',
        features: [
          '1 personal space (no teams)',
          '20 MiB cloud storage',
          'automatic backup + full version history',
          'join a friend’s team for co-op',
        ],
        cta: 'GET FREE',
      },
      {
        tag: 'LIFETIME', unit: 'one-time, yours forever',
        tagline: 'pay once, your saves live forever',
        features: [
          'personal space + up to 2 teams',
          '5 GiB storage per space',
          'co-op locks + shared activity logbook',
          'no subscription, ever',
          'unlock via Steam or direct',
        ],
        cta: 'NOTIFY ME',
      },
      {
        tag: 'PRO', unit: 'monthly, cancel anytime',
        tagline: 'for crews, streamers, modding groups',
        features: [
          'personal space + up to 5 teams',
          '50 GiB storage per space',
          '25 seats per team (guaranteed minimum)',
          '100 versions / 90 days kept (guaranteed minimum)',
          'priority bandwidth (2× the API throughput)',
        ],
        cta: 'NOTIFY ME',
      },
    ],
    tbc: 'TBC',
    notify: {
      text: "Pricing isn't final yet. Drop your email and we'll tell you the day it ships.",
      button: 'NOTIFY ME',
    },
    emailPlaceholder: 'you@somewhere.com',
    emailLabel: 'Email address',
    formAria: 'Notify me about Checkpoint64 pricing',
  },

  download: {
    headlineSoonHtml: 'SHIPPING SOON.<br/>GET ON THE<br/><span class="invert">LIST.</span>',
    headlineLiveHtml: 'LATEST BUILD.<br/>GRAB YOUR<br/><span class="invert">COPY.</span>',
    blurbSoon: "We're still testing in private. Drop your email, pick what you play on, and we'll let you know the moment it's ready.",
    blurbLive: 'Pick your platform. Builds are auto-published from GitHub — the link goes straight to the latest installer.',
    signoffSoon: 'no spam, one email at launch',
    signoffLiveTpl: 'release notes & older builds: <a href="{0}">on GitHub</a>',
    comingSoon: 'coming soon',
    notifyButton: 'NOTIFY',
    emailLabel: 'Email address',
    emailPlaceholder: 'you@somewhere.com',
    formAria: 'Notify me when Checkpoint64 ships',
    tileAriaLiveTpl: 'Download Checkpoint64 for {0} ({1})',
    tileAriaSoonTpl: 'Checkpoint64 for {0} — see releases on GitHub',
  },

  faq: {
    tape: 'FAQ',
    h2Html: 'FREQUENTLY <span class="accent">CHECKED.</span>',
    // `a` values are raw HTML; item index 3 uses {0} for the savings figure.
    items: [
      { q: "WHAT IS A 'SAVE'?", a: 'Whatever your game writes to your hard drive. Checkpoint64 treats the files in a folder as one save and backs them up together. You point it at the folder and pick which files count. We’ve already set this up for 40+ popular games.' },
      { q: 'DO YOU UPLOAD WHILE THE GAME IS RUNNING?', a: 'Yes, carefully. Checkpoint64 never locks your save files. If the game is in the middle of saving when we check, we wait a moment and try again — no broken files, no crashes. Most games finish saving in a split second anyway.' },
      { q: 'WHAT HAPPENS IF MY CO-OP PARTNER OVERWRITES MY UPLOAD?', a: "They can’t, on purpose. Only the person holding the lock can upload. If they want to push their version, they have to grab the lock first — and that warns you before it happens. Your last version stays safe in the history; you can always roll back to it." },
      { q: 'DO I STILL NEED A DEDICATED SERVER?', a: 'For most groups, no. The whole point of a dedicated server is keeping your world online when the host’s PC is off. Checkpoint64 covers about 90% of that for a one-time fee: whoever wants to play grabs the lock, plays their session, then pushes the save back. A typical co-op group saves {0} compared to renting a 24/7 server that sits idle 18 hours a day.' },
      { q: 'DOES THIS WORK FOR CONSOLE SAVES?', a: 'Only if you can get your console saves onto a PC — like emulators, Xbox or PS+ cloud save exports, and Steam Cloud through your PC. Checkpoint64 itself only runs on Windows, Mac, and Linux.' },
      { q: 'WHAT WILL IT COST?', a: "Three tiers: Free (20 MiB, personal only), Lifetime (one-time payment, 5 GiB per space + 2 teams), and Pro (monthly, 50 GiB per space + 5 teams, for bigger crews). No charge per person on any tier. Final numbers aren’t set — sign up to the launch list and we’ll tell you before everyone else, plus lock you in at the early-bird price." },
      { q: 'WHEN DOES IT SHIP?', a: "Soon — we’re testing in private now and aiming for a public launch later this year. Get on the list and we’ll send one email the day the Windows / Mac / Linux versions are ready." },
    ],
  },

  footer: {
    blurb: 'A safe place for your big runs. Built by people who lost a 200-hour Factorio base and never got over it.',
    sign: 'made for me.',
    product: 'PRODUCT',
    resources: 'RESOURCES',
    company: 'COMPANY',
    links: {
      how: 'How it works',
      features: 'Features',
      pricing: 'Pricing',
      joinList: 'Join the list',
      changelog: 'Changelog',
      blog: 'Blog',
      discord: 'Discord',
      terms: 'Terms',
      privacy: 'Privacy',
    },
    ariaProduct: 'Product',
    ariaResources: 'Resources',
    ariaCompany: 'Company',
    changelogAria: 'Changelog on GitHub (opens in a new tab)',
    discordAria: 'Join the Checkpoint64 Discord (opens in a new tab)',
    copyTpl: '© {0} CHECKPOINT64 · ALL RIGHTS RESERVED',
    notAffiliated: 'NOT AFFILIATED WITH ANY GAME LISTED ABOVE',
  },

  // Live-region status messages for the launch-list form (used by src/main.js,
  // which picks the set matching <html lang>).
  forms: {
    enterEmail: 'Please enter your email address.',
    sending: 'Sending…',
    success: "You're on the list — we'll email you the day it ships.",
    error: 'Something went wrong — please try again in a moment.',
  },

  meta: {
    skipLink: 'Skip to content',
    title: 'Checkpoint64 — Never Lose a Save Again, Solo or Co-op',
    description: 'Checkpoint64 automatically backs up your PC game saves to the cloud, keeps full version history, and lets co-op friends share worlds safely with locks. Works with Factorio, Satisfactory, Valheim, Stardew Valley, Elden Ring and 40+ more. One-time purchase. Windows, macOS, Linux.',
    ogTitle: 'Checkpoint64 — Never Lose a Save Again, Solo or Co-op',
    ogDescription: 'Never lose a save again. Automatic cloud backup, full version history, and co-op locks so friends can share worlds without overwriting each other. One-time purchase.',
    ogImageAlt: 'Checkpoint64 — never lose a save again. A retro cartridge shelf of game saves.',
    twitterTitle: 'Checkpoint64 — Never Lose a Save Again, Solo or Co-op',
    twitterDescription: 'Never lose a save again. Automatic cloud backup, full version history, and co-op locks. One-time purchase. Windows, Mac, Linux.',
    twitterImageAlt: 'Checkpoint64 — never lose a save again.',
    noscriptHtml: "Heads-up — JavaScript is disabled, so the launch-list signup form and the animated demo on this page won't work. The rest of the content is fully visible above.",
  },

  jsonld: {
    orgDescription: 'Checkpoint64 makes a save-file backup tool for PC gamers — automatic cloud backups, full version history, and co-op locks so friends can share worlds without overwriting each other.',
    softwareDescription: 'Automatic cloud backup, full version history, and co-op locks for PC game saves. Pay once, keep it forever. Works with Factorio, Satisfactory, Valheim, V Rising, Stardew Valley, Elden Ring, and 40+ more games out of the box.',
    featureList: [
      'Automatic background backups every 2 minutes',
      'Full version history for every save',
      'Co-op locks so only one person can upload at a time',
      'Delta uploads — only the changed bytes are sent',
      'Per-game backup rules with 40+ presets',
      'Shared activity logbook for co-op groups',
      'One-time purchase, no subscription',
    ],
    howToName: 'How to automatically back up PC game saves with Checkpoint64',
    howToDescription: 'Set up automatic cloud backup and full version history for any PC game save in three steps.',
    howToSupply: [
      'A Windows, macOS, or Linux PC',
      'A game that writes its save to a folder on disk',
    ],
    howToTool: 'Checkpoint64 desktop app',
    howToSteps: [
      { name: 'Upload your save', text: 'Point Checkpoint64 at the folder your game writes saves to. Hit Upload to send a snapshot to the cloud — that becomes version one.' },
      { name: 'Turn on auto-backup', text: 'Flip auto-backup on. Checkpoint64 watches the folder and uploads a fresh version every couple of minutes whenever it changes. Only the changed bytes are sent.' },
      { name: 'Restore any past version', text: 'Open Versions on any save to see the full history. Pick one and click Restore to roll back instantly — the files go back on disk and that version becomes current.' },
    ],
    // Plain-text FAQ for the FAQPage block. Mirrors the visible FAQ; index 3
    // takes the savings figure as {0}.
    faq: [
      { q: "What is a 'save'?", a: "Whatever your game writes to your hard drive. Checkpoint64 treats the files in a folder as one save and backs them up together. You point it at the folder and pick which files count. We've already set this up for 40+ popular games." },
      { q: 'Do you upload while the game is running?', a: 'Yes, carefully. Checkpoint64 never locks your save files. If the game is in the middle of saving when we check, we wait a moment and try again — no broken files, no crashes. Most games finish saving in a split second anyway.' },
      { q: 'What happens if my co-op partner overwrites my upload?', a: 'They can\'t, on purpose. Only the person holding the lock can upload. If they want to push their version, they have to grab the lock first — and that warns you before it happens. Your last version stays safe in the history; you can always roll back to it.' },
      { q: 'Do I still need a dedicated server?', a: "For most groups, no. The whole point of a dedicated server is keeping your world online when the host's PC is off. Checkpoint64 covers about 90% of that for a one-time fee: whoever wants to play grabs the lock, plays their session, then pushes the save back. A typical co-op group saves {0} compared to renting a 24/7 server that sits idle 18 hours a day." },
      { q: 'Does this work for console saves?', a: 'Only if you can get your console saves onto a PC — like emulators, Xbox or PS+ cloud save exports, and Steam Cloud through your PC. Checkpoint64 itself only runs on Windows, Mac, and Linux.' },
      { q: 'What will it cost?', a: 'Three tiers: Free (20 MiB, personal only), Lifetime (one-time payment, 5 GiB per space plus 2 teams), and Pro (monthly, 50 GiB per space plus 5 teams, for bigger crews). No charge per person on any tier. Final numbers aren\'t set — sign up to the launch list and we\'ll tell you before everyone else, plus lock you in at the early-bird price.' },
      { q: 'When does it ship?', a: "Soon — we're testing in private now and aiming for a public launch later this year. Get on the list and we'll send one email the day the Windows, Mac, and Linux versions are ready." },
    ],
  },
}
