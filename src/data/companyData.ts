import type { ProcessStep, WhyReason } from '../types';

export const companyData = {
  name: 'KOMMON STUDIO',
  tagline: 'Creative Media & Digital Promotion',
  heroHeadline: 'WE CREATE.\nYOU GET NOTICED.',
  heroSubtitle: 'Creative content and digital promotion that help businesses attract attention, reach customers and grow their brand.',
  businessProblemHeading: 'YOUR BUSINESS HAS A STORY.\nLET\'S MAKE PEOPLE NOTICE IT.',
  businessProblemSub: 'Great products and services need more than visibility. They need the right story, the right content and the right audience.',
  aboutHeading: 'WE DON\'T JUST MAKE CONTENT.\nWE MAKE YOUR BUSINESS EASIER TO NOTICE.',
  aboutParagraph: 'Kommon Studio is a creative media and digital promotion studio helping businesses communicate their value through design, video, social media content and digital campaigns.',
  aboutHighlights: ['CONTENT', 'CREATIVE', 'PROMOTION', 'BRAND MEDIA'],
  processHeading: 'FROM PROBLEM TO PROMOTION.',
  finalCtaHeading: 'WHAT\'S YOUR BUSINESS\nTRYING TO SOLVE?',
  finalCtaSub: 'Tell us what you\'re struggling with — visibility, content, promotion or reaching customers. Let\'s find a creative way forward.',
  customerJourneySub: 'We create the content and promotion that helps move people from discovering your brand to taking the next step.',
  instagramHandle: '@kommon_studio',
  instagramUrl: 'https://instagram.com/kommon_studio',
  whatsappUrl: 'https://wa.me/?text=Hi%20Kommon%20Studio%2C%20I%20want%20to%20start%20a%20project%20for%20my%20business.',
  email: 'hello@kommonstudio.com',
  location: 'Creative Studio & Digital Agency',
};

export const businessProblems = [
  {
    number: '01',
    question: 'NOT GETTING ENOUGH ATTENTION?',
    solution: 'Create content that makes people stop scrolling.',
  },
  {
    number: '02',
    question: 'PEOPLE DON\'T KNOW YOUR BRAND?',
    solution: 'Build a stronger and more memorable digital presence.',
  },
  {
    number: '03',
    question: 'YOUR PRODUCT NEEDS MORE REACH?',
    solution: 'Show it through engaging promotional content.',
  },
  {
    number: '04',
    question: 'SOCIAL MEDIA FEELS INCONSISTENT?',
    solution: 'Create a consistent content system around your brand.',
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'UNDERSTAND',
    subtitle: 'Business, Audience & Goals',
    description: 'We understand your business, audience and goals.',
    keyDeliverable: 'Creative Brief & Content Strategy'
  },
  {
    number: '02',
    title: 'CREATE',
    subtitle: 'Direction & Production',
    description: 'We turn your idea into compelling visual content.',
    keyDeliverable: 'Master Video Cuts & Creative Assets'
  },
  {
    number: '03',
    title: 'PROMOTE',
    subtitle: 'Audience Reach & Launch',
    description: 'We help distribute your content through digital and social channels.',
    keyDeliverable: 'Multi-Channel Distribution'
  },
  {
    number: '04',
    title: 'GROW',
    subtitle: 'Optimization & Iteration',
    description: 'We continuously improve the creative direction around your business needs.',
    keyDeliverable: 'Creative Iterations'
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
    description: 'We create content that serves business goals — attracting attention and building brand equity.',
    badge: 'Goal Focused'
  },
  {
    number: '03',
    title: 'Engaging Content',
    description: 'Mastery of short-form retention mechanics, kinetic typography, and fast-paced editing keeps audiences watching.',
    badge: 'High Retention'
  },
  {
    number: '04',
    title: 'Digital-First Approach',
    description: 'Designed natively for Instagram, TikTok, Meta Ads, and mobile screens where your customers spend their daily attention.',
    badge: 'Mobile Native'
  }
];

