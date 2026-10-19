import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/content';
import { ServiceItem } from '../types';
import { 
  Share2, 
  TrendingUp, 
  Monitor, 
  Printer, 
  PackageCheck, 
  BookOpen, 
  ArrowUpRight,
  Check,
  Sparkles,
  Layers
} from 'lucide-react';

interface ServicesProps {
  onSelectServiceForQuote: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForQuote }) => {
  const [filter, setFilter] = useState<'todos' | 'digital' | 'impresso' | 'editorial'>('todos');

  const filteredServices = filter === 'todos' 
    ? SERVICES_LIST 
    : SERVICES_LIST.filter(s => s.category === filter);

  const getIcon = (id: string) => {
    switch (id) {
      case 'redes-sociais':
        return Share2;
      case 'marketing-digital':
        return TrendingUp;
      case 'design-digital':
        return Monitor;
      case 'design-impressao':
        return Printer;
      case 'producao-impressao':
        return PackageCheck;
      case 'revistas-editorial':
        return BookOpen;
      default:
        return Monitor;
    }
  };

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-[#18043b] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Segmented filter tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-xs uppercase font-mono tracking-widest text-[#c3f500] mb-3 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Capacidades de Ponta a Ponta · Catálogo Especializado</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Seis pilares executados com rigor técnico e estética de prestígio.
            </h2>
          </div>

          {/* Dribbble Style Segmented Filter Controls */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-[#12022b] rounded-xl border border-white/10">
            {(['todos', 'digital', 'impresso', 'editorial'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  filter === tab
                    ? 'bg-[#47149e] text-white shadow-sm border border-white/20'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab === 'todos' ? 'Todos os 6 Pilares' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service: ServiceItem, idx: number) => {
            const Icon = getIcon(service.id);
            const isMarquee = service.id === 'revistas-editorial' || service.id === 'producao-impressao';

            return (
              <div
                key={service.id}
                className={`p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                  isMarquee
                    ? 'bg-gradient-to-br from-[#240854] to-[#1c053f] border-[#c3f500]/30 shadow-xl shadow-[#47149e]/30'
                    : 'bg-white/[0.03] border-white/10 hover:border-white/25 hover:bg-white/[0.05]'
                }`}
              >
                {isMarquee && (
                  <div className="absolute top-0 right-0 px-3 py-1 bg-[#c3f500] text-[#22074f] text-[10px] font-mono font-bold uppercase tracking-wider rounded-bl-xl flex items-center gap-1 shadow-sm">
                    <Sparkles className="w-3 h-3" />
                    <span>Destaque Editorial</span>
                  </div>
                )}

                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-bold text-[#c3f500] px-2 py-0.5 rounded bg-white/5 border border-white/10">
                      PILAR {service.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-[#47149e]/50 text-[#c3f500] group-hover:scale-110 transition-transform duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-1 tracking-tight">
                    {service.title}
                  </h3>
                  <div className="text-xs text-white/50 mb-3">
                    {service.subtitle}
                  </div>

                  <p className="text-sm text-white/70 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables list */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-white/40 mb-1">
                      Entregáveis Certificados:
                    </div>
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-white/80">
                        <Check className="w-3.5 h-3.5 text-[#c3f500] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer action of card */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <div className="text-[11px] font-mono text-white/40">
                    {service.category === 'digital' ? 'Ambiente Web / Social' : service.category === 'editorial' ? 'Produção Editorial & Papel' : 'Gráfica Offset / Digital'}
                  </div>
                  <button
                    onClick={() => onSelectServiceForQuote(service.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#c3f500] hover:text-white transition-colors cursor-pointer group-hover:translate-x-0.5"
                  >
                    <span>Orçar Este Pilar</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
