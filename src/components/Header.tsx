import React, { useState, useEffect } from 'react';
import { LogoV7 } from './LogoV7';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Contacto', href: '#contacto-rapido' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4 bg-[#22074f]/95 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'py-6 bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Logo (matching reference image) */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="whitespace-nowrap shrink-0 group focus:outline-none"
          >
            <LogoV7 size="md" />
          </a>

          {/* Navigation Links in Center (matching reference image) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#c3f500] transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button on Right (matching reference image pill button) */}
          <div className="hidden md:flex items-center shrink-0">
            <button
              onClick={onOpenQuote}
              className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-[#22074f] bg-[#c3f500] hover:bg-[#b2e000] active:scale-95 transition-all shadow-md shadow-[#c3f500]/20 cursor-pointer whitespace-nowrap"
            >
              Falar com um consultor
            </button>
          </div>

          {/* Mobile menu hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenQuote}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#22074f] bg-[#c3f500]"
            >
              Consultor
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#c3f500]"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#18043b] border-b border-white/10 px-5 pt-3 pb-6 space-y-3 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block py-2 text-base font-medium text-white/90 hover:text-[#c3f500]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 rounded-full text-sm font-semibold text-[#22074f] bg-[#c3f500]"
            >
              Falar com um consultor
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
