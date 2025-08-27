"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import Contact from "./Contact"
import { footerNav } from "@/lib/constants/Footer"
import { socialLinks, socialIcons } from "@/lib/constants/Navigation"
import { NavItem } from "@/lib/constants/Navigation"
import { legalLinks } from "@/lib/constants/Navigation"
export default function Footer (){
    const [currentYear,setCurrentYear] = useState(new Date().getFullYear())
    return(
        <footer className="w-full py-10 bg-blue-950">
            <div className="w-[95%] mx-auto flex flex-col gap-2">
                <div className="top w-full grid grid-cols-1 lg:grid-cols-4 gap-8 border-b-[2px] border-gray-300 pb-10">
                        <div className="flex flex-col items-start justify-start gap-2">
                            <Link href="/" className="w-full flex items-center justify-start gap-2">
                                <div className="w-16 h-16 relative flex items-center justify-center">
                                    <Image
                                    src="/logo.png"
                                    alt="motech technology training institute logo"
                                    fill
                                    className="object-contain"
                                    />
                                </div>
                                <div className="flex flex-col items-start justify-start">
                                    <h1 className="text-md text-white uppercase font-extrabold">motech technology</h1>
                                    <h1 className="text-md text-white uppercase font-extrabold">training institute</h1>
                                </div>
                            </Link>
                            <p className="text-white text-start text-md">A TVETA-accredited college in Nairobi offering industrial aigned CBET programs in Business, ICT, Hospitality, Engineering and more.l</p>

                            <div className="w-full flex-col my-4">
                                 <h1 className="text-2xl font-extrabold text-white">Connect With Us</h1>
                                <div className="mt-2 flex items-center justify-start gap-4">
                                    {socialLinks.map((link: NavItem) => {
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
                            <Contact/>
                        </div>
                        
                          {footerNav.map((item, index)=>(
                                <div key={index} className="flex flex-col gap-1 items-start justify-start ml-8">
                                    <h1 className="text-xl font-extrabold text-white">{item.title}</h1>
                                    {item.links.map((link,index) =>(
                                        <Link key={index} href={link.href} className="group transition-all duration-300 ease-in-out hover:translate-x-2 hover:text-red-600 text-gray-400 text-md flex items-center justify-start gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                            </svg>
                                            {link.title}
                                        </Link>
                                    ))}
                                </div>
                            ))}
                </div>
                <div className="w-full flex-col gap-2">
                    <div className="flex items-center justify-center gap-4 mt-4">
                        {legalLinks.map((link,index)=>(
                            <Link 
                            key={index} 
                            href={link.href}
                            className="text-sm text-gray-300 hover:text-red-600"
                            >{link.title}</Link>
                        ))}
                    </div>
                    <p className="w-full text-black font-extrabold text-sm mt-2 text-center">Copyright &copy; {currentYear} Motech Technology Training Institute. All rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}