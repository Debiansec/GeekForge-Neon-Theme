import React, { useState, useEffect } from 'react';
import { MessageCircle, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const WhatsAppButton: React.FC = () => {
  const [activeContext, setActiveContext] = useState<{
    label: string;
    message: string;
  }>({
    label: 'CHAT WITH GEEKFORGE',
    message: 'Hi GeekForge! I would like to chat with your engineering team.',
  });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScrollContext = () => {
      const scrollPos = window.scrollY + 300;

      const servicesEl = document.getElementById('services');
      const portfolioEl = document.getElementById('portfolio');
      const caseStudiesEl = document.getElementById('case-studies');
      const quoteEngineEl = document.getElementById('quote-engine');
      const contactEl = document.getElementById('contact');

      if (contactEl && scrollPos >= contactEl.offsetTop) {
        setActiveContext({
          label: 'DISCUSS A PROJECT',
          message: 'Hi GeekForge! Ready to discuss starting a digital project with your team.',
        });
      } else if (quoteEngineEl && scrollPos >= quoteEngineEl.offsetTop) {
        setActiveContext({
          label: 'GET EXACT PRICING',
          message: 'Hi GeekForge! I checked your project estimator and want an exact proposal.',
        });
      } else if (portfolioEl && scrollPos >= portfolioEl.offsetTop) {
        setActiveContext({
          label: 'DISCUSS A SIMILAR PROJECT',
          message: 'Hi GeekForge! I saw your recent case studies and would love to build something similar.',
        });
      } else if (servicesEl && scrollPos >= servicesEl.offsetTop) {
        setActiveContext({
          label: 'INQUIRE ABOUT SERVICES',
          message: 'Hi GeekForge! I want to inquire about your web, app, or eCommerce engineering services.',
        });
      } else {
        setActiveContext({
          label: 'CHAT WITH GEEKFORGE',
          message: 'Hi GeekForge! I am looking for a high-performance digital solution for my business.',
        });
      }
    };

    window.addEventListener('scroll', handleScrollContext, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollContext);
  }, []);

  return (
    <div
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Contextual Cyber Pill Message */}
      <div
        className={`transition-all duration-300 transform ${
          isHovered
            ? 'opacity-100 translate-x-0 scale-100 pointer-events-auto'
            : 'opacity-0 translate-x-4 scale-95 pointer-events-none sm:opacity-90 sm:translate-x-0 sm:scale-100 sm:pointer-events-auto'
        }`}
      >
        <a
          href={siteConfig.whatsappLink(activeContext.message)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-end px-3.5 py-2 bg-[#0B0D12]/95 backdrop-blur-md border border-[#25D366]/40 hover:border-[#25D366] rounded-xs shadow-[0_0_20px_rgba(37,211,102,0.25)] text-right group"
        >
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-gray-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-[#25D366] font-bold">GEEKFORGE COMMS</span>
            <span className="text-gray-500">· ONLINE</span>
          </div>
          <span className="text-xs font-mono font-bold text-gray-100 group-hover:text-[#25D366] transition-colors">
            {activeContext.label} →
          </span>
        </a>
      </div>

      {/* Floating Neon WhatsApp Button */}
      <a
        href={siteConfig.whatsappLink(activeContext.message)}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-3.5 bg-[#25D366] text-[#050507] rounded-full shadow-[0_0_25px_rgba(37,211,102,0.6)] hover:shadow-[0_0_35px_rgba(37,211,102,0.9)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center border-2 border-white/40"
        aria-label="Direct WhatsApp line with GeekForge"
      >
        {/* Subtle cyber pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping opacity-60 pointer-events-none" />
        <MessageCircle className="w-6 h-6 text-black fill-black relative z-10" />
      </a>
    </div>
  );
};
