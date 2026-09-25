import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Palette, Video, Film, Share2, TrendingUp } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { FlowingOrangeLines } from './FlowingOrangeLines';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'Palette': return <Palette className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
    case 'Video': return <Video className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
    case 'Film': return <Film className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
    case 'Share2': return <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
    case 'TrendingUp': return <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
    case 'Sparkles': return <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
    default: return <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
  }
};

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section 
      id="services" 
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-brand-cream text-brand-navy relative overflow-hidden bg-noise border-b border-brand-navy/15 scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32"
    >
      {/* Background Soft Glow Accents */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-brand-orange/8 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-brand-navy/5 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Vector Line Background Accent */}
      <FlowingOrangeLines variant="work" className="-top-10 left-0 w-full h-full pointer-events-none opacity-25 z-0" />

      {/* Editorial Watermark Typography */}
      <div className="absolute left-[-2vw] top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.025] font-display text-[22vw] font-black text-brand-navy leading-none uppercase z-0">
        SERVICES
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Section Header - Clean Vertical Hierarchy (HEADING ↓ SUPPORTING TEXT) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-10 sm:mb-14"
        >
          <h2 className="font-display heading-section uppercase mb-3 sm:mb-3.5">
            <span className="text-brand-navy">WHAT WE </span>
            <span className="text-brand-orange">DO.</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-brand-navy/80 font-sans font-normal leading-relaxed max-w-xl mx-auto">
            Services designed to help businesses attract attention, communicate value and reach customers online.
          </p>
        </motion.div>

        {/* 6 Horizontal Rectangular Services Cards (Compact Content & Hierarchy) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch w-full mx-auto max-w-[1280px]">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              onClick={() => onSelectService(service.title)}
              className="group relative w-full aspect-[1.8/1] min-h-[200px] sm:min-h-[210px] p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-brand-navy text-white border border-brand-navy/15 hover:border-brand-orange/60 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer overflow-hidden"
            >
              {/* Subtle Card Ambient Glow on Hover */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-brand-orange/15 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

              <div className="flex flex-col h-full justify-between z-10">
                
                {/* Top Designed Header Area */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    {/* Left: Service Icon Badge */}
                    <div className="w-6.5 h-6.5 sm:w-7.5 sm:h-7.5 rounded-lg bg-brand-orange/15 border border-brand-orange/30 text-brand-orange flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-sm shrink-0">
                      {getServiceIcon(service.icon)}
                    </div>

                    {/* Right: Tagline Badge */}
                    <span className="px-2 py-0.5 rounded-full bg-white/10 text-brand-cream text-[8.5px] sm:text-[9.5px] font-mono font-bold uppercase tracking-wider border border-white/10 truncate max-w-[160px]">
                      {service.tagline}
                    </span>
                  </div>

                  {/* Thin Subtle Accent Divider Line */}
                  <div className="w-full h-[1px] bg-gradient-to-r from-brand-orange/40 via-white/15 to-transparent mb-1.5 group-hover:from-brand-orange transition-colors duration-300" />

                  {/* Number + Service Title on the SAME Horizontal Line (01  SERVICE HEADING) */}
                  <h3 className="font-display text-base sm:text-lg font-black uppercase tracking-tight text-white group-hover:text-brand-orange transition-colors mb-1.5 leading-snug flex items-center gap-2 sm:gap-2.5">
                    <span className="font-mono text-xs font-bold text-brand-orange/90 shrink-0">
                      {service.number}
                    </span>
                    <span className="truncate">
                      {service.title}
                    </span>
                  </h3>

                  {/* Supporting Description (Compact ~60-70% of heading size) */}
                  <p className="text-[11px] sm:text-xs text-brand-cream/75 font-sans font-normal leading-relaxed line-clamp-2 mb-2">
                    {service.description}
                  </p>
                </div>

                {/* Key Deliverables Pills */}
                {service.deliverables && service.deliverables.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-1.5">
                    {service.deliverables.slice(0, 2).map((item, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[8.5px] sm:text-[9.5px] font-mono text-brand-cream/75 truncate max-w-[140px]">
                        #{item}
                      </span>
                    ))}
                  </div>
                )}

                {/* Bottom Action Footer */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-1.5 text-[9.5px] sm:text-[10.5px] font-mono font-bold text-brand-orange uppercase tracking-wider">
                    <Sparkles className="w-3 h-3" />
                    <span>CORE SERVICE</span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectService(service.title);
                    }}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 group-hover:bg-brand-orange text-white text-[9.5px] sm:text-[10.5px] font-mono font-bold uppercase tracking-wider group-hover:scale-105 transition-all duration-300"
                    aria-label={`Select ${service.title}`}
                  >
                    <span>DISCUSS</span>
                    <ArrowUpRight className="w-3 h-3 text-brand-orange group-hover:text-white transition-colors" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

