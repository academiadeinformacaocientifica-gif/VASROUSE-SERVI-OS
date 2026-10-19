import React from 'react';
import { TRUST_SECTORS } from '../data/content';
import { Shield, Sparkles } from 'lucide-react';

export const TrustMarquee: React.FC = () => {
  return (
    <div className="border-y border-white/10 bg-[#170438]/90 py-5 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 mb-3 flex items-center justify-between text-xs text-white/50">
        <span className="font-mono uppercase tracking-widest text-[#c3f500] flex items-center gap-2">
          <Shield className="w-3.5 h-3.5" />
          <span>Setores Atendidos com Padrão de Estado & Corporativo</span>
        </span>
        <span className="hidden sm:inline-block font-mono text-[11px] text-white/40">
          Angola · Presença Nacional
        </span>
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* Infinite marquee track */}
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap py-1">
          {TRUST_SECTORS.concat(TRUST_SECTORS).map((sector, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#c3f500]" />
              <span className="font-display tracking-tight text-white/90">{sector}</span>
              <span className="text-white/20 ml-5">/</span>
            </div>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 flex items-center gap-8 whitespace-nowrap py-1" aria-hidden="true">
          {TRUST_SECTORS.concat(TRUST_SECTORS).map((sector, idx) => (
            <div
              key={`dup-${idx}`}
              className="inline-flex items-center gap-3 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#c3f500]" />
              <span className="font-display tracking-tight text-white/90">{sector}</span>
              <span className="text-white/20 ml-5">/</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
