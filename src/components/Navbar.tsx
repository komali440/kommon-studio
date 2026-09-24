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

      const sections = ['home', 'about', 'work', 'services', 'industries', 'contact'];
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
    { name: 'ABOUT', id: 'about' },
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 sm:py-3.5 bg-brand-cream/95 backdrop-blur-md border-b border-brand-navy/12 shadow-card-subtle'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Left: Official Kommon Studio Logo Image Signature */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="flex items-center group text-left focus:outline-none relative py-1"
            aria-label="Kommon Studio Home"
          >
            <img
              src="/kommon-logo.png"
              alt="Kommon Studio"
              className="h-10 sm:h-12 lg:h-14 w-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_4px_12px_rgba(255,107,34,0.25)]"
            />
          </button>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-brand-navy/5 p-1.5 rounded-full border border-brand-navy/10 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-navy text-brand-cream shadow-sm'
                      : 'text-brand-navy/80 hover:text-brand-orange hover:bg-white/70'
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
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-brand-orange text-white text-xs font-mono font-bold uppercase tracking-wider shadow-orange-glow hover:bg-brand-orange-hover hover:scale-[1.04] hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-brand-navy/5 text-brand-navy hover:text-brand-orange hover:bg-brand-navy/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[65px] bg-brand-cream/98 backdrop-blur-xl border-b border-brand-navy/10 shadow-2xl transition-all duration-300 ease-in-out origin-top overflow-hidden ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              type="button"
              onClick={() => handleNavClick(link.id)}
              className="flex items-center justify-between py-3 px-4 rounded-xl text-sm font-mono font-bold uppercase tracking-wider text-brand-navy hover:text-brand-orange hover:bg-brand-navy/5 transition-all text-left w-full"
            >
              <span>{link.name}</span>
              <ArrowUpRight className="w-4 h-4 text-brand-orange" />
            </button>
          ))}
          <div className="pt-4 border-t border-brand-navy/10 mt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3.5 rounded-xl bg-brand-orange text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-orange-glow hover:bg-brand-orange-hover"
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

