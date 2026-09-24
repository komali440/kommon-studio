import React from 'react';
import { companyData } from '../data/companyData';

export const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-20 sm:py-24 md:py-28 lg:py-32 bg-brand-cream text-brand-navy relative overflow-hidden bg-noise border-b border-brand-navy/15 scroll-mt-28 lg:scroll-mt-32"
    >
      {/* Background Accent */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-12 h-0.5 bg-brand-orange" />
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-brand-orange">
            02 — ABOUT STUDIO
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (7 cols): Headline & Highlights */}
          <div className="lg:col-span-7">
            <h2 className="font-display heading-section text-brand-navy uppercase mb-8">
              WE DON'T JUST MAKE CONTENT.
              <br />
              <span className="text-brand-orange">
                WE MAKE YOUR BUSINESS EASIER TO NOTICE.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-brand-navy/85 leading-relaxed mb-8 font-normal max-w-2xl">
              Kommon Studio is a creative media and digital promotion studio helping businesses communicate their value through design, video, social media content and digital promotion.
            </p>

            {/* Core Focus Highlights */}
            <div className="pt-8 border-t border-brand-navy/15">
              <span className="text-xs font-mono font-bold text-brand-navy/60 uppercase tracking-widest block mb-4">
                CORE FOCUS AREAS:
              </span>

              <div className="flex flex-wrap items-center gap-3">
                {companyData.aboutHighlights.map((tag) => (
                  <span
                    key={tag}
                    className="px-5 py-2.5 rounded-full bg-white border border-brand-navy/15 text-brand-orange font-mono font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-all duration-300 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Editorial Visual Box */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-brand-navy/20 shadow-2xl bg-brand-navy p-2">
              <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/4] rounded-2xl overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=700&auto=format&fit=crop"
                  alt="Kommon Studio Environment"
                  className="w-full h-full object-cover opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darknavy via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] font-mono font-bold text-brand-orange uppercase tracking-widest block mb-1">
                    STUDIO PHILOSOPHY
                  </span>
                  <p className="font-display font-bold text-lg sm:text-xl text-white uppercase leading-none">
                    FILMMAKER QUALITY • DIGITAL PROMOTION
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

