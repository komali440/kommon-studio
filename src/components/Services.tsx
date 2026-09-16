import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import type { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeService, setActiveService] = useState<ServiceItem>(servicesData[0]);

  return (
    <section 
      id="services" 
      className="py-20 sm:py-28 md:py-32 lg:py-36 bg-brand-cream text-brand-navy relative overflow-hidden bg-noise border-b border-brand-navy/15 scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32"
    >
      {/* Ambient Glow Accent */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Row Matching Reference Composition */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 sm:pb-10 mb-10 sm:mb-14 border-b border-brand-navy/15 gap-8">
          
          {/* Main Title Block */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-orange" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-brand-orange font-mono">
                SERVICES
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none">
              <span className="text-brand-navy">WHAT WE </span>
              <span className="text-brand-orange">DO.</span>
            </h2>
          </div>

          {/* Right Brand Statement Block */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-8 lg:max-w-2xl">
            <div className="flex flex-col">
              <span className="font-display font-black text-sm sm:text-base text-brand-navy uppercase tracking-wider">
                WE DON'T JUST CREATE CONTENT.
              </span>
              <span className="font-display font-black text-sm sm:text-base text-brand-orange uppercase tracking-wider">
                WE CREATE ATTENTION.
              </span>
            </div>

            <div className="hidden sm:block h-10 w-px bg-brand-navy/20" />

            <p className="text-xs sm:text-sm text-brand-navy/75 font-medium leading-relaxed max-w-sm">
              From creative design to digital promotion, we help brands show up better, connect deeper and grow faster.
            </p>
          </div>

        </div>

        {/* Main 2-Column Services Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: All 6 Services Vertically Listed */}
          <div className="lg:col-span-7 flex flex-col space-y-2">
            {servicesData.map((service) => {
              const isSelected = activeService.id === service.id;

              return (
                <div
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  onMouseEnter={() => setActiveService(service)}
                  className={`group relative cursor-pointer py-5 px-5 sm:px-6 rounded-2xl transition-all duration-300 flex items-center justify-between gap-4 ${
                    isSelected 
                      ? 'bg-white shadow-card-subtle border border-brand-navy/10' 
                      : 'hover:bg-white/50 border-b border-brand-navy/10'
                  }`}
                >
                  {/* Left Active Indicator Accent Bar */}
                  <div
                    className={`absolute left-0 top-3 bottom-3 w-1.5 bg-brand-orange rounded-r-full transition-all duration-300 ${
                      isSelected ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-50'
                    }`}
                  />

                  {/* Left Section: Number + Title + Description */}
                  <div className="flex items-start gap-4 sm:gap-6 max-w-xl">
                    {/* Large Service Number */}
                    <span className={`font-display font-black text-2xl sm:text-4xl tracking-tight transition-colors duration-300 leading-none ${
                      isSelected ? 'text-brand-orange' : 'text-brand-navy/25 group-hover:text-brand-orange'
                    }`}>
                      {service.number}
                    </span>

                    <div>
                      <h3 className="font-display font-black text-lg sm:text-2xl uppercase tracking-tight text-brand-navy group-hover:text-brand-orange transition-colors duration-300 leading-snug">
                        {service.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-brand-navy/70 mt-1 font-normal leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Circular Arrow Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectService(service.title);
                    }}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isSelected
                        ? 'bg-brand-orange text-white scale-105 shadow-orange-glow'
                        : 'bg-brand-navy/5 text-brand-navy/60 group-hover:bg-brand-orange group-hover:text-white'
                    }`}
                    aria-label={`Select ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                </div>
              );
            })}
          </div>

          {/* Right Column: Featured Visual Service Card */}
          <div className="lg:col-span-5 sticky top-28 sm:top-32">
            <div className="relative rounded-3xl overflow-hidden bg-brand-navy text-white shadow-2xl border border-brand-navy/20 min-h-[460px] sm:min-h-[520px] flex flex-col justify-between group">
              
              {/* Background Image with Smooth AnimatePresence */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeService.id}
                  src={activeService.previewImage}
                  alt={activeService.title}
                  initial={{ opacity: 0.4, scale: 1.05 }}
                  animate={{ opacity: 0.9, scale: 1 }}
                  exit={{ opacity: 0.4, scale: 1.05 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Dark Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darknavy via-brand-navy/70 to-brand-darknavy/40 z-0" />

              {/* Top Card Badges */}
              <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-brand-orange text-white text-[10px] font-black uppercase tracking-widest shadow-md">
                  FEATURED SERVICE
                </span>

                <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-brand-cream/90 font-mono font-bold text-xs uppercase tracking-widest border border-white/10">
                  {activeService.number} / 06
                </span>
              </div>

              {/* Bottom Card Copy & CTA Overlay */}
              <div className="relative z-10 p-6 sm:p-8">
                
                <div className="flex items-center gap-1 text-xs font-black text-brand-orange uppercase tracking-widest mb-2">
                  <span>{activeService.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>

                <h4 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-none mb-3 drop-shadow-md">
                  {activeService.featuredHeadline || activeService.title}
                </h4>

                <p className="text-xs sm:text-sm text-brand-cream/85 font-normal leading-relaxed max-w-md mb-6">
                  {activeService.description}
                </p>

                <button
                  onClick={() => onSelectService(activeService.title)}
                  className="px-6 py-3.5 rounded-full bg-brand-orange text-white text-xs font-extrabold uppercase tracking-wider shadow-orange-glow hover:bg-brand-orange-hover hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group/btn"
                >
                  <span>SEE EXAMPLES</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>

              </div>

            </div>
          </div>

        </div>

        {/* Bottom 3-Column Value Strip Matching Reference Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 mt-12 sm:mt-16 border-t border-brand-navy/15">
          
          {/* Value 1 */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/40 border border-brand-navy/10">
            <div className="w-10 h-10 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-black text-sm uppercase text-brand-navy tracking-tight">
                CREATIVE APPROACH
              </h4>
              <p className="text-xs text-brand-navy/70 font-medium">
                Fresh ideas for real business needs.
              </p>
            </div>
          </div>

          {/* Value 2 */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/40 border border-brand-navy/10">
            <div className="w-10 h-10 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-black text-sm uppercase text-brand-navy tracking-tight">
                END-TO-END SUPPORT
              </h4>
              <p className="text-xs text-brand-navy/70 font-medium">
                From concept to final delivery.
              </p>
            </div>
          </div>

          {/* Value 3 */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/40 border border-brand-navy/10">
            <div className="w-10 h-10 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-black text-sm uppercase text-brand-navy tracking-tight">
                FOCUSED ON GROWTH
              </h4>
              <p className="text-xs text-brand-navy/70 font-medium">
                Content that helps your business get noticed.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
