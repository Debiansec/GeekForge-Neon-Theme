import React, { useState } from 'react';
import { ShoppingBag, TrendingUp, Smartphone, ShieldCheck, ArrowUpRight, Zap, CheckCircle2 } from 'lucide-react';

export const DigitalForgeVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'checkout' | 'sales' | 'code'>('checkout');

  return (
    <div className="relative w-full max-w-2xl mx-auto lg:max-w-none perspective-1000">
      {/* Cyber Grid background glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#00E5FF]/10 via-[#A855F7]/15 to-transparent rounded-2xl blur-2xl pointer-events-none" />

      {/* Floating Client Metric Badges (Portfolio Examples) */}
      <div className="absolute -top-4 -left-2 sm:-left-6 z-20 animate-bounce duration-1000">
        <div className="px-3.5 py-2 bg-[#0B0D12]/95 border border-[#00E5FF]/60 rounded-xs shadow-[0_0_18px_rgba(0,229,255,0.35)] backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-xs bg-[#00E5FF]/10 text-[#00E5FF]">
              <TrendingUp className="w-3.5 h-3.5" />
            </span>
            <div>
              <div className="text-xs font-mono font-black text-[#00E5FF] leading-none">+42%</div>
              <div className="text-[9px] font-mono text-gray-400">CONVERSION LIFT*</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -top-6 -right-2 sm:-right-6 z-20">
        <div className="px-3.5 py-2 bg-[#0B0D12]/95 border border-[#A855F7]/60 rounded-xs shadow-[0_0_18px_rgba(168,85,247,0.35)] backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-xs bg-[#A855F7]/10 text-[#A855F7]">
              <ShoppingBag className="w-3.5 h-3.5" />
            </span>
            <div>
              <div className="text-xs font-mono font-black text-[#C084FC] leading-none">R820K+</div>
              <div className="text-[9px] font-mono text-gray-400">MONTHLY GMV*</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 -left-2 sm:-left-4 z-20">
        <div className="px-3.5 py-2 bg-[#0B0D12]/95 border border-[#00FF66]/50 rounded-xs shadow-[0_0_18px_rgba(0,255,102,0.3)] backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-xs bg-[#00FF66]/10 text-[#00FF66]">
              <Smartphone className="w-3.5 h-3.5" />
            </span>
            <div>
              <div className="text-xs font-mono font-black text-[#00FF66] leading-none">24K+</div>
              <div className="text-[9px] font-mono text-gray-400">APP INSTALLS*</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -right-2 sm:-right-4 z-20">
        <div className="px-3.5 py-2 bg-[#0B0D12]/95 border border-amber-400/50 rounded-xs shadow-[0_0_18px_rgba(251,191,36,0.3)] backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 text-xs font-mono font-black">4.9 ★</span>
            <div className="text-[9px] font-mono text-gray-400 leading-none">CLIENT RATING*</div>
          </div>
        </div>
      </div>

      {/* Main Digital Forge Tech Terminal Frame */}
      <div className="relative z-10 bg-[#0B0D12] border border-[#00E5FF]/30 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#050507] border-b border-gray-800 text-xs font-mono">
          <div className="flex items-center gap-2 text-gray-300">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            <span className="text-gray-400 pl-2 text-[11px] hidden sm:inline">
              GEEKFORGE // SYSTEM_CORE_v2.6
            </span>
          </div>

          {/* Quick tab switcher */}
          <div className="flex items-center gap-1 bg-[#11141B] p-0.5 rounded-xs border border-gray-800 text-[10px]">
            <button
              onClick={() => setActiveTab('checkout')}
              className={`px-2 py-0.5 rounded-xs transition-colors ${
                activeTab === 'checkout'
                  ? 'bg-[#00E5FF] text-black font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              COMMERCE
            </button>
            <button
              onClick={() => setActiveTab('sales')}
              className={`px-2 py-0.5 rounded-xs transition-colors ${
                activeTab === 'sales'
                  ? 'bg-[#A855F7] text-white font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              TELEMETRY
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-2 py-0.5 rounded-xs transition-colors ${
                activeTab === 'code'
                  ? 'bg-[#00FF66] text-black font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              GATEWAYS
            </button>
          </div>
        </div>

        {/* Dynamic Display inside Mockup Terminal */}
        <div className="p-4 sm:p-6 bg-[#0B0D12]/90 min-h-[340px] sm:min-h-[380px] flex flex-col justify-between">
          {activeTab === 'checkout' && (
            <div className="space-y-4 animate-in fade-in duration-300">
              {/* Product Store Preview Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-gray-850 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00FF66]" />
                  <span className="text-gray-300 font-bold">DROPSHOP CLIENT SYSTEM</span>
                </div>
                <span className="text-gray-500 text-[10px]">PAYFAST / OZOW LIVE</span>
              </div>

              {/* Order Cart Simulation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 bg-[#11141B] border border-gray-800 rounded-xs space-y-2">
                  <div className="text-[10px] font-mono text-[#00E5FF]">ITEM: APPAREL / TECH COMBO</div>
                  <div className="text-sm font-bold text-white font-display">Cyber Pro Smartwatch + ANC</div>
                  <div className="text-xs font-mono text-gray-400">Qty: 1 · In Stock (Johannesburg Hub)</div>
                  <div className="pt-2 flex items-center justify-between border-t border-gray-800 text-xs font-mono">
                    <span className="text-gray-400">Total ZAR</span>
                    <span className="text-base font-bold text-white">R1,499.00</span>
                  </div>
                </div>

                <div className="p-3 bg-[#11141B] border border-cyan-900/40 rounded-xs space-y-2">
                  <div className="text-[10px] font-mono text-[#00FF66] flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> SA SECURE CHECKOUT PIPELINE
                  </div>
                  <div className="space-y-1.5 pt-1 text-xs font-mono text-gray-300">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Payment:</span>
                      <span className="text-[#00E5FF]">Ozow Instant EFT</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Courier:</span>
                      <span className="text-white">The Courier Guy API</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Speed:</span>
                      <span className="text-[#00FF66]">0.68s Core Web Vital</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="w-full py-1.5 bg-[#00E5FF]/20 border border-[#00E5FF] text-[#00E5FF] font-mono text-center text-xs font-bold rounded-xs flex items-center justify-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 1-TAP ORDER CONFIRMED
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Flow Visualization */}
              <div className="pt-3 border-t border-gray-850">
                <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 pb-1">
                  <span>DISCOVERY</span>
                  <span>→</span>
                  <span>CART</span>
                  <span>→</span>
                  <span className="text-[#00E5FF] font-bold">INSTANT PAY</span>
                  <span>→</span>
                  <span className="text-[#00FF66] font-bold">REVENUE LOCKED</span>
                </div>
                <div className="w-full h-1.5 bg-gray-850 rounded-full overflow-hidden">
                  <div className="w-4/5 h-full bg-gradient-to-r from-[#00E5FF] to-[#00FF66]" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'sales' && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="flex items-center justify-between pb-3 border-b border-gray-850 text-xs font-mono">
                <div className="text-gray-300 font-bold">REVENUE ENGINE ANALYTICS</div>
                <span className="text-[#A855F7] font-mono text-[10px]">LIVE SOUTH AFRICA TRAFFIC</span>
              </div>

              {/* Simulated Metrics Grid */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 bg-[#11141B] border border-gray-800 rounded-xs">
                  <div className="text-[10px] font-mono text-gray-500">TODAY GMV</div>
                  <div className="text-lg font-black font-mono text-white mt-1">R48,320</div>
                  <div className="text-[9px] font-mono text-[#00FF66] mt-1">+28.4% vs yday</div>
                </div>
                <div className="p-3 bg-[#11141B] border border-gray-800 rounded-xs">
                  <div className="text-[10px] font-mono text-gray-500">CHECKOUT RATE</div>
                  <div className="text-lg font-black font-mono text-[#00E5FF] mt-1">5.12%</div>
                  <div className="text-[9px] font-mono text-[#00FF66] mt-1">Avg SA is 1.8%</div>
                </div>
                <div className="p-3 bg-[#11141B] border border-gray-800 rounded-xs">
                  <div className="text-[10px] font-mono text-gray-500">AVG DISPATCH</div>
                  <div className="text-lg font-black font-mono text-[#A855F7] mt-1">14 Min</div>
                  <div className="text-[9px] font-mono text-gray-400 mt-1">Automated</div>
                </div>
              </div>

              {/* Sparkline Graphic */}
              <div className="p-3 bg-[#11141B]/60 border border-gray-800 rounded-xs">
                <div className="flex justify-between text-[10px] font-mono text-gray-400 mb-2">
                  <span>HOURLY SALES CONVERSION</span>
                  <span className="text-[#00FF66]">PEAK: 19:00 - 22:00</span>
                </div>
                <div className="h-16 flex items-end gap-1.5">
                  {[25, 38, 45, 30, 60, 75, 50, 85, 95, 70, 88, 100].map((val, idx) => (
                    <div
                      key={idx}
                      className="flex-1 bg-gradient-to-t from-[#00E5FF]/30 to-[#00E5FF] rounded-t-xs transition-all hover:bg-white"
                      style={{ height: `${val}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="space-y-3 font-mono text-xs animate-in fade-in duration-300">
              <div className="text-[11px] text-gray-400 pb-2 border-b border-gray-850 flex items-center justify-between">
                <span className="text-[#00FF66]">src/gateways/southAfricaPipeline.ts</span>
                <span className="text-gray-600">ESM · TYPE-SAFE</span>
              </div>
              <pre className="p-3 bg-[#050507] border border-gray-850 rounded-xs text-[11px] text-gray-300 overflow-x-auto leading-relaxed">
                <code>
                  <span className="text-[#A855F7]">import</span> {'{'} PayFast, Ozow, Payflex {'}'}{' '}
                  <span className="text-[#A855F7]">from</span>{' '}
                  <span className="text-[#00E5FF]">'@geekforge/za-commerce'</span>;{'\n'}
                  <span className="text-[#A855F7]">import</span> {'{'} CourierGuyAPI {'}'}{' '}
                  <span className="text-[#A855F7]">from</span>{' '}
                  <span className="text-[#00E5FF]">'@geekforge/logistics'</span>;{'\n\n'}
                  <span className="text-gray-500">// Initialize zero-latency payment pipeline</span>{'\n'}
                  <span className="text-[#00E5FF]">export const</span> pipeline ={' '}
                  <span className="text-[#00FF66]">new</span> CommerceForge({'{'}{'\n'}
                  {'  '}region: <span className="text-amber-300">'ZA'</span>,{'\n'}
                  {'  '}gateways: [PayFast, Ozow, Payflex],{'\n'}
                  {'  '}instantEft: <span className="text-[#00FF66]">true</span>,{'\n'}
                  {'  '}abandonedCartRecovery: <span className="text-[#00E5FF]">'WHATSAPP_AUTO'</span>,{'\n'}
                  {'}'});
                </code>
              </pre>
            </div>
          )}

          {/* Micro disclaimer */}
          <div className="pt-3 text-[9px] font-mono text-gray-500 flex items-center justify-between border-t border-gray-850/60">
            <span>*PORTFOLIO DEPLOYMENT EXAMPLES (NOT BLANKET CLAIMS)</span>
            <span className="text-[#00E5FF] flex items-center gap-1">
              <Zap className="w-3 h-3" /> ACTIVE NODE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
