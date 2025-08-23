"use client"
import Link from "next/link"
import { socialLinks, socialIcons, mainNav } from "@/lib/constants/Navigation"
import { NavItem } from "@/lib/constants/Navigation"
import Logo from "../../Logo"
import NavContact from "../../NavContact"
import { NavItems } from "./NavItems"

export default function DesktopNav(){
    return(
        <>
        <header className="w-full flex flex-col bg-white fixed top-0 left-0 z-50">
            <div className="w-full bg-blue-800 flex ">
                <div className="w-12 bg-white h-8 relative">
                    <div className="absolute w-14 h-8 top-2 -right-8 bg-white rotate-45"></div>
                </div>
                <div className="flex-1 flex items-center justify-between pl-8">
                    <h1 className="text-white font-bold">Join us and be a part of the success</h1>
                    <div className="flex items-center justify-between gap-2 pr-20">
                      {socialLinks.map((link: NavItem) => {
                        // Get the icon component from the socialIcons map using the link title
                        const IconComponent = socialIcons[link.title];

                        return (
                          <Link
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center"
                            aria-label={`Follow us on ${link.title}`}
                          >
                            <span className="sr-only">{link.title}</span>
                            {/* Render the icon if found in the map */}
                            {IconComponent ? (
                              <IconComponent className="h-5 w-5 text-white" />
                            ) : (
                              // Fallback to the first letter if no icon is found
                              <span className="text-xs font-medium">{link.title.charAt(0)}</span>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                </div>
            </div>
            <div className="w-[90%] mx-auto flex items-center justify-between py-1">
                <Logo/>
                <div className="flex-1">
                    <NavContact/>
                </div>
            </div>
            <div className="w-full p-1 bg-blue-800">
                {/* Navitems here  */}
                <div className="w-[90%] mx-auto">
                    <NavItems items={mainNav} />
                </div>
            </div>
        </header>
        </>
    )
}