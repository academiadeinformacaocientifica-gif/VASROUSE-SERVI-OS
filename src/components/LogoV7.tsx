import React from 'react';

interface LogoV7Props {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const LogoV7: React.FC<LogoV7Props> = ({
  className = '',
  size = 'md',
  showText = true
}) => {
  const iconSize = size === 'sm' ? 32 : size === 'lg' ? 48 : 40;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* V7 Symbol Mark */}
      <div 
        className="relative flex items-center justify-center shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-[#47149e] to-[#22074f] border border-white/15 p-1 shadow-inner shadow-black/40"
        style={{ width: iconSize, height: iconSize }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Stylized V Wing Left */}
          <path
            d="M18 20L44 82H54L28 20H18Z"
            fill="#ffffff"
          />
          {/* Stylized V/7 Interlock with Lime Accent */}
          <path
            d="M48 20H82L80 32H58L50 52H38L48 20Z"
            fill="#c3f500"
          />
          {/* 7 Diagonal Blade */}
          <path
            d="M74 34L46 82H58L84 34H74Z"
            fill="#ffffff"
            fillOpacity="0.9"
          />
          {/* Sharp dynamic geometry dot */}
          <circle cx="82" cy="20" r="4" fill="#c3f500" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span className="font-display font-extrabold tracking-tight text-white text-lg md:text-xl">
              VASROUSE
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c3f500]" />
          </div>
          <span className="text-[10px] uppercase font-sans font-medium tracking-[0.22em] text-white/70 mt-0.5">
            Serviços
          </span>
        </div>
      )}
    </div>
  );
};
