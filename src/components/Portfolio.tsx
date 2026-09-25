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
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-brand-navy text-white relative overflow-hidden bg-dark-grid border-b border-white/10 scroll-mt-24 lg:scroll-mt-28 selection:bg-brand-orange selection:text-white"
    >
      {/* Background Flowing Orange Line Accent */}
      <FlowingOrangeLines variant="work" className="-top-10 left-0 w-full h-full pointer-events-none opacity-40" />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 relative z-10">
        
        {/* Main Section Heading - Global Typography System */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-12 max-w-4xl"
        >
          <h2 className="font-display heading-section uppercase text-white mb-3">
            <span>OUR </span>
            <span className="text-brand-orange">WORK.</span>
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-brand-cream/85 font-sans font-normal leading-relaxed">
            Some of the ways we turn ideas, products and businesses into content people want to notice.
          </p>
        </motion.div>

        {/* 3 Video Cards Layout - Clean 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {videoWorkItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              onClick={() => onSelectProject(item)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer border border-white/10 bg-brand-darknavy shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Top Media Thumbnail Canvas (Consistent 16:9 Aspect Ratio) */}
              <div className="relative overflow-hidden w-full aspect-[16/9] bg-brand-darknavy">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darknavy via-brand-navy/20 to-transparent" />
                
                {/* Hover Border Accent */}
                <div className="absolute inset-0 border-2 border-brand-orange/0 group-hover:border-brand-orange/50 rounded-3xl transition-all duration-300 pointer-events-none z-20" />

                {/* Top Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-brand-orange text-white text-[10px] font-mono font-black uppercase tracking-widest shadow-md">
                    {item.projectNumber}
                  </span>

                  {item.duration && (
                    <span className="px-3 py-1 rounded-full bg-black/70 text-brand-cream text-[10px] font-mono font-bold border border-white/15 backdrop-blur-md">
                      {item.duration}
                    </span>
                  )}
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 m-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-orange-glow group-hover:scale-110 transition-transform duration-300 z-20">
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white translate-x-0.5" />
                </div>
              </div>

              {/* Bottom Card Content */}
              <div className="p-6 text-white flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-brand-orange uppercase tracking-widest mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{item.category}</span>
                  </div>

                  <h3 className="font-display heading-card text-white group-hover:text-brand-orange transition-colors uppercase tracking-tight mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-cream/80 font-sans font-normal leading-relaxed mb-4 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                  <span className="text-[11px] font-mono text-brand-cream/60">
                    {item.deliverable}
                  </span>

                  <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-brand-orange uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    <span>WATCH</span>
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
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-brand-navy font-mono font-bold text-xs uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-all duration-300 shadow-2xl group"
          >
            <span>HAVE A PROJECT IN MIND? LET'S TALK</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform text-brand-orange group-hover:text-white" />
          </button>
        </div>

      </div>
    </section>
  );
};

