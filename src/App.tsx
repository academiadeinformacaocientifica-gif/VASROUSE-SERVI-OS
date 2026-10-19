import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturesGrid } from './components/FeaturesGrid';
import { SolutionsCards } from './components/SolutionsCards';
import { TeamSection } from './components/TeamSection';
import { Portfolio } from './components/Portfolio';
import { QuickContactBanner } from './components/QuickContactBanner';
import { LuandaMapSection } from './components/LuandaMapSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from './data/content';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleOpenQuote = (serviceId?: string) => {
    if (serviceId) {
      setSelectedService(serviceId);
    }
    setQuoteModalOpen(true);
  };

  const handleQuickEmailSubmit = (email?: string) => {
    if (email) {
      setUserEmail(email);
    }
    setQuoteModalOpen(true);
  };

  const handleExploreServices = () => {
    const target = document.getElementById('solucoes');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSolution = (solutionName: string, serviceId: string) => {
    setSelectedService(serviceId);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#22074f] text-white flex flex-col selection:bg-[#c3f500] selection:text-[#22074f]">
      {/* 1. Header (matching reference image top bar) */}
      <Header onOpenQuote={() => handleOpenQuote()} />

      <main className="flex-grow">
        {/* 2. Hero Section with photo background, pill CTA, and round down button */}
        <Hero onExploreServices={handleExploreServices} />

        {/* 3. Section 2: Light background with left title and 2x3 concentric target grid */}
        <FeaturesGrid />

        {/* 4. Section 3: "Nossas soluções" with 3 tall colored vertical cards */}
        <SolutionsCards onSelectSolution={handleSelectSolution} />

        {/* 5. Section 4: 3 Circular Portrait Cards (Team / Especialistas) */}
        <TeamSection />

        {/* 6. Portfólio & Casos de Estudo (High-res mockups) */}
        <Portfolio onOpenQuoteWithProject={(title) => {
          setSelectedService('revistas-editorial');
          setQuoteModalOpen(true);
        }} />

        {/* 7. Section 5: "Contato / Fale com um consultor" with wide pill input bar */}
        <QuickContactBanner onOpenDetailedQuote={handleQuickEmailSubmit} />

        {/* 8. Section 6: Full-width Luanda Map with center round green/lime pin */}
        <LuandaMapSection />
      </main>

      {/* 9. Section 7: Footer (5-column layout from reference image) */}
      <Footer />

      {/* Interactive Consultation / Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService={selectedService}
        initialEmail={userEmail}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href={`https://wa.me/${COMPANY_INFO.phones[0].whatsapp}?text=${encodeURIComponent('Olá Vasrouse Serviços, gostaria de obter informações sobre os vossos serviços em Luanda.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#c3f500] text-[#22074f] hover:bg-[#b2e000] active:scale-95 transition-all shadow-2xl shadow-black/40 flex items-center justify-center group cursor-pointer"
        aria-label="Falar com a Vasrouse no WhatsApp"
        title="Falar no WhatsApp (+244 939 917 381)"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-semibold uppercase tracking-wider pl-0 group-hover:pl-2">
          WhatsApp
        </span>
      </a>
    </div>
  );
}
