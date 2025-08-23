"use client"
import Link from "next/link"
import Image from "next/image"



export default function Admission(){
    return(
        <>
        <section className="w-full flex h-[400px] items-center justify-center flex-col gap-2">
            <div className="w-full h-full relative">
                <div className="absolute w-full h-full top-0 left-0">
                    <Image
                    src="/images/banners/admission.jpg"
                    alt="admission banner"
                    fill
                    className="object-cover object-center"
                    />
                </div>
                <div className="w-full h-full relative z-10 flex flex-col gap-2 items-center justify-center">
                    <h1 className="text-blue-800 text-5xl capitalize font-extrabold">Ready to start your journey?</h1>
                    <p className="text-xl font-bold text-white text-center">Take the next step towards a future filled with knowledge, growth, and endless opportunities.</p>
                    <div className="flex w-full items-center justify-center gap-8 mt-12">
                        <Link 
                        href=""
                        className="bg-blue-800 font-extrabold text-white p-4 px-10 rounded-[3px] transition-all duration-300 ease-in-out hover:scale-120"
                        >Apply Now</Link>
                        <Link 
                        href=""
                        className="font-extrabold text-white border-[2px] border-blue-800 bg-transparent backdrop-blur-md p-4 px-10 rounded-[3px] transition-all duration-300 ease-in-out hover:scale-110"
                        >Check Admission Requirements</Link>
                    </div>
                </div>
            </div>
            
        </section>
        </>
    )
}