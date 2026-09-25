import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStatement } from './components/BrandStatement';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Services } from './components/Services';
import { CustomerJourney } from './components/CustomerJourney';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import type { PortfolioItem } from './types';
import { scrollToSection } from './utils/scrollUtils';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('');

  const scrollToContact = (serviceName?: string) => {
    if (serviceName) setPreselectedService(serviceName);
    scrollToSection('contact', true);
  };

  const showreelItem: PortfolioItem = {
    id: 'showreel-master',
    projectNumber: '00',
    title: 'Kommon Studio Master Showreel 2026',
    category: 'VIDEO',
    mediaType: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-modelling-streetwear-outfits-42861-large.mp4',
    client: 'Kommon Studio',
    industry: 'Creative Media & Promotion',
    tags: ['Master Showreel', 'Promotional Videos', 'Reels', 'Brand Films'],
    aspectRatio: '16:9',
    duration: '01:15',
    deliverable: '2026 Studio Reel',
    description: 'A compilation showcasing high-retention video editing, promotional commercials, brand films, and creative digital assets created by Kommon Studio.',
  };

  return (
    <div className="relative min-h-screen bg-[#0C2230] text-brand-charcoal font-sans selection:bg-brand-orange selection:text-white">
      {/* Magnetic Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar onOpenContact={() => scrollToContact()} />

      {/* Main Single-Page Sections */}
      <main>
        {/* Hero Section (#home) */}
        <Hero
          onOpenShowreel={() => setShowreelOpen(true)}
          onOpenContact={() => scrollToContact()}
        />

        {/* Business Problem Section */}
        <BrandStatement />

        {/* Selected Work / OUR WORK (#work) */}
        <Portfolio onSelectProject={(item) => setSelectedProject(item)} />

        {/* How We Solve Business Problems - Process (#process) */}
        <Process />

        {/* Services Section (#services) */}
        <Services onSelectService={(service) => scrollToContact(service)} />

        {/* Customer Journey Section */}
        <CustomerJourney />

        {/* Contact Form / Let's Start a Project Together (#contact) */}
        <Contact preselectedService={preselectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Lightbox Modal */}
      {selectedProject && (
        <ProjectModal
          item={selectedProject}
          onClose={() => setSelectedProject(null)}
          onInquire={(title) => scrollToContact(title)}
        />
      )}

      {/* Showreel Lightbox Modal */}
      {showreelOpen && (
        <ProjectModal
          item={showreelItem}
          onClose={() => setShowreelOpen(false)}
          onInquire={(title) => scrollToContact(title)}
        />
      )}
    </div>
  );
};

export default App;
