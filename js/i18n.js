const TEXTS = {
  pt: {
    heroTag: "Alertas em tempo real",
    heroTitle: 'Passagens aereas ate <span>90% OFF</span>',
    heroDesc: "Receba alertas de error fares e promocoes absurdas direto no seu Telegram. Voos internacionais por precos que parecem bug.",
    btnPremium: "Assinar Premium",
    btnFree: "Comecar Gratis",
    stat1: "Deals enviados", stat2: "Paises", stat3: "Economia media", stat4: "Error fares/mes",
    featTitle: "Como funciona",
    feat1t: "Monitoramento 24/7", feat1d: "Nossos robos monitoram dezenas de fontes em tempo real, procurando error fares e promocoes relampago.",
    feat2t: "Alerta Instantaneo", feat2d: "Receba notificacoes direto no Telegram assim que um deal absurdo aparece. Cada segundo conta!",
    feat3t: "Precos na sua moeda", feat3d: "Veja todos os precos convertidos automaticamente pra sua moeda local. Sem surpresas.",
    feat4t: "Economia Real", feat4d: "Nossos membros economizam em media 60-85% em passagens aereas. Uma assinatura se paga na primeira viagem.",
    feat5t: "Comunidade VIP", feat5d: "Acesso ao grupo exclusivo onde membros compartilham dicas, experiencias e deals extras.",
    feat6t: "Suporte Dedicado", feat6d: "Duvidas sobre como comprar? Nossa equipe te ajuda a garantir o deal antes que saia do ar.",
    pricingTitle: "Planos",
    pricingSub: "Uma passagem barata ja paga o ano inteiro de assinatura.",
    freeName: "Gratis", freePrice: "0", freePeriod: "",
    freeF1: "1-2 alertas por dia", freeF2: "Canal publico do Telegram", freeF3: "Deals com delay de 1-2h", freeF4: "Precos em R$",
    freeCta: "Entrar Gratis",
    premName: "Premium", premPeriod: "/mes",
    premF1: "Alertas em TEMPO REAL", premF2: "5-10 deals exclusivos/dia", premF3: "Error fares antes de todos", premF4: "Qualquer moeda do mundo", premF5: "Comunidade VIP", premF6: "Suporte prioritario",
    premCta: "Assinar Agora",
    premBadge: "Mais popular",
    exTitle: "Deals reais dos ultimos dias",
    footerText: "Travel Alerts Bot. Todos os direitos reservados.",
  },
  en: {
    heroTag: "Real-time alerts",
    heroTitle: 'Flights up to <span>90% OFF</span>',
    heroDesc: "Get instant alerts for error fares and insane flight deals straight to your Telegram. International flights at prices that seem like bugs.",
    btnPremium: "Go Premium",
    btnFree: "Start Free",
    stat1: "Deals sent", stat2: "Countries", stat3: "Avg. savings", stat4: "Error fares/mo",
    featTitle: "How it works",
    feat1t: "24/7 Monitoring", feat1d: "Our bots monitor dozens of sources in real time, hunting for error fares and flash sales.",
    feat2t: "Instant Alerts", feat2d: "Get notifications straight to Telegram as soon as an insane deal drops. Every second counts!",
    feat3t: "Prices in Your Currency", feat3d: "See all prices automatically converted to your local currency. No surprises.",
    feat4t: "Real Savings", feat4d: "Our members save 60-85% on flights on average. One subscription pays for itself on the first trip.",
    feat5t: "VIP Community", feat5d: "Access the exclusive group where members share tips, experiences and extra deals.",
    feat6t: "Dedicated Support", feat6d: "Questions about how to book? Our team helps you secure the deal before it's gone.",
    pricingTitle: "Plans",
    pricingSub: "One cheap flight already pays for a whole year of subscription.",
    freeName: "Free", freePrice: "0", freePeriod: "",
    freeF1: "1-2 alerts per day", freeF2: "Public Telegram channel", freeF3: "Deals with 1-2h delay", freeF4: "Prices in USD",
    freeCta: "Join Free",
    premName: "Premium", premPeriod: "/mo",
    premF1: "REAL-TIME alerts", premF2: "5-10 exclusive deals/day", premF3: "Error fares before everyone", premF4: "Any currency worldwide", premF5: "VIP Community", premF6: "Priority support",
    premCta: "Subscribe Now",
    premBadge: "Most popular",
    exTitle: "Real deals from the past days",
    footerText: "Travel Alerts Bot. All rights reserved.",
  }
};

// Precos por moeda
const PRICES = {
  BRL: { symbol: 'R$', free: '0', premium: '19,90' },
  USD: { symbol: 'US$', free: '0', premium: '4.99' },
  GBP: { symbol: '£', free: '0', premium: '3.99' },
  EUR: { symbol: '€', free: '0', premium: '4.49' },
  CHF: { symbol: 'CHF', free: '0', premium: '4.99' },
  AUD: { symbol: 'A$', free: '0', premium: '7.49' },
  AED: { symbol: 'AED', free: '0', premium: '18.90' },
  JPY: { symbol: '¥', free: '0', premium: '750' },
  KRW: { symbol: '₩', free: '0', premium: '6,900' },
  CAD: { symbol: 'C$', free: '0', premium: '6.49' },
  DKK: { symbol: 'DKK', free: '0', premium: '34.90' },
  SEK: { symbol: 'SEK', free: '0', premium: '52.90' },
  NOK: { symbol: 'NOK', free: '0', premium: '54.90' },
  MXN: { symbol: 'MX$', free: '0', premium: '89.90' },
};

const DEAL_EXAMPLES = {
  pt: [
    { tag: 'ERROR FARE', route: 'Sao Paulo → Paris', price: 'R$ 1.890', original: 'R$ 5.200', savings: '64% OFF' },
    { tag: 'PROMO', route: 'Rio → Lisboa', price: 'R$ 1.450', original: 'R$ 4.100', savings: '65% OFF' },
    { tag: 'ERROR FARE', route: 'Guarulhos → Miami', price: 'R$ 980', original: 'R$ 3.500', savings: '72% OFF' },
  ],
  en: [
    { tag: 'ERROR FARE', route: 'New York → Paris', price: '$289', original: '$890', savings: '68% OFF' },
    { tag: 'DEAL', route: 'London → Tokyo', price: '£380', original: '£1,200', savings: '68% OFF' },
    { tag: 'ERROR FARE', route: 'Sydney → Bali', price: 'A$190', original: 'A$650', savings: '71% OFF' },
  ],
};

async function detectCountry() {
  try {
    const res = await fetch('/api/detect-country');
    return await res.json();
  } catch {
    return { country: 'US', lang: 'en', currency: { code: 'USD', symbol: 'US$' } };
  }
}

function applyTranslations(lang, currencyCode) {
  const t = TEXTS[lang] || TEXTS.en;
  const p = PRICES[currencyCode] || PRICES.USD;

  // Hero
  document.getElementById('hero-tag').textContent = t.heroTag;
  document.getElementById('hero-title').innerHTML = t.heroTitle;
  document.getElementById('hero-desc').textContent = t.heroDesc;
  document.getElementById('btn-premium').textContent = t.btnPremium;
  document.getElementById('btn-free').textContent = t.btnFree;

  // Stats
  document.getElementById('stat1-label').textContent = t.stat1;
  document.getElementById('stat2-label').textContent = t.stat2;
  document.getElementById('stat3-label').textContent = t.stat3;
  document.getElementById('stat4-label').textContent = t.stat4;

  // Features
  document.getElementById('feat-title').textContent = t.featTitle;
  for (let i = 1; i <= 6; i++) {
    document.getElementById(`feat${i}t`).textContent = t[`feat${i}t`];
    document.getElementById(`feat${i}d`).textContent = t[`feat${i}d`];
  }

  // Pricing
  document.getElementById('pricing-title').textContent = t.pricingTitle;
  document.getElementById('pricing-sub').textContent = t.pricingSub;
  document.getElementById('free-name').textContent = t.freeName;
  document.getElementById('free-price').innerHTML = `${p.symbol} ${p.free}`;
  document.getElementById('free-cta').textContent = t.freeCta;
  document.getElementById('prem-name').textContent = t.premName;
  document.getElementById('prem-price').innerHTML = `${p.symbol} ${p.premium}<small>${t.premPeriod}</small>`;
  document.getElementById('prem-cta').textContent = t.premCta;
  document.getElementById('prem-badge').textContent = t.premBadge;

  const freeFeats = document.querySelectorAll('.free-features li');
  [t.freeF1, t.freeF2, t.freeF3, t.freeF4].forEach((f, i) => { if (freeFeats[i]) freeFeats[i].textContent = f; });
  const premFeats = document.querySelectorAll('.prem-features li');
  [t.premF1, t.premF2, t.premF3, t.premF4, t.premF5, t.premF6].forEach((f, i) => { if (premFeats[i]) premFeats[i].textContent = f; });

  // Examples
  document.getElementById('ex-title').textContent = t.exTitle;
  const examples = DEAL_EXAMPLES[lang] || DEAL_EXAMPLES.en;
  const exContainer = document.getElementById('deal-examples');
  exContainer.innerHTML = examples.map(d => `
    <div class="deal-example">
      <div class="deal-header">
        <span class="deal-tag">${d.tag}</span>
      </div>
      <div class="deal-route">✈️ ${d.route}</div>
      <div>
        <span class="deal-price">${d.price}</span>
        <span class="deal-original">${d.original}</span>
      </div>
      <span class="deal-savings">${d.savings}</span>
    </div>
  `).join('');

  // Footer
  document.getElementById('footer-text').textContent = `© 2026 ${t.footerText}`;
}

// Init
document.addEventListener('DOMContentLoaded', async () => {
  const data = await detectCountry();
  const lang = data.lang || 'en';
  const currencyCode = data.currency?.code || 'USD';

  document.getElementById('lang-badge').textContent = data.country === 'BR' ? '🇧🇷 PT-BR' : `🌍 EN`;

  applyTranslations(lang, currencyCode);

  // Store for checkout
  window.__userLang = lang;
  window.__userCurrency = currencyCode;
  window.__userCountry = data.country;
});
