import React, { useState } from 'react';
import { TARGET_AUDIENCES } from '../data/content';
import { Landmark, Building2, BookMarked, CheckCircle2, ArrowRight } from 'lucide-react';

interface SolutionsProps {
  onOpenQuoteWithBrief: (audienceTitle: string) => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onOpenQuoteWithBrief }) => {
  const [activeTab, setActiveTab] = useState<string>(TARGET_AUDIENCES[0].id);

  const activeAudience = TARGET_AUDIENCES.find((a) => a.id === activeTab) || TARGET_AUDIENCES[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'instituicoes-publicas':
        return Landmark;
      case 'empresas-pmes':
        return Building2;
      case 'editoras-eventos':
        return BookMarked;
      default:
        return Landmark;
    }
  };

  return (
    <section id="solucoes" className="py-20 lg:py-28 bg-[#22074f] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase font-mono tracking-widest text-[#c3f500] mb-3">
            Comunicação Segmentada · Soluções por Sector
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Adequamos o tom, a metodologia e o rigor a cada perfil institucional.
          </h2>
          <p className="mt-4 text-base text-white/70">
            Diferentes organizações possuem diferentes exigências de confidencialidade, velocidade comercial e acabamento estético. Veja como estruturamos a nossa abordagem para o seu sector.
          </p>
        </div>

        {/* Interactive Segmented Switcher */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#170438] rounded-xl border border-white/10 mb-10 w-fit">
          {TARGET_AUDIENCES.map((audience) => {
            const Icon = getIcon(audience.id);
            const isActive = activeTab === audience.id;
            return (
              <button
                key={audience.id}
                onClick={() => setActiveTab(audience.id)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-150 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#47149e] text-white shadow-md border border-white/20'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#c3f500]' : 'text-white/40'}`} />
                <span>{audience.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Audience Panel */}
        <div className="rounded-2xl bg-gradient-to-br from-[#1b053f] to-[#250857] border border-white/15 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#47149e]/30 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left overview */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono text-[#c3f500] font-semibold uppercase tracking-wider">
                  {activeAudience.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
                  {activeAudience.title}
                </h3>
                <div className="text-xs font-medium text-white/50 mt-1">
                  {activeAudience.subtitle}
                </div>
              </div>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                {activeAudience.description}
              </p>

              {/* Focus and Tone Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-[11px] font-mono text-[#c3f500] uppercase tracking-wider mb-1">
                    Foco Prioritário
                  </div>
                  <div className="text-xs text-white/90 leading-snug">
                    {activeAudience.focus}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-[11px] font-mono text-[#c3f500] uppercase tracking-wider mb-1">
                    Tom de Comunicação
                  </div>
                  <div className="text-xs text-white/90 leading-snug">
                    {activeAudience.tone}
                  </div>
                </div>
              </div>

              {/* Highlights List */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-white/50">
                  Garantias Operacionais:
                </div>
                {activeAudience.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85">
                    <CheckCircle2 className="w-4 h-4 text-[#c3f500] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenQuoteWithBrief(`Interesse no sector: ${activeAudience.title}`)}
                  className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#22074f] bg-[#c3f500] hover:bg-[#b2e000] active:scale-[0.98] transition-all rounded-lg inline-flex items-center gap-2 cursor-pointer shadow-md shadow-[#c3f500]/15"
                >
                  <span>Solicitar Proposta para {activeAudience.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right sample deliverables */}
            <div className="lg:col-span-5 bg-[#160434] p-6 rounded-xl border border-white/10 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-[#c3f500] font-semibold">
                Entregáveis Típicos deste Segmento
              </div>
              <div className="space-y-3">
                {activeAudience.sampleDeliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-start gap-3 hover:border-white/15 transition-colors"
                  >
                    <span className="font-mono text-xs text-[#c3f500] font-bold mt-0.5">
                      0{idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-white/90 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[11px] text-white/50 text-center">
                Acompanhamento presencial ou remoto disponível para Luanda e províncias.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
