import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface QuickContactBannerProps {
  onOpenDetailedQuote: (initialEmail?: string) => void;
}

export const QuickContactBanner: React.FC<QuickContactBannerProps> = ({ onOpenDetailedQuote }) => {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;

    setIsSuccess(true);
    setTimeout(() => {
      onOpenDetailedQuote(email);
    }, 800);
  };

  return (
    <section id="contacto-rapido" className="py-24 lg:py-28 bg-[#f8f6fc] text-center border-t border-[#47149e]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Kicker (matching reference image) */}
        <div className="text-xs uppercase font-mono tracking-widest text-[#55476a] font-semibold mb-2">
          Contato
        </div>

        {/* Headline with accent word (matching reference image) */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#22074f] tracking-tight">
          Fale com um{' '}
          <span className="text-[#47149e] relative inline-block">
            consultor
            <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#c3f500] rounded-full" />
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-base text-[#55476a] max-w-xl mx-auto leading-relaxed">
          Partilhe o seu contacto corporativo para receber um diagnóstico preliminar e estimativa de investimento para o seu projeto em Luanda.
        </p>

        {/* Wide Pill Search/Input Form (matching reference image) */}
        <div className="mt-10 max-w-2xl mx-auto">
          {isSuccess ? (
            <div className="p-4 rounded-full bg-[#c3f500]/20 border border-[#47149e]/20 text-[#22074f] flex items-center justify-center gap-2 font-medium text-sm animate-in fade-in duration-200">
              <CheckCircle2 className="w-5 h-5 text-[#47149e]" />
              <span>Excelente! A redirecionar para os detalhes da proposta...</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative flex items-center shadow-lg shadow-black/5 rounded-full overflow-hidden border border-[#22074f]/15 bg-white p-1.5 focus-within:border-[#47149e] transition-colors">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="exemplo@email.com"
                required
                className="w-full pl-6 pr-4 py-3 text-sm text-[#22074f] placeholder-[#55476a]/60 bg-transparent focus:outline-none"
              />
              <button
                type="submit"
                className="px-8 py-3.5 rounded-full bg-[#c3f500] hover:bg-[#b5e600] active:scale-95 text-[#22074f] font-semibold text-sm transition-all duration-150 cursor-pointer whitespace-nowrap shadow-sm shrink-0 flex items-center gap-1.5"
              >
                <span>Enviar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          <div className="mt-3 flex items-center justify-center gap-6 text-xs text-[#55476a]">
            <span>Atendimento imediato via WhatsApp: <strong>{COMPANY_INFO.phones[0].display}</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
};
