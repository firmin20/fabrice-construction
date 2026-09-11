import React from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'compact' | 'horizontal';
  className?: string;
  lightBackground?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  className = '',
  lightBackground = false,
}) => {
  const goldGradientId = `gold-grad-${variant}-${lightBackground ? 'light' : 'dark'}`;
  const darkSteelColor = lightBackground ? '#0f172a' : '#f8fafc';
  const subtextColor = lightBackground ? '#475569' : '#94a3b8';

  // Emblem SVG with roof and FC intertwining
  const Emblem = (
    <svg
      viewBox="0 0 140 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-sm"
    >
      <defs>
        <linearGradient id={goldGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f7df8b" />
          <stop offset="35%" stopColor="#d4af37" />
          <stop offset="70%" stopColor="#aa820a" />
          <stop offset="100%" stopColor="#e5c158" />
        </linearGradient>
        <linearGradient id={`steel-grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={lightBackground ? '#1e293b' : '#ffffff'} />
          <stop offset="100%" stopColor={lightBackground ? '#0f172a' : '#cbd5e1'} />
        </linearGradient>
      </defs>

      {/* Roof gable over the F */}
      <path
        d="M20 54 L52 24 L84 54"
        stroke={`url(#steel-grad-${variant})`}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Small architectural window under the roof peak */}
      <rect x="46" y="38" width="5" height="5" fill={`url(#${goldGradientId})`} rx="0.5" />
      <rect x="53" y="38" width="5" height="5" fill={`url(#${goldGradientId})`} rx="0.5" />
      <rect x="46" y="45" width="5" height="5" fill={`url(#${goldGradientId})`} rx="0.5" />
      <rect x="53" y="45" width="5" height="5" fill={`url(#${goldGradientId})`} rx="0.5" />

      {/* Stylized F */}
      <path
        d="M32 36 V78 M32 54 H62 M32 36 H68"
        stroke={`url(#steel-grad-${variant})`}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="miter"
      />

      {/* Intertwined golden C */}
      <path
        d="M112 36 C86 32 70 48 70 60 C70 76 88 88 114 82"
        stroke={`url(#${goldGradientId})`}
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />

      {/* Modern geometric cut highlight on C */}
      <circle cx="112" cy="36" r="3.5" fill={`url(#${goldGradientId})`} />
      <circle cx="114" cy="82" r="3.5" fill={`url(#${goldGradientId})`} />
    </svg>
  );

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="w-10 h-8 flex-shrink-0">{Emblem}</div>
        <div className="flex flex-col">
          <span className="font-extrabold tracking-wider text-sm leading-tight" style={{ color: darkSteelColor }}>
            FABRICE
          </span>
          <span className="text-[11px] font-bold tracking-widest text-[#d4af37] leading-none">
            CONSTRUCTION
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3.5 ${className}`}>
        <div className="w-12 h-10 flex-shrink-0">{Emblem}</div>
        <div className="flex flex-col text-left">
          <div className="flex items-baseline gap-1.5">
            <span
              className="font-extrabold tracking-wider text-base sm:text-lg leading-tight uppercase"
              style={{ color: darkSteelColor }}
            >
              FABRICE
            </span>
            <span className="text-sm sm:text-base font-bold tracking-widest text-[#d4af37] leading-tight uppercase">
              CONSTRUCTION
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-semibold tracking-wider" style={{ color: subtextColor }}>
            <span className="h-[1px] w-2.5 bg-[#d4af37]/60"></span>
            <span>FER FORGÉ & ALUMINIUM</span>
            <span className="h-[1px] w-2.5 bg-[#d4af37]/60"></span>
          </div>
        </div>
      </div>
    );
  }

  // Default 'full' variant
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <div className="w-16 h-12 mb-1">{Emblem}</div>
      <div className="flex flex-col items-center">
        <span
          className="font-extrabold tracking-widest text-xl leading-tight uppercase"
          style={{ color: darkSteelColor, fontFamily: "'Cinzel', serif" }}
        >
          FABRICE
        </span>
        <span className="text-sm sm:text-base font-bold tracking-[0.28em] text-[#d4af37] leading-none uppercase mt-0.5">
          CONSTRUCTION
        </span>
        <div className="flex items-center gap-2 text-[9px] sm:text-[10px] font-medium tracking-widest text-slate-400 mt-1 uppercase">
          <span className="h-[1px] w-4 bg-[#d4af37]"></span>
          <span>FER FORGÉ & ALUMINIUM</span>
          <span className="h-[1px] w-4 bg-[#d4af37]"></span>
        </div>
      </div>
    </div>
  );
};
