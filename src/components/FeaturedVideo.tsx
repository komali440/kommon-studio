import React from 'react';
import { Play, Film } from 'lucide-react';

interface FeaturedVideoProps {
  onOpenShowreel: () => void;
}

export const FeaturedVideo: React.FC<FeaturedVideoProps> = ({ onOpenShowreel }) => {
  return (
    <section id="showreel" className="relative py-20 sm:py-28 md:py-32 lg:py-36 bg-brand-navy text-white overflow-hidden border-y border-white/10 scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32">
      
      {/* Background Cinematic Video Thumbnail Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1600&auto=format&fit=crop"
          alt="Kommon Studio Showreel"
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Overlay */}
          <div className="lg:col-span-7">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange text-brand-orange text-xs font-bold uppercase tracking-widest mb-6">
              <Film className="w-4 h-4" />
              <span>Cinematic Showreel 2026</span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.95] mb-8 text-white">
              YOUR BUSINESS
              <br />
              HAS A <span className="text-brand-orange">STORY.</span>
              <br />
              LET'S <span className="text-stroke-orange text-white">SHOW IT.</span>
            </h2>

            <p className="text-lg text-brand-cream/80 max-w-xl mb-10 leading-relaxed font-normal">
              We translate brand identity, product features, and business value into cinematic promotional video content that engages audiences from the very first frame.
            </p>

            <button
              onClick={onOpenShowreel}
              className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-brand-orange text-white font-bold text-sm uppercase tracking-wider shadow-orange-glow hover:bg-brand-orange-hover hover:scale-105 transition-all duration-300 group"
            >
              <div className="w-8 h-8 rounded-full bg-white text-brand-orange flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 fill-brand-orange translate-x-0.5" />
              </div>
              <span>Watch Full Showreel</span>
            </button>

          </div>

          {/* Right Video Player Frame */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 bg-brand-darknavy shadow-2xl group">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop"
                  alt="Showreel preview frame"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-brand-navy/40 group-hover:bg-brand-navy/20 transition-colors" />

                {/* Central Animated Pulse Play Button */}
                <button
                  onClick={onOpenShowreel}
                  className="absolute inset-0 m-auto w-24 h-24 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-orange-glow animate-pulse group-hover:scale-110 transition-all duration-300"
                  aria-label="Play showreel"
                >
                  <Play className="w-10 h-10 fill-white translate-x-1" />
                </button>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/80 font-mono">
                  <span>Kommon Studio Showreel</span>
                  <span className="text-brand-orange font-bold">HD 4K</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
