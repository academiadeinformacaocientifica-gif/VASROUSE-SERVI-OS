import React, { useState } from 'react';
import { X, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/content';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialEmail?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
  initialEmail = ''
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullNameOrOrg: '',
    email: initialEmail,
    phoneWhatsapp: '',
    serviceId: initialService || 'revistas-editorial',
    timeline: 'normal',
    projectDescription: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  React.useEffect(() => {
    if (initialEmail) {
      setFormData(prev => ({ ...prev, email: initialEmail }));
    }
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceId: initialService }));
    }
  }, [initialEmail, initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleWhatsAppDirect = () => {
    const selectedService = SERVICES_LIST.find((s) => s.id === formData.serviceId)?.title || 'Serviços Gerais';
    const text = encodeURIComponent(
      `*Pedido de Orçamento - Vasrouse Serviços*\n\n` +
      `*Instituição/Nome:* ${formData.fullNameOrOrg || '(Não especificado)'}\n` +
      `*Email:* ${formData.email || '(Não especificado)'}\n` +
      `*Telefone/WhatsApp:* ${formData.phoneWhatsapp || '(Não especificado)'}\n` +
      `*Serviço:* ${selectedService}\n` +
      `*Prazo Pretendido:* ${formData.timeline}\n` +
      `*Descrição:* ${formData.projectDescription || 'Gostaria de obter proposta oficial.'}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.phones[0].whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#1c053d] border border-white/20 rounded-3xl p-6 sm:p-8 text-white shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#c3f500]/20 border border-[#c3f500] text-[#c3f500] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white">
              Pedido de Orçamento Encaminhado!
            </h3>
            <p className="text-sm text-white/75 max-w-md mx-auto leading-relaxed">
              O seu briefing foi registado na direcção comercial da Vasrouse Serviços. A nossa equipa em Luanda responderá dentro de 24 horas úteis.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-3">
              <button
                onClick={handleWhatsAppDirect}
                className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#22074f] bg-[#c3f500] hover:bg-[#b2e000] inline-flex items-center gap-2 transition-all cursor-pointer shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Abrir Conversa no WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="px-5 py-3 rounded-full text-xs font-medium text-white/80 hover:text-white bg-white/10 hover:bg-white/15 transition-colors cursor-pointer"
              >
                Concluir
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#c3f500] font-bold">
                Vasrouse Serviços · Luanda
              </div>
              <h3 className="text-2xl font-display font-bold text-white mt-1">
                Falar com um Consultor
              </h3>
              <p className="text-xs text-white/70 mt-1">
                Preencha os dados da sua instituição ou empresa para receber uma estimativa formal.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-white/80 mb-1.5">
                  Nome Completo / Instituição <span className="text-[#c3f500]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullNameOrOrg}
                  onChange={(e) => setFormData({ ...formData, fullNameOrOrg: e.target.value })}
                  placeholder="Ex: Ministério da Energia / Sonangol / PME"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#c3f500]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1.5">
                    Email Corporativo <span className="text-[#c3f500]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="geral@organizacao.ao"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#c3f500]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1.5">
                    Telefone / WhatsApp <span className="text-[#c3f500]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.phoneWhatsapp}
                    onChange={(e) => setFormData({ ...formData, phoneWhatsapp: e.target.value })}
                    placeholder="+244 939 917 381"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#c3f500]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1.5">
                    Serviço Pretendido
                  </label>
                  <select
                    value={formData.serviceId}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#22074f] border border-white/15 text-white text-sm focus:outline-none focus:border-[#c3f500]"
                  >
                    {SERVICES_LIST.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.number}. {s.title}
                      </option>
                    ))}
                    <option value="pacote-360">Solução 360° Completa</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1.5">
                    Prazo / Urgência
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#22074f] border border-white/15 text-white text-sm focus:outline-none focus:border-[#c3f500]"
                  >
                    <option value="normal">Prazo Normal (10-15 dias)</option>
                    <option value="urgente">Urgente (Cerimónia / Evento)</option>
                    <option value="30-dias">Planeamento para próximo mês</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/80 mb-1.5">
                  Detalhes do Projecto / Requisitos
                </label>
                <textarea
                  rows={3}
                  value={formData.projectDescription}
                  onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                  placeholder="Número de páginas, tiragem estimada, acabamentos ou canais digitais..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#c3f500] resize-none"
                />
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#22074f] bg-[#c3f500] hover:bg-[#b2e000] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                {isSubmitting ? 'A submeter...' : 'Submeter Proposta'}
                <Send className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="w-full sm:w-auto px-5 py-3 rounded-full text-xs font-medium text-white/80 hover:text-white bg-white/10 hover:bg-white/15 flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#c3f500]" />
                <span>Enviar pelo WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
