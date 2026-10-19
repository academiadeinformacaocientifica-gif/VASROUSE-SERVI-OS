import React, { useState } from 'react';
import { LogoV7 } from './LogoV7';
import { COMPANY_INFO } from '../data/content';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  Linkedin, 
  Instagram, 
  Facebook, 
  MessageSquare,
  CheckCircle2
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#170438] text-white pt-16 pb-12 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 5-Column Grid (matching the exact layout from reference image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Socials (span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <LogoV7 size="md" />
            <p className="text-xs text-white/70 leading-relaxed pr-2">
              Agência de Comunicação Visual de Ponta a Ponta. Da gestão estratégica de redes sociais à produção editorial e impressão de alta fidelidade em Luanda, Angola.
            </p>

            {/* Circular Social Buttons (matching reference image) */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={`https://wa.me/${COMPANY_INFO.phones[0].whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#c3f500] hover:text-[#22074f] text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#c3f500] hover:text-[#22074f] text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#c3f500] hover:text-[#22074f] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#c3f500] hover:text-[#22074f] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Contato (span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#c3f500] font-bold">
              Contato
            </div>
            <div className="space-y-3 text-xs text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c3f500] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {COMPANY_INFO.address}<br />
                  <span className="text-white/50">{COMPANY_INFO.addressDetail}</span>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c3f500] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.emails[0]}`} className="hover:text-[#c3f500] transition-colors font-mono">
                  {COMPANY_INFO.emails[0]}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c3f500] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phones[0].raw}`} className="hover:text-[#c3f500] transition-colors font-mono">
                  {COMPANY_INFO.phones[0].display}
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Sobre a Vasrouse (span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#c3f500] font-bold">
              Sobre a Vasrouse
            </div>
            <ul className="space-y-2 text-xs text-white/70">
              <li><a href="#sobre" className="hover:text-white transition-colors">Nossa história</a></li>
              <li><a href="#solucoes" className="hover:text-white transition-colors">Pilares técnicos</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfólio & Cases</a></li>
              <li><a href="#contacto-rapido" className="hover:text-white transition-colors">Carreiras</a></li>
            </ul>
          </div>

          {/* Col 4: Soluções (span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#c3f500] font-bold">
              Soluções
            </div>
            <ul className="space-y-2 text-xs text-white/70">
              <li><a href="#solucoes" className="hover:text-white transition-colors">Redes Sociais</a></li>
              <li><a href="#solucoes" className="hover:text-white transition-colors">Revistas & Editorial</a></li>
              <li><a href="#solucoes" className="hover:text-white transition-colors">Produção Gráfica</a></li>
              <li><a href="#solucoes" className="hover:text-white transition-colors">Design para Impressão</a></li>
            </ul>
          </div>

          {/* Col 5: Newsletter / Pedido Rápido (span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#c3f500] font-bold">
              Newsletter
            </div>
            
            {subscribed ? (
              <div className="text-xs text-[#c3f500] flex items-center gap-1.5 py-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Inscrito com sucesso!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="exemplo@email.com"
                  required
                  className="w-full px-3 py-2.5 pr-10 text-xs bg-white/[0.06] border border-white/15 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#c3f500]"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 p-1.5 rounded-md bg-[#c3f500] text-[#22074f] hover:bg-[#b5e600] transition-colors cursor-pointer"
                  aria-label="Enviar inscrição"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="text-[11px] text-white/40 leading-snug">
              Receba estudos de caso e novidades de produção editorial.
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Domain */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © 2026 Vasrouse Serviços, Lda. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4 text-xs font-mono">
            <span>Luanda · Angola</span>
            <span>·</span>
            <span className="text-[#c3f500] font-semibold">{COMPANY_INFO.domain}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
