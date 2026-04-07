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
    pricingTitle: "One Deal Pays for 35 Years of Premium",
    pricingSub: "Average error fare saves $2,100. Premium costs $4.99/mo. One booking covers your subscription until 2061.",
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
  },
  es: {
    heroTag: "Error fares en tiempo real",
    heroTitle: 'Las Aerol\u00EDneas Cometen Errores de Precio. <span class="highlight">Nuestros Miembros lo Aprovechan.</span>',
    heroDesc: "Monitoreamos millones de tarifas 24/7. Cuando las aerol\u00EDneas se equivocan, tu m\u00F3vil vibra primero. Ahorro promedio de \u20AC2.100 por viaje.",
    btnPremium: "Desbloquear Alertas Premium", btnFree: "Empezar Gratis",
    heroMicro: "Cancela cuando quieras \u2022 Sin tarjeta \u2022 Garant\u00EDa 30 d\u00EDas",
    proof1: "miembros", proof2: "pa\u00EDses", proof3: "ahorro medio", proof4: "error fares/mes",
    fomoTitle: "Lo Que Te Est\u00E1s Perdiendo", fomoSub: "Los miembros Premium recibieron alertas de TODAS estas ofertas en tiempo real.", fomoCta: "Dejar de Perder Ofertas", expired: "EXPIRADO",
    destTitle: "Ofertas Reales de los \u00DAltimos D\u00EDas",
    howTitle: "Si\u00E9ntate. Nosotros Cazamos.", step1t: "Escaneamos millones de tarifas 24/7", step1d: "Nuestros algoritmos monitorizan aerol\u00EDneas en todo el mundo.", step2t: "Tu m\u00F3vil vibra al instante", step2d: "En cuanto detectamos una oferta, los miembros Premium reciben notificaci\u00F3n en Telegram.", step3t: "Reservas y ahorras miles", step3d: "Reserva directamente con la aerol\u00EDnea. Sin intermediarios.",
    compTitle: "Gratis Recibe las Ofertas de Ayer. Premium Recibe el Viaje de Ma\u00F1ana.", compFree: "Gratis", compPrem: "Premium",
    comp1: "Ofertas nacionales", comp2: "Ofertas internacionales", comp3: "Error fares / Errores de precio", comp4: "Alertas en tiempo real", comp5: "Comunidad VIP", comp6: "Soporte prioritario",
    pricingTitle: "Una Oferta Paga 35 A\u00F1os de Premium", pricingSub: "El error fare medio ahorra \u20AC2.100. Premium cuesta \u20AC4,99/mes. Una reserva cubre tu suscripci\u00F3n hasta 2061.",
    freeName: "Gratis", freePrice: "\u20AC0", freeF1: "1-2 alertas al d\u00EDa", freeF2: "Canal p\u00FAblico de Telegram", freeF3: "Ofertas con 6-12h de retraso", freeF4: "Sin error fares", freeCta: "Unirse Gratis",
    premName: "Premium", premPeriod: "/mes", premF1: "Alertas en TIEMPO REAL", premF2: "5-10 ofertas exclusivas/d\u00EDa", premF3: "Error fares antes que nadie", premF4: "Precios en tu moneda", premF5: "Comunidad VIP", premF6: "Soporte prioritario", premCta: "\u00A1Quiero Mis Alertas!", premBadge: "M\u00E1s popular", premMicro: "Cancela cuando quieras \u2022 Sin compromiso \u2022 Se paga solo",
    testTitle: "Miembros Que Ahorraron", test1name: "\ud83c\uddea\ud83c\uddf8 Carlos Garc\u00EDa", test1route: "MAD \u2192 Tokyo, abr 2026", test1saved: "Ahorr\u00F3 \u20AC1.890", test1quote: "Madrid a Tokyo por \u20AC390 ida y vuelta. Normalmente cuesta \u20AC1.100. Lo reserv\u00E9 en 5 minutos desde el m\u00F3vil.",
    test2name: "\ud83c\uddf2\ud83c\uddfd Ana Rodr\u00EDguez", test2route: "MEX \u2192 Par\u00EDs, mar 2026", test2saved: "Ahorr\u00F3 $1.650", test2quote: "Ciudad de M\u00E9xico a Par\u00EDs por $340. No me lo pod\u00EDa creer. El mejor dinero que gasto cada mes.",
    test3name: "\ud83c\udde6\ud83c\uddf7 Diego Fern\u00E1ndez", test3route: "EZE \u2192 Roma, feb 2026", test3saved: "Ahorr\u00F3 $2.100", test3quote: "Buenos Aires a Roma por $410. Una oferta cubri\u00F3 35 a\u00F1os de suscripci\u00F3n. Incre\u00EDble.",
    faqTitle: "Preguntas Frecuentes", faq1q: "\u00BFYa uso Google Flights. Por qu\u00E9 necesito esto?", faq1a: "Google Flights muestra precios NORMALES. Nosotros mostramos precios ERR\u00D3NEOS \u2014 error fares. Estos errores se corrigen en horas. Google Flights es una linterna. Nosotros somos un radar.",
    faq2q: "\u20AC4,99/mes parece caro.", faq2a: "\u20AC4,99/mes = \u20AC0,17/d\u00EDa. Menos que un caf\u00E9. El ahorro medio es \u20AC2.100. Retorno de 35x. Sin contrato.",
    faq3q: "\u00BFC\u00F3mo s\u00E9 que las ofertas son reales?", faq3a: "Los error fares son reservas 100% reales. M\u00E1s del 85% se respetan. Si cancelan, reembolso TOTAL.",
    faq4q: "\u00BFPuedo cancelar cuando quiera?", faq4a: "S\u00ED. Un clic. Sin penalizaci\u00F3n. Sin contrato. Inmediato.",
    faq5q: "\u00BFPor qu\u00E9 Telegram y no email?", faq5a: "Velocidad. Los error fares duran horas. El email va al spam. Telegram entrega notificaciones instant\u00E1neas.",
    finalTitle: "Cada D\u00EDa Sin Premium Es una Oferta Perdida.", finalDesc: "Mientras lo piensas, los miembros Premium reservan vuelos a una fracci\u00F3n del precio.", finalCta: "Empezar a Ahorrar", finalMicro: "Cancela cuando quieras \u2022 Garant\u00EDa 30 d\u00EDas \u2022 Se paga solo",
    footerText: "Travel Alerts Bot. Todos los derechos reservados.",
  },
  fr: {
    heroTag: "Error fares en temps r\u00E9el",
    heroTitle: 'Les Compagnies Font des Erreurs de Prix. <span class="highlight">Nos Membres en Profitent.</span>',
    heroDesc: "Nous surveillons des millions de tarifs 24/7. Quand les compagnies se trompent, votre t\u00E9l\u00E9phone vibre en premier. \u00C9conomie moyenne de \u20AC2.100 par voyage.",
    btnPremium: "D\u00E9bloquer les Alertes Premium", btnFree: "Commencer Gratuitement",
    heroMicro: "Annulez \u00E0 tout moment \u2022 Sans carte \u2022 Garantie 30 jours",
    proof1: "membres", proof2: "pays", proof3: "\u00E9co. moyenne", proof4: "error fares/mois",
    fomoTitle: "Ce Que Vous Ratez", fomoSub: "Les membres Premium ont \u00E9t\u00E9 alert\u00E9s de TOUTES ces offres en temps r\u00E9el.", fomoCta: "Arr\u00EAter de Rater", expired: "EXPIR\u00C9",
    destTitle: "Offres R\u00E9elles des Derniers Jours",
    howTitle: "Installez-vous. On Chasse.", step1t: "Nous scannons des millions de tarifs 24/7", step1d: "Nos algorithmes surveillent les compagnies a\u00E9riennes du monde entier.", step2t: "Votre t\u00E9l\u00E9phone vibre instantan\u00E9ment", step2d: "D\u00E8s qu'on d\u00E9tecte une offre, les membres Premium re\u00E7oivent une notification Telegram.", step3t: "Vous r\u00E9servez et \u00E9conomisez des milliers", step3d: "R\u00E9servez directement avec la compagnie. Sans interm\u00E9diaires.",
    compTitle: "Gratuit Re\u00E7oit les Offres d'Hier. Premium Re\u00E7oit le Voyage de Demain.", compFree: "Gratuit", compPrem: "Premium",
    comp1: "Offres nationales", comp2: "Offres internationales", comp3: "Error fares", comp4: "Alertes en temps r\u00E9el", comp5: "Communaut\u00E9 VIP", comp6: "Support prioritaire",
    pricingTitle: "Une Offre Paie 35 Ans de Premium", pricingSub: "L'error fare moyen \u00E9conomise \u20AC2.100. Premium co\u00FBte \u20AC4,99/mois.",
    freeName: "Gratuit", freePrice: "\u20AC0", freeF1: "1-2 alertes/jour", freeF2: "Canal Telegram public", freeF3: "Offres avec 6-12h de retard", freeF4: "Sans error fares", freeCta: "Rejoindre Gratuitement",
    premName: "Premium", premPeriod: "/mois", premF1: "Alertes en TEMPS R\u00C9EL", premF2: "5-10 offres exclusives/jour", premF3: "Error fares avant tout le monde", premF4: "Prix dans votre devise", premF5: "Communaut\u00E9 VIP", premF6: "Support prioritaire", premCta: "Je Veux Mes Alertes!", premBadge: "Le plus populaire", premMicro: "Annulez quand vous voulez \u2022 Sans engagement \u2022 Rentabilis\u00E9 d\u00E8s le 1er deal",
    testTitle: "Membres Qui Ont \u00C9conomis\u00E9", test1name: "\ud83c\uddeb\ud83c\uddf7 Pierre Dubois", test1route: "CDG \u2192 Tokyo, avr 2026", test1saved: "\u00C9conomis\u00E9 \u20AC1.890", test1quote: "Paris-Tokyo pour \u20AC390 aller-retour. Normalement \u20AC1.100. R\u00E9serv\u00E9 en 5 minutes.",
    test2name: "\ud83c\udde7\ud83c\uddea Marie Laurent", test2route: "BRU \u2192 Bali, mars 2026", test2saved: "\u00C9conomis\u00E9 \u20AC1.650", test2quote: "Bruxelles-Bali pour \u20AC340. J'ai litt\u00E9ralement cri\u00E9. Meilleurs 5\u20AC que je d\u00E9pense chaque mois.",
    test3name: "\ud83c\udde8\ud83c\udded Lucas Meier", test3route: "GVA \u2192 NYC, f\u00E9v 2026", test3saved: "\u00C9conomis\u00E9 CHF 2.100", test3quote: "Gen\u00E8ve-New York pour CHF 280. Une offre a couvert 35 ans d'abonnement.",
    faqTitle: "Questions Fr\u00E9quentes", faq1q: "J'utilise d\u00E9j\u00E0 Google Flights. Pourquoi ai-je besoin de \u00E7a?", faq1a: "Google Flights montre des prix NORMAUX. Nous montrons des prix ERRON\u00C9S. Ces erreurs sont corrig\u00E9es en heures. Google Flights est une lampe. Nous sommes un radar.",
    faq2q: "\u20AC4,99/mois, c'est cher.", faq2a: "\u20AC4,99/mois = \u20AC0,17/jour. L'\u00E9conomie moyenne est \u20AC2.100. Retour de 35x. Sans contrat.",
    faq3q: "Comment savoir si les offres sont r\u00E9elles?", faq3a: "Les error fares sont des r\u00E9servations 100% r\u00E9elles. Plus de 85% sont honor\u00E9es. Remboursement TOTAL si annul\u00E9.",
    faq4q: "Puis-je annuler \u00E0 tout moment?", faq4a: "Oui. Un clic. Sans p\u00E9nalit\u00E9. Sans contrat. Imm\u00E9diat.",
    faq5q: "Pourquoi Telegram et pas email?", faq5a: "Rapidit\u00E9. Les error fares durent des heures. L'email va dans le spam. Telegram livre des notifications instantan\u00E9es.",
    finalTitle: "Chaque Jour Sans Premium Est une Offre Manqu\u00E9e.", finalDesc: "Pendant que vous h\u00E9sitez, les membres Premium r\u00E9servent des vols \u00E0 une fraction du prix.", finalCta: "Commencer \u00E0 \u00C9conomiser", finalMicro: "Annulez quand vous voulez \u2022 Garantie 30 jours \u2022 Rentabilis\u00E9",
    footerText: "Travel Alerts Bot. Tous droits r\u00E9serv\u00E9s.",
  },
  de: {
    heroTag: "Error Fares in Echtzeit",
    heroTitle: 'Airlines Machen Preisfehler. <span class="highlight">Unsere Mitglieder Profitieren.</span>',
    heroDesc: "Wir \u00FCberwachen Millionen von Tarifen 24/7. Wenn Airlines Fehler machen, vibriert Ihr Handy zuerst. Durchschnittliche Ersparnis \u20AC2.100 pro Reise.",
    btnPremium: "Premium-Alerts Freischalten", btnFree: "Kostenlos Starten",
    heroMicro: "Jederzeit k\u00FCndbar \u2022 Keine Karte \u2022 30 Tage Garantie",
    proof1: "Mitglieder", proof2: "L\u00E4nder", proof3: "\u00D8 Ersparnis", proof4: "Error Fares/Monat",
    fomoTitle: "Was Sie Verpassen", fomoSub: "Premium-Mitglieder wurden \u00FCber ALLE diese Deals in Echtzeit benachrichtigt.", fomoCta: "Keine Deals Mehr Verpassen", expired: "ABGELAUFEN",
    destTitle: "Echte Deals der Letzten Tage",
    howTitle: "Lehnen Sie Sich Zur\u00FCck. Wir Jagen.", step1t: "Wir scannen Millionen von Tarifen 24/7", step1d: "Unsere Algorithmen \u00FCberwachen Airlines weltweit.", step2t: "Ihr Handy vibriert sofort", step2d: "Sobald wir einen Deal entdecken, erhalten Premium-Mitglieder eine Telegram-Benachrichtigung.", step3t: "Sie buchen und sparen Tausende", step3d: "Buchen Sie direkt bei der Airline. Ohne Zwischenh\u00E4ndler.",
    compTitle: "Kostenlos Bekommt die Deals von Gestern. Premium Bekommt die Reise von Morgen.", compFree: "Kostenlos", compPrem: "Premium",
    comp1: "Nationale Deals", comp2: "Internationale Deals", comp3: "Error Fares / Preisfehler", comp4: "Echtzeit-Alerts", comp5: "VIP-Community", comp6: "Priorit\u00E4ts-Support",
    pricingTitle: "Ein Deal Bezahlt 35 Jahre Premium", pricingSub: "Der durchschnittliche Error Fare spart \u20AC2.100. Premium kostet \u20AC4,99/Monat.",
    freeName: "Kostenlos", freePrice: "\u20AC0", freeF1: "1-2 Alerts pro Tag", freeF2: "\u00D6ffentlicher Telegram-Kanal", freeF3: "Deals mit 6-12h Verz\u00F6gerung", freeF4: "Keine Error Fares", freeCta: "Kostenlos Beitreten",
    premName: "Premium", premPeriod: "/Monat", premF1: "ECHTZEIT-Alerts", premF2: "5-10 exklusive Deals/Tag", premF3: "Error Fares vor allen anderen", premF4: "Preise in Ihrer W\u00E4hrung", premF5: "VIP-Community", premF6: "Priorit\u00E4ts-Support", premCta: "Meine Alerts Holen!", premBadge: "Am beliebtesten", premMicro: "Jederzeit k\u00FCndbar \u2022 Keine Bindung \u2022 Zahlt sich selbst",
    testTitle: "Mitglieder Die Gespart Haben", test1name: "\ud83c\udde9\ud83c\uddea Max M\u00FCller", test1route: "FRA \u2192 Tokyo, Apr 2026", test1saved: "Gespart \u20AC1.890", test1quote: "Frankfurt-Tokyo f\u00FCr \u20AC390 hin und zur\u00FCck. Normalerweise \u20AC1.100. In 5 Minuten gebucht.",
    test2name: "\ud83c\udde6\ud83c\uddf9 Anna Huber", test2route: "VIE \u2192 Bali, M\u00E4r 2026", test2saved: "Gespart \u20AC1.650", test2quote: "Wien-Bali f\u00FCr \u20AC340. Ich habe geschrien. Besten \u20AC5 die ich monatlich ausgebe.",
    test3name: "\ud83c\udde8\ud83c\udded Jonas Weber", test3route: "ZRH \u2192 NYC, Feb 2026", test3saved: "Gespart CHF 2.100", test3quote: "Z\u00FCrich-New York f\u00FCr CHF 280. Ein Deal deckt 35 Jahre Abo.",
    faqTitle: "H\u00E4ufig Gestellte Fragen", faq1q: "Ich nutze Google Flights. Warum brauche ich das?", faq1a: "Google Flights zeigt NORMALE Preise. Wir zeigen FEHLERHAFTE Preise \u2014 Error Fares. Diese Fehler werden in Stunden korrigiert.",
    faq2q: "\u20AC4,99/Monat scheint teuer.", faq2a: "\u20AC4,99/Monat = \u20AC0,17/Tag. Die Durchschnittsersparnis ist \u20AC2.100. 35-fache Rendite.",
    faq3q: "Sind die Deals echt?", faq3a: "Error Fares sind 100% echte Buchungen. \u00DCber 85% werden eingehalten. VOLLE R\u00FCckerstattung wenn storniert.",
    faq4q: "Kann ich jederzeit k\u00FCndigen?", faq4a: "Ja. Ein Klick. Keine Strafe. Kein Vertrag. Sofort.",
    faq5q: "Warum Telegram und nicht E-Mail?", faq5a: "Geschwindigkeit. Error Fares dauern Stunden. E-Mail landet im Spam. Telegram liefert sofortige Benachrichtigungen.",
    finalTitle: "Jeder Tag Ohne Premium Ist ein Verpasster Deal.", finalDesc: "W\u00E4hrend Sie \u00FCberlegen, buchen Premium-Mitglieder Fl\u00FCge zum Bruchteil des Preises.", finalCta: "Jetzt Sparen", finalMicro: "Jederzeit k\u00FCndbar \u2022 30 Tage Garantie \u2022 Zahlt sich selbst",
    footerText: "Travel Alerts Bot. Alle Rechte vorbehalten.",
  },
  it: {
    heroTag: "Error fares in tempo reale",
    heroTitle: 'Le Compagnie Sbagliano i Prezzi. <span class="highlight">I Nostri Membri ne Approfittano.</span>',
    heroDesc: "Monitoriamo milioni di tariffe 24/7. Quando le compagnie sbagliano, il tuo telefono vibra per primo. Risparmio medio di \u20AC2.100 a viaggio.",
    btnPremium: "Sblocca Avvisi Premium", btnFree: "Inizia Gratis",
    heroMicro: "Cancella quando vuoi \u2022 Senza carta \u2022 Garanzia 30 giorni",
    proof1: "membri", proof2: "paesi", proof3: "risp. medio", proof4: "error fares/mese",
    fomoTitle: "Cosa Ti Stai Perdendo", fomoSub: "I membri Premium sono stati avvisati di TUTTE queste offerte in tempo reale.", fomoCta: "Smettere di Perdere Offerte", expired: "SCADUTO",
    destTitle: "Offerte Reali degli Ultimi Giorni",
    howTitle: "Siediti. Noi Cacciamo.", step1t: "Scansioniamo milioni di tariffe 24/7", step1d: "I nostri algoritmi monitorano le compagnie aeree in tutto il mondo.", step2t: "Il tuo telefono vibra all'istante", step2d: "Appena rileviamo un'offerta, i membri Premium ricevono una notifica Telegram.", step3t: "Prenoti e risparmi migliaia", step3d: "Prenota direttamente con la compagnia aerea. Senza intermediari.",
    compTitle: "Gratis Riceve le Offerte di Ieri. Premium Riceve il Viaggio di Domani.", compFree: "Gratis", compPrem: "Premium",
    comp1: "Offerte nazionali", comp2: "Offerte internazionali", comp3: "Error fares", comp4: "Avvisi in tempo reale", comp5: "Comunit\u00E0 VIP", comp6: "Supporto prioritario",
    pricingTitle: "Un'Offerta Paga 35 Anni di Premium", pricingSub: "L'error fare medio risparmia \u20AC2.100. Premium costa \u20AC4,99/mese.",
    freeName: "Gratis", freePrice: "\u20AC0", freeF1: "1-2 avvisi al giorno", freeF2: "Canale Telegram pubblico", freeF3: "Offerte con ritardo 6-12h", freeF4: "Senza error fares", freeCta: "Unisciti Gratis",
    premName: "Premium", premPeriod: "/mese", premF1: "Avvisi in TEMPO REALE", premF2: "5-10 offerte esclusive/giorno", premF3: "Error fares prima di tutti", premF4: "Prezzi nella tua valuta", premF5: "Comunit\u00E0 VIP", premF6: "Supporto prioritario", premCta: "Voglio i Miei Avvisi!", premBadge: "Pi\u00F9 popolare", premMicro: "Cancella quando vuoi \u2022 Senza impegno \u2022 Si ripaga da solo",
    testTitle: "Membri Che Hanno Risparmiato", test1name: "\ud83c\uddee\ud83c\uddf9 Marco Rossi", test1route: "FCO \u2192 Tokyo, apr 2026", test1saved: "Risparmiato \u20AC1.890", test1quote: "Roma-Tokyo per \u20AC390 andata e ritorno. Normalmente \u20AC1.100. Prenotato in 5 minuti.",
    test2name: "\ud83c\uddee\ud83c\uddf9 Giulia Bianchi", test2route: "MXP \u2192 Bali, mar 2026", test2saved: "Risparmiato \u20AC1.650", test2quote: "Milano-Bali per \u20AC340. Ho letteralmente urlato. I migliori \u20AC5 che spendo ogni mese.",
    test3name: "\ud83c\uddee\ud83c\uddf9 Luca Ferrari", test3route: "FCO \u2192 NYC, feb 2026", test3saved: "Risparmiato \u20AC2.100", test3quote: "Roma-New York per \u20AC249. Un'offerta ha coperto 35 anni di abbonamento.",
    faqTitle: "Domande Frequenti", faq1q: "Uso gi\u00E0 Google Flights. Perch\u00E9 ho bisogno di questo?", faq1a: "Google Flights mostra prezzi NORMALI. Noi mostriamo prezzi SBAGLIATI \u2014 error fares. Questi errori vengono corretti in ore.",
    faq2q: "\u20AC4,99/mese sembra caro.", faq2a: "\u20AC4,99/mese = \u20AC0,17/giorno. Il risparmio medio \u00E8 \u20AC2.100. Ritorno di 35x.",
    faq3q: "Le offerte sono reali?", faq3a: "Gli error fares sono prenotazioni 100% reali. Oltre l'85% viene onorato. Rimborso TOTALE se cancellato.",
    faq4q: "Posso cancellare quando voglio?", faq4a: "S\u00EC. Un clic. Senza penalit\u00E0. Senza contratto. Immediato.",
    faq5q: "Perch\u00E9 Telegram e non email?", faq5a: "Velocit\u00E0. Gli error fares durano ore. L'email va nello spam. Telegram consegna notifiche istantanee.",
    finalTitle: "Ogni Giorno Senza Premium \u00C8 un'Offerta Persa.", finalDesc: "Mentre ci pensi, i membri Premium prenotano voli a una frazione del prezzo.", finalCta: "Inizia a Risparmiare", finalMicro: "Cancella quando vuoi \u2022 Garanzia 30 giorni \u2022 Si ripaga da solo",
    footerText: "Travel Alerts Bot. Tutti i diritti riservati.",
  },
  ru: {
    heroTag: "\u041E\u0448\u0438\u0431\u043A\u0438 \u0432 \u0446\u0435\u043D\u0430\u0445 \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u0432\u0440\u0435\u043C\u0435\u043D\u0438",
    heroTitle: '\u0410\u0432\u0438\u0430\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u041E\u0448\u0438\u0431\u0430\u044E\u0442\u0441\u044F \u0432 \u0426\u0435\u043D\u0430\u0445. <span class="highlight">\u041D\u0430\u0448\u0438 \u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 \u042D\u0442\u0438\u043C \u041F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F.</span>',
    heroDesc: "\u041C\u044B \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u0435\u043C \u043C\u0438\u043B\u043B\u0438\u043E\u043D\u044B \u0442\u0430\u0440\u0438\u0444\u043E\u0432 24/7. \u041A\u043E\u0433\u0434\u0430 \u0430\u0432\u0438\u0430\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u043E\u0448\u0438\u0431\u0430\u044E\u0442\u0441\u044F, \u0432\u0430\u0448 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0432\u0438\u0431\u0440\u0438\u0440\u0443\u0435\u0442 \u043F\u0435\u0440\u0432\u044B\u043C. \u0421\u0440\u0435\u0434\u043D\u044F\u044F \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u044F $2,100.",
    btnPremium: "\u0420\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C Premium", btnFree: "\u041D\u0430\u0447\u0430\u0442\u044C \u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E",
    heroMicro: "\u041E\u0442\u043C\u0435\u043D\u0430 \u0432 \u043B\u044E\u0431\u043E\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u2022 \u0411\u0435\u0437 \u043A\u0430\u0440\u0442\u044B \u2022 \u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F 30 \u0434\u043D\u0435\u0439",
    proof1: "\u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432", proof2: "\u0441\u0442\u0440\u0430\u043D", proof3: "\u0441\u0440. \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u044F", proof4: "error fares/\u043C\u0435\u0441.",
    fomoTitle: "\u0427\u0442\u043E \u0412\u044B \u0423\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0435", fomoSub: "Premium-\u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 \u0431\u044B\u043B\u0438 \u043E\u043F\u043E\u0432\u0435\u0449\u0435\u043D\u044B \u043E \u0412\u0421\u0415\u0425 \u044D\u0442\u0438\u0445 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u0445.", fomoCta: "\u041F\u0435\u0440\u0435\u0441\u0442\u0430\u0442\u044C \u0423\u043F\u0443\u0441\u043A\u0430\u0442\u044C", expired: "\u0418\u0421\u0422\u0415\u041A\u041B\u041E",
    destTitle: "\u0420\u0435\u0430\u043B\u044C\u043D\u044B\u0435 \u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0445 \u0414\u043D\u0435\u0439",
    howTitle: "\u0420\u0430\u0441\u0441\u043B\u0430\u0431\u044C\u0442\u0435\u0441\u044C. \u041C\u044B \u041E\u0445\u043E\u0442\u0438\u043C\u0441\u044F.", step1t: "\u0421\u043A\u0430\u043D\u0438\u0440\u0443\u0435\u043C \u043C\u0438\u043B\u043B\u0438\u043E\u043D\u044B \u0442\u0430\u0440\u0438\u0444\u043E\u0432 24/7", step1d: "\u041D\u0430\u0448\u0438 \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C\u044B \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u044E\u0442 \u0430\u0432\u0438\u0430\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u043F\u043E \u0432\u0441\u0435\u043C\u0443 \u043C\u0438\u0440\u0443.", step2t: "\u0412\u0430\u0448 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0432\u0438\u0431\u0440\u0438\u0440\u0443\u0435\u0442 \u043C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u043E", step2d: "Premium-\u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u044E\u0442 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435 \u0432 Telegram.", step3t: "\u0411\u0440\u043E\u043D\u0438\u0440\u0443\u0435\u0442\u0435 \u0438 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0442\u0435 \u0442\u044B\u0441\u044F\u0447\u0438", step3d: "\u0411\u0440\u043E\u043D\u0438\u0440\u0443\u0439\u0442\u0435 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u0443 \u0430\u0432\u0438\u0430\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438.",
    compTitle: "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E \u2014 \u0412\u0447\u0435\u0440\u0430\u0448\u043D\u0438\u0435 \u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F. Premium \u2014 \u0417\u0430\u0432\u0442\u0440\u0430\u0448\u043D\u0435\u0435 \u041F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435.", compFree: "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E", compPrem: "Premium",
    comp1: "\u0412\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0435 \u0440\u0435\u0439\u0441\u044B", comp2: "\u041C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0435 \u0440\u0435\u0439\u0441\u044B", comp3: "Error fares", comp4: "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u0432\u0440\u0435\u043C\u0435\u043D\u0438", comp5: "VIP-\u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E", comp6: "\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u043D\u0430\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430",
    pricingTitle: "\u041E\u0434\u043D\u043E \u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u041E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0435\u0442 35 \u041B\u0435\u0442 Premium", pricingSub: "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 error fare \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0442 $2,100. Premium \u0441\u0442\u043E\u0438\u0442 $4.99/\u043C\u0435\u0441.",
    freeName: "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E", freePrice: "$0", freeF1: "1-2 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F/\u0434\u0435\u043D\u044C", freeF2: "\u041F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u0439 Telegram-\u043A\u0430\u043D\u0430\u043B", freeF3: "\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0441 \u0437\u0430\u0434\u0435\u0440\u0436\u043A\u043E\u0439 6-12\u0447", freeF4: "\u0411\u0435\u0437 error fares", freeCta: "\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C\u0441\u044F",
    premName: "Premium", premPeriod: "/\u043C\u0435\u0441.", premF1: "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u0432 \u0420\u0415\u0410\u041B\u042C\u041D\u041E\u041C \u0412\u0420\u0415\u041C\u0415\u041D\u0418", premF2: "5-10 \u044D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u044B\u0445 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439/\u0434\u0435\u043D\u044C", premF3: "Error fares \u0440\u0430\u043D\u044C\u0448\u0435 \u0432\u0441\u0435\u0445", premF4: "\u0426\u0435\u043D\u044B \u0432 \u0432\u0430\u0448\u0435\u0439 \u0432\u0430\u043B\u044E\u0442\u0435", premF5: "VIP-\u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E", premF6: "\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u043D\u0430\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430", premCta: "\u0425\u043E\u0447\u0443 \u041C\u043E\u0438 \u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F!", premBadge: "\u0421\u0430\u043C\u044B\u0439 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0439", premMicro: "\u041E\u0442\u043C\u0435\u043D\u0430 \u0432 \u043B\u044E\u0431\u043E\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u2022 \u0411\u0435\u0437 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u2022 \u041E\u043A\u0443\u043F\u0430\u0435\u0442\u0441\u044F",
    testTitle: "\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 \u041A\u043E\u0442\u043E\u0440\u044B\u0435 \u0421\u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043B\u0438", test1name: "\ud83c\uddf7\ud83c\uddfa \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0418\u0432\u0430\u043D\u043E\u0432", test1route: "SVO \u2192 \u041F\u0430\u0440\u0438\u0436, \u0430\u043F\u0440 2026", test1saved: "\u0421\u044D\u043A\u043E\u043D\u043E\u043C\u043B\u0435\u043D\u043E $1,890", test1quote: "\u041C\u043E\u0441\u043A\u0432\u0430-\u041F\u0430\u0440\u0438\u0436 \u0437\u0430 $310 \u0442\u0443\u0434\u0430-\u043E\u0431\u0440\u0430\u0442\u043D\u043E. \u041E\u0431\u044B\u0447\u043D\u043E $1,100. \u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043B \u0437\u0430 5 \u043C\u0438\u043D\u0443\u0442.",
    test2name: "\ud83c\uddfa\ud83c\udde6 \u041E\u043B\u044C\u0433\u0430 \u041F\u0435\u0442\u0440\u043E\u0432\u0430", test2route: "KBP \u2192 \u0411\u0430\u043B\u0438, \u043C\u0430\u0440 2026", test2saved: "\u0421\u044D\u043A\u043E\u043D\u043E\u043C\u043B\u0435\u043D\u043E $1,650", test2quote: "\u041A\u0438\u0435\u0432-\u0411\u0430\u043B\u0438 \u0437\u0430 $340. \u042F \u0431\u0443\u043A\u0432\u0430\u043B\u044C\u043D\u043E \u043A\u0440\u0438\u0447\u0430\u043B\u0430. \u041B\u0443\u0447\u0448\u0438\u0435 $5 \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u044F \u0442\u0440\u0430\u0447\u0443 \u043A\u0430\u0436\u0434\u044B\u0439 \u043C\u0435\u0441\u044F\u0446.",
    test3name: "\ud83c\uddf0\ud83c\uddff \u0414\u043C\u0438\u0442\u0440\u0438\u0439 \u041A\u0438\u043C", test3route: "ALA \u2192 \u0422\u043E\u043A\u0438\u043E, \u0444\u0435\u0432 2026", test3saved: "\u0421\u044D\u043A\u043E\u043D\u043E\u043C\u043B\u0435\u043D\u043E $2,100", test3quote: "\u0410\u043B\u043C\u0430\u0442\u044B-\u0422\u043E\u043A\u0438\u043E \u0437\u0430 $490. \u041E\u0434\u043D\u0430 \u0441\u0434\u0435\u043B\u043A\u0430 \u043F\u043E\u043A\u0440\u044B\u043B\u0430 35 \u043B\u0435\u0442 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0438.",
    faqTitle: "\u0427\u0430\u0441\u0442\u043E \u0417\u0430\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0435 \u0412\u043E\u043F\u0440\u043E\u0441\u044B", faq1q: "\u042F \u0443\u0436\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E Google Flights. \u0417\u0430\u0447\u0435\u043C \u043C\u043D\u0435 \u044D\u0442\u043E?", faq1a: "Google Flights \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u041E\u0411\u042B\u0427\u041D\u042B\u0415 \u0446\u0435\u043D\u044B. \u041C\u044B \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C \u041E\u0428\u0418\u0411\u041E\u0427\u041D\u042B\u0415 \u0446\u0435\u043D\u044B \u2014 error fares.",
    faq2q: "$4.99/\u043C\u0435\u0441 \u043A\u0430\u0436\u0435\u0442\u0441\u044F \u0434\u043E\u0440\u043E\u0433\u043E.", faq2a: "$4.99/\u043C\u0435\u0441 = $0.17/\u0434\u0435\u043D\u044C. \u0421\u0440\u0435\u0434\u043D\u044F\u044F \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u044F $2,100. \u0412\u043E\u0437\u0432\u0440\u0430\u0442 35x.",
    faq3q: "\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0435?", faq3a: "Error fares \u2014 \u044D\u0442\u043E 100% \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F. \u0411\u043E\u043B\u0435\u0435 85% \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u044E\u0442\u0441\u044F. \u041F\u041E\u041B\u041D\u042B\u0419 \u0432\u043E\u0437\u0432\u0440\u0430\u0442 \u043F\u0440\u0438 \u043E\u0442\u043C\u0435\u043D\u0435.",
    faq4q: "\u041C\u043E\u0436\u043D\u043E \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C?", faq4a: "\u0414\u0430. \u041E\u0434\u0438\u043D \u043A\u043B\u0438\u043A. \u0411\u0435\u0437 \u0448\u0442\u0440\u0430\u0444\u043E\u0432. \u041C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u043E.",
    faq5q: "\u041F\u043E\u0447\u0435\u043C\u0443 Telegram?", faq5a: "\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C. Error fares \u0434\u043B\u044F\u0442\u0441\u044F \u0447\u0430\u0441\u044B. Email \u0438\u0434\u0451\u0442 \u0432 \u0441\u043F\u0430\u043C. Telegram \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u043C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u043E.",
    finalTitle: "\u041A\u0430\u0436\u0434\u044B\u0439 \u0414\u0435\u043D\u044C \u0411\u0435\u0437 Premium \u2014 \u042D\u0442\u043E \u0423\u043F\u0443\u0449\u0435\u043D\u043D\u044B\u0439 Deal.", finalDesc: "\u041F\u043E\u043A\u0430 \u0432\u044B \u0434\u0443\u043C\u0430\u0435\u0442\u0435, Premium-\u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 \u0431\u0440\u043E\u043D\u0438\u0440\u0443\u044E\u0442 \u0431\u0438\u043B\u0435\u0442\u044B \u0437\u0430 \u0434\u043E\u043B\u044E \u0446\u0435\u043D\u044B.", finalCta: "\u041D\u0430\u0447\u0430\u0442\u044C \u042D\u043A\u043E\u043D\u043E\u043C\u0438\u0442\u044C", finalMicro: "\u041E\u0442\u043C\u0435\u043D\u0430 \u0432 \u043B\u044E\u0431\u043E\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u2022 \u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F 30 \u0434\u043D\u0435\u0439 \u2022 \u041E\u043A\u0443\u043F\u0430\u0435\u0442\u0441\u044F",
    footerText: "Travel Alerts Bot. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B.",
  },
  ja: {
    heroTag: "\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u30A8\u30E9\u30FC\u904B\u8CC3",
    heroTitle: '\u822A\u7A7A\u4F1A\u793E\u304C\u4FA1\u683C\u3092\u9593\u9055\u3048\u308B\u3002<span class="highlight">\u4F1A\u54E1\u304C\u5F97\u3092\u3059\u308B\u3002</span>',
    heroDesc: "24\u6642\u9593\u4F55\u767E\u4E07\u3082\u306E\u904B\u8CC3\u3092\u76E3\u8996\u3002\u822A\u7A7A\u4F1A\u793E\u304C\u30DF\u30B9\u3092\u3057\u305F\u3089\u3001\u3042\u306A\u305F\u306E\u643A\u5E2F\u304C\u6700\u521D\u306B\u632F\u52D5\u3002\u5E73\u5747\u7BC0\u7D04\u00A5310,000\u3002",
    btnPremium: "Premium\u30A2\u30E9\u30FC\u30C8\u3092\u89E3\u9664", btnFree: "\u7121\u6599\u3067\u59CB\u3081\u308B",
    heroMicro: "\u3044\u3064\u3067\u3082\u30AD\u30E3\u30F3\u30BB\u30EB \u2022 \u30AB\u30FC\u30C9\u4E0D\u8981 \u2022 30\u65E5\u9593\u4FDD\u8A3C",
    proof1: "\u4F1A\u54E1", proof2: "\u30F6\u56FD", proof3: "\u5E73\u5747\u7BC0\u7D04", proof4: "\u30A8\u30E9\u30FC\u904B\u8CC3/\u6708",
    fomoTitle: "\u3042\u306A\u305F\u304C\u898B\u9003\u3057\u3066\u3044\u308B\u3082\u306E", fomoSub: "Premium\u4F1A\u54E1\u306F\u3053\u308C\u3089\u5168\u3066\u306E\u30C7\u30A3\u30FC\u30EB\u306B\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u3067\u901A\u77E5\u3055\u308C\u307E\u3057\u305F\u3002", fomoCta: "\u898B\u9003\u3057\u3092\u6B62\u3081\u308B", expired: "\u671F\u9650\u5207\u308C",
    destTitle: "\u904E\u53BB\u6570\u65E5\u306E\u5B9F\u969B\u306E\u30C7\u30A3\u30FC\u30EB",
    howTitle: "\u5EA7\u3063\u3066\u304A\u5F85\u3061\u304F\u3060\u3055\u3044\u3002\u79C1\u305F\u3061\u304C\u63A2\u3057\u307E\u3059\u3002", step1t: "24\u6642\u9593\u4F55\u767E\u4E07\u3082\u306E\u904B\u8CC3\u3092\u30B9\u30AD\u30E3\u30F3", step1d: "\u4E16\u754C\u4E2D\u306E\u822A\u7A7A\u4F1A\u793E\u3092\u76E3\u8996\u3057\u3066\u3044\u307E\u3059\u3002", step2t: "\u643A\u5E2F\u304C\u5373\u5EA7\u306B\u632F\u52D5", step2d: "Premium\u4F1A\u54E1\u306BTelegram\u901A\u77E5\u304C\u5C4A\u304D\u307E\u3059\u3002", step3t: "\u4E88\u7D04\u3057\u3066\u6570\u5343\u5186\u7BC0\u7D04", step3d: "\u822A\u7A7A\u4F1A\u793E\u304B\u3089\u76F4\u63A5\u4E88\u7D04\u3002\u4EF2\u4ECB\u306A\u3057\u3002",
    compTitle: "\u7121\u6599\u306F\u6628\u65E5\u306E\u30C7\u30A3\u30FC\u30EB\u3002Premium\u306F\u660E\u65E5\u306E\u65C5\u884C\u3002", compFree: "\u7121\u6599", compPrem: "Premium",
    comp1: "\u56FD\u5185\u30C7\u30A3\u30FC\u30EB", comp2: "\u56FD\u969B\u30C7\u30A3\u30FC\u30EB", comp3: "\u30A8\u30E9\u30FC\u904B\u8CC3", comp4: "\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u901A\u77E5", comp5: "VIP\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3", comp6: "\u512A\u5148\u30B5\u30DD\u30FC\u30C8",
    pricingTitle: "1\u56DE\u306E\u30C7\u30A3\u30FC\u30EB\u3067Premium 35\u5E74\u5206\u3092\u30AB\u30D0\u30FC", pricingSub: "\u5E73\u5747\u30A8\u30E9\u30FC\u904B\u8CC3\u306E\u7BC0\u7D04\u00A5310,000\u3002Premium\u306F\u00A5750/\u6708\u3002",
    freeName: "\u7121\u6599", freePrice: "\u00A50", freeF1: "1-2\u901A\u77E5/\u65E5", freeF2: "\u516C\u958BTelegram\u30C1\u30E3\u30F3\u30CD\u30EB", freeF3: "6-12\u6642\u9593\u9045\u5EF6", freeF4: "\u30A8\u30E9\u30FC\u904B\u8CC3\u306A\u3057", freeCta: "\u7121\u6599\u3067\u53C2\u52A0",
    premName: "Premium", premPeriod: "/\u6708", premF1: "\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u901A\u77E5", premF2: "5-10\u9650\u5B9A\u30C7\u30A3\u30FC\u30EB/\u65E5", premF3: "\u8AB0\u3088\u308A\u3082\u65E9\u304F", premF4: "\u73FE\u5730\u901A\u8CA8\u3067\u8868\u793A", premF5: "VIP\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3", premF6: "\u512A\u5148\u30B5\u30DD\u30FC\u30C8", premCta: "\u30A2\u30E9\u30FC\u30C8\u3092\u53D6\u5F97!", premBadge: "\u4EBA\u6C17No.1", premMicro: "\u3044\u3064\u3067\u3082\u30AD\u30E3\u30F3\u30BB\u30EB \u2022 \u7E1B\u308A\u306A\u3057 \u2022 \u5143\u304C\u53D6\u308C\u308B",
    testTitle: "\u7BC0\u7D04\u3057\u305F\u4F1A\u54E1", test1name: "\ud83c\uddef\ud83c\uddf5 \u7530\u4E2D\u592A\u90CE", test1route: "NRT \u2192 \u30D1\u30EA, 2026\u5E744\u6708", test1saved: "\u00A5127,000\u7BC0\u7D04", test1quote: "\u6210\u7530-\u30D1\u30EA\u304C\u00A558,000\u3067\u5F80\u5FA9\u3002\u901A\u5E38\u00A5185,000\u30025\u5206\u3067\u4E88\u7D04\u3057\u307E\u3057\u305F\u3002",
    test2name: "\ud83c\uddef\ud83c\uddf5 \u4F50\u85E4\u82B1\u5B50", test2route: "HND \u2192 \u30D0\u30EA, 2026\u5E743\u6708", test2saved: "\u00A578,000\u7BC0\u7D04", test2quote: "\u7FBD\u7530-\u30D0\u30EA\u304C\u00A542,000\u3002\u53EB\u3073\u307E\u3057\u305F\u3002\u6BCE\u6708\u00A5750\u306E\u4FA1\u5024\u3042\u308A\u3002",
    test3name: "\ud83c\uddef\ud83c\uddf5 \u9234\u6728\u4E00\u90CE", test3route: "KIX \u2192 NYC, 2026\u5E742\u6708", test3saved: "\u00A5110,000\u7BC0\u7D04", test3quote: "\u95A2\u7A7A-\u30CB\u30E5\u30FC\u30E8\u30FC\u30AF\u304C\u00A555,000\u30021\u56DE\u306E\u30C7\u30A3\u30FC\u30EB\u3067\u7D0435\u5E74\u5206\u306E\u8CFC\u8AAD\u6599\u3092\u30AB\u30D0\u30FC\u3002",
    faqTitle: "\u3088\u304F\u3042\u308B\u8CEA\u554F", faq1q: "Google Flights\u3092\u4F7F\u3063\u3066\u3044\u307E\u3059\u304C\u3001\u306A\u305C\u3053\u308C\u304C\u5FC5\u8981\u3067\u3059\u304B\uFF1F", faq1a: "Google Flights\u306F\u901A\u5E38\u4FA1\u683C\u3092\u8868\u793A\u3002\u79C1\u305F\u3061\u306F\u8AA4\u3063\u305F\u4FA1\u683C\u3092\u8868\u793A\u3002\u3053\u308C\u3089\u306E\u30A8\u30E9\u30FC\u306F\u6570\u6642\u9593\u3067\u4FEE\u6B63\u3055\u308C\u307E\u3059\u3002",
    faq2q: "\u00A5750/\u6708\u306F\u9AD8\u3044\u3067\u3059\u304B\uFF1F", faq2a: "\u00A5750/\u6708 = \u00A525/\u65E5\u3002\u5E73\u5747\u7BC0\u7D04\u00A5310,000\u300035\u500D\u306E\u30EA\u30BF\u30FC\u30F3\u3002",
    faq3q: "\u30C7\u30A3\u30FC\u30EB\u306F\u672C\u7269\u3067\u3059\u304B\uFF1F", faq3a: "\u30A8\u30E9\u30FC\u904B\u8CC3\u306F100%\u672C\u7269\u306E\u4E88\u7D04\u3002\u30AD\u30E3\u30F3\u30BB\u30EB\u6642\u306F\u5168\u984D\u8FD4\u91D1\u3002",
    faq4q: "\u3044\u3064\u3067\u3082\u30AD\u30E3\u30F3\u30BB\u30EB\u3067\u304D\u307E\u3059\u304B\uFF1F", faq4a: "\u306F\u3044\u3002\u30EF\u30F3\u30AF\u30EA\u30C3\u30AF\u3002\u30DA\u30CA\u30EB\u30C6\u30A3\u306A\u3057\u3002\u5373\u6642\u3002",
    faq5q: "\u306A\u305CTelegram\uFF1F", faq5a: "\u30B9\u30D4\u30FC\u30C9\u3002\u30A8\u30E9\u30FC\u904B\u8CC3\u306F\u6570\u6642\u9593\u3002\u30E1\u30FC\u30EB\u306F\u30B9\u30D1\u30E0\u306B\u3002Telegram\u306F\u5373\u6642\u901A\u77E5\u3002",
    finalTitle: "Premium\u306A\u3057\u306E\u6BCE\u65E5\u306F\u898B\u9003\u3057\u305F\u30C7\u30A3\u30FC\u30EB\u3002", finalDesc: "\u3042\u306A\u305F\u304C\u8003\u3048\u3066\u3044\u308B\u9593\u306B\u3001Premium\u4F1A\u54E1\u306F\u683C\u5B89\u3067\u4E88\u7D04\u3057\u3066\u3044\u307E\u3059\u3002", finalCta: "\u7BC0\u7D04\u3092\u59CB\u3081\u308B", finalMicro: "\u3044\u3064\u3067\u3082\u30AD\u30E3\u30F3\u30BB\u30EB \u2022 30\u65E5\u4FDD\u8A3C \u2022 \u5143\u304C\u53D6\u308C\u308B",
    footerText: "Travel Alerts Bot. All rights reserved.",
  },
  ko: {
    heroTag: "\u C2E4\uC2DC\uAC04 \uC5D0\uB7EC \uC694\uAE08",
    heroTitle: '\uD56D\uACF5\uC0AC\uAC00 \uAC00\uACA9\uC744 \uC798\uBABB \uCC45\uC815\uD569\uB2C8\uB2E4. <span class="highlight">\uD68C\uC6D0\uB4E4\uC774 \uD61C\uD0DD\uC744 \uBC1B\uC2B5\uB2C8\uB2E4.</span>',
    heroDesc: "24\uC2DC\uAC04 \uC218\uBC31\uB9CC \uC694\uAE08\uC744 \uBAA8\uB2C8\uD130\uB9C1\uD569\uB2C8\uB2E4. \uD56D\uACF5\uC0AC\uAC00 \uC2E4\uC218\uD558\uBA74 \uD734\uB300\uD3F0\uC774 \uAC00\uC7A5 \uBA3C\uC800 \uC9C4\uB3D9\uD569\uB2C8\uB2E4. \uD3C9\uADE0 \u20A9620,000 \uC808\uC57D.",
    btnPremium: "Premium \uC54C\uB9BC \uD574\uC81C", btnFree: "\uBB34\uB8CC \uC2DC\uC791",
    heroMicro: "\uC5B8\uC81C\uB4E0 \uCDE8\uC18C \u2022 \uCE74\uB4DC \uBD88\uD544\uC694 \u2022 30\uC77C \uBCF4\uC99D",
    proof1: "\uD68C\uC6D0", proof2: "\uAC1C\uAD6D", proof3: "\uD3C9\uADE0 \uC808\uC57D", proof4: "\uC5D0\uB7EC\uC694\uAE08/\uC6D4",
    fomoTitle: "\uB193\uCE58\uACE0 \uC788\uB294 \uAC83\uB4E4", fomoSub: "Premium \uD68C\uC6D0\uB4E4\uC740 \uC774 \uBAA8\uB4E0 \uB51C\uC744 \uC2E4\uC2DC\uAC04\uC73C\uB85C \uBC1B\uC558\uC2B5\uB2C8\uB2E4.", fomoCta: "\uB193\uCE58\uC9C0 \uB9C8\uC138\uC694", expired: "\uB9CC\uB8CC",
    destTitle: "\uCD5C\uADFC \uC2E4\uC81C \uB51C",
    howTitle: "\uD3B8\uD558\uAC8C \uC549\uC544\uACC4\uC138\uC694. \uC6B0\uB9AC\uAC00 \uCC3E\uC2B5\uB2C8\uB2E4.", step1t: "24\uC2DC\uAC04 \uC218\uBC31\uB9CC \uC694\uAE08 \uC2A4\uCE94", step1d: "\uC804 \uC138\uACC4 \uD56D\uACF5\uC0AC\uB97C \uBAA8\uB2C8\uD130\uB9C1\uD569\uB2C8\uB2E4.", step2t: "\uD734\uB300\uD3F0\uC774 \uC989\uC2DC \uC9C4\uB3D9", step2d: "Premium \uD68C\uC6D0\uC5D0\uAC8C Telegram \uC54C\uB9BC\uC774 \uC804\uC1A1\uB429\uB2C8\uB2E4.", step3t: "\uC608\uC57D\uD558\uACE0 \uC218\uC2ED\uB9CC\uC6D0 \uC808\uC57D", step3d: "\uD56D\uACF5\uC0AC\uC5D0\uC11C \uC9C1\uC811 \uC608\uC57D. \uC911\uAC1C\uC5C6\uC774.",
    compTitle: "\uBB34\uB8CC\uB294 \uC5B4\uC81C\uC758 \uB51C. Premium\uC740 \uB0B4\uC77C\uC758 \uC5EC\uD589.", compFree: "\uBB34\uB8CC", compPrem: "Premium",
    comp1: "\uAD6D\uB0B4 \uB51C", comp2: "\uAD6D\uC81C \uB51C", comp3: "\uC5D0\uB7EC \uC694\uAE08", comp4: "\uC2E4\uC2DC\uAC04 \uC54C\uB9BC", comp5: "VIP \uCEE4\uBBA4\uB2C8\uD2F0", comp6: "\uC6B0\uC120 \uC9C0\uC6D0",
    pricingTitle: "\uD55C \uBC88\uC758 \uB51C\uB85C Premium 35\uB144\uCE58 \uCEE4\uBC84", pricingSub: "\uD3C9\uADE0 \uC5D0\uB7EC\uC694\uAE08 \uC808\uC57D \u20A9620,000. Premium \u20A96,900/\uC6D4.",
    freeName: "\uBB34\uB8CC", freePrice: "\u20A90", freeF1: "1-2 \uC54C\uB9BC/\uC77C", freeF2: "\uACF5\uAC1C Telegram \uCC44\uB110", freeF3: "6-12\uC2DC\uAC04 \uC9C0\uC5F0", freeF4: "\uC5D0\uB7EC\uC694\uAE08 \uC5C6\uC74C", freeCta: "\uBB34\uB8CC \uAC00\uC785",
    premName: "Premium", premPeriod: "/\uC6D4", premF1: "\uC2E4\uC2DC\uAC04 \uC54C\uB9BC", premF2: "5-10 \uB3C5\uC810 \uB51C/\uC77C", premF3: "\uB204\uAD6C\uBCF4\uB2E4 \uBE60\uB978 \uC5D0\uB7EC\uC694\uAE08", premF4: "\uD604\uC9C0 \uD1B5\uD654 \uD45C\uC2DC", premF5: "VIP \uCEE4\uBBA4\uB2C8\uD2F0", premF6: "\uC6B0\uC120 \uC9C0\uC6D0", premCta: "\uC54C\uB9BC \uBC1B\uAE30!", premBadge: "\uAC00\uC7A5 \uC778\uAE30", premMicro: "\uC5B8\uC81C\uB4E0 \uCDE8\uC18C \u2022 \uC57D\uC815 \uC5C6\uC74C \u2022 \uBCF8\uC804 \uBF51\uAE30",
    testTitle: "\uC808\uC57D\uD55C \uD68C\uC6D0\uB4E4", test1name: "\ud83c\uddf0\ud83c\uddf7 \uAE40\uBBFC\uC900", test1route: "ICN \u2192 \uD30C\uB9AC, 2026\uB144 4\uC6D4", test1saved: "\u20A91,110,000 \uC808\uC57D", test1quote: "\uC778\uCC9C-\uD30C\uB9AC \u20A9540,000 \uC655\uBCF5. \uBCF4\uD1B5 \u20A91,650,000. 5\uBD84\uB9CC\uC5D0 \uC608\uC57D\uD588\uC2B5\uB2C8\uB2E4.",
    test2name: "\ud83c\uddf0\ud83c\uddf7 \uBC15\uC9C0\uC740", test2route: "ICN \u2192 \uBC1C\uB9AC, 2026\uB144 3\uC6D4", test2saved: "\u20A9570,000 \uC808\uC57D", test2quote: "\uC778\uCC9C-\uBC1C\uB9AC \u20A9280,000. \uC18C\uB9AC\uB97C \uC9C8\uB800\uC2B5\uB2C8\uB2E4. \uB9E4\uB2EC \u20A96,900\uC758 \uAC00\uCE58.",
    test3name: "\ud83c\uddf0\ud83c\uddf7 \uC774\uC2B9\uD638", test3route: "ICN \u2192 NYC, 2026\uB144 2\uC6D4", test3saved: "\u20A91,210,000 \uC808\uC57D", test3quote: "\uC778\uCC9C-\uB274\uC695 \u20A9590,000. \uD55C \uBC88\uC758 \uB51C\uB85C 35\uB144\uCE58 \uAD6C\uB3C5\uB8CC\uB97C \uCEE4\uBC84.",
    faqTitle: "\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38", faq1q: "Google Flights\uB97C \uC0AC\uC6A9\uD558\uACE0 \uC788\uB294\uB370 \uC65C \uD544\uC694\uD55C\uAC00\uC694?", faq1a: "Google Flights\uB294 \uC815\uC0C1 \uAC00\uACA9\uC744 \uBCF4\uC5EC\uC90D\uB2C8\uB2E4. \uC6B0\uB9AC\uB294 \uC624\uB958 \uAC00\uACA9\uC744 \uBCF4\uC5EC\uC90D\uB2C8\uB2E4.",
    faq2q: "\u20A96,900/\uC6D4\uC774 \uBE44\uC2FC\uAC00\uC694?", faq2a: "\u20A96,900/\uC6D4 = \u20A9230/\uC77C. \uD3C9\uADE0 \uC808\uC57D \u20A9620,000. 35\uBC30 \uC218\uC775\uB960.",
    faq3q: "\uB51C\uC774 \uC9C4\uC9DC\uC778\uAC00\uC694?", faq3a: "\uC5D0\uB7EC\uC694\uAE08\uC740 100% \uC2E4\uC81C \uC608\uC57D. 85% \uC774\uC0C1 \uC774\uD589. \uCDE8\uC18C\uC2DC \uC804\uC561 \uD658\uBD88.",
    faq4q: "\uC5B8\uC81C\uB4E0 \uCDE8\uC18C\uD560 \uC218 \uC788\uB098\uC694?", faq4a: "\uB124. \uD074\uB9AD \uD55C \uBC88. \uC704\uC57D\uAE08 \uC5C6\uC74C. \uC989\uC2DC.",
    faq5q: "\uC65C Telegram\uC778\uAC00\uC694?", faq5a: "\uC18D\uB3C4. \uC5D0\uB7EC\uC694\uAE08\uC740 \uBA87 \uC2DC\uAC04\uB9CC \uC9C0\uC18D. \uC774\uBA54\uC77C\uC740 \uC2A4\uD338. Telegram\uC740 \uC989\uC2DC \uC54C\uB9BC.",
    finalTitle: "Premium \uC5C6\uB294 \uB9E4\uC77C\uC740 \uB193\uCE5C \uB51C\uC785\uB2C8\uB2E4.", finalDesc: "\uACE0\uBBFC\uD558\uB294 \uC0AC\uC774 Premium \uD68C\uC6D0\uB4E4\uC740 \uD56D\uACF5\uAD8C\uC744 \uC608\uC57D\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.", finalCta: "\uC808\uC57D \uC2DC\uC791", finalMicro: "\uC5B8\uC81C\uB4E0 \uCDE8\uC18C \u2022 30\uC77C \uBCF4\uC99D \u2022 \uBCF8\uC804 \uBF51\uAE30",
    footerText: "Travel Alerts Bot. All rights reserved.",
  },
  ar: {
    heroTag: "\u0623\u062E\u0637\u0627\u0621 \u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0641\u0639\u0644\u064A",
    heroTitle: '\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0637\u064A\u0631\u0627\u0646 \u062A\u062E\u0637\u0626 \u0641\u064A \u0627\u0644\u0623\u0633\u0639\u0627\u0631. <span class="highlight">\u0623\u0639\u0636\u0627\u0624\u0646\u0627 \u064A\u0633\u062A\u0641\u064A\u062F\u0648\u0646.</span>',
    heroDesc: "\u0646\u0631\u0627\u0642\u0628 \u0645\u0644\u0627\u064A\u064A\u0646 \u0627\u0644\u0623\u0633\u0639\u0627\u0631 24/7. \u0639\u0646\u062F\u0645\u0627 \u062A\u062E\u0637\u0626 \u0627\u0644\u0634\u0631\u0643\u0627\u062A\u060C \u0647\u0627\u062A\u0641\u0643 \u064A\u0647\u062A\u0632 \u0623\u0648\u0644\u0627\u064B. \u0645\u062A\u0648\u0633\u0637 \u0627\u0644\u062A\u0648\u0641\u064A\u0631 AED 7,700.",
    btnPremium: "\u0641\u062A\u062D \u062A\u0646\u0628\u064A\u0647\u0627\u062A Premium", btnFree: "\u0627\u0628\u062F\u0623 \u0645\u062C\u0627\u0646\u0627\u064B",
    heroMicro: "\u0625\u0644\u063A\u0627\u0621 \u0641\u064A \u0623\u064A \u0648\u0642\u062A \u2022 \u0628\u062F\u0648\u0646 \u0628\u0637\u0627\u0642\u0629 \u2022 \u0636\u0645\u0627\u0646 30 \u064A\u0648\u0645",
    proof1: "\u0639\u0636\u0648", proof2: "\u062F\u0648\u0644\u0629", proof3: "\u0645\u062A\u0648\u0633\u0637 \u0627\u0644\u062A\u0648\u0641\u064A\u0631", proof4: "error fares/\u0634\u0647\u0631",
    fomoTitle: "\u0645\u0627 \u062A\u0641\u0648\u062A\u0643", fomoSub: "\u0623\u0639\u0636\u0627\u0621 Premium \u062A\u0645 \u062A\u0646\u0628\u064A\u0647\u0647\u0645 \u0628\u062C\u0645\u064A\u0639 \u0647\u0630\u0647 \u0627\u0644\u0639\u0631\u0648\u0636.", fomoCta: "\u062A\u0648\u0642\u0641 \u0639\u0646 \u062A\u0641\u0648\u064A\u062A \u0627\u0644\u0639\u0631\u0648\u0636", expired: "\u0627\u0646\u062A\u0647\u0649",
    destTitle: "\u0639\u0631\u0648\u0636 \u062D\u0642\u064A\u0642\u064A\u0629 \u0645\u0646 \u0627\u0644\u0623\u064A\u0627\u0645 \u0627\u0644\u0645\u0627\u0636\u064A\u0629",
    howTitle: "\u0627\u0633\u062A\u0631\u062E. \u0646\u062D\u0646 \u0646\u0628\u062D\u062B.", step1t: "\u0646\u0641\u062D\u0635 \u0645\u0644\u0627\u064A\u064A\u0646 \u0627\u0644\u0623\u0633\u0639\u0627\u0631 24/7", step1d: "\u062E\u0648\u0627\u0631\u0632\u0645\u064A\u0627\u062A\u0646\u0627 \u062A\u0631\u0627\u0642\u0628 \u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0637\u064A\u0631\u0627\u0646 \u062D\u0648\u0644 \u0627\u0644\u0639\u0627\u0644\u0645.", step2t: "\u0647\u0627\u062A\u0641\u0643 \u064A\u0647\u062A\u0632 \u0641\u0648\u0631\u0627\u064B", step2d: "\u0623\u0639\u0636\u0627\u0621 Premium \u064A\u062A\u0644\u0642\u0648\u0646 \u0625\u0634\u0639\u0627\u0631 Telegram.", step3t: "\u0627\u062D\u062C\u0632 \u0648\u0648\u0641\u0631 \u0622\u0644\u0627\u0641", step3d: "\u0627\u062D\u062C\u0632 \u0645\u0628\u0627\u0634\u0631\u0629 \u0645\u0639 \u0634\u0631\u0643\u0629 \u0627\u0644\u0637\u064A\u0631\u0627\u0646.",
    compTitle: "\u0627\u0644\u0645\u062C\u0627\u0646\u064A \u064A\u062D\u0635\u0644 \u0639\u0644\u0649 \u0639\u0631\u0648\u0636 \u0627\u0644\u0623\u0645\u0633. Premium \u064A\u062D\u0635\u0644 \u0639\u0644\u0649 \u0631\u062D\u0644\u0629 \u0627\u0644\u063A\u062F.", compFree: "\u0645\u062C\u0627\u0646\u064A", compPrem: "Premium",
    comp1: "\u0639\u0631\u0648\u0636 \u0645\u062D\u0644\u064A\u0629", comp2: "\u0639\u0631\u0648\u0636 \u062F\u0648\u0644\u064A\u0629", comp3: "Error fares", comp4: "\u062A\u0646\u0628\u064A\u0647\u0627\u062A \u0641\u0648\u0631\u064A\u0629", comp5: "\u0645\u062C\u062A\u0645\u0639 VIP", comp6: "\u062F\u0639\u0645 \u0623\u0648\u0644\u0648\u064A",
    pricingTitle: "\u0635\u0641\u0642\u0629 \u0648\u0627\u062D\u062F\u0629 \u062A\u062F\u0641\u0639 35 \u0633\u0646\u0629 \u0645\u0646 Premium", pricingSub: "\u0645\u062A\u0648\u0633\u0637 \u062A\u0648\u0641\u064A\u0631 AED 7,700. Premium \u064A\u0643\u0644\u0641 AED 18.90/\u0634\u0647\u0631.",
    freeName: "\u0645\u062C\u0627\u0646\u064A", freePrice: "AED 0", freeF1: "1-2 \u062A\u0646\u0628\u064A\u0647/\u064A\u0648\u0645", freeF2: "\u0642\u0646\u0627\u0629 Telegram \u0639\u0627\u0645\u0629", freeF3: "\u0639\u0631\u0648\u0636 \u0628\u062A\u0623\u062E\u064A\u0631 6-12\u0633\u0627\u0639\u0629", freeF4: "\u0628\u062F\u0648\u0646 error fares", freeCta: "\u0627\u0646\u0636\u0645 \u0645\u062C\u0627\u0646\u0627\u064B",
    premName: "Premium", premPeriod: "/\u0634\u0647\u0631", premF1: "\u062A\u0646\u0628\u064A\u0647\u0627\u062A \u0641\u0648\u0631\u064A\u0629", premF2: "5-10 \u0639\u0631\u0648\u0636 \u062D\u0635\u0631\u064A\u0629/\u064A\u0648\u0645", premF3: "Error fares \u0642\u0628\u0644 \u0627\u0644\u062C\u0645\u064A\u0639", premF4: "\u0623\u0633\u0639\u0627\u0631 \u0628\u0639\u0645\u0644\u062A\u0643", premF5: "\u0645\u062C\u062A\u0645\u0639 VIP", premF6: "\u062F\u0639\u0645 \u0623\u0648\u0644\u0648\u064A", premCta: "\u0623\u0631\u064A\u062F \u062A\u0646\u0628\u064A\u0647\u0627\u062A\u064A!", premBadge: "\u0627\u0644\u0623\u0643\u062B\u0631 \u0634\u0639\u0628\u064A\u0629", premMicro: "\u0625\u0644\u063A\u0627\u0621 \u0641\u064A \u0623\u064A \u0648\u0642\u062A \u2022 \u0628\u062F\u0648\u0646 \u0627\u0644\u062A\u0632\u0627\u0645 \u2022 \u064A\u062F\u0641\u0639 \u0646\u0641\u0633\u0647",
    testTitle: "\u0623\u0639\u0636\u0627\u0621 \u0648\u0641\u0631\u0648\u0627", test1name: "\ud83c\udde6\ud83c\uddea \u0623\u062D\u0645\u062F \u0627\u0644\u0639\u0644\u064A", test1route: "DXB \u2192 \u0644\u0646\u062F\u0646, \u0623\u0628\u0631\u064A\u0644 2026", test1saved: "\u0648\u0641\u0631 AED 2,600", test1quote: "\u062F\u0628\u064A-\u0644\u0646\u062F\u0646 \u0628AED 1,200 \u0630\u0647\u0627\u0628 \u0648\u0625\u064A\u0627\u0628. \u0639\u0627\u062F\u0629 AED 3,800. \u062D\u062C\u0632\u062A \u0641\u064A 5 \u062F\u0642\u0627\u0626\u0642.",
    test2name: "\ud83c\uddf6\ud83c\udde6 \u0641\u0627\u0637\u0645\u0629 \u0627\u0644\u0645\u0631\u064A", test2route: "DOH \u2192 \u0628\u0627\u0644\u064A, \u0645\u0627\u0631\u0633 2026", test2saved: "\u0648\u0641\u0631\u062A AED 2,800", test2quote: "\u0627\u0644\u062F\u0648\u062D\u0629-\u0628\u0627\u0644\u064A \u0628AED 1,400. \u0635\u0631\u062E\u062A \u062D\u0631\u0641\u064A\u0627\u064B. \u0623\u0641\u0636\u0644 AED 19 \u0623\u0646\u0641\u0642\u0647\u0627 \u0634\u0647\u0631\u064A\u0627\u064B.",
    test3name: "\ud83c\uddf8\ud83c\udde6 \u062E\u0627\u0644\u062F \u0627\u0644\u0634\u0645\u0631\u064A", test3route: "RUH \u2192 \u0637\u0648\u0643\u064A\u0648, \u0641\u0628\u0631\u0627\u064A\u0631 2026", test3saved: "\u0648\u0641\u0631 AED 3,500", test3quote: "\u0627\u0644\u0631\u064A\u0627\u0636-\u0637\u0648\u0643\u064A\u0648 \u0628AED 1,700. \u0635\u0641\u0642\u0629 \u0648\u0627\u062D\u062F\u0629 \u063A\u0637\u062A 35 \u0633\u0646\u0629 \u0627\u0634\u062A\u0631\u0627\u0643.",
    faqTitle: "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629", faq1q: "\u0623\u0633\u062A\u062E\u062F\u0645 Google Flights. \u0644\u0645\u0627\u0630\u0627 \u0623\u062D\u062A\u0627\u062C \u0647\u0630\u0627\u061F", faq1a: "Google Flights \u064A\u0639\u0631\u0636 \u0623\u0633\u0639\u0627\u0631 \u0639\u0627\u062F\u064A\u0629. \u0646\u062D\u0646 \u0646\u0639\u0631\u0636 \u0623\u0633\u0639\u0627\u0631 \u062E\u0627\u0637\u0626\u0629 \u2014 error fares.",
    faq2q: "AED 18.90/\u0634\u0647\u0631 \u063A\u0627\u0644\u064A\u061F", faq2a: "AED 18.90/\u0634\u0647\u0631 = AED 0.63/\u064A\u0648\u0645. \u0645\u062A\u0648\u0633\u0637 \u0627\u0644\u062A\u0648\u0641\u064A\u0631 AED 7,700. \u0639\u0627\u0626\u062F 35x.",
    faq3q: "\u0647\u0644 \u0627\u0644\u0639\u0631\u0648\u0636 \u062D\u0642\u064A\u0642\u064A\u0629\u061F", faq3a: "Error fares \u062D\u062C\u0648\u0632\u0627\u062A 100% \u062D\u0642\u064A\u0642\u064A\u0629. 85%+ \u064A\u062A\u0645 \u0627\u062D\u062A\u0631\u0627\u0645\u0647\u0627. \u0627\u0633\u062A\u0631\u062F\u0627\u062F \u0643\u0627\u0645\u0644 \u0625\u0646 \u0623\u064F\u0644\u063A\u064A\u062A.",
    faq4q: "\u0647\u0644 \u064A\u0645\u0643\u0646\u0646\u064A \u0627\u0644\u0625\u0644\u063A\u0627\u0621\u061F", faq4a: "\u0646\u0639\u0645. \u0646\u0642\u0631\u0629 \u0648\u0627\u062D\u062F\u0629. \u0628\u062F\u0648\u0646 \u063A\u0631\u0627\u0645\u0629. \u0641\u0648\u0631\u064A.",
    faq5q: "\u0644\u0645\u0627\u0630\u0627 Telegram\u061F", faq5a: "\u0627\u0644\u0633\u0631\u0639\u0629. Error fares \u062A\u0633\u062A\u0645\u0631 \u0633\u0627\u0639\u0627\u062A. \u0627\u0644\u0628\u0631\u064A\u062F \u064A\u0630\u0647\u0628 \u0644\u0644\u0633\u0628\u0627\u0645. Telegram \u064A\u0648\u0635\u0644 \u0641\u0648\u0631\u0627\u064B.",
    finalTitle: "\u0643\u0644 \u064A\u0648\u0645 \u0628\u062F\u0648\u0646 Premium \u0647\u0648 \u0639\u0631\u0636 \u0636\u0627\u0626\u0639.", finalDesc: "\u0628\u064A\u0646\u0645\u0627 \u062A\u0641\u0643\u0631\u060C \u0623\u0639\u0636\u0627\u0621 Premium \u064A\u062D\u062C\u0632\u0648\u0646 \u0628\u062C\u0632\u0621 \u0645\u0646 \u0627\u0644\u0633\u0639\u0631.", finalCta: "\u0627\u0628\u062F\u0623 \u0627\u0644\u062A\u0648\u0641\u064A\u0631", finalMicro: "\u0625\u0644\u063A\u0627\u0621 \u0641\u064A \u0623\u064A \u0648\u0642\u062A \u2022 \u0636\u0645\u0627\u0646 30 \u064A\u0648\u0645 \u2022 \u064A\u062F\u0641\u0639 \u0646\u0641\u0633\u0647",
    footerText: "Travel Alerts Bot. \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629.",
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
  JP: [
    { img: IMGS.paris, route: 'NRT \u2192 Paris', sub: 'Air France \u2022 Nonstop \u2022 13h', original: '\u00A5185,000', deal: '\u00A558,000', tag: 'ERROR FARE' },
    { img: IMGS.bali, route: 'HND \u2192 Bali', sub: 'Garuda \u2022 Via Jakarta \u2022 10h', original: '\u00A5120,000', deal: '\u00A542,000', tag: 'BUG' },
    { img: IMGS.london, route: 'KIX \u2192 London', sub: 'Turkish \u2022 Via IST \u2022 17h', original: '\u00A5195,000', deal: '\u00A565,000', tag: 'MISTAKE' },
    { img: IMGS.nyc, route: 'NRT \u2192 New York', sub: 'ANA \u2022 Nonstop \u2022 13h', original: '\u00A5165,000', deal: '\u00A555,000', tag: 'ERROR FARE' },
    { img: IMGS.sydney, route: 'HND \u2192 Sydney', sub: 'ANA \u2022 Nonstop \u2022 9h30', original: '\u00A5140,000', deal: '\u00A548,000', tag: 'DEAL' },
    { img: IMGS.cancun, route: 'NRT \u2192 Canc\u00FAn', sub: 'ANA \u2022 Via LAX \u2022 18h', original: '\u00A5210,000', deal: '\u00A568,000', tag: 'ERROR FARE' },
    { img: IMGS.dubai, route: 'NRT \u2192 Dubai', sub: 'Emirates \u2022 Nonstop \u2022 11h', original: '\u00A5175,000', deal: '\u00A556,000', tag: 'BUG' },
    { img: IMGS.bangkok, route: 'KIX \u2192 Bangkok', sub: 'Thai \u2022 Nonstop \u2022 6h', original: '\u00A578,000', deal: '\u00A525,000', tag: 'GLITCH' },
    { img: IMGS.maldivas, route: 'NRT \u2192 Maldives', sub: 'Singapore Air \u2022 Via SIN \u2022 14h', original: '\u00A5200,000', deal: '\u00A565,000', tag: 'ERROR FARE' },
    { img: IMGS.roma, route: 'HND \u2192 Rome', sub: 'ITA Airways \u2022 Nonstop \u2022 13h', original: '\u00A5170,000', deal: '\u00A555,000', tag: 'MISTAKE' },
    { img: IMGS.seoul, route: 'HND \u2192 Seoul', sub: 'ANA \u2022 Nonstop \u2022 2h30', original: '\u00A545,000', deal: '\u00A514,000', tag: 'PROMO' },
    { img: IMGS.capetown, route: 'NRT \u2192 Cape Town', sub: 'Emirates \u2022 Via DXB \u2022 22h', original: '\u00A5250,000', deal: '\u00A582,000', tag: 'ERROR FARE' },
  ],
  CH: [
    { img: IMGS.tokyo, route: 'ZRH \u2192 Tokyo', sub: 'SWISS \u2022 Nonstop \u2022 12h', original: 'CHF 1,200', deal: 'CHF 410', tag: 'ERROR FARE' },
    { img: IMGS.nyc, route: 'GVA \u2192 New York', sub: 'SWISS \u2022 Nonstop \u2022 9h', original: 'CHF 890', deal: 'CHF 280', tag: 'BUG' },
    { img: IMGS.bangkok, route: 'ZRH \u2192 Bangkok', sub: 'Thai \u2022 Nonstop \u2022 11h', original: 'CHF 950', deal: 'CHF 310', tag: 'ERROR FARE' },
    { img: IMGS.dubai, route: 'ZRH \u2192 Dubai', sub: 'Emirates \u2022 Nonstop \u2022 6h', original: 'CHF 680', deal: 'CHF 220', tag: 'DEAL' },
    { img: IMGS.bali, route: 'ZRH \u2192 Bali', sub: 'Singapore Air \u2022 Via SIN \u2022 16h', original: 'CHF 1,300', deal: 'CHF 430', tag: 'MISTAKE' },
    { img: IMGS.maldivas, route: 'ZRH \u2192 Maldives', sub: 'Emirates \u2022 Via DXB \u2022 12h', original: 'CHF 1,400', deal: 'CHF 460', tag: 'ERROR FARE' },
    { img: IMGS.capetown, route: 'ZRH \u2192 Cape Town', sub: 'SWISS \u2022 Via JNB \u2022 14h', original: 'CHF 1,050', deal: 'CHF 340', tag: 'BUG' },
    { img: IMGS.cancun, route: 'GVA \u2192 Canc\u00FAn', sub: 'Edelweiss \u2022 Nonstop \u2022 11h', original: 'CHF 980', deal: 'CHF 320', tag: 'GLITCH' },
    { img: IMGS.paris, route: 'BSL \u2192 Paris', sub: 'easyJet \u2022 Nonstop \u2022 1h', original: 'CHF 180', deal: 'CHF 39', tag: 'PROMO' },
    { img: IMGS.sydney, route: 'ZRH \u2192 Sydney', sub: 'Singapore Air \u2022 Via SIN \u2022 22h', original: 'CHF 1,600', deal: 'CHF 530', tag: 'ERROR FARE' },
    { img: IMGS.seoul, route: 'GVA \u2192 Seoul', sub: 'Korean Air \u2022 Via ICN \u2022 14h', original: 'CHF 1,150', deal: 'CHF 380', tag: 'MISTAKE' },
    { img: IMGS.marrakech, route: 'BSL \u2192 Marrakech', sub: 'easyJet \u2022 Nonstop \u2022 3h', original: 'CHF 350', deal: 'CHF 89', tag: 'DEAL' },
  ],
  CA: [
    { img: IMGS.paris, route: 'YYZ \u2192 Paris', sub: 'Air Canada \u2022 Nonstop \u2022 7h30', original: 'C$1,200', deal: 'C$389', tag: 'ERROR FARE' },
    { img: IMGS.tokyo, route: 'YVR \u2192 Tokyo', sub: 'ANA \u2022 Nonstop \u2022 10h', original: 'C$1,500', deal: 'C$490', tag: 'MISTAKE' },
    { img: IMGS.london, route: 'YUL \u2192 London', sub: 'BA \u2022 Nonstop \u2022 7h', original: 'C$980', deal: 'C$310', tag: 'ERROR FARE' },
    { img: IMGS.bali, route: 'YYZ \u2192 Bali', sub: 'Cathay \u2022 Via HKG \u2022 22h', original: 'C$2,400', deal: 'C$790', tag: 'BUG' },
    { img: IMGS.dubai, route: 'YYZ \u2192 Dubai', sub: 'Emirates \u2022 Nonstop \u2022 12h', original: 'C$1,600', deal: 'C$510', tag: 'ERROR FARE' },
    { img: IMGS.cancun, route: 'YOW \u2192 Canc\u00FAn', sub: 'WestJet \u2022 Nonstop \u2022 5h', original: 'C$680', deal: 'C$189', tag: 'GLITCH' },
    { img: IMGS.iceland, route: 'YUL \u2192 Reykjavik', sub: 'Icelandair \u2022 Nonstop \u2022 5h', original: 'C$750', deal: 'C$210', tag: 'DEAL' },
    { img: IMGS.seoul, route: 'YVR \u2192 Seoul', sub: 'Korean Air \u2022 Nonstop \u2022 11h', original: 'C$1,400', deal: 'C$450', tag: 'ERROR FARE' },
    { img: IMGS.sydney, route: 'YVR \u2192 Sydney', sub: 'Air Canada \u2022 Nonstop \u2022 16h', original: 'C$1,900', deal: 'C$620', tag: 'MISTAKE' },
    { img: IMGS.roma, route: 'YYZ \u2192 Rome', sub: 'Air Canada \u2022 Nonstop \u2022 9h', original: 'C$1,100', deal: 'C$360', tag: 'BUG' },
    { img: IMGS.maldivas, route: 'YYZ \u2192 Maldives', sub: 'Emirates \u2022 Via DXB \u2022 20h', original: 'C$2,600', deal: 'C$850', tag: 'ERROR FARE' },
    { img: IMGS.bangkok, route: 'YVR \u2192 Bangkok', sub: 'EVA Air \u2022 Via Taipei \u2022 16h', original: 'C$1,800', deal: 'C$590', tag: 'PROMO' },
  ],
  KR: [
    { img: IMGS.paris, route: 'ICN \u2192 Paris', sub: 'Korean Air \u2022 Nonstop \u2022 12h', original: '\u20A91,650,000', deal: '\u20A9540,000', tag: 'ERROR FARE' },
    { img: IMGS.bali, route: 'ICN \u2192 Bali', sub: 'Korean Air \u2022 Nonstop \u2022 7h', original: '\u20A9850,000', deal: '\u20A9280,000', tag: 'BUG' },
    { img: IMGS.nyc, route: 'ICN \u2192 New York', sub: 'Asiana \u2022 Nonstop \u2022 14h', original: '\u20A91,800,000', deal: '\u20A9590,000', tag: 'ERROR FARE' },
    { img: IMGS.london, route: 'ICN \u2192 London', sub: 'BA \u2022 Nonstop \u2022 12h', original: '\u20A91,500,000', deal: '\u20A9490,000', tag: 'MISTAKE' },
    { img: IMGS.tokyo, route: 'ICN \u2192 Tokyo', sub: 'Korean Air \u2022 Nonstop \u2022 2h30', original: '\u20A9450,000', deal: '\u20A9140,000', tag: 'PROMO' },
    { img: IMGS.dubai, route: 'ICN \u2192 Dubai', sub: 'Emirates \u2022 Nonstop \u2022 9h30', original: '\u20A91,400,000', deal: '\u20A9450,000', tag: 'ERROR FARE' },
    { img: IMGS.sydney, route: 'ICN \u2192 Sydney', sub: 'Korean Air \u2022 Nonstop \u2022 10h', original: '\u20A91,900,000', deal: '\u20A9620,000', tag: 'BUG' },
    { img: IMGS.bangkok, route: 'ICN \u2192 Bangkok', sub: 'Thai \u2022 Nonstop \u2022 5h30', original: '\u20A9650,000', deal: '\u20A9210,000', tag: 'DEAL' },
    { img: IMGS.maldivas, route: 'ICN \u2192 Maldives', sub: 'Singapore Air \u2022 Via SIN \u2022 12h', original: '\u20A91,700,000', deal: '\u20A9550,000', tag: 'ERROR FARE' },
    { img: IMGS.cancun, route: 'ICN \u2192 Canc\u00FAn', sub: 'Korean Air \u2022 Via LAX \u2022 18h', original: '\u20A92,100,000', deal: '\u20A9680,000', tag: 'GLITCH' },
    { img: IMGS.roma, route: 'ICN \u2192 Rome', sub: 'Korean Air \u2022 Nonstop \u2022 12h', original: '\u20A91,550,000', deal: '\u20A9510,000', tag: 'MISTAKE' },
    { img: IMGS.capetown, route: 'ICN \u2192 Cape Town', sub: 'Emirates \u2022 Via DXB \u2022 20h', original: '\u20A92,200,000', deal: '\u20A9720,000', tag: 'ERROR FARE' },
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
    const letterMatch = rawName.match(/[A-Za-z\u00C0-\u00FF\u0400-\u04FF\u3040-\u9FFF\uAC00-\uD7AF\u0600-\u06FF]/);
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

// Map language to default currency
const LANG_TO_CURR = {
  pt: 'BRL', en: 'USD', es: 'EUR', fr: 'EUR', de: 'EUR', it: 'EUR',
  ru: 'USD', ja: 'JPY', ko: 'KRW', ar: 'AED'
};

// Map language to flag code for display
const LANG_TO_FLAG = {
  pt: 'br', en: 'us', es: 'es', fr: 'fr', de: 'de', it: 'it',
  ru: 'ru', ja: 'jp', ko: 'kr', ar: 'ae'
};

const LANG_LABELS = {
  pt: 'PT-BR', en: 'EN', es: 'ES', fr: 'FR', de: 'DE', it: 'IT',
  ru: 'RU', ja: 'JA', ko: 'KO', ar: 'AR'
};

// Map country to default language (for auto-detect)
const COUNTRY_TO_LANG_MAP = {
  BR: 'pt', PT: 'pt', AO: 'pt', MZ: 'pt',
  ES: 'es', MX: 'es', AR: 'es', CO: 'es', CL: 'es', PE: 'es',
  FR: 'fr', BE: 'fr',
  DE: 'de', AT: 'de', CH: 'de',
  IT: 'it',
  RU: 'ru',
  JP: 'ja',
  KR: 'ko',
  AE: 'ar', SA: 'ar', QA: 'ar', BH: 'ar', KW: 'ar', OM: 'ar',
};

function setLang(lang, curr) {
  currentLang = lang;
  if (curr) currentCurr = curr;
  else currentCurr = LANG_TO_CURR[lang] || 'USD';

  document.documentElement.lang = lang;
  const flag = LANG_TO_FLAG[lang] || 'us';
  const label = LANG_LABELS[lang] || 'EN';
  document.getElementById('lang-flag').src = `https://flagcdn.com/w20/${flag}.png`;
  document.getElementById('lang-label').textContent = label;

  // Pulse CTA text
  const pulseTexts = { pt: 'Quero Meus Alertas!', en: 'Get Alerts Now', es: '\u00A1Mis Alertas!', fr: 'Mes Alertes!', de: 'Meine Alerts!', it: 'I Miei Avvisi!', ru: '\u041C\u043E\u0438 \u0410\u043B\u0435\u0440\u0442\u044B!', ja: '\u30A2\u30E9\u30FC\u30C8\u53D6\u5F97!', ko: '\uC54C\uB9BC \uBC1B\uAE30!', ar: '\u062A\u0646\u0628\u064A\u0647\u0627\u062A\u064A!' };
  document.getElementById('pulse-text').textContent = pulseTexts[lang] || pulseTexts.en;

  // Mark active dropdown option
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  applyAll(lang, currentCurr, currentCountry);
}

document.addEventListener('DOMContentLoaded', async () => {
  const data = await detectCountry();
  currentCountry = data.country || 'US';
  currentCurr = data.currency?.code || 'USD';
  // Auto-detect language from country
  currentLang = COUNTRY_TO_LANG_MAP[currentCountry] || data.lang || 'en';
  // If language doesn't exist in TEXTS, fallback to en
  if (!TEXTS[currentLang]) currentLang = 'en';
  setLang(currentLang, currentCurr);

  // Dropdown toggle
  const selector = document.getElementById('lang-selector');
  document.getElementById('lang-selected').addEventListener('click', (e) => {
    e.stopPropagation();
    selector.classList.toggle('open');
  });

  // Language options
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const lang = opt.dataset.lang;
      const curr = opt.dataset.curr;
      setLang(lang, curr);
      selector.classList.remove('open');
    });
  });

  // Close dropdown on outside click
  document.addEventListener('click', () => selector.classList.remove('open'));

  // FAQ toggle
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => q.parentElement.classList.toggle('open'));
  });
});
