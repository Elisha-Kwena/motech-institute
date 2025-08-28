// src/components/sections/NewsSection.tsx
import Link from 'next/link';
import { newsArticles } from '@/lib/data/News';
import NewsCard from '@/components/ui/cards/NewsCard';
import TourVideo from './TourVideo';

interface NewsSectionProps {
  limit?: number;
  showViewAll?: boolean;
  title?: string;
  description?: string;
}

export default function NewsSection({ 
  limit = 3, 
  showViewAll = true,
  title = "College News & Events",
  description = "Stay updated with the latest happenings, achievements, and announcements from our university community."
}: NewsSectionProps) {
  const featuredNews = newsArticles.slice(0, limit);

  return (
    <section className="bg-white w-full block">
      <div className="container-div mx-auto px-4 pt-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* News Grid - USING NewsCard COMPONENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredNews.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>

        {/* View All Button */}
        {showViewAll && (
          <div className="text-center">
            <Link
              href="/news"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              View All News
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </div>

      {/* Video Tour */}
      <TourVideo/>
    </section>
  );
}

// Optional: Component for loading state
// export function NewsSectionSkeleton() {
//   return (
//     <section className="py-16 bg-gray-50 mt-40">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <div className="h-10 bg-gray-300 rounded mx-auto w-1/3 mb-4"></div>
//           <div className="h-6 bg-gray-300 rounded mx-auto w-1/2"></div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {[1, 2, 3].map((i) => (
//             <NewsCardSkeleton key={i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }