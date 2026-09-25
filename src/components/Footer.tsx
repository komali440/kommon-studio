import React from 'react';
import { MessageSquare, Mail, ArrowUp } from 'lucide-react';
import { companyData } from '../data/companyData';
import { InstagramIcon } from './InstagramIcon';
import { scrollToSection } from '../utils/scrollUtils';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-darknavy text-brand-cream border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/kommon-logo.png"
                alt="Kommon Studio"
                className="w-[115px] sm:w-[135px] h-auto object-contain"
              />
            </div>

            <p className="text-sm text-brand-cream/70 max-w-sm leading-relaxed mb-6 font-normal">
              {companyData.tagline}. We help businesses attract customers, promote their products and grow their brand through creative content and digital promotion.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={companyData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              <a
                href={companyData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-green-600 hover:border-green-600 transition-all"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${companyData.email}`}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-brand-orange" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-display text-sm font-black uppercase tracking-widest text-brand-orange mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs font-mono font-semibold uppercase tracking-wider text-brand-cream/80">
              <li><button type="button" onClick={() => scrollToSection('home')} className="hover:text-brand-orange transition-colors text-left">HOME</button></li>
              <li><button type="button" onClick={() => scrollToSection('work')} className="hover:text-brand-orange transition-colors text-left">OUR WORK</button></li>
              <li><button type="button" onClick={() => scrollToSection('services')} className="hover:text-brand-orange transition-colors text-left">SERVICES</button></li>
              <li><button type="button" onClick={() => scrollToSection('industries')} className="hover:text-brand-orange transition-colors text-left">INDUSTRIES</button></li>
              <li><button type="button" onClick={() => scrollToSection('contact')} className="hover:text-brand-orange transition-colors text-left">CONTACT</button></li>
            </ul>
          </div>

          {/* Core Services Quick List */}
          <div className="md:col-span-4">
            <h4 className="font-display text-sm font-black uppercase tracking-widest text-brand-orange mb-6">
              Media Capabilities
            </h4>
            <ul className="space-y-3 text-xs font-mono text-brand-cream/70">
              <li>01 — CREATIVE DESIGN</li>
              <li>02 — VIDEO EDITING</li>
              <li>03 — PROMOTIONAL VIDEOS</li>
              <li>04 — SOCIAL MEDIA CONTENT</li>
              <li>05 — DIGITAL PROMOTION</li>
              <li>06 — BRAND CONTENT</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-brand-cream/60">
          <p>© 2026 Kommon Studio. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span>INSTAGRAM: <strong className="text-brand-orange lowercase font-mono font-normal tracking-normal">{companyData.instagramHandle}</strong></span>
            
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 text-brand-orange hover:bg-brand-orange hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
