import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Eye, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioItems } from '../data/portfolioData';
import type { PortfolioItem, MediaCategory } from '../types';
import { scrollToSection } from '../utils/scrollUtils';
import { FlowingOrangeLines } from './FlowingOrangeLines';

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

  return (
    <section 
      id="work" 
      className="py-20 sm:py-24 md:py-28 lg:py-32 bg-brand-navy text-white relative overflow-hidden bg-dark-grid border-b border-white/10 scroll-mt-28 lg:scroll-mt-32 selection:bg-brand-orange selection:text-white"
    >
      {/* Background Flowing Orange Line Accent */}
      <FlowingOrangeLines variant="work" className="-top-10 left-0 w-full h-full pointer-events-none opacity-40" />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 relative z-10">
        
        {/* Editorial Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-orange" />
                <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-brand-orange">
                  03 — PORTFOLIO
                </span>
              </div>
              
              <h2 className="font-display heading-section uppercase text-white">
                <span>SELECTED </span>
                <span className="text-brand-orange">WORK.</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-brand-cream/80 max-w-xl font-medium leading-relaxed">
              Some of the ways we turn ideas, products and businesses into content people want to notice.
            </p>
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-10 sm:mb-12 border-b border-white/10"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-brand-orange text-white shadow-orange-glow scale-105'
                    : 'bg-white/10 text-brand-cream/70 hover:bg-white hover:text-brand-navy border border-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* Large Editorial Project Layout */}
        <div className="space-y-10 sm:space-y-14">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              const isVideo = item.mediaType === 'video' || item.mediaType === 'reel';
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onClick={() => onSelectProject(item)}
                  className={`group relative rounded-3xl overflow-hidden cursor-pointer border border-white/10 bg-brand-darknavy shadow-2xl transition-all duration-500 hover:-translate-y-1.5 grid grid-cols-1 lg:grid-cols-12 items-center gap-0 ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Left Column: Media Canvas */}
                  <div className={`relative overflow-hidden w-full aspect-[16/10] sm:aspect-[16/9] ${
                    isEven ? 'lg:col-span-7' : 'lg:col-span-7 lg:order-2'
                  }`}>
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-darknavy via-brand-navy/20 to-transparent" />
                    
                    {/* Hover Border Accent */}
                    <div className="absolute inset-0 border-2 border-brand-orange/0 group-hover:border-brand-orange/50 rounded-3xl transition-all duration-300 pointer-events-none z-20" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-brand-orange text-white text-[11px] font-mono font-black uppercase tracking-widest shadow-md">
                          {item.projectNumber}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-black/60 text-brand-cream text-[10px] font-mono font-black uppercase tracking-widest border border-white/15 backdrop-blur-md">
                          {item.category}
                        </span>
                      </div>

                      {item.duration && (
                        <span className="px-3 py-1 rounded-full bg-black/60 text-brand-orange text-[10px] font-mono font-bold border border-white/10 backdrop-blur-md">
                          {item.duration}
                        </span>
                      )}
                    </div>

                    {/* Play / View Button Overlay */}
                    <div className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-orange text-white flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-orange-glow z-20">
                      {isVideo ? (
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white translate-x-0.5" />
                      ) : (
                        <Eye className="w-7 h-7 sm:w-8 sm:h-8" />
                      )}
                    </div>
                  </div>

                  {/* Right Column: Details */}
                  <div className={`p-6 sm:p-8 lg:p-10 text-white flex flex-col justify-between h-full ${
                    isEven ? 'lg:col-span-5' : 'lg:col-span-5 lg:order-1'
                  }`}>
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-orange uppercase tracking-widest mb-2">
                        <Sparkles className="w-4 h-4" />
                        <span>PROJECT {item.projectNumber}</span>
                      </div>

                      <h3 className="font-display heading-card text-white group-hover:text-brand-orange transition-colors uppercase tracking-tight mb-3">
                        {item.title}
                      </h3>

                      <p className="text-sm text-brand-cream/80 font-normal leading-relaxed mb-6">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {item.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-brand-cream/70">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Link */}
                    <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs font-mono text-brand-cream/60">
                        {item.deliverable}
                      </span>

                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-orange uppercase tracking-wider group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">
                        <span>VIEW PROJECT</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Section Footer Callout */}
        <div className="mt-14 text-center">
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

