import { 
  AcademicCapIcon,  
  BookOpenIcon,   
  ChartBarIcon,    
  // Keep these alternatives handy in case they match your screenshot better:
  UserGroupIcon,  
} from '@heroicons/react/24/outline';


const features = [
  {
    icon: UserGroupIcon,
    title: 'Trending Courses',
    description: 'Explore cutting-edge programs in AI, Data Science, and Sustainable Engineering designed for tomorrow\'s job market.',
    count:"01"
  },
  {
    icon: BookOpenIcon,
    title: 'Books & Library',
    description: 'Access resources across our digital archives and state-of-the-art library facilities with 24/7 online availability.',
     count:"02"
  },
  {
    icon: ChartBarIcon,
    title: 'Career Success',
    description: 'Be part of our graduate who attain good performance in their level of certification and are of high chances of securing employment upon course completion',
     count:"03"
  },
  {
    icon: AcademicCapIcon,
    title: 'Certification',
    description: 'Earn industry-recognized credentials and professional certifications that give you a competitive edge in the workforce.',
     count:"04"
  }
];

  export default function HeroCards(){
    return(
        <>
        <div className="w-full grid grid-cols-1  lg:grid-cols-4 gap-4">
            {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-center shadow-[0_1px_2px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.1)] p-4  bg-white rounded-lg hover:shadow-lg transition-shadow duration-300">
                    {/* Icon Container */}
                    <div className="flex justify-between w-full mb-4">
                      <div className="flex items-center justify-center">
                        <div
                          className="p-3 bg-blue-800 rounded-full hover:rotate-y-180 transform transition-transform duration-500 [transform-style:preserve-3d]"
                        >
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className=" count flex items-center justify-center absolute -right-0 -top-0 text-5xl font-extrabold 
                [-webkit-text-stroke:2px_blue] [-webkit-text-fill-color:transparent]">{feature.count}</div>
                      </div>
                      
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            {/* {features.map((feature , index) =>(
                 const IconComponent = feature.icon;
                 return(
                    <div 
                    key={index}
                    className="flex p-4 flex-col gap-1 rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.1)]">
                        <div className="flex items-center justify-center">

                        </div>
                    </div>
                 )
            ))} */}
        </div>        
        </>
    )
  }