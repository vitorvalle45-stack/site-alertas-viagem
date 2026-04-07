const TEXTS = {
  pt: {
    // Hero
    heroTag: "Error fares em tempo real",
    heroTitle: 'Companhias A\u00E9reas Erram nos Pre\u00E7os. <span class="highlight">Nossos Membros Agradecem.</span>',
    heroDesc: "Monitoramos milh\u00F5es de tarifas 24/7. Quando as companhias erram, seu celular vibra primeiro. Membros economizam em m\u00E9dia R$4.200 por viagem.",
    btnPremium: "Desbloquear Alertas Premium",
    btnFree: "Come\u00E7ar Gr\u00E1tis",
    heroMicro: "Cancele quando quiser \u2022 Sem cart\u00E3o necess\u00E1rio \u2022 Garantia de 30 dias",

    // Proof bar
    proof1: "membros", proof2: "pa\u00EDses", proof3: "economia m\u00E9dia", proof4: "error fares/m\u00EAs",

    // FOMO
    fomoTitle: "O Que Voc\u00EA Est\u00E1 Perdendo",
    fomoSub: "Membros Premium foram alertados sobre TODOS esses deals em tempo real. Quanto tempo mais voc\u00EA vai assistir de fora?",
    fomoCta: "Parar de Perder Deals",
    expired: "EXPIROU",

    // Destinations
    destTitle: "Deals Reais dos \u00DAltimos Dias",

    // How
    howTitle: "Sente e Espere. A Gente Ca\u00E7a.",
    step1t: "Escaneamos milh\u00F5es de tarifas 24/7",
    step1d: "Nossos algoritmos monitoram companhias a\u00E9reas do mundo inteiro buscando erros de pre\u00E7o e promo\u00E7\u00F5es rel\u00E2mpago.",
    step2t: "Seu celular vibra na hora",
    step2d: "No instante que detectamos um deal, membros Premium recebem notifica\u00E7\u00E3o no Telegram com todos os detalhes.",
    step3t: "Voc\u00EA reserva e economiza milhares",
    step3d: "Reserve diretamente com a companhia a\u00E9rea e economize em m\u00E9dia R$4.200 por viagem. Sem intermedi\u00E1rios.",

    // Compare
    compTitle: "Gr\u00E1tis Recebe os Deals de Ontem. Premium Recebe a Viagem de Amanh\u00E3.",
    compFree: "Gr\u00E1tis", compPrem: "Premium",
    comp1: "Deals nacionais", comp2: "Deals internacionais", comp3: "Error fares / Bugs de passagem",
    comp4: "Alertas em tempo real", comp5: "Comunidade VIP", comp6: "Suporte priorit\u00E1rio",
    compDelay: "Com delay", compExclusivo: "Exclusivo",

    // Pricing
    pricingTitle: "Um Deal Paga 17 Anos de Premium",
    pricingSub: "Error fare m\u00E9dio economiza R$4.200. Premium custa R$19,90/m\u00EAs. Uma reserva cobre sua assinatura at\u00E9 2043.",
    freeName: "Gr\u00E1tis", freePrice: "R$ 0",
    freeF1: "1-2 alertas por dia", freeF2: "Canal p\u00FAblico do Telegram", freeF3: "Deals com delay de 6-12h", freeF4: "Sem error fares",
    freeCta: "Entrar Gr\u00E1tis",
    premName: "Premium", premPeriod: "/m\u00EAs",
    premF1: "Alertas em TEMPO REAL", premF2: "5-10 deals exclusivos/dia", premF3: "Error fares antes de todos",
    premF4: "Pre\u00E7os na sua moeda", premF5: "Comunidade VIP", premF6: "Suporte priorit\u00E1rio",
    premCta: "Quero Meus Alertas!",
    premBadge: "Mais popular",
    premMicro: "Cancele quando quiser \u2022 Sem fidelidade \u2022 Se paga sozinho",

    // Testimonials
    testTitle: "Quem J\u00E1 Economizou",
    test1name: "\ud83c\udde7\ud83c\uddf7 Marina Costa", test1route: "GRU \u2192 Lisboa, abr 2026", test1saved: "Economizou R$2.850",
    test1quote: "Eu estava no \u00F4nibus quando o alerta chegou. Reservei em 3 minutos no celular. Melhor R$19,90 que j\u00E1 gastei na vida.",
    test2name: "\ud83c\uddf5\ud83c\uddf9 Tiago Ferreira", test2route: "LIS \u2192 S\u00E3o Paulo, mar 2026", test2saved: "Economizou \u20ac890",
    test2quote: "Moro em Lisboa e achei voo pra visitar fam\u00EDlia no Brasil por \u20ac280 ida e volta. Normalmente pago \u20ac700+. Absurdo.",
    test3name: "\ud83c\uddfa\ud83c\uddf8 Emily Sanders", test3route: "MIA \u2192 Rio, fev 2026", test3saved: "Economizou $1.950",
    test3quote: "I found a Miami to Rio flight for $189 roundtrip. My Brazilian friends couldn't believe it. This service is insane.",

    // FAQ
    faqTitle: "Perguntas Frequentes",
    faq1q: "J\u00E1 procuro passagens no Google Flights. Por que preciso disso?",
    faq1a: "Google Flights mostra pre\u00E7os NORMAIS. A gente mostra pre\u00E7os ERRADOS \u2014 error fares que acontecem quando companhias publicam tarifas por uma fra\u00E7\u00E3o do valor real. Tipo S\u00E3o Paulo para Bali a R$3.999 em vez de R$12.000. Esses erros s\u00E3o corrigidos em horas. Google Flights \u00E9 uma lanterna. A gente \u00E9 um radar.",
    faq2q: "R$19,90/m\u00EAs parece caro para algo que talvez eu n\u00E3o use todo m\u00EAs.",
    faq2a: "R$19,90/m\u00EAs = R$0,66/dia. Menos que um cafezinho. O deal m\u00E9dio economiza R$4.200. Mesmo reservando apenas UM deal por ANO, voc\u00EA pagou R$238,80 para economizar R$4.200. Retorno de 17x. Sem contrato \u2014 cancele quando quiser.",
    faq3q: "Como sei que os deals s\u00E3o reais? E se a companhia cancelar?",
    faq3a: "Error fares s\u00E3o reservas 100% reais feitas diretamente com a companhia a\u00E9rea \u2014 a gente s\u00F3 alerta sobre o pre\u00E7o. Mais de 85% s\u00E3o honrados. Se cancelarem, reembolso TOTAL. Pior cen\u00E1rio? Reembolso gratuito. Melhor cen\u00E1rio? Bali por R$8.000 a menos.",
    faq4q: "Posso cancelar quando quiser?",
    faq4a: "Sim. Um clique. Sem multa. Sem liga\u00E7\u00E3o. Sem contrato. Sem fidelidade. Imediato.",
    faq5q: "Por que Telegram e n\u00E3o email?",
    faq5a: "Velocidade. Error fares duram horas, \u00E0s vezes minutos. Email vai pro spam e voc\u00EA v\u00EA 3 dias depois. Telegram entrega notifica\u00E7\u00E3o instant\u00E2nea \u2014 seu celular vibra no segundo que o deal aparece.",

    // Final CTA
    finalTitle: "Cada Dia Sem Premium \u00E9 Um Deal Que Voc\u00EA Perde.",
    finalDesc: "Enquanto voc\u00EA pensa, membros Premium est\u00E3o reservando passagens por uma fra\u00E7\u00E3o do pre\u00E7o. Por R$0,66/dia, nunca mais pague caro em passagem.",
    finalCta: "Come\u00E7ar a Economizar Agora",
    finalMicro: "Cancele quando quiser \u2022 Garantia de 30 dias \u2022 Se paga sozinho",

    // Footer
    footerText: "Travel Alerts Bot. Todos os direitos reservados.",
  },
  en: {
    heroTag: "Real-time error fares",
    heroTitle: 'Airlines Make Pricing Mistakes. <span class="highlight">We Make Sure You\'re First in Line.</span>',
    heroDesc: "We monitor millions of fares 24/7. When airlines mess up, your phone buzzes first. Members save an average of $2,100 per trip.",
    btnPremium: "Unlock Premium Alerts",
    btnFree: "Start Free",
    heroMicro: "Cancel anytime \u2022 No credit card required \u2022 30-day money-back guarantee",
    proof1: "members", proof2: "countries", proof3: "avg. savings", proof4: "error fares/mo",
    fomoTitle: "What You're Missing",
    fomoSub: "Premium members were alerted about ALL these deals in real time. How much longer will you watch from the sidelines?",
    fomoCta: "Stop Missing Deals",
    expired: "EXPIRED",
    destTitle: "Real Deals From the Past Days",
    howTitle: "Sit Back. We Hunt.",
    step1t: "We scan millions of fares 24/7",
    step1d: "Our algorithms monitor airlines worldwide, hunting for pricing errors and flash sales.",
    step2t: "Your phone buzzes instantly",
    step2d: "The moment we detect a deal, Premium members get a Telegram notification with all the details.",
    step3t: "You book and save thousands",
    step3d: "Book directly with the airline and save an average of $2,100 per trip. No middlemen, no markups.",
    compTitle: "Free Gets Yesterday's Deals. Premium Gets Tomorrow's Trip.",
    compFree: "Free", compPrem: "Premium",
    comp1: "Domestic deals", comp2: "International deals", comp3: "Error fares / Mistake fares",
    comp4: "Real-time alerts", comp5: "VIP Community", comp6: "Priority support",
    compDelay: "Delayed", compExclusivo: "Exclusive",
    pricingTitle: "One Deal Pays for 17 Years of Premium",
    pricingSub: "Average error fare saves $2,100. Premium costs $4.99/mo. One booking covers your subscription until 2043.",
    freeName: "Free", freePrice: "$0",
    freeF1: "1-2 alerts per day", freeF2: "Public Telegram channel", freeF3: "Deals with 6-12h delay", freeF4: "No error fares",
    freeCta: "Join Free",
    premName: "Premium", premPeriod: "/mo",
    premF1: "REAL-TIME alerts", premF2: "5-10 exclusive deals/day", premF3: "Error fares before everyone",
    premF4: "Prices in your currency", premF5: "VIP Community", premF6: "Priority support",
    premCta: "Get My Alerts!",
    premBadge: "Most popular",
    premMicro: "Cancel anytime \u2022 No commitment \u2022 Pays for itself",
    testTitle: "Members Who Saved",
    test1name: "\ud83c\uddfa\ud83c\uddf8 James Wilson", test1route: "JFK \u2192 London, Apr 2026", test1saved: "Saved $1,420",
    test1quote: "Got a JFK to London alert at 6am. Business class for $680 roundtrip. Normally $4,200. Booked before my coffee was ready.",
    test2name: "\ud83c\uddec\ud83c\udde7 Sophie Mitchell", test2route: "LHR \u2192 Tokyo, Mar 2026", test2saved: "Saved \u00a31,890",
    test2quote: "Heathrow to Tokyo for \u00a3312 return. I literally screamed. My flatmate thought I'd gone mad. Best fiver I spend every month.",
    test3name: "\ud83c\udde6\ud83c\uddfa David Nguyen", test3route: "SYD \u2192 Rome, Feb 2026", test3saved: "Saved A$3,100",
    test3quote: "Sydney to Rome for A$490 roundtrip. One deal covered 34 years of subscription. If you travel at all, this is a no-brainer.",
    faqTitle: "Frequently Asked Questions",
    faq1q: "I already use Google Flights. Why do I need this?",
    faq1a: "Google Flights shows NORMAL prices. We show WRONG prices \u2014 error fares that happen when airlines accidentally publish fares at a fraction of the real value. Like New York to Bali for $799 instead of $2,400. These errors get fixed in hours. Google Flights is a flashlight. We're a radar.",
    faq2q: "$4.99/month seems expensive for something I might not use every month.",
    faq2a: "$4.99/month = $0.17/day. Less than a cup of coffee per week. The average deal saves $2,100. Even booking just ONE deal per YEAR, you paid $59.88 to save $2,100. That's a 35x return. No contract \u2014 cancel anytime.",
    faq3q: "How do I know the deals are real? What if the airline cancels?",
    faq3a: "Error fares are 100% real bookings made directly with the airline \u2014 we just alert you about the price. Over 85% are honored. If they cancel, you get a FULL refund. Worst case? Free refund. Best case? Bali for $1,600 less.",
    faq4q: "Can I cancel anytime?",
    faq4a: "Yes. One click. No penalty. No phone call. No contract. No commitment. Immediate.",
    faq5q: "Why Telegram and not email?",
    faq5a: "Speed. Error fares last hours, sometimes minutes. Email goes to spam and you see it 3 days later. Telegram delivers instant notifications \u2014 your phone buzzes the second a deal appears.",
    finalTitle: "Every Day Without Premium Is a Deal You're Missing.",
    finalDesc: "While you're thinking about it, Premium members are booking flights at a fraction of the price. For $0.17/day, never overpay for a flight again.",
    finalCta: "Start Saving Now",
    finalMicro: "Cancel anytime \u2022 30-day guarantee \u2022 Pays for itself",
    footerText: "Travel Alerts Bot. All rights reserved.",
  }
};

const PRICES = {
  BRL: { symbol: 'R$', premium: '19,90', link: 'STRIPE_LINK_BRL' },
  USD: { symbol: 'US$', premium: '4.99', link: 'STRIPE_LINK_USD' },
  GBP: { symbol: '\u00A3', premium: '3.99', link: 'STRIPE_LINK_GBP' },
  EUR: { symbol: '\u20AC', premium: '4.99', link: 'STRIPE_LINK_EUR' },
  CHF: { symbol: 'CHF', premium: '4.99', link: 'STRIPE_LINK_CHF' },
  AUD: { symbol: 'A$', premium: '7.99', link: 'STRIPE_LINK_AUD' },
  AED: { symbol: 'AED', premium: '18.90', link: 'STRIPE_LINK_AED' },
  JPY: { symbol: '\u00A5', premium: '750', link: 'STRIPE_LINK_JPY' },
  KRW: { symbol: '\u20A9', premium: '6,900', link: 'STRIPE_LINK_KRW' },
  CAD: { symbol: 'C$', premium: '6.99', link: 'STRIPE_LINK_CAD' },
  DKK: { symbol: 'DKK', premium: '34.90', link: 'STRIPE_LINK_DKK' },
  SEK: { symbol: 'SEK', premium: '52.90', link: 'STRIPE_LINK_SEK' },
  NOK: { symbol: 'NOK', premium: '54.90', link: 'STRIPE_LINK_NOK' },
  MXN: { symbol: 'MX$', premium: '89', link: 'STRIPE_LINK_MXN' },
};

// Utility: shuffle array and pick N items
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
function pickRandom(arr, n) { return shuffleArray(arr).slice(0, n); }
function randomTime(lang) {
  const h = Math.floor(Math.random() * 71) + 1;
  return lang === 'pt' ? `Expirou h\u00E1 ${h}h` : `Expired ${h}h ago`;
}

// FOMO deals por pais — pool grande, 4-6 aleatorios por visita
const FOMO_DEALS_BY_COUNTRY = {
  BR: [
    { route: 'GRU \u2192 Paris (Air France, direto, 11h30)', original: 'R$ 5.200', deal: 'R$ 2.100', savings: '60% OFF' },
    { route: 'GIG \u2192 Lisboa (TAP, direto, 9h45)', original: 'R$ 4.800', deal: 'R$ 1.650', savings: '66% OFF' },
    { route: 'BSB \u2192 Dubai (Emirates, via GRU, 18h)', original: 'R$ 6.100', deal: 'R$ 2.400', savings: '61% OFF' },
    { route: 'REC \u2192 Bangkok (Qatar, via Doha, 24h)', original: 'R$ 7.200', deal: 'R$ 2.500', savings: '65% OFF' },
    { route: 'POA \u2192 T\u00F3quio (ANA, via GRU, 26h)', original: 'R$ 8.500', deal: 'R$ 3.100', savings: '64% OFF' },
    { route: 'CNF \u2192 Roma (ITA Airways, via GRU, 14h)', original: 'R$ 5.200', deal: 'R$ 1.800', savings: '65% OFF' },
    { route: 'SSA \u2192 Cidade do M\u00E9xico (Aeromexico, via GRU, 14h)', original: 'R$ 3.900', deal: 'R$ 1.200', savings: '69% OFF' },
    { route: 'CWB \u2192 Nova York (United, via GRU, 14h)', original: 'R$ 4.500', deal: 'R$ 1.500', savings: '67% OFF' },
    { route: 'FOR \u2192 Madri (Ib\u00E9ria, via Lisboa, 12h)', original: 'R$ 4.800', deal: 'R$ 1.600', savings: '67% OFF' },
    { route: 'GIG \u2192 Londres (British Airways, direto, 11h45)', original: 'R$ 5.800', deal: 'R$ 2.200', savings: '62% OFF' },
    { route: 'VCP \u2192 Canc\u00FAn (Aeromexico, via MEX, 12h)', original: 'R$ 3.800', deal: 'R$ 1.300', savings: '66% OFF' },
    { route: 'CNF \u2192 Miami (American, via GRU, 14h)', original: 'R$ 4.100', deal: 'R$ 1.500', savings: '63% OFF' },
    { route: 'REC \u2192 Seul (Korean Air, via Paris, 22h)', original: 'R$ 7.800', deal: 'R$ 2.900', savings: '63% OFF' },
    { route: 'BSB \u2192 Cairo (Emirates, via Dubai, 22h)', original: 'R$ 6.500', deal: 'R$ 2.500', savings: '62% OFF' },
    { route: 'POA \u2192 Amsterd\u00E3 (KLM, via GRU, 15h)', original: 'R$ 5.400', deal: 'R$ 1.900', savings: '65% OFF' },
    { route: 'SSA \u2192 Santiago (LATAM, via GRU, 8h)', original: 'R$ 3.100', deal: 'R$ 950', savings: '69% OFF' },
  ],
  US: [
    { route: 'JFK \u2192 Paris (Air France, nonstop, 7h20)', original: '$890', deal: '$289', savings: '68% OFF' },
    { route: 'LAX \u2192 Tokyo (ANA, nonstop, 11h30)', original: '$1,400', deal: '$489', savings: '65% OFF' },
    { route: 'ORD \u2192 Rome (ITA Airways, nonstop, 9h45)', original: '$1,100', deal: '$310', savings: '72% OFF' },
    { route: 'MIA \u2192 London (BA, nonstop, 9h)', original: '$780', deal: '$245', savings: '69% OFF' },
    { route: 'SFO \u2192 Seoul (Korean Air, nonstop, 12h)', original: '$1,300', deal: '$410', savings: '68% OFF' },
    { route: 'DFW \u2192 Canc\u00FAn (American, nonstop, 3h15)', original: '$520', deal: '$129', savings: '75% OFF' },
    { route: 'EWR \u2192 Barcelona (TAP, via Lisbon, 10h)', original: '$950', deal: '$310', savings: '67% OFF' },
    { route: 'SEA \u2192 Sydney (Qantas, nonstop, 16h)', original: '$1,800', deal: '$590', savings: '67% OFF' },
    { route: 'IAD \u2192 Dubai (Emirates, nonstop, 13h)', original: '$1,050', deal: '$340', savings: '68% OFF' },
    { route: 'ATL \u2192 Amsterdam (Delta, nonstop, 9h)', original: '$920', deal: '$285', savings: '69% OFF' },
    { route: 'DEN \u2192 Bali (Cathay Pacific, via HKG, 22h)', original: '$2,400', deal: '$799', savings: '67% OFF' },
    { route: 'BOS \u2192 Reykjavik (Icelandair, nonstop, 5h)', original: '$650', deal: '$189', savings: '71% OFF' },
    { route: 'MSP \u2192 Bangkok (EVA Air, via Taipei, 21h)', original: '$1,300', deal: '$410', savings: '68% OFF' },
    { route: 'PHX \u2192 Cape Town (Delta, via ATL, 20h)', original: '$1,700', deal: '$540', savings: '68% OFF' },
    { route: 'HNL \u2192 Tahiti (Air Tahiti Nui, nonstop, 5h)', original: '$980', deal: '$310', savings: '68% OFF' },
    { route: 'DTW \u2192 S\u00E3o Paulo (LATAM, via MIA, 13h)', original: '$950', deal: '$299', savings: '69% OFF' },
  ],
  GB: [
    { route: 'MAN \u2192 Tokyo (JAL, via Helsinki, 15h)', original: '\u00A31,250', deal: '\u00A3390', savings: '69% OFF' },
    { route: 'LHR \u2192 New York (BA, nonstop, 8h)', original: '\u00A3650', deal: '\u00A3189', savings: '71% OFF' },
    { route: 'BHX \u2192 Bali (Singapore Air, via SIN, 18h)', original: '\u00A3950', deal: '\u00A3330', savings: '65% OFF' },
    { route: 'EDI \u2192 Dubai (Emirates, via LHR, 9h)', original: '\u00A3620', deal: '\u00A3210', savings: '66% OFF' },
    { route: 'LGW \u2192 Bangkok (Thai Airways, nonstop, 11h30)', original: '\u00A3750', deal: '\u00A3260', savings: '65% OFF' },
    { route: 'BRS \u2192 Reykjavik (Icelandair, nonstop, 3h)', original: '\u00A3320', deal: '\u00A389', savings: '72% OFF' },
    { route: 'MAN \u2192 Cape Town (BA, via LHR, 14h)', original: '\u00A31,020', deal: '\u00A3350', savings: '66% OFF' },
    { route: 'NCL \u2192 Canc\u00FAn (TUI, nonstop, 10h)', original: '\u00A3750', deal: '\u00A3259', savings: '65% OFF' },
    { route: 'LHR \u2192 S\u00E3o Paulo (BA, nonstop, 11h30)', original: '\u00A31,100', deal: '\u00A3380', savings: '65% OFF' },
    { route: 'EDI \u2192 Seoul (Korean Air, via AMS, 14h)', original: '\u00A3890', deal: '\u00A3299', savings: '66% OFF' },
    { route: 'STN \u2192 Marrakech (Ryanair, nonstop, 3h30)', original: '\u00A3280', deal: '\u00A369', savings: '75% OFF' },
    { route: 'BHX \u2192 Sydney (Qatar, via Doha, 24h)', original: '\u00A31,550', deal: '\u00A3530', savings: '66% OFF' },
  ],
  EU: [
    { route: 'MXP \u2192 Tokyo (ANA, nonstop, 12h)', original: '\u20AC1,100', deal: '\u20AC390', savings: '65% OFF' },
    { route: 'CPH \u2192 Bangkok (Thai, nonstop, 10h)', original: '\u20AC850', deal: '\u20AC289', savings: '66% OFF' },
    { route: 'AMS \u2192 Bali (KLM, via Singapore, 17h)', original: '\u20AC950', deal: '\u20AC340', savings: '64% OFF' },
    { route: 'ATH \u2192 New York (Emirates, via DXB, 16h)', original: '\u20AC720', deal: '\u20AC230', savings: '68% OFF' },
    { route: 'FCO \u2192 Rio (ITA Airways, nonstop, 11h)', original: '\u20AC890', deal: '\u20AC310', savings: '65% OFF' },
    { route: 'DUB \u2192 Dubai (Emirates, nonstop, 7h30)', original: '\u20AC680', deal: '\u20AC220', savings: '68% OFF' },
    { route: 'VIE \u2192 Cape Town (Austrian, via JNB, 14h)', original: '\u20AC1,080', deal: '\u20AC380', savings: '65% OFF' },
    { route: 'BCN \u2192 Seoul (Korean Air, via AMS, 14h)', original: '\u20AC1,020', deal: '\u20AC340', savings: '67% OFF' },
    { route: 'LIS \u2192 Canc\u00FAn (TAP, nonstop, 10h)', original: '\u20AC750', deal: '\u20AC240', savings: '68% OFF' },
    { route: 'MAD \u2192 Buenos Aires (Ib\u00E9ria, nonstop, 12h)', original: '\u20AC920', deal: '\u20AC310', savings: '66% OFF' },
    { route: 'FRA \u2192 Maldivas (Condor, nonstop, 10h)', original: '\u20AC1,200', deal: '\u20AC420', savings: '65% OFF' },
    { route: 'CDG \u2192 Sydney (Singapore Air, via SIN, 22h)', original: '\u20AC1,400', deal: '\u20AC490', savings: '65% OFF' },
  ],
  AU: [
    { route: 'SYD \u2192 Bali (Jetstar, direct, 6h15)', original: 'A$850', deal: 'A$190', savings: '78% OFF' },
    { route: 'MEL \u2192 Tokyo (Qantas, nonstop, 10h30)', original: 'A$1,600', deal: 'A$520', savings: '68% OFF' },
    { route: 'SYD \u2192 London (Qatar, via Doha, 22h)', original: 'A$2,200', deal: 'A$690', savings: '69% OFF' },
    { route: 'BNE \u2192 Bangkok (Thai, via SYD, 12h)', original: 'A$1,100', deal: 'A$350', savings: '68% OFF' },
    { route: 'PER \u2192 Dubai (Emirates, nonstop, 11h)', original: 'A$1,400', deal: 'A$450', savings: '68% OFF' },
    { route: 'SYD \u2192 Rome (Qatar, via Doha, 22h)', original: 'A$2,100', deal: 'A$650', savings: '69% OFF' },
    { route: 'MEL \u2192 Seoul (Korean Air, nonstop, 10h)', original: 'A$1,300', deal: 'A$420', savings: '68% OFF' },
    { route: 'SYD \u2192 Fiji (Fiji Airways, nonstop, 4h)', original: 'A$750', deal: 'A$210', savings: '72% OFF' },
    { route: 'ADL \u2192 Singapore (Scoot, nonstop, 6h30)', original: 'A$680', deal: 'A$180', savings: '74% OFF' },
    { route: 'BNE \u2192 Honolulu (Jetstar, nonstop, 9h)', original: 'A$1,200', deal: 'A$380', savings: '68% OFF' },
    { route: 'PER \u2192 Maldivas (Singapore Air, via SIN, 14h)', original: 'A$1,800', deal: 'A$590', savings: '67% OFF' },
    { route: 'SYD \u2192 Vancouver (Air Canada, nonstop, 15h)', original: 'A$1,900', deal: 'A$620', savings: '67% OFF' },
  ],
  AE: [
    { route: 'DXB \u2192 London (Emirates, nonstop, 7h)', original: 'AED 3,800', deal: 'AED 1,200', savings: '68% OFF' },
    { route: 'DXB \u2192 Bangkok (flydubai, nonstop, 6h20)', original: 'AED 2,900', deal: 'AED 890', savings: '69% OFF' },
    { route: 'DXB \u2192 Bali (Emirates, via SIN, 12h)', original: 'AED 4,200', deal: 'AED 1,400', savings: '67% OFF' },
    { route: 'AUH \u2192 Paris (Etihad, nonstop, 7h15)', original: 'AED 3,600', deal: 'AED 1,100', savings: '69% OFF' },
    { route: 'DXB \u2192 Tokyo (Emirates, nonstop, 9h40)', original: 'AED 5,200', deal: 'AED 1,700', savings: '67% OFF' },
    { route: 'DXB \u2192 Maldivas (Emirates, nonstop, 4h30)', original: 'AED 2,800', deal: 'AED 850', savings: '70% OFF' },
    { route: 'AUH \u2192 Sydney (Etihad, nonstop, 14h)', original: 'AED 5,500', deal: 'AED 1,800', savings: '67% OFF' },
    { route: 'DXB \u2192 Istanbul (Emirates, nonstop, 4h30)', original: 'AED 2,200', deal: 'AED 690', savings: '69% OFF' },
    { route: 'DXB \u2192 Cape Town (Emirates, nonstop, 9h)', original: 'AED 4,800', deal: 'AED 1,500', savings: '69% OFF' },
    { route: 'DXB \u2192 Roma (flydubai, nonstop, 6h15)', original: 'AED 3,100', deal: 'AED 980', savings: '68% OFF' },
    { route: 'AUH \u2192 Seoul (Etihad, nonstop, 9h)', original: 'AED 4,500', deal: 'AED 1,400', savings: '69% OFF' },
    { route: 'DXB \u2192 S\u00E3o Paulo (Emirates, nonstop, 15h)', original: 'AED 6,200', deal: 'AED 2,100', savings: '66% OFF' },
  ],
  JP: [
    { route: 'NRT \u2192 Paris (Air France, nonstop, 13h)', original: '\u00A5185,000', deal: '\u00A558,000', savings: '69% OFF' },
    { route: 'HND \u2192 Bali (Garuda, via Jakarta, 10h)', original: '\u00A5120,000', deal: '\u00A542,000', savings: '65% OFF' },
    { route: 'KIX \u2192 London (Turkish, via IST, 17h)', original: '\u00A5195,000', deal: '\u00A565,000', savings: '67% OFF' },
    { route: 'NRT \u2192 New York (ANA, nonstop, 13h)', original: '\u00A5165,000', deal: '\u00A555,000', savings: '67% OFF' },
    { route: 'HND \u2192 Sydney (ANA, nonstop, 9h30)', original: '\u00A5140,000', deal: '\u00A548,000', savings: '66% OFF' },
    { route: 'NRT \u2192 Honolulu (JAL, nonstop, 7h)', original: '\u00A595,000', deal: '\u00A532,000', savings: '66% OFF' },
    { route: 'KIX \u2192 Bangkok (Thai, nonstop, 6h)', original: '\u00A578,000', deal: '\u00A525,000', savings: '68% OFF' },
    { route: 'NRT \u2192 Dubai (Emirates, nonstop, 11h)', original: '\u00A5175,000', deal: '\u00A556,000', savings: '68% OFF' },
    { route: 'HND \u2192 Seoul (ANA, nonstop, 2h30)', original: '\u00A545,000', deal: '\u00A514,000', savings: '69% OFF' },
    { route: 'NRT \u2192 Canc\u00FAn (ANA, via LAX, 18h)', original: '\u00A5210,000', deal: '\u00A568,000', savings: '68% OFF' },
    { route: 'KIX \u2192 Maldivas (Singapore Air, via SIN, 14h)', original: '\u00A5200,000', deal: '\u00A565,000', savings: '68% OFF' },
    { route: 'NRT \u2192 Roma (Alitalia, nonstop, 13h)', original: '\u00A5170,000', deal: '\u00A555,000', savings: '68% OFF' },
  ],
  CH: [
    { route: 'ZRH \u2192 Tokyo (SWISS, nonstop, 12h)', original: 'CHF 1,200', deal: 'CHF 410', savings: '66% OFF' },
    { route: 'GVA \u2192 New York (SWISS, nonstop, 9h)', original: 'CHF 890', deal: 'CHF 280', savings: '69% OFF' },
    { route: 'ZRH \u2192 Bangkok (Thai, nonstop, 11h)', original: 'CHF 950', deal: 'CHF 310', savings: '67% OFF' },
    { route: 'ZRH \u2192 Dubai (Emirates, nonstop, 6h)', original: 'CHF 680', deal: 'CHF 220', savings: '68% OFF' },
    { route: 'GVA \u2192 S\u00E3o Paulo (SWISS, nonstop, 12h)', original: 'CHF 1,100', deal: 'CHF 370', savings: '66% OFF' },
    { route: 'ZRH \u2192 Bali (Singapore Air, via SIN, 16h)', original: 'CHF 1,300', deal: 'CHF 430', savings: '67% OFF' },
    { route: 'ZRH \u2192 Cape Town (SWISS, via JNB, 14h)', original: 'CHF 1,050', deal: 'CHF 340', savings: '68% OFF' },
    { route: 'GVA \u2192 Seoul (Korean Air, via ICN, 14h)', original: 'CHF 1,150', deal: 'CHF 380', savings: '67% OFF' },
    { route: 'ZRH \u2192 Maldivas (Emirates, via DXB, 12h)', original: 'CHF 1,400', deal: 'CHF 460', savings: '67% OFF' },
    { route: 'BSL \u2192 Marrakech (easyJet, nonstop, 3h)', original: 'CHF 350', deal: 'CHF 89', savings: '75% OFF' },
    { route: 'GVA \u2192 Canc\u00FAn (Edelweiss, nonstop, 11h)', original: 'CHF 980', deal: 'CHF 320', savings: '67% OFF' },
    { route: 'ZRH \u2192 Sydney (Singapore Air, via SIN, 22h)', original: 'CHF 1,600', deal: 'CHF 530', savings: '67% OFF' },
  ],
  CA: [
    { route: 'YYZ \u2192 Paris (Air Canada, nonstop, 7h30)', original: 'C$1,200', deal: 'C$389', savings: '68% OFF' },
    { route: 'YVR \u2192 Tokyo (ANA, nonstop, 10h)', original: 'C$1,500', deal: 'C$490', savings: '67% OFF' },
    { route: 'YUL \u2192 London (BA, nonstop, 7h)', original: 'C$980', deal: 'C$310', savings: '68% OFF' },
    { route: 'YYZ \u2192 Bali (Cathay, via HKG, 22h)', original: 'C$2,400', deal: 'C$790', savings: '67% OFF' },
    { route: 'YVR \u2192 Sydney (Air Canada, nonstop, 16h)', original: 'C$1,900', deal: 'C$620', savings: '67% OFF' },
    { route: 'YYZ \u2192 Dubai (Emirates, nonstop, 12h)', original: 'C$1,600', deal: 'C$510', savings: '68% OFF' },
    { route: 'YUL \u2192 Reykjavik (Icelandair, nonstop, 5h)', original: 'C$750', deal: 'C$210', savings: '72% OFF' },
    { route: 'YVR \u2192 Seoul (Korean Air, nonstop, 11h)', original: 'C$1,400', deal: 'C$450', savings: '68% OFF' },
    { route: 'YYZ \u2192 S\u00E3o Paulo (Air Canada, nonstop, 10h)', original: 'C$1,300', deal: 'C$420', savings: '68% OFF' },
    { route: 'YOW \u2192 Canc\u00FAn (WestJet, nonstop, 5h)', original: 'C$680', deal: 'C$189', savings: '72% OFF' },
    { route: 'YVR \u2192 Fiji (Fiji Airways, nonstop, 11h)', original: 'C$1,700', deal: 'C$550', savings: '68% OFF' },
    { route: 'YYZ \u2192 Bangkok (EVA Air, via Taipei, 20h)', original: 'C$1,800', deal: 'C$590', savings: '67% OFF' },
  ],
  KR: [
    { route: 'ICN \u2192 Paris (Korean Air, nonstop, 12h)', original: '\u20A91,650,000', deal: '\u20A9540,000', savings: '67% OFF' },
    { route: 'ICN \u2192 Bali (Korean Air, nonstop, 7h)', original: '\u20A9850,000', deal: '\u20A9280,000', savings: '67% OFF' },
    { route: 'ICN \u2192 New York (Asiana, nonstop, 14h)', original: '\u20A91,800,000', deal: '\u20A9590,000', savings: '67% OFF' },
    { route: 'ICN \u2192 London (BA, nonstop, 12h)', original: '\u20A91,500,000', deal: '\u20A9490,000', savings: '67% OFF' },
    { route: 'ICN \u2192 Sydney (Korean Air, nonstop, 10h)', original: '\u20A91,900,000', deal: '\u20A9620,000', savings: '67% OFF' },
    { route: 'ICN \u2192 Bangkok (Thai, nonstop, 5h30)', original: '\u20A9650,000', deal: '\u20A9210,000', savings: '68% OFF' },
    { route: 'ICN \u2192 Roma (Korean Air, nonstop, 12h)', original: '\u20A91,550,000', deal: '\u20A9510,000', savings: '67% OFF' },
    { route: 'ICN \u2192 Dubai (Emirates, nonstop, 9h30)', original: '\u20A91,400,000', deal: '\u20A9450,000', savings: '68% OFF' },
    { route: 'ICN \u2192 Canc\u00FAn (Korean Air, via LAX, 18h)', original: '\u20A92,100,000', deal: '\u20A9680,000', savings: '68% OFF' },
    { route: 'ICN \u2192 Honolulu (Korean Air, nonstop, 8h)', original: '\u20A91,200,000', deal: '\u20A9390,000', savings: '68% OFF' },
    { route: 'ICN \u2192 Maldivas (Singapore Air, via SIN, 12h)', original: '\u20A91,700,000', deal: '\u20A9550,000', savings: '68% OFF' },
    { route: 'ICN \u2192 S\u00E3o Paulo (Turkish, via IST, 28h)', original: '\u20A92,400,000', deal: '\u20A9780,000', savings: '68% OFF' },
  ],
};

// Imagens de destinos (pool reutilizavel)
const IMGS = {
  paris: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80',
  dubai: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=80',
  bali: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
  miami: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80',
  roma: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80',
  bangkok: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80',
  tokyo: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80',
  maldivas: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80',
  cancun: 'https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=600&q=80',
  london: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80',
  nyc: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=80',
  capetown: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&q=80',
  seoul: 'https://images.unsplash.com/photo-1546874177-9e664107314e?w=600&q=80',
  sydney: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=80',
  iceland: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=600&q=80',
  marrakech: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80',
};
const TAGS = ['ERROR FARE','BUG','MISTAKE','PROMO','DEAL','GLITCH','ERROR FARE'];

// Dest deals por pais — pool expandido
const DEST_DEALS_BY_COUNTRY = {
  BR: [
    { img: IMGS.paris, route: 'GIG \u2192 Paris', sub: 'Air France \u2022 Direto \u2022 11h30', original: 'R$ 5.200', deal: 'R$ 2.100', tag: 'ERROR FARE' },
    { img: IMGS.dubai, route: 'BSB \u2192 Dubai', sub: 'Emirates \u2022 Via GRU \u2022 18h', original: 'R$ 6.100', deal: 'R$ 2.400', tag: 'BUG' },
    { img: IMGS.bali, route: 'REC \u2192 Bali', sub: 'Qatar Airways \u2022 Via Doha \u2022 28h', original: 'R$ 7.800', deal: 'R$ 3.200', tag: 'ERROR FARE' },
    { img: IMGS.miami, route: 'CNF \u2192 Miami', sub: 'American \u2022 Via GRU \u2022 12h', original: 'R$ 3.500', deal: 'R$ 1.200', tag: 'PROMO' },
    { img: IMGS.roma, route: 'POA \u2192 Roma', sub: 'ITA Airways \u2022 Via GRU \u2022 15h', original: 'R$ 5.200', deal: 'R$ 1.750', tag: 'ERROR FARE' },
    { img: IMGS.bangkok, route: 'SSA \u2192 Bangkok', sub: 'Emirates \u2022 Via Dubai \u2022 24h', original: 'R$ 7.100', deal: 'R$ 2.500', tag: 'BUG' },
    { img: IMGS.tokyo, route: 'CWB \u2192 T\u00F3quio', sub: 'ANA \u2022 Via Houston \u2022 26h', original: 'R$ 8.500', deal: 'R$ 3.100', tag: 'MISTAKE' },
    { img: IMGS.london, route: 'GIG \u2192 Londres', sub: 'British Airways \u2022 Direto \u2022 11h45', original: 'R$ 5.800', deal: 'R$ 2.200', tag: 'ERROR FARE' },
    { img: IMGS.nyc, route: 'FOR \u2192 Nova York', sub: 'United \u2022 Via Houston \u2022 14h', original: 'R$ 4.600', deal: 'R$ 1.500', tag: 'GLITCH' },
    { img: IMGS.cancun, route: 'VCP \u2192 Canc\u00FAn', sub: 'Aeromexico \u2022 Via MEX \u2022 12h', original: 'R$ 3.800', deal: 'R$ 1.300', tag: 'BUG' },
    { img: IMGS.maldivas, route: 'GRU \u2192 Maldivas', sub: 'Emirates \u2022 Via Dubai \u2022 22h', original: 'R$ 9.200', deal: 'R$ 3.500', tag: 'ERROR FARE' },
    { img: IMGS.seoul, route: 'BSB \u2192 Seul', sub: 'Korean Air \u2022 Via GRU \u2022 28h', original: 'R$ 7.800', deal: 'R$ 2.900', tag: 'MISTAKE' },
    { img: IMGS.capetown, route: 'REC \u2192 Cape Town', sub: 'LATAM \u2022 Via GRU/JNB \u2022 20h', original: 'R$ 6.800', deal: 'R$ 2.500', tag: 'DEAL' },
    { img: IMGS.sydney, route: 'POA \u2192 Sydney', sub: 'Qantas \u2022 Via Santiago \u2022 22h', original: 'R$ 9.100', deal: 'R$ 3.300', tag: 'ERROR FARE' },
  ],
  US: [
    { img: IMGS.paris, route: 'EWR \u2192 Paris', sub: 'Air France \u2022 Nonstop \u2022 7h20', original: '$890', deal: '$289', tag: 'ERROR FARE' },
    { img: IMGS.tokyo, route: 'SFO \u2192 Tokyo', sub: 'ANA \u2022 Nonstop \u2022 11h', original: '$1,400', deal: '$489', tag: 'MISTAKE' },
    { img: IMGS.bali, route: 'DEN \u2192 Bali', sub: 'Cathay Pacific \u2022 Via HKG \u2022 22h', original: '$2,400', deal: '$799', tag: 'ERROR FARE' },
    { img: IMGS.roma, route: 'ORD \u2192 Rome', sub: 'ITA Airways \u2022 Nonstop \u2022 9h45', original: '$1,100', deal: '$310', tag: 'ERROR FARE' },
    { img: IMGS.dubai, route: 'IAD \u2192 Dubai', sub: 'Emirates \u2022 Nonstop \u2022 13h', original: '$1,050', deal: '$340', tag: 'MISTAKE' },
    { img: IMGS.bangkok, route: 'MSP \u2192 Bangkok', sub: 'EVA Air \u2022 Via Taipei \u2022 21h', original: '$1,300', deal: '$410', tag: 'ERROR FARE' },
    { img: IMGS.london, route: 'ATL \u2192 London', sub: 'Delta \u2022 Nonstop \u2022 8h30', original: '$820', deal: '$259', tag: 'BUG' },
    { img: IMGS.cancun, route: 'DFW \u2192 Canc\u00FAn', sub: 'American \u2022 Nonstop \u2022 3h15', original: '$520', deal: '$129', tag: 'GLITCH' },
    { img: IMGS.sydney, route: 'SEA \u2192 Sydney', sub: 'Qantas \u2022 Nonstop \u2022 16h', original: '$1,800', deal: '$590', tag: 'ERROR FARE' },
    { img: IMGS.maldivas, route: 'MIA \u2192 Maldives', sub: 'Emirates \u2022 Via DXB \u2022 20h', original: '$2,200', deal: '$720', tag: 'BUG' },
    { img: IMGS.seoul, route: 'LAX \u2192 Seoul', sub: 'Korean Air \u2022 Nonstop \u2022 12h', original: '$1,300', deal: '$410', tag: 'MISTAKE' },
    { img: IMGS.iceland, route: 'BOS \u2192 Reykjavik', sub: 'Icelandair \u2022 Nonstop \u2022 5h', original: '$650', deal: '$189', tag: 'DEAL' },
    { img: IMGS.capetown, route: 'PHX \u2192 Cape Town', sub: 'Delta \u2022 Via ATL \u2022 20h', original: '$1,700', deal: '$540', tag: 'ERROR FARE' },
    { img: IMGS.marrakech, route: 'DTW \u2192 Marrakech', sub: 'Royal Air Maroc \u2022 Via NYC \u2022 10h', original: '$1,050', deal: '$340', tag: 'PROMO' },
  ],
  GB: [
    { img: IMGS.tokyo, route: 'MAN \u2192 Tokyo', sub: 'JAL \u2022 Via Helsinki \u2022 15h', original: '\u00A31,250', deal: '\u00A3390', tag: 'ERROR FARE' },
    { img: IMGS.nyc, route: 'EDI \u2192 New York', sub: 'BA \u2022 Via LHR \u2022 10h', original: '\u00A3690', deal: '\u00A3199', tag: 'MISTAKE' },
    { img: IMGS.bali, route: 'BHX \u2192 Bali', sub: 'Singapore Air \u2022 Via SIN \u2022 18h', original: '\u00A3950', deal: '\u00A3330', tag: 'ERROR FARE' },
    { img: IMGS.dubai, route: 'NCL \u2192 Dubai', sub: 'Emirates \u2022 Via DXB \u2022 8h', original: '\u00A3610', deal: '\u00A3205', tag: 'DEAL' },
    { img: IMGS.bangkok, route: 'LGW \u2192 Bangkok', sub: 'Thai Airways \u2022 Nonstop \u2022 11h30', original: '\u00A3750', deal: '\u00A3260', tag: 'ERROR FARE' },
    { img: IMGS.paris, route: 'BRS \u2192 Paris', sub: 'easyJet \u2022 Nonstop \u2022 1h30', original: '\u00A3180', deal: '\u00A349', tag: 'PROMO' },
    { img: IMGS.capetown, route: 'MAN \u2192 Cape Town', sub: 'BA \u2022 Via LHR \u2022 14h', original: '\u00A31,020', deal: '\u00A3350', tag: 'BUG' },
    { img: IMGS.cancun, route: 'LHR \u2192 Canc\u00FAn', sub: 'BA \u2022 Nonstop \u2022 10h', original: '\u00A3720', deal: '\u00A3249', tag: 'GLITCH' },
    { img: IMGS.seoul, route: 'EDI \u2192 Seoul', sub: 'Korean Air \u2022 Via AMS \u2022 14h', original: '\u00A3890', deal: '\u00A3299', tag: 'ERROR FARE' },
    { img: IMGS.iceland, route: 'BRS \u2192 Reykjavik', sub: 'Icelandair \u2022 Nonstop \u2022 3h', original: '\u00A3320', deal: '\u00A389', tag: 'DEAL' },
    { img: IMGS.maldivas, route: 'LHR \u2192 Maldives', sub: 'BA \u2022 Via Doha \u2022 14h', original: '\u00A31,400', deal: '\u00A3480', tag: 'ERROR FARE' },
    { img: IMGS.sydney, route: 'BHX \u2192 Sydney', sub: 'Qatar \u2022 Via Doha \u2022 24h', original: '\u00A31,550', deal: '\u00A3530', tag: 'MISTAKE' },
    { img: IMGS.marrakech, route: 'STN \u2192 Marrakech', sub: 'Ryanair \u2022 Nonstop \u2022 3h30', original: '\u00A3280', deal: '\u00A369', tag: 'PROMO' },
  ],
  EU: [
    { img: IMGS.tokyo, route: 'MXP \u2192 Tokyo', sub: 'ANA \u2022 Nonstop \u2022 12h', original: '\u20AC1,100', deal: '\u20AC390', tag: 'ERROR FARE' },
    { img: IMGS.nyc, route: 'DUB \u2192 New York', sub: 'Aer Lingus \u2022 Nonstop \u2022 8h', original: '\u20AC680', deal: '\u20AC219', tag: 'MISTAKE' },
    { img: IMGS.bali, route: 'AMS \u2192 Bali', sub: 'KLM \u2022 Via Singapore \u2022 17h', original: '\u20AC950', deal: '\u20AC340', tag: 'ERROR FARE' },
    { img: IMGS.dubai, route: 'ATH \u2192 Dubai', sub: 'Emirates \u2022 Nonstop \u2022 5h', original: '\u20AC580', deal: '\u20AC190', tag: 'DEAL' },
    { img: IMGS.bangkok, route: 'CPH \u2192 Bangkok', sub: 'Thai \u2022 Nonstop \u2022 10h', original: '\u20AC850', deal: '\u20AC289', tag: 'ERROR FARE' },
    { img: IMGS.roma, route: 'FCO \u2192 Rio', sub: 'ITA Airways \u2022 Nonstop \u2022 11h', original: '\u20AC890', deal: '\u20AC310', tag: 'MISTAKE' },
    { img: IMGS.seoul, route: 'BCN \u2192 Seoul', sub: 'Korean Air \u2022 Via AMS \u2022 14h', original: '\u20AC1,020', deal: '\u20AC340', tag: 'BUG' },
    { img: IMGS.cancun, route: 'LIS \u2192 Canc\u00FAn', sub: 'TAP \u2022 Nonstop \u2022 10h', original: '\u20AC750', deal: '\u20AC240', tag: 'GLITCH' },
    { img: IMGS.maldivas, route: 'VIE \u2192 Maldives', sub: 'Austrian \u2022 Via Doha \u2022 12h', original: '\u20AC1,200', deal: '\u20AC420', tag: 'ERROR FARE' },
    { img: IMGS.capetown, route: 'FRA \u2192 Cape Town', sub: 'Lufthansa \u2022 Via JNB \u2022 14h', original: '\u20AC1,050', deal: '\u20AC370', tag: 'DEAL' },
    { img: IMGS.sydney, route: 'CDG \u2192 Sydney', sub: 'Singapore Air \u2022 Via SIN \u2022 22h', original: '\u20AC1,400', deal: '\u20AC490', tag: 'ERROR FARE' },
    { img: IMGS.london, route: 'MAD \u2192 London', sub: 'Ib\u00E9ria \u2022 Nonstop \u2022 2h30', original: '\u20AC250', deal: '\u20AC59', tag: 'PROMO' },
    { img: IMGS.marrakech, route: 'LIS \u2192 Marrakech', sub: 'Ryanair \u2022 Nonstop \u2022 2h', original: '\u20AC280', deal: '\u20AC49', tag: 'DEAL' },
  ],
  AU: [
    { img: IMGS.bali, route: 'SYD \u2192 Bali', sub: 'Jetstar \u2022 Direct \u2022 6h15', original: 'A$850', deal: 'A$190', tag: 'ERROR FARE' },
    { img: IMGS.tokyo, route: 'MEL \u2192 Tokyo', sub: 'Qantas \u2022 Nonstop \u2022 10h30', original: 'A$1,600', deal: 'A$520', tag: 'MISTAKE' },
    { img: IMGS.london, route: 'SYD \u2192 London', sub: 'Qatar \u2022 Via Doha \u2022 22h', original: 'A$2,200', deal: 'A$690', tag: 'ERROR FARE' },
    { img: IMGS.bangkok, route: 'BNE \u2192 Bangkok', sub: 'Thai Airways \u2022 Via SYD \u2022 12h', original: 'A$1,100', deal: 'A$350', tag: 'DEAL' },
    { img: IMGS.dubai, route: 'PER \u2192 Dubai', sub: 'Emirates \u2022 Nonstop \u2022 11h', original: 'A$1,400', deal: 'A$450', tag: 'ERROR FARE' },
    { img: IMGS.roma, route: 'SYD \u2192 Rome', sub: 'Qatar \u2022 Via Doha \u2022 22h', original: 'A$2,100', deal: 'A$650', tag: 'MISTAKE' },
    { img: IMGS.maldivas, route: 'PER \u2192 Maldives', sub: 'Singapore Air \u2022 Via SIN \u2022 14h', original: 'A$1,800', deal: 'A$590', tag: 'BUG' },
    { img: IMGS.seoul, route: 'MEL \u2192 Seoul', sub: 'Korean Air \u2022 Nonstop \u2022 10h', original: 'A$1,300', deal: 'A$420', tag: 'ERROR FARE' },
    { img: IMGS.paris, route: 'SYD \u2192 Paris', sub: 'Singapore Air \u2022 Via SIN \u2022 22h', original: 'A$2,000', deal: 'A$650', tag: 'GLITCH' },
    { img: IMGS.cancun, route: 'SYD \u2192 Canc\u00FAn', sub: 'United \u2022 Via LAX \u2022 22h', original: 'A$2,400', deal: 'A$780', tag: 'ERROR FARE' },
    { img: IMGS.capetown, route: 'PER \u2192 Cape Town', sub: 'South African \u2022 Via JNB \u2022 14h', original: 'A$1,600', deal: 'A$520', tag: 'DEAL' },
    { img: IMGS.nyc, route: 'SYD \u2192 New York', sub: 'Qantas \u2022 Via LAX \u2022 22h', original: 'A$2,300', deal: 'A$750', tag: 'MISTAKE' },
  ],
  AE: [
    { img: IMGS.london, route: 'DXB \u2192 London', sub: 'Emirates \u2022 Nonstop \u2022 7h', original: 'AED 3,800', deal: 'AED 1,200', tag: 'ERROR FARE' },
    { img: IMGS.bangkok, route: 'DXB \u2192 Bangkok', sub: 'flydubai \u2022 Nonstop \u2022 6h20', original: 'AED 2,900', deal: 'AED 890', tag: 'DEAL' },
    { img: IMGS.bali, route: 'DXB \u2192 Bali', sub: 'Emirates \u2022 Via SIN \u2022 12h', original: 'AED 4,200', deal: 'AED 1,400', tag: 'ERROR FARE' },
    { img: IMGS.paris, route: 'AUH \u2192 Paris', sub: 'Etihad \u2022 Nonstop \u2022 7h15', original: 'AED 3,600', deal: 'AED 1,100', tag: 'MISTAKE' },
    { img: IMGS.tokyo, route: 'DXB \u2192 Tokyo', sub: 'Emirates \u2022 Nonstop \u2022 9h40', original: 'AED 5,200', deal: 'AED 1,700', tag: 'ERROR FARE' },
    { img: IMGS.roma, route: 'DXB \u2192 Rome', sub: 'Emirates \u2022 Nonstop \u2022 6h15', original: 'AED 3,100', deal: 'AED 980', tag: 'DEAL' },
    { img: IMGS.maldivas, route: 'DXB \u2192 Maldives', sub: 'Emirates \u2022 Nonstop \u2022 4h30', original: 'AED 2,800', deal: 'AED 850', tag: 'BUG' },
    { img: IMGS.capetown, route: 'DXB \u2192 Cape Town', sub: 'Emirates \u2022 Nonstop \u2022 9h', original: 'AED 4,800', deal: 'AED 1,500', tag: 'ERROR FARE' },
    { img: IMGS.sydney, route: 'AUH \u2192 Sydney', sub: 'Etihad \u2022 Nonstop \u2022 14h', original: 'AED 5,500', deal: 'AED 1,800', tag: 'GLITCH' },
    { img: IMGS.seoul, route: 'DXB \u2192 Seoul', sub: 'Emirates \u2022 Nonstop \u2022 9h', original: 'AED 4,500', deal: 'AED 1,400', tag: 'MISTAKE' },
    { img: IMGS.nyc, route: 'DXB \u2192 New York', sub: 'Emirates \u2022 Nonstop \u2022 14h', original: 'AED 5,800', deal: 'AED 1,900', tag: 'ERROR FARE' },
    { img: IMGS.marrakech, route: 'DXB \u2192 Marrakech', sub: 'Emirates \u2022 Nonstop \u2022 8h', original: 'AED 3,200', deal: 'AED 990', tag: 'DEAL' },
  ],
};

// Fallback: mapeia pais pra grupo de deals
function getCountryGroup(country) {
  const map = {
    BR: 'BR', PT: 'BR',
    US: 'US', MX: 'US',
    GB: 'GB', IE: 'GB',
    AU: 'AU', NZ: 'AU',
    AE: 'AE', SA: 'AE', QA: 'AE', BH: 'AE', KW: 'AE', OM: 'AE',
    JP: 'JP', KR: 'KR',
    CH: 'CH', DE: 'EU', FR: 'EU', IT: 'EU', ES: 'EU', NL: 'EU', BE: 'EU',
    AT: 'EU', SE: 'EU', NO: 'EU', DK: 'EU', FI: 'EU', GR: 'EU', HR: 'EU',
    CA: 'CA',
  };
  return map[country] || 'US';
}

async function detectCountry() {
  try {
    const res = await fetch('/api/detect-country');
    return await res.json();
  } catch {
    return { country: 'US', lang: 'en', currency: { code: 'USD' } };
  }
}

function applyAll(lang, currCode, country) {
  const cGroup = getCountryGroup(country || 'US');
  const t = TEXTS[lang] || TEXTS.en;
  const p = PRICES[currCode] || PRICES.USD;

  // Hero
  document.getElementById('hero-tag').textContent = t.heroTag;
  document.getElementById('hero-title').innerHTML = t.heroTitle;
  document.getElementById('hero-desc').textContent = t.heroDesc;
  document.getElementById('btn-premium').textContent = t.btnPremium;
  document.getElementById('btn-free').textContent = t.btnFree;
  document.getElementById('hero-micro').textContent = t.heroMicro;

  // Proof
  document.getElementById('proof1-l').textContent = t.proof1;
  document.getElementById('proof2-l').textContent = t.proof2;
  document.getElementById('proof3-l').textContent = t.proof3;
  document.getElementById('proof4-l').textContent = t.proof4;

  // FOMO
  document.getElementById('fomo-title').textContent = t.fomoTitle;
  document.getElementById('fomo-sub').textContent = t.fomoSub;
  document.getElementById('fomo-cta').textContent = t.fomoCta;
  const fomoPool = FOMO_DEALS_BY_COUNTRY[cGroup] || FOMO_DEALS_BY_COUNTRY.US;
  const fomoCount = 6; // sempre 6 deals pra grid ficar cheio
  const fomoDeals = pickRandom(fomoPool, fomoCount);
  document.getElementById('fomo-grid').innerHTML = fomoDeals.map(d => {
    const time = randomTime(lang);
    return `
    <div class="fomo-card">
      <span class="expired-badge">\u274C ${t.expired}</span>
      <div class="fomo-route">\u2708\uFE0F ${d.route}</div>
      <div class="fomo-prices">
        <span class="fomo-original">${d.original}</span>
        <span class="fomo-deal">${d.deal}</span>
      </div>
      <span class="fomo-savings">${d.savings}</span>
      <div class="fomo-time">\u23F0 ${time}</div>
    </div>
  `}).join('');

  // Carousel / Roleta de deals
  document.getElementById('dest-title').textContent = t.destTitle;
  const destPool = DEST_DEALS_BY_COUNTRY[cGroup] || DEST_DEALS_BY_COUNTRY.US;
  const dests = shuffleArray(destPool).slice(0, 8);
  // Duplica os cards pra criar loop infinito
  const allDests = [...dests, ...dests];
  document.getElementById('carousel-track').innerHTML = allDests.map(d => `
    <div class="deal-slide">
      <span class="deal-slide-tag">${d.tag}</span>
      <img src="${d.img}" alt="${d.route}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80';this.onerror=null">
      <div class="deal-slide-info">
        <div class="deal-slide-route">\u2708\uFE0F ${d.route}</div>
        ${d.sub ? `<div class="deal-slide-sub">${d.sub}</div>` : ''}
        <div class="deal-slide-prices">
          <span class="deal-slide-original">${d.original}</span>
          <span class="deal-slide-deal">${d.deal}</span>
        </div>
      </div>
    </div>
  `).join('');

  // How
  document.getElementById('how-title').textContent = t.howTitle;
  document.getElementById('step1t').textContent = t.step1t;
  document.getElementById('step1d').textContent = t.step1d;
  document.getElementById('step2t').textContent = t.step2t;
  document.getElementById('step2d').textContent = t.step2d;
  document.getElementById('step3t').textContent = t.step3t;
  document.getElementById('step3d').textContent = t.step3d;

  // Compare
  document.getElementById('comp-title').textContent = t.compTitle;
  document.getElementById('comp-free').textContent = t.compFree;
  document.getElementById('comp-prem').textContent = t.compPrem;
  for (let i = 1; i <= 6; i++) document.getElementById(`comp${i}`).textContent = t[`comp${i}`];

  // Pricing
  document.getElementById('pricing-title').textContent = t.pricingTitle;
  document.getElementById('pricing-sub').textContent = t.pricingSub;
  document.getElementById('free-name').textContent = t.freeName;
  document.getElementById('free-price').textContent = t.freePrice;
  document.getElementById('free-cta').textContent = t.freeCta;
  document.querySelectorAll('.free-features li').forEach((el, i) => { const k = `freeF${i+1}`; if (t[k]) el.textContent = t[k]; });
  document.getElementById('prem-name').textContent = t.premName;
  document.getElementById('prem-price').innerHTML = `${p.symbol} ${p.premium}<small>${t.premPeriod}</small>`;
  document.getElementById('prem-cta').textContent = t.premCta;
  // Atualiza link do checkout pra moeda correta
  if (p.link && !p.link.startsWith('STRIPE_LINK_')) {
    document.getElementById('prem-cta').href = p.link;
    document.querySelector('.pulsing-cta').href = p.link;
  }
  document.getElementById('prem-badge').textContent = t.premBadge;
  document.getElementById('prem-micro').textContent = t.premMicro;
  document.querySelectorAll('.prem-features li').forEach((el, i) => { const k = `premF${i+1}`; if (t[k]) el.textContent = t[k]; });

  // Testimonials
  document.getElementById('test-title').textContent = t.testTitle;
  const avatars = document.querySelectorAll('.test-avatar');
  for (let i = 1; i <= 3; i++) {
    document.getElementById(`t${i}name`).textContent = t[`test${i}name`];
    document.getElementById(`t${i}route`).textContent = t[`test${i}route`];
    document.getElementById(`t${i}saved`).textContent = t[`test${i}saved`];
    document.getElementById(`t${i}quote`).textContent = `"${t[`test${i}quote`]}"`;
    // Update avatar letter from name (skip flag emoji)
    const rawName = t[`test${i}name`];
    const letterMatch = rawName.match(/[A-Za-z\u00C0-\u00FF]/);
    if (avatars[i-1] && letterMatch) avatars[i-1].textContent = letterMatch[0].toUpperCase();
  }

  // FAQ
  document.getElementById('faq-title').textContent = t.faqTitle;
  for (let i = 1; i <= 5; i++) {
    document.getElementById(`faq${i}q`).textContent = t[`faq${i}q`];
    document.getElementById(`faq${i}a`).textContent = t[`faq${i}a`];
  }

  // Final CTA
  document.getElementById('final-title').textContent = t.finalTitle;
  document.getElementById('final-desc').textContent = t.finalDesc;
  document.getElementById('final-cta').textContent = t.finalCta;
  document.getElementById('final-micro').textContent = t.finalMicro;

  // Footer
  document.getElementById('footer-text').textContent = `\u00A9 2026 ${t.footerText}`;
}

let currentLang = 'en';
let currentCurr = 'USD';
let currentCountry = 'US';

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.getElementById('lang-badge').textContent = lang === 'pt' ? '\ud83c\udde7\ud83c\uddf7 PT-BR' : '\ud83c\udf0d EN';
  document.getElementById('pulse-text').textContent = lang === 'pt' ? 'Quero Meus Alertas!' : 'Get Alerts Now';
  applyAll(lang, currentCurr, currentCountry);
}

document.addEventListener('DOMContentLoaded', async () => {
  const data = await detectCountry();
  currentLang = data.lang || 'en';
  currentCurr = data.currency?.code || 'USD';
  currentCountry = data.country || 'US';
  setLang(currentLang);

  // Language toggle
  document.getElementById('lang-badge').addEventListener('click', () => {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    setLang(currentLang);
  });
  document.getElementById('lang-badge').style.cursor = 'pointer';

  // FAQ toggle
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => q.parentElement.classList.toggle('open'));
  });
});
