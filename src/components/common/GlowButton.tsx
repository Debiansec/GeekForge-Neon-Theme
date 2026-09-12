import React from 'react';

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'violet' | 'outline' | 'ghost' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const GlowButton: React.FC<GlowButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs tracking-wider',
    md: 'px-5 py-2.5 text-sm tracking-wider',
    lg: 'px-7 py-3.5 text-base tracking-wider font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-[#00E5FF] text-[#050507] font-bold border border-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_30px_rgba(0,229,255,0.7)] hover:bg-[#33ebff] active:scale-[0.98]',
    violet:
      'bg-[#A855F7] text-white font-bold border border-[#C084FC] shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] hover:bg-[#b56df9] active:scale-[0.98]',
    outline:
      'bg-[#11141B]/80 text-[#F5F7FA] font-semibold border border-gray-700 hover:border-[#00E5FF] hover:text-[#00E5FF] hover:shadow-[0_0_20px_rgba(0,229,255,0.25)] active:scale-[0.98]',
    ghost:
      'bg-transparent text-gray-300 hover:text-white hover:bg-white/5 border border-transparent active:scale-[0.98]',
    whatsapp:
      'bg-[#25D366] text-[#050507] font-bold border border-[#25D366] shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.7)] hover:bg-[#2ae06f] active:scale-[0.98]',
  };

  return (
    <button
      className={`relative group inline-flex items-center justify-center gap-2 font-mono uppercase transition-all duration-200 cursor-pointer rounded-xs ${
        sizeStyles[size]
      } ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {/* Subtle corner tech tick marks */}
      <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white/40 pointer-events-none" />
      <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white/40 pointer-events-none" />

      {icon && iconPosition === 'left' && <span className="transition-transform group-hover:-translate-x-0.5">{icon}</span>}
      <span className="relative z-10 whitespace-nowrap">{children}</span>
      {icon && iconPosition === 'right' && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </button>
  );
};
