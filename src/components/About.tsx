import React from 'react';
import { INSTITUTIONAL_PILLARS, WORKFLOW_STEPS } from '../data/content';
import { ShieldCheck, Clock, Award, Layers } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="quem-somos" className="py-20 lg:py-28 bg-[#22074f] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase font-mono tracking-widest text-[#c3f500] mb-3">
            Quem Somos · Resumo Institucional
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
            Cobertura integral de comunicação: da estratégia digital ao produto final impresso.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
            A Vasrouse Serviços nasceu para sanar uma das maiores dores do mercado angolano: a desconexão entre a conceção criativa e a execução física. Atuamos como o seu parceiro único de comunicação visual de ponta a ponta, garantindo fidelidade absoluta, padrão internacional e pontualidade.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSTITUTIONAL_PILLARS.map((pillar, idx) => {
            const Icon = idx === 0 ? ShieldCheck : idx === 1 ? Clock : Award;
            return (
              <div
                key={pillar.number}
                className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/25 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-[#c3f500] font-semibold tracking-wider">
                      PILAR {pillar.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-[#47149e]/40 text-[#c3f500] group-hover:scale-110 transition-transform duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-3 tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-white/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-xs text-white/40 font-mono">
                  Vasrouse Compromisso Institucional
                </div>
              </div>
            );
          })}
        </div>

        {/* The End-to-End Workflow Ecosystem */}
        <div className="mt-20 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#1b053f] via-[#22074f] to-[#290a5e] border border-white/10 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#c3f500] mb-1">
                <Layers className="w-4 h-4" />
                <span>O Fluxo Integrado Vasrouse</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                Como asseguramos padrão sem falhas em cada entrega
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-white/60 max-w-md">
              Uma metodologia estruturada que elimina retrabalhos e assegura conformidade total desde o primeiro rascunho até à entrega em mão.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {WORKFLOW_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/10 relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-[#c3f500] mb-2">
                    ETAPA {step.step}
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-2 leading-snug">
                    {step.name}
                  </h4>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-white/40">
                  {idx === 4 ? 'Pronto a Usar' : 'Passo Seguinte →'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
