import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowUpRight, Sparkles, Volume2, VolumeX, ArrowDown } from 'lucide-react';
import { companyData } from '../data/companyData';
import { scrollToSection } from '../utils/scrollUtils';

interface HeroProps {
  onOpenShowreel: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenShowreel, onOpenContact }) => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] lg:min-h-screen pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 flex flex-col justify-center overflow-hidden bg-[#0C2230] text-white bg-noise scroll-mt-28 lg:scroll-mt-32"
    >
      {/* 1. Oversized Watermark Typography (Exact match to reference image background) */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.07] font-display text-[22vw] font-black text-black leading-none whitespace-nowrap z-0">
        KOMMON
      </div>

      {/* 2. Top-Left Luminous Orange 3D Sphere / Orb (As seen in reference screenshot) */}
      <div className="absolute -top-12 -left-16 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-[#FF7A33] via-[#FF5500] to-transparent shadow-[0_0_90px_rgba(255,85,0,0.55)] opacity-90 pointer-events-none z-0" />

      {/* 3. Bottom-Right Glowing Atmospheric Field */}
      <div className="absolute -bottom-24 -right-24 w-[550px] h-[550px] sm:w-[700px] sm:h-[700px] rounded-full bg-gradient-to-tl from-[#FF5500]/30 via-[#FF6B22]/15 to-transparent blur-3xl pointer-events-none z-0" />

      {/* 4. Elegant Thin Orange Arc Ring around Showreel Area (As seen in reference screenshot) */}
      <svg 
        className="absolute right-0 top-10 w-full lg:w-1/2 h-full pointer-events-none z-0 opacity-80"
        viewBox="0 0 600 600"
        fill="none"
      >
        <path 
          d="M 150,80 A 260,260 0 0,1 550,420" 
          stroke="#FF5500" 
          strokeWidth="1.5" 
          strokeDasharray="1 0"
          className="opacity-70"
        />
        <path 
          d="M 80,180 A 320,320 0 0,1 580,520" 
          stroke="#FF5500" 
          strokeWidth="1" 
          className="opacity-30"
        />
      </svg>

      {/* 5. Subtle Dot Grid Matrix (Top-Right & Bottom-Left) */}
      <div className="absolute top-16 right-12 w-56 h-56 bg-[radial-gradient(#FF6B22_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-35 pointer-events-none z-0" />
      <div className="absolute bottom-12 left-10 w-56 h-56 bg-[radial-gradient(#FF6B22_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-20 pointer-events-none z-0" />

      {/* 6. Floating Accent Light Dots (Matching reference screenshot placement) */}
      <div className="absolute top-1/2 left-10 w-3 h-3 rounded-full bg-brand-orange shadow-[0_0_15px_#FF5500] pointer-events-none z-0" />
      <div className="absolute bottom-28 left-1/3 w-3.5 h-3.5 rounded-full bg-brand-orange shadow-[0_0_18px_#FF5500] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-12 w-2.5 h-2.5 rounded-full bg-brand-orange shadow-[0_0_12px_#FF5500] pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 w-full z-10 my-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (55%): Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start max-w-full">
            
            {/* Tagline Pill */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 text-brand-cream text-[11px] font-mono font-bold uppercase tracking-widest mb-6 border border-brand-orange/40 shadow-md backdrop-blur-md"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-brand-orange shadow-[0_0_10px_#FF5500] animate-pulse" />
              <span>CREATIVE MEDIA & DIGITAL PROMOTION STUDIO</span>
            </motion.div>

            {/* Main Headline - Oversized Cinematic Editorial Typography */}
            <h1 className="font-display heading-hero text-white uppercase mb-6 max-w-full break-words">
              <motion.span
                initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
                className="block"
              >
                WE CREATE.
              </motion.span>
              
              <motion.span
                initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.65, delay: 0.25, ease: 'easeOut' }}
                className="block text-brand-orange drop-shadow-[0_4px_20px_rgba(255,85,0,0.3)]"
              >
                YOU GET NOTICED.
              </motion.span>
            </h1>

            {/* Supporting Text */}
            <motion.p 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-base sm:text-lg text-brand-cream/85 font-normal leading-relaxed max-w-xl mb-8"
            >
              We help businesses attract customers, promote their products and grow their brand through creative content and digital promotion.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <button
                type="button"
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-brand-orange text-white font-mono font-bold text-xs uppercase tracking-wider shadow-[0_10px_30px_rgba(255,85,0,0.4)] hover:bg-brand-orange-hover hover:scale-[1.03] active:scale-95 transition-all duration-300"
              >
                <Sparkles className="w-4 h-4" />
                <span>START A PROJECT</span>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('work')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-brand-navy border border-white/20 transition-all duration-300 group"
              >
                <span>VIEW OUR WORK</span>
                <ArrowUpRight className="w-4 h-4 text-brand-orange group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </motion.div>

            {/* Meta Handle Bar */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6 text-[11px] font-mono font-bold text-brand-cream/60 uppercase tracking-widest"
            >
              <span>INSTAGRAM: <strong className="text-brand-orange lowercase font-mono font-normal tracking-normal">{companyData.instagramHandle}</strong></span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">CREATIVE MEDIA</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">DIGITAL PROMOTION</span>
            </motion.div>

          </div>

          {/* Right Column (45%): Controlled Video Showreel Canvas */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 relative w-full mt-4 lg:mt-0"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none w-full">
              
              <div
                onClick={onOpenShowreel}
                className="relative rounded-3xl overflow-hidden bg-brand-darknavy shadow-[0_30px_70px_rgba(0,0,0,0.6)] border border-white/15 group cursor-pointer w-full hover:scale-[1.02] transition-transform duration-500 ease-out"
              >
                <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11] overflow-hidden bg-brand-darknavy w-full">
                  <video
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                    poster="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop"
                  >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-young-woman-modelling-streetwear-outfits-42861-large.mp4" type="video/mp4" />
                  </video>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darknavy via-brand-navy/30 to-transparent" />

                  {/* Top Bar */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-brand-orange text-white text-[10px] font-mono font-extrabold uppercase tracking-widest shadow-md">
                      SHOWREEL 2026
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMuted(!isMuted);
                      }}
                      className="p-2 rounded-full bg-black/60 text-white backdrop-blur-md hover:bg-brand-orange transition-colors border border-white/10"
                      title={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Central Play Trigger */}
                  <div className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-[0_0_30px_#FF5500] group-hover:scale-110 transition-all duration-300 z-10">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white translate-x-0.5" />
                  </div>

                  {/* Bottom Video Details */}
                  <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                    <p className="text-[10px] font-mono font-bold tracking-widest text-brand-orange uppercase mb-0.5">
                      KOMMON STUDIO MOTION
                    </p>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white leading-none">
                      CREATIVE CONTENT & PROMOTIONAL REEL
                    </h3>
                    <div className="mt-2 flex items-center justify-between text-[11px] font-mono text-white/70">
                      <span>Click to watch full reel</span>
                      <span className="text-brand-orange font-bold">01:15</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Floating Scroll Down Indicator */}
      <div className="absolute bottom-6 right-8 hidden sm:flex items-center gap-2 text-xs font-mono font-bold text-brand-cream/60 uppercase tracking-widest">
        <span>Scroll</span>
        <ArrowDown className="w-4 h-4 text-brand-orange animate-bounce" />
      </div>

    </section>
  );
};




