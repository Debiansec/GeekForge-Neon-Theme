export type ThemeMode = 'dark' | 'light' | 'system';
export type Language = 'en' | 'af';

export interface FAQItem {
  id: string;
  category: 'timelines' | 'pricing' | 'maintenance' | 'integrations' | 'ownership';
  question: string;
  questionAf: string;
  answer: string;
  answerAf: string;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  label: string;
  title: string;
  priceFrom: string;
  category: string;
  description: string;
  features: string[];
  ctaText: string;
  platforms?: string[];
  visualType: 'android' | 'wordpress' | 'revamp' | 'ecommerce' | 'dropshipping' | 'seo';
  badge?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  tagline: string;
  category: 'ANDROID' | 'ECOMMERCE' | 'WEB' | 'DROPSHIPPING' | 'CUSTOM';
  client: string;
  location: string;
  year: string;
  metrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
  description: string;
  imageTheme: string;
  url?: string;
  featured?: boolean;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  industry: string;
  client: string;
  location: string;
  heroMetric: string;
  heroMetricLabel: string;
  secondaryMetrics: {
    label: string;
    value: string;
  }[];
  challenge: string;
  solution: string;
  features: string[];
  techStack: string[];
  outcome: string;
}

export interface TestimonialItem {
  id: string;
  client: string;
  company: string;
  role: string;
  location: string;
  projectType: string;
  quote: string;
  rating: number;
  date: string;
  transmissionCode: string;
  results?: {
    metric: string;
    label: string;
  }[];
  industry?: string;
  verifiedRevenue?: string;
  techUsed?: string[];
}

export interface BlogPostItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Web Development' | 'eCommerce' | 'SEO' | 'Android' | 'AI' | 'Dropshipping' | 'Business';
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  systemCode: string;
}

export interface QuoteWizardData {
  businessName: string;
  industry: string;
  projectType: string[];
  primaryGoal: string;
  features: string[];
  timeline: string;
  budgetRange: string;
  name: string;
  email: string;
  phone: string;
  website?: string;
  notes?: string;
}
