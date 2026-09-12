import React, { useState } from 'react';
import { X, Zap, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { GlowButton } from '../common/GlowButton';
import { siteConfig } from '../../data/siteConfig';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [priority, setPriority] = useState('Speed & Core Web Vitals');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const waMsg = encodeURIComponent(
      `Hi GeekForge! I requested a Free Website Audit for my site: ${url}\nName: ${name}\nContact: ${contact}\nPriority Audit Focus: ${priority}`
    );
    window.open(`https://wa.me/27500586175?text=${waMsg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#0B0D12] border border-[#00E5FF]/70 rounded-sm max-w-lg w-full p-6 sm:p-8 relative shadow-[0_0_50px_rgba(0,229,255,0.25)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white border border-gray-800 bg-[#050507] rounded-xs cursor-pointer"
          aria-label="Close Audit Modal"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#00FF66]/20 border border-[#00FF66] flex items-center justify-center mx-auto text-[#00FF66]">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black font-display text-white">
              AUDIT QUEUED FOR ANALYSIS
            </h3>
            <p className="text-sm text-gray-300 font-sans leading-relaxed">
              Our engineering team is scanning <span className="text-[#00E5FF] font-mono">{url}</span>. You will receive a breakdown covering Core Web Vitals, mobile UX bottlenecks, and conversion leaks.
            </p>
            <div className="pt-3">
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white font-mono text-xs font-bold rounded-xs cursor-pointer"
              >
                CLOSE DIAGNOSTIC
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00E5FF]">
                <Zap className="w-4 h-4 text-[#00E5FF]" />
                <span>GEEKFORGE DIAGNOSTIC LAB // FREE AUDIT</span>
              </div>
              <h3 className="text-2xl font-black font-display text-white uppercase">
                GET A FREE WEBSITE AUDIT
              </h3>
              <p className="text-xs text-gray-400 font-sans">
                Uncover mobile speed bottlenecks, mobile checkout friction, and SEO gaps holding back your revenue.
              </p>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div>
                <label className="text-gray-300 font-bold block mb-1">
                  CURRENT WEBSITE URL <span className="text-[#00E5FF]">*</span>
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://yourbusiness.co.za"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#050507] border border-gray-800 focus:border-[#00E5FF] rounded-xs text-white placeholder-gray-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-gray-300 font-bold block mb-1">
                  YOUR NAME & BRAND <span className="text-[#00E5FF]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lerato / Apex Trading"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#050507] border border-gray-800 focus:border-[#00E5FF] rounded-xs text-white placeholder-gray-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-gray-300 font-bold block mb-1">
                  WHATSAPP / EMAIL TO SEND REPORT <span className="text-[#00E5FF]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="+27 83 000 0000 or lerato@apex.co.za"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#050507] border border-gray-800 focus:border-[#00E5FF] rounded-xs text-white placeholder-gray-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-gray-300 font-bold block mb-1">PRIMARY CONCERN</label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#050507] border border-gray-800 focus:border-[#00E5FF] rounded-xs text-white focus:outline-none cursor-pointer"
                >
                  <option value="Speed & Core Web Vitals">Slow Load Speeds on Mobile 4G</option>
                  <option value="Low Sales & Conversion">High Traffic but Low Sales / Conversions</option>
                  <option value="Outdated Design">Outdated Visuals & Non-Responsive Layout</option>
                  <option value="SEO & Google Rankings">Poor Google South Africa Organic Rankings</option>
                  <option value="Full Comprehensive Teardown">Full 360° Technical & Revenue Teardown</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <GlowButton
                variant="primary"
                size="md"
                fullWidth
                icon={<ArrowRight className="w-4 h-4" />}
              >
                EXECUTE FREE AUDIT SCAN →
              </GlowButton>
            </div>

            <div className="text-[10px] font-mono text-gray-500 text-center flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00FF66]" />
              <span>100% Free · No Obligation · South African Businesses Only</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
