export type MediaCategory =
  | 'ALL'
  | 'BRAND CONTENT'
  | 'SOCIAL MEDIA'
  | 'VIDEO'
  | 'DESIGN'
  | 'DIGITAL PROMOTION';

export interface PortfolioItem {
  id: string;
  projectNumber: string;
  title: string;
  category: Exclude<MediaCategory, 'ALL'>;
  mediaType: 'video' | 'reel' | 'image';
  thumbnail: string;
  videoUrl?: string;
  client: string;
  industry: string;
  tags: string[];
  aspectRatio: '16:9' | '9:16' | '1:1' | '4:3' | '21:9' | '4:5' | '16:10';
  featured?: boolean;
  duration?: string;
  deliverable: string;
  description: string;
  isPlaceholder?: boolean;
  metrics?: { label: string; value: string }[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  icon: string;
  previewImage: string;
  featuredHeadline?: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  tags: string[];
  sampleProject: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyDeliverable: string;
}

export interface WhyReason {
  number: string;
  title: string;
  description: string;
  badge: string;
}

export interface ContactFormData {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  services: string[];
  message: string;
}
