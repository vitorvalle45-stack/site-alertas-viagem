const S_TEXTS = {
  pt: {
    title: 'Bem-vindo ao Premium!', desc: 'Sua assinatura est\u00E1 ativa. Veja como come\u00E7ar:',
    step1t: 'Abra o bot no Telegram', step1d: 'Clique no bot\u00E3o abaixo para iniciar o bot.',
    step2t: 'Escolha sua regi\u00E3o', step2d: 'Envie /start e selecione seu pa\u00EDs.',
    step3t: 'Entre na Comunidade VIP', step3d: 'Grupo exclusivo com deals extras.',
    btnBot: '\uD83E\uDD16 Abrir Bot no Telegram',
    deniedTitle: 'Acesso negado', deniedDesc: 'Nenhum pagamento encontrado. Fa\u00E7a sua assinatura primeiro.', deniedBtn: 'Assinar Premium',
  },
  en: {
    title: 'Welcome to Premium!', desc: 'Your subscription is active. Here\'s how to get started:',
    step1t: 'Open the bot on Telegram', step1d: 'Click the button below to start the bot.',
    step2t: 'Choose your region', step2d: 'Send /start and select your country.',
    step3t: 'Join the VIP Community', step3d: 'Exclusive group with extra deals and tips.',
    btnBot: '\uD83E\uDD16 Open Bot on Telegram',
    deniedTitle: 'Access denied', deniedDesc: 'No payment found. Please subscribe first.', deniedBtn: 'Subscribe to Premium',
  },
  es: {
    title: '\u00A1Bienvenido a Premium!', desc: 'Tu suscripci\u00F3n est\u00E1 activa. As\u00ED empiezas:',
    step1t: 'Abre el bot en Telegram', step1d: 'Haz clic en el bot\u00F3n de abajo.',
    step2t: 'Elige tu regi\u00F3n', step2d: 'Env\u00EDa /start y selecciona tu pa\u00EDs.',
    step3t: '\u00DAnete a la Comunidad VIP', step3d: 'Grupo exclusivo con ofertas y tips.',
    btnBot: '\uD83E\uDD16 Abrir Bot en Telegram',
    deniedTitle: 'Acceso denegado', deniedDesc: 'No se encontr\u00F3 pago. Suscr\u00EDbete primero.', deniedBtn: 'Suscribirse a Premium',
  },
  fr: {
    title: 'Bienvenue en Premium !', desc: 'Votre abonnement est actif. Voici comment commencer :',
    step1t: 'Ouvrez le bot sur Telegram', step1d: 'Cliquez sur le bouton ci-dessous.',
    step2t: 'Choisissez votre r\u00E9gion', step2d: 'Envoyez /start et s\u00E9lectionnez votre pays.',
    step3t: 'Rejoignez la Communaut\u00E9 VIP', step3d: 'Groupe exclusif avec des offres et conseils.',
    btnBot: '\uD83E\uDD16 Ouvrir le Bot sur Telegram',
    deniedTitle: 'Acc\u00E8s refus\u00E9', deniedDesc: 'Aucun paiement trouv\u00E9. Abonnez-vous d\'abord.', deniedBtn: 'S\'abonner \u00E0 Premium',
  },
  de: {
    title: 'Willkommen bei Premium!', desc: 'Dein Abo ist aktiv. So startest du:',
    step1t: '\u00D6ffne den Bot auf Telegram', step1d: 'Klicke auf den Button unten.',
    step2t: 'W\u00E4hle deine Region', step2d: 'Sende /start und w\u00E4hle dein Land.',
    step3t: 'Tritt der VIP-Community bei', step3d: 'Exklusive Gruppe mit Deals und Tipps.',
    btnBot: '\uD83E\uDD16 Bot auf Telegram \u00F6ffnen',
    deniedTitle: 'Zugang verweigert', deniedDesc: 'Keine Zahlung gefunden. Bitte zuerst abonnieren.', deniedBtn: 'Premium abonnieren',
  },
  it: {
    title: 'Benvenuto in Premium!', desc: 'Il tuo abbonamento \u00E8 attivo. Ecco come iniziare:',
    step1t: 'Apri il bot su Telegram', step1d: 'Clicca il pulsante qui sotto.',
    step2t: 'Scegli la tua regione', step2d: 'Invia /start e seleziona il tuo paese.',
    step3t: 'Unisciti alla Comunit\u00E0 VIP', step3d: 'Gruppo esclusivo con offerte e consigli.',
    btnBot: '\uD83E\uDD16 Apri Bot su Telegram',
    deniedTitle: 'Accesso negato', deniedDesc: 'Nessun pagamento trovato. Iscriviti prima.', deniedBtn: 'Iscriviti a Premium',
  },
  ru: {
    title: '\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 Premium!', desc: '\u0412\u0430\u0448\u0430 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0430 \u0430\u043A\u0442\u0438\u0432\u043D\u0430. \u041A\u0430\u043A \u043D\u0430\u0447\u0430\u0442\u044C:',
    step1t: '\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u0431\u043E\u0442 \u0432 Telegram', step1d: '\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0443 \u043D\u0438\u0436\u0435.',
    step2t: '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0435\u0433\u0438\u043E\u043D', step2d: '\u041E\u0442\u043F\u0440\u0430\u0432\u044C\u0442\u0435 /start \u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0443.',
    step3t: '\u0412\u0441\u0442\u0443\u043F\u0438\u0442\u0435 \u0432 VIP-\u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E', step3d: '\u042D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u0430\u044F \u0433\u0440\u0443\u043F\u043F\u0430 \u0441 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u043C\u0438.',
    btnBot: '\uD83E\uDD16 \u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0431\u043E\u0442 \u0432 Telegram',
    deniedTitle: '\u0414\u043E\u0441\u0442\u0443\u043F \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D', deniedDesc: '\u041E\u043F\u043B\u0430\u0442\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430. \u041F\u043E\u0434\u043F\u0438\u0448\u0438\u0442\u0435\u0441\u044C.', deniedBtn: '\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 Premium',
  },
  ja: {
    title: 'Premium\u3078\u3088\u3046\u3053\u305D\uFF01', desc: '\u30B5\u30D6\u30B9\u30AF\u30EA\u30D7\u30B7\u30E7\u30F3\u304C\u6709\u52B9\u3067\u3059\u3002\u59CB\u3081\u65B9:',
    step1t: 'Telegram\u3067\u30DC\u30C3\u30C8\u3092\u958B\u304F', step1d: '\u4E0B\u306E\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3002',
    step2t: '\u5730\u57DF\u3092\u9078\u629E', step2d: '/start\u3092\u9001\u4FE1\u3057\u3066\u56FD\u3092\u9078\u629E\u3002',
    step3t: 'VIP\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u306B\u53C2\u52A0', step3d: '\u9650\u5B9A\u30B0\u30EB\u30FC\u30D7\u3002',
    btnBot: '\uD83E\uDD16 Telegram\u30DC\u30C3\u30C8\u3092\u958B\u304F',
    deniedTitle: '\u30A2\u30AF\u30BB\u30B9\u62D2\u5426', deniedDesc: '\u304A\u652F\u6255\u3044\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002', deniedBtn: 'Premium\u306B\u767B\u9332',
  },
  ko: {
    title: 'Premium\uC5D0 \uC624\uC2E0 \uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4!', desc: '\uAD6C\uB3C5\uC774 \uD65C\uC131\uD654\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC2DC\uC791 \uBC29\uBC95:',
    step1t: 'Telegram\uC5D0\uC11C \uBD07 \uC5F4\uAE30', step1d: '\uC544\uB798 \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uC138\uC694.',
    step2t: '\uC9C0\uC5ED \uC120\uD0DD', step2d: '/start\uB97C \uBCF4\uB0B4\uACE0 \uAD6D\uAC00\uB97C \uC120\uD0DD\uD558\uC138\uC694.',
    step3t: 'VIP \uCEE4\uBBA4\uB2C8\uD2F0 \uCC38\uC5EC', step3d: '\uB3C5\uC810 \uADF8\uB8F9.',
    btnBot: '\uD83E\uDD16 Telegram \uBD07 \uC5F4\uAE30',
    deniedTitle: '\uC811\uADFC \uAC70\uBD80', deniedDesc: '\uACB0\uC81C\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.', deniedBtn: 'Premium \uAD6C\uB3C5',
  },
  ar: {
    title: '\u0645\u0631\u062D\u0628\u0627 \u0628\u0643 \u0641\u064A Premium!', desc: '\u0627\u0634\u062A\u0631\u0627\u0643\u0643 \u0646\u0634\u0637. \u0643\u064A\u0641 \u062A\u0628\u062F\u0623:',
    step1t: '\u0627\u0641\u062A\u062D \u0627\u0644\u0628\u043E\u062A \u0639\u0644\u0649 Telegram', step1d: '\u0627\u0646\u0642\u0631 \u0639\u0644\u0649 \u0627\u0644\u0632\u0631 \u0623\u062F\u0646\u0627\u0647.',
    step2t: '\u0627\u062E\u062A\u0631 \u0645\u0646\u0637\u0642\u062A\u0643', step2d: '\u0623\u0631\u0633\u0644 /start \u0648\u0627\u062E\u062A\u0631 \u0628\u0644\u062F\u0643.',
    step3t: '\u0627\u0646\u0636\u0645 \u0644\u0645\u062C\u062A\u0645\u0639 VIP', step3d: '\u0645\u062C\u0645\u0648\u0639\u0629 \u062D\u0635\u0631\u064A\u0629.',
    btnBot: '\uD83E\uDD16 \u0627\u0641\u062A\u062D \u0627\u0644\u0628\u043E\u062A \u0639\u0644\u0649 Telegram',
    deniedTitle: '\u062A\u0645 \u0631\u0641\u0636 \u0627\u0644\u0648\u0635\u0648\u0644', deniedDesc: '\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u062F\u0641\u0639.', deniedBtn: '\u0627\u0634\u062A\u0631\u0643 \u0641\u064A Premium',
  },
};

async function initSuccess() {
  let lang = 'en';
  try {
    const res = await fetch('/api/detect-country');
    const data = await res.json();
    lang = data.lang || 'en';
  } catch {}

  const t = S_TEXTS[lang] || S_TEXTS.en;

  const params = new URLSearchParams(window.location.search);
  const sessionId = params.get('session_id');

  if (!sessionId) {
    document.getElementById('b-title').textContent = t.deniedTitle;
    document.getElementById('b-title').style.color = 'var(--urgent)';
    document.getElementById('b-desc').textContent = t.deniedDesc;
    const btn = document.createElement('a');
    btn.href = '/#pricing';
    btn.className = 'btn btn-cta';
    btn.textContent = t.deniedBtn;
    document.getElementById('blocked-view').appendChild(btn);
    return;
  }

  document.getElementById('blocked-view').style.display = 'none';
  document.getElementById('success-view').style.display = 'block';

  document.getElementById('s-title').textContent = t.title;
  document.getElementById('s-desc').textContent = t.desc;
  document.getElementById('s-step1t').textContent = t.step1t;
  document.getElementById('s-step1d').textContent = t.step1d;
  document.getElementById('s-step2t').textContent = t.step2t;
  document.getElementById('s-step2d').textContent = t.step2d;
  document.getElementById('s-step3t').textContent = t.step3t;
  document.getElementById('s-step3d').textContent = t.step3d;
  document.getElementById('s-btn-bot').textContent = t.btnBot;
  document.getElementById('s-btn-bot').href = 'https://t.me/alertas_viagem_br_bot';
}

document.addEventListener('DOMContentLoaded', initSuccess);
