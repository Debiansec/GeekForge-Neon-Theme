import React, { useState } from 'react';
import { Monitor, Tablet, Smartphone, Sparkles, ExternalLink, ShieldCheck, Zap } from 'lucide-react';
import { TechnicalLabel } from '../common/TechnicalLabel';

export const DeviceShowcase: React.FC = () => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const specs = {
    desktop: {
      label: 'ULTRAWIDE DESKTOP ENGINE',
      viewport: '1920 × 1080',
      dpi: '1.0 (Standard)',
      render: 'CHROMIUM HARDWARE ACCEL',
      orientation: 'LANDSCAPE',
      containerWidth: 'w-full max-w-4xl',
      aspectRatio: 'aspect-[16/10]',
    },
    tablet: {
      label: 'IPAD & TABLET HYBRID',
      viewport: '820 × 1180',
      dpi: '2.0 (Retina)',
      render: 'TOUCH CAPACITIVE',
      orientation: 'PORTRAIT',
      containerWidth: 'w-full max-w-lg',
      aspectRatio: 'aspect-[3/4]',
    },
    mobile: {
      label: 'SOUTH AFRICAN MOBILE SMARTPHONE',
      viewport: '390 × 844',
      dpi: '3.0 (OLED)',
      render: 'NATIVE 120Hz',
      orientation: 'PORTRAIT',
      containerWidth: 'w-full max-w-xs',
      aspectRatio: 'aspect-[9/19]',
    },
  };

  const currentSpec = specs[device];

  return (
    <section id="device-stage" className="relative py-24 sm:py-32 bg-[#080A0E] border-b border-gray-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <TechnicalLabel variant="cyan">RESPONSIVE MATRIX TELEMETRY</TechnicalLabel>
            <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white mt-4 uppercase leading-none">
              INTERACTIVE <br />
              <span className="text-[#00E5FF]">DEVICE STAGE.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400 font-sans max-w-xl">
              Preview how our high-performance digital systems dynamically adapt their layout, touch targets, and typography across all South African hardware.
            </p>
          </div>

          {/* Device Toggle Buttons */}
          <div className="flex items-center gap-2 p-1.5 bg-[#0B0D12] border border-gray-800 rounded-xs font-mono text-xs">
            <button
              onClick={() => setDevice('desktop')}
              className={`flex items-center gap-2 px-3 py-2 rounded-xs transition-colors cursor-pointer ${
                device === 'desktop'
                  ? 'bg-[#00E5FF] text-black font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>DESKTOP</span>
            </button>

            <button
              onClick={() => setDevice('tablet')}
              className={`flex items-center gap-2 px-3 py-2 rounded-xs transition-colors cursor-pointer ${
                device === 'tablet'
                  ? 'bg-[#A855F7] text-white font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Tablet className="w-4 h-4" />
              <span>TABLET</span>
            </button>

            <button
              onClick={() => setDevice('mobile')}
              className={`flex items-center gap-2 px-3 py-2 rounded-xs transition-colors cursor-pointer ${
                device === 'mobile'
                  ? 'bg-[#00FF66] text-black font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>MOBILE</span>
            </button>
          </div>
        </div>

        {/* Device Stage Frame */}
        <div className="flex flex-col items-center">
          {/* Spec Telemetry Bar */}
          <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 text-[10px] font-mono p-3 bg-[#0B0D12] border border-gray-850 rounded-xs">
            <div>
              <span className="text-gray-500 block">VIEWPORT:</span>
              <span className="text-[#00E5FF] font-bold">{currentSpec.viewport}</span>
            </div>
            <div>
              <span className="text-gray-500 block">DPI RATIO:</span>
              <span className="text-[#A855F7] font-bold">{currentSpec.dpi}</span>
            </div>
            <div>
              <span className="text-gray-500 block">RENDER PIPELINE:</span>
              <span className="text-[#00FF66] font-bold">{currentSpec.render}</span>
            </div>
            <div>
              <span className="text-gray-500 block">ORIENTATION:</span>
              <span className="text-white font-bold">{currentSpec.orientation}</span>
            </div>
          </div>

          {/* Outer Mockup Bezel */}
          <div
            className={`transition-all duration-500 mx-auto p-4 sm:p-5 bg-gradient-to-b from-gray-800 via-gray-900 to-black border-2 border-gray-700 rounded-[28px] shadow-[0_0_50px_rgba(0,0,0,0.9)] ${currentSpec.containerWidth}`}
          >
            {/* Screen Inner */}
            <div
              className={`w-full bg-[#050507] rounded-[20px] overflow-hidden border border-gray-800 p-4 sm:p-6 flex flex-col justify-between ${currentSpec.aspectRatio}`}
            >
              {/* Fake UI inside Mockup */}
              <div className="space-y-4">
                {/* Micro Browser Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-gray-850 text-[10px] font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                    <span className="text-gray-400 pl-2">https://client-store.geekforge.co.za</span>
                  </div>
                  <span className="text-[#00FF66] hidden sm:inline">SSL 256-BIT ENCRYPTED</span>
                </div>

                {/* Content Simulation */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="font-orbitron font-bold text-white text-sm sm:text-lg tracking-wider">
                      VELOCITY COMMERCE
                    </div>
                    <span className="px-2 py-0.5 bg-[#00E5FF]/20 border border-[#00E5FF] text-[#00E5FF] text-[10px] font-mono rounded">
                      R8,499.00 IN CART
                    </span>
                  </div>

                  <div className="p-4 bg-[#11141B] border border-gray-800 rounded-sm">
                    <div className="text-xs font-mono text-gray-400">INSTANT DISPATCH GATEWAY</div>
                    <div className="text-base sm:text-xl font-bold font-display text-white mt-1">
                      South African High-Performance Logistics & PayFast Hook
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 bg-[#00FF66]/20 text-[#00FF66] font-mono text-[10px] rounded font-bold">
                        FAST CHECKOUT 0.7s
                      </span>
                      <span className="px-2.5 py-1 bg-[#A855F7]/20 text-[#C084FC] font-mono text-[10px] rounded font-bold">
                        GAUTENG SAME-DAY
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Telemetry Bar */}
              <div className="pt-4 border-t border-gray-850 flex items-center justify-between text-[10px] font-mono text-gray-500">
                <span>ACTIVE STAGE: {currentSpec.label}</span>
                <span className="text-[#00E5FF] flex items-center gap-1">
                  <Zap className="w-3 h-3" /> ZERO FRICTION LAYOUT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
