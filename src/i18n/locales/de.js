// German copy. Mirrors the key structure of en.js exactly. Keys ending in
// `Html`/`Tpl` hold raw HTML / interpolation templates (not escaped); place the
// <span class="accent"> / <br/> markup wherever the emphasis falls in German.
// App-mockup chrome stays English (see en.js).

export default {
  nav: {
    brandAria: 'Checkpoint64 — Startseite',
    links: {
      how: "SO GEHT'S",
      shelf: 'DAS REGAL',
      features: 'FUNKTIONEN',
      savings: 'SPAREN',
      pricing: 'PREISE',
      faq: 'FAQ',
      blog: 'BLOG',
    },
    cta: 'HOLEN',
    ctaAria: 'Checkpoint64 holen',
    switcherAria: 'Sprache wählen',
  },

  hero: {
    h1Html: 'NIE WIEDER EINEN<br/>SPIELSTAND <span class="accent">VERLIEREN.</span>',
    sub: 'Deine Spielstände, für immer gesichert. Reicht Welten unter Freunden weiter wie Module. Kein „wer hat den neuesten?" mehr. Alle bleiben synchron. Mach schlechte Runs rückgängig. Host offline? Jemand anderes übernimmt. Solo oder co-op, immer geschützt.',
    ctaPrimary: 'CHECKPOINT64 HOLEN',
    ctaPrimaryAria: 'Checkpoint64 holen',
    ctaSecondary: "SO GEHT'S",
    ctaSecondaryAria: 'Sehen, wie Checkpoint64 funktioniert',
    small: ['einmalig kaufen', 'kein Abo', 'für immer deins'],
  },

  problems: {
    tape: 'WAS WIRKLICH WEHTUT',
    h2Html: 'WAS DAS LÖST,<br/><span class="accent">IM KERN.</span>',
    headingId: 'Was das löst',
    woes: [
      { stamp: '01:14 UHR', text: 'der host ist mitten im speichern abgestürzt — 80 stunden gemeinsame welt, weg', tag: 'RIP' },
      { stamp: 'MI 18 UHR', text: 'dein co-op-kumpel hat allein gespielt und deinen run überschrieben', tag: 'AUTSCH' },
      { stamp: null, text: 'für einen 24/7-server zahlen, obwohl ihr nur sechs stunden pro woche spielt', tag: 'RECHNUNG' },
      { stamp: 'SA', text: 'host ist im urlaub — niemand sonst hat die aktuelle valheim-welt', tag: 'BLOCKIERT' },
    ],
  },

  how: {
    tape: 'SO ARBEITET CHECKPOINT64',
    h2Html: 'ZEIG AUF EINEN ORDNER.<br/><span class="accent">VERGISS IHN.</span>',
    lede: 'Der ganze Sinn: Du musst nie wieder an Spielstände denken. Drei Schritte, einmal — und du bist für immer fertig.',
    steps: [
      {
        label: '01 · HOCHLADEN',
        h3Html: 'AUF HOCHLADEN ↑',
        bodyHtml: 'Mach einen Schnappschuss deines Spielstand-Ordners und schick eine Kopie in die Cloud. Jeder Upload wird zu seiner eigenen, benannten <em>Version</em>.',
      },
      {
        label: '02 · AUTO-BACKUP',
        h3Html: 'AUTO EINSCHALTEN',
        bodyHtml: 'Checkpoint64 prüft deinen Ordner alle paar Minuten. Hat sich etwas geändert, lädt es von selbst eine neue Version hoch. Nur die geänderten Dateien werden gesendet — der Rest wird übersprungen.',
      },
      {
        label: '03 · WIEDERHERSTELLEN',
        h3Html: 'ROLL ZURÜCK',
        bodyHtml: 'Klick bei jedem Spielstand auf <b>Versionen →</b> und sieh jedes Backup. Wähl eines und drück <b>Wiederherstellen</b> — Checkpoint64 legt die Dateien zurück und markiert diese Version als die aktuelle.',
      },
    ],
    autoMeta: 'alle 2 minuten · nur was sich geändert hat',
  },

  shelf: {
    tape: 'EIN BLICK IN DIE APP',
    hand: 'kein screenshot — live',
    h2Html: 'DEINE BIBLIOTHEK<br/>IST EIN <span class="accent">MODUL-REGAL.</span>',
    lede: 'Jeder Spielstand ist ein Modul. Gleiches Spiel, andere Runs? Gleiches Regal, andere Module.',
  },

  features: {
    tape: 'FUNKTIONEN',
    h2Html: 'WAS <span class="accent">DRINSTECKT.</span>',
    lede: 'Gebaut von Leuten, die viel zurückladen. Kein Geschwafel, keine Gebühr pro Person, kein „powered by AI". Nur ein Spielstand-Tresor, der funktioniert.',
    items: [
      { tag: 'VERSIONSVERLAUF', title: 'JEDER UPLOAD\nIST EINE VERSION.', body: 'Scroll durch jedes Backup mit Dateianzahl, Größe und was sich seit dem letzten Mal geändert hat. Drück Wiederherstellen, und es legt den Spielstand zurück UND markiert ihn als aktuell — keine Verwirrung.' },
      { tag: 'CO-OP-SPERREN', title: 'EINER HÄLT\nDIE WELT.', body: 'Spiele wie Factorio, Satisfactory, Valheim und V Rising haben immer nur eine aktive Weltdatei. Wer die Sperre hält, kann sie hochladen; alle anderen laden nur herunter. Niemand nutzt sie? Schnapp dir selbst die Sperre — kein „wer hat den neuesten Spielstand?" mehr.' },
      { tag: 'NUR ÄNDERUNGEN', title: 'WINZIGE\nUPLOADS.', body: 'Wir laden nur die Dateien hoch, die sich geändert haben, und überspringen die anderen — selbst umbenannte Dateien kosten nichts extra. Schont dein Internet, schont deinen Speicher.' },
      { tag: 'REGELN PRO SPIEL', title: 'WÄHLE, WAS\nGESICHERT WIRD.', body: 'Wähl, welche Dateien gesichert und welche ignoriert werden. Überspring die Crash-Logs und Screenshots, behalt den Spielstand. Schon für die 40+ Spiele eingerichtet, die Checkpoint64 kennt.' },
      { tag: 'IM HINTERGRUND', title: 'LÄUFT IM\nHINTERGRUND.', body: 'Eine kleine, leichte App, die kaum Speicher braucht. Prüft alle 2 Minuten und ruht, wenn sich nichts geändert hat. Stört nicht beim Spielen.' },
      { tag: 'LOGBUCH', title: 'WER, WAS\nUND WANN.', body: 'Jeder Upload, jede Wiederherstellung und jedes Sperren-Schnappen landet im Logbuch deiner Gruppe. Praktisch, wenn dein co-op-Partner dir den schlechten Run anhängt.' },
    ],
  },

  logbook: {
    tape: 'LOGBUCH · LIVE',
    hand: 'mit deiner gruppe geteilt',
    h2Html: 'GIB DEM <span class="accent">RICHTIGEN DIE SCHULD.</span>',
    lede: 'Alles, was jemand in deiner Gruppe tut, wird notiert. Praktisch für co-op-Freunde, modded Server, Speedrun-Teams und das klassische „moment, wer hat das gelöscht?"',
    eventsLabel: 'Ereignisse',
    liveCaption: 'live · aktualisiert beim besuch',
  },

  savings: {
    tape: 'SPAR DIR DEN DEDI',
    hand: 'rechne nach',
    h2Html: 'KEINE 24/7-KISTE MEHR,<br/><span class="accent">DIE KAUM LÄUFT.</span>',
    lede: 'Ein dedizierter Server lohnt sich, wenn zwanzig Leute jeden Abend drauf sind. Für die typische co-op-Gruppe — vier Freunde, ein paar Abende die Woche — mietest du leere Stunden. Checkpoint64 deckt genau den Teil ab, den du wirklich brauchst (die Weltdatei, das Weitergeben der Sperre, den Versionsverlauf) — für eine einmalige Zahlung statt einer Dauerrechnung.',
    cards: [
      { tag: 'WAS EIN DEDI KOSTET', title: 'DU ZAHLST 24/7.', bodyTpl: 'Ein gemieteter co-op-Server kostet bei den beliebten Spielen rund {0} — {1}, {2}. Berechnet, egal ob diese Woche jemand drin war oder nicht.' },
      { tag: 'WAS DU WIRKLICH NUTZT', title: 'ER STEHT STILL.', bodyTpl: 'Vier Freunde, zwei Abende die Woche, je drei Stunden. Das sind etwa sechs Spielstunden von 168 in der Woche. Die anderen 96 % steht dein Dedi leer.' },
      { tag: 'WAS CHECKPOINT64 KOSTET', title: 'EINMAL ZAHLEN. FERTIG.', bodyTpl: 'Eine Lifetime-Zahlung, und die Cloud hält die Welt. Wer spielen will, schnappt sich die Sperre, spielt und schiebt sie zurück. Keine Kiste, die warmgehalten werden muss.' },
    ],
    lineKeys: [
      'Servermiete, 12 Monate',
      'Tatsächlich genutzte Stunden (4 Pers.)',
      'Stunden, in denen ihn keiner anrührte',
      'Für Leerlauf ausgegeben',
    ],
    receiptLabelTpl: '▮ QUITTUNG · TYPISCHER {0}-DEDI',
    receiptYear: 'jahr eins',
    receiptAria: 'Kostenaufstellung eines typischen, monatlich abgerechneten dedizierten Servers',
    totalLabel: 'Was du mit Checkpoint64 Lifetime ab Jahr zwei sparst',
    footTpl: 'Über fünf Jahre sind das grob <b>{0}</b>, die du behältst. Oder eine neue GPU, ganz wie du magst. <a href="./blog/ditch-the-dedicated-server/">Lies die ganze Rechnung →</a>',
  },

  money: {
    perMonthShort: '/MON',
    aMonth: ' pro Monat',
    aYear: ' pro Jahr',
    overFive: ' über fünf Jahre',
    perYear: ' / Jahr',
  },

  pricing: {
    tape: 'PREISE',
    h2Html: 'WÄHLE DEIN<br/><span class="accent">MODUL.</span>',
    lede: 'Drei Arten zu spielen. Gratis zum Ausprobieren, einmalig für immer, oder Pro für Crews, die zusammen sichern. Keine Gebühr pro Person, keine Überraschungskosten, kein Reißverschluss. Endgültige Preise stehen noch nicht fest — wir veröffentlichen sie hier vor dem Start.',
    badge: '★ TOP-WAHL',
    cards: [
      {
        tag: 'GRATIS', unit: 'keine Karte nötig',
        tagline: 'kostenlos testen, ob deine Spielstände zurückkommen',
        features: [
          '1 persönlicher Bereich (keine Teams)',
          '20 MiB Cloud-Speicher',
          'automatisches Backup + voller Versionsverlauf',
          'tritt dem Team eines Freundes für co-op bei',
        ],
        cta: 'GRATIS HOLEN',
      },
      {
        tag: 'LIFETIME', unit: 'einmalig, für immer deins',
        tagline: 'einmal zahlen, deine Spielstände leben ewig',
        features: [
          'persönlicher Bereich + bis zu 2 Teams',
          '5 GiB Speicher pro Bereich',
          'co-op-Sperren + geteiltes Aktivitäts-Logbuch',
          'niemals ein Abo',
          'freischalten über Steam oder direkt',
        ],
        cta: 'LIFETIME HOLEN',
      },
      {
        tag: 'PRO', unit: 'monatlich, jederzeit kündbar',
        tagline: 'für Crews, Streamer, Modding-Gruppen',
        features: [
          'persönlicher Bereich + bis zu 5 Teams',
          '50 GiB Speicher pro Bereich',
          '25 Plätze pro Team (garantiertes Minimum)',
          '100 Versionen / 90 Tage aufbewahrt (garantiertes Minimum)',
          'priorisierte Bandbreite (2× API-Durchsatz)',
        ],
        cta: 'PRO HOLEN',
      },
    ],
    tbc: 'OFFEN',
  },

  download: {
    headlineSoonHtml: 'BALD DA.<br/>BUILDS LANDEN<br/><span class="invert">HIER.</span>',
    headlineLiveHtml: 'NEUESTER BUILD.<br/>HOL DIR<br/><span class="invert">DEINE KOPIE.</span>',
    blurbSoon: 'Wir testen noch privat. Builds für Windows, Mac und Linux landen genau hier, sobald sie fertig sind.',
    blurbLive: 'Wähl deine Plattform. Builds werden automatisch über GitHub veröffentlicht — der Link führt direkt zum neuesten Installer.',
    signoffSoon: 'kostenlos testen, sobald es erscheint',
    signoffLiveTpl: 'release-notes & ältere builds: <a href="{0}">auf GitHub</a>',
    comingSoon: 'bald',
    tileAriaLiveTpl: 'Checkpoint64 für {0} herunterladen ({1})',
    tileAriaSoonTpl: 'Checkpoint64 für {0} — Releases auf GitHub ansehen',
  },

  faq: {
    tape: 'FAQ',
    h2Html: 'HÄUFIG <span class="accent">GEPRÜFT.</span>',
    items: [
      { q: 'WAS IST EIN „SPIELSTAND"?', a: 'Alles, was dein Spiel auf die Festplatte schreibt. Checkpoint64 behandelt die Dateien in einem Ordner als einen Spielstand und sichert sie gemeinsam. Du zeigst auf den Ordner und wählst, welche Dateien zählen. Für 40+ beliebte Spiele haben wir das schon eingerichtet.' },
      { q: 'LADET IHR HOCH, WÄHREND DAS SPIEL LÄUFT?', a: 'Ja, behutsam. Checkpoint64 sperrt deine Spielstand-Dateien nie. Ist das Spiel gerade beim Speichern, wenn wir nachsehen, warten wir einen Moment und versuchen es erneut — keine kaputten Dateien, keine Abstürze. Die meisten Spiele speichern ohnehin in Sekundenbruchteilen.' },
      { q: 'WAS, WENN MEIN CO-OP-PARTNER MEINEN UPLOAD ÜBERSCHREIBT?', a: 'Das geht nicht, mit Absicht. Nur wer die Sperre hält, kann hochladen. Will jemand seine Version pushen, muss er erst die Sperre holen — und das warnt dich vorher. Deine letzte Version bleibt sicher im Verlauf; du kannst jederzeit dorthin zurück.' },
      { q: 'BRAUCHE ICH NOCH EINEN DEDIZIERTEN SERVER?', a: 'Für die meisten Gruppen nein. Der ganze Sinn eines dedizierten Servers ist, deine Welt online zu halten, wenn der PC des Hosts aus ist. Checkpoint64 deckt davon etwa 90 % für eine einmalige Gebühr ab: Wer spielen will, schnappt sich die Sperre, spielt seine Session und schiebt den Spielstand zurück. Eine typische co-op-Gruppe spart {0} gegenüber einem 24/7-Server, der 18 Stunden am Tag leer steht.' },
      { q: 'FUNKTIONIERT DAS FÜR KONSOLEN-SPIELSTÄNDE?', a: 'Nur, wenn du deine Konsolen-Spielstände auf einen PC bekommst — etwa über Emulatoren, Xbox- oder PS+-Cloud-Save-Exporte und Steam Cloud über deinen PC. Checkpoint64 selbst läuft nur auf Windows, Mac und Linux.' },
      { q: 'WAS WIRD ES KOSTEN?', a: 'Drei Stufen: Gratis (20 MiB, nur persönlich), Lifetime (Einmalzahlung, 5 GiB pro Bereich + 2 Teams) und Pro (monatlich, 50 GiB pro Bereich + 5 Teams, für größere Crews). Auf keiner Stufe Gebühr pro Person. Endgültige Zahlen stehen noch nicht fest — wir veröffentlichen sie hier vor dem Start.' },
      { q: 'WANN ERSCHEINT ES?', a: 'Bald — wir testen gerade privat und peilen einen öffentlichen Start später dieses Jahr an. Die Builds für Windows / Mac / Linux erscheinen auf dieser Seite, sobald sie fertig sind.' },
    ],
  },

  footer: {
    blurb: 'Ein sicherer Ort für deine großen Runs. Gebaut von Leuten, die eine 200-Stunden-Factorio-Basis verloren und es nie verwunden haben.',
    sign: 'für mich gemacht.',
    product: 'PRODUKT',
    resources: 'RESSOURCEN',
    company: 'UNTERNEHMEN',
    links: {
      how: "So geht's",
      features: 'Funktionen',
      pricing: 'Preise',
      joinList: 'Holen',
      changelog: 'Changelog',
      blog: 'Blog',
      discord: 'Discord',
      terms: 'AGB',
      privacy: 'Datenschutz',
    },
    ariaProduct: 'Produkt',
    ariaResources: 'Ressourcen',
    ariaCompany: 'Unternehmen',
    changelogAria: 'Changelog auf GitHub (öffnet in neuem Tab)',
    discordAria: 'Dem Checkpoint64-Discord beitreten (öffnet in neuem Tab)',
    copyTpl: '© {0} CHECKPOINT64 · ALLE RECHTE VORBEHALTEN',
    notAffiliated: 'NICHT MIT DEN OBEN GENANNTEN SPIELEN VERBUNDEN',
  },

  meta: {
    skipLink: 'Zum Inhalt springen',
    title: 'Checkpoint64 — Nie wieder einen Spielstand verlieren, solo oder co-op',
    description: 'Checkpoint64 sichert deine PC-Spielstände automatisch in der Cloud, behält den vollen Versionsverlauf und lässt co-op-Freunde Welten sicher per Sperre teilen. Funktioniert mit Factorio, Satisfactory, Valheim, Stardew Valley, Elden Ring und 40+ weiteren. Einmalkauf. Windows, macOS, Linux.',
    ogTitle: 'Checkpoint64 — Nie wieder einen Spielstand verlieren, solo oder co-op',
    ogDescription: 'Nie wieder einen Spielstand verlieren. Automatisches Cloud-Backup, voller Versionsverlauf und co-op-Sperren, damit Freunde Welten teilen, ohne sich gegenseitig zu überschreiben. Einmalkauf.',
    ogImageAlt: 'Checkpoint64 — nie wieder einen Spielstand verlieren. Ein Retro-Modulregal voller Spielstände.',
    twitterTitle: 'Checkpoint64 — Nie wieder einen Spielstand verlieren, solo oder co-op',
    twitterDescription: 'Nie wieder einen Spielstand verlieren. Automatisches Cloud-Backup, voller Versionsverlauf und co-op-Sperren. Einmalkauf. Windows, Mac, Linux.',
    twitterImageAlt: 'Checkpoint64 — nie wieder einen Spielstand verlieren.',
    noscriptHtml: 'Hinweis — JavaScript ist deaktiviert, daher funktioniert die animierte Demo auf dieser Seite nicht. Der restliche Inhalt ist oben vollständig sichtbar.',
  },

  jsonld: {
    orgDescription: 'Checkpoint64 entwickelt ein Spielstand-Backup-Tool für PC-Gamer — automatische Cloud-Backups, voller Versionsverlauf und co-op-Sperren, damit Freunde Welten teilen, ohne sich gegenseitig zu überschreiben.',
    softwareDescription: 'Automatisches Cloud-Backup, voller Versionsverlauf und co-op-Sperren für PC-Spielstände. Einmal zahlen, für immer behalten. Funktioniert von Haus aus mit Factorio, Satisfactory, Valheim, V Rising, Stardew Valley, Elden Ring und 40+ weiteren Spielen.',
    featureList: [
      'Automatische Hintergrund-Backups alle 2 Minuten',
      'Voller Versionsverlauf für jeden Spielstand',
      'Co-op-Sperren, sodass immer nur einer hochladen kann',
      'Effiziente Uploads — nur die geänderten Dateien werden gesendet',
      'Regeln pro Spiel mit 40+ Vorlagen',
      'Geteiltes Aktivitäts-Logbuch für co-op-Gruppen',
      'Einmalkauf, kein Abo',
    ],
    howToName: 'PC-Spielstände automatisch mit Checkpoint64 sichern',
    howToDescription: 'Richte in drei Schritten automatisches Cloud-Backup und vollen Versionsverlauf für jeden PC-Spielstand ein.',
    howToSupply: [
      'Ein Windows-, macOS- oder Linux-PC',
      'Ein Spiel, das seinen Spielstand in einen Ordner auf der Festplatte schreibt',
    ],
    howToTool: 'Checkpoint64 Desktop-App',
    howToSteps: [
      { name: 'Lade deinen Spielstand hoch', text: 'Zeig Checkpoint64 auf den Ordner, in den dein Spiel speichert. Drück Hochladen, um einen Schnappschuss in die Cloud zu senden — das wird Version eins.' },
      { name: 'Schalte Auto-Backup ein', text: 'Schalte Auto-Backup ein. Checkpoint64 beobachtet den Ordner und lädt bei jeder Änderung alle paar Minuten eine neue Version hoch. Nur die geänderten Dateien werden gesendet.' },
      { name: 'Stelle jede frühere Version wieder her', text: 'Öffne bei jedem Spielstand „Versionen", um den ganzen Verlauf zu sehen. Wähl eine und klick Wiederherstellen, um sofort zurückzurollen — die Dateien landen wieder auf der Platte, und diese Version wird aktuell.' },
    ],
    faq: [
      { q: 'Was ist ein „Spielstand"?', a: 'Alles, was dein Spiel auf die Festplatte schreibt. Checkpoint64 behandelt die Dateien in einem Ordner als einen Spielstand und sichert sie gemeinsam. Du zeigst auf den Ordner und wählst, welche Dateien zählen. Für 40+ beliebte Spiele haben wir das schon eingerichtet.' },
      { q: 'Ladet ihr hoch, während das Spiel läuft?', a: 'Ja, behutsam. Checkpoint64 sperrt deine Spielstand-Dateien nie. Ist das Spiel gerade beim Speichern, wenn wir nachsehen, warten wir einen Moment und versuchen es erneut — keine kaputten Dateien, keine Abstürze. Die meisten Spiele speichern ohnehin in Sekundenbruchteilen.' },
      { q: 'Was, wenn mein co-op-Partner meinen Upload überschreibt?', a: 'Das geht nicht, mit Absicht. Nur wer die Sperre hält, kann hochladen. Will jemand seine Version pushen, muss er erst die Sperre holen — und das warnt dich vorher. Deine letzte Version bleibt sicher im Verlauf; du kannst jederzeit dorthin zurück.' },
      { q: 'Brauche ich noch einen dedizierten Server?', a: 'Für die meisten Gruppen nein. Der ganze Sinn eines dedizierten Servers ist, deine Welt online zu halten, wenn der PC des Hosts aus ist. Checkpoint64 deckt davon etwa 90 % für eine einmalige Gebühr ab: Wer spielen will, schnappt sich die Sperre, spielt seine Session und schiebt den Spielstand zurück. Eine typische co-op-Gruppe spart {0} gegenüber einem 24/7-Server, der 18 Stunden am Tag leer steht.' },
      { q: 'Funktioniert das für Konsolen-Spielstände?', a: 'Nur, wenn du deine Konsolen-Spielstände auf einen PC bekommst — etwa über Emulatoren, Xbox- oder PS+-Cloud-Save-Exporte und Steam Cloud über deinen PC. Checkpoint64 selbst läuft nur auf Windows, Mac und Linux.' },
      { q: 'Was wird es kosten?', a: 'Drei Stufen: Gratis (20 MiB, nur persönlich), Lifetime (Einmalzahlung, 5 GiB pro Bereich plus 2 Teams) und Pro (monatlich, 50 GiB pro Bereich plus 5 Teams, für größere Crews). Auf keiner Stufe Gebühr pro Person. Endgültige Zahlen stehen noch nicht fest — wir veröffentlichen sie hier vor dem Start.' },
      { q: 'Wann erscheint es?', a: 'Bald — wir testen gerade privat und peilen einen öffentlichen Start später dieses Jahr an. Die Builds für Windows, Mac und Linux erscheinen auf dieser Seite, sobald sie fertig sind.' },
    ],
  },
}
