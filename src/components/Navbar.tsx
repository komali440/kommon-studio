import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'work', 'services', 'industries', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 250 && rect.bottom >= 250;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', id: 'home' },
    { name: 'WORK', id: 'work' },
    { name: 'SERVICES', id: 'services' },
    { name: 'INDUSTRIES', id: 'industries' },
    { name: 'CONTACT', id: 'contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    scrollToSection(sectionId);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 px-3 sm:px-6 lg:px-8 transition-all duration-300 pointer-events-none">
      <div className="max-w-[1280px] mx-auto pointer-events-auto">
        <div className={`flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl sm:rounded-full border backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? 'bg-[#0C2230]/95 border-brand-orange/30 shadow-[0_12px_35px_rgba(0,0,0,0.4)] text-white'
            : 'bg-[#0C2230]/90 border-white/20 shadow-xl text-white'
        }`}>
          
          {/* Left: Official Kommon Studio Logo Image (Increased Brand Size) */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="flex items-center group text-left focus:outline-none relative py-0.5"
            aria-label="Kommon Studio Home"
          >
            <img
              src="/kommon-logo.png"
              alt="Kommon Studio"
              className="w-[105px] sm:w-[120px] lg:w-[135px] h-auto object-contain transition-all duration-300 group-hover:scale-105"
            />
          </button>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 sm:gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-orange text-white shadow-md'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA: LET'S TALK */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-brand-orange text-white text-xs font-mono font-bold uppercase tracking-wider shadow-orange-glow hover:bg-brand-orange-hover hover:scale-[1.04] active:scale-95 transition-all duration-300"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button - Refined with Orange Accent */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 sm:p-2.5 rounded-xl text-white border border-brand-orange/40 bg-white/5 hover:bg-brand-orange/20 transition-all flex items-center justify-center shrink-0 shadow-sm"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-brand-orange" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden pointer-events-auto max-w-[1280px] mx-auto mt-2 bg-[#0C2230]/98 backdrop-blur-xl border border-white/15 rounded-2xl shadow-2xl transition-all duration-300 ease-in-out origin-top overflow-hidden ${
          mobileMenuOpen ? 'max-h-[400px] opacity-100 p-5' : 'max-h-0 opacity-0 p-0 border-none'
        }`}
      >
        <div className="flex flex-col gap-1.5">
          {navLinks.map((link) => (
            <button
              key={link.name}
              type="button"
              onClick={() => handleNavClick(link.id)}
              className="flex items-center justify-between py-2.5 px-4 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-brand-orange hover:bg-white/10 transition-all text-left w-full"
            >
              <span>{link.name}</span>
              <ArrowUpRight className="w-4 h-4 text-brand-orange" />
            </button>
          ))}
          <div className="pt-3 border-t border-white/15 mt-1">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 rounded-xl bg-brand-orange text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-orange-glow hover:bg-brand-orange-hover"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

