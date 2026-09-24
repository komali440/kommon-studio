import React from 'react';
import { Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import { companyData } from '../data/companyData';
import { FlowingOrangeLines } from './FlowingOrangeLines';

interface CTAProps {
  onOpenContact: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenContact }) => {
  return (
    <section id="cta" className="relative py-20 sm:py-24 md:py-28 lg:py-32 bg-brand-orange text-white overflow-hidden shadow-2xl scroll-mt-28 lg:scroll-mt-32">
      {/* Flowing Lines & Background Graphic Accents */}
      <FlowingOrangeLines variant="cta" className="-top-10 left-0 w-full h-full pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-brand-navy/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 relative z-10 text-center">
        
        {/* Top Pill */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-brand-navy text-brand-cream text-xs font-mono font-bold uppercase tracking-widest mb-6 sm:mb-8 border border-white/20 shadow-lg">
          <Sparkles className="w-4 h-4 text-brand-orange" />
          <span>START A CONVERSATION</span>
        </div>

        {/* Big Headline - Responsive Clamp */}
        <h2 className="font-display heading-section uppercase max-w-4xl mx-auto mb-6 text-white drop-shadow-sm">
          WHAT'S YOUR BUSINESS
          <br />
          <span className="text-brand-navy">
            TRYING TO SOLVE?
          </span>
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-xl text-white/95 max-w-2xl mx-auto mb-10 sm:mb-12 font-medium leading-relaxed">
          {companyData.finalCtaSub}
        </p>

        {/* Buttons: START A PROJECT & CHAT ON WHATSAPP */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-lg sm:max-w-none mx-auto">
          <button
            type="button"
            onClick={onOpenContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4.5 rounded-full bg-brand-navy text-white font-mono font-bold text-xs uppercase tracking-wider shadow-2xl hover:bg-brand-darknavy hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 text-brand-orange" />
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4 text-brand-orange" />
          </button>

          <a
            href={companyData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4.5 rounded-full bg-white text-brand-navy font-mono font-bold text-xs uppercase tracking-wider hover:bg-brand-cream hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl"
          >
            <MessageSquare className="w-4 h-4 text-green-600" />
            <span>CHAT ON WHATSAPP</span>
          </a>
        </div>

      </div>
    </section>
  );
};
