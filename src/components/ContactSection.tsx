import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/content';
import { QuoteFormData } from '../types';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface ContactSectionProps {
  initialServiceId?: string;
  initialBriefNotes?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialServiceId = '',
  initialBriefNotes = ''
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullNameOrOrg: '',
    email: '',
    phoneWhatsapp: '',
    serviceId: initialServiceId || '',
    timeline: 'normal',
    projectDescription: initialBriefNotes || '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync if initial props change
  React.useEffect(() => {
    if (initialServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: initialServiceId }));
    }
    if (initialBriefNotes) {
      setFormData((prev) => ({
        ...prev,
        projectDescription: prev.projectDescription ? `${prev.projectDescription}\n${initialBriefNotes}` : initialBriefNotes
      }));
    }
  }, [initialServiceId, initialBriefNotes]);

  const validate = () => {
    const newErrors: Partial<Record<keyof QuoteFormData, string>> = {};

    if (!formData.fullNameOrOrg.trim()) {
      newErrors.fullNameOrOrg = 'Por favor indique o nome completo ou nome da instituição.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Por favor insira um email corporativo ou de contacto.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Insira um formato de email válido (ex: geral@empresa.co.ao).';
    }

    if (!formData.phoneWhatsapp.trim()) {
      newErrors.phoneWhatsapp = 'Por favor indique o seu número de telefone ou WhatsApp.';
    } else if (formData.phoneWhatsapp.trim().length < 8) {
      newErrors.phoneWhatsapp = 'Número de telefone demasiado curto (ex: +244 939 917 381).';
    }

    if (!formData.serviceId) {
      newErrors.serviceId = 'Seleccione a área ou serviço de interesse prioritário.';
    }

    if (!formData.projectDescription.trim() || formData.projectDescription.trim().length < 10) {
      newErrors.projectDescription = 'Descreva sucintamente o seu projecto (mínimo 10 caracteres).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate backend delivery / Formspree webhook processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const handleWhatsAppDirect = () => {
    const selectedService = SERVICES_LIST.find((s) => s.id === formData.serviceId)?.title || 'Serviços Gerais';
    const text = encodeURIComponent(
      `*Pedido de Orçamento - Vasrouse Serviços*\n\n` +
      `*Instituição/Nome:* ${formData.fullNameOrOrg || '(A preencher)'}\n` +
      `*Email:* ${formData.email || '(A preencher)'}\n` +
      `*Telefone/WhatsApp:* ${formData.phoneWhatsapp || '(A preencher)'}\n` +
      `*Serviço:* ${selectedService}\n` +
      `*Prazo Pretendido:* ${formData.timeline}\n` +
      `*Descrição:* ${formData.projectDescription || 'Gostaria de obter proposta e agendar reunião.'}`
    );

    window.open(`https://wa.me/${COMPANY_INFO.phones[0].whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-[#22074f] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase font-mono tracking-widest text-[#c3f500] mb-3">
            Canal Corporativo · Pedido de Orçamento
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Inicie o seu projecto com a Vasrouse Serviços.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70">
            Estamos prontos para analisar o briefing da sua instituição ou empresa em Luanda e em qualquer província de Angola.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            {/* Address Box */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-[#c3f500]">
                <MapPin className="w-5 h-5 shrink-0" />
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                  Sede Oficial
                </span>
              </div>
              <div className="text-base font-medium text-white">
                {COMPANY_INFO.address}
              </div>
              <div className="text-xs text-white/60">
                Ponto de referência: <strong className="text-white/80">{COMPANY_INFO.addressDetail}</strong>
              </div>
            </div>

            {/* Phones Box */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
              <div className="flex items-center gap-3 text-[#c3f500]">
                <Phone className="w-5 h-5 shrink-0" />
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                  Atendimento Telefónico & WhatsApp
                </span>
              </div>

              <div className="space-y-3">
                {COMPANY_INFO.phones.map((phone, idx) => (
                  <div key={phone.raw} className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div>
                      <div className="text-xs text-white/50">Linha {idx + 1} (Luanda)</div>
                      <a
                        href={`tel:${phone.raw}`}
                        className="text-sm font-semibold text-white font-mono hover:text-[#c3f500] transition-colors"
                      >
                        {phone.display}
                      </a>
                    </div>
                    <a
                      href={`https://wa.me/${phone.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 text-xs font-semibold text-[#22074f] bg-[#c3f500] hover:bg-[#b2e000] rounded-md flex items-center gap-1 transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Emails Box */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-[#c3f500]">
                <Mail className="w-5 h-5 shrink-0" />
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                  Correio Eletrónico Oficial
                </span>
              </div>
              <div className="space-y-2 text-sm font-mono">
                {COMPANY_INFO.emails.map((email) => (
                  <div key={email} className="flex items-center justify-between">
                    <a
                      href={`mailto:${email}`}
                      className="text-white/80 hover:text-[#c3f500] transition-colors"
                    >
                      {email}
                    </a>
                    <span className="text-[10px] text-white/40 uppercase font-sans">Oficial</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hours Box */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#c3f500] shrink-0 mt-0.5" />
              <div className="text-xs text-white/70 space-y-1">
                <div>{COMPANY_INFO.workingHours.weekdays}</div>
                <div>{COMPANY_INFO.workingHours.saturdays}</div>
                <div className="text-white/40">Domínio institucional: vasrouse.co.ao</div>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Quote Form */}
          <div className="lg:col-span-7 bg-[#1c053d] border border-white/15 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl relative">
            {isSuccess ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#c3f500]/20 border border-[#c3f500] text-[#c3f500] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">
                  Pedido de Orçamento Recebido com Sucesso
                </h3>
                <p className="text-sm text-white/75 max-w-md mx-auto leading-relaxed">
                  O seu briefing foi encaminhado para a direcção comercial da Vasrouse Serviços (<span className="text-[#c3f500]">geral@vasrouse.ao</span>). A nossa equipa entrará em contacto dentro de 24 horas úteis.
                </p>

                <div className="pt-4 flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        fullNameOrOrg: '',
                        email: '',
                        phoneWhatsapp: '',
                        serviceId: '',
                        timeline: 'normal',
                        projectDescription: '',
                      });
                    }}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 rounded-lg transition-colors cursor-pointer"
                  >
                    Enviar Outro Pedido
                  </button>
                  <button
                    onClick={handleWhatsAppDirect}
                    className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#22074f] bg-[#c3f500] hover:bg-[#b2e000] rounded-lg inline-flex items-center gap-2 cursor-pointer transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Abrir Conversa no WhatsApp</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-display font-bold text-white">
                    Formulário de Proposta Comercial
                  </h3>
                  <p className="text-xs text-white/60 mt-1">
                    Preencha os dados abaixo para receber uma estimativa detalhada com opções de acabamento e cronograma de produção.
                  </p>
                </div>

                {/* Nome Completo / Instituição */}
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-2">
                    Nome Completo ou Instituição / Empresa <span className="text-[#c3f500]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullNameOrOrg}
                    onChange={(e) => setFormData({ ...formData, fullNameOrOrg: e.target.value })}
                    placeholder="Ex: Ministério da Energia / Sonangol / Livraria Central"
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                      errors.fullNameOrOrg ? 'border-red-400' : 'border-white/15'
                    } text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#c3f500] transition-colors`}
                  />
                  {errors.fullNameOrOrg && (
                    <p className="text-xs text-red-400 mt-1.5">{errors.fullNameOrOrg}</p>
                  )}
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-2">
                      Email Corporativo ou Pessoal <span className="text-[#c3f500]">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu.email@organizacao.ao"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                        errors.email ? 'border-red-400' : 'border-white/15'
                      } text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#c3f500] transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1.5">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-2">
                      Telefone / WhatsApp <span className="text-[#c3f500]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.phoneWhatsapp}
                      onChange={(e) => setFormData({ ...formData, phoneWhatsapp: e.target.value })}
                      placeholder="+244 939 000 000"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                        errors.phoneWhatsapp ? 'border-red-400' : 'border-white/15'
                      } text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#c3f500] transition-colors`}
                    />
                    {errors.phoneWhatsapp && (
                      <p className="text-xs text-red-400 mt-1.5">{errors.phoneWhatsapp}</p>
                    )}
                  </div>
                </div>

                {/* Serviço de Interesse and Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-2">
                      Serviço de Interesse Principal <span className="text-[#c3f500]">*</span>
                    </label>
                    <select
                      value={formData.serviceId}
                      onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-[#22074f] border ${
                        errors.serviceId ? 'border-red-400' : 'border-white/15'
                      } text-white text-sm focus:outline-none focus:border-[#c3f500] transition-colors cursor-pointer`}
                    >
                      <option value="">Selecione uma área...</option>
                      {SERVICES_LIST.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.number}. {s.title}
                        </option>
                      ))}
                      <option value="pacote-360">Pacote Completo 360° (Digital + Gráfico)</option>
                    </select>
                    {errors.serviceId && (
                      <p className="text-xs text-red-400 mt-1.5">{errors.serviceId}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-2">
                      Prazo Pretendido / Urgência
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#22074f] border border-white/15 text-white text-sm focus:outline-none focus:border-[#c3f500] transition-colors cursor-pointer"
                    >
                      <option value="normal">Prazo Normal (Planeamento padrão)</option>
                      <option value="urgente">Urgência (Evento próximo / até 7 dias)</option>
                      <option value="15-dias">Dentro de 15 dias</option>
                      <option value="planeamento-futuro">Planeamento para próximo trimestre</option>
                    </select>
                  </div>
                </div>

                {/* Descrição do Projecto */}
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-2">
                    Descrição do Projecto / Especificações <span className="text-[#c3f500]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    placeholder="Indique detalhes como número aproximado de páginas, tiragem estimada, tipo de acabamento ou canais a activar..."
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                      errors.projectDescription ? 'border-red-400' : 'border-white/15'
                    } text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#c3f500] transition-colors resize-none`}
                  />
                  {errors.projectDescription && (
                    <p className="text-xs text-red-400 mt-1.5">{errors.projectDescription}</p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#22074f] bg-[#c3f500] hover:bg-[#b2e000] active:scale-[0.98] disabled:opacity-60 transition-all rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#c3f500]/20"
                  >
                    {isSubmitting ? (
                      <span>A Enviar Proposta...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submeter Pedido de Orçamento</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="px-4 py-3 text-xs font-medium text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    title="Preencher via WhatsApp"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#c3f500]" />
                    <span>Ou Enviar via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
