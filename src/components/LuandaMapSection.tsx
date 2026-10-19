import React, { useState } from 'react';
import { MapPin, Navigation, Phone, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const LuandaMapSection: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <section className="relative w-full h-[380px] sm:h-[460px] overflow-hidden border-t border-[#47149e]/15 select-none bg-[#e8e4f0]">
      {/* Stylized Vector / SVG Geographic Map Canvas of Luanda */}
      <div className="absolute inset-0 opacity-90">
        <svg
          viewBox="0 0 1440 600"
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base land and urban blocks */}
          <rect width="1440" height="600" fill="#f1eff7" />
          
          {/* Urban Grid Lines & Road Network */}
          <path d="M-100 280 Q 400 320 800 240 T 1600 320" stroke="#d5ceea" strokeWidth="24" fill="none" />
          <path d="M-100 280 Q 400 320 800 240 T 1600 320" stroke="#ffffff" strokeWidth="18" fill="none" />

          {/* Major Avenue: Av. Deolinda Rodrigues */}
          <path d="M100 650 L 550 350 L 720 280 L 1200 80 L 1500 0" stroke="#d5ceea" strokeWidth="32" fill="none" />
          <path d="M100 650 L 550 350 L 720 280 L 1200 80 L 1500 0" stroke="#fffae6" strokeWidth="24" fill="none" />

          {/* Arterial Connecting Streets */}
          <path d="M720 280 L 720 600" stroke="#ffffff" strokeWidth="14" fill="none" />
          <path d="M720 280 L 900 600" stroke="#ffffff" strokeWidth="12" fill="none" />
          <path d="M550 350 L 300 600" stroke="#ffffff" strokeWidth="12" fill="none" />
          <path d="M400 0 L 550 350" stroke="#ffffff" strokeWidth="10" fill="none" />
          <path d="M900 0 L 720 280" stroke="#ffffff" strokeWidth="14" fill="none" />
          <path d="M1200 80 L 1350 450" stroke="#ffffff" strokeWidth="14" fill="none" />
          <path d="M0 450 L 1440 450" stroke="#ffffff" strokeWidth="8" fill="none" />
          <path d="M0 180 L 1440 180" stroke="#ffffff" strokeWidth="8" fill="none" />

          {/* Urban Parks / Petro Catetão Landmark */}
          <rect x="640" y="320" width="160" height="120" rx="16" fill="#ddecc9" opacity="0.8" />
          <text x="655" y="385" fill="#4d662b" fontSize="13" fontFamily="sans-serif" fontWeight="600">Catetão do Petro</text>

          {/* Highway Markers */}
          <g transform="translate(480, 310)">
            <rect width="44" height="20" rx="4" fill="#ffffff" stroke="#c0b5dc" strokeWidth="1" />
            <text x="8" y="14" fill="#66548a" fontSize="10" fontFamily="sans-serif" fontWeight="bold">EN-230</text>
          </g>

          <g transform="translate(860, 220)">
            <rect width="130" height="20" rx="4" fill="#ffffff" stroke="#c0b5dc" strokeWidth="1" />
            <text x="8" y="14" fill="#66548a" fontSize="10" fontFamily="sans-serif" fontWeight="bold">Av. Deolinda Rodrigues</text>
          </g>

          {/* Water Area / Bay of Luanda in distance */}
          <path d="M0 0 L 1440 0 L 1440 60 Q 800 120 0 40 Z" fill="#cbe2f8" opacity="0.6" />
          <text x="40" y="35" fill="#356694" fontSize="14" fontFamily="sans-serif" fontWeight="bold">Baía de Luanda</text>
        </svg>
      </div>

      {/* Center Pin Button (matching reference image) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
        {/* Tooltip Card */}
        {showTooltip && (
          <div className="mb-4 bg-[#22074f] text-white p-4 sm:p-5 rounded-2xl shadow-2xl border border-white/15 max-w-xs sm:max-w-sm text-center animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#c3f500] font-bold">
              Sede Vasrouse Serviços
            </div>
            <div className="text-sm font-display font-bold text-white mt-1">
              Av. Deolinda Rodrigues, Luanda
            </div>
            <div className="text-xs text-white/70 mt-0.5">
              Frente ao Catetão do Petro · Angola
            </div>
            <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-center gap-4 text-xs font-mono text-[#c3f500]">
              <span>+244 939 917 381</span>
              <span>·</span>
              <span>geral@vasrouse.ao</span>
            </div>
          </div>
        )}

        {/* Large Round Green/Lime Pin Button (matching the reference image) */}
        <button
          onClick={() => setShowTooltip(!showTooltip)}
          className="relative group p-4 sm:p-5 rounded-full bg-[#c3f500] text-[#22074f] shadow-2xl shadow-[#47149e]/50 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center"
          aria-label="Ver localização da Vasrouse Serviços"
        >
          {/* Subtle pulse wave */}
          <span className="absolute -inset-2 rounded-full bg-[#c3f500] opacity-40 animate-ping pointer-events-none" />
          <MapPin className="w-8 h-8 sm:w-10 sm:h-10 fill-[#22074f] text-[#c3f500]" />
        </button>
      </div>
    </section>
  );
};
