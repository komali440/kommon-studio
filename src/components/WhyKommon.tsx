import React from 'react';
import { whyReasons } from '../data/companyData';
import { CheckCircle } from 'lucide-react';

export const WhyKommon: React.FC = () => {
  return (
    <section id="why" className="py-20 sm:py-28 md:py-32 lg:py-36 bg-brand-cream border-b border-brand-navy/10 relative overflow-hidden bg-noise scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-0.5 bg-brand-orange" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-brand-orange">
                07 — THE ADVANTAGE
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-brand-navy uppercase">
              WHY <span className="text-brand-orange">KOMMON STUDIO.</span>
            </h2>
          </div>

          <p className="text-base text-brand-navy/70 max-w-md mt-4 md:mt-0 font-normal">
            Why leading restaurants, real estate firms, fashion brands, and businesses choose Kommon Studio for their digital content and promotion.
          </p>
        </div>

        {/* Editorial Split Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyReasons.map((item) => (
            <div
              key={item.number}
              className="p-8 rounded-3xl bg-white border border-brand-navy/10 shadow-card-subtle hover:border-brand-orange transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-[10px] font-extrabold uppercase tracking-widest">
                    {item.badge}
                  </span>
                  <span className="font-display font-black text-2xl text-brand-navy/30 group-hover:text-brand-orange transition-colors">
                    {item.number}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-black uppercase text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-brand-navy/75 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-navy/10 flex items-center gap-2 text-xs font-bold text-brand-navy/60">
                <CheckCircle className="w-4 h-4 text-brand-orange" />
                <span>Verified Studio Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
