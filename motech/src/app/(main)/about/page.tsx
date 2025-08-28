import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="lg:mt-[140px] mt-[100px] w-full flex flex-col items-center justify-center pt-8 lg:px-4 px-2 bg-gray-50 pb-8">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">About Motech Technology Institute</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Motech Technology Institute stands as a premier institution, established over a decade ago with a vision to provide exceptional and industry-relevant education.
        </p>
      </div>

      {/* Vision, Mission, Values Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 w-[90%] lg:w-full max-w-6xl mx-auto gap-6 mb-16">
        <div className="flex flex-col gap-2 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="w-full h-[250px] relative">
                <Image
                src="/images/about/banner1.jpg"
                alt="Our Vision"
                className="object-cover object-top"
                fill
                />
            </div>
            <div className="w-full p-6">
                <h1 className="text-2xl font-bold text-blue-800 mb-3">Our Vision</h1>
                <p className="text-gray-700">To be a center of Excellence in Training Business, ICT and Technical Skills</p>
            </div>
        </div>
        
        <div className="flex flex-col gap-2 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="w-full h-[250px] relative">
                <Image
                src="/images/about/banner2.jpg"
                alt="Our Mission"
                className="object-cover object-top"
                fill
                />
            </div>
            <div className="w-full p-6">
                <h1 className="text-2xl font-bold text-blue-800 mb-3">Our Mission</h1>
                <p className="text-gray-700">To provide professional and practical training to maximize career growth, job creation and self-employment opportunities for our clients in the global market</p>
            </div>
        </div>
        
        <div className="flex flex-col gap-2 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="w-full h-[250px] relative">
                <Image
                src="/images/about/banner3.jpg"
                alt="Our Values"
                className="object-cover object-top"
                fill
                />
            </div>
            <div className="w-full p-6">
                <h1 className="text-2xl font-bold text-blue-800 mb-3">Our Core Values</h1>
                <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                        <span className="font-bold text-blue-700 min-w-[85px]">Passion</span>
                        <span className="text-gray-700">- Being committed in training</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="font-bold text-blue-700 min-w-[85px]">Integrity</span>
                        <span className="text-gray-700">- Maintaining honesty in our business and training</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="font-bold text-blue-700 min-w-[85px]">Excellence</span>
                        <span className="text-gray-700">- Promote quality in training</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="font-bold text-blue-700 min-w-[85px]">Commitment</span>
                        <span className="text-gray-700">- Devoted to achieving goals and objectives of our customers</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="font-bold text-blue-700 min-w-[85px]">Innovation</span>
                        <span className="text-gray-700">- Drive transformation and creativity in service delivery</span>
                    </li>
                </ul>
            </div>
        </div>
      </div>

      {/* History Section */}
      <div className="w-full max-w-6xl mx-auto mb-16">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-1 relative h-80 md:h-auto">
              <Image
                src="/images/stats/banner.jpg"
                alt="Motech Institute History"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:flex-1 p-8 bg-blue-800 text-white">
              <h2 className="text-3xl font-bold mb-6">Our History</h2>
              <p className="mb-4">
                Motech Technology Institute stands as a premier institution, established over a decade ago with a vision to provide exceptional and industry-relevant education.
              </p>
              <p className="mb-4">
                From its inception, the institute has been committed to excellence, achieving official registration and accreditation from key national bodies including TVETA, KASNEB, KNEC, and NITA.
              </p>
              <p>
                This accreditation allows us to offer a wide array of Competency Based Education and Training (CBET) programs, designed to equip our students with the practical skills and knowledge that meet the direct requirements of the modern workforce and are crucial to our nations economy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Motech Technology Section */}
      <div className="w-full max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-2">Why Choose Motech Technology?</h2>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Discover what makes us the preferred choice for students seeking quality education and professional growth
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Reason 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-all duration-300">
            <div className="text-blue-700 text-4xl font-bold mb-2">01</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Industrial Attachment</h3>
            <p className="text-gray-600">
              We provide valuable industrial attachment opportunities for our students to gain real-world experience.
            </p>
          </div>
          
          {/* Reason 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-all duration-300">
            <div className="text-blue-700 text-4xl font-bold mb-2">02</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Expert Lecturers</h3>
            <p className="text-gray-600">
              Learn from experienced, competent lecturers who are industry professionals.
            </p>
          </div>
          
          {/* Reason 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-all duration-300">
            <div className="text-blue-700 text-4xl font-bold mb-2">03</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Consistent Performance</h3>
            <p className="text-gray-600">
              We maintain a track record of top performance and excellent results.
            </p>
          </div>
          
          {/* Reason 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-all duration-300">
            <div className="text-blue-700 text-4xl font-bold mb-2">04</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Online Learning</h3>
            <p className="text-gray-600">
              Benefit from reliable online classes with free WiFi access for all students.
            </p>
          </div>
          
          {/* Reason 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-all duration-300">
            <div className="text-blue-700 text-4xl font-bold mb-2">05</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Flexible Payments</h3>
            <p className="text-gray-600">
              We offer affordable, flexible fee payment plans to suit your financial situation.
            </p>
          </div>
          
          {/* Reason 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-all duration-300">
            <div className="text-blue-700 text-4xl font-bold mb-2">06</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Strategic Location</h3>
            <p className="text-gray-600">
              Our College is strategically located for convenient morning and evening classes.
            </p>
          </div>
        </div>
      </div>

      {/* Admission Requirements */}
      <div className="w-full max-w-4xl mx-auto mb-16 bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-6">Admission Requirements</h2>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
              1
            </div>
            <p className="text-gray-700">
              A non-refundable registration fee of Ksh. 1,000 payable for every CALENDAR year.
            </p>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
              2
            </div>
            <p className="text-gray-700">
              You are required to provide a copy of National ID, and 2 colour passport size photos on admission.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8 bg-blue-800 text-white py-12 px-6 rounded-xl w-full max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Join Motech Technology Institute today and take the first step toward a successful career with our industry-relevant programs.
        </p>
        <Link 
          href="/apply" 
          className="inline-block px-8 py-4 bg-white text-blue-800 font-bold text-lg rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
        >
          Apply Now
        </Link>
      </div>
    </section>
  );
}