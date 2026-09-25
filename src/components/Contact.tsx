import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Mail, Sparkles } from 'lucide-react';
import { companyData } from '../data/companyData';
import { InstagramIcon } from './InstagramIcon';
import type { ContactFormData } from '../types';

interface ContactProps {
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    services: preselectedService ? [preselectedService] : ['Promotional Videos'],
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableServices = [
    'Creative Design',
    'Video Editing',
    'Promotional Videos',
    'Social Media Content',
    'Digital Promotion',
    'Brand Content',
  ];

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section 
      id="contact" 
      className="py-16 sm:py-20 lg:py-24 bg-brand-cream border-b border-brand-navy/15 relative overflow-hidden bg-noise scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 relative z-10">
        
        {/* Responsive 2-Column Grid (45% / 55% Desktop Ratio) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start">
          
          {/* Left Column: Headline & Direct Contact CTAs */}
          <div className="lg:col-span-5 min-w-0 w-full max-w-[540px]">
            <h2 className="font-display heading-section text-brand-navy uppercase mb-5 max-w-[540px]">
              LET'S START A PROJECT <span className="text-brand-orange">TOGETHER.</span>
            </h2>

            <p className="text-lg sm:text-xl text-brand-navy/80 font-sans font-normal leading-relaxed mb-6 max-w-[500px]">
              Tell us what business problem you are trying to solve — visibility, content, promotion or reaching customers. Let's find a creative way forward.
            </p>

            {/* Direct Connect Cards */}
            <div className="space-y-3 mb-6 sm:mb-8 max-w-[500px]">
              
              {/* WhatsApp */}
              <a
                href={companyData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 sm:p-4 rounded-xl bg-white border border-brand-navy/10 flex items-center justify-between group hover:border-green-600 hover:shadow-card-subtle transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-green-600 text-white flex items-center justify-center shadow-sm shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-extrabold text-green-600 uppercase tracking-wider block">
                      WHATSAPP DIRECT
                    </span>
                    <span className="font-display font-black text-lg sm:text-xl text-brand-navy leading-none">
                      CHAT WITH STUDIO TEAM
                    </span>
                  </div>
                </div>
                <Sparkles className="w-4 h-4 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </a>

              {/* Instagram */}
              <a
                href={companyData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 sm:p-4 rounded-xl bg-white border border-brand-navy/10 flex items-center justify-between group hover:border-brand-orange hover:shadow-card-subtle transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-navy text-brand-orange flex items-center justify-center shadow-sm shrink-0">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-extrabold text-brand-orange uppercase tracking-wider block">
                      INSTAGRAM
                    </span>
                    <span className="font-mono font-medium text-xs sm:text-sm text-brand-navy group-hover:text-brand-orange transition-colors leading-none lowercase">
                      {companyData.instagramHandle}
                    </span>
                  </div>
                </div>
                <Sparkles className="w-4 h-4 text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${companyData.email}`}
                className="p-3.5 sm:p-4 rounded-xl bg-white border border-brand-navy/10 flex items-center justify-between group hover:border-brand-navy hover:shadow-card-subtle transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-navy text-white flex items-center justify-center shadow-sm shrink-0">
                    <Mail className="w-4 h-4 text-brand-orange" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-extrabold text-brand-navy/60 uppercase tracking-wider block">
                      EMAIL INQUIRY
                    </span>
                    <span className="font-display font-black text-base sm:text-lg text-brand-navy leading-none">
                      {companyData.email}
                    </span>
                  </div>
                </div>
              </a>

            </div>

          </div>

          {/* Right Column: Compact Inquiry Form */}
          <div className="lg:col-span-7 min-w-0 w-full flex lg:justify-end">
            <div className="w-full max-w-[600px] bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 lg:p-8 border border-brand-navy/15 shadow-lg relative">
              
              {isSubmitted ? (
                <div className="text-center py-8 sm:py-10">
                  <div className="w-16 h-16 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="font-display text-3xl font-black text-brand-navy uppercase mb-2">
                    INQUIRY RECEIVED!
                  </h3>

                  <p className="text-sm text-brand-navy/80 max-w-xs mx-auto mb-6 font-normal">
                    Thank you for reaching out to Kommon Studio. We will review your message and get back to you shortly.
                  </p>

                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 rounded-full bg-brand-navy text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-brand-orange transition-colors"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-4.5">
                  
                  {/* Name & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-brand-cream/40 border border-brand-navy/15 focus:border-brand-orange focus:bg-white focus:outline-none transition-all text-xs font-medium text-brand-navy"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Velvet Bean Cafe"
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-brand-cream/40 border border-brand-navy/15 focus:border-brand-orange focus:bg-white focus:outline-none transition-all text-xs font-medium text-brand-navy"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@business.com"
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-brand-cream/40 border border-brand-navy/15 focus:border-brand-orange focus:bg-white focus:outline-none transition-all text-xs font-medium text-brand-navy"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-brand-cream/40 border border-brand-navy/15 focus:border-brand-orange focus:bg-white focus:outline-none transition-all text-xs font-medium text-brand-navy"
                      />
                    </div>
                  </div>

                  {/* Services Pick */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-brand-navy mb-2">
                      Services Needed
                    </label>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {availableServices.map((service) => {
                        const isSelected = formData.services.includes(service);
                        return (
                          <button
                            key={service}
                            type="button"
                            onClick={() => toggleService(service)}
                            className={`px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-mono font-bold uppercase transition-all duration-200 border ${
                              isSelected
                                ? 'bg-brand-orange text-white border-brand-orange shadow-sm'
                                : 'bg-brand-cream/60 text-brand-navy/80 border-brand-navy/15 hover:border-brand-orange'
                            }`}
                          >
                            {service}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                      Business Goals / Message
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what business problem you're trying to solve (visibility, content, promotion, reaching customers)..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-brand-cream/40 border border-brand-navy/15 focus:border-brand-orange focus:bg-white focus:outline-none transition-all text-xs font-medium text-brand-navy resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full bg-brand-navy text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-md hover:bg-brand-orange transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <span>SUBMIT INQUIRY</span>
                        <Send className="w-3.5 h-3.5 text-brand-orange" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


