export const siteConfig = {
  name: 'GeekForge',
  tagline: 'BUILD. GROW. DOMINATE ONLINE.',
  heroHeadline: 'WEBSITES THAT DRIVE REAL REVENUE.',
  url: 'https://geekforge.co.za',
  canonicalDomain: 'geekforge.co.za',
  phone: '+27 50 058 6175',
  phoneRaw: '27500586175',
  email: 'admin@geekforge.co.za',
  region: 'South Africa',
  systemStatus: 'ONLINE',
  buildVersion: '2026.09',
  core: 'GEEKFORGE',
  
  businessHours: {
    weekdays: '08:00 — 18:00',
    saturday: '08:00 — 13:00',
    sunday: 'CLOSED',
  },
  
  social: {
    facebook: 'https://facebook.com/geekforgeza',
    instagram: 'https://instagram.com/geekforgeza',
    linkedin: 'https://linkedin.com/company/geekforgeza',
  },
  
  whatsappLink: (contextMessage?: string) => {
    const text = encodeURIComponent(
      contextMessage || 'Hi GeekForge! I am interested in building a high-performance digital project for my business.'
    );
    return `https://wa.me/27500586175?text=${text}`;
  },
};
