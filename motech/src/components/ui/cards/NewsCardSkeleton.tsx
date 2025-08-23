// src/components/news/NewsCardSkeleton.tsx
export default function NewsCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="aspect-video bg-gray-300"></div>
      
      {/* Content Skeleton */}
      <div className="p-6">
        <div className="h-4 bg-gray-300 rounded mb-2 w-1/3"></div>
        <div className="h-6 bg-gray-300 rounded mb-3 w-4/5"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-4/6"></div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/5"></div>
        </div>
      </div>
    </div>
  );
}