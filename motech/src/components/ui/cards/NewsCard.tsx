// src/components/news/NewsCard.tsx
import Link from 'next/link';
import { NewsArticle } from '@/types/news';
import Image from 'next/image';

interface NewsCardProps {
  article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="aspect-video w-full h-[250px] relative">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="w-full h-full object-cover"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 text-sm rounded-full">
            {article.category}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Date */}
        <time className="text-sm text-gray-500 block mb-2">
          {new Date(article.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
        
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
          <Link href={`/news/${article.slug}`}>
            {article.title}
          </Link>
        </h3>
        
        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        
        {/* Author and Read More */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">By {article.author}</span>
          <Link
            href={`/news/${article.slug}`}
            className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
          >
            Read More
            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}