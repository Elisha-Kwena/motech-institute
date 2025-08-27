import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="lg:mt-[140px] mt-[100px] w-full flex flex-col items-center justify-center pt-8 lg:px-4 px-2 bg-gray-50 pb-8">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">About Motech Technology Training Institution</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to our college, a place where innovation, community, and learning come together. We are dedicated to providing a world-class education that prepares students for a future of success.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-[90%] lg:w-full mx-auto gap-4">
        <div className="flex flex-col gap-2 ">
            <div className="w-full h-[250px] relative">
                <Image
                src="/images/about/banner1.jpg"
                alt="about banner"
                className="object-cover object-top"
                fill
                />
            </div>
            <div className="w-full p-4">
                <h1 className="text-3xl capitalize font-bold">Our vision</h1>
                <p className="text-lg">To be a center of Excellence in Training Business, ICT and Technical Skills</p>
            </div>
        </div>
        <div className="flex flex-col gap-2 ">
            <div className="w-full h-[250px] relative">
                <Image
                src="/images/about/banner2.jpg"
                alt="about banner"
                className="object-cover object-top"
                fill
                />
            </div>
            <div className="w-full p-4 font-bold">
                <h1 className="text-3xl capitalize">Our mission</h1>
                <p className="text-lg">To provide professional and practical training so as to maximize on career growth, job creation and self-employment opportunities for our  clents in the global market</p>
            </div>
        </div>
        <div className="flex flex-col gap-2 font-bold">
            <div className="w-full h-[250px] relative">
                <Image
                src="/images/about/banner1.jpg"
                alt="about banner"
                className="object-cover object-top"
                fill
                />
            </div>
            <div className="w-full p-4">
                <h1 className="text-3xl capitalize">Our core values</h1>
                <ul className="flex flex-col">
                    <li className="flex items-center justify-start gap-2">
                        <span className="font-bold text-blue-800">Passion -</span>
                        <p className="text-md">Being commited in training </p>
                    </li>
                    <li className="flex items-center justify-start gap-2">
                        <span className="font-bold text-blue-800">Integrity -</span>
                        <p className="text-md">Maintaining honesty in our business and training </p>
                    </li>
                    <li className="flex items-center justify-start gap-2">
                        <span className="font-bold text-blue-800">Excellence -</span>
                        <p className="text-md">Promote quality in training </p>
                    </li>
                    <li className="flex items-center justify-start gap-2">
                        <span className="font-bold text-blue-800">Commitment -</span>
                        <p className="text-md">Devoted to achieving goals and objectives of our customers </p>
                    </li>
                    <li className="flex items-center justify-start gap-2">
                        <span className="font-bold text-blue-800">Innovation -</span>
                        <p className="text-md">Drive transformation and creativity in service delivery </p>
                    </li>
                </ul>
            </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="w-full max-w-6xl mx-auto mb-12 p-8 bg-white rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to empower students with the knowledge, skills, and values they need to become responsible citizens and leaders in their chosen fields. We are committed to academic excellence, innovative research, and a supportive learning environment.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              We strive to create a vibrant community that celebrates diversity, promotes critical thinking, and encourages lifelong learning.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
            {/* Replace with a relevant image */}
            <Image
              src="/images/hero/banner.jpg"
              alt="Students walking on campus"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="w-full max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Highlight 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-blue-700 mb-2">Academic Excellence</h3>
            <p className="text-gray-600">
              Our rigorous academic programs are designed and taught by leading experts to ensure you get the best education possible.
            </p>
          </div>
          {/* Highlight 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-blue-700 mb-2">Supportive Community</h3>
            <p className="text-gray-600">
              Join a welcoming community where you'll find mentorship, collaboration, and friendships that last a lifetime.
            </p>
          </div>
          {/* Highlight 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-blue-700 mb-2">Career-Focused</h3>
            <p className="text-gray-600">
              We provide career services, internships, and networking opportunities to help you transition from student to professional.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Start Your Journey?</h2>
        <Link 
          href="/apply" 
          className="px-8 py-4 bg-blue-700 text-white font-bold text-lg rounded-full shadow-lg hover:bg-blue-800 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Apply Now
        </Link>
      </div>
    </section>
  );
}
