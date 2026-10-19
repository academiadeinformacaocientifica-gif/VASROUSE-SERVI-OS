import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/content';
import { PortfolioProject, ServiceCategory } from '../types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Eye } from 'lucide-react';

interface PortfolioProps {
  onOpenQuoteWithProject: (projectTitle: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenQuoteWithProject }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('todos');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filteredProjects = activeCategory === 'todos'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  const filterTabs: { id: ServiceCategory; label: string }[] = [
    { id: 'todos', label: 'Todos os Projetos' },
    { id: 'digital', label: 'Digital & Redes' },
    { id: 'impresso', label: 'Design & Impressão' },
    { id: 'editorial', label: 'Editorial & Revistas' },
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#1d0643] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs uppercase font-mono tracking-widest text-[#c3f500] mb-3">
              Montra de Projetos · Portfólio Dinâmico
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Excelência visível em cada detalhe impresso ou pixel publicado.
            </h2>
          </div>

          {/* Interactive Filter Tabs (Buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#13032d] rounded-xl border border-white/10 shrink-0">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all duration-150 cursor-pointer whitespace-nowrap ${
                  activeCategory === tab.id
                    ? 'bg-[#47149e] text-white shadow-sm border border-white/20'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/25 overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-[#47149e]/30"
            >
              {/* Image Showcase */}
              <div className="relative w-full aspect-[4/3] bg-black/40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1d0643] via-transparent to-transparent opacity-80" />

                {/* Hover Quick Action Badge */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="p-2.5 rounded-full bg-[#c3f500] text-[#22074f] shadow-lg flex items-center justify-center">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Clean Content Area (Strict Anti-Pill Discipline) */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  {/* Unboxed Metadata with · separator */}
                  <div className="flex items-center gap-2 text-xs text-white/50 mb-2 font-mono">
                    <span className="text-[#c3f500] font-medium">{project.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.sector}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-[#c3f500] transition-colors leading-tight mb-3">
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm text-white/70 line-clamp-2 leading-relaxed mb-4">
                    {project.summary}
                  </p>
                </div>

                {/* Footer specs and action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-white/50">
                    Cliente: <strong className="text-white/80 font-medium">{project.client}</strong>
                  </span>
                  <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#c3f500] group-hover:translate-x-0.5 transition-transform">
                    <span>Ver Estudo de Caso</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project detail modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onRequestSimilar={onOpenQuoteWithProject}
        />
      </div>
    </section>
  );
};
