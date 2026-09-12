import { CaseStudyItem } from '../types';

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: 'dropshop-flagship',
    title: 'DROPSHOP',
    subtitle: 'ANDROID ECOMMERCE & CONSUMER ELECTRONICS FLIGHT',
    category: 'ANDROID / ECOMMERCE / ELECTRONICS',
    industry: 'Consumer Technology & Gadgets',
    client: 'DropShop Retail South Africa',
    location: 'Gauteng, ZA',
    heroMetric: '18.4K+',
    heroMetricLabel: 'Active App Users',
    secondaryMetrics: [
      { label: 'Checkout Conversion', value: '4.8%' },
      { label: 'Google Play Rating', value: '4.9 ★' },
      { label: 'Average Order Value', value: 'R780' },
      { label: 'Mobile Repeat Rate', value: '46%' },
    ],
    challenge:
      'DropShop was losing over 68% of potential mobile shoppers on a sluggish web-only storefront with high cart abandonment and clunky mobile payment flows.',
    solution:
      'GeekForge engineered a native Android application paired with a modern high-speed checkout pipeline. We implemented 1-tap instant EFT via Ozow, biometric payment authentication, automated push alerts for flash sales, and live courier tracking via The Courier Guy API.',
    features: [
      'Instant Checkout Architecture',
      'High-Priority Push Notifications',
      'The Courier Guy Live Waybill Tracking',
      'PayFast & Ozow Instant Banking Integration',
      'Offline-first Product Caching',
    ],
    techStack: ['Android Native Build', 'Node.js Gateway', 'PayFast', 'Ozow', 'Firebase Cloud Messaging'],
    outcome:
      'Within 90 days of deploying the Android app, DropShop achieved 18.4K+ verified installs, a 4.8% checkout conversion rate (nearly triple their prior mobile web rate), and processed over R2.1M in mobile-first sales.',
  },
  {
    id: 'solardirect-spec',
    title: 'SOLARDIRECT',
    subtitle: 'INTERACTIVE COMMERCIAL SOLAR CALCULATOR & LEAD ENGINE',
    category: 'CUSTOM DIGITAL PLATFORM / B2B SEO',
    industry: 'Renewable Clean Energy',
    client: 'SolarDirect Engineering',
    location: 'Western Cape, ZA',
    heroMetric: '480+',
    heroMetricLabel: 'High-Ticket Inquiries / Month',
    secondaryMetrics: [
      { label: 'Average Quote Value', value: 'R145,000' },
      { label: 'Google Rank #1', value: '14 Core Keywords' },
      { label: 'Interactive ROI Runs', value: '12,400+' },
      { label: 'Form Completion', value: '34.2%' },
    ],
    challenge:
      'Commercial clients were intimidated by complex technical solar jargon and kilowatt calculations, leading to long multi-month sales cycles and missed opportunities during loadshedding peaks.',
    solution:
      'GeekForge built a bespoke 3-step interactive Solar Sizing and Eskom Cost Offset calculator. Prospective factory and warehouse owners enter their monthly electricity bill to instantly see their required inverter/battery sizing, 5-year savings projection, and receive an instant engineering spec sheet via WhatsApp and email.',
    features: [
      'Dynamic Kilowatt-hour Mathematical Model',
      'Municipal & Eskom Tariff Database Integration',
      'Instant PDF Spec Sheet Generation',
      'Direct Sales Rep WhatsApp Routing',
      'Technical SEO Core Web Vitals Optimization',
    ],
    techStack: ['TypeScript', 'Custom WordPress Headless', 'Tailwind CSS', 'WhatsApp Business API', 'GA4 Custom Funnels'],
    outcome:
      'SolarDirect surged from Page 4 to #1 on Google South Africa for commercial solar systems in Cape Town and Gauteng, capturing over 480 verified project RFQs per month with an average project value of R145,000.',
  },
  {
    id: 'fashion-express-scale',
    title: 'FASHION EXPRESS',
    subtitle: 'HIGH-VELOCITY SHOPIFY 2.0 APPAREL FLAGSHIP',
    category: 'SHOPIFY / COMMERCE / SPEED',
    industry: 'Apparel & Streetwear',
    client: 'Fashion Express ZA',
    location: 'Cape Town, ZA',
    heroMetric: 'R920K+',
    heroMetricLabel: 'Monthly GMV Processed',
    secondaryMetrics: [
      { label: 'Mobile Conversion', value: '+38%' },
      { label: 'Page Load Speed', value: '0.72s' },
      { label: 'Payflex BNPL Share', value: '34%' },
      { label: 'Abandoned Cart Recovery', value: '22.4%' },
    ],
    challenge:
      'High mobile traffic from Instagram campaigns was bouncing due to 4+ second load times and a disjointed multi-step checkout requiring excessive manual data entry.',
    solution:
      'Complete replatforming onto Shopify 2.0 with custom lightweight Liquid architecture, sub-second asset delivery, automated Payflex 4-installment messaging, and automated WhatsApp cart recovery messages triggered within 15 minutes of abandonment.',
    features: [
      'Sub-second Mobile Asset Optimization',
      'Payflex 4-installment Calculator',
      'Peach Payments & Ozow EFT Integration',
      'The Courier Guy Automated Fulfillment Dispatch',
      'Automated WhatsApp Cart Re-engagement',
    ],
    techStack: ['Shopify 2.0', 'Custom Liquid', 'Payflex API', 'The Courier Guy', 'Klaviyo + WhatsApp'],
    outcome:
      'Mobile conversion lifted by 38%, page speed dropped to 0.72s on standard 4G South African cellular connections, and monthly GMV sustainably crossed R920K.',
  },
];
