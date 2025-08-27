import Image from "next/image";
import Hero from "@/components/sections/home/Hero";
import NewsSection from "@/components/sections/home/News";
import Programs from "@/components/sections/home/Programs";
import Stats from "@/components/sections/home/Stats";
import ExamBody from "@/components/sections/home/Exam";
import Admission from "@/components/sections/home/Admission";
import Subscribe from "@/components/sections/home/Subscribe";
export default function Home() {
  return (
    <>
    <div className="lg:mt-[140px] mt-[100px] w-full">
       <div className="w-full relative">
          <Hero/>
          <NewsSection/>
          <Programs/>
          <Stats/>
          <ExamBody/>
          <Admission/>
          <Subscribe/>
          <div className="fixed top-0 left-0 bottom-0 w-full h-screen -z-10 mt-0">
            <Image
              src="/images/stats/banner.jpg"
              alt="graduating students"
              fill
              sizes="100vw"
              className="object-cover"
              priority={false} // This prevents preload
              loading="lazy"
            />
          </div>
        </div>
    </div>
    </>
  );
}
