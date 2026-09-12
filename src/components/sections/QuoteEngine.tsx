import React, { useState, useId } from 'react';
import { Sliders, Cpu, ArrowRight, Check, AlertCircle } from 'lucide-react';
import { TechnicalLabel } from '../common/TechnicalLabel';
import { GlowButton } from '../common/GlowButton';
import { calculateProjectEstimate, QuoteCalculatorFactors } from '../../data/pricing';

interface QuoteEngineProps {
  onOpenExactQuote: (estimateSummary: string) => void;
}

export const QuoteEngine: React.FC<QuoteEngineProps> = ({ onOpenExactQuote }) => {
  const pagesSliderId = useId();
  const [factors, setFactors] = useState<QuoteCalculatorFactors>({
    pages: 5,
    hasEcommerce: true,
    hasMobileApp: false,
    hasDropshipping: false,
    hasAiIntegration: true,
    hasAutomation: false,
    hasSeoBooster: true,
    complexity: 'growth',
  });

  const estimate = calculateProjectEstimate(factors);

  const toggleFactor = (key: keyof QuoteCalculatorFactors) => {
    setFactors((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section id="quote-engine" className="relative py-24 sm:py-32 bg-[#050507] border-b border-gray-850">
      <div className="absolute inset-0 cyber-grid-dense opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <TechnicalLabel variant="cyan">03 / PROJECT ENGINE</TechnicalLabel>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-white mt-4 uppercase leading-[0.95]">
            HOW MUCH <br />
            DIGITAL POWER <br />
            <span className="text-[#00E5FF] text-glow-blue">DO YOU NEED?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl font-sans">
            Configure your technical requirements to generate an instant indicative investment range calculated from our canonical South African pricing matrix.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Cyber Sliders and Modules */}
          <div className="lg:col-span-7 space-y-8 bg-[#0B0D12] p-6 sm:p-8 border border-gray-800 rounded-sm shadow-2xl">
            {/* Slider: Number of Pages */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <label htmlFor={pagesSliderId} className="text-gray-300 font-bold flex items-center gap-2">
                  <Sliders className="w-3.5 h-3.5 text-[#00E5FF]" />
                  <span>NUMBER OF CORE PAGES / SCREENS:</span>
                </label>
                <span className="text-base font-bold text-[#00E5FF] font-mono">
                  {factors.pages} {factors.pages === 1 ? 'Page' : 'Pages'}
                </span>
              </div>
              <input
                id={pagesSliderId}
                type="range"
                min="1"
                max="20"
                value={factors.pages}
                onChange={(e) => setFactors({ ...factors, pages: Number(e.target.value) })}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#00E5FF]"
                aria-label="Number of core pages"
              />
              <div className="flex justify-between text-[10px] font-mono text-gray-500">
                <span>1 (Single Page Launchpad)</span>
                <span>10 (Standard Business Hub)</span>
                <span>20+ (Enterprise Portal)</span>
              </div>
            </div>

            {/* Feature Modules Toggles */}
            <div className="space-y-3 pt-4 border-t border-gray-800">
              <span className="text-xs font-mono font-bold text-gray-400 block">
                SELECT ARCHITECTURAL MODULES:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    key: 'hasEcommerce' as const,
                    title: 'eCommerce Store',
                    tag: 'Shopify / Woo (From R1,999)',
                    desc: 'PayFast, Ozow, Yoco & Couriers',
                  },
                  {
                    key: 'hasMobileApp' as const,
                    title: 'Android Application',
                    tag: 'Native Build (From R4,500)',
                    desc: 'Google Play & Push Alerts',
                  },
                  {
                    key: 'hasDropshipping' as const,
                    title: 'Dropshipping Automation',
                    tag: 'DSers / CJ (From R2,999)',
                    desc: 'USD/ZAR sync & auto-fulfillment',
                  },
                  {
                    key: 'hasAiIntegration' as const,
                    title: 'AI Smart Integrations',
                    tag: 'WhatsApp Bot / Quoting',
                    desc: '24/7 autonomous sales responses',
                  },
                  {
                    key: 'hasAutomation' as const,
                    title: 'Business Automation',
                    tag: 'Invoicing & CRM',
                    desc: 'Webhook triggers & accounting',
                  },
                  {
                    key: 'hasSeoBooster' as const,
                    title: 'South African SEO',
                    tag: 'Local & Tech Schema',
                    desc: 'Google Search Console & Core Vitals',
                  },
                ].map((item) => {
                  const isChecked = factors[item.key];
                  return (
                    <button
                      key={item.key}
                      onClick={() => toggleFactor(item.key)}
                      type="button"
                      className={`p-3.5 rounded-xs border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        isChecked
                          ? 'bg-[#11141B] border-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.2)]'
                          : 'bg-[#080A0E] border-gray-850 hover:border-gray-700 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <span className="font-bold text-sm text-white font-mono">
                          {item.title}
                        </span>
                        <div
                          className={`w-4 h-4 rounded-xs border flex items-center justify-center ${
                            isChecked
                              ? 'bg-[#00E5FF] border-[#00E5FF] text-black'
                              : 'border-gray-600'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </div>
                      <div className="text-[10px] font-mono text-[#00E5FF]">{item.tag}</div>
                      <div className="text-xs text-gray-400 font-sans mt-1">{item.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Complexity tier selector */}
            <div className="pt-4 border-t border-gray-800 space-y-2">
              <span className="text-xs font-mono font-bold text-gray-400 block">
                COMPLEXITY & VELOCITY REQUIREMENTS:
              </span>
              <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                {(['starter', 'growth', 'enterprise'] as const).map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setFactors({ ...factors, complexity: tier })}
                    type="button"
                    className={`py-2 px-3 text-center uppercase font-bold border rounded-xs transition-colors cursor-pointer ${
                      factors.complexity === tier
                        ? 'bg-[#A855F7]/20 border-[#A855F7] text-white shadow-[0_0_12px_rgba(168,85,247,0.3)]'
                        : 'bg-[#080A0E] border-gray-800 text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Indicative Price Readout */}
          <div className="lg:col-span-5 bg-[#0B0D12] p-6 sm:p-8 border border-[#00E5FF]/40 rounded-sm relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)] sticky top-28">
            {/* Glowing Corner Accents */}
            <span className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-[#00E5FF]/30 to-transparent pointer-events-none" />

            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-gray-800 text-xs font-mono">
                <span className="text-gray-400 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#00E5FF]" />
                  <span>CALCULATOR TELEMETRY</span>
                </span>
                <span className="text-[#00FF66] font-bold">INDICATIVE ESTIMATE</span>
              </div>

              <div>
                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block">
                  ESTIMATED PROJECT RANGE
                </span>
                <div className="text-3xl sm:text-4xl xl:text-5xl font-black font-display text-white mt-2 tracking-tight text-glow-blue">
                  {estimate.formattedRange}
                </div>
                <div className="text-[11px] font-mono text-[#00E5FF] mt-1">
                  SOUTH AFRICAN RAND (ZAR) · ESTIMATE ONLY
                </div>
              </div>

              {/* Breakdown of selected factors */}
              <div className="p-4 bg-[#050507] border border-gray-850 rounded-xs space-y-2 text-xs font-mono">
                <div className="flex justify-between text-gray-300">
                  <span>Base Architecture:</span>
                  <span className="text-white">{factors.pages} Pages</span>
                </div>
                {factors.hasEcommerce && (
                  <div className="flex justify-between text-gray-300">
                    <span>eCommerce Sales Engine:</span>
                    <span className="text-[#00E5FF]">Shopify / Woo</span>
                  </div>
                )}
                {factors.hasMobileApp && (
                  <div className="flex justify-between text-gray-300">
                    <span>Android Application:</span>
                    <span className="text-[#00FF66]">From R4,500</span>
                  </div>
                )}
                {factors.hasDropshipping && (
                  <div className="flex justify-between text-gray-300">
                    <span>Dropshipping Automation:</span>
                    <span className="text-emerald-400">From R2,999</span>
                  </div>
                )}
                {factors.hasAiIntegration && (
                  <div className="flex justify-between text-gray-300">
                    <span>AI WhatsApp Assistant:</span>
                    <span className="text-[#A855F7]">Included</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-300 pt-2 border-t border-gray-850">
                  <span>Complexity Tier:</span>
                  <span className="text-amber-400 uppercase">{factors.complexity}</span>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="flex items-start gap-2 p-3 bg-gray-900/50 border border-gray-800 rounded-xs text-[11px] font-mono text-gray-400">
                <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>DISCLAIMER:</strong> Final pricing depends on confirmed project requirements and exact scope specifications.
                </span>
              </div>

              {/* CTA */}
              <GlowButton
                variant="primary"
                size="lg"
                fullWidth
                onClick={() =>
                  onOpenExactQuote(
                    `Indicative Estimate: ${estimate.formattedRange} (${factors.pages} pages, complexity: ${factors.complexity})`
                  )
                }
                icon={<ArrowRight className="w-4 h-4" />}
              >
                GET MY EXACT QUOTE →
              </GlowButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
