import type { ProcessStep, WhyReason } from '../types';

export const companyData = {
  name: 'KOMMON STUDIO',
  tagline: 'Creative Media & Digital Promotion',
  heroHeadline: 'WE CREATE.\nYOU GET NOTICED.',
  heroSubtitle: 'Creative content, promotional videos and digital experiences that help businesses stand out.',
  brandStatement: 'WE DON\'T JUST CREATE CONTENT.\nWE CREATE ATTENTION.',
  brandStatementSub: 'From a single idea to a complete digital campaign, Kommon Studio helps businesses turn their stories into content people remember.',
  instagramHandle: '@kommon_studio',
  instagramUrl: 'https://instagram.com/kommon_studio',
  whatsappUrl: 'https://wa.me/?text=Hi%20Kommon%20Studio%2C%20I%20want%20to%20start%20a%20project%20for%20my%20business.',
  email: 'hello@kommonstudio.com',
  location: 'Creative Studio & Digital Agency',
};

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'UNDERSTAND',
    subtitle: 'Business, Audience & Goals',
    description: 'We dive deep into your business model, customer psychology, and brand vision to identify what makes your brand unique.',
    keyDeliverable: 'Creative Brief & Content Strategy'
  },
  {
    number: '02',
    title: 'CREATE',
    subtitle: 'Direction & Production',
    description: 'We develop the high-end creative direction, script high-retention concepts, and produce visual assets and video cuts.',
    keyDeliverable: 'Master Video Cuts & Creative Assets'
  },
  {
    number: '03',
    title: 'PROMOTE',
    subtitle: 'Audience Reach & Launch',
    description: 'We package the content with high-converting hooks and distribute it through targeted digital campaigns and organic channels.',
    keyDeliverable: 'Campaign Execution & Multi-Channel Distribution'
  },
  {
    number: '04',
    title: 'GROW',
    subtitle: 'Optimization & Scaling',
    description: 'We track engagement metrics, refine creative angles, and continuously elevate your digital presence to keep your brand top-of-mind.',
    keyDeliverable: 'Growth Analytics & Retainer Iterations'
  }
];

export const whyReasons: WhyReason[] = [
  {
    number: '01',
    title: 'Creative Thinking',
    description: 'We avoid generic stock visual cliches. Every video cut, layout, and graphic is crafted to be visually captivating and distinct.',
    badge: 'Artistic Identity'
  },
  {
    number: '02',
    title: 'Business Understanding',
    description: 'We create content that serves business goals — whether driving footfall, generating online leads, or building brand equity.',
    badge: 'ROI Focused'
  },
  {
    number: '03',
    title: 'Engaging Content',
    description: 'Mastery of short-form retention mechanics, kinetic typography, and fast-paced editing keeps audiences watching to the end.',
    badge: 'High Retention'
  },
  {
    number: '04',
    title: 'Digital-First Approach',
    description: 'Designed natively for Instagram, TikTok, Meta Ads, and mobile screens where your customers spend their daily attention.',
    badge: 'Mobile Native'
  },
  {
    number: '05',
    title: 'Consistent Brand Identity',
    description: 'We build a cohesive aesthetic language across all platforms so every piece of content strengthens your main brand image.',
    badge: 'Visual Harmony'
  },
  {
    number: '06',
    title: 'Audience-Focused Promotion',
    description: 'We ensure your content reaches the right audience at the right moment with compelling calls to action.',
    badge: 'Growth Engine'
  }
];
