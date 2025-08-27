
import Link from "next/link";

export default function AcademicsPage() {
  return (
    <section className="lg:mt-[140px] mt-[100px] w-full flex flex-col items-center justify-center p-8 bg-gray-50 pb-8">
      {/* Navigation */}
      <nav className="w-full max-w-6xl mx-auto mb-12">
        <ul className="flex flex-wrap justify-center gap-4 text-center">
          <li>
            <Link href="/academics/schools" className="block p-4 rounded-lg bg-white shadow-md hover:bg-gray-100 transition-colors">
              <span className="font-semibold text-blue-700">Schools</span>
            </Link>
          </li>
          <li>
            <Link href="/academics/library" className="block p-4 rounded-lg bg-white shadow-md hover:bg-gray-100 transition-colors">
              <span className="font-semibold text-blue-700">Libraries</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Introduction Section */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4">A World of Knowledge Awaits</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our college is dedicated to providing an unparalleled educational experience across a wide range of disciplines. We believe that learning is a journey of discovery, and our academic programs are crafted to inspire curiosity, foster innovation, and prepare you for a future of success. From the rigorous foundations of our core curricula to specialized professional training, we offer a pathway for every ambition.
        </p>
        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
          Explore our offerings through the links above to find the right program for you. Whether you're looking to dive into a new field, advance your career, or simply expand your knowledge, our diverse schools and colleges are here to support your goals.
        </p>
      </div>

      {/* New Highlights Section */}
      <div className="w-full max-w-6xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Highlight 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-blue-700 mb-2">Hands-on Learning</h3>
            <p className="text-gray-600">
              Our curriculum emphasizes practical skills and real-world application. Learn in modern labs and workshops designed to give you a competitive edge.
            </p>
          </div>
          {/* Highlight 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-blue-700 mb-2">Expert Faculty</h3>
            <p className="text-gray-600">
              Be mentored by industry professionals and leading academics who are passionate about their fields and committed to your success.
            </p>
          </div>
          {/* Highlight 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-blue-700 mb-2">Career-Focused Programs</h3>
            <p className="text-gray-600">
              Our programs are developed with industry needs in mind, ensuring you graduate with the skills employers are looking for.
            </p>
          </div>
        </div>
      </div>

      {/* Placeholder to guide user to the schools page */}
      <div className="text-center mt-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">View All Our Schools & Colleges</h2>
        <Link 
          href="/academics/schools" 
          className="px-8 py-4 bg-blue-700 text-white font-bold text-lg rounded-full shadow-lg hover:bg-blue-800 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Explore All Schools
        </Link>
      </div>
    </section>
  );
}
