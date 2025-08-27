import { programs } from "@/lib/data/Programs";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Update the props interface to handle Promise
interface CoursePageProps {
  params: Promise<{
    schoolId: string;
  }>;
}

// This function is crucial. It tells Next.js which pages to build at a static site.
// It generates a list of all possible slugs from your data.
export async function generateStaticParams() {
  return programs.map((program) => ({
    // The key here must exactly match the folder name, which is `schoolId`.
    schoolId: program.slug,
  }));
}

export default async function CoursePage({ params }: CoursePageProps) {
  // Await the params promise to get the actual values
  const resolvedParams = await params;
  
  // Use the slug from the URL to find the matching program.
  const program = programs.find((p) => p.slug === resolvedParams.schoolId);

  // If no program is found for the given slug, show a 404 page.
  if (!program) {
    notFound();
  }

  return (
    <section className="lg:mt-[140px] mt-[100px] w-full flex flex-col items-center justify-center bg-gray-50 rounded-lg shadow-lg pb-8">
      <div className="w-full relative h-[300px] lg:h-[350px]">
        <div className="w-full h-full absolute top-0 left-0">
          <div className="relative w-full h-full">
            <Image
              src={program.banner}
              alt="school banner"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
        <div className="relative w-full h-full z-10 flex items-center justify-center flex-col gap-4 bg-gray-900/40">
          <div className="flex items-center justify-center gap-4">
            <Link href="/" className="text-white text-lg lg:text-2xl hover:underline hover:text-red-500">Home</Link> 
            <span className="text-5xl text-white"> - </span> 
            <span className="text-blue-200 text-lg lg:text-2xl font-extrabold">{program.title}</span>
          </div>
          <h1 className="text-3xl lg:text-6xl text-blue-200 font-extrabold">{program.title}</h1>
        </div>
      </div>
      <div className="w-full lg:w-[90%] mx-auto mt-10 lg:p-0 px-2">
        <p className="text-lg text-gray-700 max-w-5xl mx-auto text-center mb-8 px-4">{program.description}</p>
        
        {/* courses offered */}
        <div className="w-full bg-white rounded-md p-6 shadow-md border border-gray-200 overflow-x-auto">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Courses Offered:</h2>
          
          {/* courses table */}
          {program.courses && program.courses.length > 0 ? (
            <div className="w-full">
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                    <th className="px-4 py-3 border-b-2 border-gray-200 rounded-tl-lg">Course</th>
                    <th className="px-4 py-3 border-b-2 border-gray-200">Duration</th>
                    <th className="px-4 py-3 border-b-2 border-gray-200">Levels</th>
                    <th className="px-4 py-3 border-b-2 border-gray-200">Exam Body</th>
                    <th className="px-4 py-3 border-b-2 border-gray-200 rounded-tr-lg">Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {program.courses.map((course, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-4 py-3 text-gray-900 font-medium whitespace-nowrap">{course.name}</td>
                      <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
                        {Array.isArray(course.duration) ? course.duration.join(', ') : course.duration || 'N/A'}
                      </td>
                      <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
                        {Array.isArray(course.levels) ? course.levels.join(', ') : course.levels || 'N/A'}
                      </td>
                      <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
                        {Array.isArray(course.examBody) ? course.examBody.join(', ') : course.examBody || 'N/A'}
                      </td>
                      <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
                        {Array.isArray(course.fee) ? course.fee.join(', ') : course.fee || 'N/A'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">
              Course information is not available for this school at the moment.
            </p>
          )}
        </div>
        
        {/* Apply Now Button */}
        <div className="mt-8 flex justify-center">
          <Link 
            href="/apply" 
            className="px-8 py-4 bg-blue-700 text-white font-bold text-lg rounded-full shadow-lg hover:bg-blue-800 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
}