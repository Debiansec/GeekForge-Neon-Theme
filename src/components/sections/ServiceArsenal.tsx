import React, { useState } from 'react';
import {
  Smartphone,
  Globe,
  RefreshCw,
  ShoppingBag,
  Truck,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Sparkles,
  Search,
  ExternalLink,
} from 'lucide-react';
import { TechnicalLabel } from '../common/TechnicalLabel';
import { GlowButton } from '../common/GlowButton';
import { NeonBorder } from '../common/NeonBorder';
import { CANONICAL_PRICING } from '../../data/pricing';

interface ServiceArsenalProps {
  onSelectService: (serviceName: string) => void;
}

export const ServiceArsenal: React.FC<ServiceArsenalProps> = ({ onSelectService }) => {
  const [wireframeMode, setWireframeMode] = useState<boolean>(false);
  const [revampSliderPos, setRevampSliderPos] = useState<number>(50);
  const [ecommerceStep, setEcommerceStep] = useState<number>(2);

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#080A0E] border-b border-gray-850">
      {/* Background cyber ambiance */}
      <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <TechnicalLabel variant="violet" glow>
            02 / DIGITAL ARSENAL
          </TechnicalLabel>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-white mt-4 uppercase leading-[0.95]">
            TECHNOLOGY <br />
            BUILT TO MOVE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#A855F7]">
              BUSINESS FORWARD.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl font-sans">
            Six specialized digital capabilities engineered to outperform competitors, capture high-value customers and generate measurable profit.
          </p>
        </div>

        <div className="space-y-16">
          {/* SERVICE 01 — ANDROID APPLICATIONS */}
          <div className="p-6 sm:p-10 bg-[#0B0D12] border border-cyan-500/30 rounded-sm relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <TechnicalLabel variant="cyan">01 / MOBILE ENGINEERING</TechnicalLabel>
                  <span className="text-xs font-mono font-bold text-[#00FF66] bg-[#00FF66]/10 px-2.5 py-1 border border-[#00FF66]/30 rounded-xs">
                    {CANONICAL_PRICING.android.priceFormatted}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight uppercase leading-none">
                  ANDROID <br />
                  <span className="text-[#00E5FF]">APPLICATIONS</span>
                </h3>

                <p className="text-base text-gray-300 font-sans leading-relaxed">
                  Turn your business into a 24/7 digital experience with a custom Android application. South Africa is over 80% Android — reach your customers directly on their primary screen with native push alerts and instant banking checkout.
                </p>

                {/* Features list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 font-mono text-xs text-gray-300">
                  {[
                    'Instant eCommerce Checkout',
                    'Push Notifications Engine',
                    'PayFast & Ozow Instant Payments',
                    'Google Play Store Deployment',
                    'Real-Time Cloud Admin Panel',
                    'WhatsApp Customer Line Bridge',
                    'Full Source Code Ownership',
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00E5FF] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <GlowButton
                    variant="primary"
                    size="md"
                    onClick={() => onSelectService('Android App')}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    BUILD MY APP →
                  </GlowButton>
                  <span className="text-xs font-mono text-gray-400">TURNAROUND: 2–4 WEEKS</span>
                </div>
              </div>

              {/* Right: Massive Android Smartphone Mockup */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-64 sm:w-72 p-3 bg-gradient-to-b from-gray-700 via-gray-900 to-black rounded-[42px] border-4 border-gray-800 shadow-[0_0_40px_rgba(0,229,255,0.25)]">
                  {/* Phone Notch / Dynamic Island */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-950/60 inline-block" />
                  </div>

                  {/* Inner Screen */}
                  <div className="bg-[#050507] rounded-[34px] overflow-hidden p-4 pt-8 text-white min-h-[440px] flex flex-col justify-between border border-gray-800 relative">
                    {/* Animated Screen Header */}
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 pb-2 border-b border-gray-850">
                        <span className="text-[#00E5FF] font-bold">DROPSHOP ZA</span>
                        <span className="text-[#00FF66]">LIVE 4G</span>
                      </div>

                      {/* Product Feed Preview */}
                      <div className="mt-4 p-3 bg-[#11141B] rounded-xl border border-gray-800">
                        <div className="w-full h-24 bg-gradient-to-tr from-cyan-950/80 to-purple-950/80 rounded-lg flex items-center justify-center relative overflow-hidden">
                          <ShoppingBag className="w-8 h-8 text-[#00E5FF]" />
                          <span className="absolute top-2 right-2 text-[9px] font-mono bg-[#00E5FF] text-black font-bold px-1.5 py-0.5 rounded">
                            FLASH SALE
                          </span>
                        </div>
                        <div className="mt-2 text-xs font-bold">UltraPods Pro V2</div>
                        <div className="flex items-center justify-between mt-1 text-[11px] font-mono">
                          <span className="text-[#00E5FF] font-bold">R599.00</span>
                          <span className="text-gray-400 line-through text-[10px]">R999.00</span>
                        </div>
                      </div>

                      {/* Instant Notification simulated popup */}
                      <div className="mt-3 p-2 bg-[#00E5FF]/10 border border-[#00E5FF]/40 rounded-lg text-[10px] font-mono text-cyan-200 flex items-center gap-2 animate-pulse">
                        <Zap className="w-3.5 h-3.5 text-[#00E5FF] flex-shrink-0" />
                        <span>Push: Free Courier Guy Delivery in Gauteng!</span>
                      </div>
                    </div>

                    {/* Bottom technical overlay badge */}
                    <div className="p-2.5 bg-[#080A0E] border border-gray-800 rounded-lg text-[10px] font-mono space-y-1">
                      <div className="flex justify-between">
                        <span className="text-gray-500">PLATFORM:</span>
                        <span className="text-[#00E5FF]">ANDROID NATIVE</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">BUILD:</span>
                        <span className="text-white">CUSTOM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">STATUS:</span>
                        <span className="text-[#00FF66] font-bold">READY TO DEPLOY</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SERVICE 02 — WORDPRESS ENGINEERED */}
          <div className="p-6 sm:p-10 bg-[#0B0D12] border border-purple-500/30 rounded-sm relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <TechnicalLabel variant="violet">02 / WEB ENGINEERING</TechnicalLabel>
                  <span className="text-xs font-mono font-bold text-[#A855F7] bg-[#A855F7]/10 px-2.5 py-1 border border-[#A855F7]/30 rounded-xs">
                    {CANONICAL_PRICING.wordpress.priceFormatted}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight uppercase leading-none">
                  WORDPRESS <br />
                  <span className="text-[#A855F7]">ENGINEERED</span>
                </h3>

                <p className="text-base text-gray-300 font-sans leading-relaxed">
                  Bespoke business websites built for speed, flexibility and conversion. No clunky templates or slow shared hosting traps. Engineered with LiteSpeed caching, mobile-first responsiveness, and clean architecture.
                </p>

                {/* Features list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 font-mono text-xs text-gray-300">
                  {[
                    'Engineered WordPress Architecture',
                    'Elementor & Custom Blocks',
                    'Mobile First Responsive Matrix',
                    'Direct WhatsApp Lead Capture',
                    'Google Maps & South African Schema',
                    'South African Payment Ready',
                    'Hardened Bank-Grade Security',
                    'AI Chatbot Customer Assistant',
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#A855F7] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <GlowButton
                    variant="violet"
                    size="md"
                    onClick={() => onSelectService('WordPress Website')}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    BUILD MY WEBSITE →
                  </GlowButton>
                  <span className="text-xs font-mono text-gray-400">TURNAROUND: 5–10 DAYS</span>
                </div>
              </div>

              {/* Right: Wireframe vs Polished Interface Interactive Visual */}
              <div className="lg:col-span-5">
                <div className="p-4 bg-[#050507] border border-gray-800 rounded-sm space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-gray-850 text-xs font-mono">
                    <span className="text-gray-400">INTERACTIVE ARCHITECTURE TOGGLE</span>
                    <button
                      onClick={() => setWireframeMode(!wireframeMode)}
                      className="px-2 py-0.5 bg-[#A855F7]/20 border border-[#A855F7] text-[#C084FC] rounded text-[10px] cursor-pointer hover:bg-[#A855F7]/30"
                    >
                      {wireframeMode ? 'VIEW: POLISHED UI' : 'VIEW: BLUEPRINT'}
                    </button>
                  </div>

                  {/* Visual Interface Preview */}
                  <div
                    className={`p-4 rounded border transition-all duration-500 min-h-[260px] flex flex-col justify-between ${
                      wireframeMode
                        ? 'bg-transparent border-dashed border-cyan-500/60 font-mono text-cyan-400'
                        : 'bg-[#11141B] border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.2)]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={wireframeMode ? 'border border-cyan-500 px-2 py-0.5 text-[9px]' : 'font-orbitron font-bold text-sm text-white'}>
                          {wireframeMode ? '<NAV_HEADER>' : 'GEEKFORGE CLIENT'}
                        </div>
                        <div className="text-[10px] text-gray-400 font-mono">
                          {wireframeMode ? 'STATUS: WIREFRAME' : '⚡ 0.65s LCP'}
                        </div>
                      </div>

                      <div className={`p-4 rounded mb-3 ${wireframeMode ? 'border border-dashed border-cyan-600' : 'bg-[#0B0D12] border border-gray-800'}`}>
                        <div className={wireframeMode ? 'text-[11px]' : 'text-sm font-bold text-white font-display'}>
                          {wireframeMode ? '<HERO_SECTION / CTA_CONTAINER>' : 'Precision Engineered for High Net Worth Leads'}
                        </div>
                        <p className="text-[11px] text-gray-400 mt-1">
                          {wireframeMode
                            ? 'Dynamic props: local ZA geo-location schema & instant booking modal.'
                            : 'Fast, secure, and built specifically for South African search intent.'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-gray-800 text-[10px] font-mono">
                      <span className="text-[#00FF66]">✓ GOOGLE PAGE SPEED 99/100</span>
                      <span className="text-gray-500">WORDPRESS + SPEED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SERVICE 03 — WEBSITE REVAMP (SYSTEM UPGRADE) */}
          <div className="p-6 sm:p-10 bg-[#0B0D12] border border-amber-500/30 rounded-sm relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Content */}
              <div className="lg:col-span-6 space-y-6">
                <TechnicalLabel variant="cyan">03 / SYSTEM UPGRADE</TechnicalLabel>

                <h3 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight uppercase leading-none">
                  YOUR OLD WEBSITE <br />
                  <span className="text-amber-400">IS HOLDING YOU BACK.</span>
                </h3>

                <p className="text-base text-gray-300 font-sans leading-relaxed">
                  Is your current site slow, outdated on mobile, or failing to generate calls? We upgrade bloated legacy websites into razor-sharp revenue engines with zero downtime and full SEO link preservation.
                </p>

                {/* Comparison matrix */}
                <div className="space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between p-2.5 bg-[#050507] border border-gray-800 rounded-xs">
                    <span className="text-red-400">SLOW (4.8s Mobile Lag)</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-[#00FF66] font-bold">FAST (0.72s Edge Core Web Vitals)</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-[#050507] border border-gray-800 rounded-xs">
                    <span className="text-red-400">OUTDATED DESIGN</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-[#00E5FF] font-bold">MODERN CYBERTECH AUTHORITY</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-[#050507] border border-gray-800 rounded-xs">
                    <span className="text-red-400">LOW CONVERSION (1.1%)</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-[#A855F7] font-bold">CONVERSION-FOCUSED (4.8%+)</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-[#050507] border border-gray-800 rounded-xs">
                    <span className="text-red-400">DESKTOP-FIRST HACK</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-[#00FF66] font-bold">MOBILE-FIRST ARCHITECTURE</span>
                  </div>
                </div>

                <div className="pt-2">
                  <GlowButton
                    variant="primary"
                    size="md"
                    onClick={() => onSelectService('Website Revamp')}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    UPGRADE MY WEBSITE →
                  </GlowButton>
                </div>
              </div>

              {/* Right: Interactive Scanner Comparison Slider */}
              <div className="lg:col-span-6 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                  <span className="text-red-400">LEGACY SYSTEM</span>
                  <span className="text-gray-500">DRAG SCANNER TO COMPARE</span>
                  <span className="text-[#00E5FF] font-bold">GEEKFORGE SYSTEM</span>
                </div>

                {/* Interactive Scan Area */}
                <div className="relative h-64 bg-[#050507] border border-gray-800 rounded-xs overflow-hidden select-none">
                  {/* Left (Legacy) Side */}
                  <div
                    className="absolute inset-y-0 left-0 bg-red-950/20 border-r-2 border-red-500/50 p-4 flex flex-col justify-between overflow-hidden"
                    style={{ width: `${revampSliderPos}%` }}
                  >
                    <div className="space-y-2">
                      <div className="text-[10px] font-mono text-red-400 font-bold">LEGACY INFRASTRUCTURE</div>
                      <div className="h-4 bg-red-900/40 w-32 rounded" />
                      <div className="h-3 bg-red-900/20 w-48 rounded" />
                      <div className="h-3 bg-red-900/20 w-40 rounded" />
                    </div>
                    <div className="text-[11px] font-mono text-red-300">
                      ✗ 68% Bounce Rate <br />
                      ✗ No WhatsApp Lead Hook
                    </div>
                  </div>

                  {/* Right (GeekForge) Side */}
                  <div
                    className="absolute inset-y-0 right-0 bg-[#0B0D12] p-4 flex flex-col justify-between overflow-hidden"
                    style={{ left: `${revampSliderPos}%` }}
                  >
                    <div className="space-y-2">
                      <div className="text-[10px] font-mono text-[#00E5FF] font-bold">GEEKFORGE REVENUE SYSTEM</div>
                      <div className="h-4 bg-[#00E5FF]/40 w-36 rounded shadow-[0_0_8px_#00E5FF]" />
                      <div className="h-3 bg-gray-700 w-48 rounded" />
                      <div className="h-3 bg-[#A855F7]/30 w-40 rounded" />
                    </div>
                    <div className="text-[11px] font-mono text-[#00FF66] font-bold">
                      ✓ Sub-second Speed <br />
                      ✓ Instant WhatsApp & PayFast
                    </div>
                  </div>

                  {/* Scanner line handle */}
                  <div
                    className="absolute inset-y-0 w-1 bg-[#00E5FF] shadow-[0_0_12px_#00E5FF] cursor-ew-resize flex items-center justify-center pointer-events-none"
                    style={{ left: `${revampSliderPos}%` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-[#00E5FF] text-black text-[10px] font-bold flex items-center justify-center shadow-lg">
                      ⟷
                    </div>
                  </div>

                  {/* Invisible Range Slider */}
                  <input
                    type="range"
                    min="15"
                    max="85"
                    value={revampSliderPos}
                    onChange={(e) => setRevampSliderPos(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                    aria-label="Scan between legacy and modern website"
                  />
                </div>

                <div className="flex justify-between text-[11px] font-mono text-gray-500">
                  <span>UNOPTIMIZED CODEBASE</span>
                  <span>ZERO DOWNTIME UPGRADE</span>
                </div>
              </div>
            </div>
          </div>

          {/* SERVICE 04 — ECOMMERCE (BUILD A SALES MACHINE) */}
          <div className="p-6 sm:p-10 bg-[#0B0D12] border border-cyan-500/30 rounded-sm relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <TechnicalLabel variant="cyan">04 / COMMERCE ENGINEERING</TechnicalLabel>
                  <span className="text-xs font-mono font-bold text-[#00FF66] bg-[#00FF66]/10 px-2.5 py-1 border border-[#00FF66]/30 rounded-xs">
                    {CANONICAL_PRICING.ecommerce.priceFormatted}
                  </span>
                  <span className="text-xs font-mono text-gray-400">SHOPIFY + WOOCOMMERCE</span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight uppercase leading-none">
                  BUILD A <br />
                  <span className="text-[#00E5FF]">SALES MACHINE.</span>
                </h3>

                <p className="text-base text-gray-300 font-sans leading-relaxed">
                  Engineered online stores built for aggressive customer acquisition. Seamlessly integrated with South Africa's premier payment gateways (PayFast, Ozow, Payflex, Yoco, Peach Payments) and courier shipping dispatch APIs.
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 font-mono text-xs text-gray-300">
                  {[
                    'PayFast, Ozow & Payflex BNPL',
                    'Yoco & Peach Payments Ready',
                    'The Courier Guy Auto Waybills',
                    'Real-Time Stock & Inventory Alerts',
                    'WhatsApp Cart Abandonment Flow',
                    'Automated Discounts & Upsells',
                    'GA4 & Meta Pixel Tracking',
                    'AI Smart Product Recommendations',
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00E5FF] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <GlowButton
                    variant="primary"
                    size="md"
                    onClick={() => onSelectService('eCommerce Store')}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    BUILD MY STORE →
                  </GlowButton>
                  <span className="text-xs font-mono text-gray-400">TURNAROUND: 7–14 DAYS</span>
                </div>
              </div>

              {/* Right: Animated eCommerce Sales Pipeline Flow */}
              <div className="lg:col-span-5 p-5 bg-[#050507] border border-gray-800 rounded-sm space-y-4">
                <div className="text-xs font-mono text-gray-400 flex items-center justify-between pb-2 border-b border-gray-850">
                  <span className="text-[#00E5FF]">COMMERCE TRANSACTION PIPELINE</span>
                  <span className="text-gray-500">6 STAGES</span>
                </div>

                {/* Pipeline Flow Graphic */}
                <div className="space-y-2 font-mono text-xs">
                  {[
                    { label: 'PRODUCT', detail: 'Sub-second image render & live variant picker' },
                    { label: 'CART', detail: '1-tap instant side drawer + upsell bundle' },
                    { label: 'PAYMENT', detail: 'Ozow Instant EFT / PayFast / Payflex BNPL' },
                    { label: 'ORDER', detail: 'Automated invoice & warehouse dispatch alert' },
                    { label: 'DELIVERY', detail: 'The Courier Guy waybill generated automatically' },
                    { label: 'REVENUE', detail: 'Net profit deposited & WhatsApp confirmation' },
                  ].map((step, idx) => (
                    <div
                      key={step.label}
                      onClick={() => setEcommerceStep(idx)}
                      className={`p-2.5 rounded-xs border transition-all cursor-pointer flex items-center justify-between ${
                        ecommerceStep === idx
                          ? 'bg-[#11141B] border-[#00E5FF] text-white shadow-[0_0_12px_rgba(0,229,255,0.2)]'
                          : 'bg-[#080A0E] border-gray-850 text-gray-400 hover:text-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-[#00E5FF] text-[10px]">0{idx + 1}</span>
                        <span className="font-bold">{step.label}</span>
                      </div>
                      <span className="text-[10px] text-gray-500 hidden sm:inline">{step.detail}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-[#11141B] border border-gray-800 rounded-xs text-[11px] font-mono text-gray-300">
                  <span className="text-[#00FF66] font-bold">CURRENT ACTIVE STAGE: </span>
                  {[
                    'Product Discovery & Speed',
                    'Frictionless Mobile Cart',
                    'Multi-Gateway Instant Checkout',
                    'Zero-Latency Order Execution',
                    'Nationwide Courier Routing',
                    'Compounded Profit & Retention',
                  ][ecommerceStep]}
                </div>
              </div>
            </div>
          </div>

          {/* SERVICE 05 — DROPSHIPPING (FIND. SELL. SCALE.) */}
          <div className="p-6 sm:p-10 bg-[#0B0D12] border border-emerald-500/30 rounded-sm relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <TechnicalLabel variant="green">05 / AUTOMATED COMMERCE</TechnicalLabel>
                  <span className="text-xs font-mono font-bold text-[#00FF66] bg-[#00FF66]/10 px-2.5 py-1 border border-[#00FF66]/30 rounded-xs">
                    {CANONICAL_PRICING.dropshipping.priceFormatted}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight uppercase leading-none">
                  FIND. SELL. <br />
                  <span className="text-[#00FF66]">SCALE.</span>
                </h3>

                <p className="text-base text-gray-300 font-sans leading-relaxed">
                  Turnkey automated dropshipping platforms that connect directly with global and domestic suppliers. Automatic USD-to-ZAR currency conversion, 1-click product importing, and automated order fulfillment without holding physical inventory.
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 font-mono text-xs text-gray-300">
                  {[
                    'AliExpress, CJ & DSers Direct Bridge',
                    '1-Click Bulk Product Importing',
                    'Automated Supplier Order Dispatch',
                    'Smart USD/ZAR Margin Multiplier',
                    'Automated Customer SMS Tracking',
                    'High-Converting Product Landing Layouts',
                    'South African Payment Gateway Sync',
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00FF66] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <GlowButton
                    variant="primary"
                    size="md"
                    onClick={() => onSelectService('Dropshipping')}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    BUILD MY STORE →
                  </GlowButton>
                  <span className="text-xs font-mono text-gray-400">TURNAROUND: 7–12 DAYS</span>
                </div>
              </div>

              {/* Right: Dropshipping Digital Pipeline Visual */}
              <div className="lg:col-span-5 p-5 bg-[#050507] border border-gray-800 rounded-sm space-y-4">
                <div className="text-xs font-mono text-gray-400 flex items-center justify-between pb-2 border-b border-gray-850">
                  <span className="text-[#00FF66]">AUTONOMOUS SUPPLY PIPELINE</span>
                  <span className="text-gray-500">ZAR / USD</span>
                </div>

                <div className="flex flex-col items-center space-y-2 font-mono text-xs">
                  {['SUPPLIER (CJ / AliExpress)', 'PRODUCT CATALOG (Auto-Sync)', 'YOUR STORE (ZAR Pricing)', 'CUSTOMER (Orders & Pays Online)', 'AUTO-ORDER ROUTED', 'FULFILMENT & DOOR DELIVERY'].map(
                    (step, i, arr) => (
                      <React.Fragment key={step}>
                        <div className="w-full p-2.5 bg-[#11141B] border border-gray-800 rounded-xs text-center font-bold text-gray-200 flex items-center justify-between px-4">
                          <span className="text-[#00FF66] text-[10px]">0{i + 1}</span>
                          <span>{step}</span>
                          <span className="w-2 h-2 rounded-full bg-[#00FF66]/80" />
                        </div>
                        {i < arr.length - 1 && (
                          <div className="text-gray-600 text-xs">↓</div>
                        )}
                      </React.Fragment>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* SERVICE 06 — SEO (GET FOUND. GET CHOSEN.) */}
          <div className="p-6 sm:p-10 bg-[#0B0D12] border border-purple-500/30 rounded-sm relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <TechnicalLabel variant="violet">06 / SEARCH ENGINEERING</TechnicalLabel>
                  <span className="text-xs font-mono font-bold text-[#C084FC] bg-[#A855F7]/10 px-2.5 py-1 border border-[#A855F7]/30 rounded-xs">
                    {CANONICAL_PRICING.seo.priceFormatted}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight uppercase leading-none">
                  GET FOUND. <br />
                  <span className="text-[#A855F7]">GET CHOSEN.</span>
                </h3>

                <p className="text-base text-gray-300 font-sans leading-relaxed">
                  Build commanding visibility, domain authority and sustainable organic inbound growth across Google South Africa. We engineer technical schema, optimize Core Web Vitals, and dominate high-intent commercial keywords.
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 font-mono text-xs text-gray-300">
                  {[
                    'Hyper-Local South African Keyword Dominance',
                    'Technical Core Web Vitals & Schema',
                    'Google Search Console & GA4 Setup',
                    'Content Strategy & Intent Clusters',
                    'Competitor Keyword Theft Audits',
                    'Ongoing Monthly Ranking Telemetry',
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#A855F7] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <GlowButton
                    variant="violet"
                    size="md"
                    onClick={() => onSelectService('SEO')}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    GROW MY TRAFFIC →
                  </GlowButton>
                  <span className="text-xs font-mono text-gray-400">MONTHLY CAMPAIGNS</span>
                </div>
              </div>

              {/* Right: Search Results to Customers Visual */}
              <div className="lg:col-span-5 p-5 bg-[#050507] border border-gray-800 rounded-sm space-y-4">
                <div className="text-xs font-mono text-gray-400 flex items-center justify-between pb-2 border-b border-gray-850">
                  <span className="text-[#A855F7]">SEARCH-TO-REVENUE FUNNEL</span>
                  <span className="text-gray-500">GOOGLE ZA #1</span>
                </div>

                <div className="space-y-2.5 font-mono text-xs">
                  {[
                    { stage: 'IMPRESSIONS', metric: '142,000+', desc: 'High-intent searchers on Google ZA' },
                    { stage: 'CLICKS', metric: '18,400+', desc: 'Targeted visitors landing on site' },
                    { stage: 'TRAFFIC', metric: '99.4% Valid', desc: 'Zero bot clicks, genuine prospective buyers' },
                    { stage: 'LEADS', metric: '1,240+', desc: 'Submitted forms & WhatsApp chats' },
                    { stage: 'CUSTOMERS', metric: 'HIGH ROI', desc: 'Signed contracts & eCommerce sales' },
                  ].map((item, idx) => (
                    <div
                      key={item.stage}
                      className="p-3 bg-[#11141B] border border-gray-800 rounded-xs flex items-center justify-between"
                    >
                      <div>
                        <div className="font-bold text-white flex items-center gap-1.5">
                          <span className="text-[#A855F7]">0{idx + 1}</span> {item.stage}
                        </div>
                        <div className="text-[10px] text-gray-400">{item.desc}</div>
                      </div>
                      <div className="text-right">
                        <span className="px-2 py-0.5 bg-[#A855F7]/10 text-[#C084FC] border border-[#A855F7]/30 text-xs font-bold rounded">
                          {item.metric}
                        </span>
                      </div>
                    </div>
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
