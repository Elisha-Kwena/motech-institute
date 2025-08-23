import Image from "next/image"
import Link from "next/link"



const exambody=[
    {
        id:1,
        label:"Knec",
        banner:"/images/exams/knec.png",
        link:"https://www.knec.ac.ke/"
    },
    {
        id:2,
        label:"ICM Examination Body",
        banner:"/images/exams/icm.png",
        link:"https://www.icm.education/"
    },
    {
        id:3,
        label:"JP Examination Body",
        banner:"/images/exams/jp.png",
        link:"https://jp-ie.com/"
    },
    {
        id:4,
        label:"Motech Technology Training Institute Exams",
        banner:"/images/exams/motech.png",
        link:"/"
    },
]



export default function ExamBody(){
    return(
        <>
        <section className="w-full flex items-center justify-center gap-2 flex-col bg-white py-10">
            <h1 className="text-black font-extrabold text-2xl">Our Exam Bodies</h1>
            <div className="mt-6 grid grid-cols-4 gap-6">
                {exambody.map(item=>(
                    <Link 
                    key={item.id}
                    className="group"
                    href={item.link}>
                        <div className="w-20 lg:w-40 h-20 lg:h-40 relative flex items-center justify-center">
                            <Image
                            src={item.banner}
                            alt={item.label}
                            fill
                            className="object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 ease-in-out"
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
        </>
    )
}