import React from 'react';
import { Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import { companyData } from '../data/companyData';

interface CTAProps {
  onOpenContact: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenContact }) => {
  return (
    <section id="cta" className="relative py-16 sm:py-20 lg:py-24 bg-brand-orange text-white overflow-hidden shadow-2xl scroll-mt-28 lg:scroll-mt-32">
      {/* Ambient Radial Glow & Background Noise */}
      <div className="absolute inset-0 bg-noise opacity-25 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-white/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-brand-navy/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 relative z-10">
        
        {/* Decorative Inner Card Container with Visible White Border */}
        <div className="border border-white/30 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden backdrop-blur-sm bg-white/5 shadow-2xl text-center">
          
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-brand-navy text-white text-xs font-mono font-bold uppercase tracking-widest mb-6 sm:mb-8 border border-white/30 shadow-xl">
            <Sparkles className="w-4 h-4 text-brand-orange" />
            <span>START A CONVERSATION</span>
          </div>

          {/* Big Headline */}
          <h2 className="font-display heading-section uppercase max-w-4xl mx-auto mb-6 text-white drop-shadow-md">
            WHAT'S YOUR BUSINESS
            <br />
            <span className="text-brand-navy">
              TRYING TO SOLVE?
            </span>
          </h2>

          {/* Supporting Text — High Contrast Bright White */}
          <p className="text-base sm:text-xl text-white font-medium leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-12 drop-shadow-sm">
            {companyData.finalCtaSub}
          </p>

          {/* 2 Clear High-Visibility CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 max-w-md sm:max-w-none mx-auto">
            
            {/* Primary Button: START A PROJECT */}
            <button
              type="button"
              onClick={onOpenContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-brand-navy text-white font-mono font-bold text-xs sm:text-sm uppercase tracking-wider shadow-2xl border border-white/20 hover:bg-brand-darknavy hover:scale-[1.03] active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-brand-orange" />
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4 text-brand-orange" />
            </button>

            {/* Secondary Button: CHAT ON WHATSAPP */}
            <a
              href={companyData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-white text-brand-navy font-mono font-bold text-xs sm:text-sm uppercase tracking-wider shadow-2xl border border-white/40 hover:bg-brand-cream hover:scale-[1.03] active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-green-600" />
              <span>CHAT ON WHATSAPP</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

