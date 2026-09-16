import type { PortfolioItem } from '../types';

/**
 * ==============================================================================
 * KOMMON STUDIO PORTFOLIO DATA (CENTRALIZED DATA STRUCTURE)
 * ==============================================================================
 *
 * HOW TO REPLACE PLACEHOLDER MEDIA WITH YOUR REAL CLIENT WORK:
 * ------------------------------------------------------------------------------
 * 1. Add your project image files or videos into the `public/portfolio/` folder,
 *    or provide direct CDN / web URLs.
 * 2. Edit each object below:
 *    - `title`: Project title name
 *    - `category`: Select from 'BRAND CONTENT' | 'SOCIAL MEDIA' | 'VIDEO' | 'DESIGN' | 'DIGITAL PROMOTION'
 *    - `thumbnail`: Path to thumbnail (e.g., '/portfolio/brand-stories.jpg' or 'https://...')
 *    - `videoUrl`: Optional path to video (MP4) for video/reel items
 *    - `description`: Overview of the work produced
 * ==============================================================================
 */

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'work-01',
    projectNumber: '01',
    title: 'BRAND STORIES',
    category: 'BRAND CONTENT',
    mediaType: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1400&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-barista-making-a-coffee-4105-large.mp4',
    client: 'Kommon Studio Project',
    industry: 'Brand Identity',
    tags: ['Brand Film', 'Cinematic', 'Visual Storytelling', 'Identity'],
    aspectRatio: '16:9',
    featured: true,
    duration: '0:45',
    deliverable: 'Cinematic Brand Story & Cutdowns',
    description: 'Visual storytelling created to build a stronger brand identity.',
    isPlaceholder: true,
  },
  {
    id: 'work-02',
    projectNumber: '02',
    title: 'SOCIAL MOTION',
    category: 'SOCIAL MEDIA',
    mediaType: 'reel',
    thumbnail: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=900&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-modelling-streetwear-outfits-42861-large.mp4',
    client: 'Kommon Studio Project',
    industry: 'Short-Form Content',
    tags: ['Reels', 'TikTok', 'Vertical Motion', 'Social Edits'],
    aspectRatio: '9:16',
    featured: false,
    duration: '0:30',
    deliverable: 'Short-Form Social Video Suite',
    description: 'Short-form content created to capture attention on social platforms.',
    isPlaceholder: true,
  },
  {
    id: 'work-03',
    projectNumber: '03',
    title: 'PRODUCT SPOTLIGHT',
    category: 'VIDEO',
    mediaType: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-interior-living-room-tour-43288-large.mp4',
    client: 'Kommon Studio Project',
    industry: 'Product Visuals',
    tags: ['Product Promo', 'Lighting', 'Visual Showcase', '3D Motion'],
    aspectRatio: '16:10',
    featured: false,
    duration: '0:40',
    deliverable: 'Promotional Product Showcase',
    description: 'Promotional visuals designed to make products stand out.',
    isPlaceholder: true,
  },
  {
    id: 'work-04',
    projectNumber: '04',
    title: 'CAMPAIGN VISUALS',
    category: 'DESIGN',
    mediaType: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop',
    client: 'Kommon Studio Project',
    industry: 'Creative & Graphics',
    tags: ['Campaign Design', 'Brand Graphics', 'Digital Assets'],
    aspectRatio: '4:5',
    featured: false,
    deliverable: 'Creative Campaign Asset Suite',
    description: 'Creative campaign assets created for digital promotion.',
    isPlaceholder: true,
  },
  {
    id: 'work-05',
    projectNumber: '05',
    title: 'LOCAL IMPACT',
    category: 'DIGITAL PROMOTION',
    mediaType: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-chef-plating-a-gourmet-dish-43301-large.mp4',
    client: 'Kommon Studio Project',
    industry: 'Digital Promotion',
    tags: ['Local Business', 'Targeted Ads', 'Digital Promotion'],
    aspectRatio: '4:3',
    featured: false,
    duration: '0:25',
    deliverable: 'Digital Campaign Assets',
    description: 'Digital content created for businesses reaching local customers.',
    isPlaceholder: true,
  },
  {
    id: 'work-06',
    projectNumber: '06',
    title: 'CREATIVE REELS',
    category: 'VIDEO',
    mediaType: 'reel',
    thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1400&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-training-hard-in-the-gym-40332-large.mp4',
    client: 'Kommon Studio Project',
    industry: 'High-Energy Video',
    tags: ['Reels', 'Social Video', 'Rhythmic Editing', 'High Energy'],
    aspectRatio: '21:9',
    featured: true,
    duration: '0:35',
    deliverable: 'High-Energy Social Reel Suite',
    description: 'High-energy reels designed for modern social platforms.',
    isPlaceholder: true,
  }
];
