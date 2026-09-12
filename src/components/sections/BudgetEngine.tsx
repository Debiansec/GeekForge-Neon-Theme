import React, { useState, useId } from 'react';
import { Wallet, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { TechnicalLabel } from '../common/TechnicalLabel';
import { GlowButton } from '../common/GlowButton';
import { getRecommendedBuildForBudget } from '../../data/pricing';

interface BudgetEngineProps {
  onSelectBudgetBuild: (budgetStr: string, recommendation: string) => void;
}

export const BudgetEngine: React.FC<BudgetEngineProps> = ({ onSelectBudgetBuild }) => {
  const budgetSliderId = useId();
  const [budget, setBudget] = useState<number>(10000);

  const recommendation = getRecommendedBuildForBudget(budget);

  return (
    <section id="budget-engine" className="relative py-20 bg-[#080A0E] border-b border-gray-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <TechnicalLabel variant="violet">BUDGET ALLOCATION MATRIX</TechnicalLabel>
          <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white mt-4 uppercase leading-none">
            ENTER YOUR <br />
            <span className="text-[#C084FC]">BUDGET.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 font-sans">
            Slide to match your company's digital investment capital and discover the highest-leverage system GeekForge can engineer for you.
          </p>
        </div>

        {/* Giant Interactive Number Box */}
        <div className="max-w-4xl mx-auto p-6 sm:p-10 bg-[#0B0D12] border border-purple-500/30 rounded-sm shadow-2xl space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
              PLANNED INVESTMENT IN ZAR
            </span>
            <div className="text-5xl sm:text-7xl font-black font-display text-white tracking-tight text-glow-violet">
              R{budget.toLocaleString()}
            </div>
          </div>

          {/* Slider */}
          <div className="space-y-2">
            <label htmlFor={budgetSliderId} className="sr-only">Budget in ZAR</label>
            <input
              id={budgetSliderId}
              type="range"
              min="2000"
              max="25000"
              step="500"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full h-3 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#A855F7]"
              aria-label="Planned budget in South African Rand"
            />
            <div className="flex justify-between text-xs font-mono text-gray-400 pt-1">
              <span>R2,000 (Starter)</span>
              <span>R10,000 (Growth)</span>
              <span>R25,000+ (Enterprise)</span>
            </div>
          </div>

          {/* Recommended Build Card */}
          <div className="p-6 bg-[#050507] border border-gray-800 rounded-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-850 font-mono text-xs">
              <div className="flex items-center gap-2 text-[#00E5FF]">
                <Sparkles className="w-4 h-4 text-[#A855F7]" />
                <span className="font-bold">RECOMMENDED BUILD // {recommendation.tier}</span>
              </div>
              <span className="text-emerald-400 font-bold">OPTIMAL ROI MATCH</span>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                {recommendation.title}
              </h3>
              <p className="text-sm text-gray-400 font-sans mt-1">
                {recommendation.description}
              </p>
            </div>

            {/* Included Architectural Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 font-mono text-xs text-gray-300">
              {recommendation.items.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00FF66] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-gray-850">
              <div className="text-xs font-mono text-gray-400">
                <span className="text-gray-500">IDEAL FOR: </span>
                <span className="text-gray-300">{recommendation.idealFor}</span>
              </div>

              <GlowButton
                variant="violet"
                size="md"
                onClick={() =>
                  onSelectBudgetBuild(
                    `R${budget.toLocaleString()}`,
                    recommendation.title
                  )
                }
                icon={<ArrowRight className="w-4 h-4" />}
              >
                REQUEST THIS BUILD →
              </GlowButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
