import React from 'react';
import { Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import { companyData } from '../data/companyData';

interface CTAProps {
  onOpenContact: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenContact }) => {
  return (
    <section id="cta" className="relative py-20 sm:py-28 md:py-32 lg:py-36 bg-brand-orange text-white overflow-hidden shadow-2xl scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32">
      
      {/* Background Graphic Patterns */}
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-navy/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Pill */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-navy text-brand-cream text-xs font-bold uppercase tracking-widest mb-8 border border-white/20 shadow-lg">
          <Sparkles className="w-4 h-4 text-brand-orange animate-spin-slow" />
          <span>Let's Create Media Impact</span>
        </div>

        {/* Big Headline */}
        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.95] max-w-5xl mx-auto mb-8 drop-shadow-sm">
          READY TO MAKE YOUR BRAND
          <br />
          <span className="text-brand-navy underline underline-offset-8 decoration-brand-navy/40">
            IMPOSSIBLE TO IGNORE?
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-lg sm:text-xl text-white/95 max-w-2xl mx-auto mb-12 font-normal leading-relaxed">
          Let's create promotional videos, reels, and digital campaigns that get attention, communicate your story, and help your business grow.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-5">
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-brand-navy text-white font-bold text-sm uppercase tracking-wider shadow-2xl hover:bg-brand-darknavy hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Sparkles className="w-5 h-5 text-brand-orange" />
            <span>Start A Project</span>
            <ArrowUpRight className="w-5 h-5 text-brand-orange" />
          </button>

          <a
            href={companyData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-brand-navy font-bold text-sm uppercase tracking-wider hover:bg-brand-cream hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl"
          >
            <MessageSquare className="w-5 h-5 text-green-600" />
            <span>Chat On WhatsApp</span>
          </a>
        </div>

      </div>

    </section>
  );
};
