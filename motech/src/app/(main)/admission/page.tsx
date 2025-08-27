"use client"
// import Link from "next/link";
// import Image from "next/image";
import { useState } from "react";
import { programs } from "@/lib/data/Programs";

// Define the Course type based on expected structure
interface Course {
  name: string;
  // Add other properties if needed, e.g. description?: string;
}

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    school: "",
    course: "",
    message: ""
  });

  const [availableCourses, setAvailableCourses] = useState<Course[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    if (name === "school") {
      // When school changes, update available courses
      const selectedSchool = programs.find(program => program.id === value);
      setAvailableCourses(selectedSchool && selectedSchool.courses ? selectedSchool.courses : []);
      
      // Reset course selection when school changes
      setFormData({
        ...formData,
        school: value,
        course: ""
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Application submitted successfully! We'll contact you shortly.");
  };

  return (
    <section className="min-h-screen lg:mt-[140px] mt-[100px] w-full flex flex-col items-center justify-center pt-8 lg:px-4 px-2 bg-gradient-to-b from-blue-50 to-gray-100 pb-12">
      {/* Hero Section */}
      <div className="w-full max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">Admissions</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Begin your journey to a successful career with Motech Technology Institute. Our admissions process is designed to be straightforward and accessible.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Requirements Card - Placed first as requested */}
        <div className="bg-white rounded-xl shadow-lg p-6 order-1 lg:order-1">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Admission Requirements</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                1
              </div>
              <p className="text-gray-700">
                A non-refundable registration fee of <span className="font-semibold">Ksh. 1,000</span> payable for every calendar year.
              </p>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                2
              </div>
              <p className="text-gray-700">
                Provide a copy of your National ID card.
              </p>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                3
              </div>
              <p className="text-gray-700">
                Submit 2 color passport size photos.
              </p>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                4
              </div>
              <p className="text-gray-700">
                Relevant academic certificates and transcripts.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Application Process</h3>
            <ol className="space-y-2">
              <li className="flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">1</span>
                <span>Submit your application form</span>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">2</span>
                <span>Receive admission letter</span>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">3</span>
                <span>Pay registration fee</span>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">4</span>
                <span>Submit required documents</span>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">5</span>
                <span>Begin your classes</span>
              </li>
            </ol>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-xl shadow-lg p-6 order-2 lg:order-2">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2zm10-4a2 2 0 11-4 0 2 2 0 014 0zM4 10a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Application Form</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-1">Select School</label>
              <select
                id="school"
                name="school"
                value={formData.school}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select a school</option>
                {programs.map((program) => (
                  <option key={program.id} value={program.id}>
                    {program.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Select Course</label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                disabled={!formData.school || availableCourses.length === 0}
              >
                <option value="">{formData.school ? "Select a course" : "First select a school"}</option>
                {availableCourses.map((course, index) => (
                  <option key={index} value={course.name}>
                    {course.name}
                  </option>
                ))}
              </select>
              {formData.school && availableCourses.length === 0 && (
                <p className="text-sm text-gray-500 mt-1">No courses available for this school</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Message (Optional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-blue-800 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="w-full max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-800 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-200 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h3 className="text-xl font-bold">Student Support</h3>
          </div>
          <p className="text-blue-100">
            Our dedicated support team is available to guide you through the admissions process and answer any questions.
          </p>
        </div>

        <div className="bg-blue-800 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-200 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
            <h3 className="text-xl font-bold">Financial Aid</h3>
          </div>
          <p className="text-blue-100">
            We offer flexible payment plans and financial assistance options to make education accessible to all.
          </p>
        </div>

        <div className="bg-blue-800 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-200 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="text-xl font-bold">Upcoming Intakes</h3>
          </div>
          <p className="text-blue-100">
            We have intakes in January, May, and September. Apply now to secure your spot in the next intake.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="w-full max-w-6xl mx-auto mt-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Admissions Office</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Visit Us</h3>
            <p className="text-gray-700 mb-2">
              Mwalimu Co-operative House, 8th Floor
            </p>
            <p className="text-gray-700 mb-2">
              Along Tom Mboya Street, Opposite Ambassador Hotel
            </p>
            <p className="text-gray-700">
              Nairobi, Kenya
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Get In Touch</h3>
            <p className="text-gray-700 mb-2">
              Email: motechtechnologytraining@gmail.com
            </p>
            <p className="text-gray-700 mb-2">
              Phone: +254 722-330-670
            </p>
            <p className="text-gray-700">
              Hours: Mon-Fri, 8:00 AM - 5:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}