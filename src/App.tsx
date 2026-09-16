import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { BrandStatement } from './components/BrandStatement';
import { Services } from './components/Services';
import { Industries } from './components/Industries';
import { Portfolio } from './components/Portfolio';
import { ProjectModal } from './components/ProjectModal';
import { FeaturedVideo } from './components/FeaturedVideo';
import { About } from './components/About';
import { Process } from './components/Process';
import { WhyKommon } from './components/WhyKommon';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import type { PortfolioItem } from './types';
import { scrollToSection } from './utils/scrollUtils';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('');

  const scrollToContact = (serviceName?: string) => {
    if (serviceName) setPreselectedService(serviceName);
    scrollToSection('contact');
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
    industry: 'Media & Digital Agency',
    tags: ['Master Showreel', 'Promotional Videos', 'Reels', 'Brand Films'],
    aspectRatio: '16:9',
    duration: '01:15',
    deliverable: '2026 Reel Compilation',
    description: 'A compilation showcasing high-retention video editing, promotional commercials, brand films, and social media assets created by Kommon Studio.',
  };

  return (
    <div className="relative min-h-screen bg-brand-cream text-brand-charcoal font-sans selection:bg-brand-orange selection:text-white">
      {/* Magnetic Desktop Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar onOpenContact={() => scrollToContact()} />

      {/* Main Page Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenShowreel={() => setShowreelOpen(true)}
          onOpenContact={() => scrollToContact()}
        />

        {/* Brand Marquee */}
        <Marquee />

        {/* Editorial Brand Statement & About Studio (#about) */}
        <BrandStatement />
        <About />

        {/* 01-06 Services Section (#services) */}
        <Services onSelectService={(service) => scrollToContact(service)} />

        {/* Selected Work Portfolio (#work) */}
        <Portfolio onSelectProject={(item) => setSelectedProject(item)} />

        {/* Who We Work With / Industries (#industries) */}
        <Industries onSelectCategory={(cat) => scrollToContact(cat)} />

        {/* Featured Video Showreel Section */}
        <FeaturedVideo onOpenShowreel={() => setShowreelOpen(true)} />

        {/* 01 Understand -> 04 Grow Workflow Process */}
        <Process />

        {/* Why Kommon Studio Differentiators */}
        <WhyKommon />

        {/* Vibrant Orange High-Impact CTA Banner */}
        <CTA onOpenContact={() => scrollToContact()} />

        {/* Contact & Inquiry Form (#contact) */}
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

      {/* Showreel Modal */}
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
