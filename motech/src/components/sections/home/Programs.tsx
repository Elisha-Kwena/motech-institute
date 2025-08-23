import ProgramCard from "@/components/ui/cards/ProgramCard"
import { programs } from "@/lib/data/Programs"

export default function Programs(){
    return(
        <>
        <section className="w-full py-12 flex flex-col items-center justify-center bg-white">
            <h1 className="text-5xl font-extrabold capitalize mb-2">Find Your Program</h1>
            <p className="text-xl text-center">Launch your career with our industry-focused programs designed for high-demand fields.</p>
            <div className="w-full grid grid-cols-1 lg:grid-cols-4 mt-10 gap-4 p-4">
                {programs.map((program) => (
                    <ProgramCard key={program.id} program={program}/>
                ))}
            </div>
        </section>
        </>
        
    )
}