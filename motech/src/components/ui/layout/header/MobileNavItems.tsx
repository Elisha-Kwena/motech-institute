// // src/components/layout/header/NavItems.tsx
// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { NavItem } from '@/lib/constants/Navigation';

// interface NavItemsProps {
//   items: NavItem[];
// }

// export function MobileNavItems({ items }: NavItemsProps) {
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);

//   const handleMouseEnter = (href: string) => {
//     setOpenDropdown(href);
//   };

//   const handleMouseLeave = () => {
//     setOpenDropdown(null);
//   };

//   return (
//     <nav className="flex items-start flex-col justify-start space-x-6 w-full h-full">
//       {items.map((item) => {
//         const hasSubitems = item.subitems && item.subitems.length > 0;
//         const isOpen = openDropdown === item.href;

//         return (
//           <div
//             key={item.href}
//             className="relative group"
//             onMouseEnter={() => handleMouseEnter(item.href)}
//             onMouseLeave={handleMouseLeave}
//           >
//             {/* Main Navigation Link */}
//             <Link
//               href={item.href}
//               className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition-colors flex items-center"
//             >
//               {item.title}
//               {hasSubitems && (
//                 <svg
//                   className="ml-1 h-4 w-4 transition-transform"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               )}
//             </Link>

//             {/* Dropdown Menu */}
//             {hasSubitems && isOpen && (
//               <div className="relative top-8 left-0 mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
//                 <div className="p-2">
//                   {item.subitems?.map((subitem) => (
//                     <Link
//                       key={subitem.href}
//                       href={subitem.href}
//                       target={subitem.external ? '_blank' : '_self'}
//                       rel={subitem.external ? 'noopener noreferrer' : undefined}
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
//                       onClick={() => setOpenDropdown(null)}
//                     >
//                       <div className="font-medium">{subitem.title}</div>
//                       {subitem.description && (
//                         <p className="text-xs text-gray-500 mt-1">
//                           {subitem.description}
//                         </p>
//                       )}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </nav>
//   );
// }