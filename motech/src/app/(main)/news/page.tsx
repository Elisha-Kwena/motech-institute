"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type NewsArticle = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  author: string;
  featured?: boolean;
};

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  // Sample news data
  const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title: "Motech Technology Institute Launches New ICT Program",
      excerpt: "We are excited to announce our new Advanced Cybersecurity program starting next semester...",
      content: "Motech Technology Institute is proud to announce the launch of our new Advanced Cybersecurity program, designed to meet the growing demand for cybersecurity professionals in Kenya and beyond. The program will cover ethical hacking, network security, digital forensics, and more. Students will have access to state-of-the-art labs and learn from industry experts with real-world experience.",
      date: "2023-10-15",
      category: "academics",
      image: "/images/news/news1.jpg",
      author: "Dr. Jane Mwangi",
      featured: true
    },
    {
      id: 2,
      title: "Annual Career Fair Attracts Top Employers",
      excerpt: "Over 50 companies participated in our annual career fair, offering opportunities to our students...",
      content: "Our annual career fair was a tremendous success with participation from over 50 leading companies in various industries. Students had the opportunity to network with potential employers and learn about internship and job opportunities. Companies represented included leading firms in technology, finance, hospitality, and healthcare sectors. Many students received on-the-spot interviews and several have already secured internship positions.",
      date: "2023-09-28",
      category: "events",
      image: "/images/news/news2.jpg",
      author: "Career Services Department",
      featured: true
    },
    {
      id: 3,
      title: "Motech Students Win National Innovation Challenge",
      excerpt: "A team of our engineering students has won first place in the National Innovation Challenge...",
      content: "We are proud to announce that a team of our engineering students has won first place in the National Innovation Challenge for their project on sustainable energy solutions. The project focuses on harnessing solar energy for rural communities. Their innovative approach to energy storage and distribution impressed the judges, beating out competitors from major universities across the country. The team will now represent Kenya in the regional innovation competition next month.",
      date: "2023-09-10",
      category: "achievements",
      image: "/images/news/news3.jpg",
      author: "Engineering Department"
    },
    {
      id: 4,
      title: "New Partnership with Tech Industry Leaders",
      excerpt: "Motech has signed MOUs with several tech companies to provide industry exposure...",
      content: "In our continuous effort to provide industry-relevant education, Motech has signed memoranda of understanding with several leading tech companies. These partnerships will include guest lectures, internships, and collaborative projects. Partner companies will provide our students with real-world projects to work on, giving them valuable experience before they graduate. This initiative is part of our commitment to ensuring our graduates are job-ready from day one.",
      date: "2023-08-22",
      category: "partnerships",
      image: "/images/news/news5.jpg",
      author: "Administration Office"
    },
    {
      id: 5,
      title: "Upcoming Intake for January 2024 Semester",
      excerpt: "Applications are now open for the January 2024 intake across all programs...",
      content: "We are now accepting applications for the January 2024 intake across all our programs. Prospective students are encouraged to apply early to secure their spots. Financial aid and scholarship opportunities are available for qualifying students. Our admissions team is available to guide applicants through the process and answer any questions about program requirements, career prospects, and financial assistance options.",
      date: "2023-08-15",
      category: "admissions",
      image: "/images/news/news4.jpg",
      author: "Admissions Office"
    },
  ];

  // Upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Open Day & Program Exhibition",
      date: "2023-11-10",
      time: "9:00 AM - 3:00 PM",
      location: "Main College",
      description: "Prospective students are invited to tour our facilities, meet instructors, and learn about our programs."
    },
    {
      id: 2,
      title: "Tech Innovation Workshop",
      date: "2023-11-15",
      time: "2:00 PM - 5:00 PM",
      location: "ICT Lab 3",
      description: "Hands-on workshop on emerging technologies led by industry experts."
    },
    {
      id: 3,
      title: "Career Development Seminar",
      date: "2023-11-20",
      time: "10:00 AM - 12:00 PM",
      location: "Auditorium",
      description: "Learn how to prepare for job interviews and build a professional portfolio."
    },
    {
      id: 4,
      title: "Cultural Day Celebration",
      date: "2023-11-25",
      time: "All Day",
      location: "College Grounds",
      description: "Annual cultural day featuring performances, food, and traditional attire."
    }
  ];

  // Filter articles based on selected category
  const filteredArticles = activeCategory === "all" 
    ? newsArticles 
    : newsArticles.filter(article => article.category === activeCategory);

  // Get featured articles
  const featuredArticles = newsArticles.filter(article => article.featured);

  // Function to open modal with article details
  const openModal = (article: NewsArticle) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
    // Re-enable body scrolling
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="min-h-screen lg:mt-[140px] mt-[100px] w-full flex flex-col items-center justify-center pt-8 lg:px-4 px-2 bg-gradient-to-b from-blue-50 to-gray-100 pb-12">
      {/* Hero Section */}
      <div className="w-full max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">News and Updates</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Stay updated with the latest news, events, and achievements from Motech Technology Institute.
        </p>
      </div>

      {/* Featured News Section */}
      <div className="w-full max-w-6xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 border-b border-blue-200 pb-2">Featured Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image
                  src={article.image || "/images/news/default.jpg"}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-700 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {article.author}</span>
                  <button
                    onClick={() => openModal(article)}
                    className="text-blue-700 font-medium hover:underline flex items-center"
                  >
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* News Categories and Main Content */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar with Categories and Events */}
        <div className="lg:col-span-1 space-y-8">
          {/* Categories */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setActiveCategory("all")}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${activeCategory === "all" ? "bg-blue-100 text-blue-800 font-medium" : "text-gray-700 hover:bg-gray-100"}`}
                >
                  All News
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveCategory("academics")}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${activeCategory === "academics" ? "bg-blue-100 text-blue-800 font-medium" : "text-gray-700 hover:bg-gray-100"}`}
                >
                  Academics
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveCategory("events")}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${activeCategory === "events" ? "bg-blue-100 text-blue-800 font-medium" : "text-gray-700 hover:bg-gray-100"}`}
                >
                  Events
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveCategory("achievements")}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${activeCategory === "achievements" ? "bg-blue-100 text-blue-800 font-medium" : "text-gray-700 hover:bg-gray-100"}`}
                >
                  Achievements
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveCategory("admissions")}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${activeCategory === "admissions" ? "bg-blue-100 text-blue-800 font-medium" : "text-gray-700 hover:bg-gray-100"}`}
                >
                  Admissions
                </button>
              </li>
            </ul>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Upcoming Events</h3>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="border-l-4 border-blue-600 pl-4 py-2">
                  <h4 className="font-semibold text-gray-800">{event.title}</h4>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} • {event.time}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                </div>
              ))}
            </div>
            <Link 
              href="/events" 
              className="block mt-4 text-center text-blue-700 font-medium hover:underline"
            >
              View all events
            </Link>
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-blue-800 text-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
            <p className="text-blue-100 mb-4">Subscribe to our newsletter for the latest news and updates.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-red-600 text-white font-bold py-2 rounded-lg hover:bg-red-400 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Main News Content */}
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-blue-800">
              {activeCategory === "all" ? "All News" : `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} News`}
            </h2>
            <div className="flex items-center text-sm text-gray-500">
              <span>Sort by:</span>
              <select className="ml-2 bg-transparent border-none focus:ring-0 focus:outline-none">
                <option>Newest</option>
                <option>Oldest</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 w-full">
                  <Image
                    src={article.image || "/images/news/default.jpg"}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-blue-700 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">By {article.author}</span>
                    <button
                      onClick={() => openModal(article)}
                      className="text-blue-700 text-sm font-medium hover:underline flex items-center"
                    >
                      Read more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-800 mb-2">No news articles found</h3>
              <p className="text-gray-600">There are no news articles in this category at the moment.</p>
            </div>
          )}

          {/* Pagination */}
          {filteredArticles.length > 0 && (
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-100">
                  Previous
                </button>
                <button className="px-3 py-1 rounded bg-blue-700 text-white">1</button>
                <button className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-100">2</button>
                <button className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-100">3</button>
                <button className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-100">
                  Next
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>

      {/* News Detail Modal */}
      {isModalOpen && selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
          <div className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal content */}
            <div className="relative h-64 w-full">
              <Image
                src={selectedArticle.image || "/images/news/default.jpg"}
                alt={selectedArticle.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-4 left-6 text-white">
                <span className="bg-blue-600 text-white text-xs font-medium px-2.5 py-0.5 rounded">
                  {selectedArticle.category.charAt(0).toUpperCase() + selectedArticle.category.slice(1)}
                </span>
                <h2 className="text-2xl font-bold mt-2">{selectedArticle.title}</h2>
                <div className="flex items-center text-sm mt-2">
                  <span>{new Date(selectedArticle.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span className="mx-2">•</span>
                  <span>By {selectedArticle.author}</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">{selectedArticle.content}</p>
                
                <p className="text-gray-700">
                  For more information about this and other news from Motech Technology Institute, 
                  please contact our administration office at{" "}
                  <a href="mailto:motechtechnologytraining@gmail.com" className="text-blue-600 hover:underline">
                    motechtechnologytraining@gmail.com
                  </a>{" "}
                  or call us at{" "}
                  <a href="tel:+254722330670" className="text-blue-600 hover:underline">
                    +254 722-330-670
                  </a>.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Share this article</h3>
                <div className="flex space-x-4">
                  <button className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                    </svg>
                  </button>
                  <button className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/>
                    </svg>
                  </button>
                  <button className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </button>
                  <button className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43-.14 0-.3-.01-.43-.01-.14 0-.37.06-.56.28-.19.22-.73.73-.73 1.78s.75 2.06.85 2.2c.1.14 1.47 2.24 3.57 3.14.5.22.89.35 1.19.45.5.19.95.16 1.3.1.39-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.07-.1-.23-.16-.48-.28z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}