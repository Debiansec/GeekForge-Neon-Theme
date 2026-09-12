import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageSquareCode, ShieldCheck } from 'lucide-react';
import { GeekForgeLogo } from '../common/GeekForgeLogo';
import { DataPulse } from '../common/DataPulse';
import { GlowButton } from '../common/GlowButton';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../../context/LanguageContext';
import { siteConfig } from '../../data/siteConfig';

interface HeaderProps {
  onOpenAudit: () => void;
  onOpenQuoteWizard: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAudit, onOpenQuoteWizard }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav.home'), href: '#hero', num: '01' },
    { label: t('nav.services'), href: '#services', num: '02' },
    { label: t('nav.work'), href: '#portfolio', num: '03' },
    { label: t('nav.caseStudies'), href: '#case-studies', num: '04' },
    { label: t('nav.pricing'), href: '#quote-engine', num: '05' },
    { label: t('nav.testimonials'), href: '#testimonials', num: '06' },
    { label: t('nav.faq'), href: '#faq', num: '07' },
    { label: t('nav.blog'), href: '#blog', num: '08' },
    { label: t('nav.contact'), href: '#contact', num: '09' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-2.5 bg-[#050507]/90 backdrop-blur-xl border-b border-[#00E5FF]/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand + Status Indicator */}
            <div className="flex items-center gap-4">
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#hero');
                }}
                className="group flex items-center gap-3 focus:outline-none"
              >
                <GeekForgeLogo variant="header" />
              </a>

              {/* Glowing status indicator */}
              <div className="hidden lg:flex items-center gap-1.5 pl-3 border-l border-gray-800">
                <DataPulse statusText={t('header.online')} color="green" size="sm" />
                <span className="text-[10px] font-mono text-gray-500 hidden xl:inline">
                  | ZA-CPT-01
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-xs font-mono tracking-widest text-gray-300 hover:text-[#00E5FF] transition-colors relative py-1 group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00E5FF] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#00E5FF]" />
                </a>
              ))}
            </nav>

            {/* Actions: Language + Theme + CTAs */}
            <div className="hidden sm:flex items-center gap-2.5">
              <LanguageToggle />
              <ThemeToggle />

              <a
                href={siteConfig.whatsappLink('Hi GeekForge! I would like to chat about a digital project.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-xs font-mono font-bold text-gray-300 hover:text-[#25D366] hover:bg-[#25D366]/10 border border-gray-800 hover:border-[#25D366]/50 rounded-xs transition-all flex items-center gap-1.5"
              >
                <MessageSquareCode className="w-3.5 h-3.5 text-[#25D366]" />
                <span className="hidden xl:inline">{t('header.whatsapp')}</span>
              </a>

              <GlowButton
                variant="primary"
                size="sm"
                onClick={onOpenAudit}
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                {t('header.freeAudit')}
              </GlowButton>
            </div>

            {/* Mobile Burger Toggle + Language / Theme */}
            <div className="flex items-center gap-2 lg:hidden">
              <LanguageToggle />
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-300 hover:text-[#00E5FF] border border-gray-800 bg-[#0B0D12] rounded-xs cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#00E5FF]" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu — Cyber Command Interface */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050507]/95 backdrop-blur-2xl lg:hidden pt-20 pb-8 px-6 flex flex-col justify-between border-b border-[#00E5FF]/30 animate-in fade-in duration-200 overflow-y-auto">
          <div className="space-y-6">
            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-gray-800 font-mono text-xs">
              <div className="flex items-center gap-2 text-[#00E5FF]">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[11px] sm:text-xs">{t('header.commandMenu')}</span>
              </div>
              <DataPulse statusText={t('header.online')} color="green" size="sm" />
            </div>

            {/* Nav Items */}
            <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono">
              {navLinks.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="w-full text-left flex items-center justify-between py-2 px-3 border border-gray-800/80 hover:border-[#00E5FF]/60 hover:bg-[#00E5FF]/5 rounded-xs text-gray-200 hover:text-[#00E5FF] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] text-[#A855F7] font-mono">{item.num}</span>
                    <span className="text-sm font-bold tracking-wider">{item.label}</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-[#00E5FF] group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </nav>
          </div>

          {/* Bottom CTAs in Mobile Menu */}
          <div className="pt-6 border-t border-gray-800 space-y-3 font-mono mt-6">
            <GlowButton
              variant="primary"
              size="md"
              fullWidth
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              {t('header.freeAudit')} →
            </GlowButton>

            <a
              href={siteConfig.whatsappLink('Hi GeekForge! Connecting from mobile site.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/50 rounded-xs font-bold text-sm"
            >
              <MessageSquareCode className="w-4 h-4" />
              {t('header.whatsapp')} GEEKFORGE
            </a>

            <div className="text-center text-[11px] text-gray-500 pt-2 font-mono">
              GEEKFORGE // SOUTH AFRICA · {siteConfig.buildVersion}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
