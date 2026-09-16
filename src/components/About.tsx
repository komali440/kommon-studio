import React from 'react';
import { Sparkles, Eye, Target } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="profile" className="py-20 sm:py-28 md:py-32 lg:py-36 bg-brand-cream border-b border-brand-navy/10 relative overflow-hidden bg-grid-pattern scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-12 h-0.5 bg-brand-orange" />
          <span className="text-xs font-black uppercase tracking-[0.25em] text-brand-orange">
            05 — STUDIO PROFILE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story Content */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl sm:text-6xl font-black text-brand-navy uppercase tracking-tight leading-[1.02] mb-8">
              ABOUT <span className="text-brand-orange">KOMMON STUDIO.</span>
            </h2>

            <p className="text-2xl text-brand-navy font-bold leading-snug mb-6">
              Kommon Studio is a creative media and digital promotion studio focused on helping businesses communicate better, look better and reach more people online.
            </p>

            <p className="text-base text-brand-navy/80 leading-relaxed mb-6 font-normal">
              We believe that every business has a unique story, product value, and brand character that deserves high-quality visual representation. Instead of using generic templates or uninspired content, we design visual assets and produce video content engineered for digital impact.
            </p>

            <p className="text-base text-brand-navy/80 leading-relaxed mb-8 font-normal">
              Our multidisciplinary team combines creative editing, brand aesthetics, promotional strategy, and social media production to give your business an undeniable edge on modern digital platforms.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-brand-navy/10 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-brand-orange/10 text-brand-orange mt-1">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-sm text-brand-navy">Visual Polish</h4>
                  <p className="text-xs text-brand-navy/70">Elevated styling that builds immediate brand authority.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-brand-navy/10 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-brand-navy text-brand-orange mt-1">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-sm text-brand-navy">Growth Driven</h4>
                  <p className="text-xs text-brand-navy/70">Content designed specifically to drive audience action.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Imagery Grid */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-brand-navy/10 aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=600&auto=format&fit=crop"
                    alt="Kommon Studio editing suite"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 rounded-2xl bg-brand-navy text-white text-center">
                  <span className="font-display font-black text-2xl text-brand-orange block mb-1">
                    STUDIO
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-cream/70">
                    Media & Creative Promotion
                  </span>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="p-5 rounded-2xl bg-brand-orange text-white text-center">
                  <Sparkles className="w-6 h-6 mx-auto mb-2" />
                  <span className="font-display font-extrabold text-sm uppercase block">
                    Digital-Native Content
                  </span>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-brand-navy/10 aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=600&auto=format&fit=crop"
                    alt="Creative shoot location"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
