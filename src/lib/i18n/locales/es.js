// Spanish copy. Mirrors the key structure of en.js exactly. Keys ending in
// `Html`/`Tpl` hold raw HTML / interpolation templates (not escaped); place the
// <span class="accent"> / <br/> markup wherever the emphasis falls in Spanish.
// App-mockup chrome stays English (see en.js).

export default {
  nav: {
    brandAria: 'Checkpoint64 — inicio',
    links: {
      how: 'CÓMO FUNCIONA',
      shelf: 'LA ESTANTERÍA',
      features: 'FUNCIONES',
      creators: 'CREADORES',
      savings: 'AHORRO',
      pricing: 'PRECIOS',
      faq: 'FAQ',
      blog: 'BLOG',
    },
    cta: 'DESCARGAR',
    ctaAria: 'Descargar Checkpoint64',
    switcherAria: 'Elegir idioma',
    menuAria: 'Menú',
  },

  hero: {
    h1Html: 'NUNCA MÁS PIERDAS<br/>UNA <span class="accent">PARTIDA.</span>',
    sub: 'Tus partidas, respaldadas automáticamente — y cada versión, guardada. Vuelve atrás tras un archivo corrupto, una mala noche o un arrepentimiento. Los grupos de co-op se pasan un mundo como un cartucho, con un bloqueo para que nadie sobrescriba a nadie. ¿Preferís jugar juntos en directo? Monta un servidor en tu propio PC y tu grupo entra sin abrir puertos.',
    ctaPrimary: 'DESCARGAR GRATIS',
    ctaPrimaryAria: 'Descargar Checkpoint64 gratis',
    ctaSteam: 'DESCARGAR EN STEAM',
    ctaSteamAria: 'Descargar Checkpoint64 en Steam',
    ctaSecondary: 'VERLO EN ACCIÓN',
    ctaSecondaryAria: 'Ver cómo funciona Checkpoint64',
    small: ['plan gratis, gratis de verdad', 'paga una vez por más espacio', 'nunca una suscripción'],
  },

  problems: {
    tape: 'LO QUE DE VERDAD DUELE',
    h2Html: 'LO QUE ESTO ARREGLA,<br/><span class="accent">EN RESUMEN.</span>',
    headingId: 'Lo que esto arregla',
    woes: [
      { stamp: '01:14', text: 'el modpack se actualizó y tu mundo de minecraft de 200 horas ya no carga', tag: 'RIP' },
      { stamp: 'MIÉ 18 H', text: 'tu colega de co-op jugó «solo una partidita» en solitario y sobrescribió la partida común', tag: 'AY' },
      { stamp: null, text: 'pagar un servidor 24/7 cuando tu grupo solo juega seis horas a la semana', tag: 'FACTURA' },
      { stamp: 'SÁB', text: 'el anfitrión está de vacaciones — nadie más tiene el último mundo de valheim', tag: 'ATASCADO' },
    ],
  },

  how: {
    tape: 'CÓMO FUNCIONA CHECKPOINT64',
    h2Html: 'APÚNTALO A UNA CARPETA.<br/><span class="accent">OLVÍDATE.</span>',
    lede: 'Tres pasos, una vez. Después no vuelves a pensar en archivos de guardado — que es justo la idea.',
    steps: [
      {
        label: '01 · SUBIR',
        h3Html: 'PULSA SUBIR ↑',
        bodyHtml: 'Toma una instantánea de tu carpeta de guardado y envía una copia a la nube. Cada subida se convierte en su propia <em>versión</em> con nombre — la versión uno de muchas.',
      },
      {
        label: '02 · AUTO-BACKUP',
        h3Html: 'ACTIVA EL AUTO',
        bodyHtml: 'Checkpoint64 revisa tu carpeta cada 60 segundos. ¿Algo cambió? Espera a que el juego termine de escribir y sube una versión nueva por su cuenta. Solo se envían los archivos modificados — el resto se omite.',
      },
      {
        label: '03 · RESTAURAR',
        h3Html: 'VUELVE ATRÁS',
        bodyHtml: 'Pulsa <b>Versiones →</b> en cualquier partida para ver todas las copias. Elige una y pulsa <b>Restaurar</b> — Checkpoint64 devuelve los archivos y marca esa versión como la actual. Tu error de las 2 de la mañana se arregla en 60 segundos.',
      },
    ],
    autoMeta: 'revisa cada 60 s · solo sube lo que cambió',
  },

  shelf: {
    tape: 'UN VISTAZO A LA APP',
    hand: 'no es una captura — en vivo',
    h2Html: 'TU BIBLIOTECA<br/>ES UNA <span class="accent">ESTANTERÍA DE CARTUCHOS.</span>',
    lede: 'Cada partida es un cartucho. ¿El mismo juego, partidas distintas? La misma estantería, cartuchos distintos.',
  },

  features: {
    tape: 'FUNCIONES',
    h2Html: 'LO QUE HAY <span class="accent">EN LA CAJA.</span>',
    lede: 'Hecho por gente que recarga partidas a menudo. Sin paja, sin cobro por persona, sin «con tecnología de IA». Solo una caja fuerte de partidas que funciona.',
    items: [
      { tag: 'HISTORIAL DE VERSIONES', title: 'CADA SUBIDA\nES UNA VERSIÓN.', body: 'Recorre cada copia con su número de archivos, tamaño y qué cambió desde la última vez. Pulsa Restaurar y los archivos vuelven al disco, marcados como actuales — sin adivinar, sin carpetas «final_v2_DEVERDAD».' },
      { tag: 'BLOQUEOS CO-OP', title: 'UNO SOSTIENE\nEL MUNDO.', body: 'Juegos como Factorio, Valheim y Satisfactory tienen un solo mundo activo a la vez. Quien tiene el bloqueo sube; los demás descargan. ¿El portador desapareció? Los bloqueos caducan solos y puedes tomar el relevo — con aviso, y con una línea en la bitácora para que todos se enteren.' },
      { tag: 'SOLO LO QUE CAMBIA', title: 'SUBIDAS\nMINÚSCULAS.', body: 'Solo se suben los archivos que cambiaron — los renombrados no cuestan nada extra. Un mundo de Minecraft de 500 MB se re-sube en unos pocos MB tras una sesión normal, no entero. Suave para tu internet, suave para tu almacenamiento.' },
      { tag: '180+ JUEGOS LISTOS', title: 'CONFIGURADO EN\nSEGUNDOS.', body: 'Preajustes para 180+ juegos — cuatro variantes de Minecraft con mods, Stardew, Skyrim, Palworld, Elden Ring — más siete emuladores. Elige qué archivos cuentan y salta las capturas. Si guarda en una carpeta, funciona.' },
      { tag: 'CÓDIGOS DE ACCESO', title: 'UN MUNDO,\nTODA UNA MULTITUD.', body: '¿Llevas un mundo comunitario? Genera un código de acceso y cualquiera que lo tenga puede descargar tu mundo — pero nunca escribir encima. Los códigos tienen límite y se pueden revocar, y los visitantes de solo lectura no ocupan plazas. Todos los planes pueden alojar — 3 fans a la vez en Gratis, 15 en Lifetime, sin límite en Pro.' },
      { tag: 'BITÁCORA', title: 'QUIÉN HIZO QUÉ,\nY CUÁNDO.', body: 'Cada subida, restauración y toma de bloqueo queda anotada en la bitácora de tu grupo. Útil cuando tu compañero de co-op te echa la culpa de la mala partida.' },
      // Holes keep the new v2 tiles at their en.js indices (arrays merge
      // element-wise over English); fill them when these tiles are translated.
      undefined, // not translated yet — falls back to en.js at this index
      undefined, // not translated yet — falls back to en.js at this index
      undefined, // not translated yet — falls back to en.js at this index
      { tag: "CHECKPOINT CONNECT", title: "SIN ABRIR\nPUERTOS.", body: "Ejecuta un servidor de juego en tu propio PC y compártelo con tu equipo. Tus compañeros pulsan Unirse y su juego se conecta directo cuando puede, y por un relé cuando no. Sin tocar el router, y solo entra tu equipo." },
      { tag: "MANDO", title: "SE LLEVA BIEN\nCON EL MANDO.", body: "Maneja toda la app con un mando: cruceta para moverte, A para elegir, B para volver. En Steam Deck los controles funcionan sin más, y los campos de texto abren el teclado de Steam." },
      { tag: "TAMBIÉN CONFIGS", title: "AJUSTES,\nNO SOLO PARTIDAS.", body: "Controles, sensibilidad, mira, ajustes de vídeo y reglas de servidores dedicados para más de 80 juegos y servidores. Lo que rehaces a mano tras reinstalar, versionado como una partida." },
    ],
  },

  logbook: {
    tape: 'BITÁCORA · EN VIVO',
    hand: 'compartida con tu grupo',
    h2Html: 'CULPA A LA <span class="accent">PERSONA CORRECTA.</span>',
    lede: 'Todo lo que hace alguien de tu grupo queda anotado. Útil para amigos de co-op, servidores con mods, equipos de speedrun y el clásico «espera, ¿quién borró eso?».',
    eventsLabel: 'eventos',
    liveCaption: 'en vivo · se actualiza al visitar',
  },

  creators: {
    tape: 'PARA STREAMERS Y CREADORES',
    hand: 'un código, todos los fans',
    h2Html: 'COMPARTE TU PARTIDA<br/>CON <span class="accent">TODO EL CHAT.</span>',
    lede: '¿Tienes audiencia? Dales tu partida exacta. Genera un código de solo lectura para cualquier mundo: tu archivo al 100 %, una seed de reto, la partida maldita de anoche. Ponlo en la descripción de tu vídeo y tus fans se llevan una copia perfecta a su propia biblioteca. La descargan y juegan; nunca podrán sobrescribir la tuya.',
    steps: [
      { label: '01 · GENERAR', h3Html: 'CREA UN CÓDIGO', body: 'Abre la partida, toca Acceso alojado y genera un código. Limita los usos o déjalo ilimitado, tú decides. Tarda un par de segundos. Disponible en todos los planes.' },
      { label: '02 · COMPARTE EL ENLACE', h3Html: 'PUBLÍCALO DONDE SEA', body: 'Pon el código en la descripción de tu vídeo, tu Discord o un panel de stream. ¿Fans sin la app? Comparte el enlace, y abre una página de descarga que los guía.' },
      { label: '03 · ELLOS JUEGAN', h3Html: 'LOS FANS LA OBTIENEN', body: 'Los fans pegan el código y tu mundo aparece en su propia biblioteca, en solo lectura. Descargan tu partida y juegan, sin forma de sobrescribirla.' },
    ],
    points: [
      'Siempre en solo lectura: tus fans juegan tu partida pero nunca pueden cambiarla',
      'Limita el código o revócalo cuando quieras — y tu plan fija cuántos fans pueden tener acceso a la vez',
      'Los fans de solo lectura no ocupan plazas de tu equipo',
    ],
    proNoteTpl: 'Los códigos de acceso alojados funcionan en todos los planes — 3 fans de solo lectura a la vez en Gratis, 15 en Lifetime y sin límite alguno en <a href="{0}">Pro</a>, pensado para creadores, grupos y comunidades de mods.',
  },

  // Reseñas de Steam. La descripción de la puntuación y el nombre del juego
  // vienen directamente de Steam y se quedan en inglés en todos los idiomas,
  // como los textos de la maqueta de la app. Las reseñas son las de Checkpoint64,
  // cargadas en vivo desde su página de Steam (ver src/lib/steam.js).
  steam: {
    tape: 'LO QUE DICEN LOS JUGADORES',
    hand: 'en vivo desde Steam',
    h2Html: 'DIRECTO DE <span class="accent">STEAM.</span>',
    lede: 'Reseñas reales de jugadores reales, cargadas en vivo desde nuestra página de Steam.',
    countTpl: '{0} reseñas',
    percentTpl: '{0}% positivas',
    viewOnSteam: 'Ver en Steam',
    recommended: 'RECOMENDADO',
    hoursTpl: '{0} jugadas',
    helpfulTpl: '{0} lo encontraron útil',
    anonymous: 'Jugador de Steam',
  },

  savings: {
    tape: 'DEJA EL DEDICADO',
    hand: 'echa cuentas',
    h2Html: 'NADA DE UNA CAJA 24/7<br/><span class="accent">QUE APENAS USAS.</span>',
    lede: 'Un servidor dedicado tiene sentido si veinte personas se conectan cada noche. Para el grupo de co-op medio — cuatro amigos, un par de tardes a la semana — estás alquilando horas vacías. Checkpoint64 cubre justo la parte que de verdad necesitas (el archivo de mundo, el paso del bloqueo, el historial de versiones) por un pago único en vez de una factura eterna.',
    cards: [
      { tag: 'LO QUE CUESTA UN DEDICADO', title: 'PAGAS 24/7.', bodyTpl: 'Un servidor de co-op alquilado cuesta unos {0} para los juegos populares — {1}, {2}. Facturado tanto si alguien se conectó esta semana como si no.' },
      { tag: 'LO QUE DE VERDAD USAS', title: 'ESTÁ PARADO.', bodyTpl: 'Cuatro amigos, dos tardes a la semana, tres horas cada uno. Son unas seis horas de juego de 168 en la semana. Tu dedicado está vacío el otro 96 %.' },
      { tag: 'LO QUE CUESTA CHECKPOINT64', title: 'PAGA UNA VEZ. YA.', bodyTpl: 'Un pago Lifetime y la nube guarda el mundo. Quien quiera jugar toma el bloqueo, juega y lo devuelve. Sin caja que mantener encendida.' },
    ],
    lineKeys: [
      'Alquiler del servidor, 12 meses',
      'Horas usadas de verdad (4 pers.)',
      'Horas que nadie tocó',
      'Gastado en tiempo inactivo',
    ],
    receiptLabelTpl: '▮ RECIBO · DEDICADO TÍPICO DE {0}',
    receiptYear: 'año uno',
    receiptAria: 'Desglose de costes de un servidor dedicado típico facturado al mes',
    totalLabel: 'Lo que ahorrarías con Checkpoint64 Lifetime, a partir del segundo año',
    footTpl: 'En cinco años son más o menos <b>{0}</b> que te quedas. O una GPU nueva, lo que prefieras. <a href="{1}">Lee el cálculo completo →</a>',
  },

  money: {
    perMonthShort: '/MES',
    aMonth: ' al mes',
    aYear: ' al año',
    overFive: ' en cinco años',
    perYear: ' / año',
  },

  pricing: {
    tape: 'PRECIOS',
    h2Html: 'ELIGE TU<br/><span class="accent">CARTUCHO.</span>',
    lede: 'Tres formas de jugarlo. El Gratis es gratis de verdad — no una prueba de siete días. El Lifetime se paga una vez. El Pro es para grupos que respaldan juntos. Sin cobro por persona, sin costes sorpresa, sin letra pequeña.',
    badge: '★ EL MÁS ELEGIDO',
    cards: [
      {
        tag: 'GRATIS', unit: 'sin tarjeta',
        tagline: 'suficiente para Stardew, Hollow Knight o toda una biblioteca retro',
        features: [
          'espacio personal + 1 equipo',
          'únete a hasta 3 equipos de amigos',
          '20 MiB de almacenamiento por espacio',
          'auto-backup + historial completo de versiones',
          'bloqueos co-op + bitácora incluidos',
          'códigos de acceso para 3 fans de solo lectura',
        ],
        cta: 'CONSEGUIR GRATIS',
      },
      {
        tag: 'LIFETIME', unit: 'pago único, tuyo para siempre',
        tagline: 'paga una vez — tus partidas sobrevivirán a tu GPU',
        features: [
          'espacio personal + hasta 3 equipos',
          'únete a hasta 5 equipos de amigos',
          '1 GiB de almacenamiento por espacio',
          'compra directa o en Steam',
          'nunca una suscripción',
          'códigos de acceso para 15 fans de solo lectura',
          'todo lo del plan Gratis, con espacio de sobra',
        ],
        cta: 'CONSEGUIR LIFETIME',
      },
      {
        tag: 'PRO', unit: 'mensual, cancela cuando quieras',
        tagline: 'para grupos, streamers, equipos de mods',
        features: [
          'espacio personal + hasta 5 equipos',
          'únete a hasta 8 equipos de amigos',
          '5 GiB de almacenamiento por espacio',
          '25 plazas por equipo (mínimo garantizado)',
          '100 versiones / 90 días guardados (mínimo garantizado)',
          'códigos de acceso de solo lectura ilimitados',
          'ancho de banda prioritario (2× el caudal de la API)',
        ],
        cta: 'CONSEGUIR PRO',
      },
    ],
  },

  download: {
    headlineSoonHtml: 'CHECKPOINT64 2.0<br/>YA ESTÁ FUERA.<br/><span class="invert">LLÉVATELO.</span>',
    headlineLiveHtml: 'CHECKPOINT64 2.0<br/>YA ESTÁ FUERA.<br/><span class="invert">LLÉVATELO.</span>',
    blurbSoon: 'Descarga gratis, plan gratis incluido. Llévatelo en Steam, o baja el último instalador directamente desde GitHub.',
    blurbLive: 'Descarga gratis, plan gratis incluido. Los builds se publican directamente desde GitHub — estos botones siempre apuntan al último instalador.',
    signoffSoon: 'gratis para probar — el plan gratis es real',
    signoffLiveTpl: 'notas de versión y builds antiguos: <a href="{0}">en GitHub</a>',
    comingSoon: 'pronto',
    tileAriaLiveTpl: 'Descargar Checkpoint64 para {0} ({1})',
    tileAriaSoonTpl: 'Checkpoint64 para {0} — ver las versiones en GitHub',
  },

  faq: {
    tape: 'FAQ',
    h2Html: 'PREGUNTAS <span class="accent">FRECUENTES.</span>',
    items: [
      { q: '¿QUÉ CUENTA COMO «PARTIDA»?', a: 'Todo lo que tu juego escribe en el disco duro. Checkpoint64 trata los archivos de una carpeta como una sola partida y los respalda juntos. Los preajustes para 180+ juegos (y siete emuladores) lo configuran por ti; para cualquier otro, apunta a la carpeta y elige los archivos tú mismo.' },
      { q: '¿SUBÍS MIENTRAS EL JUEGO ESTÁ ABIERTO?', a: 'Sí, con cuidado. Checkpoint64 nunca bloquea tus archivos. Revisa la carpeta cada 60 segundos; si el juego está guardando, espera a que haya calma y vuelve a intentarlo — sin archivos rotos, sin tirones. La app dormita entre revisiones: no la notarás mientras juegas.' },
      { q: '¿Y SI MI COMPAÑERO DE CO-OP SOBRESCRIBE MI SUBIDA?', a: 'No puede, a propósito. Solo quien tiene el bloqueo puede subir. Para empujar su versión tiene que tomar el bloqueo primero — lo que te avisa, y queda en la bitácora a la vista de todos. En el peor de los casos, tu versión está a un Restaurar de distancia en el historial.' },
      { q: '¿SIGO NECESITANDO UN SERVIDOR DEDICADO?', a: 'Para la mayoría de los grupos, no. Todo el sentido de un servidor dedicado es mantener tu mundo en línea cuando el PC del anfitrión está apagado. Checkpoint64 cubre alrededor del 90 % de eso por una tarifa única: quien quiera jugar toma el bloqueo, juega su sesión y devuelve la partida. ¿Todos a la vez? Monta el servidor en tu propio PC y tu equipo entra con Checkpoint Connect, sin abrir puertos. Un grupo de co-op típico ahorra {0} frente a alquilar un servidor 24/7 que está parado 18 horas al día.' },
      { q: '¿FUNCIONA CON EMULADORES O PARTIDAS DE CONSOLA?', a: 'Con emuladores, totalmente — RetroArch, Dolphin, PCSX2, DuckStation, PPSSPP, RPCS3 y Cemu tienen preajuste, así que tus save states por fin tienen historial de versiones de verdad. Las partidas de consola solo funcionan si primero las llevas a un PC. La app corre en Windows, macOS (Apple Silicon) y Linux.' },
      { q: '¿CUÁNTO CUESTA?', a: 'El plan gratis es real y seguirá siendo gratis: 20 MiB, tu propio espacio más un equipo. El Lifetime es un pago único — 1 GiB por espacio, hasta 3 equipos, comprado directo o vía Steam. El Pro es para grupos grandes: 5 GiB por espacio, 5 equipos, 25 plazas cada uno, códigos de acceso de solo lectura ilimitados. Los códigos funcionan en todos los planes — Gratis aloja 3 fans de solo lectura a la vez, Lifetime 15. Sin cobro por persona en ningún plan.' },
      { q: '¿PUEDO USARLO HOY?', a: 'Sí — la 2.0 ya está fuera. Descarga gratis para Windows, macOS (Apple Silicon) y Linux, y también está en Steam.' },
      { q: '¿QUIÉN PUEDE VER MIS PARTIDAS?', a: 'Tus compañeros de equipo — y solo los que tú invites. Ven tu nombre visible, nunca tu correo. Y tus datos son tuyos: exporta todo en un zip cuando quieras, y borrar tu cuenta la borra de verdad (tras 7 días de margen, por si el arrepentimiento de las 2 de la mañana ataca).' },
      undefined, // not translated yet — falls back to en.js at this index
      undefined, // not translated yet — falls back to en.js at this index
      { q: "¿PUEDEN MIS AMIGOS UNIRSE A UN SERVIDOR EN MI PC SIN ABRIR PUERTOS?", a: "Sí, con Checkpoint Connect. Inicia el servidor del juego en tu PC, compártelo con tu equipo y tus compañeros pulsan Unirse. Su juego se conecta a 127.0.0.1, y las dos copias de la app se conectan directo cuando pueden y por un relé cuando no, así que nadie toca el router. Funciona con servidores UDP y TCP, solo entran los miembros de tu equipo y está en todos los planes." },
    ],
  },

  consent: {
    title: 'Cookies',
    body: 'Google Analytics nos muestra qué páginas se leen de verdad. Usa cookies, así que solo se carga si aceptas. Si lo rechazas, el sitio funciona exactamente igual.',
    link: 'Política de privacidad',
    accept: 'Aceptar',
    reject: 'Rechazar',
  },

  footer: {
    blurb: 'Un lugar seguro para tus grandes partidas. Hecho por gente que perdió una base de Factorio de 200 horas y nunca lo superó.',
    sign: 'hecho para mí.',
    product: 'PRODUCTO',
    guides: 'GUÍAS',
    saves: 'CARPETAS DE GUARDADO',
    company: 'EMPRESA',
    links: {
      features: 'Funciones',
      how: 'Cómo funciona',
      coop: 'Cooperativo y equipos',
      creators: 'Para creadores',
      pricing: 'Precios',
      download: 'Descargar',
      help: 'Ayuda y FAQ',
      about: 'Sobre nosotros',
      blog: 'Blog',
      changelog: 'Cambios',
      press: 'Prensa',
      contact: 'Contacto',
      discord: 'Discord',
      terms: 'Términos',
      privacy: 'Privacidad',
      cookies: 'Configuración de cookies',
    },
    aria: {
      product: 'Producto',
      guides: 'Guías',
      saves: 'Carpetas de guardado',
      company: 'Empresa',
      legal: 'Legal',
    },
    changelogAria: 'Registro de cambios en GitHub (abre una pestaña nueva)',
    discordAria: 'Unirme al Discord de Checkpoint64 (abre una pestaña nueva)',
    copyTpl: '© {0} CHECKPOINT64 · TODOS LOS DERECHOS RESERVADOS',
    notAffiliated: 'SIN AFILIACIÓN CON LOS JUEGOS MENCIONADOS ARRIBA',
  },

  pages: {
    features: {
      title: 'Funciones — Versiones, bloqueos co-op y 140+ juegos',
      description: 'Cada backup es una versión restaurable, bloqueos co-op en el servidor, solo se sube lo que cambia y preajustes para 140+ juegos y 7 emuladores. Plan gratis.',
      breadcrumb: 'Funciones',
      hand: 'sin paja, sin cobro por persona',
      h1Html: 'LO QUE HAY <span class="accent">EN LA CAJA.</span>',
      lede: 'Hecho por gente que recarga partidas a menudo. Sin paja, sin cobro por persona, sin «con tecnología de IA». Solo una caja fuerte de partidas que funciona.',
      notes: [
        'solo archivos de guardado — nunca toca juegos ni ROMs',
        'funciona con Steam, GOG, Epic y emuladores — vigila la carpeta, no el launcher',
      ],
    },
    'how-it-works': {
      title: 'Cómo funciona — Copia de seguridad de partidas en 3 pasos',
      description: 'Apunta Checkpoint64 a tu carpeta de guardado, activa el auto-backup y vuelve a cualquier versión en segundos. Revisa cada 60 segundos y solo sube lo que cambió.',
      breadcrumb: 'Cómo funciona',
      hand: 'tres pasos, una vez',
      h1Html: 'APÚNTALO A UNA CARPETA.<br/><span class="accent">OLVÍDATE.</span>',
      lede: 'Tres pasos, una vez. Después no vuelves a pensar en archivos de guardado — que es justo la idea.',
    },
    'co-op': {
      title: 'Cooperativo y equipos — Comparte un mundo sin sobrescribiros',
      description: 'Un mundo activo, un portador. Con los bloqueos del servidor solo sube quien tiene el bloqueo, caducan solos y cada relevo queda en una bitácora compartida.',
      breadcrumb: 'Cooperativo y equipos',
      hand: 'un mundo, un bloqueo',
      h1Html: 'UN MUNDO.<br/>UN BLOQUEO.<br/><span class="accent">CERO PISOTONES.</span>',
      lede: 'Juegos como Factorio, Valheim y Satisfactory tienen un solo mundo activo a la vez. Quien tiene el bloqueo sube; los demás descargan. ¿El portador desapareció? Los bloqueos caducan solos y puedes tomar el relevo — con aviso, y con una línea en la bitácora para que todos se enteren.',
    },
    creators: {
      title: 'Para streamers y creadores — Comparte tu partida con el chat',
      description: 'Crea un código de acceso de solo lectura: tus fans juegan tu partida, pero nunca la sobrescriben. 3 fans a la vez en Gratis, 15 en Lifetime, sin límite en Pro.',
      breadcrumb: 'Para creadores',
      hand: 'un código, todos los fans',
      h1Html: 'COMPARTE TU PARTIDA<br/>CON <span class="accent">TODO EL CHAT.</span>',
      lede: '¿Tienes audiencia? Dales tu partida exacta. Genera un código de solo lectura para cualquier mundo: tu archivo al 100 %, una seed de reto, la partida maldita de anoche. Ponlo en la descripción de tu vídeo y tus fans se llevan una copia perfecta a su propia biblioteca. La descargan y juegan; nunca podrán sobrescribir la tuya.',
    },
    pricing: {
      title: 'Precios — Plan Gratis, Lifetime de pago único o Pro',
      description: 'El plan Gratis es gratis de verdad: sin plazo ni tarjeta. Lifetime se paga una vez. Los códigos de acceso van en todos los planes. Sin cobro por persona.',
      breadcrumb: 'Precios',
      hand: 'sin letra pequeña',
      h1Html: 'ELIGE TU <span class="accent">CARTUCHO.</span>',
      lede: 'Tres formas de jugarlo. El Gratis es gratis de verdad — no una prueba de siete días. El Lifetime se paga una vez. El Pro es para grupos que respaldan juntos. Sin cobro por persona, sin costes sorpresa, sin letra pequeña.',
    },
    download: {
      title: 'Descargar Checkpoint64 — Gratis para Windows, macOS y Linux',
      description: 'Descarga gratis con un plan gratis que no es una prueba. Instaladores para Windows, macOS Apple Silicon y Linux, y Steam para Windows y Linux, con Steam Deck.',
      breadcrumb: 'Descargar',
      hand: 'plan gratis, gratis de verdad',
      h1Html: 'LLÉVATELO.',
      lede: '',
    },
    help: {
      title: 'Ayuda y FAQ — Copia de seguridad de partidas | Checkpoint64',
      description: 'Las preguntas más frecuentes, por temas: qué cuenta como partida, backups con el juego abierto, bloqueos co-op, emuladores, planes y pagos. Y cómo contactarnos.',
      breadcrumb: 'Ayuda',
      hand: 'personas de verdad al otro lado',
      h1Html: 'PREGUNTAS <span class="accent">FRECUENTES.</span>',
      lede: 'Las preguntas que más nos hacen, por temas. ¿No está la tuya? Escribe a support@checkpoint64.com o pregunta en Discord.',
    },
  },

  meta: {
    skipLink: 'Saltar al contenido',
    title: 'Checkpoint64 — Nunca más pierdas una partida, en solitario o en co-op',
    description: 'Backup automático en la nube e historial completo de versiones para partidas de PC. Restaura partidas corruptas y comparte mundos de co-op con bloqueos. Funciona con Minecraft, Stardew Valley, Elden Ring y 180+ juegos. Descarga gratis para Windows, Mac, Linux.',
    ogTitle: 'Checkpoint64 — Nunca más pierdas una partida, en solitario o en co-op',
    ogDescription: 'Nunca más pierdas una partida. Backups automáticos, historial completo de versiones y bloqueos co-op para que los amigos compartan mundos sin sobrescribirse. 180+ juegos listos. Descarga gratis — paga una vez por más espacio.',
    ogImageAlt: 'Checkpoint64 — nunca más pierdas una partida. Una estantería retro de cartuchos de partidas.',
    twitterTitle: 'Checkpoint64 — Nunca más pierdas una partida, en solitario o en co-op',
    twitterDescription: 'Nunca más pierdas una partida. Backups automáticos en la nube, historial completo de versiones, bloqueos co-op. 180+ juegos listos. Descarga gratis para Windows, Mac, Linux.',
    twitterImageAlt: 'Checkpoint64 — nunca más pierdas una partida.',
    noscriptHtml: 'Aviso — JavaScript está desactivado, así que la demo animada de esta página no funcionará. El resto del contenido se ve por completo arriba.',
  },

  jsonld: {
    orgDescription: 'Checkpoint64 crea una herramienta de backup de partidas para jugadores de PC — backups automáticos en la nube, historial completo de versiones y bloqueos co-op para que los amigos compartan mundos sin sobrescribirse.',
    softwareDescription: 'Backup automático en la nube, historial completo de versiones y bloqueos co-op para partidas de PC. Plan gratis incluido; paga una vez por más espacio. Funciona de fábrica con Minecraft, Stardew Valley, Skyrim, Palworld, Elden Ring, Factorio, Valheim, más 180+ juegos y 7 emuladores.',
    featureList: [
      'Backups automáticos en segundo plano cada 60 segundos',
      'Historial completo de versiones con restauración en un clic',
      'Bloqueos co-op aplicados en el servidor — un solo portador del mundo a la vez',
      'Subidas deduplicadas — solo se envían los archivos que cambiaron',
      'Preajustes para 180+ juegos y 7 emuladores',
      'Bitácora de actividad compartida para equipos',
      'Códigos de acceso de solo lectura para mundos comunitarios',
      'Checkpoint Connect — aloja un servidor de juego en tu propio PC para tu equipo, sin abrir puertos',
      'Navegación completa con mando, también en Steam Deck',
      'Plan Lifetime de pago único — sin suscripción',
    ],
    howToName: 'Cómo respaldar automáticamente tus partidas de PC con Checkpoint64',
    howToDescription: 'Configura backup en la nube automático e historial completo de versiones para cualquier partida de PC en tres pasos.',
    howToSupply: [
      'Un PC con Windows, macOS o Linux',
      'Un juego que escriba su partida en una carpeta del disco',
    ],
    howToTool: 'App de escritorio Checkpoint64',
    howToSteps: [
      { name: 'Sube tu partida', text: 'Apunta Checkpoint64 a la carpeta donde tu juego guarda. Pulsa Subir para enviar una instantánea a la nube — esa será la versión uno.' },
      { name: 'Activa el auto-backup', text: 'Activa el auto-backup. Checkpoint64 revisa la carpeta cada 60 segundos y sube una versión nueva en cuanto algo cambia. Solo se envían los archivos que cambiaron.' },
      { name: 'Restaura cualquier versión anterior', text: 'Abre Versiones en cualquier partida para ver el historial completo. Elige una y pulsa Restaurar para volver atrás al instante — los archivos vuelven al disco y esa versión pasa a ser la actual.' },
    ],
    faq: [
      { q: '¿Qué cuenta como «partida»?', a: 'Todo lo que tu juego escribe en el disco duro. Checkpoint64 trata los archivos de una carpeta como una sola partida y los respalda juntos. Los preajustes para 180+ juegos (y siete emuladores) lo configuran por ti; para cualquier otro, apunta a la carpeta y elige los archivos tú mismo.' },
      { q: '¿Subís mientras el juego está abierto?', a: 'Sí, con cuidado. Checkpoint64 nunca bloquea tus archivos. Revisa la carpeta cada 60 segundos; si el juego está guardando, espera a que haya calma y vuelve a intentarlo — sin archivos rotos, sin tirones. La app dormita entre revisiones: no la notarás mientras juegas.' },
      { q: '¿Y si mi compañero de co-op sobrescribe mi subida?', a: 'No puede, a propósito. Solo quien tiene el bloqueo puede subir. Para empujar su versión tiene que tomar el bloqueo primero — lo que te avisa, y queda en la bitácora a la vista de todos. En el peor de los casos, tu versión está a un Restaurar de distancia en el historial.' },
      { q: '¿Sigo necesitando un servidor dedicado?', a: 'Para la mayoría de los grupos, no. Todo el sentido de un servidor dedicado es mantener tu mundo en línea cuando el PC del anfitrión está apagado. Checkpoint64 cubre alrededor del 90 % de eso por una tarifa única: quien quiera jugar toma el bloqueo, juega su sesión y devuelve la partida. ¿Todos a la vez? Monta el servidor en tu propio PC y tu equipo entra con Checkpoint Connect, sin abrir puertos. Un grupo de co-op típico ahorra {0} frente a alquilar un servidor 24/7 que está parado 18 horas al día.' },
      { q: '¿Funciona con emuladores o partidas de consola?', a: 'Con emuladores, totalmente — RetroArch, Dolphin, PCSX2, DuckStation, PPSSPP, RPCS3 y Cemu tienen preajuste, así que tus save states por fin tienen historial de versiones de verdad. Las partidas de consola solo funcionan si primero las llevas a un PC. La app corre en Windows, macOS (Apple Silicon) y Linux.' },
      { q: '¿Cuánto cuesta?', a: 'El plan gratis es real y seguirá siendo gratis: 20 MiB, tu propio espacio más un equipo. El Lifetime es un pago único — 1 GiB por espacio, hasta 3 equipos, comprado directo o vía Steam. El Pro es para grupos grandes: 5 GiB por espacio, 5 equipos, 25 plazas cada uno, códigos de acceso de solo lectura ilimitados. Los códigos funcionan en todos los planes — Gratis aloja 3 fans de solo lectura a la vez, Lifetime 15. Sin cobro por persona en ningún plan.' },
      { q: '¿Puedo usarlo hoy?', a: 'Sí — la 2.0 ya está fuera. Descarga gratis para Windows, macOS (Apple Silicon) y Linux, y también está en Steam.' },
      { q: '¿Quién puede ver mis partidas?', a: 'Tus compañeros de equipo — y solo los que tú invites. Ven tu nombre visible, nunca tu correo. Y tus datos son tuyos: exporta todo en un zip cuando quieras, y borrar tu cuenta la borra de verdad (tras 7 días de margen).' },
      undefined, // not translated yet — falls back to en.js at this index
      undefined, // not translated yet — falls back to en.js at this index
      { q: "¿Pueden mis amigos unirse a un servidor en mi PC sin abrir puertos?", a: "Sí, con Checkpoint Connect. Inicia el servidor del juego en tu PC, compártelo con tu equipo y tus compañeros pulsan Unirse. Su juego se conecta a 127.0.0.1, y las dos copias de la app se conectan directo cuando pueden y por un relé cuando no, así que nadie toca el router. Funciona con servidores UDP y TCP, solo entran los miembros de tu equipo y está en todos los planes." },
    ],
  },
}
