// src/lib/data/programs.ts
import { Program } from '@/types/program';

export const programs: Program[] = [
  {
    id: '1',
    title: 'School of Business',
    slug: 'school-of-business',
    description: 'Master the fundamentals of management, finance, and marketing. Develop the strategic thinking and leadership skills needed to excel in the global corporate landscape.',
    banner: '/images/programs/business-banner.jpg', // Business team in meeting
    stats: '92% employment rate',
    cta: 'Explore Business Programs',
    link: '/academics/business'
  },
  {
    id: '2',
    title: 'School of Health Sciences',
    slug: 'school-of-health-sciences',
    description: 'Prepare for a rewarding career in healthcare. Our programs, from nursing to medical lab technology, combine rigorous theory with practical clinical experience.',
    banner: '/images/programs/health-banner.jpg', // Students in lab coats with medical equipment
    stats: '100% certification pass rate',
    cta: 'Explore Health Science Programs',
    link: '/academics/health-sciences'
  },
  {
    id: '3',
    title: 'School of Engineering',
    slug: 'school-of-engineering',
    description: 'Get hands-on with cutting-edge technology. Our engineering programs focus on practical, innovative solutions to prepare you for the tech-driven future.',
    banner: '/images/programs/engineering-banner.jpg', // Students working on robotics/engineering project
    stats: '88% career placement',
    cta: 'Explore Engineering Programs',
    link: '/academics/engineering'
  },
  {
    id: '4',
    title: 'School of ICT',
    slug: 'school-of-ict',
    description: 'Dive into the digital world. Learn software development, cybersecurity, data science, and networking from industry experts using the latest technologies.',
    banner: '/images/programs/ict-banner.jpg', // Students coding in computer lab
    stats: '95% industry placement',
    cta: 'Explore ICT Programs',
    link: '/academics/ict'
  },
  {
    id: '5',
    title: 'School of Hospitality',
    slug: 'school-of-hospitality',
    description: 'Enter the vibrant world of tourism and hotel management. Gain real-world experience in event planning, culinary arts, and luxury guest services.',
    banner: '/images/programs/hospitality-banner.jpg', // Hotel management or culinary arts scene
    stats: 'Global internship opportunities',
    cta: 'Explore Hospitality Programs',
    link: '/academics/hospitality'
  },
  {
    id: '6',
    title: 'School of Cosmetology',
    slug: 'school-of-cosmetology',
    description: 'Unleash your creativity. Master the art and science of beauty therapy, hairdressing, and skincare in our modern studios with master stylists.',
    banner: '/images/programs/cosmetology-banner.jpg', // Student practicing hairdressing or skincare
    stats: 'Build your portfolio',
    cta: 'Explore Cosmetology Programs',
    link: '/academics/cosmetology'
  },
  {
    id: '7',
    title: 'School of Social Sciences',
    slug: 'school-of-social-sciences',
    description: 'Understand and shape society. Study psychology, community development, and international relations to make a positive impact on communities.',
    banner: '/images/programs/social-sciences-banner.jpg', // Students in discussion or community work
    stats: 'Community outreach programs',
    cta: 'Explore Social Science Programs',
    link: '/academics/social-sciences'
  }
];

