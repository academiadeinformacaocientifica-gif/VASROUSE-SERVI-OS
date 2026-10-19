import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  Layers, 
  Check, 
  Send
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface QuoteCalculatorProps {
  onApplyCalculatedQuote: (summary: string, serviceId: string) => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ onApplyCalculatedQuote }) => {
  const [selectedService, setSelectedService] = useState('revistas-editorial');
  const [scale, setScale] = useState('media');
  const [finishType, setFinishType] = useState('premium');
  const [urgency, setUrgency] = useState('normal');

  const services = [
    { id: 'revistas-editorial', label: 'Revistas & Produção Editorial', baseTime: '10-15 dias' },
    { id: 'design-impressao', label: 'Papelaria & Materiais Impressos', baseTime: '4-7 dias' },
    { id: 'redes-sociais', label: 'Gestão de Redes & Conteúdo', baseTime: 'Início em 48h' },
    { id: 'marketing-digital', label: 'Campanha de Marketing Digital', baseTime: 'Setup em 5 dias' },
    { id: 'pacote-360', label: 'Ecossistema 360° (Digital + Gráfico)', baseTime: '15-20 dias' },
  ];

  const scales = [
    { id: 'pequena', label: 'Escala Inicial / PME', desc: 'Até 500 exemplares ou presença mensal básica' },
    { id: 'media', label: 'Escala Corporativa', desc: '500 a 2.500 exemplares ou campanha trimestral' },
    { id: 'grande', label: 'Grande Escala / Institucional', desc: '+2.500 exemplares ou alcance nacional contínuo' },
  ];

  const finishes = [
    { id: 'padrao', label: 'Padrão Profissional', desc: 'Couché mate / brilho com verniz máquina' },
    { id: 'premium', label: 'Acabamento Nobre VIP', desc: 'Verniz UV localizado, relevo seco ou hot stamping' },
    { id: 'luxo', label: 'Edição de Luxo Institucional', desc: 'Capa dura, costura artesanal e caixa protetora' },
  ];

  const getCalculatedEstimate = () => {
    let days = '7 a 12 dias úteis';
    if (selectedService === 'revistas-editorial') {
      days = urgency === 'urgente' ? '5 a 8 dias (Expresso)' : scale === 'grande' ? '15 a 20 dias' : '10 a 14 dias';
    } else if (selectedService === 'redes-sociais') {
      days = 'Ativação em 48h a 72h';
    } else if (selectedService === 'design-impressao') {
      days = urgency === 'urgente' ? '48h a 72h' : '5 a 7 dias úteis';
    } else {
      days = urgency === 'urgente' ? '7 dias úteis' : '12 a 15 dias úteis';
    }

    const serviceName = services.find(s => s.id === selectedService)?.label || 'Serviço';
    const scaleName = scales.find(s => s.id === scale)?.label || 'Escala';
    const finishName = finishes.find(f => f.id === finishType)?.label || 'Acabamento';

    return {
      days,
      serviceName,
      scaleName,
      finishName,
      summary: `[Simulador Vasrouse] Serviço: ${serviceName} | Escala: ${scaleName} | Acabamento: ${finishName} | Urgência: ${urgency === 'urgente' ? 'Urgente / Evento' : 'Normal'}`
    };
  };

  const estimate = getCalculatedEstimate();

  const handleTransferToForm = () => {
    onApplyCalculatedQuote(estimate.summary, selectedService);
  };

  const handleWhatsAppInstant = () => {
    const text = encodeURIComponent(
      `*Pedido Estruturado via Simulador Vasrouse*\n\n` +
      `*Serviço:* ${estimate.serviceName}\n` +
      `*Escala:* ${estimate.scaleName}\n` +
      `*Acabamento:* ${estimate.finishName}\n` +
      `*Urgência:* ${urgency === 'urgente' ? 'Urgente' : 'Normal'}\n` +
      `*Prazo Estimado Indicativo:* ${estimate.days}\n\n` +
      `Gostaria de formalizar este pedido de proposta comercial para a nossa organização.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.phones[0].whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 lg:py-28 bg-[#18043b] relative border-t border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#47149e]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c3f500]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase font-mono tracking-widest text-[#c3f500] mb-3 flex items-center gap-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Ferramenta Interativa · Configuração de Escopo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Configure o escopo do seu projeto e obtenha alinhamento imediato.
          </h2>
          <p className="mt-3 text-base text-white/70">
            Simule parâmetros de serviço, volume, tipo de acabamento e urgência para direcionar o briefing exato para a nossa direção técnica em Luanda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Controls left column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Service */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-3">
                01. Selecione a Linha de Serviço Principal
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {services.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedService(item.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      selectedService === item.id
                        ? 'bg-[#47149e] border-[#c3f500] text-white shadow-md'
                        : 'bg-white/[0.03] border-white/10 text-white/70 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-semibold">{item.label}</span>
                    <span className="text-[11px] font-mono opacity-60 mt-1">Tempo base: {item.baseTime}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Scale */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-3">
                02. Volume ou Dimensão da Operação
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {scales.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setScale(item.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      scale === item.id
                        ? 'bg-[#47149e] border-[#c3f500] text-white shadow-md'
                        : 'bg-white/[0.03] border-white/10 text-white/70 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className="text-[11px] text-white/60 mt-1 leading-tight">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Finish */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-3">
                03. Nível de Acabamento & Suportes Físicos
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {finishes.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setFinishType(item.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      finishType === item.id
                        ? 'bg-[#47149e] border-[#c3f500] text-white shadow-md'
                        : 'bg-white/[0.03] border-white/10 text-white/70 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className="text-[11px] text-white/60 mt-1 leading-tight">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Urgency */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-3">
                04. Cronograma de Entrega
              </label>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setUrgency('normal')}
                  className={`px-4 py-2.5 rounded-lg text-xs font-medium border cursor-pointer transition-colors ${
                    urgency === 'normal'
                      ? 'bg-[#47149e] border-white/30 text-white'
                      : 'bg-white/[0.02] border-white/10 text-white/60 hover:text-white'
                  }`}
                >
                  Cronograma Padrão
                </button>
                <button
                  onClick={() => setUrgency('urgente')}
                  className={`px-4 py-2.5 rounded-lg text-xs font-medium border cursor-pointer transition-colors flex items-center gap-1.5 ${
                    urgency === 'urgente'
                      ? 'bg-[#c3f500] text-[#22074f] font-semibold border-[#c3f500]'
                      : 'bg-white/[0.02] border-white/10 text-white/60 hover:text-white'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>Prioridade Urgente (Cerimónia / Evento)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Result card right column (Vivaworks aesthetic card) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#22074f] to-[#14022c] border border-white/20 rounded-2xl p-7 lg:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-[#c3f500] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Resumo da Configuração</span>
              </span>
              <span className="text-[11px] text-white/50 font-mono">Vasrouse Lab</span>
            </div>

            <div className="py-6 space-y-4">
              <div>
                <div className="text-[11px] text-white/50 uppercase font-mono">Serviço Selecionado</div>
                <div className="text-lg font-display font-bold text-white mt-0.5">
                  {estimate.serviceName}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-[10px] text-white/50 uppercase font-mono">Volume / Escala</div>
                  <div className="text-xs font-semibold text-white mt-1">{estimate.scaleName}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-[10px] text-white/50 uppercase font-mono">Acabamento</div>
                  <div className="text-xs font-semibold text-white mt-1">{estimate.finishName}</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#47149e]/40 border border-[#c3f500]/30 mt-4">
                <div className="text-xs text-white/70 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#c3f500]" />
                  <span>Estimativa de Produção Indicativa:</span>
                </div>
                <div className="text-xl font-display font-bold text-[#c3f500] mt-1 font-mono">
                  {estimate.days}
                </div>
                <div className="text-[11px] text-white/50 mt-1">
                  Com prova de cor e boneco prévio incluídos antes da impressão final.
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <button
                onClick={handleTransferToForm}
                className="w-full py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#22074f] bg-[#c3f500] hover:bg-[#b2e000] active:scale-[0.98] rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-[#c3f500]/20"
              >
                <span>Inserir no Formulário de Orçamento</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleWhatsAppInstant}
                className="w-full py-3 px-4 text-xs font-medium text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 text-[#c3f500]" />
                <span>Encaminhar Configuração via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
