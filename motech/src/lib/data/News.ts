import { NewsArticle } from '@/types/news';

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'University Announces New STEM Research Center',
    excerpt: '$50M investment creates state-of-the-art facilities for innovation and collaboration.',
    content: 'Full article content here...',
    imageUrl: '/images/news/banner1.jpg',
    date: '2024-01-15',
    author: 'John Smith',
    category: 'Campus News',
    slug: 'new-stem-research-center'
  },
  {
    id: '2',
    title: 'Student Team Wins National Robotics Competition',
    excerpt: 'Engineering students take first place against 50 universities nationwide.',
    content: 'Full article content here...',
    imageUrl: '/images/news/banner2.jpg',
    date: '2024-01-10',
    author: 'Sarah Johnson',
    category: 'Student Achievements',
    slug: 'robotics-competition-win'
  },
  {
    id: '3',
    title: 'Spring Semester Registration Now Open',
    excerpt: 'New courses added in AI, sustainability, and digital arts programs.',
    content: 'Full article content here...',
    imageUrl: '/images/news/banner3.jpg',
    date: '2024-01-05',
    author: 'Registrar Office',
    category: 'Announcements',
    slug: 'spring-registration-open'
  }
];