import React from 'react';
import { X, Layers, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { PortfolioItem } from '../../types';
import { GlowButton } from '../common/GlowButton';

interface BlueprintModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  onRequestBuild: (projectName: string) => void;
}

export const BlueprintModal: React.FC<BlueprintModalProps> = ({
  project,
  onClose,
  onRequestBuild,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#0B0D12] border border-[#00E5FF]/70 rounded-sm max-w-2xl w-full p-6 sm:p-8 relative shadow-[0_0_50px_rgba(0,229,255,0.3)] space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white border border-gray-800 bg-[#050507] rounded-xs cursor-pointer"
          aria-label="Close Blueprint Modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="space-y-1 pb-4 border-b border-gray-800">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00E5FF]">
            <Layers className="w-4 h-4" />
            <span>ARCHITECTURE BLUEPRINT // {project.id.toUpperCase()}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
            {project.title}
          </h3>
          <div className="text-xs font-mono text-gray-400">
            Category: {project.category} · Client: {project.client} · Location: {project.location} · Year: {project.year}
          </div>
        </div>

        {/* Narrative & Tagline */}
        <div className="space-y-3">
          <p className="text-sm text-cyan-300 font-mono">
            {project.tagline}
          </p>
          <p className="text-sm text-gray-200 font-sans leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Quantified Outcomes */}
        <div className="p-4 bg-[#050507] border border-gray-850 rounded-xs space-y-2">
          <span className="text-xs font-mono text-[#00FF66] font-bold flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5" /> VERIFIED OUTCOMES*
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 font-mono text-xs">
            {project.metrics.map((res, i) => (
              <div key={i} className="p-2.5 bg-[#11141B] border border-gray-800 rounded text-center">
                <span className="text-[10px] text-gray-400 block">{res.label}</span>
                <span className="text-sm font-bold text-white mt-0.5 block">{res.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deployed Technologies */}
        <div className="space-y-2 font-mono text-xs">
          <span className="text-gray-400 block">DEPLOYED STACK & MODULES:</span>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 bg-gray-900 border border-gray-800 text-cyan-300 text-xs rounded-xs"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[10px] font-mono text-gray-500">
            *Results reflect verified client project telemetry
          </span>

          <GlowButton
            variant="primary"
            size="md"
            onClick={() => {
              onClose();
              onRequestBuild(project.title);
            }}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            REQUEST SIMILAR BUILD →
          </GlowButton>
        </div>
      </div>
    </div>
  );
};
