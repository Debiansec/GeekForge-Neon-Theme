import React from 'react';
import {
  Code2,
  ShoppingBag,
  Flame,
  Smartphone,
  CreditCard,
  Truck,
  Database,
  Layers,
  Cpu,
  Server,
  Zap,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface TechItem {
  name: string;
  category: string;
  color: string;
  icon: React.ReactNode;
}

export const TechMarquee: React.FC = () => {
  const { t } = useLanguage();

  const technologies: TechItem[] = [
    {
      name: 'React',
      category: 'UI ARCHITECTURE',
      color: '#00E5FF',
      icon: <Code2 className="w-4 h-4 text-[#00E5FF]" />,
    },
    {
      name: 'WooCommerce',
      category: 'COMMERCE ENGINE',
      color: '#A855F7',
      icon: <ShoppingBag className="w-4 h-4 text-[#A855F7]" />,
    },
    {
      name: 'Shopify Plus',
      category: 'COMMERCE PLATFORM',
      color: '#00FF66',
      icon: <ShoppingBag className="w-4 h-4 text-[#00FF66]" />,
    },
    {
      name: 'Firebase',
      category: 'REALTIME CLOUD',
      color: '#FF9100',
      icon: <Flame className="w-4 h-4 text-[#FF9100]" />,
    },
    {
      name: 'Next.js',
      category: 'SSR PLATFORM',
      color: '#FFFFFF',
      icon: <Layers className="w-4 h-4 text-white" />,
    },
    {
      name: 'TypeScript',
      category: 'STRICT TYPING',
      color: '#3178C6',
      icon: <Cpu className="w-4 h-4 text-[#3178C6]" />,
    },
    {
      name: 'Android Native SDK',
      category: 'MOBILE ENGINE',
      color: '#00FF66',
      icon: <Smartphone className="w-4 h-4 text-[#00FF66]" />,
    },
    {
      name: 'PayFast Gateway',
      category: 'SA PAYMENTS',
      color: '#E11D48',
      icon: <CreditCard className="w-4 h-4 text-[#E11D48]" />,
    },
    {
      name: 'Ozow Instant EFT',
      category: 'INSTANT EFT',
      color: '#00E5FF',
      icon: <Zap className="w-4 h-4 text-[#00E5FF]" />,
    },
    {
      name: 'Payflex BNPL',
      category: 'FLEX PAYMENTS',
      color: '#10B981',
      icon: <CreditCard className="w-4 h-4 text-[#10B981]" />,
    },
    {
      name: 'The Courier Guy API',
      category: 'LOGISTICS DISPATCH',
      color: '#F59E0B',
      icon: <Truck className="w-4 h-4 text-[#F59E0B]" />,
    },
    {
      name: 'Node.js & Express',
      category: 'BACKEND SERVICES',
      color: '#22C55E',
      icon: <Server className="w-4 h-4 text-[#22C55E]" />,
    },
    {
      name: 'Tailwind CSS',
      category: 'DESIGN SYSTEM',
      color: '#38BDF8',
      icon: <Code2 className="w-4 h-4 text-[#38BDF8]" />,
    },
    {
      name: 'Supabase / PostgreSQL',
      category: 'RELATIONAL DATA',
      color: '#3ECF8E',
      icon: <Database className="w-4 h-4 text-[#3ECF8E]" />,
    },
  ];

  // Duplicate for seamless 100% infinite scroll
  const marqueeItems = [...technologies, ...technologies];

  return (
    <div className="relative w-full py-4 bg-[#080A0E] border-y border-gray-850 overflow-hidden select-none">
      {/* Subtle scanline / cyber border background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
            {t('techMarquee.label')}
          </span>
        </div>
        <span className="text-[9px] font-mono text-gray-600 hidden sm:inline">
          LIVE HARDWARE & STACK PIPELINE
        </span>
      </div>

      {/* Fade Gradients at the edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#080A0E] via-[#080A0E]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#080A0E] via-[#080A0E]/80 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="overflow-hidden flex py-1">
        <div className="animate-marquee gap-3 sm:gap-4 flex items-center">
          {marqueeItems.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-2.5 px-3.5 py-2 bg-[#0B0D12] border border-gray-800/90 hover:border-[#00E5FF]/60 rounded-xs transition-all flex-shrink-0 group cursor-default shadow-sm"
            >
              <div className="p-1 rounded bg-[#050507] border border-gray-800 group-hover:border-gray-700">
                {tech.icon}
              </div>

              <div className="flex flex-col text-left font-mono">
                <span className="text-xs font-bold text-gray-200 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
                <span
                  className="text-[9px] tracking-wider uppercase"
                  style={{ color: tech.color }}
                >
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
