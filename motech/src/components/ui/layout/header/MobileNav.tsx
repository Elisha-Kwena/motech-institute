// src/components/ui/layout/header/MobileNav.tsx
'use client';
import clsx from 'clsx';
import { MobileNavItems } from "./MobileNavItems";
import { mainNav } from "@/lib/constants/Navigation";
import { NavItem } from "@/lib/constants/Navigation";

interface MobileNavProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

export default function MobileNav({ sidebarOpen, toggleSidebar }: MobileNavProps) {
  return(
    <>
      <div
        className={clsx(
          "lg:hidden fixed w-full h-full top-24 left-0 bg-black/70 z-50 flex items-start justify-end transition-transform duration-300 ease-in-out",
          {
            "translate-x-0": sidebarOpen,
            "translate-x-full": !sidebarOpen,
          }
        )}
        onClick={toggleSidebar}
      >
        <div
          className="relative w-[60%] h-[90vh] bg-gray-200 z-50 pl-1"
          onClick={(e) => e.stopPropagation()}
        >
          <MobileNavItems items={mainNav} toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </>
  );
}