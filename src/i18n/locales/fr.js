// French copy. Mirrors the key structure of en.js exactly. Keys ending in
// `Html`/`Tpl` hold raw HTML / interpolation templates (not escaped); place the
// <span class="accent"> / <br/> markup wherever the emphasis falls in French.
// App-mockup chrome stays English (see en.js).

export default {
  nav: {
    brandAria: 'Checkpoint64 — accueil',
    links: {
      how: 'COMMENT ÇA MARCHE',
      shelf: "L'ÉTAGÈRE",
      features: 'FONCTIONS',
      savings: 'ÉCONOMIES',
      pricing: 'TARIFS',
      faq: 'FAQ',
      blog: 'BLOG',
    },
    cta: 'REJOINDRE',
    ctaAria: 'Rejoindre la liste de lancement',
    switcherAria: 'Choisir la langue',
  },

  hero: {
    h1Html: 'NE PERDEZ PLUS<br/>JAMAIS UNE <span class="accent">SAUVEGARDE.</span>',
    sub: "Vos sauvegardes, gardées pour toujours. Passez vos mondes entre amis comme des cartouches. Fini le « qui a la dernière version ? » Tout le monde reste synchro. Annulez les mauvaises parties. L'hôte se déconnecte ? Quelqu'un d'autre prend le relais. Solo ou co-op, toujours protégé.",
    ctaPrimary: 'REJOINDRE LA LISTE',
    ctaPrimaryAria: 'Rejoindre la liste de lancement de Checkpoint64',
    ctaSecondary: 'VOIR EN ACTION',
    ctaSecondaryAria: 'Voir comment fonctionne Checkpoint64',
    small: ['achat unique', 'sans abonnement', 'à vous, pour toujours'],
  },

  problems: {
    tape: 'CE QUI FAIT VRAIMENT MAL',
    h2Html: 'CE QUE ÇA RÈGLE,<br/><span class="accent">EN GROS.</span>',
    headingId: 'Ce que ça règle',
    woes: [
      { stamp: '01:14', text: "factorio de l'hôte a planté en pleine sauvegarde — 80 heures de monde partagé, envolées", tag: 'RIP' },
      { stamp: 'MER 18 H', text: 'votre pote en co-op a joué seul et a écrasé votre partie', tag: 'AÏE' },
      { stamp: null, text: "payer un serveur 24/7 alors que votre groupe ne joue que six heures par semaine", tag: 'FACTURE' },
      { stamp: 'SAM', text: "l'hôte est en vacances — personne d'autre n'a le dernier monde valheim", tag: 'BLOQUÉ' },
    ],
  },

  how: {
    tape: 'COMMENT FONCTIONNE CHECKPOINT64',
    h2Html: 'POINTEZ UN DOSSIER.<br/><span class="accent">OUBLIEZ-LE.</span>',
    lede: "Tout l'intérêt : ne plus jamais penser aux fichiers de sauvegarde. Trois étapes, une fois, et c'est réglé pour toujours.",
    steps: [
      {
        label: '01 · ENVOYER',
        h3Html: 'CLIQUEZ ENVOYER ↑',
        bodyHtml: "Prenez un instantané de votre dossier de sauvegarde et envoyez-en une copie dans le cloud. Chaque envoi devient sa propre <em>version</em> nommée.",
      },
      {
        label: '02 · AUTO-BACKUP',
        h3Html: "ACTIVEZ L'AUTO",
        bodyHtml: "Checkpoint64 vérifie votre dossier toutes les deux minutes. Si quelque chose a changé, il envoie une nouvelle version tout seul. Seuls les fichiers modifiés sont transmis — le reste est ignoré.",
      },
      {
        label: '03 · RESTAURER',
        h3Html: 'REVENEZ EN ARRIÈRE',
        bodyHtml: "Cliquez sur <b>Versions →</b> sur n'importe quelle sauvegarde pour voir tous les backups. Choisissez-en un et cliquez sur <b>Restaurer</b> — Checkpoint64 remet les fichiers en place et marque cette version comme l'actuelle.",
      },
    ],
    autoMeta: 'toutes les 2 minutes · seulement ce qui a changé',
  },

  shelf: {
    tape: "UN APERÇU DE L'APPLI",
    hand: "pas une capture — en direct",
    h2Html: 'VOTRE LUDOTHÈQUE<br/>EST UNE <span class="accent">ÉTAGÈRE À CARTOUCHES.</span>',
    lede: 'Chaque sauvegarde est une cartouche. Même jeu, parties différentes ? Même étagère, cartouches différentes.',
  },

  features: {
    tape: 'FONCTIONS',
    h2Html: "CE QU'IL Y A <span class=\"accent\">DANS LA BOÎTE.</span>",
    lede: "Conçu par des gens qui rechargent beaucoup leurs parties. Sans blabla, sans frais par personne, sans « propulsé par l'IA ». Juste un coffre à sauvegardes qui fonctionne.",
    items: [
      { tag: 'HISTORIQUE DES VERSIONS', title: 'CHAQUE ENVOI\nEST UNE VERSION.', body: "Parcourez chaque backup avec son nombre de fichiers, sa taille et ce qui a changé depuis la dernière fois. Cliquez sur Restaurer : la sauvegarde revient ET devient la version actuelle — aucune confusion." },
      { tag: 'VERROUS CO-OP', title: 'UNE PERSONNE\nTIENT LE MONDE.', body: "Des jeux comme Factorio, Satisfactory, Valheim et V Rising n'ont qu'un seul fichier de monde actif à la fois. Celui qui tient le verrou peut l'envoyer ; les autres ne font que télécharger. Personne ne l'utilise ? Prenez le verrou vous-même — fini le « qui a la dernière sauvegarde ? »" },
      { tag: 'SEULEMENT CE QUI CHANGE', title: 'ENVOIS\nMINUSCULES.', body: "On n'envoie que les bits qui ont vraiment changé. Une sauvegarde de 14 Mo où un fichier a bougé ? Envoie 8 Ko. Doux pour votre connexion, doux pour votre stockage." },
      { tag: 'RÈGLES PAR JEU', title: 'CHOISISSEZ CE QUI\nEST SAUVEGARDÉ.', body: "Choisissez les fichiers à sauvegarder et ceux à ignorer. Sautez les journaux de plantage et les captures, gardez la sauvegarde. Déjà configuré pour les 40+ jeux que Checkpoint64 connaît." },
      { tag: 'EN ARRIÈRE-PLAN', title: "TOURNE EN\nARRIÈRE-PLAN.", body: "Une petite appli légère qui consomme à peine de mémoire. Vérifie toutes les 2 minutes et se repose quand rien n'a changé. Ne vous gêne pas pendant que vous jouez." },
      { tag: 'JOURNAL DE BORD', title: 'QUI A FAIT QUOI,\nET QUAND.', body: "Chaque envoi, restauration et prise de verrou est noté dans le journal de votre groupe. Pratique quand votre partenaire de co-op vous accuse de la mauvaise partie." },
    ],
  },

  logbook: {
    tape: 'JOURNAL · EN DIRECT',
    hand: 'partagé avec votre groupe',
    h2Html: 'ACCUSEZ LA <span class="accent">BONNE PERSONNE.</span>',
    lede: "Tout ce que fait quelqu'un de votre groupe est noté. Pratique pour les amis en co-op, les serveurs moddés, les équipes de speedrun et le classique « attends, qui a supprimé ça ? »",
    eventsLabel: 'événements',
    liveCaption: 'en direct · actualisé à la visite',
  },

  savings: {
    tape: 'LÂCHEZ LE DÉDIÉ',
    hand: 'faites le calcul',
    h2Html: 'PLUS DE BOÎTIER 24/7<br/><span class="accent">À PEINE UTILISÉ.</span>',
    lede: "Un serveur dédié a du sens si vingt personnes y jouent chaque soir. Pour le groupe co-op moyen — quatre amis, quelques soirées par semaine — vous louez des heures vides. Checkpoint64 couvre exactement la partie dont vous avez besoin (le fichier de monde, le passage du verrou, l'historique des versions) pour un paiement unique au lieu d'une facture éternelle.",
    cards: [
      { tag: 'CE QUE COÛTE UN DÉDIÉ', title: 'VOUS PAYEZ 24/7.', bodyTpl: "Un serveur co-op loué coûte environ {0} pour les jeux populaires — {1}, {2}. Facturé que quelqu'un se soit connecté cette semaine ou non." },
      { tag: 'CE QUE VOUS UTILISEZ VRAIMENT', title: 'IL RESTE INACTIF.', bodyTpl: "Quatre amis, deux soirées par semaine, trois heures chacune. Soit environ six heures de jeu sur 168 dans la semaine. Votre dédié est vide les 96 % restants." },
      { tag: 'CE QUE COÛTE CHECKPOINT64', title: 'PAYEZ UNE FOIS. FINI.', bodyTpl: "Un paiement Lifetime et le cloud garde le monde. Celui qui veut jouer prend le verrou, joue, puis le repousse. Aucun boîtier à garder au chaud." },
    ],
    lineKeys: [
      'Location serveur, 12 mois',
      'Heures réellement utilisées (4 pers.)',
      "Heures où personne n'y a touché",
      'Dépensé en temps inactif',
    ],
    receiptLabelTpl: '▮ REÇU · DÉDIÉ TYPIQUE À {0}',
    receiptYear: 'année un',
    receiptAria: "Détail des coûts d'un serveur dédié typique facturé au mois",
    totalLabel: 'Ce que vous économiseriez avec Checkpoint64 Lifetime, dès la deuxième année',
    footTpl: "Sur cinq ans, ça fait à peu près <b>{0}</b> que vous gardez. Ou un nouveau GPU, comme vous préférez. <a href=\"./blog/ditch-the-dedicated-server/\">Lisez le calcul complet →</a>",
  },

  money: {
    perMonthShort: '/MOIS',
    aMonth: ' par mois',
    aYear: ' par an',
    overFive: ' sur cinq ans',
    perYear: ' / an',
  },

  pricing: {
    tape: 'TARIFS',
    h2Html: 'CHOISISSEZ VOTRE<br/><span class="accent">CARTOUCHE.</span>',
    lede: "Trois façons de jouer. Gratuit pour essayer, payé à vie, ou Pro pour les groupes qui sauvegardent ensemble. Pas de frais par personne, pas de frais surprises, pas de mauvaise surprise. Les tarifs ne sont pas encore fixés — laissez votre e-mail et on vous préviendra avant le lancement.",
    badge: '★ LE PLUS CHOISI',
    cards: [
      {
        tag: 'GRATUIT', unit: 'sans carte bancaire',
        tagline: 'testez, voyez si vos sauvegardes reviennent',
        features: [
          '1 espace personnel (pas d\'équipes)',
          '20 Mio de stockage cloud',
          'backup automatique + historique complet',
          "rejoignez l'équipe d'un ami pour le co-op",
        ],
        cta: 'PRENDRE GRATUIT',
      },
      {
        tag: 'LIFETIME', unit: 'unique, à vous pour toujours',
        tagline: 'payez une fois, vos sauvegardes vivent à jamais',
        features: [
          "espace personnel + jusqu'à 2 équipes",
          '5 Gio de stockage par espace',
          "verrous co-op + journal d'activité partagé",
          'jamais d\'abonnement',
          'déverrouillage via Steam ou en direct',
        ],
        cta: 'PRÉVENEZ-MOI',
      },
      {
        tag: 'PRO', unit: 'mensuel, résiliable à tout moment',
        tagline: 'pour les groupes, streamers, équipes de mod',
        features: [
          "espace personnel + jusqu'à 5 équipes",
          '50 Gio de stockage par espace',
          '25 places par équipe (minimum garanti)',
          '100 versions / 90 jours conservés (minimum garanti)',
          'bande passante prioritaire (2× le débit API)',
        ],
        cta: 'PRÉVENEZ-MOI',
      },
    ],
    tbc: 'À DÉF.',
    notify: {
      text: "Les tarifs ne sont pas encore définitifs. Laissez votre e-mail et on vous préviendra le jour de la sortie.",
      button: 'PRÉVENEZ-MOI',
    },
    emailPlaceholder: 'vous@exemple.com',
    emailLabel: 'Adresse e-mail',
    formAria: 'Me prévenir des tarifs de Checkpoint64',
  },

  download: {
    headlineSoonHtml: 'BIENTÔT DISPO.<br/>INSCRIVEZ-VOUS<br/><span class="invert">À LA LISTE.</span>',
    headlineLiveHtml: 'DERNIER BUILD.<br/>RÉCUPÉREZ<br/><span class="invert">VOTRE COPIE.</span>',
    blurbSoon: "On teste encore en privé. Laissez votre e-mail, indiquez votre plateforme, et on vous prévient dès que c'est prêt.",
    blurbLive: 'Choisissez votre plateforme. Les builds sont publiés automatiquement depuis GitHub — le lien mène directement au dernier installeur.',
    signoffSoon: 'pas de spam, un seul e-mail au lancement',
    signoffLiveTpl: 'notes de version & anciens builds : <a href="{0}">sur GitHub</a>',
    comingSoon: 'bientôt',
    notifyButton: 'PRÉVENIR',
    emailLabel: 'Adresse e-mail',
    emailPlaceholder: 'vous@exemple.com',
    formAria: 'Me prévenir quand Checkpoint64 sort',
    tileAriaLiveTpl: 'Télécharger Checkpoint64 pour {0} ({1})',
    tileAriaSoonTpl: 'Checkpoint64 pour {0} — voir les versions sur GitHub',
  },

  faq: {
    tape: 'FAQ',
    h2Html: 'QUESTIONS <span class="accent">FRÉQUENTES.</span>',
    items: [
      { q: "QU'EST-CE QU'UNE « SAUVEGARDE » ?", a: "Tout ce que votre jeu écrit sur votre disque dur. Checkpoint64 traite les fichiers d'un dossier comme une seule sauvegarde et les sauvegarde ensemble. Vous pointez le dossier et choisissez quels fichiers comptent. On a déjà tout configuré pour 40+ jeux populaires." },
      { q: 'ENVOYEZ-VOUS PENDANT QUE LE JEU TOURNE ?', a: "Oui, avec précaution. Checkpoint64 ne verrouille jamais vos fichiers de sauvegarde. Si le jeu est en train de sauvegarder au moment où on regarde, on attend un instant et on réessaie — aucun fichier corrompu, aucun plantage. La plupart des jeux finissent de sauvegarder en une fraction de seconde de toute façon." },
      { q: 'QUE SE PASSE-T-IL SI MON PARTENAIRE CO-OP ÉCRASE MON ENVOI ?', a: "Il ne peut pas, c'est voulu. Seule la personne qui tient le verrou peut envoyer. Pour pousser sa version, il doit d'abord prendre le verrou — et ça vous prévient avant. Votre dernière version reste en sécurité dans l'historique ; vous pouvez toujours y revenir." },
      { q: "AI-JE ENCORE BESOIN D'UN SERVEUR DÉDIÉ ?", a: "Pour la plupart des groupes, non. Tout l'intérêt d'un serveur dédié est de garder votre monde en ligne quand le PC de l'hôte est éteint. Checkpoint64 couvre environ 90 % de ça pour un paiement unique : celui qui veut jouer prend le verrou, joue sa session, puis repousse la sauvegarde. Un groupe co-op typique économise {0} par rapport à un serveur 24/7 qui reste inactif 18 heures par jour." },
      { q: 'EST-CE QUE ÇA MARCHE POUR LES SAUVEGARDES CONSOLE ?', a: "Seulement si vous pouvez amener vos sauvegardes console sur un PC — via les émulateurs, les exports cloud Xbox ou PS+, et Steam Cloud sur votre PC. Checkpoint64 lui-même ne tourne que sur Windows, Mac et Linux." },
      { q: 'COMBIEN ÇA COÛTERA ?', a: "Trois formules : Gratuit (20 Mio, personnel uniquement), Lifetime (paiement unique, 5 Gio par espace + 2 équipes) et Pro (mensuel, 50 Gio par espace + 5 équipes, pour les plus grands groupes). Aucun frais par personne, quelle que soit la formule. Les chiffres définitifs ne sont pas fixés — inscrivez-vous à la liste de lancement et on vous le dira avant tout le monde, avec le tarif early-bird garanti." },
      { q: 'QUAND EST-CE QUE ÇA SORT ?', a: "Bientôt — on teste en privé en ce moment et on vise un lancement public plus tard cette année. Inscrivez-vous et on enverra un seul e-mail le jour où les versions Windows / Mac / Linux seront prêtes." },
    ],
  },

  footer: {
    blurb: "Un endroit sûr pour vos grandes parties. Conçu par des gens qui ont perdu une base Factorio de 200 heures et ne s'en sont jamais remis.",
    sign: 'fait pour moi.',
    product: 'PRODUIT',
    resources: 'RESSOURCES',
    company: 'ENTREPRISE',
    links: {
      how: 'Comment ça marche',
      features: 'Fonctions',
      pricing: 'Tarifs',
      joinList: 'Rejoindre la liste',
      changelog: 'Notes de version',
      blog: 'Blog',
      discord: 'Discord',
      terms: 'Conditions',
      privacy: 'Confidentialité',
    },
    ariaProduct: 'Produit',
    ariaResources: 'Ressources',
    ariaCompany: 'Entreprise',
    changelogAria: 'Notes de version sur GitHub (ouvre un nouvel onglet)',
    discordAria: 'Rejoindre le Discord de Checkpoint64 (ouvre un nouvel onglet)',
    copyTpl: '© {0} CHECKPOINT64 · TOUS DROITS RÉSERVÉS',
    notAffiliated: 'NON AFFILIÉ AUX JEUX CITÉS CI-DESSUS',
  },

  forms: {
    enterEmail: 'Veuillez saisir votre adresse e-mail.',
    sending: 'Envoi…',
    success: 'Vous êtes sur la liste — on vous écrira le jour de la sortie.',
    error: "Une erreur est survenue — veuillez réessayer dans un instant.",
  },

  meta: {
    skipLink: 'Aller au contenu',
    title: 'Checkpoint64 — Ne perdez plus jamais une sauvegarde, solo ou co-op',
    description: "Checkpoint64 sauvegarde automatiquement vos parties PC dans le cloud, conserve l'historique complet des versions et laisse vos amis en co-op partager des mondes en toute sécurité grâce aux verrous. Compatible avec Factorio, Satisfactory, Valheim, Stardew Valley, Elden Ring et 40+ autres. Achat unique. Windows, macOS, Linux.",
    ogTitle: 'Checkpoint64 — Ne perdez plus jamais une sauvegarde, solo ou co-op',
    ogDescription: "Ne perdez plus jamais une sauvegarde. Backup cloud automatique, historique complet des versions et verrous co-op pour que les amis partagent des mondes sans s'écraser. Achat unique.",
    ogImageAlt: 'Checkpoint64 — ne perdez plus jamais une sauvegarde. Une étagère rétro de cartouches de sauvegardes.',
    twitterTitle: 'Checkpoint64 — Ne perdez plus jamais une sauvegarde, solo ou co-op',
    twitterDescription: 'Ne perdez plus jamais une sauvegarde. Backup cloud automatique, historique complet des versions et verrous co-op. Achat unique. Windows, Mac, Linux.',
    twitterImageAlt: 'Checkpoint64 — ne perdez plus jamais une sauvegarde.',
    noscriptHtml: "À noter — JavaScript est désactivé, donc le formulaire d'inscription à la liste de lancement et la démo animée de cette page ne fonctionneront pas. Le reste du contenu est entièrement visible ci-dessus.",
  },

  jsonld: {
    orgDescription: "Checkpoint64 conçoit un outil de backup de sauvegardes pour les joueurs PC — backups cloud automatiques, historique complet des versions et verrous co-op pour que les amis partagent des mondes sans s'écraser.",
    softwareDescription: "Backup cloud automatique, historique complet des versions et verrous co-op pour les sauvegardes de jeux PC. Payez une fois, gardez à vie. Compatible d'emblée avec Factorio, Satisfactory, Valheim, V Rising, Stardew Valley, Elden Ring et 40+ autres jeux.",
    featureList: [
      'Backups automatiques en arrière-plan toutes les 2 minutes',
      'Historique complet des versions pour chaque sauvegarde',
      "Verrous co-op pour qu'une seule personne puisse envoyer à la fois",
      'Envois delta — seuls les octets modifiés sont transmis',
      'Règles par jeu avec 40+ préréglages',
      "Journal d'activité partagé pour les groupes co-op",
      'Achat unique, sans abonnement',
    ],
    howToName: 'Comment sauvegarder automatiquement vos parties PC avec Checkpoint64',
    howToDescription: "Mettez en place un backup cloud automatique et un historique complet des versions pour n'importe quelle sauvegarde PC en trois étapes.",
    howToSupply: [
      'Un PC Windows, macOS ou Linux',
      'Un jeu qui écrit sa sauvegarde dans un dossier sur le disque',
    ],
    howToTool: 'Application de bureau Checkpoint64',
    howToSteps: [
      { name: 'Envoyez votre sauvegarde', text: 'Pointez Checkpoint64 vers le dossier dans lequel votre jeu sauvegarde. Cliquez sur Envoyer pour transmettre un instantané au cloud — ce sera la version un.' },
      { name: "Activez l'auto-backup", text: "Activez l'auto-backup. Checkpoint64 surveille le dossier et envoie une nouvelle version toutes les quelques minutes à chaque changement. Seuls les octets modifiés sont transmis." },
      { name: 'Restaurez une version antérieure', text: "Ouvrez Versions sur n'importe quelle sauvegarde pour voir tout l'historique. Choisissez-en une et cliquez sur Restaurer pour revenir en arrière instantanément — les fichiers reviennent sur le disque et cette version devient l'actuelle." },
    ],
    faq: [
      { q: "Qu'est-ce qu'une « sauvegarde » ?", a: "Tout ce que votre jeu écrit sur votre disque dur. Checkpoint64 traite les fichiers d'un dossier comme une seule sauvegarde et les sauvegarde ensemble. Vous pointez le dossier et choisissez quels fichiers comptent. On a déjà tout configuré pour 40+ jeux populaires." },
      { q: 'Envoyez-vous pendant que le jeu tourne ?', a: "Oui, avec précaution. Checkpoint64 ne verrouille jamais vos fichiers de sauvegarde. Si le jeu est en train de sauvegarder au moment où on regarde, on attend un instant et on réessaie — aucun fichier corrompu, aucun plantage. La plupart des jeux finissent de sauvegarder en une fraction de seconde de toute façon." },
      { q: 'Que se passe-t-il si mon partenaire co-op écrase mon envoi ?', a: "Il ne peut pas, c'est voulu. Seule la personne qui tient le verrou peut envoyer. Pour pousser sa version, il doit d'abord prendre le verrou — et ça vous prévient avant. Votre dernière version reste en sécurité dans l'historique ; vous pouvez toujours y revenir." },
      { q: "Ai-je encore besoin d'un serveur dédié ?", a: "Pour la plupart des groupes, non. Tout l'intérêt d'un serveur dédié est de garder votre monde en ligne quand le PC de l'hôte est éteint. Checkpoint64 couvre environ 90 % de ça pour un paiement unique : celui qui veut jouer prend le verrou, joue sa session, puis repousse la sauvegarde. Un groupe co-op typique économise {0} par rapport à un serveur 24/7 qui reste inactif 18 heures par jour." },
      { q: 'Est-ce que ça marche pour les sauvegardes console ?', a: "Seulement si vous pouvez amener vos sauvegardes console sur un PC — via les émulateurs, les exports cloud Xbox ou PS+, et Steam Cloud sur votre PC. Checkpoint64 lui-même ne tourne que sur Windows, Mac et Linux." },
      { q: 'Combien ça coûtera ?', a: "Trois formules : Gratuit (20 Mio, personnel uniquement), Lifetime (paiement unique, 5 Gio par espace plus 2 équipes) et Pro (mensuel, 50 Gio par espace plus 5 équipes, pour les plus grands groupes). Aucun frais par personne, quelle que soit la formule. Les chiffres définitifs ne sont pas fixés — inscrivez-vous à la liste de lancement et on vous le dira avant tout le monde, avec le tarif early-bird garanti." },
      { q: 'Quand est-ce que ça sort ?', a: "Bientôt — on teste en privé en ce moment et on vise un lancement public plus tard cette année. Inscrivez-vous et on enverra un seul e-mail le jour où les versions Windows, Mac et Linux seront prêtes." },
    ],
  },
}
