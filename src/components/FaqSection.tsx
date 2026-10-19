import React, { useState } from 'react';
import { FAQ_LIST } from '../data/content';
import { ChevronDown, HelpCircle, ShieldAlert } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#1f0646] relative border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase font-mono tracking-widest text-[#c3f500] mb-3 inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Perguntas Frequentes & Garantias Operacionais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Transparência e rigor em cada etapa da contratação.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/70">
            Respostas directas sobre prazos, sigilo institucional, provas de cor e expedição para todas as províncias de Angola.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors overflow-hidden"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-white/90">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-white/10 text-[#c3f500] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-[#47149e]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-white/75 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Institutional Commitment Note */}
        <div className="mt-12 p-5 rounded-xl bg-[#47149e]/30 border border-white/15 flex items-start gap-3.5 text-xs text-white/80">
          <ShieldAlert className="w-5 h-5 text-[#c3f500] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-white">Compromisso com o Cliente Institucional:</span> Qualquer trabalho gráfico ou digital com especificações especiais pode ser acompanhado presencialmente no nosso estúdio na Av. Deolinda Rodrigues em Luanda.
          </div>
        </div>
      </div>
    </section>
  );
};
