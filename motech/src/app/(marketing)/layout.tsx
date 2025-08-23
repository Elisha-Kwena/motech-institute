import { ReactNode } from 'react'
import DesktopNav from '@/components/ui/layout/header/DesktopNav'
import Footer from '@/components/ui/layout/footer/Footer'

interface MarketingLayoutProps{
    children:ReactNode
}

export default function MarketingLayout({children}: MarketingLayoutProps){
    return(
        <>
            <div className="flex flex-col min-h-screen">
                <DesktopNav />
                <main className="w-full flex-1">
                    {/* This is where the page content (e.g., page.tsx) will be injected */}
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}
