const rateLimit = {};

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limiting: 30 requests/minute per IP
  const ip = req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || 'unknown';
  const now = Date.now();
  if (rateLimit[ip] && rateLimit[ip].count >= 30 && now - rateLimit[ip].start < 60000) {
    return res.status(429).json({ error: 'Too many requests' });
  }
  if (!rateLimit[ip] || now - rateLimit[ip].start >= 60000) {
    rateLimit[ip] = { count: 1, start: now };
  } else {
    rateLimit[ip].count++;
  }

  // Clean old entries every 100 requests to prevent memory leak
  if (Object.keys(rateLimit).length > 1000) {
    for (const key in rateLimit) {
      if (now - rateLimit[key].start > 120000) delete rateLimit[key];
    }
  }

  const country = req.headers['x-vercel-ip-country'] || 'US';
  const rawCity = req.headers['x-vercel-ip-city'] || '';

  let city = '';
  try { city = decodeURIComponent(rawCity); } catch { city = rawCity; }

  const COUNTRY_TO_LANG = {
    BR: 'pt', PT: 'pt', AO: 'pt', MZ: 'pt',
    US: 'en', GB: 'en', AU: 'en', CA: 'en', NZ: 'en', IE: 'en', ZA: 'en',
    ES: 'es', MX: 'es', AR: 'es', CO: 'es', CL: 'es', PE: 'es',
    FR: 'fr', BE: 'fr',
    DE: 'de', AT: 'de', CH: 'de',
    IT: 'it', RU: 'ru', JP: 'ja', KR: 'ko',
    AE: 'ar', SA: 'ar', QA: 'ar', BH: 'ar', KW: 'ar', OM: 'ar',
  };

  const COUNTRY_TO_CURRENCY = {
    BR: { code: 'BRL', symbol: 'R$', name: 'Real' },
    US: { code: 'USD', symbol: 'US$', name: 'Dollar' },
    GB: { code: 'GBP', symbol: '\u00A3', name: 'Pound' },
    CH: { code: 'CHF', symbol: 'CHF', name: 'Swiss Franc' },
    AU: { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
    JP: { code: 'JPY', symbol: '\u00A5', name: 'Yen' },
    KR: { code: 'KRW', symbol: '\u20A9', name: 'Won' },
    CA: { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
    AE: { code: 'AED', symbol: 'AED', name: 'Dirham' },
    DK: { code: 'DKK', symbol: 'DKK', name: 'Danish Krone' },
    SE: { code: 'SEK', symbol: 'SEK', name: 'Swedish Krona' },
    NO: { code: 'NOK', symbol: 'NOK', name: 'Norwegian Krone' },
    MX: { code: 'MXN', symbol: 'MX$', name: 'Mexican Peso' },
  };

  const EURO_COUNTRIES = [
    'DE','FR','IT','ES','PT','NL','BE','AT','FI','GR','IE',
    'LU','MT','CY','EE','LV','LT','SK','SI','HR'
  ];

  let currency = COUNTRY_TO_CURRENCY[country];
  if (!currency) {
    if (EURO_COUNTRIES.includes(country)) {
      currency = { code: 'EUR', symbol: '\u20AC', name: 'Euro' };
    } else {
      currency = { code: 'USD', symbol: 'US$', name: 'Dollar' };
    }
  }

  const lang = COUNTRY_TO_LANG[country] || 'en';

  // No edge cache - response is per-user (based on IP geolocation)
  res.setHeader('Cache-Control', 'private, no-cache');
  res.status(200).json({ country, city, lang, currency });
}
