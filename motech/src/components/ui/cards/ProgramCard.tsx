import Link from "next/link";
import Image from "next/image";

import { Program } from "@/types/program";

interface ProgramCardProps{
    program:Program;
}

export default function ProgramCard({program}:ProgramCardProps){
    return(
        <>
        <div className="group flex flex-col items-start justify-center rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.1)]">
            <div className="banner w-full h-[250px] relative">
                <Image
                src={program.banner}
                fill
                alt="program banner"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover rounded-t-md"
                />
            </div>
            <div className="w-full flex flex-col p-4 pb-2">
                <h1 className="text-blue-800 font-bold text-xl">{program.title}</h1>
                <p className="text-md text-black">{program.description}</p>
                 <div className="w-full items-center justify-start mt-2  transition-all duration-300">
                    <Link href={`/academics/${program.slug}`} className="text-blue-500 hover:text-red-600 hover:underline">{program.cta}</Link>
                </div>
            </div>
           
            
        </div>
        </>
    )
}







