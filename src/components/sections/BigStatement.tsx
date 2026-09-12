import React, { useState } from 'react';
import { ArrowDown, Check, Terminal, ChevronRight } from 'lucide-react';
import { TechnicalLabel } from '../common/TechnicalLabel';

export const BigStatement: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(2);

  const stages = [
    {
      step: '01',
      title: 'LOOK GOOD',
      subtitle: 'Visually commanding aesthetics that demand immediate respect',
      detail: 'Eliminate outdated, amateur impressions. Modern cyber-clean typography and razor-sharp layout establish instant high-ticket authority.',
    },
    {
      step: '02',
      title: 'LOAD FAST',
      subtitle: 'Sub-second edge performance across South African networks',
      detail: 'Under 0.8s Core Web Vitals. Because if your mobile site takes 3+ seconds to load on local 4G, over 53% of potential buyers bounce before seeing your offer.',
    },
    {
      step: '03',
      title: 'BUILD TRUST',
      subtitle: 'Local social proof, bank-grade encryption & transparent security',
      detail: 'PayFast, Ozow, Yoco badges, verified client transmissions, clear WhatsApp contact channels, and transparent South African business registration.',
    },
    {
      step: '04',
      title: 'CONVERT',
      subtitle: 'Frictionless one-tap checkout and WhatsApp lead capture',
      detail: 'Engineered conversion funnels designed to turn casual scrollers into paying customers, phone calls, or submitted project requests.',
    },
    {
      step: '05',
      title: 'GROW',
      subtitle: 'Scalable infrastructure, recurring revenue & search dominance',
      detail: 'Organic Google #1 rankings, automated order fulfillment pipelines, push notifications, and AI systems that compound revenue month over month.',
    },
  ];

  return (
    <section id="statement" className="relative py-24 sm:py-32 bg-[#050507] border-b border-gray-850 overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Technical Label */}
        <div className="mb-6">
          <TechnicalLabel variant="cyan">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" /> 01 / THE PROBLEM
            </span>
          </TechnicalLabel>
        </div>

        {/* Oversized Headline */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-white leading-none uppercase">
            YOUR WEBSITE <br />
            SHOULD DO MORE <br />
            <span className="text-[#00E5FF] text-glow-blue">THAN LOOK GOOD.</span>
          </h2>

          <div className="mt-6 space-y-3 max-w-2xl text-gray-300 text-base sm:text-lg font-sans leading-relaxed">
            <p className="font-semibold text-white">
              Your website is often the first impression customers have of your business.
            </p>
            <p className="text-gray-400">
              A pretty website with zero conversion engineering is an expensive brochure. We build digital experiences designed to attract attention, build trust, generate enquiries and increase sales.
            </p>
          </div>
        </div>

        {/* Interactive Illuminated Pipeline */}
        <div className="p-6 sm:p-8 bg-[#0B0D12] border border-gray-800 rounded-sm shadow-2xl">
          <div className="flex items-center justify-between pb-6 border-b border-gray-800 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#00E5FF]">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
              <span>THE GEEKFORGE REVENUE PIPELINE</span>
            </div>
            <span className="text-gray-500 hidden sm:inline">CLICK STAGE TO INSPECT SYSTEM</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 pt-6">
            {stages.map((stage, idx) => {
              const isSelected = activeStage === idx;
              return (
                <div
                  key={stage.step}
                  onClick={() => setActiveStage(idx)}
                  className={`relative p-4 rounded-xs border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-[#11141B] border-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.25)]'
                      : 'bg-[#080A0E] border-gray-850 hover:border-gray-700 opacity-75 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-[10px] mb-2">
                    <span className={isSelected ? 'text-[#00E5FF] font-bold' : 'text-gray-500'}>
                      {stage.step}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] inline-block shadow-[0_0_6px_#00FF66]" />
                    )}
                  </div>

                  <div className="font-display font-black text-lg sm:text-xl text-white tracking-wider mb-1">
                    {stage.title}
                  </div>

                  <div className="text-xs text-gray-400 font-sans leading-snug line-clamp-2">
                    {stage.subtitle}
                  </div>

                  {idx < stages.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                      <span className="text-gray-600 font-mono">→</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Expanded Selected Stage Detail */}
          <div className="mt-6 p-4 sm:p-5 bg-[#050507] border border-gray-800 rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-[11px] font-mono text-[#A855F7] uppercase tracking-wider">
                STAGE {stages[activeStage].step} SPECIFICATION // {stages[activeStage].title}
              </div>
              <p className="text-sm text-gray-200 font-sans max-w-3xl">
                {stages[activeStage].detail}
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="px-3 py-1.5 bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 text-xs font-mono font-bold rounded-xs flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" /> REVENUE CRITICAL
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
