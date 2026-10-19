import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

interface SolutionsCardsProps {
  onSelectSolution: (solutionName: string, serviceId: string) => void;
}

export const SolutionsCards: React.FC<SolutionsCardsProps> = ({ onSelectSolution }) => {
  const cards = [
    {
      id: 'digital',
      serviceId: 'redes-sociais',
      bgClass: 'bg-gradient-to-b from-[#47149e] to-[#360d7c]',
      accentColor: '#ffffff',
      title: 'Digital & Redes',
      subtitle: 'Comunicação',
      description: 'Gestão estratégica de redes sociais, calendários editoriais de autoridade e campanhas de marketing digital orientadas a conversão.',
      deliverables: [
        'Calendário editorial e redacção institucional',
        'Artes gráficas em alta definição para ecrãs',
        'Gestão de comunidade e campanhas Meta/Google',
        'Relatórios mensais de alcance e envolvimento'
      ],
      bottomPill: 'Comunicação'
    },
    {
      id: 'editorial',
      serviceId: 'revistas-editorial',
      bgClass: 'bg-gradient-to-b from-[#22074f] to-[#170339]',
      accentColor: '#c3f500',
      title: 'Revistas & Editorial',
      subtitle: 'Publicações',
      description: 'Diagramação e paginação de elite para relatórios de contas, revistas ministeriais, livros comemorativos e anuários institucionais.',
      deliverables: [
        'Grelhas tipográficas com padrão suíço',
        'Tratamento fotográfico de alta resolução',
        'Provas de cor certificadas e maquetas reais',
        'Encadernação com lombada quadrada ou cosida'
      ],
      bottomPill: 'Editorial'
    },
    {
      id: 'impressao',
      serviceId: 'producao-impressao',
      bgClass: 'bg-gradient-to-b from-[#38107a] to-[#250857]',
      accentColor: '#ffffff',
      title: 'Produção & Impressão',
      subtitle: 'Gráfica',
      description: 'Execução física de alta fidelidade em papéis nobres certificados, com acabamentos nobres e inspecção rigorosa em máquina.',
      deliverables: [
        'Impressão offset e digital de grande precisão',
        'Verniz UV localizado, relevo seco e estampagem a ouro',
        'Pastas corporativas, envelopes e cartões VIP',
        'Roll-ups, telas e expositores para eventos'
      ],
      bottomPill: 'Impressão'
    }
  ];

  return (
    <section id="solucoes" className="py-24 lg:py-32 bg-[#f8f6fc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Title (matching reference image) */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#22074f] tracking-tight">
            As nossas soluções
          </h2>
          <p className="mt-4 text-base text-[#55476a]">
            Três pilares estratégicos desenhados para atender desde instituições públicas a PMEs e produtoras de eventos em Angola.
          </p>
        </div>

        {/* 3 Tall Cards Grid (matching reference image layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => onSelectSolution(card.title, card.serviceId)}
              className={`rounded-2xl ${card.bgClass} text-white p-8 lg:p-10 flex flex-col justify-between shadow-xl shadow-black/10 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group min-h-[500px] border border-white/10`}
            >
              <div>
                {/* V7 Stylized Mark in Card Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center p-2 border border-white/15">
                      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                        <path d="M18 20L44 82H54L28 20H18Z" fill="#ffffff" />
                        <path d="M48 20H82L80 32H58L50 52H38L48 20Z" fill="#c3f500" />
                        <path d="M74 34L46 82H58L84 34H74Z" fill="#ffffff" />
                      </svg>
                    </div>
                    <span className="font-display font-bold text-lg tracking-tight text-white">
                      vasrouse
                    </span>
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 group-hover:text-[#c3f500] transition-colors">
                    {card.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  className="text-2xl font-display font-bold mb-3 tracking-tight"
                  style={{ color: card.accentColor }}
                >
                  {card.title}
                </h3>

                <p className="text-sm text-white/80 leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  {card.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-white/90">
                      <Check className="w-3.5 h-3.5 text-[#c3f500] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom pill & action (matching reference image) */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs uppercase font-mono font-semibold tracking-wider text-white/70">
                  {card.bottomPill}
                </span>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c3f500] group-hover:translate-x-1 transition-transform">
                  <span>Pedir Proposta</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
