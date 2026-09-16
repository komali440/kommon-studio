import React from 'react';
import { Sparkles } from 'lucide-react';

export const Marquee: React.FC = () => {
  const items = [
    'PROMOTIONAL VIDEOS',
    'REELS & SHORT-FORM',
    'CREATIVE CONTENT',
    'DIGITAL PROMOTION',
    'BRAND CAMPAIGNS',
    'WE CREATE ATTENTION',
    'DIGITAL ADVERTISING',
  ];

  return (
    <div className="relative w-full bg-brand-navy py-5 overflow-hidden border-y-2 border-brand-orange shadow-lg">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-6 mx-4">
            <span className="font-display font-black text-xl sm:text-2xl tracking-wider uppercase text-brand-cream hover:text-brand-orange transition-colors cursor-default">
              {text}
            </span>
            <Sparkles className="w-5 h-5 text-brand-orange flex-shrink-0 animate-spin-slow" />
          </div>
        ))}
      </div>
    </div>
  );
};
