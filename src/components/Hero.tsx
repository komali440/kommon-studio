import React, { useState } from 'react';
import { Play, ArrowDownRight, Sparkles, Volume2, VolumeX, Eye } from 'lucide-react';
import { companyData } from '../data/companyData';
import { scrollToSection } from '../utils/scrollUtils';

interface HeroProps {
  onOpenShowreel: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenShowreel, onOpenContact }) => {
  const [isMuted, setIsMuted] = useState(true);

  const scrollToWork = () => {
    scrollToSection('work');
  };

  return (
    <section id="home" className="relative min-h-[88vh] lg:min-h-screen pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24 flex flex-col justify-center overflow-hidden bg-noise bg-grid-pattern scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32">
      
      {/* Background Graphic Accent Moments */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 md:w-96 md:h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 md:w-96 md:h-96 bg-brand-navy/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start max-w-full">
            
            {/* Top Brand Agency Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy text-brand-cream text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4 border border-brand-orange/30 shadow-card-subtle">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
              <span>Creative Media & Digital Promotion Studio</span>
            </div>

            {/* Main Headline - Perfectly proportioned to fit viewport cleanly */}
            <h1 className="font-display text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-brand-navy uppercase tracking-tight leading-[0.96] mb-4 max-w-full break-words">
              WE <span className="text-brand-orange underline underline-offset-4 sm:underline-offset-6 decoration-brand-orange/40">CREATE.</span>
              <br />
              YOU GET <span className="text-stroke-orange text-brand-navy font-black">NOTICED.</span>
            </h1>

            {/* Subtitle / Supporting Statement */}
            <p className="text-sm sm:text-base md:text-lg text-brand-navy/85 font-normal leading-relaxed max-w-xl mb-5">
              Creative content, promotional videos and digital experiences that help businesses stand out, capture attention, and drive real growth.
            </p>

            {/* CTA Buttons - Guaranteed First Viewport Visibility */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button
                onClick={scrollToWork}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-brand-navy text-brand-cream font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-brand-orange hover:text-white shadow-navy-glow transition-all duration-300 group"
              >
                <span>View Our Work</span>
                <ArrowDownRight className="w-4 h-4 text-brand-orange group-hover:text-white transition-colors" />
              </button>

              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-brand-orange text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-orange-glow hover:bg-brand-orange-hover hover:scale-[1.02] active:scale-95 transition-all duration-200"
              >
                <Sparkles className="w-4 h-4" />
                <span>Start A Project</span>
              </button>
            </div>

            {/* Quick Handle Tagline */}
            <div className="mt-6 pt-5 border-t border-brand-navy/15 flex flex-wrap items-center gap-4 sm:gap-6 text-[11px] sm:text-xs font-bold text-brand-navy/70 uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-orange" />
                <span>Instagram: <strong className="text-brand-navy">{companyData.instagramHandle}</strong></span>
              </div>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Short-Form Reels & Ads</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Brand Content</span>
            </div>

          </div>

          {/* Right Column: Balanced & Visually Important Showreel Card */}
          <div className="lg:col-span-5 relative mt-2 lg:mt-0">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Outer Decorative Frame */}
              <div className="absolute -inset-3 rounded-3xl border-2 border-dashed border-brand-orange/30 rotate-1 pointer-events-none" />

              {/* Main Showreel Canvas Card */}
              <div
                onClick={onOpenShowreel}
                className="relative rounded-2xl overflow-hidden bg-brand-navy shadow-2xl border border-brand-navy/20 group cursor-pointer"
              >
                
                {/* Embedded Video Frame */}
                <div className="relative aspect-[4/4.2] sm:aspect-[4/4.4] overflow-hidden bg-brand-darknavy">
                  <video
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                    poster="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop"
                  >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-young-woman-modelling-streetwear-outfits-42861-large.mp4" type="video/mp4" />
                  </video>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent" />

                  {/* Top Badge Overlay */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded-full bg-brand-orange text-white text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                      2026 Showreel Preview
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMuted(!isMuted);
                      }}
                      className="p-1.5 sm:p-2 rounded-full bg-black/50 text-white backdrop-blur-md hover:bg-brand-orange transition-colors z-20 cursor-pointer"
                      title={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Play Central Button Trigger */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenShowreel();
                    }}
                    className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-orange-glow group-hover:scale-110 active:scale-95 transition-all duration-300 z-10 cursor-pointer"
                    aria-label="Play full reel"
                  >
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-white translate-x-0.5" />
                  </button>

                  {/* Bottom Video Card Details */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                    <p className="text-[10px] sm:text-xs font-bold tracking-widest text-brand-orange uppercase">
                      Kommon Studio Motion
                    </p>
                    <h3 className="font-display font-bold text-base sm:text-lg text-white leading-snug">
                      Creative Content & Promotional Showreel
                    </h3>
                    <div className="mt-1.5 flex items-center justify-between text-[11px] text-white/70">
                      <span>Click to watch full reel</span>
                      <span className="font-mono text-brand-orange font-bold">01:15</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Badge Accent */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-brand-cream border-2 border-brand-navy p-2.5 sm:p-3 rounded-xl shadow-xl items-center gap-2.5 z-20">
                <div className="w-8 h-8 rounded-lg bg-brand-orange text-white flex items-center justify-center font-black">
                  <Eye className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-display font-extrabold text-xs text-brand-navy">High-Retention</div>
                  <div className="text-[10px] font-semibold text-brand-navy/70">Engineered to grab attention</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
