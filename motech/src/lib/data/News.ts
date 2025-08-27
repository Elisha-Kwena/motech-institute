import { NewsArticle } from '@/types/news';

export const newsArticles: NewsArticle[] = [
    {
    id: '1',
    title: 'Admissions ongoing',
    excerpt: 'New courses added in AI, sustainability, and digital arts programs.',
    content: 'Full article content here...',
    imageUrl: '/images/news/banner3.jpg',
    date: '2025-08-27',
    author: 'Registrar Office',
    category: 'Announcements',
    slug: 'spring-registration-open'
  },
  {
    id: '2',
    title: 'College Announces New STEM Research Center',
    excerpt: '$50M investment creates state-of-the-art facilities for innovation and collaboration.',
    content: 'Full article content here...',
    imageUrl: '/images/news/banner1.jpg',
    date: '2025-07-15',
    author: 'John Smith',
    category: 'Campus News',
    slug: 'new-stem-research-center'
  },
  {
    id: '3',
    title: 'Student Team Wins National Robotics Competition',
    excerpt: 'Engineering students take first place against 50 universities nationwide.',
    content: 'Full article content here...',
    imageUrl: '/images/news/banner2.jpg',
    date: '2025-06-10',
    author: 'Sarah Johnson',
    category: 'Student Achievements',
    slug: 'robotics-competition-win'
  },

];