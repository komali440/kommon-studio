import React from 'react';
import { motion } from 'framer-motion';

export const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'UNDERSTAND',
      subtitle: 'Business, Audience & Goals',
      description: 'Understand the business, audience and goals.',
      deliverable: 'Creative Brief & Content Direction'
    },
    {
      number: '02',
      title: 'CREATE',
      subtitle: 'Production & Motion',
      description: 'Turn ideas into compelling visual content.',
      deliverable: 'Master Video Cuts & Visual Assets'
    },
    {
      number: '03',
      title: 'PROMOTE',
      subtitle: 'Reach & Audience',
      description: 'Help put the content in front of relevant audiences.',
      deliverable: 'Multi-Channel Digital Content'
    },
    {
      number: '04',
      title: 'GROW',
      subtitle: 'Creative Direction',
      description: 'Improve the creative direction based on business needs.',
      deliverable: 'Continuous Iteration'
    }
  ];

  return (
    <section id="process" className="py-20 sm:py-24 md:py-28 lg:py-32 bg-brand-navy text-white relative overflow-hidden bg-dark-grid border-b border-white/10 scroll-mt-28 lg:scroll-mt-32">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 relative z-10">
        
        {/* Section Header - Clean Vertical Hierarchy (HEADING ↓ SUPPORTING TEXT) */}
        <div className="max-w-4xl mb-10 sm:mb-12">
          <h2 className="font-display heading-section text-white uppercase mb-3 sm:mb-4">
            FROM PROBLEM <span className="text-brand-orange">TO PROMOTION.</span>
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-brand-cream/80 font-sans font-normal leading-relaxed">
            A simple, transparent process that turns ideas into compelling visual content and digital promotion.
          </p>
        </div>

        {/* Editorial Process Rows */}
        <div className="space-y-4 sm:space-y-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 sm:p-8 rounded-3xl bg-brand-darknavy/90 border border-white/10 hover:border-brand-orange/50 transition-all duration-300 group flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-5 sm:gap-7 max-w-3xl">
                <span className="font-display text-4xl sm:text-5xl font-black text-brand-orange font-mono leading-none flex-shrink-0">
                  {step.number}
                </span>

                <div>
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <h3 className="font-display heading-card text-white group-hover:text-brand-orange transition-colors uppercase">
                      {step.title}
                    </h3>
                    <span className="text-xs font-mono font-bold text-brand-cream/40 uppercase">
                      / {step.subtitle}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-brand-cream/80 leading-relaxed font-normal mt-1.5">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Output Label */}
              <div className="pt-4 md:pt-0 border-t md:border-t-0 border-white/10 md:text-right flex-shrink-0">
                <span className="text-[10px] font-mono font-bold text-brand-orange uppercase tracking-widest block mb-1">
                  STAGE DELIVERABLE
                </span>
                <span className="text-xs font-mono text-brand-cream/80 font-bold">
                  {step.deliverable}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
