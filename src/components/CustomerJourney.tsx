import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Eye, PauseCircle, Heart, Compass, MailCheck, UserCheck } from 'lucide-react';
import { companyData } from '../data/companyData';
import { scrollToSection } from '../utils/scrollUtils';
import { FlowingOrangeLines } from './FlowingOrangeLines';

export const CustomerJourney: React.FC = () => {
  const steps = [
    { title: 'SEE YOUR BRAND', icon: Eye, desc: 'Initial impression in crowded feeds' },
    { title: 'STOP', icon: PauseCircle, desc: 'Hook that stops the scroll' },
    { title: 'ENGAGE', icon: Heart, desc: 'High-retention storytelling' },
    { title: 'DISCOVER', icon: Compass, desc: 'Understanding your product value' },
    { title: 'CONTACT', icon: MailCheck, desc: 'Direct outreach & inquiry' },
    { title: 'BECOME A CUSTOMER', icon: UserCheck, desc: 'Conversion into loyal client' },
  ];

  return (
    <section className="py-10 sm:py-20 md:py-24 lg:py-32 bg-brand-darknavy text-white relative overflow-hidden bg-dark-grid border-b border-white/10">
      {/* Subtle Background Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none z-0" />

      {/* Soft Ambient Orange Radial Glow Accents */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-brand-orange/12 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-brand-orange/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none z-0" />

      {/* Flowing Line Background Vector Accent */}
      <FlowingOrangeLines variant="work" className="-top-12 left-0 w-full h-full pointer-events-none opacity-25 z-0" />

      {/* Editorial Watermark Typography */}
      <div className="absolute right-[-2vw] top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.025] font-display text-[22vw] font-black text-white leading-none uppercase z-0">
        JOURNEY
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 lg:mb-16">
          <h2 className="font-display heading-section text-white uppercase mb-2.5 sm:mb-4">
            HOW PEOPLE BECOME <span className="text-brand-orange">YOUR CUSTOMERS.</span>
          </h2>

          <p className="text-sm sm:text-xl lg:text-2xl text-brand-cream/80 font-sans font-normal leading-relaxed">
            {companyData.customerJourneySub}
          </p>
        </div>

        {/* Journey Flow Pipeline - Compact Responsive Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1.5 sm:gap-6 relative items-center max-w-md sm:max-w-none mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="flex flex-col items-center group relative w-full"
              >
                {/* Step Card Container */}
                <div className={`w-full flex items-center sm:flex-col sm:text-center gap-3 sm:gap-0 p-3 sm:p-0 rounded-2xl sm:rounded-none bg-white/5 sm:bg-transparent border border-white/10 sm:border-none transition-all duration-300 ${
                  isLast ? 'border-brand-orange/40 bg-brand-orange/10 sm:bg-transparent' : ''
                }`}>
                  {/* Icon Container */}
                  <div className={`w-10 h-10 sm:w-16 sm:h-16 sm:mb-4 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isLast
                      ? 'bg-brand-orange text-white shadow-orange-glow scale-105'
                      : 'bg-white/10 sm:bg-white/5 text-brand-cream group-hover:bg-brand-navy group-hover:text-brand-orange border border-white/10'
                  }`}>
                    <IconComponent className="w-5 h-5 sm:w-7 sm:h-7" />
                  </div>

                  {/* Text Container */}
                  <div className="flex flex-col text-left sm:text-center">
                    <h3 className="font-display font-black text-xs sm:text-lg uppercase tracking-tight text-white mb-0.5 sm:mb-1.5 leading-tight">
                      {step.title}
                    </h3>

                    <p className="text-[11px] sm:text-[11px] text-brand-cream/70 leading-tight sm:max-w-[150px] font-sans">
                      {step.desc}
                    </p>
                  </div>

                  {/* Desktop Horizontal Connecting Arrow → */}
                  {!isLast && (
                    <div className="hidden lg:flex absolute -right-4 sm:-right-5 top-1/2 -translate-y-1/2 text-brand-orange z-10 items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-brand-orange stroke-[2.5]" />
                    </div>
                  )}
                </div>

                {/* Mobile / Tablet Vertical Connecting Arrow ↓ */}
                {!isLast && (
                  <div className="lg:hidden flex items-center justify-center my-1 sm:my-3 text-brand-orange">
                    <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange stroke-[2.5]" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA Note */}
        <div className="mt-8 sm:mt-14 text-center">
          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-brand-orange hover:text-white transition-colors"
          >
            <span>START BUILDING YOUR CONTENT PIPELINE</span>
            <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 rotate-[-90deg]" />
          </button>
        </div>

      </div>
    </section>
  );
};
