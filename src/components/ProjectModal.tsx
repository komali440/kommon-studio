import React, { useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import type { PortfolioItem } from '../types';

interface ProjectModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onInquire: (title: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ item, onClose, onInquire }) => {
  useEffect(() => {
    if (!item) return;

    // Lock background body scroll while modal is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Allow Escape key to close modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const isVideo = item.mediaType === 'video' || item.mediaType === 'reel';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-brand-navy/90 backdrop-blur-xl animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      {/* Backdrop overlay */}
      <div className="fixed inset-0" aria-hidden="true" />

      {/* Modal Card - Responsive and max-height constrained for mobile viewports */}
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl sm:rounded-3xl bg-brand-navy border border-white/20 text-brand-cream shadow-2xl overflow-hidden z-10 my-auto cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close (X) Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 p-2.5 sm:p-3 rounded-full bg-black/70 text-white hover:bg-brand-orange transition-all duration-200 shadow-lg group focus:outline-none focus:ring-2 focus:ring-brand-orange"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto max-h-[92vh] flex flex-col">

          {/* Media Player Area */}
          <div className="relative w-full bg-black aspect-[16/9] overflow-hidden flex items-center justify-center shrink-0">
            {isVideo && item.videoUrl ? (
              <video
                src={item.videoUrl}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
                poster={item.thumbnail}
              />
            ) : (
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Details Content Container */}
          <div className="p-5 sm:p-8 md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-brand-orange text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                  {item.category}
                </span>
                <span className="text-xs text-white/60 font-semibold">
                  Client: <strong className="text-white">{item.client}</strong>
                </span>
              </div>

              <span className="text-xs font-mono text-brand-orange font-bold">
                {item.industry}
              </span>
            </div>

            <h2 className="font-display text-xl sm:text-3xl md:text-4xl font-black uppercase text-white mb-3 sm:mb-4">
              {item.title}
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-brand-cream/80 leading-relaxed mb-6 font-normal">
              {item.description}
            </p>

            {/* Metrics if available */}
            {item.metrics && item.metrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 mb-6">
                {item.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <span className="text-lg sm:text-2xl font-black font-display text-brand-orange block">
                      {metric.value}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-bold text-white/60 uppercase">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Deliverables & Tags */}
            <div className="mb-6 sm:mb-8">
              <span className="text-[10px] sm:text-xs font-bold text-white/50 uppercase tracking-widest block mb-2.5">
                Project Deliverables & Tags:
              </span>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-white/10">
              <div className="text-xs text-white/60">
                Deliverable: <strong className="text-white">{item.deliverable}</strong>
              </div>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onInquire(item.title);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-brand-orange text-white text-xs font-bold uppercase tracking-wider shadow-orange-glow hover:bg-brand-orange-hover transition-colors flex items-center justify-center gap-2"
              >
                <span>Get Similar Media Made</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
