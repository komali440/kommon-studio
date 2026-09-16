import React, { useState } from 'react';
import { Utensils, Building2, Shirt, Dumbbell, GraduationCap, Rocket, Store, UserCheck, ShoppingBag, Sparkles, ArrowUpRight } from 'lucide-react';
import { industriesData } from '../data/industriesData';
import type { IndustryItem } from '../types';

interface IndustriesProps {
  onSelectCategory: (categoryName: string) => void;
}

export const Industries: React.FC<IndustriesProps> = ({ onSelectCategory }) => {
  const [activeTab, setActiveTab] = useState<IndustryItem>(industriesData[0]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Utensils': return <Utensils className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'Shirt': return <Shirt className="w-5 h-5" />;
      case 'Dumbbell': return <Dumbbell className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Rocket': return <Rocket className="w-5 h-5" />;
      case 'Store': return <Store className="w-5 h-5" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="industries" className="py-20 sm:py-28 md:py-32 lg:py-36 bg-brand-cream border-b border-brand-navy/10 relative overflow-hidden bg-noise scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-12 h-0.5 bg-brand-orange" />
          <span className="text-xs font-black uppercase tracking-[0.25em] text-brand-orange">
            03 — WHO WE WORK WITH
          </span>
        </div>

        {/* Big Editorial Headline */}
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-brand-navy uppercase tracking-tight leading-[1.05] max-w-5xl mb-12 sm:mb-16">
          FROM CAFES TO STARTUPS,
          <br />
          FROM REAL ESTATE TO PERSONAL BRANDS —
          <br />
          <span className="text-brand-orange underline underline-offset-8 decoration-brand-orange/30">
            WE CREATE FOR DIFFERENT STORIES.
          </span>
        </h2>

        {/* Creative Typography Tag Cloud / Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Industry Pill List */}
          <div className="lg:col-span-7 flex flex-wrap gap-3">
            {industriesData.map((item) => {
              const isSelected = activeTab.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item)}
                  className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all duration-300 border text-sm font-bold uppercase tracking-wider ${
                    isSelected
                      ? 'bg-brand-navy text-brand-cream border-brand-orange shadow-navy-glow scale-105'
                      : 'bg-white text-brand-navy border-brand-navy/10 hover:border-brand-orange hover:bg-brand-orange/10'
                  }`}
                >
                  <span className={`p-1.5 rounded-lg ${isSelected ? 'text-brand-orange bg-brand-cream/10' : 'text-brand-orange'}`}>
                    {getIcon(item.iconName)}
                  </span>
                  <span>{item.title}</span>
                  {isSelected && <ArrowUpRight className="w-4 h-4 text-brand-orange" />}
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Industry Detail Showcase */}
          <div className="lg:col-span-5 bg-brand-navy text-brand-cream rounded-3xl p-8 shadow-2xl border border-brand-navy/20 relative overflow-hidden">
            
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-orange/20 rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-brand-orange text-white">
                    {getIcon(activeTab.iconName)}
                  </div>
                  <span className="text-xs font-bold text-brand-orange uppercase tracking-widest">
                    Target Sector
                  </span>
                </div>

                <span className="text-xs font-mono text-white/50">
                  Sector #{industriesData.indexOf(activeTab) + 1}
                </span>
              </div>

              <h3 className="font-display text-3xl font-black uppercase text-white mb-4">
                {activeTab.title}
              </h3>

              <p className="text-base text-brand-cream/80 leading-relaxed mb-6 font-normal">
                {activeTab.tagline}
              </p>

              {/* Tags */}
              <div className="mb-8">
                <span className="text-[11px] font-bold text-white/50 uppercase tracking-widest block mb-2">
                  Specialized Content Formats:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeTab.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 rounded-full bg-white/10 text-brand-cream text-xs font-semibold">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sample Project Match */}
              <div className="p-4 rounded-xl bg-brand-darknavy border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-brand-orange font-extrabold uppercase tracking-wider block">
                    Relevant Case Study
                  </span>
                  <span className="text-sm font-bold text-white">
                    {activeTab.sampleProject}
                  </span>
                </div>
                <button
                  onClick={() => onSelectCategory(activeTab.title)}
                  className="px-4 py-2 rounded-full bg-brand-orange text-white text-xs font-bold uppercase hover:bg-brand-orange-hover transition-colors"
                >
                  Discuss
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
