export default function handler(req, res) {
  const country = req.headers['x-vercel-ip-country'] || 'US';
  const city = req.headers['x-vercel-ip-city'] || '';

  const COUNTRY_TO_LANG = {
    BR: 'pt', PT: 'pt', AO: 'pt', MZ: 'pt',
    US: 'en', GB: 'en', AU: 'en', CA: 'en', NZ: 'en', IE: 'en', ZA: 'en',
    // Everyone else defaults to English
  };

  const COUNTRY_TO_CURRENCY = {
    BR: { code: 'BRL', symbol: 'R$', name: 'Real' },
    US: { code: 'USD', symbol: 'US$', name: 'Dollar' },
    GB: { code: 'GBP', symbol: '£', name: 'Pound' },
    CH: { code: 'CHF', symbol: 'CHF', name: 'Swiss Franc' },
    AU: { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
    JP: { code: 'JPY', symbol: '¥', name: 'Yen' },
    KR: { code: 'KRW', symbol: '₩', name: 'Won' },
    CA: { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
    AE: { code: 'AED', symbol: 'AED', name: 'Dirham' },
    DK: { code: 'DKK', symbol: 'DKK', name: 'Danish Krone' },
    SE: { code: 'SEK', symbol: 'SEK', name: 'Swedish Krona' },
    NO: { code: 'NOK', symbol: 'NOK', name: 'Norwegian Krone' },
    MX: { code: 'MXN', symbol: 'MX$', name: 'Mexican Peso' },
  };

  // Euro countries
  const EURO_COUNTRIES = [
    'DE','FR','IT','ES','PT','NL','BE','AT','FI','GR','IE',
    'LU','MT','CY','EE','LV','LT','SK','SI','HR'
  ];

  let currency = COUNTRY_TO_CURRENCY[country];
  if (!currency) {
    if (EURO_COUNTRIES.includes(country)) {
      currency = { code: 'EUR', symbol: '€', name: 'Euro' };
    } else {
      currency = { code: 'USD', symbol: 'US$', name: 'Dollar' };
    }
  }

  const lang = COUNTRY_TO_LANG[country] || 'en';

  res.status(200).json({
    country,
    city: decodeURIComponent(city),
    lang,
    currency,
  });
}
