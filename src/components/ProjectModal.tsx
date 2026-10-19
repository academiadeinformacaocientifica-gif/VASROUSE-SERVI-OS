import React from 'react';
import { PortfolioProject } from '../types';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onRequestSimilar: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRequestSimilar
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#1c053d] border border-white/20 rounded-2xl shadow-2xl text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white transition-colors cursor-pointer border border-white/20"
          aria-label="Fechar detalhes do projeto"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Image Header */}
        <div className="relative w-full h-[280px] sm:h-[380px] bg-black overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c053d] via-[#1c053d]/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#c3f500] font-semibold">
              {project.categoryLabel} · {project.sector}
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1">
              {project.title}
            </h3>
            <div className="text-sm text-white/70 mt-1">
              Cliente: {project.client}
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Summary */}
          <p className="text-base sm:text-lg text-white/85 leading-relaxed font-normal">
            {project.summary}
          </p>

          {/* Technical Specifications Strip */}
          <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="text-xs font-mono uppercase tracking-wider text-[#c3f500] mb-4">
              Especificações Técnicas & Produção
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.specs.map((spec, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-[11px] text-white/50 uppercase tracking-wide">
                    {spec.label}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white font-mono">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge and Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
              <div className="text-xs font-mono text-white/50 uppercase tracking-wider">
                O Desafio
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
              <div className="text-xs font-mono text-[#c3f500] uppercase tracking-wider">
                A Solução Vasrouse
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Impact Statement */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#47149e]/30 border border-[#47149e]/60 text-white">
            <CheckCircle2 className="w-5 h-5 text-[#c3f500] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-mono uppercase text-[#c3f500] font-semibold">
                Resultado & Impacto Verificado
              </div>
              <div className="text-sm text-white/90 mt-0.5">
                {project.impact}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-white/50">
              Projeto executado sob estrito padrão de qualidade Vasrouse.
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2.5 text-xs font-medium text-white/70 hover:text-white rounded-lg transition-colors cursor-pointer"
              >
                Fechar
              </button>
              <button
                onClick={() => {
                  onRequestSimilar(project.title);
                  onClose();
                }}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#22074f] bg-[#c3f500] hover:bg-[#b2e000] rounded-lg inline-flex items-center gap-2 cursor-pointer transition-all shadow-md"
              >
                <span>Solicitar Projeto Semelhante</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
