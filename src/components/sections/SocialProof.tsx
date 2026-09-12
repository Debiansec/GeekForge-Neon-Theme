import React from 'react';
import { Star, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { TechnicalLabel } from '../common/TechnicalLabel';
import { testimonialsData } from '../../data/testimonials';

export const SocialProof: React.FC = () => {
  const integrationBadges = [
    { name: 'PayFast', type: 'Payment Gateway' },
    { name: 'Ozow', type: 'Instant EFT' },
    { name: 'Payflex', type: 'Buy Now Pay Later' },
    { name: 'Yoco', type: 'Card Gateway' },
    { name: 'Peach Payments', type: 'Enterprise API' },
    { name: 'The Courier Guy', type: 'Nationwide Logistics' },
    { name: 'Shopify Plus', type: 'Commerce Engine' },
    { name: 'WooCommerce', type: 'WordPress Core' },
    { name: 'Android Studio', type: 'Native SDK' },
  ];

  return (
    <section id="social-proof" className="relative py-24 sm:py-32 bg-[#050507] border-b border-gray-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <TechnicalLabel variant="cyan">07 / CLIENT COMMENDATIONS</TechnicalLabel>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-white mt-4 uppercase leading-[0.95]">
            TRUSTED BY <br />
            <span className="text-[#00E5FF] text-glow-blue">SOUTH AFRICAN OPERATORS.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl font-sans">
            Real feedback from enterprise founders, retail operators, and brand directors who rely on GeekForge digital systems to power their daily commerce.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="p-6 bg-[#0B0D12] border border-gray-800 hover:border-gray-700 rounded-sm flex flex-col justify-between space-y-4 transition-all"
            >
              <div className="space-y-4">
                {/* Rating & Verified Status */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-[10px] font-mono text-[#00FF66] bg-[#00FF66]/10 px-2 py-0.5 rounded border border-[#00FF66]/30">
                    <ShieldCheck className="w-3 h-3" /> VERIFIED CLIENT
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-gray-300 font-sans leading-relaxed">
                  "{t.quote}"
                </p>

                {/* Project type badge */}
                <div className="p-2.5 bg-[#050507] border border-gray-800 rounded-xs text-xs font-mono text-[#00E5FF]">
                  <span className="text-gray-500 block text-[10px]">DEPLOYED SOLUTION:</span>
                  <span className="font-bold">{t.projectType}</span>
                </div>
              </div>

              {/* Author & Project Details */}
              <div className="pt-4 border-t border-gray-850 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white font-display">{t.client}</div>
                  <div className="text-xs font-mono text-gray-400">
                    {t.role}, {t.company}
                  </div>
                </div>
                <span className="text-[10px] font-mono text-gray-500">{t.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Payment & Technology Ecosystem Bar */}
        <div className="mt-16 p-6 bg-[#0B0D12] border border-gray-800 rounded-sm">
          <div className="text-center mb-6">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
              CERTIFIED INTEGRATIONS & SOUTH AFRICAN INFRASTRUCTURE
            </span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3 text-center">
            {integrationBadges.map((badge) => (
              <div
                key={badge.name}
                className="p-3 bg-[#050507] border border-gray-850 rounded-xs hover:border-[#00E5FF]/40 transition-colors"
              >
                <div className="text-xs font-bold font-mono text-gray-200">{badge.name}</div>
                <div className="text-[9px] font-mono text-gray-500 mt-0.5">{badge.type}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
