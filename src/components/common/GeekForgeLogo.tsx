import React from 'react';

interface GeekForgeLogoProps {
  variant?: 'full' | 'header' | 'icon' | 'compact';
  className?: string;
  showTagline?: boolean;
}

export const GeekForgeLogo: React.FC<GeekForgeLogoProps> = ({
  variant = 'header',
  className = '',
  showTagline = false,
}) => {
  if (variant === 'icon') {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <svg
          viewBox="0 0 100 100"
          className="w-10 h-10 drop-shadow-[0_0_12px_rgba(0,229,255,0.6)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gfIconBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="50%" stopColor="#0066FF" />
              <stop offset="100%" stopColor="#0033AA" />
            </linearGradient>
            <linearGradient id="gfIconViolet" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C084FC" />
              <stop offset="50%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#6B21A8" />
            </linearGradient>
          </defs>
          {/* Cyber G ring */}
          <path
            d="M 50 15 A 35 35 0 1 0 85 50 L 55 50 L 55 62 L 72 62 A 23 23 0 1 1 50 27 A 23 23 0 0 1 74 40 L 86 31 A 35 35 0 0 0 50 15 Z"
            fill="url(#gfIconBlue)"
            stroke="#00E5FF"
            strokeWidth="1.5"
          />
          {/* Cyber F bar */}
          <path
            d="M 45 32 L 80 32 L 76 43 L 56 43 L 53 52 L 72 52 L 68 63 L 50 63 L 42 85 L 32 85 Z"
            fill="url(#gfIconViolet)"
            stroke="#C084FC"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-start select-none ${className}`}>
      <div className="flex items-center gap-3">
        {/* Monogram GF */}
        <div className="relative flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00E5FF]/20 to-[#A855F7]/20 rounded-lg blur-sm" />
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full relative drop-shadow-[0_0_10px_rgba(0,229,255,0.7)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gfLogoBlue" x1="10%" y1="0%" x2="90%" y2="100%">
                <stop offset="0%" stopColor="#E0F7FF" />
                <stop offset="25%" stopColor="#00E5FF" />
                <stop offset="70%" stopColor="#0066FF" />
                <stop offset="100%" stopColor="#002277" />
              </linearGradient>
              <linearGradient id="gfLogoViolet" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F3E8FF" />
                <stop offset="30%" stopColor="#C084FC" />
                <stop offset="70%" stopColor="#9333EA" />
                <stop offset="100%" stopColor="#581C87" />
              </linearGradient>
              <filter id="cyberGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Stylized Cyber G Ring */}
            <path
              d="M 50 12 C 28.5 12 11 29.5 11 51 C 11 72.5 28.5 90 50 90 C 69.5 90 85.5 75.5 88.5 56.5 L 75.5 56.5 C 73 70 62.5 79 50 79 C 34.5 79 22 66.5 22 51 C 22 35.5 34.5 23 50 23 C 61.5 23 71 30.5 74.5 41 L 86.5 35 C 80.5 21 66.5 12 50 12 Z"
              fill="url(#gfLogoBlue)"
              stroke="#00E5FF"
              strokeWidth="1.2"
            />
            {/* Horizontal crossbar for G */}
            <path
              d="M 50 51 L 86 51 L 86 61 L 50 61 Z"
              fill="url(#gfLogoBlue)"
            />

            {/* Overlapping Cyber F Wing */}
            <path
              d="M 44 26 L 86 26 L 83 37 L 54 37 L 51 47 L 77 47 L 74 57 L 48 57 L 41 84 L 30 84 L 44 26 Z"
              fill="url(#gfLogoViolet)"
              stroke="#E9D5FF"
              strokeWidth="1.2"
            />
          </svg>
        </div>

        {/* Wordmark GEEKFORGE */}
        <div className="flex flex-col leading-none">
          <div className="flex items-center text-xl sm:text-2xl font-black tracking-wider font-orbitron">
            <span className="text-[#00E5FF] drop-shadow-[0_0_10px_rgba(0,229,255,0.6)]">
              GEEK
            </span>
            <span className="text-[#A855F7] drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]">
              FORGE
            </span>
          </div>

          {(showTagline || variant === 'full') && (
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-[1px] bg-[#00E5FF] shadow-[0_0_4px_#00E5FF]" />
              <span className="text-[9px] sm:text-[10px] tracking-[0.25em] font-bold text-gray-400 font-mono uppercase">
                BUILD · GROW · DOMINATE
              </span>
              <span className="w-2 h-[1px] bg-[#A855F7] shadow-[0_0_4px_#A855F7]" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
