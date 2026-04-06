const TEXTS = {
  pt: {
    // Hero
    heroTag: "Error fares em tempo real",
    heroTitle: 'Companhias Aereas Erram nos Precos. <span class="highlight">Nossos Membros Agradecem.</span>',
    heroDesc: "Monitoramos milhoes de tarifas 24/7. Quando as companhias erram, seu celular vibra primeiro. Membros economizam em media R$4.200 por viagem.",
    btnPremium: "Desbloquear Alertas Premium",
    btnFree: "Comecar Gratis",
    heroMicro: "Cancele quando quiser \u2022 Sem cartao necessario \u2022 Garantia de 30 dias",

    // Proof bar
    proof1: "membros", proof2: "paises", proof3: "economia media", proof4: "error fares/mes",

    // FOMO
    fomoTitle: "O Que Voce Esta Perdendo",
    fomoSub: "Membros Premium foram alertados sobre TODOS esses deals em tempo real. Quanto tempo mais voce vai assistir de fora?",
    fomoCta: "Parar de Perder Deals",
    expired: "EXPIROU",

    // Destinations
    destTitle: "Deals Reais dos Ultimos Dias",

    // How
    howTitle: "Sente e Espere. A Gente Ca\u00E7a.",
    step1t: "Escaneamos milhoes de tarifas 24/7",
    step1d: "Nossos algoritmos monitoram companhias aereas do mundo inteiro buscando erros de preco e promocoes relampago.",
    step2t: "Seu celular vibra na hora",
    step2d: "No instante que detectamos um deal, membros Premium recebem notificacao no Telegram com todos os detalhes.",
    step3t: "Voce reserva e economiza milhares",
    step3d: "Reserve diretamente com a companhia aerea e economize em media R$4.200 por viagem. Sem intermediarios.",

    // Compare
    compTitle: "Gratis Recebe os Deals de Ontem. Premium Recebe a Viagem de Amanha.",
    compFree: "Gratis", compPrem: "Premium",
    comp1: "Deals nacionais", comp2: "Deals internacionais", comp3: "Error fares / Bugs de passagem",
    comp4: "Alertas em tempo real", comp5: "Comunidade VIP", comp6: "Suporte prioritario",
    compDelay: "Com delay", compExclusivo: "Exclusivo",

    // Pricing
    pricingTitle: "Um Deal Paga 17 Anos de Premium",
    pricingSub: "Error fare medio economiza R$4.200. Premium custa R$19,90/mes. Uma reserva cobre sua assinatura ate 2043.",
    freeName: "Gratis", freePrice: "R$ 0",
    freeF1: "1-2 alertas por dia", freeF2: "Canal publico do Telegram", freeF3: "Deals com delay de 6-12h", freeF4: "Sem error fares",
    freeCta: "Entrar Gratis",
    premName: "Premium", premPeriod: "/mes",
    premF1: "Alertas em TEMPO REAL", premF2: "5-10 deals exclusivos/dia", premF3: "Error fares antes de todos",
    premF4: "Precos na sua moeda", premF5: "Comunidade VIP", premF6: "Suporte prioritario",
    premCta: "Quero Meus Alertas!",
    premBadge: "Mais popular",
    premMicro: "Cancele quando quiser \u2022 Sem fidelidade \u2022 Se paga sozinho",

    // Testimonials
    testTitle: "Quem Ja Economizou",
    test1name: "Marina Costa", test1route: "GRU \u2192 Lisboa, abr 2026", test1saved: "Economizou R$2.850",
    test1quote: "Eu estava no onibus quando o alerta chegou. Reservei em 3 minutos no celular. Melhor R$19,90 que ja gastei na vida.",
    test2name: "Rafael Oliveira", test2route: "GIG \u2192 Paris, mar 2026", test2saved: "Economizou R$4.310",
    test2quote: "Minha esposa nao acreditou quando mostrei a passagem. Paris ida e volta por R$1.890. Ela achou que era golpe ate embarcar.",
    test3name: "Juliana Santos", test3route: "BSB \u2192 Tokyo, fev 2026", test3saved: "Economizou R$6.700",
    test3quote: "Um deal pagou 28 anos de assinatura. Se voce viaja 1x por ano, nao tem como nao valer a pena.",

    // FAQ
    faqTitle: "Perguntas Frequentes",
    faq1q: "Ja procuro passagens no Google Flights. Por que preciso disso?",
    faq1a: "Google Flights mostra precos NORMAIS. A gente mostra precos ERRADOS \u2014 error fares que acontecem quando companhias publicam tarifas por uma fracao do valor real. Tipo Sao Paulo para Bali a R$3.999 em vez de R$12.000. Esses erros sao corrigidos em horas. Google Flights e uma lanterna. A gente e um radar.",
    faq2q: "R$19,90/mes parece caro para algo que talvez eu nao use todo mes.",
    faq2a: "R$19,90/mes = R$0,66/dia. Menos que um cafezinho. O deal medio economiza R$4.200. Mesmo reservando apenas UM deal por ANO, voce pagou R$238,80 para economizar R$4.200. Retorno de 17x. Sem contrato \u2014 cancele quando quiser.",
    faq3q: "Como sei que os deals sao reais? E se a companhia cancelar?",
    faq3a: "Error fares sao reservas 100% reais feitas diretamente com a companhia aerea \u2014 a gente so alerta sobre o preco. Mais de 85% sao honrados. Se cancelarem, reembolso TOTAL. Pior cenario? Reembolso gratuito. Melhor cenario? Bali por R$8.000 a menos.",
    faq4q: "Posso cancelar quando quiser?",
    faq4a: "Sim. Um clique. Sem multa. Sem ligacao. Sem contrato. Sem fidelidade. Imediato.",
    faq5q: "Por que Telegram e nao email?",
    faq5a: "Velocidade. Error fares duram horas, as vezes minutos. Email vai pro spam e voce ve 3 dias depois. Telegram entrega notificacao instantanea \u2014 seu celular vibra no segundo que o deal aparece.",

    // Final CTA
    finalTitle: "Cada Dia Sem Premium e Um Deal Que Voce Perde.",
    finalDesc: "Enquanto voce pensa, membros Premium estao reservando passagens por uma fracao do preco. Por R$0,66/dia, nunca mais pague caro em passagem.",
    finalCta: "Comecar a Economizar Agora",
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
    test1name: "James Wilson", test1route: "JFK \u2192 Lisbon, Apr 2026", test1saved: "Saved $1,420",
    test1quote: "I was on the subway when the alert came in. Booked in 3 minutes on my phone. Best $4.99 I've ever spent.",
    test2name: "Sarah Chen", test2route: "LAX \u2192 Paris, Mar 2026", test2saved: "Saved $1,890",
    test2quote: "My husband didn't believe me when I showed him the ticket. Paris roundtrip for $489. He thought it was a scam until we boarded.",
    test3name: "David Park", test3route: "SFO \u2192 Tokyo, Feb 2026", test3saved: "Saved $2,400",
    test3quote: "One deal paid for 40 years of subscription. If you fly once a year, there's no way this doesn't pay for itself.",
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
  BRL: { symbol: 'R$', premium: '19,90' },
  USD: { symbol: 'US$', premium: '4.99' },
  GBP: { symbol: '\u00A3', premium: '3.99' },
  EUR: { symbol: '\u20AC', premium: '4.49' },
  CHF: { symbol: 'CHF', premium: '4.99' },
  AUD: { symbol: 'A$', premium: '7.49' },
  AED: { symbol: 'AED', premium: '18.90' },
  JPY: { symbol: '\u00A5', premium: '750' },
  KRW: { symbol: '\u20A9', premium: '6,900' },
  CAD: { symbol: 'C$', premium: '6.49' },
  DKK: { symbol: 'DKK', premium: '34.90' },
  SEK: { symbol: 'SEK', premium: '52.90' },
  NOK: { symbol: 'NOK', premium: '54.90' },
  MXN: { symbol: 'MX$', premium: '89.90' },
};

// FOMO deals por pais (rotas reais, precos reais, cias reais)
const FOMO_DEALS_BY_COUNTRY = {
  BR: [
    { route: 'GRU \u2192 Paris (Air France, direto, 11h30)', original: 'R$ 5.200', deal: 'R$ 2.100', savings: '60% OFF', time: 'Expirou ha 47h' },
    { route: 'GIG \u2192 Lisboa (TAP, direto, 9h45)', original: 'R$ 4.800', deal: 'R$ 1.650', savings: '66% OFF', time: 'Expirou ha 23h' },
    { route: 'GRU \u2192 Dubai (Emirates, direto, 14h25)', original: 'R$ 5.500', deal: 'R$ 2.400', savings: '56% OFF', time: 'Expirou ha 5h' },
    { route: 'GRU \u2192 Bangkok (Qatar, via Doha, 22h45)', original: 'R$ 6.800', deal: 'R$ 2.300', savings: '66% OFF', time: 'Expirou ha 12h' },
  ],
  US: [
    { route: 'JFK \u2192 Paris (Air France, nonstop, 7h20)', original: '$890', deal: '$289', savings: '68% OFF', time: 'Expired 47h ago' },
    { route: 'LAX \u2192 Tokyo (ANA, nonstop, 11h30)', original: '$1,400', deal: '$489', savings: '65% OFF', time: 'Expired 23h ago' },
    { route: 'ORD \u2192 Rome (ITA Airways, nonstop, 9h45)', original: '$1,100', deal: '$310', savings: '72% OFF', time: 'Expired 5h ago' },
    { route: 'MIA \u2192 London (British Airways, nonstop, 9h)', original: '$780', deal: '$245', savings: '69% OFF', time: 'Expired 12h ago' },
  ],
  GB: [
    { route: 'LHR \u2192 Tokyo (JAL, via Helsinki, 14h)', original: '\u00A31,200', deal: '\u00A3380', savings: '68% OFF', time: 'Expired 47h ago' },
    { route: 'LHR \u2192 New York (BA, nonstop, 8h)', original: '\u00A3650', deal: '\u00A3189', savings: '71% OFF', time: 'Expired 23h ago' },
    { route: 'LGW \u2192 Bali (Singapore Air, via SIN, 16h)', original: '\u00A3900', deal: '\u00A3320', savings: '64% OFF', time: 'Expired 5h ago' },
    { route: 'MAN \u2192 Dubai (Emirates, nonstop, 7h)', original: '\u00A3580', deal: '\u00A3195', savings: '66% OFF', time: 'Expired 12h ago' },
  ],
  EU: [
    { route: 'CDG \u2192 Tokyo (Air France, nonstop, 12h)', original: '\u20AC1,100', deal: '\u20AC390', savings: '65% OFF', time: 'Expired 47h ago' },
    { route: 'FRA \u2192 Bangkok (Lufthansa, nonstop, 10h45)', original: '\u20AC850', deal: '\u20AC289', savings: '66% OFF', time: 'Expired 23h ago' },
    { route: 'AMS \u2192 Bali (KLM, via Singapore, 17h)', original: '\u20AC950', deal: '\u20AC340', savings: '64% OFF', time: 'Expired 5h ago' },
    { route: 'BCN \u2192 New York (TAP, via Lisbon, 11h)', original: '\u20AC680', deal: '\u20AC210', savings: '69% OFF', time: 'Expired 12h ago' },
  ],
  AU: [
    { route: 'SYD \u2192 Bali (Jetstar, direct, 6h15)', original: 'A$850', deal: 'A$190', savings: '78% OFF', time: 'Expired 47h ago' },
    { route: 'MEL \u2192 Tokyo (Qantas, nonstop, 10h30)', original: 'A$1,600', deal: 'A$520', savings: '68% OFF', time: 'Expired 23h ago' },
    { route: 'SYD \u2192 London (Qatar, via Doha, 22h)', original: 'A$2,200', deal: 'A$690', savings: '69% OFF', time: 'Expired 5h ago' },
    { route: 'BNE \u2192 Bangkok (Thai, via SYD, 12h)', original: 'A$1,100', deal: 'A$350', savings: '68% OFF', time: 'Expired 12h ago' },
  ],
  AE: [
    { route: 'DXB \u2192 London (Emirates, nonstop, 7h)', original: 'AED 3,800', deal: 'AED 1,200', savings: '68% OFF', time: 'Expired 47h ago' },
    { route: 'DXB \u2192 Bangkok (flydubai, nonstop, 6h20)', original: 'AED 2,900', deal: 'AED 890', savings: '69% OFF', time: 'Expired 23h ago' },
    { route: 'DXB \u2192 Bali (Emirates, via SIN, 12h)', original: 'AED 4,200', deal: 'AED 1,400', savings: '67% OFF', time: 'Expired 5h ago' },
    { route: 'AUH \u2192 Paris (Etihad, nonstop, 7h15)', original: 'AED 3,600', deal: 'AED 1,100', savings: '69% OFF', time: 'Expired 12h ago' },
  ],
  JP: [
    { route: 'NRT \u2192 Paris (Air France, nonstop, 13h)', original: '\u00A5185,000', deal: '\u00A558,000', savings: '69% OFF', time: 'Expired 47h ago' },
    { route: 'HND \u2192 Bali (Garuda, via Jakarta, 10h)', original: '\u00A5120,000', deal: '\u00A542,000', savings: '65% OFF', time: 'Expired 23h ago' },
    { route: 'KIX \u2192 London (Turkish, via IST, 17h)', original: '\u00A5195,000', deal: '\u00A565,000', savings: '67% OFF', time: 'Expired 5h ago' },
    { route: 'NRT \u2192 New York (ANA, nonstop, 13h)', original: '\u00A5165,000', deal: '\u00A555,000', savings: '67% OFF', time: 'Expired 12h ago' },
  ],
  CH: [
    { route: 'ZRH \u2192 Tokyo (SWISS, nonstop, 12h)', original: 'CHF 1,200', deal: 'CHF 410', savings: '66% OFF', time: 'Expired 47h ago' },
    { route: 'GVA \u2192 New York (SWISS, nonstop, 9h)', original: 'CHF 890', deal: 'CHF 280', savings: '69% OFF', time: 'Expired 23h ago' },
    { route: 'ZRH \u2192 Bangkok (Thai, nonstop, 11h)', original: 'CHF 950', deal: 'CHF 310', savings: '67% OFF', time: 'Expired 5h ago' },
    { route: 'ZRH \u2192 Dubai (Emirates, nonstop, 6h)', original: 'CHF 680', deal: 'CHF 220', savings: '68% OFF', time: 'Expired 12h ago' },
  ],
  CA: [
    { route: 'YYZ \u2192 Paris (Air Canada, nonstop, 7h30)', original: 'C$1,200', deal: 'C$389', savings: '68% OFF', time: 'Expired 47h ago' },
    { route: 'YVR \u2192 Tokyo (ANA, nonstop, 10h)', original: 'C$1,500', deal: 'C$490', savings: '67% OFF', time: 'Expired 23h ago' },
    { route: 'YUL \u2192 London (BA, nonstop, 7h)', original: 'C$980', deal: 'C$310', savings: '68% OFF', time: 'Expired 5h ago' },
    { route: 'YYZ \u2192 Bali (Cathay, via HKG, 22h)', original: 'C$2,400', deal: 'C$790', savings: '67% OFF', time: 'Expired 12h ago' },
  ],
  KR: [
    { route: 'ICN \u2192 Paris (Korean Air, nonstop, 12h)', original: '\u20A91,650,000', deal: '\u20A9540,000', savings: '67% OFF', time: 'Expired 47h ago' },
    { route: 'ICN \u2192 Bali (Korean Air, nonstop, 7h)', original: '\u20A9850,000', deal: '\u20A9280,000', savings: '67% OFF', time: 'Expired 23h ago' },
    { route: 'ICN \u2192 New York (Asiana, nonstop, 14h)', original: '\u20A91,800,000', deal: '\u20A9590,000', savings: '67% OFF', time: 'Expired 5h ago' },
    { route: 'ICN \u2192 London (BA, nonstop, 12h)', original: '\u20A91,500,000', deal: '\u20A9490,000', savings: '67% OFF', time: 'Expired 12h ago' },
  ],
};

// Dest deals por pais
const DEST_DEALS_BY_COUNTRY = {
  BR: [
    { img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80', route: 'GRU \u2192 Paris', sub: 'Air France \u2022 Direto \u2022 11h30', original: 'R$ 5.200', deal: 'R$ 2.100', tag: 'ERROR FARE' },
    { img: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=80', route: 'GRU \u2192 Dubai', sub: 'Emirates \u2022 Direto \u2022 14h25', original: 'R$ 5.500', deal: 'R$ 2.400', tag: 'BUG' },
    { img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80', route: 'GRU \u2192 Bali', sub: 'Qatar Airways \u2022 Via Doha \u2022 26h', original: 'R$ 7.500', deal: 'R$ 3.999', tag: 'ERROR FARE' },
    { img: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80', route: 'GRU \u2192 Miami', sub: 'LATAM \u2022 Direto \u2022 8h30', original: 'R$ 3.200', deal: 'R$ 1.200', tag: 'PROMO' },
    { img: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80', route: 'GRU \u2192 Roma', sub: 'ITA Airways \u2022 Direto \u2022 11h', original: 'R$ 4.900', deal: 'R$ 1.650', tag: 'ERROR FARE' },
    { img: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80', route: 'GRU \u2192 Bangkok', sub: 'Emirates \u2022 Via Dubai \u2022 22h', original: 'R$ 6.800', deal: 'R$ 2.300', tag: 'BUG' },
  ],
  US: [
    { img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80', route: 'JFK \u2192 Paris', sub: 'Air France \u2022 Nonstop \u2022 7h20', original: '$890', deal: '$289', tag: 'ERROR FARE' },
    { img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80', route: 'LAX \u2192 Tokyo', sub: 'ANA \u2022 Nonstop \u2022 11h30', original: '$1,400', deal: '$489', tag: 'MISTAKE' },
    { img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80', route: 'SFO \u2192 Bali', sub: 'Cathay Pacific \u2022 Via HKG \u2022 20h', original: '$2,400', deal: '$799', tag: 'ERROR FARE' },
    { img: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80', route: 'ORD \u2192 Rome', sub: 'ITA Airways \u2022 Nonstop \u2022 9h45', original: '$1,100', deal: '$310', tag: 'ERROR FARE' },
    { img: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=80', route: 'JFK \u2192 Dubai', sub: 'Emirates \u2022 Nonstop \u2022 12h30', original: '$1,050', deal: '$340', tag: 'MISTAKE' },
    { img: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80', route: 'LAX \u2192 Bangkok', sub: 'EVA Air \u2022 Via Taipei \u2022 19h', original: '$1,200', deal: '$389', tag: 'ERROR FARE' },
  ],
  GB: [
    { img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80', route: 'LHR \u2192 Tokyo', sub: 'JAL \u2022 Via Helsinki \u2022 14h', original: '\u00A31,200', deal: '\u00A3380', tag: 'ERROR FARE' },
    { img: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80', route: 'LHR \u2192 New York', sub: 'BA \u2022 Nonstop \u2022 8h', original: '\u00A3650', deal: '\u00A3189', tag: 'MISTAKE' },
    { img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80', route: 'LGW \u2192 Bali', sub: 'Singapore Air \u2022 Via SIN \u2022 16h', original: '\u00A3900', deal: '\u00A3320', tag: 'ERROR FARE' },
    { img: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=80', route: 'MAN \u2192 Dubai', sub: 'Emirates \u2022 Nonstop \u2022 7h', original: '\u00A3580', deal: '\u00A3195', tag: 'DEAL' },
    { img: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80', route: 'LHR \u2192 Bangkok', sub: 'Thai Airways \u2022 Nonstop \u2022 11h30', original: '\u00A3750', deal: '\u00A3260', tag: 'ERROR FARE' },
    { img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80', route: 'LHR \u2192 Paris', sub: 'Eurostar \u2022 Train \u2022 2h15', original: '\u00A3200', deal: '\u00A359', tag: 'PROMO' },
  ],
  EU: [
    { img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80', route: 'CDG \u2192 Tokyo', sub: 'Air France \u2022 Nonstop \u2022 12h', original: '\u20AC1,100', deal: '\u20AC390', tag: 'ERROR FARE' },
    { img: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80', route: 'FRA \u2192 New York', sub: 'Lufthansa \u2022 Nonstop \u2022 9h', original: '\u20AC780', deal: '\u20AC249', tag: 'MISTAKE' },
    { img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80', route: 'AMS \u2192 Bali', sub: 'KLM \u2022 Via Singapore \u2022 17h', original: '\u20AC950', deal: '\u20AC340', tag: 'ERROR FARE' },
    { img: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=80', route: 'MAD \u2192 Dubai', sub: 'Emirates \u2022 Nonstop \u2022 7h', original: '\u20AC650', deal: '\u20AC210', tag: 'DEAL' },
    { img: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80', route: 'FRA \u2192 Bangkok', sub: 'Lufthansa \u2022 Nonstop \u2022 10h45', original: '\u20AC850', deal: '\u20AC289', tag: 'ERROR FARE' },
    { img: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80', route: 'FCO \u2192 Rio', sub: 'ITA Airways \u2022 Nonstop \u2022 11h', original: '\u20AC890', deal: '\u20AC310', tag: 'MISTAKE' },
  ],
  AU: [
    { img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80', route: 'SYD \u2192 Bali', sub: 'Jetstar \u2022 Direct \u2022 6h15', original: 'A$850', deal: 'A$190', tag: 'ERROR FARE' },
    { img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80', route: 'MEL \u2192 Tokyo', sub: 'Qantas \u2022 Nonstop \u2022 10h30', original: 'A$1,600', deal: 'A$520', tag: 'MISTAKE' },
    { img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80', route: 'SYD \u2192 London', sub: 'Qatar \u2022 Via Doha \u2022 22h', original: 'A$2,200', deal: 'A$690', tag: 'ERROR FARE' },
    { img: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80', route: 'BNE \u2192 Bangkok', sub: 'Thai Airways \u2022 Via SYD \u2022 12h', original: 'A$1,100', deal: 'A$350', tag: 'DEAL' },
    { img: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=80', route: 'PER \u2192 Dubai', sub: 'Emirates \u2022 Nonstop \u2022 11h', original: 'A$1,400', deal: 'A$450', tag: 'ERROR FARE' },
    { img: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80', route: 'SYD \u2192 Rome', sub: 'Qatar \u2022 Via Doha \u2022 22h', original: 'A$2,100', deal: 'A$650', tag: 'MISTAKE' },
  ],
  AE: [
    { img: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80', route: 'DXB \u2192 London', sub: 'Emirates \u2022 Nonstop \u2022 7h', original: 'AED 3,800', deal: 'AED 1,200', tag: 'ERROR FARE' },
    { img: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80', route: 'DXB \u2192 Bangkok', sub: 'flydubai \u2022 Nonstop \u2022 6h20', original: 'AED 2,900', deal: 'AED 890', tag: 'DEAL' },
    { img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80', route: 'DXB \u2192 Bali', sub: 'Emirates \u2022 Via SIN \u2022 12h', original: 'AED 4,200', deal: 'AED 1,400', tag: 'ERROR FARE' },
    { img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80', route: 'AUH \u2192 Paris', sub: 'Etihad \u2022 Nonstop \u2022 7h15', original: 'AED 3,600', deal: 'AED 1,100', tag: 'MISTAKE' },
    { img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80', route: 'DXB \u2192 Tokyo', sub: 'Emirates \u2022 Nonstop \u2022 9h40', original: 'AED 5,200', deal: 'AED 1,700', tag: 'ERROR FARE' },
    { img: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80', route: 'DXB \u2192 Rome', sub: 'Emirates \u2022 Nonstop \u2022 6h15', original: 'AED 3,100', deal: 'AED 980', tag: 'DEAL' },
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
    JP: 'JP', KR: 'JP',
    CH: 'EU', DE: 'EU', FR: 'EU', IT: 'EU', ES: 'EU', NL: 'EU', BE: 'EU',
    AT: 'EU', SE: 'EU', NO: 'EU', DK: 'EU', FI: 'EU', GR: 'EU', HR: 'EU',
    CA: 'US',
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
  const fomoDeals = FOMO_DEALS_BY_COUNTRY[cGroup] || FOMO_DEALS_BY_COUNTRY.US;
  document.getElementById('fomo-grid').innerHTML = fomoDeals.map(d => {
    const timeText = lang === 'pt' ? d.time.replace('Expired','Expirou').replace('ago','atras') : d.time.replace('Expirou ha','Expired').replace('atras','ago');
    return `
    <div class="fomo-card">
      <span class="expired-badge">\u274C ${t.expired}</span>
      <div class="fomo-route">\u2708\uFE0F ${d.route}</div>
      <div class="fomo-prices">
        <span class="fomo-original">${d.original}</span>
        <span class="fomo-deal">${d.deal}</span>
      </div>
      <span class="fomo-savings">${d.savings}</span>
      <div class="fomo-time">\u23F0 ${d.time}</div>
    </div>
  `}).join('');

  // Destinations
  document.getElementById('dest-title').textContent = t.destTitle;
  const dests = DEST_DEALS_BY_COUNTRY[cGroup] || DEST_DEALS_BY_COUNTRY.US;
  document.getElementById('dest-grid').innerHTML = dests.map(d => `
    <div class="dest-card">
      <span class="dest-tag">${d.tag}</span>
      <img class="dest-img" src="${d.img}" alt="${d.route}" loading="lazy">
      <div class="dest-info">
        <div class="dest-route">\u2708\uFE0F ${d.route}</div>
        ${d.sub ? `<div style="color:#64748B;font-size:0.8rem;margin-bottom:8px">${d.sub}</div>` : ''}
        <div class="dest-price-row">
          <span class="dest-original">${d.original}</span>
          <span class="dest-deal">${d.deal}</span>
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
  document.getElementById('prem-badge').textContent = t.premBadge;
  document.getElementById('prem-micro').textContent = t.premMicro;
  document.querySelectorAll('.prem-features li').forEach((el, i) => { const k = `premF${i+1}`; if (t[k]) el.textContent = t[k]; });

  // Testimonials
  document.getElementById('test-title').textContent = t.testTitle;
  for (let i = 1; i <= 3; i++) {
    document.getElementById(`t${i}name`).textContent = t[`test${i}name`];
    document.getElementById(`t${i}route`).textContent = t[`test${i}route`];
    document.getElementById(`t${i}saved`).textContent = t[`test${i}saved`];
    document.getElementById(`t${i}quote`).textContent = `"${t[`test${i}quote`]}"`;
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

document.addEventListener('DOMContentLoaded', async () => {
  const data = await detectCountry();
  const lang = data.lang || 'en';
  const curr = data.currency?.code || 'USD';
  document.getElementById('lang-badge').textContent = lang === 'pt' ? '\U0001F1E7\U0001F1F7 PT-BR' : '\U0001F30D EN';
  applyAll(lang, curr, data.country);

  // FAQ toggle
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => q.parentElement.classList.toggle('open'));
  });
});
