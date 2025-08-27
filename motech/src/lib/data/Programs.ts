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
    link: '/academics/business',
    courses: [
      {
        name: 'Business Management',
        levels: ['Certificate', 'Diploma'],
        duration: ['1 year', '1.5 years'],
        examBody: 'KNEC',
        fee: 'Kshs. 15,000 per term'
      },
      {
        name: 'Human Resource Management',
        levels: ['Certificate', 'Diploma'],
        duration: ['1 year', '1.5 years'],
        examBody: 'KNEC',
        fee: 'Kshs. 15,000 per term'
      },
      {
        name: 'Supply Chain Management',
        levels: ['Certificate', 'Diploma'],
        duration: ['1 year', '1.5 years'],
        examBody: 'KNEC',
        fee: 'Kshs. 15,000 per term'
      },
      {
        name: 'Sales & Marketing',
        levels: ['Certificate', 'Diploma'],
        duration: ['1 year', '1.5 years'],
        examBody: 'KNEC',
        fee: 'Kshs. 15,000 per term'
      },
      {
        name: 'Secretarial Studies',
        levels: ['Certificate', 'Diploma'],
        duration: ['1 year', '1.5 years'],
        examBody: 'KNEC',
        fee: 'Kshs. 15,000 per term'
      },
      {
        name: 'Road Transport Management',
        levels: ['Certificate', 'Diploma'],
        duration: ['1 year', '1.5 years'],
        examBody: 'KNEC',
        fee: 'Kshs. 15,000 per term'
      },
      {
        name: 'Project Management',
        levels: ['Certificate', 'Diploma'],
        duration: ['1 year', '1.5 years'],
        examBody: 'KNEC',
        fee: 'Kshs. 15,000 per term'
      },
      {
        name: 'Maritime Transport Logistics',
        levels: ['Certificate', 'Diploma'],
        duration: ['1 year', '1.5 years'],
        examBody: 'KNEC',
        fee: 'Kshs. 15,000 per term'
      },
      {
        name: 'Banking & Finance',
        levels: ['Certificate', 'Diploma'],
        duration: ['1 year', '1.5 years'],
        examBody: 'KNEC',
        fee: 'Kshs. 15,000 per term'
      },
      {
        name: 'Computer Packages',
        levels: ['N/A'],
        duration: ['1 Month'],
        examBody: 'CISAK Kenya',
        fee: 'Kshs. 4,000'
      },
      {
        name: 'Advanced Excel',
        levels: ['N/A'],
        duration: ['1 Month'],
        examBody: 'CISAK Kenya',
        fee: 'Kshs. 3,500'
      },
    ]
  },
  {
    id: '2',
    title: 'School of Health Sciences',
    slug: 'school-of-health-sciences',
    description: 'Prepare for a rewarding career in healthcare. Our programs combine rigorous theory with practical clinical experience.',
    banner: '/images/programs/health-banner.jpg',
    stats: '100% certification pass rate',
    cta: 'Explore Health Science Programs',
    link: '/academics/health-sciences',
    courses: [
      {
        name: 'Social Work & Community Development',
        levels: ['Certificate', 'Diploma'],
        duration: ['1 year', '2 years'],
        examBody: 'KNEC',
        fee: 'Kshs. 15,000 per term'
      },
      {
        name: 'Nutrition and Dietetics',
        levels: ['Certificate', 'Diploma'],
        duration: ['1 year', '2 years'],
        examBody: 'KNEC',
        fee: 'Kshs. 15,000 per term'
      },
      {
        name: 'Disaster Management',
        levels: ['Diploma'],
        duration: ['18 Months'],
        examBody: 'JPUK',
        fee: 'Kshs. 15,000 per term'
      },
      {
        name: 'Community Health & Development',
        levels: ['Certificate'],
        duration: ['9 Months'],
        examBody: 'JPUK',
        fee: 'Kshs. 15,000 per term'
      },
    ]
  },
  {
    id: '3',
    title: 'School of Engineering',
    slug: 'school-of-engineering',
    description: 'Get hands-on with cutting-edge technology. Our engineering programs focus on practical, innovative solutions to prepare you for the tech-driven future.',
    banner: '/images/programs/engineering-banner.jpg',
    stats: '88% career placement',
    cta: 'Explore Engineering Programs',
    link: '/academics/engineering',
    // Course data for Engineering is not available in the provided brochure.
    courses: [
      {
        name:"Electrical Engineering",
        levels:["Certificate"],
        duration:["2 years"],
        examBody:"KNEC",
        fee: 'Kshs. 15,000 per term'
      }
    ]
  },
  {
    id: '4',
    title: 'School of ICT',
    slug: 'school-of-ict',
    description: 'Dive into the digital world. Learn software development, cybersecurity, data science, and networking from industry experts using the latest technologies.',
    banner: '/images/programs/ict-banner.jpg',
    stats: '95% industry placement',
    cta: 'Explore ICT Programs',
    link: '/academics/ict',
    courses: [
      {
        name: 'Information Communication Technology (ICT)',
        levels: ['Certificate'],
        duration: ['1 year'],
        examBody: 'KNEC',
        fee: 'Kshs. 15,000 per term'
      },
      {
        name: 'Information Technology (IT)',
        levels: ['Diploma', 'Certificate'],
        duration: ['18 Months', '9 Months'],
        examBody: ['KNEC', 'JPUK'],
        fee: 'Kshs. 15,000 per term'
      },
      {
        name: 'Programming',
        levels: ['Diploma', 'Certificate'],
        duration: ['6 Months', '3 Months'],
        examBody: 'ICM',
        fee: 'Kshs. 15,000 per term'
      },
      {
        name: 'Cyber Security',
        levels: ['Diploma'],
        duration: ['6 Months'],
        examBody: 'ICM',
        fee: 'Kshs. 15,000 per term'
      },
      {
        name: 'Computer Repair & Maintenance',
        levels: ['Level 1', 'Level 2', 'Level 3'],
        duration: ['3 Months'],
        examBody: 'N/A',
        fee: ['Kshs. 10,000 per month', 'Kshs. 12,000 per month', 'Kshs. 14,000 per month'],
        totalFee: 'Kshs. 30,000'
      },
      {
        name: 'Computer Networking',
        levels: ['N/A'],
        duration: ['3 Months'],
        examBody: 'N/A',
        fee: 'Kshs. 10,000 per month',
        totalFee: 'Kshs. 30,000'
      },
      {
        name: 'Software Engineering Programming',
        levels: ['N/A'],
        duration: ['1 Month'],
        examBody: 'N/A',
        fee: 'Kshs. 15,000'
      },
    ]
  },
  {
    id: '5',
    title: 'School of Hospitality',
    slug: 'school-of-hospitality',
    description: 'Enter the vibrant world of tourism and hotel management. Gain real-world experience in event planning, culinary arts, and luxury guest services.',
    banner: '/images/programs/hospitality-banner.jpg',
    stats: 'Global internship opportunities',
    cta: 'Explore Hospitality Programs',
    link: '/academics/hospitality',
    courses: [
      {
        name: 'Hotel Management',
        levels: ['N/A'],
        duration: ['1.5 Years'],
        examBody: 'N/A',
        fee: 'Kshs. 18,000 per term'
      },
      {
        name: 'Pastry & Bakery',
        levels: ['Certificate'],
        duration: ['3 Months'],
        examBody: 'KNEC',
        fee: 'Kshs. 30,000'
      },
      {
        name: 'Food Production / Food & Beverage',
        levels: ['N/A'],
        duration: ['1.5 Years'],
        examBody: 'N/A',
        fee: 'Kshs. 18,000 per term'
      },
      {
        name: 'International Freight Management',
        levels: ['N/A'],
        duration: ['1 Year'],
        examBody: 'ICM',
        fee: 'Kshs. 18,000 per term'
      },
      {
        name: 'Tour Guiding and Administration',
        levels: ['N/A'],
        duration: ['1 Year'],
        examBody: 'JP',
        fee: 'Kshs. 15,000 per term'
      },
      {
        name: 'Tour Operations & Management',
        levels: ['N/A'],
        duration: ['15 Months'],
        examBody: 'N/A',
        fee: 'Kshs. 15,000 per term'
      },
      {
        name: 'Air Travel & Ticketing',
        levels: ['Level One', 'Level Two'],
        duration: ['9 Months', '6 Months'],
        examBody: 'IATA',
        fee: 'Kshs. 15,000 per term'
      },
      {
        name: 'Airport Operations',
        levels: ['N/A'],
        duration: ['9 Months'],
        examBody: 'KPSGA',
        fee: 'Kshs. 15,000 per term'
      },
      {
        name: 'Cabin Crew',
        levels: ['N/A'],
        duration: ['9 Months'],
        examBody: 'KPSGA',
        fee: 'Kshs. 15,000 per term'
      },
      {
        name: 'Amedeus/Galileo',
        levels: ['N/A'],
        duration: ['3 Months'],
        examBody: 'N/A',
        fee: 'Kshs. 15,000 per term'
      },
    ]
  },
  {
    id: '6',
    title: 'School of Cosmetology',
    slug: 'school-of-cosmetology',
    description: 'Unleash your creativity. Master the art and science of beauty therapy, hairdressing, and skincare in our modern studios with master stylists.',
    banner: '/images/programs/cosmetology-banner.jpg',
    stats: 'Build your portfolio',
    cta: 'Explore Cosmetology Programs',
    link: '/academics/cosmetology',
    // Course data for Cosmetology is not available in the provided brochure.
    courses: []
  },
  {
    id: '7',
    title: 'School of Social Sciences',
    slug: 'school-of-social-sciences',
    description: 'Understand and shape society. Study psychology, community development, and international relations to make a positive impact on communities.',
    banner: '/images/programs/social-sciences-banner.jpg',
    stats: 'Community outreach programs',
    cta: 'Explore Social Science Programs',
    link: '/academics/social-sciences',
    courses: [
      {
        name: 'Social Work & Community Development',
        levels: ['Certificate', 'Diploma'],
        duration: ['1 year', '2 years'],
        examBody: 'KNEC',
        fee: 'Kshs. 15,000 per term'
      },
      {
        name: 'Community Health & Development',
        levels: ['Certificate'],
        duration: ['9 Months'],
        examBody: 'JPUK',
        fee: 'Kshs. 15,000 per term'
      },
      {
        name: 'Nutrition and Dietetics',
        levels: ['Certificate', 'Diploma'],
        duration: ['1 year', '2 years'],
        examBody: 'KNEC',
        fee: 'Kshs. 15,000 per term'
      },
    ]
  },
  {
    id: '8',
    title: 'School of Accounting',
    slug: 'school-of-accounting',
    description: 'Master the language of business. Develop expertise in financial reporting, auditing, and strategic analysis to drive fiscal integrity and guide organizational success.',
    banner: '/images/programs/accounting.jpg',
    stats: 'High CPA exam pass rate',
    cta: 'View Accounting Degrees',
    link: '/academics/accounting',
    // Course data for Accounting is not available in the provided brochure.
    courses: []
  }
];
