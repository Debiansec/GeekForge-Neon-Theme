import React from 'react';

interface TechnicalLabelProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'violet' | 'green' | 'muted';
  icon?: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export const TechnicalLabel: React.FC<TechnicalLabelProps> = ({
  children,
  variant = 'cyan',
  icon,
  className = '',
  glow = false,
}) => {
  const variantStyles = {
    cyan: 'text-[#00E5FF] border-[#00E5FF]/40 bg-[#00E5FF]/5',
    violet: 'text-[#C084FC] border-[#A855F7]/40 bg-[#A855F7]/5',
    green: 'text-[#00FF66] border-[#00FF66]/40 bg-[#00FF66]/5',
    muted: 'text-gray-400 border-gray-800 bg-gray-900/40',
  };

  const glowStyles = {
    cyan: 'shadow-[0_0_12px_rgba(0,229,255,0.25)]',
    violet: 'shadow-[0_0_12px_rgba(168,85,247,0.25)]',
    green: 'shadow-[0_0_12px_rgba(0,255,102,0.25)]',
    muted: '',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium uppercase tracking-wider border rounded-sm transition-colors ${
        variantStyles[variant]
      } ${glow ? glowStyles[variant] : ''} ${className}`}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
