// src/app/MarketingLayout.tsx
'use client';
import { useState } from 'react';
import { ReactNode } from 'react';
import DesktopNav from '@/components/ui/layout/header/DesktopNav';
import Footer from '@/components/ui/layout/footer/Footer';
import MobileNav from '@/components/ui/layout/header/MobileNav'; // Import the MobileNav

interface MarketingLayoutProps {
  children: ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Pass the state and toggle function to both nav components */}
        <DesktopNav sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="relative w-full flex-1">
          {/* MobileNav needs state and the function */}
          <MobileNav sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}