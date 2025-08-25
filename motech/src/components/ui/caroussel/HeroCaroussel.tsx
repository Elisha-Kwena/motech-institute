import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const herodata = [
    {
        id:1,
        title:"Shape Your Future Through Experience",
        description:"Become part of our tradition of excellence. Here, you'll find mentors who know your name, friends who become family, and endless opportunities to discover your passions.",
        link:[
            {label:"explore our programs",link:"/programs"},
            {label:"campus life",link:"/campus-life"},
        ],
        banner:"/images/hero/banner1.jpg"
    },
    {
        id:2,
        title:"95% Graduate Employment Rate",
        description:"Get industry-ready with our practical programs and direct pathways to high-demand careers.",
        link:[
            {label:"apply now",link:"/application"},
            {label:"see alumni",link:"/alumni-success"},
        ],
        banner:"/images/hero/banner.jpg"
    }
]

export default function HeroCaroussel() {
  return (
    <>
      <Swiper
        spaceBetween={0} // Changed to 0 for seamless slides
        centeredSlides={true}
        loop={true}
        speed={1000} // Add transition speed
        autoplay={{
          delay: 5000, // 5 seconds delay
          disableOnInteraction: false,
          pauseOnMouseEnter: false, // Continue autoplay on hover
        }}
        pagination={{
          clickable: true,
          dynamicBullets: false, // Better looking pagination
        }}
        // paginatin={false}
        navigation={false}
        modules={[Autoplay, Navigation]}
        className="w-full h-screen" // Changed class for full screen
      >
        {herodata.map(item =>(
            <SwiperSlide key={item.id}>
              <div className="w-full h-full relative z-10">
                {/* Background Image */}
                <div className="w-full h-full absolute top-0 left-0 z-0"> {/* Changed to z-0 */}
                  <Image
                    src={item.banner}
                    alt="hero section banner Image"
                    className="object-cover object-center" // Changed to center
                    fill
                    priority // Add priority for above-the-fold images
                  />
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/40 z-0"></div>
                </div>
                
                {/* Content */}
                <div className="z-20 w-full text-start lg:h-[80vh] h-[45vh] items-start justify-center pt-14 lg:pt-0 relative flex flex-col gap-4 px-4 md:px-40"> {/* Added responsive padding */}
                  <h1 className="text-start font-extrabold uppercase text-white text-xl md:text-5xl ml-0"> {/* Added text-balance and max-width */}
                    {item.title}
                  </h1>
                  <p className="text-lg md:text-xl font-semibold text-start text-white"> {/* Added max-width */}
                    {item.description}
                  </p>
                  <div className="w-full flex items-center justify-start gap-4 lg:mt-8 flex-wrap"> {/* Added flex-wrap */}
                    {item.link.map((path, index) => (
                      <Link 
                        key={path.link} 
                        href={path.link} 
                        className={`text-white capitalize border-2 rounded-md font-bold p-2 md:p-4 transition-all duration-300 ease-in-out hover:scale-105 ${
                          index === 0 
                            ? 'border-blue-600 bg-blue-600 hover:bg-blue-700' 
                            : 'border-white bg-transparent hover:bg-white/20'
                        }`}
                      >
                        {path.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}