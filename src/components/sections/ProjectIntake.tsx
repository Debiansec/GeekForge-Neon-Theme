import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Terminal, MessageSquareCode, Clock } from 'lucide-react';
import { TechnicalLabel } from '../common/TechnicalLabel';
import { GlowButton } from '../common/GlowButton';
import { siteConfig } from '../../data/siteConfig';

interface ProjectIntakeProps {
  initialService?: string;
  initialNotes?: string;
}

export const ProjectIntake: React.FC<ProjectIntakeProps> = ({
  initialService = 'eCommerce Store (From R1,999)',
  initialNotes = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: initialService,
    budget: 'R5,000 — R10,000',
    timeline: '2–4 Weeks',
    details: initialNotes,
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refId = `GF-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedRef(refId);

    // Also craft WhatsApp prefill if user wants instant routing
    const waText = encodeURIComponent(
      `Hi GeekForge! I submitted project intake [${refId}].\nName: ${formData.name}\nBrand: ${formData.company}\nService: ${formData.service}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\nDetails: ${formData.details}`
    );
    window.open(`https://wa.me/27500586175?text=${waText}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#050507] border-b border-gray-850">
      <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Briefing & Direct Lines */}
          <div className="lg:col-span-5 space-y-6">
            <TechnicalLabel variant="cyan">09 / SYSTEM INITIALIZATION</TechnicalLabel>

            <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white uppercase leading-[0.95]">
              START YOUR <br />
              <span className="text-[#00E5FF] text-glow-blue">PROJECT.</span>
            </h2>

            <p className="text-base text-gray-300 font-sans leading-relaxed">
              Tell us about your business, what you want to build and your timeline. We respond with a comprehensive proposal, technical roadmap, and transparent quote.
            </p>

            {/* Direct Channel Cards */}
            <div className="space-y-3 pt-4 font-mono text-xs">
              <a
                href={siteConfig.whatsappLink('Hi GeekForge! Ready to initiate a new project.')}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#0B0D12] border border-gray-800 hover:border-[#25D366] rounded-xs flex items-center justify-between transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#25D366]/10 text-[#25D366] rounded">
                    <MessageSquareCode className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-[10px]">DIRECT WHATSAPP LINE</div>
                    <div className="text-white font-bold group-hover:text-[#25D366]">
                      {siteConfig.phone}
                    </div>
                  </div>
                </div>
                <span className="text-[10px] text-emerald-400">INSTANT DISPATCH</span>
              </a>

              <div className="p-4 bg-[#0B0D12] border border-gray-800 rounded-xs space-y-1">
                <div className="text-gray-500 text-[10px]">EMAIL TRANSMISSION</div>
                <a href={`mailto:${siteConfig.email}`} className="text-white font-bold hover:text-[#00E5FF]">
                  {siteConfig.email}
                </a>
                <div className="text-[10px] text-gray-400 pt-1">
                  Average initial proposal turnaround: &lt; 4 business hours.
                </div>
              </div>
            </div>

            {/* Guarantee Note */}
            <div className="p-4 bg-[#11141B] border border-gray-800 rounded-xs flex items-center gap-3 text-xs font-mono text-gray-400">
              <ShieldCheck className="w-5 h-5 text-[#00E5FF] flex-shrink-0" />
              <span>
                All inquiries covered by strict non-disclosure. We build high-ticket commercial assets with full code ownership.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Cyber Intake Form */}
          <div className="lg:col-span-7 bg-[#0B0D12] p-6 sm:p-10 border border-cyan-500/40 rounded-sm shadow-2xl relative overflow-hidden">
            {submittedRef ? (
              <div className="py-12 text-center space-y-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#00FF66]/20 border-2 border-[#00FF66] flex items-center justify-center mx-auto text-[#00FF66]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#00FF66] uppercase tracking-widest">
                    SYSTEM DISPATCH CONFIRMED
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                    PROJECT INTAKE LOCKED
                  </h3>
                  <p className="text-sm font-mono text-gray-400">
                    REFERENCE CODE: <span className="text-white font-bold">{submittedRef}</span>
                  </p>
                </div>

                <p className="text-sm text-gray-300 max-w-md mx-auto font-sans leading-relaxed">
                  Your project blueprint request has been routed to our South African engineering team. We are also opening WhatsApp for immediate live communication.
                </p>

                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => setSubmittedRef(null)}
                    className="px-4 py-2 bg-gray-850 hover:bg-gray-800 text-white font-mono text-xs rounded-xs cursor-pointer"
                  >
                    SUBMIT ANOTHER INQUIRY
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-gray-800 font-mono text-xs">
                  <div className="flex items-center gap-2 text-[#00E5FF]">
                    <Terminal className="w-4 h-4" />
                    <span>PROJECT INTAKE SPECIFICATION</span>
                  </div>
                  <span className="text-gray-500">CANONICAL: geekforge.co.za</span>
                </div>

                {/* Name & Brand */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 font-mono text-xs">
                    <label className="text-gray-300 font-bold block">
                      FULL NAME <span className="text-[#00E5FF]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sipho Ndlovu"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#050507] border border-gray-800 focus:border-[#00E5FF] rounded-xs text-white placeholder-gray-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5 font-mono text-xs">
                    <label className="text-gray-300 font-bold block">
                      BUSINESS / BRAND NAME
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Logistics SA"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#050507] border border-gray-800 focus:border-[#00E5FF] rounded-xs text-white placeholder-gray-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 font-mono text-xs">
                    <label className="text-gray-300 font-bold block">
                      EMAIL ADDRESS <span className="text-[#00E5FF]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sipho@company.co.za"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#050507] border border-gray-800 focus:border-[#00E5FF] rounded-xs text-white placeholder-gray-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5 font-mono text-xs">
                    <label className="text-gray-300 font-bold block">
                      WHATSAPP / PHONE <span className="text-[#00E5FF]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+27 82 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#050507] border border-gray-800 focus:border-[#00E5FF] rounded-xs text-white placeholder-gray-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Service Select */}
                <div className="space-y-1.5 font-mono text-xs">
                  <label className="text-gray-300 font-bold block">
                    SERVICE CAPABILITY REQUIRED <span className="text-[#00E5FF]">*</span>
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#050507] border border-gray-800 focus:border-[#00E5FF] rounded-xs text-white focus:outline-none cursor-pointer"
                  >
                    <option value="eCommerce Store (From R1,999)">
                      eCommerce Store — Shopify / WooCommerce (From R1,999)
                    </option>
                    <option value="WordPress Website (From R3,500)">
                      WordPress Engineered Website (From R3,500)
                    </option>
                    <option value="Android Application (From R4,500)">
                      Android Mobile Application (From R4,500)
                    </option>
                    <option value="Dropshipping System (From R2,999)">
                      Dropshipping Automated System (From R2,999)
                    </option>
                    <option value="Website Revamp">Website Revamp (System Modernization)</option>
                    <option value="SEO Growth Campaign">SEO Search Engine Dominance (Custom Quote)</option>
                    <option value="Custom Digital Platform">Custom Digital Platform / Web App</option>
                  </select>
                </div>

                {/* Budget & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 font-mono text-xs">
                    <label className="text-gray-300 font-bold block">PLANNED BUDGET (ZAR)</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#050507] border border-gray-800 focus:border-[#00E5FF] rounded-xs text-white focus:outline-none cursor-pointer"
                    >
                      <option value="Under R5,000">Under R5,000 (Starter)</option>
                      <option value="R5,000 — R10,000">R5,000 — R10,000 (Growth)</option>
                      <option value="R10,000 — R20,000">R10,000 — R20,000 (Professional)</option>
                      <option value="R20,000 — R50,000">R20,000 — R50,000 (Enterprise)</option>
                      <option value="R50,000+">R50,000+ (Full Suite Platform)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5 font-mono text-xs">
                    <label className="text-gray-300 font-bold block">TIMELINE REQUIREMENT</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#050507] border border-gray-800 focus:border-[#00E5FF] rounded-xs text-white focus:outline-none cursor-pointer"
                    >
                      <option value="ASAP (Urgent)">ASAP (Urgent Deployment)</option>
                      <option value="2–4 Weeks">2–4 Weeks (Standard)</option>
                      <option value="1–2 Months">1–2 Months (Planned Launch)</option>
                      <option value="Flexible">Flexible / Discovery Phase</option>
                    </select>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-1.5 font-mono text-xs">
                  <label className="text-gray-300 font-bold block">PROJECT DETAILS & OBJECTIVES</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your target audience, core product/services, must-have features (e.g. PayFast, courier integration, push alerts)..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#050507] border border-gray-800 focus:border-[#00E5FF] rounded-xs text-white placeholder-gray-600 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <GlowButton
                    variant="primary"
                    size="lg"
                    fullWidth
                    icon={<Send className="w-4 h-4" />}
                  >
                    TRANSMIT PROJECT SPECIFICATION →
                  </GlowButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
