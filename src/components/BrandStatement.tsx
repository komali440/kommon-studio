import React from 'react';
import { motion } from 'framer-motion';
import { companyData, businessProblems } from '../data/companyData';

export const BrandStatement: React.FC = () => {
  return (
    <section 
      id="problem" 
      className="py-20 sm:py-24 md:py-28 lg:py-32 bg-brand-navy text-white relative overflow-hidden bg-dark-grid border-b border-white/10 scroll-mt-28 lg:scroll-mt-32"
    >
      {/* Background Watermark Accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] font-display text-[22vw] font-black text-white leading-none">
        ATTENTION
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 relative z-10">
        
        {/* Main Section Heading - Global Typography System */}
        <div className="max-w-4xl mb-8 sm:mb-10">
          <h2 className="font-display heading-section text-white uppercase mb-4">
            YOUR BUSINESS HAS A STORY.
            <br />
            <span className="text-brand-orange">
              LET'S MAKE PEOPLE NOTICE IT.
            </span>
          </h2>

          {/* Supporting Copy - Unified Typography (~50% of heading size) */}
          <p className="text-lg sm:text-xl lg:text-2xl text-brand-cream/90 font-sans font-normal leading-relaxed">
            {companyData.businessProblemSub}
          </p>
        </div>

        {/* 4 Problem Blocks in Balanced Grid Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 pt-6 sm:pt-8 border-t border-white/10">
          {businessProblems.map((prob, idx) => (
            <motion.div
              key={prob.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex items-start gap-4 sm:gap-5 group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-orange/60 hover:bg-white/10 transition-all duration-300 shadow-xl"
            >
              <span className="font-display font-black text-3xl sm:text-4xl text-brand-orange font-mono leading-none shrink-0">
                {prob.number}
              </span>

              <div>
                <h3 className="font-display heading-card text-white uppercase mb-2 group-hover:text-brand-orange transition-colors">
                  {prob.question}
                </h3>
                <p className="text-sm sm:text-base text-brand-cream/80 font-sans font-normal leading-relaxed">
                  {prob.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

