import React from 'react';
import { Zap, Target, TrendingUp } from 'lucide-react';
import { companyData } from '../data/companyData';

export const BrandStatement: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 md:py-32 lg:py-36 bg-brand-cream border-b border-brand-navy/10 relative overflow-hidden scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32">
      
      {/* Background Subtle Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-5 font-display text-[22vw] font-black text-brand-navy leading-none">
        KOMMON
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-12 h-0.5 bg-brand-orange" />
          <span className="text-xs font-black uppercase tracking-[0.25em] text-brand-orange">
            01 — BRAND PHILOSOPHY
          </span>
        </div>

        {/* Big Editorial Headline */}
        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-brand-navy uppercase leading-[1.02] tracking-tight max-w-5xl mb-10">
          WE DON'T JUST CREATE CONTENT.
          <br />
          <span className="bg-gradient-to-r from-brand-orange to-amber-500 bg-clip-text text-transparent">
            WE CREATE ATTENTION.
          </span>
        </h2>

        {/* Supporting Editorial Copy & Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7">
            <p className="text-xl sm:text-2xl text-brand-navy/90 font-medium leading-relaxed mb-8">
              {companyData.brandStatementSub}
            </p>

            <p className="text-base text-brand-navy/70 leading-relaxed mb-8">
              In today's fast-moving digital feed, average content is invisible content. We blend high-level artistic direction with digital performance strategy — crafting reels, promotional films, visual ads, and social media campaigns that captivate audiences and inspire action.
            </p>

            {/* Editorial Quote Badge */}
            <div className="p-6 rounded-2xl bg-brand-navy text-brand-cream border-l-4 border-brand-orange shadow-navy-glow">
              <p className="font-display text-lg font-bold italic mb-2">
                "Attention is the currency of the digital age. We build content that earns it."
              </p>
              <span className="text-xs text-brand-orange font-bold uppercase tracking-widest">
                — Kommon Studio Creative Team
              </span>
            </div>
          </div>

          {/* Right Highlights Column */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            
            <div className="p-6 rounded-2xl bg-white border border-brand-navy/10 shadow-card-subtle hover:border-brand-orange/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-extrabold text-brand-navy mb-2">
                Visual Energy & Precision
              </h3>
              <p className="text-xs text-brand-navy/70 leading-relaxed">
                Color-graded shots, rhythmic editing cuts, and custom typography designed specifically to grab eyes on mobile feeds.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-brand-navy/10 shadow-card-subtle hover:border-brand-orange/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-orange flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-extrabold text-brand-navy mb-2">
                Targeted Digital Growth
              </h3>
              <p className="text-xs text-brand-navy/70 leading-relaxed">
                We make sure your promotional videos and social media content align directly with your customer acquisition targets.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-brand-navy/10 shadow-card-subtle hover:border-brand-orange/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-orange text-white flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-extrabold text-brand-navy mb-2">
                End-To-End Media Execution
              </h3>
              <p className="text-xs text-brand-navy/70 leading-relaxed">
                From initial scripting to master cuts and multi-platform publishing — we handle the complete creative workflow.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
