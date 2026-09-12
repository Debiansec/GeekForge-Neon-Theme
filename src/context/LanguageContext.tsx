import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';

interface Translations {
  [key: string]: {
    en: string;
    af: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.home': { en: 'HOME', af: 'TUIS' },
  'nav.services': { en: 'SERVICES', af: 'DIENSTE' },
  'nav.work': { en: 'WORK', af: 'WERK' },
  'nav.caseStudies': { en: 'CASE STUDIES', af: 'GEVALLESTUDIES' },
  'nav.pricing': { en: 'PRICING', af: 'PRYSE' },
  'nav.testimonials': { en: 'PARTNERS', af: 'VENNOTE' },
  'nav.faq': { en: 'FAQ', af: 'VRAE' },
  'nav.blog': { en: 'BLOG', af: 'ARTIKELS' },
  'nav.about': { en: 'ABOUT', af: 'OOR ONS' },
  'nav.contact': { en: 'CONTACT', af: 'KONTAK' },

  // Header & Status
  'header.freeAudit': { en: 'GET A FREE AUDIT', af: 'KRY GRATIS OUDIT' },
  'header.whatsapp': { en: 'WHATSAPP', af: 'WHATSAPP' },
  'header.online': { en: 'ONLINE', af: 'AANLYN' },
  'header.commandMenu': { en: 'SYSTEM MENU // COMMAND INTERFACE', af: 'STELSELKIESLYS // BEVELSKOPPELVLAK' },

  // Hero Section
  'hero.tagline': { en: 'GEEKFORGE / DIGITAL ENGINEERING', af: 'GEEKFORGE / DIGITALE INGENIEURSWESE' },
  'hero.location': { en: 'SOUTH AFRICA · ONLINE', af: 'SUID-AFRIKA · AANLYN' },
  'hero.titleLine1': { en: 'WEBSITES', af: 'WEBWERWE' },
  'hero.titleLine2': { en: 'THAT DRIVE', af: 'WAT WERKLIK' },
  'hero.titleHighlight': { en: 'REAL REVENUE.', af: 'INKOMSTE DRYF.' },
  'hero.lead': {
    en: 'GeekForge designs, develops and deploys high-performance digital solutions for businesses across South Africa.',
    af: 'GeekForge ontwerp, ontwikkel en ontplooi hoëprestasie digitale oplossings vir besighede regoor Suid-Afrika.',
  },
  'hero.sublead': {
    en: 'From professional WordPress websites and powerful WooCommerce stores to Shopify platforms, Android applications, dropshipping systems, AI integrations and SEO — we engineer digital experiences designed to attract customers, generate sales and scale businesses.',
    af: 'Van professionele WordPress-webwerwe en kragtige WooCommerce-winkels tot Shopify-platforms, Android-toepassings, dropshipping-stelsels, KI-integrasies en SEO — ons bou stelsels wat verkope dryf.',
  },
  'hero.startProject': { en: 'START A PROJECT →', af: 'BEGIN \'N PROJEK →' },
  'hero.freeAuditBtn': { en: 'GET FREE WEBSITE AUDIT', af: 'KRY GRATIS WEBOUDIT' },
  'hero.noCommitment': { en: 'NO COMMITMENT REQUIRED', af: 'GEEN VERBINTENIS VEREIS' },
  'hero.saSolutions': { en: 'SOUTH AFRICAN BUSINESS SOLUTIONS', af: 'SUID-AFRIKAANSE BESIGHEIDSOPLOSSINGS' },

  // Tech stack marquee
  'techMarquee.label': {
    en: 'CORE PRODUCTION TECH STACK // DEPLOYED IN SOUTH AFRICA',
    af: 'PRODUKSIE TEGNOLOGIE-STAPEL // ONTPLOOI IN SUID-AFRIKA',
  },

  // FAQ
  'faq.badge': { en: '09 / FREQUENTLY ASKED QUESTIONS', af: '09 / GEREELDE VRAE' },
  'faq.title': { en: 'CLEAR ANSWERS.', af: 'DUIDELIKE ANTWOORDE.' },
  'faq.titleHighlight': { en: 'ZERO GUESSWORK.', af: 'NUL RAAIWERK.' },
  'faq.subtitle': {
    en: 'Everything you need to know about timelines, milestone pricing, South African payment integrations, code ownership and ongoing maintenance.',
    af: 'Alles wat u moet weet oor tydlyne, mylpaalpryse, Suid-Afrikaanse betalingsintegrasies, kode-eienaarskap en deurlopende instandhouding.',
  },

  // Testimonials
  'testimonials.badge': { en: '10 / VERIFIED PARTNERS', af: '10 / BEVESTIGDE VENNOTE' },
  'testimonials.title': { en: 'CLIENT RESULTS &', af: 'KLIËNTRESULTATE &' },
  'testimonials.titleHighlight': { en: 'PARTNER COMMENDATIONS.', af: 'VENNOOT-TERUGVOER.' },
  'testimonials.subtitle': {
    en: 'Direct results and telemetry from South African founders, directors, and operators who transitioned their digital infrastructure to GeekForge.',
    af: 'Werklike resultate en telemetrie van Suid-Afrikaanse besigheidseienaars wat hul digitale infrastruktuur na GeekForge oorgedra het.',
  },

  // General buttons
  'btn.similarBuild': { en: 'REQUEST SIMILAR BUILD →', af: 'VERSOEK SOORTGELYKE STELSEL →' },
  'btn.inspectBlueprint': { en: 'INSPECT BLUEPRINT', af: 'ONDERSOEK BLOUDRUK' },
  'btn.whatsappChat': { en: 'CHAT ON WHATSAPP', af: 'GESELS OP WHATSAPP' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('geekforge-lang') as Language;
      if (saved === 'en' || saved === 'af') {
        return saved;
      }
    }
    return 'en';
  });

  useEffect(() => {
    try {
      localStorage.setItem('geekforge-lang', language);
    } catch {
      // ignore
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[language] || entry.en || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
