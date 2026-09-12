import React from 'react';

interface NeonBorderProps {
  children: React.ReactNode;
  variant?: 'blue' | 'violet' | 'subtle' | 'green';
  className?: string;
  glowOnHover?: boolean;
  technicalHeader?: string;
  technicalCode?: string;
}

export const NeonBorder: React.FC<NeonBorderProps> = ({
  children,
  variant = 'blue',
  className = '',
  glowOnHover = true,
  technicalHeader,
  technicalCode,
}) => {
  const borderVariants = {
    blue: 'border-cyan-500/30 hover:border-cyan-400/80 hover:shadow-[0_0_25px_rgba(0,229,255,0.2)]',
    violet: 'border-purple-500/30 hover:border-purple-400/80 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]',
    green: 'border-emerald-500/30 hover:border-emerald-400/80 hover:shadow-[0_0_25px_rgba(0,255,102,0.2)]',
    subtle: 'border-gray-800 hover:border-gray-700 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]',
  };

  return (
    <div
      className={`relative bg-[#0B0D12]/90 backdrop-blur-md border rounded-sm transition-all duration-300 ${
        borderVariants[variant]
      } ${className}`}
    >
      {/* Corner brackets */}
      <span className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 border-[#00E5FF] pointer-events-none" />
      <span className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 border-[#A855F7] pointer-events-none" />

      {/* Optional technical system bar at the top */}
      {(technicalHeader || technicalCode) && (
        <div className="flex items-center justify-between px-3 py-1.5 border-b border-gray-800/80 bg-[#050507]/60 text-[10px] font-mono text-gray-400">
          <span className="flex items-center gap-1.5 text-gray-300">
            <span className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full inline-block" />
            {technicalHeader}
          </span>
          {technicalCode && <span className="text-gray-500">{technicalCode}</span>}
        </div>
      )}

      {children}
    </div>
  );
};
