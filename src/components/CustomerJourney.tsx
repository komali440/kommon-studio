import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Eye, PauseCircle, Heart, Compass, MailCheck, UserCheck } from 'lucide-react';
import { companyData } from '../data/companyData';
import { scrollToSection } from '../utils/scrollUtils';

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
    <section className="py-20 sm:py-24 md:py-28 lg:py-32 bg-brand-darknavy text-white relative overflow-hidden bg-dark-grid border-b border-white/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-orange text-xs font-mono font-bold uppercase tracking-widest mb-4">
            <span>07 — AUDIENCE JOURNEY</span>
          </div>

          <h2 className="font-display heading-section text-white uppercase mb-4">
            HOW PEOPLE BECOME <span className="text-brand-orange">YOUR CUSTOMERS.</span>
          </h2>

          <p className="text-sm sm:text-base text-brand-cream/80 leading-relaxed font-normal">
            {companyData.customerJourneySub}
          </p>
        </div>

        {/* Journey Flow Pipeline */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 relative">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-4">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    isLast
                      ? 'bg-brand-orange text-white shadow-orange-glow scale-105'
                      : 'bg-white/5 text-brand-cream group-hover:bg-brand-navy group-hover:text-brand-orange border border-white/10'
                  }`}>
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                </div>

                <h3 className="font-display font-black text-base sm:text-lg uppercase tracking-tight text-white mb-1.5 leading-none">
                  {step.title}
                </h3>

                <p className="text-[11px] text-brand-cream/60 leading-tight max-w-[150px]">
                  {step.desc}
                </p>

                {!isLast && (
                  <div className="mt-4 text-brand-orange/60 font-black text-lg">
                    ↓
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA Note */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-orange hover:text-white transition-colors"
          >
            <span>START BUILDING YOUR CONTENT PIPELINE</span>
            <ArrowDown className="w-4 h-4 rotate-[-90deg]" />
          </button>
        </div>

      </div>
    </section>
  );
};
