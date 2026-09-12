import React, { useState } from 'react';
import { TrendingUp, Layers, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { TechnicalLabel } from '../common/TechnicalLabel';
import { GlowButton } from '../common/GlowButton';
import { CaseStudyItem } from '../../types';
import { caseStudiesData } from '../../data/caseStudies';

interface CaseStudiesSectionProps {
  onRequestSimilar: (caseStudyTitle: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onRequestSimilar }) => {
  const [activeStudyIndex, setActiveStudyIndex] = useState<number>(0);

  const activeStudy = caseStudiesData[activeStudyIndex] || caseStudiesData[0];

  return (
    <section id="case-studies" className="relative py-24 sm:py-32 bg-[#080A0E] border-b border-gray-850">
      <div className="absolute inset-0 cyber-grid-dense opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <TechnicalLabel variant="violet">06 / CASE STUDIES</TechnicalLabel>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-white mt-4 uppercase leading-[0.95]">
            DEEP DIVES INTO <br />
            <span className="text-[#C084FC] text-glow-violet">DIGITAL REVENUE.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl font-sans">
            Real engineering interventions that solved structural bottlenecks, accelerated checkout velocity, and transformed local businesses into digital leaders.
          </p>
        </div>

        {/* Tab Switcher for In-Depth Case Studies */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8 border-b border-gray-850 pb-4 font-mono text-xs">
          {caseStudiesData.map((study, idx) => (
            <button
              key={study.id}
              onClick={() => setActiveStudyIndex(idx)}
              className={`py-3 px-4 rounded-xs border text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${
                activeStudyIndex === idx
                  ? 'bg-[#11141B] border-[#A855F7] text-white shadow-[0_0_15px_rgba(168,85,247,0.25)]'
                  : 'bg-[#0B0D12] border-gray-800 text-gray-400 hover:text-gray-200'
              }`}
            >
              <div>
                <span className="text-[10px] text-[#A855F7] block">CASE STUDY 0{idx + 1}</span>
                <span className="font-bold text-sm font-display">{study.title}</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 bg-emerald-950/40 rounded border border-emerald-800">
                {study.heroMetric}
              </span>
            </button>
          ))}
        </div>

        {/* Selected Case Study In-Depth Display */}
        <div className="bg-[#0B0D12] border border-gray-800 rounded-sm p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Narrative, Challenge & Technical Solution */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                <span className="text-gray-500">CLIENT:</span>
                <span className="text-white font-bold">{activeStudy.client}</span>
                <span className="text-gray-600">·</span>
                <span className="text-gray-500">INDUSTRY:</span>
                <span className="text-[#00E5FF]">{activeStudy.industry}</span>
                <span className="text-gray-600">·</span>
                <span className="text-gray-500">REGION:</span>
                <span className="text-[#00FF66]">{activeStudy.location}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold font-display text-white">
                {activeStudy.subtitle}
              </h3>

              {/* Challenge vs Solution */}
              <div className="space-y-4 pt-2">
                <div className="p-4 bg-[#050507] border-l-2 border-red-500 rounded-r-xs">
                  <div className="text-[10px] font-mono text-red-400 uppercase font-bold">
                    STRUCTURAL BOTTLENECK:
                  </div>
                  <p className="text-sm text-gray-300 font-sans mt-1 leading-relaxed">
                    {activeStudy.challenge}
                  </p>
                </div>

                <div className="p-4 bg-[#050507] border-l-2 border-[#00E5FF] rounded-r-xs">
                  <div className="text-[10px] font-mono text-[#00E5FF] uppercase font-bold">
                    GEEKFORGE INTERVENTION:
                  </div>
                  <p className="text-sm text-gray-300 font-sans mt-1 leading-relaxed">
                    {activeStudy.solution}
                  </p>
                </div>
              </div>

              {/* Outcome Statement */}
              <div className="p-4 bg-[#11141B] border border-emerald-500/30 rounded-xs space-y-2">
                <div className="flex items-center gap-2 text-[#00FF66]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold">VERIFIED REVENUE OUTCOME</span>
                </div>
                <p className="text-sm text-gray-200 font-sans">
                  {activeStudy.outcome}
                </p>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <GlowButton
                  variant="violet"
                  size="md"
                  onClick={() => onRequestSimilar(activeStudy.title)}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  ENGINEER A SIMILAR REVENUE PIPELINE →
                </GlowButton>
              </div>
            </div>

            {/* Right: Metrics Matrix & Architecture Stack */}
            <div className="lg:col-span-5 space-y-6">
              {/* Massive Hero Metric Card */}
              <div className="p-6 bg-[#050507] border border-[#00E5FF]/40 rounded-xs text-center space-y-2">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  {activeStudy.heroMetricLabel}*
                </span>
                <div className="text-4xl sm:text-5xl font-black font-display text-[#00FF66] tracking-tight">
                  {activeStudy.heroMetric}
                </div>
                <div className="text-xs font-mono text-gray-400">
                  Verified In-Production Telemetry
                </div>
              </div>

              {/* Secondary Metrics */}
              <div className="p-5 bg-[#050507] border border-gray-850 rounded-xs space-y-3 font-mono text-xs">
                <div className="text-gray-400 pb-2 border-b border-gray-800 flex justify-between">
                  <span>METRIC TELEMETRY</span>
                  <span className="text-[#00E5FF]">RECORDED IMPACT</span>
                </div>
                {activeStudy.secondaryMetrics.map((m, i) => (
                  <div key={i} className="flex items-center justify-between text-gray-300">
                    <span className="text-gray-500 text-[11px]">{m.label}:</span>
                    <span className="text-[#00FF66] font-bold">{m.value}</span>
                  </div>
                ))}
              </div>

              {/* Tech Architecture Stack */}
              <div className="p-5 bg-[#050507] border border-gray-850 rounded-xs space-y-3">
                <div className="text-xs font-mono text-gray-400 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-[#A855F7]" />
                  <span>DEPLOYED ARCHITECTURE STACK</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeStudy.techStack.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-gray-900 border border-gray-800 text-gray-300 text-xs font-mono rounded-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
