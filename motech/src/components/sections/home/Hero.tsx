"use client"                                                                                                                                                                                                                                                                                           
import HeroCards from "./HeroCards"
import HeroCaroussel from "@/components/ui/caroussel/HeroCaroussel"
export default function Hero(){
    return(
        <>
        <section className="w-full relative mt-0 ">
            <HeroCaroussel/>
            <div className="w-full lg:w-[90%] relative mx-auto lg:h-48 flex items-center justify-center gap-6">
                 <div className="lg:absolute block w-full lg:h-40 -top-20 left-0 z-10 lg:p-0 px-4 lg:bg-transparent bg-blue-800/50 py-6">
                    <HeroCards/>
                </div>   
            </div>
        </section>
        </>
    )
}