import React from 'react';
import { ArrowRight, Zap, CheckCircle2, ShieldCheck } from 'lucide-react';
import { TechnicalLabel } from '../common/TechnicalLabel';
import { GlowButton } from '../common/GlowButton';
import { DigitalForgeVisual } from './DigitalForgeVisual';
import { useLanguage } from '../../context/LanguageContext';

interface HeroProps {
  onStartProject: () => void;
  onOpenAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onOpenAudit }) => {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-center overflow-hidden bg-[#050507]"
    >
      {/* Background Cyber Grid & Atmospheric Glow */}
      <div className="absolute inset-0 cyber-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#A855F7]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Aggressive Typography & Direct Statements */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Technical micro-label */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <TechnicalLabel variant="cyan" glow>
                {t('hero.tagline')}
              </TechnicalLabel>
              <span className="text-xs font-mono text-gray-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00FF66] inline-block animate-pulse" />
                {t('hero.location')}
              </span>
            </div>

            {/* Enormous Headline */}
            <div className="space-y-1">
              <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black font-display tracking-tight text-white leading-[0.92] uppercase">
                {t('hero.titleLine1')} <br />
                {t('hero.titleLine2')} <br />
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#70d6ff] to-[#C084FC] text-glow-blue">
                  {t('hero.titleHighlight')}
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#00E5FF] to-[#A855F7] opacity-80" />
                </span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <div className="space-y-3 max-w-2xl">
              <p className="text-lg sm:text-xl font-semibold text-gray-200 leading-relaxed font-sans">
                {t('hero.lead')}
              </p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-sans">
                {t('hero.sublead')}
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <GlowButton
                variant="primary"
                size="lg"
                onClick={onStartProject}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                {t('hero.startProject')}
              </GlowButton>

              <GlowButton
                variant="outline"
                size="lg"
                onClick={onOpenAudit}
                icon={<Zap className="w-4 h-4 text-[#00E5FF]" />}
              >
                {t('hero.freeAuditBtn')}
              </GlowButton>
            </div>

            {/* Microcopy & Trust Metadata */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-gray-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF66]" />
                <span>{t('hero.noCommitment')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>{t('hero.saSolutions')}</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-500">
                <span>CANONICAL: geekforge.co.za</span>
              </div>
            </div>
          </div>

          {/* Right Column: Digital Forge 3D Interactive Composition */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <DigitalForgeVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
