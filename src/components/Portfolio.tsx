import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Eye, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioItems } from '../data/portfolioData';
import type { PortfolioItem, MediaCategory } from '../types';
import { scrollToSection } from '../utils/scrollUtils';

interface PortfolioProps {
  onSelectProject: (item: PortfolioItem) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<MediaCategory>('ALL');

  const categories: MediaCategory[] = [
    'ALL',
    'BRAND CONTENT',
    'SOCIAL MEDIA',
    'VIDEO',
    'DESIGN',
    'DIGITAL PROMOTION',
  ];

  const filteredItems = activeCategory === 'ALL'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  // Helper to map index to asymmetric editorial grid spans (~60% / 40%, ~40% / 60%, 100%)
  const getGridSpanClass = (index: number, isFiltered: boolean) => {
    if (isFiltered) {
      return index % 3 === 0 ? 'md:col-span-7' : 'md:col-span-5';
    }

    switch (index) {
      case 0: // Row 1 Left: ~60% width (7 cols)
        return 'md:col-span-7';
      case 1: // Row 1 Right: ~40% width (5 cols)
        return 'md:col-span-5';
      case 2: // Row 2 Left: ~40% width (5 cols)
        return 'md:col-span-5';
      case 3: // Row 2 Right: ~60% width (7 cols)
        return 'md:col-span-7';
      case 4: // Row 3 Left: ~50% width (5 cols)
        return 'md:col-span-5';
      case 5: // Row 3 Right / Feature: ~70% width (7 cols) or full-width
        return 'md:col-span-7';
      default:
        return 'md:col-span-6';
    }
  };

  // Helper for natural visual aspect ratios
  const getAspectRatioClass = (index: number, isFiltered: boolean) => {
    if (isFiltered) {
      return 'aspect-[16/10]';
    }

    switch (index) {
      case 0: // 60% widescreen item
        return 'aspect-[16/10] sm:aspect-[16/9]';
      case 1: // 40% taller portrait item
        return 'aspect-[4/5] sm:aspect-[4/5] md:aspect-[4/5]';
      case 2: // 40% taller portrait item
        return 'aspect-[4/5] sm:aspect-[4/5] md:aspect-[4/5]';
      case 3: // 60% widescreen item
        return 'aspect-[16/10] sm:aspect-[16/9]';
      case 4: // 5-col item
        return 'aspect-[16/10]';
      case 5: // 7-col item
        return 'aspect-[16/9]';
      default:
        return 'aspect-[16/10]';
    }
  };

  return (
    <section 
      id="work" 
      className="py-20 sm:py-28 md:py-32 lg:py-36 bg-brand-cream border-b border-brand-navy/15 relative overflow-hidden scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32 selection:bg-brand-orange selection:text-white"
    >
      {/* Subtle Noise / Ambient Grid Texture Background */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-navy/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-brand-navy/15">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-orange" />
                <span className="text-xs font-black uppercase tracking-[0.25em] text-brand-orange font-mono">
                  WORK
                </span>
              </div>
              
              <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none">
                <span className="text-brand-navy">SELECTED </span>
                <span className="text-brand-orange">WORK.</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-brand-navy/80 max-w-xl font-medium leading-relaxed">
              Creative content, campaigns and visual experiences built to make brands stand out.
            </p>
          </div>
        </motion.div>

        {/* Category Filter Tabs Above Portfolio */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-10 sm:mb-14 border-b border-brand-navy/10"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-brand-orange text-white shadow-orange-glow scale-105'
                    : 'bg-white/80 text-brand-navy/70 hover:bg-brand-navy hover:text-white border border-brand-navy/15'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* Asymmetric Editorial Grid (~60%/40%, ~40%/60%) */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              const spanClass = getGridSpanClass(index, activeCategory !== 'ALL');
              const aspectClass = getAspectRatioClass(index, activeCategory !== 'ALL');
              const isVideo = item.mediaType === 'video' || item.mediaType === 'reel';

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
                  onClick={() => onSelectProject(item)}
                  className={`group relative rounded-3xl overflow-hidden cursor-pointer border border-brand-navy/20 bg-brand-navy shadow-card-subtle hover:shadow-navy-glow transition-all duration-500 hover:-translate-y-1.5 flex flex-col ${spanClass}`}
                >
                  {/* Media Visual Container */}
                  <div className={`relative overflow-hidden w-full ${aspectClass}`}>
                    
                    {/* Media Thumbnail */}
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Editorial Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-darknavy via-brand-navy/45 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />
                    
                    {/* Orange Glow Highlight Accent on Hover */}
                    <div className="absolute inset-0 border-2 border-brand-orange/0 group-hover:border-brand-orange/40 rounded-3xl transition-all duration-300 pointer-events-none z-20" />

                    {/* Top Editorial Badges */}
                    <div className="absolute top-4 sm:top-5 left-4 sm:left-5 right-4 sm:right-5 flex items-center justify-between z-10">
                      <div className="flex items-center gap-2">
                        {/* Project Index Number Badge */}
                        <span className="px-3 py-1 rounded-full bg-brand-orange text-white text-[11px] font-black uppercase tracking-widest shadow-md">
                          {item.projectNumber}
                        </span>

                        {/* Category Tag */}
                        <span className="px-3.5 py-1 rounded-full bg-brand-cream/90 backdrop-blur-md text-brand-navy text-[10px] font-black uppercase tracking-widest border border-brand-navy/15">
                          {item.category}
                        </span>
                      </div>

                      {/* Right top badges: Duration & Placeholder marker */}
                      <div className="flex items-center gap-2">
                        {item.duration && (
                          <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-brand-orange text-[10px] font-mono font-bold border border-white/10">
                            {item.duration}
                          </span>
                        )}

                        {item.isPlaceholder && (
                          <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-brand-cream/70 text-[9px] font-mono uppercase tracking-wider border border-white/10">
                            CONCEPT SAMPLE
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Center Action Icon / Play Button */}
                    <div className="absolute inset-0 m-auto w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-brand-orange text-white flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-orange-glow z-20">
                      {isVideo ? (
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white translate-x-0.5" />
                      ) : (
                        <Eye className="w-7 h-7 sm:w-8 sm:h-8" />
                      )}
                    </div>

                    {/* Bottom Project Details Overlay */}
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-10 text-white">
                      
                      {/* Project Title */}
                      <h3 className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-white group-hover:text-brand-cream transition-colors leading-tight uppercase tracking-tight mb-1.5">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-brand-cream/85 line-clamp-2 max-w-xl font-normal leading-relaxed mb-3 group-hover:text-brand-cream transition-colors">
                        {item.description}
                      </p>

                      {/* Bottom Footer Row with Deliverable & Action Arrow */}
                      <div className="flex items-center justify-between pt-3 border-t border-white/20">
                        <span className="text-[11px] sm:text-xs font-semibold text-brand-cream/75 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                          <span>{item.deliverable}</span>
                        </span>

                        <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-extrabold text-brand-orange uppercase tracking-wider group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">
                          <span>View Work</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </div>

                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Section CTA — VIEW ALL WORK ↗ */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 sm:mt-16 pt-10 border-t border-brand-navy/15 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/40 p-6 sm:p-8 rounded-3xl border border-brand-navy/10"
        >
          <div>
            <h4 className="font-display text-lg sm:text-xl font-black text-brand-navy uppercase mb-1">
              READY TO CREATE STANDOUT MEDIA FOR YOUR BRAND?
            </h4>
            <p className="text-xs sm:text-sm text-brand-navy/70 font-medium">
              Let's produce high-impact promotional videos, social content, and digital campaigns.
            </p>
          </div>

          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-brand-navy text-brand-cream font-bold text-xs uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-all duration-300 shadow-card-hover group whitespace-nowrap"
          >
            <span>VIEW ALL WORK</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
