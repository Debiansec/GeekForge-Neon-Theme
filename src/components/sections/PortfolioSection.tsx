import React, { useState } from 'react';
import { ArrowRight, TrendingUp, Layers } from 'lucide-react';
import { TechnicalLabel } from '../common/TechnicalLabel';
import { PortfolioItem } from '../../types';
import { portfolioData } from '../../data/portfolio';

interface PortfolioSectionProps {
  onSelectProject: (project: PortfolioItem) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'ALL DEPLOYMENTS' },
    { id: 'ecommerce', label: 'ECOMMERCE' },
    { id: 'android', label: 'ANDROID' },
    { id: 'web', label: 'WEB / WORDPRESS' },
    { id: 'dropshipping', label: 'DROPSHIPPING' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? portfolioData
      : portfolioData.filter((p) => p.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 bg-[#050507] border-b border-gray-850">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <TechnicalLabel variant="cyan">05 / SELECTED DEPLOYMENTS</TechnicalLabel>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-white mt-4 uppercase leading-[0.95]">
              WORK THAT <br />
              <span className="text-[#00E5FF] text-glow-blue">SPEAKS IN NUMBERS.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400 font-sans max-w-xl">
              Explore recent digital systems deployed across South Africa. Every build is calibrated for conversion, sub-second speed, and transaction volume.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-[#0B0D12] border border-gray-800 rounded-xs font-mono text-xs">
            {filters.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 rounded-xs transition-colors cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#00E5FF] text-black font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0B0D12] border border-gray-800 hover:border-[#00E5FF]/60 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl group"
            >
              <div>
                {/* Tech Terminal Header */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#050507] border-b border-gray-850 font-mono text-[10px]">
                  <span className="text-gray-400">ID: {project.id.toUpperCase()}</span>
                  <span className="text-[#00FF66] font-bold">{project.category}</span>
                </div>

                {/* Mockup Preview Box */}
                <div className="p-4 bg-[#11141B]/80 border-b border-gray-850 relative overflow-hidden">
                  <div
                    className="h-44 rounded border border-gray-800 p-4 flex flex-col justify-between relative"
                    style={{ background: project.imageTheme }}
                  >
                    {/* Corner Accent */}
                    <span className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-black/80 border border-gray-700 text-[#00E5FF] text-[9px] font-mono rounded">
                      {project.location} · {project.year}
                    </span>

                    <div className="space-y-1">
                      <div className="text-[10px] font-mono text-[#A855F7]">{project.client}</div>
                      <div className="text-xl font-bold font-display text-white">{project.title}</div>
                      <div className="text-xs text-gray-300 font-sans line-clamp-1">{project.tagline}</div>
                    </div>

                    {/* Result Badge */}
                    {project.metrics[0] && (
                      <div className="p-2 bg-[#050507]/90 border border-emerald-500/40 rounded-xs flex items-center gap-2">
                        <TrendingUp className="w-3.5 h-3.5 text-[#00FF66] flex-shrink-0" />
                        <span className="text-xs font-mono font-bold text-[#00FF66]">
                          {project.metrics[0].label}: {project.metrics[0].value}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Details Content */}
                <div className="p-5 space-y-4">
                  <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                    {project.description}
                  </p>

                  {/* Secondary Metrics */}
                  <div className="grid grid-cols-2 gap-2 p-3 bg-[#050507] border border-gray-850 rounded-xs font-mono text-xs">
                    {project.metrics.slice(1, 3).map((m, idx) => (
                      <div key={idx}>
                        <span className="text-gray-500 text-[10px] block">{m.label}</span>
                        <span className="text-white font-bold">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-gray-900 border border-gray-800 text-gray-400 text-[10px] font-mono rounded-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-4 bg-[#050507] border-t border-gray-850 flex items-center justify-between">
                <span className="text-[10px] font-mono text-gray-500">
                  IMPACT VERIFIED*
                </span>
                <button
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-mono font-bold text-[#00E5FF] hover:text-white flex items-center gap-1.5 cursor-pointer group-hover:underline"
                >
                  <span>INSPECT BLUEPRINT</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer on results */}
        <div className="mt-12 p-4 bg-[#0B0D12] border border-gray-800 rounded-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-gray-500">
          <span>*METRICS DISPLAYED REFLECT CLIENT SPECIFIC PROJECT OUTCOMES (NOT COMPANY-WIDE STATISTICS)</span>
          <span className="text-[#00E5FF]">READY TO REPLICATE THESE RESULTS?</span>
        </div>
      </div>
    </section>
  );
};
