import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices }) => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('sobre');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-24 overflow-hidden">
      {/* Full Background Photographic Scene (matching reference image) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/vasrouse_hero_studio_1792426605504.jpg"
          alt="Estúdio criativo e equipa da Vasrouse Serviços em Luanda"
          className="w-full h-full object-cover object-center brightness-60"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Dark Violet / Midnight Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#22074f]/95 via-[#22074f]/75 to-[#160434]/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl space-y-6">
          {/* Main Headline (matching exact layout and typography of reference image) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-display font-bold text-white tracking-tight leading-[1.12]">
            Transformamos a imagem da sua organização com{' '}
            <span className="text-[#c3f500]">criatividade</span>
          </h1>

          {/* Subtitle (matching reference image) */}
          <p className="text-lg sm:text-xl text-white/85 font-normal leading-relaxed max-w-2xl">
            Soluções visuais completas de ponta a ponta: da gestão estratégica de redes sociais à produção editorial e impressão de alta fidelidade em Angola.
          </p>

          {/* Pill CTA Button (matching reference image) */}
          <div className="pt-4">
            <button
              onClick={onExploreServices}
              className="px-8 py-3.5 rounded-full text-sm font-semibold text-[#22074f] bg-[#c3f500] hover:bg-[#b2e000] active:scale-95 transition-all shadow-lg shadow-[#c3f500]/25 cursor-pointer inline-flex items-center gap-2"
            >
              <span>Conheça nossos serviços</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Center Bottom Round Arrow Button (matching reference image) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20">
        <button
          onClick={scrollToNext}
          className="w-12 h-12 rounded-full bg-[#c3f500] text-[#22074f] flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer"
          aria-label="Rolar para a secção seguinte"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};
