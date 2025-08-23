import { 
  AcademicCapIcon,  
  BookOpenIcon,   
  ChartBarIcon,    
  DocumentTextIcon,  
  // Keep these alternatives handy in case they match your screenshot better:
  UserGroupIcon,   
  TrophyIcon,        
  CheckBadgeIcon,     
  BuildingLibraryIcon 
} from '@heroicons/react/24/outline';


const features = [
  {
    icon: UserGroupIcon,
    title: 'Trending Courses',
    description: 'Explore cutting-edge programs in AI, Data Science, and Sustainable Engineering designed for tomorrow\'s job market.'
  },
  {
    icon: BookOpenIcon,
    title: 'Books & Library',
    description: 'Access 2M+ resources across our digital archives and state-of-the-art library facilities with 24/7 online availability.'
  },
  {
    icon: ChartBarIcon,
    title: 'Career Success',
    description: 'Join the 95% of graduates who secure employment or continue education within 6 months of completion.'
  },
  {
    icon: AcademicCapIcon,
    title: 'Certification',
    description: 'Earn industry-recognized credentials and professional certifications that give you a competitive edge in the workforce.'
  }
];

  export default function HeroCards(){
    return(
        <>
        <div className="w-full grid grid-cols-4 gap-4">
            {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-center shadow-[0_1px_2px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.1)] p-6 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300">
                    {/* Icon Container */}
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <IconComponent className="h-8 w-8 text-blue-600" />
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