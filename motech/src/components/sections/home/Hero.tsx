"use client"
import Link from "next/link"
import Image from "next/image"
import HeroCards from "./HeroCards"
import HeroCaroussel from "@/components/ui/caroussel/HeroCaroussel"
export default function Hero(){
    return(
        <>
        <section className="w-full h-[80vh] relative bg-white">
            {/* <div className="w-full h-full relative">
                <div className="w-full h-full absolute top-0 left-0 z-10">
                    <Image
                    src="/images/hero/banner1.jpg"
                    alt="hero section banner Image"
                    className="object-cover object-top"
                    fill
                    />
                </div>
                <div className="z-10 w-3/4 text-start h-full items-center justify-center relative flex flex-col gap-1 pl-40">
                    <h1 className="text-start font-extrabold uppercase text-blue-800 text-5xl t">Shape Your Future Through Experience</h1>
                    <p className="text-xl font-bold mx-auto text-start text-white">Become part of our tradition of excellence. Here, you'll find mentors who know your name, friends who become family, and endless opportunities to discover your passions.</p>
                    <div className="w-full flex items-center justify-start gap-4 mt-10">
                        <Link href="" className="text-white capitalize border-[2px] border-blue-800 rounded-[4px] font-extrabold bg-blue-800 p-4 transition-all duration-300 ease-in-out hover:translate-y-4 hover:scale-105">Explore our programs</Link>
                        <Link href="" className="text-blue-500 capitalize border-[2px] border-blue-800 rounded-[4px] font-extrabold bg-transparent backdrop-blur-lg p-4 transition-all duration-300 ease-in-out hover:translate-y-4 hover:scale-105">Explore our programs</Link>
                    </div>
                </div>
            </div> */}
            <HeroCaroussel/>
            
            <div className="w-[90%] relative mx-auto h-20 flex items-center justify-center gap-6">
                 <div className="absolute w-full h-40 -top-20 left-0 z-10">
                    <HeroCards/>
                </div>   
            </div>
        </section>
        </>
    )
}