import React from 'react';
import { Check } from 'lucide-react';
import { processSteps } from '../data/companyData';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 sm:py-28 md:py-32 lg:py-36 bg-brand-navy text-white relative overflow-hidden bg-dark-grid border-b border-white/10 scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-0.5 bg-brand-orange" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-brand-orange">
                06 — OUR WORKFLOW
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-white uppercase">
              HOW WE <span className="text-brand-orange">WORK.</span>
            </h2>
          </div>

          <p className="text-base text-brand-cream/70 max-w-md mt-4 md:mt-0 font-normal">
            A simple, structured, four-step process that transforms ideas into high-impact digital content and measurable growth.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => (
            <div
              key={step.number}
              className="relative rounded-3xl p-8 bg-brand-darknavy border border-white/10 shadow-2xl hover:border-brand-orange/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Number Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-4xl font-black text-brand-orange">
                    {step.number}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-brand-orange text-white flex items-center justify-center text-xs transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-black uppercase text-white mb-2 group-hover:text-brand-orange transition-colors">
                  {step.title}
                </h3>

                <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block mb-4">
                  {step.subtitle}
                </span>

                <p className="text-xs text-brand-cream/70 leading-relaxed mb-6 font-normal">
                  {step.description}
                </p>
              </div>

              {/* Key Output Pill */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">
                  Deliverable Focus:
                </span>
                <span className="text-xs font-bold text-brand-cream flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-brand-orange" />
                  <span>{step.keyDeliverable}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
