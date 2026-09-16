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
    'Promotional Videos',
    'Reels & Short-Form',
    'Creative Design',
    'Digital Promotion',
    'Social Media Content',
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
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 md:py-32 lg:py-36 bg-brand-cream border-b border-brand-navy/10 relative overflow-hidden bg-grid-pattern scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-12 h-0.5 bg-brand-orange" />
          <span className="text-xs font-black uppercase tracking-[0.25em] text-brand-orange">
            08 — GET IN TOUCH
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Handles */}
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl sm:text-6xl font-black text-brand-navy uppercase tracking-tight leading-[1.02] mb-6">
              LET'S CREATE
              <br />
              <span className="text-brand-orange">SOMETHING GREAT.</span>
            </h2>

            <p className="text-base text-brand-navy/80 leading-relaxed mb-10 font-normal">
              Have a project in mind, need high-converting promotional videos, or want to discuss a complete digital content campaign? Reach out to us directly.
            </p>

            {/* Direct Connect Cards */}
            <div className="space-y-4 mb-10">
              
              {/* Instagram Handle */}
              <a
                href={companyData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white border border-brand-navy/10 flex items-center justify-between group hover:border-brand-orange hover:shadow-card-subtle transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-md">
                    <InstagramIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-brand-orange uppercase tracking-wider block">
                      Instagram Official
                    </span>
                    <span className="font-display font-black text-lg text-brand-navy group-hover:text-brand-orange transition-colors">
                      {companyData.instagramHandle}
                    </span>
                  </div>
                </div>
                <Sparkles className="w-5 h-5 text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* WhatsApp Direct */}
              <a
                href={companyData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white border border-brand-navy/10 flex items-center justify-between group hover:border-green-500 hover:shadow-card-subtle transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-600 text-white flex items-center justify-center shadow-md">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-green-600 uppercase tracking-wider block">
                      Direct WhatsApp
                    </span>
                    <span className="font-display font-black text-lg text-brand-navy">
                      Chat With Studio Team
                    </span>
                  </div>
                </div>
                <Sparkles className="w-5 h-5 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${companyData.email}`}
                className="p-5 rounded-2xl bg-white border border-brand-navy/10 flex items-center justify-between group hover:border-brand-navy hover:shadow-card-subtle transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-navy text-white flex items-center justify-center shadow-md">
                    <Mail className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-brand-navy/60 uppercase tracking-wider block">
                      Studio Inquiry Email
                    </span>
                    <span className="font-display font-black text-base text-brand-navy">
                      {companyData.email}
                    </span>
                  </div>
                </div>
              </a>

            </div>

            <div className="p-6 rounded-2xl bg-brand-navy text-brand-cream border border-white/10">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block mb-2">
                Response Guarantee
              </span>
              <p className="text-xs text-brand-cream/80 leading-relaxed font-normal">
                We review every project request thoroughly and respond within 24 hours with project timelines and scope breakdown.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-brand-navy/10 shadow-2xl relative">
            
            {isSubmitted ? (
              <div className="text-center py-12 animate-fadeIn">
                <div className="w-20 h-20 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <h3 className="font-display text-3xl font-black text-brand-navy uppercase mb-3">
                  INQUIRY RECEIVED!
                </h3>

                <p className="text-base text-brand-navy/70 max-w-md mx-auto mb-8">
                  Thank you for reaching out to Kommon Studio. Our creative team will review your business requirements and contact you shortly.
                </p>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 rounded-full bg-brand-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-orange transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-brand-navy mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3.5 rounded-xl bg-brand-cream/50 border border-brand-navy/15 focus:border-brand-orange focus:bg-white focus:outline-none transition-all text-sm font-medium text-brand-navy"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-brand-navy mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Velvet Bean Cafe"
                      className="w-full px-4 py-3.5 rounded-xl bg-brand-cream/50 border border-brand-navy/15 focus:border-brand-orange focus:bg-white focus:outline-none transition-all text-sm font-medium text-brand-navy"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-brand-navy mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@business.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-brand-cream/50 border border-brand-navy/15 focus:border-brand-orange focus:bg-white focus:outline-none transition-all text-sm font-medium text-brand-navy"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-brand-navy mb-2">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3.5 rounded-xl bg-brand-cream/50 border border-brand-navy/15 focus:border-brand-orange focus:bg-white focus:outline-none transition-all text-sm font-medium text-brand-navy"
                    />
                  </div>
                </div>

                {/* Service Picker Tags */}
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-brand-navy mb-3">
                    What do you need? (Select all that apply)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availableServices.map((service) => {
                      const isSelected = formData.services.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-all duration-200 border ${
                            isSelected
                              ? 'bg-brand-orange text-white border-brand-orange shadow-orange-glow'
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
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-brand-navy mb-2">
                    Project Overview & Goals
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your business, upcoming launch, video vision, or promotion targets..."
                    className="w-full px-4 py-3.5 rounded-xl bg-brand-cream/50 border border-brand-navy/15 focus:border-brand-orange focus:bg-white focus:outline-none transition-all text-sm font-medium text-brand-navy resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-brand-navy text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-3 shadow-navy-glow hover:bg-brand-orange hover:text-white transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Processing Inquiry...</span>
                  ) : (
                    <>
                      <span>SEND ENQUIRY</span>
                      <Send className="w-4 h-4 text-brand-orange group-hover:text-white" />
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
