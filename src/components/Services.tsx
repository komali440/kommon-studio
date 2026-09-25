import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
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
      className="py-20 sm:py-24 md:py-28 lg:py-32 bg-brand-cream text-brand-navy relative overflow-hidden bg-noise border-b border-brand-navy/15 scroll-mt-28 lg:scroll-mt-32"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 relative z-10">
        
        {/* Section Header - Clean Vertical Hierarchy (HEADING ↓ SUPPORTING TEXT) */}
        <div className="max-w-4xl mb-10 sm:mb-14">
          <h2 className="font-display heading-section uppercase mb-3 sm:mb-4">
            <span className="text-brand-navy">WHAT WE </span>
            <span className="text-brand-orange">DO.</span>
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-brand-navy/80 font-sans font-normal leading-relaxed">
            Services designed to help businesses attract attention, communicate value and reach customers online.
          </p>
        </div>

        {/* 2-Column Services Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: All 6 Services as Typography List Items */}
          <div className="lg:col-span-7 flex flex-col space-y-3">
            {servicesData.map((service) => {
              const isSelected = activeService.id === service.id;

              return (
                <motion.div
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  onMouseEnter={() => setActiveService(service)}
                  className={`group relative cursor-pointer py-5 px-6 rounded-2xl transition-all duration-300 flex items-center justify-between gap-6 border ${
                    isSelected 
                      ? 'bg-brand-navy text-white shadow-2xl border-brand-navy scale-[1.01] translate-x-1.5' 
                      : 'bg-white/80 hover:bg-white border-brand-navy/10 text-brand-navy hover:translate-x-1.5'
                  }`}
                >
                  <div className="flex items-center gap-5 sm:gap-7">
                    {/* Number */}
                    <span className={`font-display font-black text-2xl sm:text-4xl font-mono transition-colors duration-300 leading-none ${
                      isSelected ? 'text-brand-orange' : 'text-brand-navy/30 group-hover:text-brand-orange'
                    }`}>
                      {service.number}
                    </span>

                    <div>
                      {/* Service Title */}
                      <h3 className={`font-display heading-card uppercase tracking-tight transition-colors duration-300 ${
                        isSelected ? 'text-white' : 'text-brand-navy group-hover:text-brand-orange'
                      }`}>
                        {service.title}
                      </h3>

                      {/* Business Value Explanation */}
                      <p className={`text-xs sm:text-sm font-normal mt-1.5 leading-relaxed max-w-lg transition-colors ${
                        isSelected ? 'text-brand-cream/80' : 'text-brand-navy/70'
                      }`}>
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow Action Trigger */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectService(service.title);
                    }}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isSelected
                        ? 'bg-brand-orange text-white scale-105 shadow-orange-glow'
                        : 'bg-brand-navy/5 text-brand-navy/60 group-hover:bg-brand-orange group-hover:text-white group-hover:scale-105'
                    }`}
                    aria-label={`Select ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Featured Visual Preview Box */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="relative rounded-3xl overflow-hidden bg-brand-navy text-white shadow-2xl border border-brand-navy/20 min-h-[440px] sm:min-h-[480px] flex flex-col justify-between group">
              
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeService.id}
                  src={activeService.previewImage}
                  alt={activeService.title}
                  initial={{ opacity: 0.4, scale: 1.05 }}
                  animate={{ opacity: 0.85, scale: 1 }}
                  exit={{ opacity: 0.4, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-brand-darknavy via-brand-navy/60 to-brand-darknavy/30 z-0" />

              <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-brand-orange text-white text-[10px] font-mono font-black uppercase tracking-widest shadow-md">
                  FEATURED SERVICE
                </span>
                <span className="px-3 py-1.5 rounded-full bg-black/60 text-brand-cream font-mono font-bold text-xs">
                  {activeService.number} / 06
                </span>
              </div>

              <div className="relative z-10 p-6 sm:p-8">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-brand-orange uppercase tracking-widest mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>{activeService.title}</span>
                </div>

                <h4 className="font-display heading-card uppercase text-white mb-3 leading-none">
                  {activeService.featuredHeadline}
                </h4>

                <p className="text-xs sm:text-sm text-brand-cream/85 font-normal leading-relaxed mb-6">
                  {activeService.description}
                </p>

                <button
                  type="button"
                  onClick={() => onSelectService(activeService.title)}
                  className="px-6 py-3.5 rounded-full bg-brand-orange text-white text-xs font-mono font-bold uppercase tracking-wider shadow-orange-glow hover:bg-brand-orange-hover hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
                >
                  <span>DISCUSS {activeService.title}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
