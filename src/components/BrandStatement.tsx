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
        
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-12 h-0.5 bg-brand-orange" />
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-brand-orange">
            01 — BUSINESS PROBLEM
          </span>
        </div>

        {/* Big Editorial Headline */}
        <h2 className="font-display heading-section text-white uppercase max-w-4xl mb-6">
          YOUR BUSINESS HAS A STORY.
          <br />
          <span className="text-brand-orange">
            LET'S MAKE PEOPLE NOTICE IT.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-brand-cream/90 max-w-3xl font-medium leading-relaxed mb-12 sm:mb-16">
          {companyData.businessProblemSub}
        </p>

        {/* 4 Problem Blocks in 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-8 border-t border-white/10">
          {businessProblems.map((prob, idx) => (
            <motion.div
              key={prob.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex items-start gap-5 sm:gap-6 group p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-orange/60 hover:bg-white/10 transition-all duration-300 shadow-xl"
            >
              <span className="font-display font-black text-3xl sm:text-4xl text-brand-orange font-mono leading-none">
                {prob.number}
              </span>

              <div>
                <h3 className="font-display heading-card text-white uppercase mb-2 group-hover:text-brand-orange transition-colors">
                  {prob.question}
                </h3>
                <p className="text-sm sm:text-base text-brand-cream/80 font-normal leading-relaxed">
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

