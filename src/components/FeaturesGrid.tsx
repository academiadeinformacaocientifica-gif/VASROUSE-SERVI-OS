import React from 'react';

export const FeaturesGrid: React.FC = () => {
  const features = [
    {
      title: 'Rigor Técnico & CMYK',
      desc: 'Pré-impressão calibrada folha a folha, respeitando sangrias, tipografia milimétrica e perfis cromáticos internacionais sem margem para erro.'
    },
    {
      title: 'Cumprimento Estrito de Prazos',
      desc: 'Tratamos cada data de entrega como um compromisso inegociável. Eventos de Estado, reuniões de acionistas e atas têm garantia de pontualidade.'
    },
    {
      title: 'Foco em Resultados Institucionais',
      desc: 'Materiais concebidos para transmitir autoridade pública e converter vendas para PMEs, reforçando a reputação da sua organização.'
    },
    {
      title: 'Provas de Cor Físicas Certificadas',
      desc: 'Antes de rodar qualquer tiragem, apresentamos boneco real e prova de máquina para aprovação formal sem desvios de cor.'
    },
    {
      title: 'Logística Nacional (Luanda & Províncias)',
      desc: 'Sede e produção na Av. Deolinda Rodrigues em Luanda, com expedição rápida e protegida para todas as províncias de Angola.'
    },
    {
      title: 'Produção de Alta Fidelidade',
      desc: 'Acabamentos nobres exclusivos: verniz UV localizado, relevo seco, estampagem a ouro (hot stamping) e encadernação cosida a linha.'
    }
  ];

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-[#f8f6fc] text-[#22074f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline */}
          <div className="lg:col-span-5">
            <div className="text-xs font-mono uppercase tracking-widest text-[#47149e] font-bold mb-3">
              Compromisso Vasrouse · Angola
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-display font-extrabold text-[#22074f] tracking-tight leading-[1.15]">
              Excelência visual e rigor técnico do conceito à entrega física.
            </h2>
            <p className="mt-5 text-base text-[#55476a] leading-relaxed">
              Combinamos estratégia de comunicação, design sofisticado e acompanhamento minucioso de máquinas gráficas para garantir que o resultado final supere todas as expectativas da sua liderança.
            </p>
          </div>

          {/* Right Column: 2x3 Grid with Concentric Target Icons (matching the reference image) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {features.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                {/* Concentric Circle Icon (matching the image) */}
                <div className="shrink-0 mt-1 relative flex items-center justify-center w-7 h-7 rounded-full bg-[#c3f500]/30 border-2 border-[#47149e]/40">
                  <div className="w-3 h-3 rounded-full bg-[#47149e]" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base font-display font-bold text-[#22074f] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#55476a] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
