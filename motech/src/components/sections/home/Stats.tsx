import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChalkboardTeacher, 
  faBook, 
  faUserGraduate, 
  faSchool ,
   faBookReader
} from '@fortawesome/free-solid-svg-icons';

const stats=[
    {
    id:1,
    label:"Schools",
    number:7,
    banner:faSchool
  },
  {
    id:2,
    label:"+ Total Courses",
    number:400,
    banner:faBook
  },
  {
    id:3,
    label:"+ Skilled Lecturers",
    number:750,
    banner:faChalkboardTeacher
  },

  {
    id:4,
    label:"+ Students",
    number:1500,
    banner:faBookReader
  },
  {
    id:5,
    label:"+ Alumni",
    number:1500,
    banner:faUserGraduate
  },
]

export default function Stats(){
    return(
        <>
            <section className="py-14 w-full relative bg-blue-700/30">
            <div className="w-full flex flex-col gap-1 items-center justify-center">
                <h1 className="text-white font-extrabold capitalize text-2xl lg:text-5xl">why</h1>
                <h1 className="text-white font-extrabold capitalize text-2xl lg:text-5xl">Motech technology training institute</h1>
            </div>
                <div className=" w-full lg:h-full grid grid-cold-1 lg:grid-cols-5 gap-10 lg:gap-4 place-items-center items-start pt-6 mt-8">
                    {stats.map(item =>(
                        <div key={item.id} className="group flex items-center justify-center flex-col gap-1 z-10">
                            <div className="banner relative w-28 h-28 bg-blue-800 border-blue-800 rounded-br-[70%] rounded-tl-[30%] rounded-tr-[30%] rounded-bl-[20%] rotate-12 flex items-center justify-center border-[3px]">
                                <div className="banner absolute top-4 -right-2 w-24 h-24  transition-all duration-300 ease-in-out group-hover:top-1 group-hover:right-1 bg-transparent border-[3px] border-white rounded-br-[70%] rounded-tl-[30%] rounded-tr-[30%] rounded-bl-[20%] rotate-10 flex items-center justify-center -z-10"></div>

                                <div className="banner absolute inset-0 bg-blue-800 rounded-br-[70%] rounded-tl-[30%] rounded-tr-[30%] rounded-bl-[20%] flex items-center justify-center p-8">
                                    <FontAwesomeIcon icon={item.banner} className='-rotate-12 text-white text-xl'/>
                                </div>
        
                            </div>
                            <div className="flex items-center justify-center mt-1">
                                <h1 className="group-hover:text-blue-800 text-6xl font-extrabold text-white transition-all duration-300 ease-in-out">{item.number}</h1>
                            </div>
                            <div className="flex items-center justify-center mt-1">
                                <h1 className="text-xl text-white font-extrabold group-hover:text-blue-800 transition-all duration-300 ease-in-out">{item.label}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}