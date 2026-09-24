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
    <section id="industries" className="py-20 sm:py-24 md:py-28 lg:py-32 bg-brand-cream border-b border-brand-navy/15 relative overflow-hidden bg-noise scroll-mt-28 lg:scroll-mt-32">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-12 h-0.5 bg-brand-orange" />
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-brand-orange">
            06 — WHO WE HELP
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-display heading-section text-brand-navy uppercase max-w-5xl mb-10 sm:mb-14">
          BUILT FOR BUSINESSES
          <br />
          <span className="text-brand-orange">
            THAT WANT TO BE SEEN.
          </span>
        </h2>

        {/* Sector Cloud + Focus Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Sector Pills */}
          <div className="lg:col-span-7 flex flex-wrap gap-2.5 sm:gap-3">
            {industriesData.map((item) => {
              const isSelected = activeTab.id === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(item)}
                  className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all duration-300 border text-xs sm:text-sm font-mono font-bold uppercase tracking-wider ${
                    isSelected
                      ? 'bg-brand-navy text-white border-brand-orange shadow-2xl scale-105'
                      : 'bg-white/80 text-brand-navy border-brand-navy/10 hover:border-brand-orange hover:bg-white'
                  }`}
                >
                  <span className={`p-1.5 rounded-lg ${isSelected ? 'text-brand-orange bg-white/10' : 'text-brand-orange'}`}>
                    {getIcon(item.iconName)}
                  </span>
                  <span>{item.title}</span>
                  {isSelected && <ArrowUpRight className="w-4 h-4 text-brand-orange" />}
                </button>
              );
            })}
          </div>

          {/* Right Column: Sector Focus Card */}
          <div className="lg:col-span-5 bg-brand-navy text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-brand-navy/20 relative overflow-hidden w-full">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-brand-orange text-white">
                    {getIcon(activeTab.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-brand-orange uppercase tracking-widest">
                    INDUSTRY FOCUS
                  </span>
                </div>
              </div>

              <h3 className="font-display heading-card uppercase text-white mb-3">
                {activeTab.title}
              </h3>

              <p className="text-xs sm:text-sm text-brand-cream/85 leading-relaxed mb-6 font-normal">
                {activeTab.tagline}
              </p>

              {/* Tags */}
              <div className="mb-6">
                <span className="text-[10px] font-mono font-bold text-white/50 uppercase tracking-widest block mb-2">
                  CONTENT TYPES FOR THIS SECTOR:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeTab.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-brand-cream text-xs font-mono">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => onSelectCategory(activeTab.title)}
                className="w-full py-3.5 sm:py-4 rounded-full bg-brand-orange text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-brand-orange-hover shadow-orange-glow transition-all flex items-center justify-center gap-2"
              >
                <span>GET CONTENT FOR {activeTab.title.toUpperCase()}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
