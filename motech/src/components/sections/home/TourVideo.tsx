"use client"

import PlayButton from "@/components/ui/buttons/PlayButton"
import Image from "next/image"
export default function TourVideo(){
    return(
        <>
        <div className="w-full h-[700px] relative mt-20 flex items-center justify-center">
            <div className="absolute w-full h-full top-0 left-0">
                <Image
                src="/images/banners/tour.jpg"
                alt="Tour video banner"
                fill
                className="object-cover object-top"
                />
            </div>
            <div className="overlay-div w-full h-full z-10 absolute top-0 left-0 bg-black/50"></div>
           <div className="w-full flex flex-col items-center justify-center gap-4 h-full z-20">
                {/* <PlayButton/> */}
                <div className="text-center z-20">
                  <h2 className="text-3xl md:text-4xl text-black font-extrabold mb-4">
                    Experience Our Campus Virtually
                  </h2>
                  <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
                    Take a 360° journey through our state-of-the-art facilities, student spaces, 
                    and beautiful campus grounds without leaving your home.
                  </p>
                  <div className="w-full flex items-center justify-center">
                     <PlayButton />
                  </div>
                 
                  <p className="text-sm text-white mt-4">Watch the 3-minute campus tour</p>
                </div>
           </div>
        </div>
        </>
    )
}