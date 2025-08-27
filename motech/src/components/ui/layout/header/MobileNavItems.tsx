// src/components/layout/header/MobileNavItems.tsx
'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { NavItem } from '@/lib/constants/Navigation';

interface MobileNavItemsProps {
  items: NavItem[];
  // New prop to handle closing the sidebar
  toggleSidebar: () => void;
}

export function MobileNavItems({ items, toggleSidebar }: MobileNavItemsProps) {
  const pathname = usePathname();

  return (
    <nav className="flex items-start flex-col justify-start space-x-6 w-full h-full">
      {items.map((item) => {
        return (
          <div
            key={item.href}
            className="relative w-full p-1"
          >
            <div className="flex flex-row items-center w-full">
              <Link
                href={item.href}
             className={clsx(
  'w-full hover:text-gray-200 px-3 py-2 text-sm font-medium transition-colors items-center block',
  { 
    'bg-blue-500 text-white shadow-lg': 
      (item.href === '/' && pathname === '/') || 
      (item.href !== '/' && pathname.startsWith(item.href)) 
  }
)}
                // Call the toggleSidebar function when a link is clicked
                onClick={toggleSidebar}
              >
                {item.title}
              </Link>
            </div>
          </div>
        );
      })}
    </nav>
  );
}