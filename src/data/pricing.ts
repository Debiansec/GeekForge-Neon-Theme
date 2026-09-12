export interface CanonicalPricePlan {
  id: string;
  name: string;
  priceFormatted: string;
  startingZAR: number;
  description: string;
  turnaroundTime: string;
  includedHighlights: string[];
}

export const CANONICAL_PRICING: Record<string, CanonicalPricePlan> = {
  android: {
    id: 'android',
    name: 'Android Mobile Application',
    priceFormatted: 'From R4,500',
    startingZAR: 4500,
    description: 'Turn your business into a 24/7 digital presence with a native-feel Android app.',
    turnaroundTime: '2 - 4 Weeks',
    includedHighlights: [
      'Custom Android App Build',
      'Push Notifications Engine',
      'eCommerce & Instant Pay (PayFast/Ozow)',
      'Google Play Submission Support',
      'Admin Control Panel',
      'Direct WhatsApp Integration',
      'Full Source Code Ownership',
    ],
  },
  wordpress: {
    id: 'wordpress',
    name: 'Custom WordPress Website',
    priceFormatted: 'From R3,500',
    startingZAR: 3500,
    description: 'Bespoke business websites built for speed, flexibility and aggressive conversion.',
    turnaroundTime: '5 - 10 Business Days',
    includedHighlights: [
      'Engineered WordPress Architecture',
      'Elementor / Custom Blocks',
      'Mobile-First Responsive Layout',
      'High-Intent Lead Capture & WhatsApp',
      'Local South Africa Google Maps',
      'Ultra-Speed & Core Web Vitals < 1s',
      'Bank-Grade Security Hardening',
      'SEO Foundation & AI Chatbot Ready',
    ],
  },
  ecommerce: {
    id: 'ecommerce',
    name: 'eCommerce Store (Shopify & WooCommerce)',
    priceFormatted: 'From R1,999',
    startingZAR: 1999,
    description: 'Full-funnel digital sales machine tailored for South African payment gateways.',
    turnaroundTime: '7 - 14 Business Days',
    includedHighlights: [
      'Shopify or WooCommerce Engine',
      'PayFast, Ozow, Payflex, Yoco & Peach Payments',
      'The Courier Guy & Local Courier APIs',
      'Automated Inventory & Stock Alerts',
      'WhatsApp Commerce Cart Recovery',
      'Mobile Instant One-Page Checkout',
      'SEO & Google Merchant Integration',
    ],
  },
  shopify: {
    id: 'shopify',
    name: 'Shopify Store Build',
    priceFormatted: 'From R1,999',
    startingZAR: 1999,
    description: 'High-converting Shopify storefront with local SA checkout integrations.',
    turnaroundTime: '7 - 14 Business Days',
    includedHighlights: [
      'Shopify 2.0 Modern Liquid Architecture',
      'PayFast, Ozow & Yoco Gateway Configuration',
      'South African Courier Integrations',
      'Abandoned Cart Automated Recovery',
      'Optimized Mobile Cart & Speed Tuning',
    ],
  },
  woocommerce: {
    id: 'woocommerce',
    name: 'WooCommerce Engineered Store',
    priceFormatted: 'From R1,999',
    startingZAR: 1999,
    description: 'Zero-commission, fully-owned WordPress WooCommerce eCommerce store.',
    turnaroundTime: '7 - 14 Business Days',
    includedHighlights: [
      'Zero Transaction Fee Ownership',
      'PayFast, Ozow, Payflex & Peach Payments',
      'Automated Invoicing & VAT compliance',
      'Advanced Wholesale / Retail Tiering',
      'Speed-Optimized Object Caching',
    ],
  },
  dropshipping: {
    id: 'dropshipping',
    name: 'Automated Dropshipping Platform',
    priceFormatted: 'From R2,999',
    startingZAR: 2999,
    description: 'Turnkey automated commerce pipeline connecting international/local suppliers.',
    turnaroundTime: '7 - 12 Business Days',
    includedHighlights: [
      'AliExpress, CJ Dropshipping & DSers Sync',
      'Automated 1-Click Product Importing',
      'Smart USD to ZAR Currency & Margin Markup',
      'Auto-Supplier Order Routing & Tracking',
      'WhatsApp Order Status Notifications',
      'High-Conversion Product Landing Pages',
    ],
  },
  seo: {
    id: 'seo',
    name: 'Search Engine Optimization (SEO)',
    priceFormatted: 'Custom Quote',
    startingZAR: 2500,
    description: 'Build dominant search visibility, domain authority and organic South African leads.',
    turnaroundTime: 'Monthly Ongoing Growth',
    includedHighlights: [
      'South African Local SEO & Google Business Profile',
      'Technical Core Web Vitals & Schema Engineering',
      'Google Search Console & GA4 Setup',
      'High-Intent Keyword Dominance Strategy',
      'Competitor Keyword Theft & Content Audits',
      'Monthly Transparent Traffic & Ranking Telemetry',
    ],
  },
};

export interface QuoteCalculatorFactors {
  pages: number; // 1 to 20
  hasEcommerce: boolean;
  hasMobileApp: boolean;
  hasDropshipping: boolean;
  hasAiIntegration: boolean;
  hasAutomation: boolean;
  hasSeoBooster: boolean;
  complexity: 'starter' | 'growth' | 'enterprise';
}

export function calculateProjectEstimate(factors: QuoteCalculatorFactors): {
  minZAR: number;
  maxZAR: number;
  formattedRange: string;
} {
  let baseMin = 3500;
  let baseMax = 6500;

  // Pages factor
  if (factors.pages > 1) {
    baseMin += (factors.pages - 1) * 350;
    baseMax += (factors.pages - 1) * 650;
  }

  // eCommerce
  if (factors.hasEcommerce) {
    baseMin += 2500;
    baseMax += 5500;
  }

  // Mobile App
  if (factors.hasMobileApp) {
    baseMin += 4500;
    baseMax += 9500;
  }

  // Dropshipping
  if (factors.hasDropshipping) {
    baseMin += 3000;
    baseMax += 6000;
  }

  // AI Integration
  if (factors.hasAiIntegration) {
    baseMin += 2000;
    baseMax += 4500;
  }

  // Automation
  if (factors.hasAutomation) {
    baseMin += 1500;
    baseMax += 3800;
  }

  // SEO Booster
  if (factors.hasSeoBooster) {
    baseMin += 1800;
    baseMax += 3500;
  }

  // Complexity multiplier
  const mult = factors.complexity === 'enterprise' ? 1.4 : factors.complexity === 'growth' ? 1.15 : 1.0;
  
  const minZAR = Math.round((baseMin * mult) / 100) * 100;
  const maxZAR = Math.round((baseMax * mult) / 100) * 100;

  return {
    minZAR,
    maxZAR,
    formattedRange: `R${minZAR.toLocaleString()} — R${maxZAR.toLocaleString()}`,
  };
}

export function getRecommendedBuildForBudget(budgetZAR: number): {
  title: string;
  tier: string;
  items: string[];
  description: string;
  idealFor: string;
} {
  if (budgetZAR < 3000) {
    return {
      title: 'Starter eCommerce / Landing Launchpad',
      tier: 'STARTER LEVEL',
      items: [
        'Shopify / WooCommerce Foundation (From R1,999)',
        'Payment Gateway Integration (PayFast / Yoco / Ozow)',
        'Mobile Responsive One-Page Product Layout',
        'Direct WhatsApp Checkout Trigger',
      ],
      description: 'Quick-to-market setup designed to validate products and capture first orders with minimum friction.',
      idealFor: 'Emerging stores, solo operators & new product test launches.',
    };
  }

  if (budgetZAR < 5000) {
    return {
      title: 'Custom Business WordPress System',
      tier: 'PROFESSIONAL WEB',
      items: [
        'Custom WordPress Website (From R3,500)',
        'Up to 5 High-Conversion Engineered Pages',
        'Mobile-First Layout with Speed Tuning (<1s)',
        'Google Maps & South African Local Schema',
        'WhatsApp Lead Capture System',
      ],
      description: 'A serious digital headquarters designed to convert local searchers into booked clients.',
      idealFor: 'Service businesses, contractors, medical & professional firms.',
    };
  }

  if (budgetZAR < 8500) {
    return {
      title: 'Commerce Growth Machine + Local SEO',
      tier: 'COMMERCE ENGINE',
      items: [
        'Advanced WooCommerce or Shopify Store (From R1,999)',
        'Dropshipping or Direct Catalog Integration (From R2,999)',
        'PayFast, Ozow, Payflex & Peach Payments',
        'The Courier Guy Automated Rate Calculator',
        'Core Web Vitals SEO Optimization & GA4 Tracking',
        'WhatsApp Cart Abandonment Automation',
      ],
      description: 'Engineered for brands ready to scale recurring daily orders and dominate local search keywords.',
      idealFor: 'Retail brands, apparel, electronics & scaling distributors.',
    };
  }

  if (budgetZAR < 14000) {
    return {
      title: 'Omnichannel eCommerce + Android Application',
      tier: 'OMNICHANNEL DOMINANCE',
      items: [
        'Native-Feel Android Mobile Application (From R4,500)',
        'High-Performance eCommerce Store (Shopify / Woo)',
        'Live Push Notifications Engine for Promos & Updates',
        'Bi-directional Product & Inventory Synchronization',
        'VIP WhatsApp VIP Support Channel',
        'Comprehensive Technical SEO Framework',
      ],
      description: 'Turn customers into loyal brand ambassadors who order repeatedly directly from their Android homescreen.',
      idealFor: 'High-frequency commerce, food & beverage, subscription & community brands.',
    };
  }

  return {
    title: 'Enterprise Cyber Suite: App + AI + Full Automation',
    tier: 'ENTERPRISE DOMINATION',
    items: [
      'Custom Android Mobile Application (From R4,500)',
      'Enterprise WordPress / Custom eCommerce Hub',
      'AI Customer Support Chatbot & Lead Qualifier',
      'Automated Order & Invoicing CRM Workflows',
      'Aggressive Local & Technical SEO Domination',
      'Dedicated South African High-Speed Cloud Tuning',
    ],
    description: 'An unfair digital advantage engineered to outpace competition and scale operations autonomously.',
    idealFor: 'Established commercial enterprises, wholesale distributors & scale-ups.',
  };
}
