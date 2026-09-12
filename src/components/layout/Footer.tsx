import React from 'react';
import { ArrowUpRight, ShieldCheck, Terminal, MapPin, Mail, Phone } from 'lucide-react';
import { GeekForgeLogo } from '../common/GeekForgeLogo';
import { siteConfig } from '../../data/siteConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050507] border-t border-gray-800/80 pt-20 pb-12 overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Massive Brand Statement */}
        <div className="pb-16 border-b border-gray-850">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <div className="text-xs font-mono text-[#00E5FF] tracking-[0.3em] uppercase mb-4 flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span>CORE DIRECTIVE // {siteConfig.core}</span>
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tighter text-white leading-none">
                BUILD. GROW.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#A855F7] to-[#C084FC]">
                  DOMINATE ONLINE.
                </span>
              </h2>
            </div>

            <button
              onClick={scrollToTop}
              className="self-start lg:self-end px-5 py-3 border border-gray-800 hover:border-[#00E5FF] bg-[#0B0D12] text-xs font-mono text-gray-300 hover:text-[#00E5FF] transition-all flex items-center gap-2 rounded-xs group"
            >
              <span>TOP OF SYSTEM</span>
              <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-16 border-b border-gray-850">
          {/* Col 1: Identity & Metadata */}
          <div className="lg:col-span-2 space-y-4">
            <GeekForgeLogo variant="full" showTagline />
            <p className="text-sm text-gray-400 font-sans max-w-sm mt-4 leading-relaxed">
              Next-generation South African digital technology and growth agency. We engineer custom WordPress,
              Shopify, WooCommerce, Android apps, dropshipping systems and AI automation that drive real revenue.
            </p>

            <div className="pt-4 space-y-2 font-mono text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>Republic of South Africa · Serving Nationwide</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                <a href={siteConfig.whatsappLink()} className="hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#A855F7]" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#00E5FF] mb-4">
              // NAVIGATION
            </h3>
            <ul className="space-y-2.5 text-xs font-mono text-gray-400">
              {[
                { name: 'HOME', href: '#hero' },
                { name: 'SERVICES', href: '#services' },
                { name: 'WORK / PORTFOLIO', href: '#portfolio' },
                { name: 'CASE STUDIES', href: '#case-studies' },
                { name: 'PRICING ESTIMATOR', href: '#quote-engine' },
                { name: 'INTELLIGENCE BLOG', href: '#blog' },
                { name: 'ABOUT & PRINCIPLES', href: '#principles' },
                { name: 'CONTACT & COMMS', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#00E5FF] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-gray-600 group-hover:text-[#00E5FF]">/</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#A855F7] mb-4">
              // ARSENAL
            </h3>
            <ul className="space-y-2.5 text-xs font-mono text-gray-400">
              {[
                'WORDPRESS WEBSITES',
                'WOOCOMMERCE STORES',
                'SHOPIFY PLATFORMS',
                'ANDROID APPLICATIONS',
                'DROPSHIPPING AUTOMATION',
                'LOCAL & TECHNICAL SEO',
                'AI & WHATSAPP BOTS',
                'CUSTOM DIGITAL SYSTEMS',
              ].map((svc) => (
                <li key={svc}>
                  <a
                    href="#services"
                    className="hover:text-[#A855F7] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-gray-600 group-hover:text-[#A855F7]">/</span>
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Operations & Hours */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-gray-300 mb-4">
              // OPERATIONS
            </h3>
            <div className="space-y-3 text-xs font-mono text-gray-400">
              <div>
                <span className="block text-gray-500 text-[10px]">BUSINESS HOURS</span>
                <span className="text-gray-200">MON — FRI: 08:00 — 18:00</span>
                <span className="block text-gray-200">SAT: 08:00 — 13:00</span>
                <span className="block text-gray-500">SUN: CLOSED</span>
              </div>

              <div className="pt-2">
                <span className="block text-gray-500 text-[10px]">SECURE DISPATCH</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> VERIFIED ZA AGENCY
                </span>
              </div>

              <div className="pt-2">
                <span className="block text-gray-500 text-[10px]">SOCIAL CHANNELS</span>
                <div className="flex items-center gap-3 pt-1">
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#00E5FF] transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#A855F7] transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#00E5FF] transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Meta */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            © 2026 <span className="text-gray-300 font-bold">GeekForge</span>. All rights reserved.
            Official canonical domain: <a href="https://geekforge.co.za" className="text-gray-400 hover:text-white underline">geekforge.co.za</a>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>BUILD: {siteConfig.buildVersion}</span>
            <span>·</span>
            <span>CORE: {siteConfig.core}</span>
            <span>·</span>
            <span className="text-emerald-400">STATUS: {siteConfig.systemStatus}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
