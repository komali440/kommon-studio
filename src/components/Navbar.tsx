import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
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

      const sections = ['home', 'about', 'services', 'work', 'industries', 'contact'];
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
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Work', id: 'work' },
    { name: 'Industries', id: 'industries' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    scrollToSection(sectionId);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-brand-cream/90 backdrop-blur-md border-b border-brand-navy/10 shadow-card-subtle'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            {/* Custom Brand Logo Mark */}
            <div className="w-10 h-10 rounded-xl bg-brand-navy flex items-center justify-center relative overflow-hidden group-hover:bg-brand-darknavy transition-colors duration-300">
              <span className="font-display font-extrabold text-xl text-brand-orange leading-none group-hover:scale-110 transition-transform duration-300">
                K
              </span>
              <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-brand-orange animate-pulse-subtle" />
            </div>
            
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-tight text-brand-navy group-hover:text-brand-orange transition-colors duration-200">
                KOMMON<span className="text-brand-orange">.</span>
              </span>
              <span className="text-[9px] font-bold tracking-[0.25em] text-brand-navy/60 uppercase">
                STUDIO
              </span>
            </div>
          </button>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-1 bg-brand-navy/5 p-1.5 rounded-full border border-brand-navy/10 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-navy text-brand-cream shadow-sm'
                      : 'text-brand-navy/80 hover:text-brand-orange hover:bg-white/50'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-brand-orange text-white text-xs font-bold uppercase tracking-wider shadow-orange-glow hover:bg-brand-orange-hover hover:scale-[1.02] active:scale-95 transition-all duration-200"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-brand-navy/5 text-brand-navy hover:text-brand-orange hover:bg-brand-navy/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-[65px] bg-brand-cream/98 backdrop-blur-xl border-b border-brand-navy/10 shadow-2xl transition-all duration-300 ease-in-out origin-top overflow-hidden ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.name}
              type="button"
              onClick={() => handleNavClick(link.id)}
              className="flex items-center justify-between py-3 px-4 rounded-xl text-base font-display font-bold uppercase tracking-wider text-brand-navy hover:text-brand-orange hover:bg-brand-navy/5 transition-all text-left w-full"
            >
              <span>{link.name}</span>
              <ArrowUpRight className="w-4 h-4 text-brand-orange opacity-0 group-hover:opacity-100" />
            </button>
          ))}
          <div className="pt-4 border-t border-brand-navy/10 mt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3.5 rounded-xl bg-brand-orange text-white text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-orange-glow hover:bg-brand-orange-hover"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start A Project</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
