import React, { useState } from 'react';
import {
  ChevronDown,
  HelpCircle,
  Clock,
  DollarSign,
  ShieldCheck,
  Zap,
  Search,
  MessageSquareCode,
  ArrowRight,
  Layers,
} from 'lucide-react';
import { TechnicalLabel } from '../common/TechnicalLabel';
import { GlowButton } from '../common/GlowButton';
import { faqsData } from '../../data/faqs';
import { useLanguage } from '../../context/LanguageContext';
import { siteConfig } from '../../data/siteConfig';

export const FAQAccordion: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>('faq-01');

  const categories = [
    { id: 'all', label: language === 'af' ? 'ALLE VRAE' : 'ALL QUESTIONS' },
    { id: 'timelines', label: language === 'af' ? 'TYDLYNE' : 'TIMELINES' },
    { id: 'pricing', label: language === 'af' ? 'PRYSE & BETALING' : 'PRICING & TERMS' },
    { id: 'maintenance', label: language === 'af' ? 'INSTANDHOUDING' : 'MAINTENANCE & SLA' },
    { id: 'integrations', label: language === 'af' ? 'SA INTEGRASIES' : 'SA INTEGRATIONS' },
    { id: 'ownership', label: language === 'af' ? 'EIENAARSKAP' : 'IP & CODE OWNERSHIP' },
  ];

  const filteredFaqs = faqsData.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const qText = language === 'af' ? faq.questionAf : faq.question;
    const aText = language === 'af' ? faq.answerAf : faq.answer;
    const matchesSearch =
      !searchQuery.trim() ||
      qText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      aText.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#050507] border-b border-gray-850">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="flex justify-center">
            <TechnicalLabel variant="cyan">{t('faq.badge')}</TechnicalLabel>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white uppercase leading-[0.95]">
            {t('faq.title')} <br />
            <span className="text-[#00E5FF] text-glow-blue">{t('faq.titleHighlight')}</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 font-sans max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4 mb-8">
          {/* Real-time Search Input */}
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                language === 'af'
                  ? 'Soek vrae (bv. PayFast, Swart Vrydag, tydlyne, deposito)...'
                  : 'Search questions (e.g. PayFast, turnaround, deposit, SLA, ownership)...'
              }
              className="w-full pl-10 pr-4 py-2.5 bg-[#0B0D12] border border-gray-800 focus:border-[#00E5FF] rounded-xs text-xs font-mono text-white placeholder-gray-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xs transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#00E5FF] text-black font-bold shadow-[0_0_12px_rgba(0,229,255,0.35)]'
                    : 'bg-[#0B0D12] border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 bg-[#0B0D12] border border-gray-800 text-center rounded-xs font-mono text-xs text-gray-400">
              {language === 'af'
                ? 'Geen vrae gevind vir daardie soektog nie. Gesels gerus regstreeks met ons ingenieurs.'
                : 'No technical questions matched your search query. Connect with an engineer directly below.'}
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = expandedId === faq.id;
              const question = language === 'af' ? faq.questionAf : faq.question;
              const answer = language === 'af' ? faq.answerAf : faq.answer;

              return (
                <div
                  key={faq.id}
                  className={`bg-[#0B0D12] border transition-all rounded-xs overflow-hidden ${
                    isOpen
                      ? 'border-[#00E5FF]/70 shadow-[0_0_20px_rgba(0,229,255,0.12)]'
                      : 'border-gray-800/90 hover:border-gray-700'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3 font-mono">
                      <span className="text-xs text-[#00E5FF] font-bold">
                        0{index + 1}
                      </span>
                      {faq.badge && (
                        <span className="hidden sm:inline-block px-2 py-0.5 bg-[#050507] border border-gray-800 text-[9px] text-[#A855F7] uppercase tracking-wider rounded">
                          {faq.badge}
                        </span>
                      )}
                      <span className="text-sm sm:text-base font-bold text-white font-display">
                        {question}
                      </span>
                    </div>

                    <div
                      className={`p-1.5 rounded-xs bg-[#050507] border border-gray-800 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-[#00E5FF] border-[#00E5FF]/50' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-gray-850/80 animate-in fade-in duration-200">
                      <div className="p-4 bg-[#050507] rounded border border-gray-850 text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                        {answer}
                      </div>

                      <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-gray-500">
                        <span>CATEGORY: {faq.category.toUpperCase()}</span>
                        <span className="text-[#00FF66]">STANDARDIZED TERMS // SUID-AFRIKA</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still Have Questions? Banner */}
        <div className="mt-12 p-6 bg-[#0B0D12] border border-gray-800 hover:border-[#00E5FF]/40 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4 transition-all">
          <div className="flex items-center gap-3 text-left">
            <div className="p-3 bg-[#00E5FF]/10 text-[#00E5FF] rounded-xs">
              <MessageSquareCode className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold font-display text-white">
                {language === 'af'
                  ? 'Het u \'n spesifieke tegniese of argitektoniese vraag?'
                  : 'Have a unique architectural or integration requirement?'}
              </div>
              <div className="text-xs font-mono text-gray-400">
                {language === 'af'
                  ? 'Praat regstreeks met ons hoofingenieur oor u stelsel.'
                  : 'Chat directly with our South African engineering team for quick technical clarity.'}
              </div>
            </div>
          </div>

          <a
            href={siteConfig.whatsappLink('Hi GeekForge! I have a question regarding a project build.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/50 rounded-xs font-mono text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <MessageSquareCode className="w-4 h-4" />
            <span>{language === 'af' ? 'GESELS OP WHATSAPP →' : 'CHAT ON WHATSAPP →'}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
