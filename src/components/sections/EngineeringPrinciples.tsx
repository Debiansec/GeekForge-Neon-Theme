import React from 'react';
import { Zap, Smartphone, UserCheck, Search, Cpu, Flag, ArrowUpRight } from 'lucide-react';
import { TechnicalLabel } from '../common/TechnicalLabel';

export const EngineeringPrinciples: React.FC = () => {
  const principles = [
    {
      id: 'perf',
      label: '01 / SPEED',
      title: 'PERFORMANCE',
      code: 'LOAD: < 0.8s',
      symbol: <Zap className="w-6 h-6 text-[#00E5FF]" />,
      color: 'border-cyan-500/40 text-[#00E5FF]',
      desc: 'Sub-second mobile asset delivery and Core Web Vitals optimization. Every 100ms saved preserves transaction conversion.',
    },
    {
      id: 'mobile',
      label: '02 / ARCHITECTURE',
      title: 'MOBILE FIRST',
      code: 'TOUCH: 100% OPTIMIZED',
      symbol: <Smartphone className="w-6 h-6 text-[#00FF66]" />,
      color: 'border-emerald-500/40 text-[#00FF66]',
      desc: 'Over 80% of South African web traffic is on mobile smartphones. We design touch ergonomics and one-thumb flows first.',
    },
    {
      id: 'conversion',
      label: '03 / PSYCHOLOGY',
      title: 'CONVERSION',
      code: 'VISITOR → CUSTOMER',
      symbol: <UserCheck className="w-6 h-6 text-[#A855F7]" />,
      color: 'border-purple-500/40 text-[#A855F7]',
      desc: 'Visual hierarchy, friction-free checkout, trust badges and instant WhatsApp chat triggers designed to capture high-intent inquiries.',
    },
    {
      id: 'seo',
      label: '04 / VISIBILITY',
      title: 'SEO FOUNDATION',
      code: 'GOOGLE ZA #1 TARGET',
      symbol: <Search className="w-6 h-6 text-amber-400" />,
      color: 'border-amber-500/40 text-amber-400',
      desc: 'Schema.org JSON-LD microdata, localized South African city targeting, crawl efficiency and high-intent commercial keywords.',
    },
    {
      id: 'ai',
      label: '05 / AUTONOMY',
      title: 'AI INTEGRATIONS',
      code: 'HUMAN + AI = SCALE',
      symbol: <Cpu className="w-6 h-6 text-[#00E5FF]" />,
      color: 'border-cyan-500/40 text-[#00E5FF]',
      desc: 'Smart WhatsApp customer chatbots, automated quote estimators, automated dropshipping stock sync and lead triage.',
    },
    {
      id: 'za',
      label: '06 / LOCAL REALITY',
      title: 'SOUTH AFRICAN BUSINESS',
      code: 'LOCAL GATEWAYS + COURIER',
      symbol: <Flag className="w-6 h-6 text-[#00FF66]" />,
      color: 'border-emerald-500/40 text-[#00FF66]',
      desc: 'Built specifically for South African commerce: native PayFast, Ozow instant EFT, Payflex BNPL, Yoco, and The Courier Guy APIs.',
    },
  ];

  return (
    <section id="principles" className="relative py-24 sm:py-32 bg-[#050507] border-b border-gray-850">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <TechnicalLabel variant="cyan">04 / ENGINEERING PRINCIPLES</TechnicalLabel>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-white mt-4 uppercase leading-[0.95]">
            NOT JUST <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#A855F7]">
              PRETTY WEBSITES.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl font-sans">
            Our digital forge operates on six uncompromising engineering principles that separate commercial assets from digital novelties.
          </p>
        </div>

        {/* 6 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((item) => (
            <div
              key={item.id}
              className={`p-6 bg-[#0B0D12] border rounded-sm transition-all duration-300 hover:-translate-y-1 ${item.color} group relative overflow-hidden`}
            >
              {/* Corner Tech Decorator */}
              <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-current pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-800/80 font-mono text-[10px]">
                <span className="text-gray-500">{item.label}</span>
                <span className="px-2 py-0.5 bg-black/40 border border-gray-800 rounded text-gray-300 font-bold">
                  {item.code}
                </span>
              </div>

              <div className="mb-4 flex items-center gap-3">
                <div className="p-2.5 bg-[#050507] rounded-xs border border-gray-800">
                  {item.symbol}
                </div>
                <h3 className="text-xl font-bold font-display text-white tracking-wide">
                  {item.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Engineering Notice */}
        <div className="mt-10 p-4 bg-[#0B0D12] border border-gray-800 rounded-xs flex items-center justify-between text-xs font-mono text-gray-500">
          <span>*TECHNICAL METRICS REFLECT TARGET STANDARDS & PORTFOLIO EXAMPLES</span>
          <span className="text-[#00E5FF]">ENGINEERED FOR SOUTH AFRICA</span>
        </div>
      </div>
    </section>
  );
};
