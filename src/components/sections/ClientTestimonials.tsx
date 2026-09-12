import React, { useState } from 'react';
import {
  Star,
  Quote,
  ShieldCheck,
  MapPin,
  TrendingUp,
  ArrowRight,
  Zap,
  Building2,
  CheckCircle2,
} from 'lucide-react';
import { TechnicalLabel } from '../common/TechnicalLabel';
import { GlowButton } from '../common/GlowButton';
import { testimonialsData } from '../../data/testimonials';
import { useLanguage } from '../../context/LanguageContext';

interface ClientTestimonialsProps {
  onStartProject: () => void;
  onOpenAudit: () => void;
}

export const ClientTestimonials: React.FC<ClientTestimonialsProps> = ({
  onStartProject,
  onOpenAudit,
}) => {
  const { language, t } = useLanguage();
  const [selectedPartnerId, setSelectedPartnerId] = useState<string>(testimonialsData[0].id);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: language === 'af' ? 'ALLE VENNOTE' : 'ALL PARTNERS' },
    { id: 'ecommerce', label: language === 'af' ? 'E-HANDEL & KLEINHANDEL' : 'ECOMMERCE & RETAIL' },
    { id: 'mobile', label: language === 'af' ? 'ANDROID TOEPASSINGS' : 'ANDROID MOBILE' },
    { id: 'b2b', label: language === 'af' ? 'B2B & INGENIEURSWESE' : 'B2B & SERVICES' },
    { id: 'logistics', label: language === 'af' ? 'LOGISTIEK & VOORSIENING' : 'LOGISTICS' },
  ];

  const filteredTestimonials = testimonialsData.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ecommerce') {
      return (
        item.projectType.toLowerCase().includes('ecommerce') ||
        item.projectType.toLowerCase().includes('shopify') ||
        item.projectType.toLowerCase().includes('woocommerce')
      );
    }
    if (activeFilter === 'mobile') {
      return (
        item.projectType.toLowerCase().includes('android') ||
        item.projectType.toLowerCase().includes('mobile')
      );
    }
    if (activeFilter === 'b2b') {
      return (
        item.industry?.toLowerCase().includes('renewable') ||
        item.projectType.toLowerCase().includes('calculator') ||
        item.industry?.toLowerCase().includes('fmcg')
      );
    }
    if (activeFilter === 'logistics') {
      return item.industry?.toLowerCase().includes('logistics');
    }
    return true;
  });

  const selectedPartner =
    testimonialsData.find((p) => p.id === selectedPartnerId) || testimonialsData[0];

  return (
    <section
      id="testimonials"
      className="relative py-24 sm:py-32 bg-[#050507] border-t border-b border-gray-850 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 -right-60 w-96 h-96 bg-[#00E5FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-60 w-96 h-96 bg-[#A855F7]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="flex justify-center">
            <TechnicalLabel variant="cyan">{t('testimonials.badge')}</TechnicalLabel>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white uppercase leading-[0.92]">
            {t('testimonials.title')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#70d6ff] to-[#C084FC] text-glow-blue">
              {t('testimonials.titleHighlight')}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 font-sans max-w-2xl mx-auto leading-relaxed">
            {t('testimonials.subtitle')}
          </p>

          {/* Filter Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 font-mono text-xs">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3 py-1.5 rounded-xs transition-all cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-[#00E5FF] text-black font-bold shadow-[0_0_12px_rgba(0,229,255,0.35)]'
                    : 'bg-[#0B0D12] border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Partner Spotlight Box */}
        <div className="bg-[#0B0D12] border border-[#00E5FF]/40 rounded-sm p-6 sm:p-8 lg:p-10 mb-12 shadow-[0_0_30px_rgba(0,229,255,0.08)] relative overflow-hidden">
          {/* Subtle top indicator bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00E5FF] via-[#A855F7] to-[#00FF66]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Col: The Partner Quote & Profile */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-amber-400">
                  {[...Array(selectedPartner.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]"
                    />
                  ))}
                  <span className="ml-1 text-xs font-mono font-bold text-gray-400">
                    5.0 VERIFIED
                  </span>
                </div>

                <div className="flex items-center gap-2 font-mono text-[11px] text-[#00FF66] bg-[#00FF66]/10 border border-[#00FF66]/30 px-2.5 py-1 rounded-xs">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{selectedPartner.transmissionCode}</span>
                </div>
              </div>

              {/* Quote text */}
              <div className="relative">
                <Quote className="absolute -top-3 -left-3 w-8 h-8 text-[#00E5FF]/15 pointer-events-none" />
                <p className="text-lg sm:text-xl font-sans text-gray-100 leading-relaxed italic relative z-10">
                  "{selectedPartner.quote}"
                </p>
              </div>

              {/* Partner Credentials */}
              <div className="pt-2 border-t border-gray-800 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-base font-bold text-white font-display">
                    {selectedPartner.client}
                  </div>
                  <div className="text-xs font-mono text-gray-400 flex items-center gap-2 mt-0.5">
                    <Building2 className="w-3.5 h-3.5 text-[#00E5FF]" />
                    <span>{selectedPartner.role} · {selectedPartner.company}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400 bg-[#050507] px-3 py-1.5 rounded-xs border border-gray-800">
                  <MapPin className="w-3.5 h-3.5 text-[#A855F7]" />
                  <span>{selectedPartner.location}</span>
                </div>
              </div>

              {/* Tech Stack used */}
              {selectedPartner.techUsed && (
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-[10px] font-mono text-gray-500 uppercase mr-1">
                    DEPLOYED STACK:
                  </span>
                  {selectedPartner.techUsed.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-[#050507] border border-gray-800 text-[10px] font-mono text-[#00E5FF] rounded-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Right Col: Real-World Quantitative Results */}
            <div className="lg:col-span-5 bg-[#050507] border border-gray-800 p-6 rounded-xs space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#00FF66]" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    QUANTIFIED COMMERCIAL IMPACT
                  </span>
                </div>
                {selectedPartner.verifiedRevenue && (
                  <span className="px-2 py-0.5 bg-[#00FF66]/10 text-[#00FF66] border border-[#00FF66]/30 text-[10px] font-mono font-bold rounded">
                    {selectedPartner.verifiedRevenue}
                  </span>
                )}
              </div>

              {/* Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                {selectedPartner.results?.map((res, i) => (
                  <div
                    key={i}
                    className="p-3.5 bg-[#0B0D12] border border-gray-800/90 rounded-xs flex items-center justify-between"
                  >
                    <span className="text-xs font-mono text-gray-400">{res.label}</span>
                    <span className="text-xl font-mono font-black text-[#00E5FF] text-glow-blue">
                      {res.metric}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-[#00E5FF]/5 border border-[#00E5FF]/20 rounded-xs text-xs font-mono text-gray-300 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00FF66] flex-shrink-0 mt-0.5" />
                <span>
                  Project delivered: <strong className="text-white">{selectedPartner.projectType}</strong>. Deployed on live production domain.
                </span>
              </div>

              <GlowButton
                variant="primary"
                size="sm"
                fullWidth
                onClick={onStartProject}
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                REQUEST SIMILAR ARCHITECTURE
              </GlowButton>
            </div>
          </div>
        </div>

        {/* Partner Carousel / Grid Selector */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {filteredTestimonials.map((partner) => {
            const isSelected = partner.id === selectedPartnerId;
            return (
              <div
                key={partner.id}
                onClick={() => setSelectedPartnerId(partner.id)}
                className={`p-5 bg-[#0B0D12] border rounded-xs cursor-pointer transition-all duration-200 text-left flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#00E5FF] bg-[#0E121A] shadow-[0_0_18px_rgba(0,229,255,0.18)] translate-y-[-2px]'
                    : 'border-gray-800/80 hover:border-gray-700 hover:bg-[#0E1117]'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-gray-500 uppercase">
                      {partner.location}
                    </span>
                    <div className="flex items-center text-amber-400">
                      {[...Array(partner.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs font-sans text-gray-300 line-clamp-3 leading-relaxed">
                    "{partner.quote}"
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-gray-800/80 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white font-display">
                      {partner.client}
                    </div>
                    <div className="text-[10px] font-mono text-gray-400">
                      {partner.company}
                    </div>
                  </div>

                  {partner.results?.[0] && (
                    <div className="text-right">
                      <div className="text-xs font-mono font-bold text-[#00FF66]">
                        {partner.results[0].metric}
                      </div>
                      <div className="text-[9px] font-mono text-gray-500">
                        {partner.results[0].label}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="p-6 sm:p-8 bg-[#0B0D12] border border-gray-800 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xl font-bold font-display text-white">
              {language === 'af'
                ? 'Gereed om u eie digitale suksesverhaal te skryf?'
                : 'Ready to build South Africa\'s next digital success story?'}
            </div>
            <div className="text-xs font-mono text-gray-400">
              {language === 'af'
                ? 'Kry \'n gratis tegniese webwerf-oudit of bespreek \'n argitektuursessie.'
                : 'Get a zero-cost technical website audit or submit your specifications directly.'}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <GlowButton
              variant="outline"
              size="sm"
              onClick={onOpenAudit}
              icon={<Zap className="w-3.5 h-3.5 text-[#00E5FF]" />}
            >
              {language === 'af' ? 'GRATIS OUDIT' : 'FREE AUDIT'}
            </GlowButton>

            <GlowButton
              variant="primary"
              size="sm"
              onClick={onStartProject}
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              {language === 'af' ? 'BEGIN \'N PROJEK' : 'START A PROJECT'}
            </GlowButton>
          </div>
        </div>
      </div>
    </section>
  );
};
