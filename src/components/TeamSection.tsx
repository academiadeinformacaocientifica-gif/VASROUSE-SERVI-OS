import React from 'react';

export const TeamSection: React.FC = () => {
  const team = [
    {
      role: 'DIRECÇÃO EDITORIAL',
      name: 'Mário dos Santos',
      image: '/images/vasrouse_team_editorial_1792428882170.jpg',
      bio: 'Especialista em paginação editorial de alta complexidade, diagramação de revistas ministeriais, livros comemorativos e relatórios anuais com padrões de excelência internacional.'
    },
    {
      role: 'ESTRATÉGIA DIGITAL',
      name: 'Edgar Kiala',
      image: '/images/vasrouse_team_digital_1792428882625.jpg',
      bio: 'Responsável pelo planeamento de comunicação digital, criação de calendários de conteúdo e campanhas de tráfego que transformam presença em autoridade e novos clientes.'
    },
    {
      role: 'PRODUÇÃO GRÁFICA',
      name: 'António Mateus',
      image: '/images/vasrouse_team_production_1792428881624.jpg',
      bio: 'Supervisão técnica de pré-impressão, calibração CMYK e controlo de qualidade em máquina, garantindo fidelidade de cor e acabamentos nobres sem falhas de corte.'
    }
  ];

  return (
    <section className="py-24 lg:py-28 bg-[#f8f6fc] border-t border-[#47149e]/10 text-[#22074f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3 Circular Portrait Cards Grid (matching reference image) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {team.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              {/* Circular Photo with Lime Accent Ring (matching reference image) */}
              <div className="relative mb-6">
                <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full p-1.5 bg-gradient-to-tr from-[#c3f500] to-[#47149e] shadow-lg shadow-black/10 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Role Title in small caps */}
              <div className="text-xs font-mono font-bold tracking-widest text-[#47149e] uppercase mb-1">
                {member.role}
              </div>

              {/* Name in bold font-display */}
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#22074f] mb-3">
                {member.name}
              </h3>

              {/* Bio Paragraph */}
              <p className="text-xs sm:text-sm text-[#55476a] leading-relaxed max-w-sm">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
