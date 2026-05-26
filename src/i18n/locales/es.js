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
      savings: 'AHORRO',
      pricing: 'PRECIOS',
      faq: 'FAQ',
      blog: 'BLOG',
    },
    cta: 'UNIRME',
    ctaAria: 'Unirme a la lista de lanzamiento',
    switcherAria: 'Elegir idioma',
  },

  hero: {
    h1Html: 'NUNCA MÁS PIERDAS<br/>UNA <span class="accent">PARTIDA.</span>',
    sub: 'Tus partidas, guardadas para siempre. Pasa mundos entre amigos como cartuchos. Se acabó el «¿quién tiene la última?». Todos quedan sincronizados. Deshaz las partidas malas. ¿El anfitrión se desconecta? Otro toma el relevo. En solitario o en co-op, siempre protegido.',
    ctaPrimary: 'UNIRME A LA LISTA',
    ctaPrimaryAria: 'Unirme a la lista de lanzamiento de Checkpoint64',
    ctaSecondary: 'VERLO EN ACCIÓN',
    ctaSecondaryAria: 'Ver cómo funciona Checkpoint64',
    small: ['pago único', 'sin suscripción', 'tuyo, para siempre'],
  },

  problems: {
    tape: 'LO QUE DE VERDAD DUELE',
    h2Html: 'LO QUE ESTO ARREGLA,<br/><span class="accent">EN RESUMEN.</span>',
    headingId: 'Lo que esto arregla',
    woes: [
      { stamp: '01:14', text: 'el factorio del anfitrión petó a mitad de guardado — 80 horas de mundo compartido, perdidas', tag: 'RIP' },
      { stamp: 'MIÉ 18 H', text: 'tu colega de co-op jugó solo y sobrescribió tu partida', tag: 'AY' },
      { stamp: null, text: 'pagar un servidor 24/7 cuando tu grupo solo juega seis horas a la semana', tag: 'FACTURA' },
      { stamp: 'SÁB', text: 'el anfitrión está de vacaciones — nadie más tiene el último mundo de valheim', tag: 'ATASCADO' },
    ],
  },

  how: {
    tape: 'CÓMO FUNCIONA CHECKPOINT64',
    h2Html: 'APÚNTALO A UNA CARPETA.<br/><span class="accent">OLVÍDATE.</span>',
    lede: 'La idea es que no vuelvas a pensar en los archivos de guardado. Tres pasos, una vez, y listo para siempre.',
    steps: [
      {
        label: '01 · SUBIR',
        h3Html: 'PULSA SUBIR ↑',
        bodyHtml: 'Toma una instantánea de tu carpeta de guardado y envía una copia a la nube. Cada subida se convierte en su propia <em>versión</em> con nombre.',
      },
      {
        label: '02 · AUTO-BACKUP',
        h3Html: 'ACTIVA EL AUTO',
        bodyHtml: 'Checkpoint64 revisa tu carpeta cada pocos minutos. Si algo cambió, sube una versión nueva por su cuenta. Solo se envían los archivos modificados — el resto se omite.',
      },
      {
        label: '03 · RESTAURAR',
        h3Html: 'VUELVE ATRÁS',
        bodyHtml: 'Pulsa <b>Versiones →</b> en cualquier partida para ver todas las copias. Elige una y pulsa <b>Restaurar</b> — Checkpoint64 devuelve los archivos y marca esa versión como la actual.',
      },
    ],
    autoMeta: 'cada 2 minutos · solo lo que cambió',
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
      { tag: 'HISTORIAL DE VERSIONES', title: 'CADA SUBIDA\nES UNA VERSIÓN.', body: 'Recorre cada copia con su número de archivos, tamaño y qué cambió desde la última vez. Pulsa Restaurar y devuelve la partida Y la marca como actual — sin líos.' },
      { tag: 'BLOQUEOS CO-OP', title: 'UNO SOSTIENE\nEL MUNDO.', body: 'Juegos como Factorio, Satisfactory, Valheim y V Rising solo tienen un archivo de mundo activo a la vez. Quien tiene el bloqueo puede subirlo; los demás solo descargan. ¿Nadie lo usa? Toma tú el bloqueo — se acabó el «¿quién tiene la última partida?».' },
      { tag: 'SOLO LO QUE CAMBIA', title: 'SUBIDAS\nMINÚSCULAS.', body: 'Solo enviamos los bits que de verdad cambiaron. ¿Una partida de 14 MB donde se movió un archivo? Sube 8 KB. Suave para tu internet, suave para tu almacenamiento.' },
      { tag: 'REGLAS POR JUEGO', title: 'ELIGE QUÉ\nSE RESPALDA.', body: 'Elige qué archivos respaldar y cuáles ignorar. Salta los registros de fallos y las capturas, conserva la partida. Ya configurado para los 40+ juegos que Checkpoint64 conoce.' },
      { tag: 'EN SEGUNDO PLANO', title: 'CORRE EN\nSEGUNDO PLANO.', body: 'Una app pequeña y ligera que apenas usa memoria. Revisa cada 2 minutos y descansa cuando nada cambió. No te estorba mientras juegas.' },
      { tag: 'BITÁCORA', title: 'QUIÉN HIZO QUÉ,\nY CUÁNDO.', body: 'Cada subida, restauración y toma de bloqueo queda anotada en la bitácora de tu grupo. Útil cuando tu compañero de co-op te echa la culpa de la mala partida.' },
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
    footTpl: 'En cinco años son más o menos <b>{0}</b> que te quedas. O una GPU nueva, lo que prefieras. <a href="./blog/ditch-the-dedicated-server/">Lee el cálculo completo →</a>',
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
    lede: 'Tres formas de jugarlo. Gratis para probar, pagado de por vida, o Pro para grupos que respaldan juntos. Sin cobro por persona, sin costes sorpresa, sin trampas. Los precios aún no están fijados — deja tu correo y te avisamos antes del lanzamiento.',
    badge: '★ EL MÁS ELEGIDO',
    cards: [
      {
        tag: 'GRATIS', unit: 'sin tarjeta',
        tagline: 'pruébalo, comprueba si tus partidas vuelven',
        features: [
          '1 espacio personal (sin equipos)',
          '20 MiB de almacenamiento en la nube',
          'backup automático + historial completo',
          'únete al equipo de un amigo para co-op',
        ],
        cta: 'CONSEGUIR GRATIS',
      },
      {
        tag: 'LIFETIME', unit: 'pago único, tuyo para siempre',
        tagline: 'paga una vez, tus partidas viven para siempre',
        features: [
          'espacio personal + hasta 2 equipos',
          '5 GiB de almacenamiento por espacio',
          'bloqueos co-op + bitácora de actividad compartida',
          'nunca una suscripción',
          'desbloqueo vía Steam o directo',
        ],
        cta: 'AVÍSAME',
      },
      {
        tag: 'PRO', unit: 'mensual, cancela cuando quieras',
        tagline: 'para grupos, streamers, equipos de mods',
        features: [
          'espacio personal + hasta 5 equipos',
          '50 GiB de almacenamiento por espacio',
          '25 plazas por equipo (mínimo garantizado)',
          '100 versiones / 90 días guardados (mínimo garantizado)',
          'ancho de banda prioritario (2× el caudal de la API)',
        ],
        cta: 'AVÍSAME',
      },
    ],
    tbc: 'POR DEF.',
    notify: {
      text: 'Los precios aún no son definitivos. Deja tu correo y te avisamos el día del lanzamiento.',
      button: 'AVÍSAME',
    },
    emailPlaceholder: 'tu@ejemplo.com',
    emailLabel: 'Correo electrónico',
    formAria: 'Avisarme sobre los precios de Checkpoint64',
  },

  download: {
    headlineSoonHtml: 'PRONTO DISPONIBLE.<br/>APÚNTATE A<br/><span class="invert">LA LISTA.</span>',
    headlineLiveHtml: 'ÚLTIMO BUILD.<br/>CONSIGUE<br/><span class="invert">TU COPIA.</span>',
    blurbSoon: 'Aún probamos en privado. Deja tu correo, indica en qué juegas y te avisamos en cuanto esté listo.',
    blurbLive: 'Elige tu plataforma. Los builds se publican automáticamente desde GitHub — el enlace lleva directo al último instalador.',
    signoffSoon: 'sin spam, un solo correo en el lanzamiento',
    signoffLiveTpl: 'notas de versión y builds antiguos: <a href="{0}">en GitHub</a>',
    comingSoon: 'pronto',
    notifyButton: 'AVISAR',
    emailLabel: 'Correo electrónico',
    emailPlaceholder: 'tu@ejemplo.com',
    formAria: 'Avisarme cuando salga Checkpoint64',
    tileAriaLiveTpl: 'Descargar Checkpoint64 para {0} ({1})',
    tileAriaSoonTpl: 'Checkpoint64 para {0} — ver las versiones en GitHub',
  },

  faq: {
    tape: 'FAQ',
    h2Html: 'PREGUNTAS <span class="accent">FRECUENTES.</span>',
    items: [
      { q: '¿QUÉ ES UNA «PARTIDA»?', a: 'Todo lo que tu juego escribe en el disco duro. Checkpoint64 trata los archivos de una carpeta como una sola partida y los respalda juntos. Apuntas a la carpeta y eliges qué archivos cuentan. Ya lo tenemos configurado para 40+ juegos populares.' },
      { q: '¿SUBÍS MIENTRAS EL JUEGO ESTÁ ABIERTO?', a: 'Sí, con cuidado. Checkpoint64 nunca bloquea tus archivos de guardado. Si el juego está guardando justo cuando miramos, esperamos un momento y volvemos a intentarlo — sin archivos rotos, sin fallos. La mayoría de los juegos terminan de guardar en una fracción de segundo de todos modos.' },
      { q: '¿QUÉ PASA SI MI COMPAÑERO DE CO-OP SOBRESCRIBE MI SUBIDA?', a: 'No puede, a propósito. Solo quien tiene el bloqueo puede subir. Si quiere empujar su versión, primero tiene que tomar el bloqueo — y eso te avisa antes de que ocurra. Tu última versión sigue a salvo en el historial; siempre puedes volver a ella.' },
      { q: '¿SIGO NECESITANDO UN SERVIDOR DEDICADO?', a: 'Para la mayoría de los grupos, no. Todo el sentido de un servidor dedicado es mantener tu mundo en línea cuando el PC del anfitrión está apagado. Checkpoint64 cubre alrededor del 90 % de eso por una tarifa única: quien quiera jugar toma el bloqueo, juega su sesión y devuelve la partida. Un grupo de co-op típico ahorra {0} frente a alquilar un servidor 24/7 que está parado 18 horas al día.' },
      { q: '¿FUNCIONA CON PARTIDAS DE CONSOLA?', a: 'Solo si puedes llevar tus partidas de consola a un PC — como con emuladores, exportaciones de guardado en la nube de Xbox o PS+, y Steam Cloud a través de tu PC. Checkpoint64 en sí solo corre en Windows, Mac y Linux.' },
      { q: '¿CUÁNTO COSTARÁ?', a: 'Tres planes: Gratis (20 MiB, solo personal), Lifetime (pago único, 5 GiB por espacio + 2 equipos) y Pro (mensual, 50 GiB por espacio + 5 equipos, para grupos más grandes). Sin cobro por persona en ningún plan. Las cifras definitivas no están fijadas — apúntate a la lista de lanzamiento y te lo diremos antes que a nadie, además del precio early-bird garantizado.' },
      { q: '¿CUÁNDO SALE?', a: 'Pronto — estamos probando en privado y apuntamos a un lanzamiento público más adelante este año. Apúntate y enviaremos un solo correo el día en que las versiones de Windows / Mac / Linux estén listas.' },
    ],
  },

  footer: {
    blurb: 'Un lugar seguro para tus grandes partidas. Hecho por gente que perdió una base de Factorio de 200 horas y nunca lo superó.',
    sign: 'hecho para mí.',
    product: 'PRODUCTO',
    resources: 'RECURSOS',
    company: 'EMPRESA',
    links: {
      how: 'Cómo funciona',
      features: 'Funciones',
      pricing: 'Precios',
      joinList: 'Unirme a la lista',
      changelog: 'Cambios',
      blog: 'Blog',
      discord: 'Discord',
      terms: 'Términos',
      privacy: 'Privacidad',
    },
    ariaProduct: 'Producto',
    ariaResources: 'Recursos',
    ariaCompany: 'Empresa',
    changelogAria: 'Registro de cambios en GitHub (abre una pestaña nueva)',
    discordAria: 'Unirme al Discord de Checkpoint64 (abre una pestaña nueva)',
    copyTpl: '© {0} CHECKPOINT64 · TODOS LOS DERECHOS RESERVADOS',
    notAffiliated: 'SIN AFILIACIÓN CON LOS JUEGOS MENCIONADOS ARRIBA',
  },

  forms: {
    enterEmail: 'Introduce tu correo electrónico, por favor.',
    sending: 'Enviando…',
    success: 'Estás en la lista — te escribiremos el día del lanzamiento.',
    error: 'Algo salió mal — inténtalo de nuevo en un momento.',
  },

  meta: {
    skipLink: 'Saltar al contenido',
    title: 'Checkpoint64 — Nunca más pierdas una partida, en solitario o en co-op',
    description: 'Checkpoint64 respalda automáticamente tus partidas de PC en la nube, conserva el historial completo de versiones y deja que los amigos de co-op compartan mundos de forma segura con bloqueos. Funciona con Factorio, Satisfactory, Valheim, Stardew Valley, Elden Ring y 40+ más. Pago único. Windows, macOS, Linux.',
    ogTitle: 'Checkpoint64 — Nunca más pierdas una partida, en solitario o en co-op',
    ogDescription: 'Nunca más pierdas una partida. Backup en la nube automático, historial completo de versiones y bloqueos co-op para que los amigos compartan mundos sin sobrescribirse. Pago único.',
    ogImageAlt: 'Checkpoint64 — nunca más pierdas una partida. Una estantería retro de cartuchos de partidas.',
    twitterTitle: 'Checkpoint64 — Nunca más pierdas una partida, en solitario o en co-op',
    twitterDescription: 'Nunca más pierdas una partida. Backup en la nube automático, historial completo de versiones y bloqueos co-op. Pago único. Windows, Mac, Linux.',
    twitterImageAlt: 'Checkpoint64 — nunca más pierdas una partida.',
    noscriptHtml: 'Aviso — JavaScript está desactivado, así que el formulario de la lista de lanzamiento y la demo animada de esta página no funcionarán. El resto del contenido se ve por completo arriba.',
  },

  jsonld: {
    orgDescription: 'Checkpoint64 crea una herramienta de backup de partidas para jugadores de PC — backups automáticos en la nube, historial completo de versiones y bloqueos co-op para que los amigos compartan mundos sin sobrescribirse.',
    softwareDescription: 'Backup en la nube automático, historial completo de versiones y bloqueos co-op para partidas de PC. Paga una vez, consérvalo para siempre. Funciona de fábrica con Factorio, Satisfactory, Valheim, V Rising, Stardew Valley, Elden Ring y 40+ juegos más.',
    featureList: [
      'Backups automáticos en segundo plano cada 2 minutos',
      'Historial completo de versiones para cada partida',
      'Bloqueos co-op para que solo una persona suba a la vez',
      'Subidas delta — solo se envían los bytes que cambiaron',
      'Reglas por juego con 40+ preajustes',
      'Bitácora de actividad compartida para grupos de co-op',
      'Pago único, sin suscripción',
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
      { name: 'Activa el auto-backup', text: 'Activa el auto-backup. Checkpoint64 vigila la carpeta y sube una versión nueva cada pocos minutos cada vez que cambia. Solo se envían los bytes que cambiaron.' },
      { name: 'Restaura cualquier versión anterior', text: 'Abre Versiones en cualquier partida para ver el historial completo. Elige una y pulsa Restaurar para volver atrás al instante — los archivos vuelven al disco y esa versión pasa a ser la actual.' },
    ],
    faq: [
      { q: '¿Qué es una «partida»?', a: 'Todo lo que tu juego escribe en el disco duro. Checkpoint64 trata los archivos de una carpeta como una sola partida y los respalda juntos. Apuntas a la carpeta y eliges qué archivos cuentan. Ya lo tenemos configurado para 40+ juegos populares.' },
      { q: '¿Subís mientras el juego está abierto?', a: 'Sí, con cuidado. Checkpoint64 nunca bloquea tus archivos de guardado. Si el juego está guardando justo cuando miramos, esperamos un momento y volvemos a intentarlo — sin archivos rotos, sin fallos. La mayoría de los juegos terminan de guardar en una fracción de segundo de todos modos.' },
      { q: '¿Qué pasa si mi compañero de co-op sobrescribe mi subida?', a: 'No puede, a propósito. Solo quien tiene el bloqueo puede subir. Si quiere empujar su versión, primero tiene que tomar el bloqueo — y eso te avisa antes de que ocurra. Tu última versión sigue a salvo en el historial; siempre puedes volver a ella.' },
      { q: '¿Sigo necesitando un servidor dedicado?', a: 'Para la mayoría de los grupos, no. Todo el sentido de un servidor dedicado es mantener tu mundo en línea cuando el PC del anfitrión está apagado. Checkpoint64 cubre alrededor del 90 % de eso por una tarifa única: quien quiera jugar toma el bloqueo, juega su sesión y devuelve la partida. Un grupo de co-op típico ahorra {0} frente a alquilar un servidor 24/7 que está parado 18 horas al día.' },
      { q: '¿Funciona con partidas de consola?', a: 'Solo si puedes llevar tus partidas de consola a un PC — como con emuladores, exportaciones de guardado en la nube de Xbox o PS+, y Steam Cloud a través de tu PC. Checkpoint64 en sí solo corre en Windows, Mac y Linux.' },
      { q: '¿Cuánto costará?', a: 'Tres planes: Gratis (20 MiB, solo personal), Lifetime (pago único, 5 GiB por espacio más 2 equipos) y Pro (mensual, 50 GiB por espacio más 5 equipos, para grupos más grandes). Sin cobro por persona en ningún plan. Las cifras definitivas no están fijadas — apúntate a la lista de lanzamiento y te lo diremos antes que a nadie, además del precio early-bird garantizado.' },
      { q: '¿Cuándo sale?', a: 'Pronto — estamos probando en privado y apuntamos a un lanzamiento público más adelante este año. Apúntate y enviaremos un solo correo el día en que las versiones de Windows, Mac y Linux estén listas.' },
    ],
  },
}
