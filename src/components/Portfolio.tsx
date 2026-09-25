import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioItems } from '../data/portfolioData';
import type { PortfolioItem } from '../types';
import { scrollToSection } from '../utils/scrollUtils';
import { FlowingOrangeLines } from './FlowingOrangeLines';

interface PortfolioProps {
  onSelectProject: (item: PortfolioItem) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  // Display a maximum of 3 video items
  const videoWorkItems = portfolioItems
    .filter((item) => item.mediaType === 'video' || item.mediaType === 'reel')
    .slice(0, 3);

  return (
    <section 
      id="work" 
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-brand-cream text-brand-navy relative overflow-hidden bg-noise border-b border-brand-navy/15 scroll-mt-24 lg:scroll-mt-28 selection:bg-brand-orange selection:text-white"
    >
      {/* Background Flowing Orange Line Accent */}
      <FlowingOrangeLines variant="work" className="-top-10 left-0 w-full h-full pointer-events-none opacity-35" />

      {/* Subtle Soft Orange Gradient Glow in Background Corner */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
        
        {/* Main Section Heading - Premium Editorial Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-12 max-w-4xl"
        >
          <h2 className="font-display heading-section uppercase mb-3">
            <span className="text-brand-navy">OUR </span>
            <span className="text-brand-orange">WORK.</span>
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-brand-navy/80 font-sans font-normal leading-relaxed">
            Some of the ways we turn ideas, products and businesses into content people want to notice.
          </p>
        </motion.div>

        {/* 3 Prominent Landscape Portfolio Video Cards - Premium Agency Gallery Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 items-stretch w-full mx-auto">
          {videoWorkItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              onClick={() => onSelectProject(item)}
              className="group relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer border border-brand-navy/15 bg-brand-navy shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-brand-orange/60 flex flex-col justify-end"
            >
              {/* Background Video / Image Element - Filling 100% width and height with object-fit cover */}
              {item.videoUrl ? (
                <video
                  src={item.videoUrl}
                  poster={item.thumbnail}
                  muted
                  loop
                  playsInline
                  autoPlay
                  className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-95"
                />
              ) : (
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center block group-hover:scale-105 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-95"
                />
              )}

              {/* Dark Gradient Overlay for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darknavy via-brand-navy/40 to-black/30 pointer-events-none" />

              {/* Hover Border Accent */}
              <div className="absolute inset-0 border-2 border-brand-orange/0 group-hover:border-brand-orange/60 rounded-2xl sm:rounded-3xl transition-all duration-300 pointer-events-none z-20" />

              {/* Top Badges */}
              <div className="absolute top-3.5 left-3.5 right-3.5 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between z-20 pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-brand-orange text-white text-[10px] sm:text-xs font-mono font-black uppercase tracking-widest shadow-md">
                  {item.projectNumber}
                </span>

                {item.duration && (
                  <span className="px-3 py-1 rounded-full bg-black/75 text-brand-cream text-[10px] sm:text-xs font-mono font-bold border border-white/15 backdrop-blur-md">
                    {item.duration}
                  </span>
                )}
              </div>

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 m-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-orange-glow group-hover:scale-110 transition-transform duration-300 z-20 pointer-events-none">
                <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white translate-x-0.5" />
              </div>

              {/* Bottom Overlay Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 z-20 flex flex-col justify-end text-white pointer-events-none">
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono font-bold text-brand-orange uppercase tracking-widest mb-1">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>{item.category}</span>
                </div>

                <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-brand-orange transition-colors mb-1 truncate">
                  {item.title}
                </h3>

                <div className="pt-2.5 sm:pt-3 border-t border-white/15 flex items-center justify-between mt-1.5 text-xs font-mono">
                  <span className="text-brand-cream/80 font-medium truncate max-w-[65%]">
                    {item.deliverable}
                  </span>

                  <span className="inline-flex items-center gap-1 text-brand-orange font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    <span>VIEW WORK</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Footer Callout */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-brand-navy text-white font-mono font-bold text-xs uppercase tracking-widest hover:bg-brand-orange hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl group cursor-pointer"
          >
            <span>HAVE A PROJECT IN MIND? LET'S TALK</span>
            <ArrowUpRight className="w-4 h-4 text-brand-orange group-hover:text-white transition-colors group-hover:translate-x-1 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

