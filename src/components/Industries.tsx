import React, { useState } from 'react';
import { Utensils, Building2, Shirt, Dumbbell, GraduationCap, Rocket, Store, UserCheck, ShoppingBag, Sparkles, ArrowUpRight } from 'lucide-react';
import { industriesData } from '../data/industriesData';
import type { IndustryItem } from '../types';

interface IndustriesProps {
  onSelectCategory: (categoryName: string) => void;
}

const getIndustryImage = (id: string) => {
  switch (id) {
    case 'ind-1': return 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop';
    case 'ind-2': return 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop';
    case 'ind-3': return 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop';
    case 'ind-4': return 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop';
    case 'ind-5': return 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop';
    case 'ind-6': return 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop';
    case 'ind-7': return 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=800&auto=format&fit=crop';
    case 'ind-8': return 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop';
    case 'ind-9': return 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop';
    default: return 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop';
  }
};

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
    <section id="industries" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-brand-cream border-b border-brand-navy/15 relative overflow-hidden bg-noise scroll-mt-24 lg:scroll-mt-28">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 relative z-10">
        
        {/* Balanced 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT SIDE: Heading → Supporting Text → Sector Pills */}
          <div className="lg:col-span-7 flex flex-col justify-start items-start">
            
            {/* Heading & Subtitle */}
            <div className="max-w-2xl mb-8 sm:mb-10">
              <h2 className="font-display heading-section text-brand-navy uppercase mb-3.5 sm:mb-4">
                BUILT FOR <span className="text-brand-orange">YOUR BUSINESS.</span>
              </h2>

              <p className="text-lg sm:text-xl lg:text-2xl text-brand-navy/80 font-sans font-normal leading-relaxed">
                Tailored creative media and digital promotion for high-growth sectors.
              </p>
            </div>

            {/* Sector Pills Cloud */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 w-full">
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

          </div>

          {/* RIGHT SIDE: Perfectly Centered Sector Focus Card & Image Container */}
          <div className="lg:col-span-5 bg-brand-navy text-white rounded-3xl p-6 sm:p-8 border border-brand-navy/20 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center w-full my-auto">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 w-full flex flex-col items-center justify-center text-center">
              
              {/* Header Icon + Label */}
              <div className="flex items-center justify-center gap-3 mb-3 mx-auto">
                <div className="p-2.5 rounded-xl bg-brand-orange text-white shrink-0">
                  {getIcon(activeTab.iconName)}
                </div>
                <span className="text-xs font-mono font-bold text-brand-orange uppercase tracking-widest">
                  INDUSTRY FOCUS
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display heading-card uppercase text-white mb-2 text-center">
                {activeTab.title}
              </h3>

              {/* Tagline */}
              <p className="text-xs sm:text-sm text-brand-cream/85 leading-relaxed mb-4 font-sans font-normal text-center max-w-sm">
                {activeTab.tagline}
              </p>

              {/* Centered Sector Image Preview (Horizontal & Vertical Centering, No Distortion) */}
              <div className="w-full max-w-md aspect-[16/9] rounded-2xl overflow-hidden relative my-3 border border-white/15 shadow-md flex items-center justify-center bg-brand-darknavy mx-auto">
                <img
                  key={activeTab.id}
                  src={getIndustryImage(activeTab.id)}
                  alt={activeTab.title}
                  className="w-full h-full object-cover object-center transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darknavy/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Content Tags */}
              <div className="mb-5 w-full text-center">
                <span className="text-[10px] font-mono font-bold text-white/50 uppercase tracking-widest block mb-2">
                  CONTENT TYPES FOR THIS SECTOR:
                </span>
                <div className="flex flex-wrap justify-center gap-2">
                  {activeTab.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-brand-cream text-[11px] font-mono">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Action */}
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
