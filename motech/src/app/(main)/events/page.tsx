"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [selectedCategory, setSelectedCategory] = useState("all");
  type EventType = typeof upcomingEvents[number] | typeof pastEvents[number] | null;
  const [selectedEvent, setSelectedEvent] = useState<EventType>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Event categories
  const eventCategories = [
    { id: "all", name: "All Events" },
    { id: "academic", name: "Academic" },
    { id: "career", name: "Career Development" },
    { id: "social", name: "Social" },
    { id: "workshop", name: "Workshops" },
    { id: "sports", name: "Sports" }
  ];

  // Sample events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Open Day & Program Exhibition",
      date: "2023-11-10",
      time: "9:00 AM - 3:00 PM",
      location: "Main Campus",
      category: "academic",
      image: "/images/events/event1.jpg",
      description: "Prospective students are invited to tour our facilities, meet instructors, and learn about our programs. This is a great opportunity to discover which course is right for you and get all your questions answered.",
      registrationLink: "#register",
      featured: true
    },
    {
      id: 2,
      title: "Tech Innovation Workshop",
      date: "2023-11-15",
      time: "2:00 PM - 5:00 PM",
      location: "ICT Lab 3",
      category: "workshop",
      image: "/images/events/event2.jpg",
      description: "Hands-on workshop on emerging technologies led by industry experts. Learn about AI, blockchain, and cloud computing with practical demonstrations and interactive sessions.",
      registrationLink: "#register",
      featured: true
    },
    {
      id: 3,
      title: "Career Development Seminar",
      date: "2023-11-20",
      time: "10:00 AM - 12:00 PM",
      location: "Auditorium",
      category: "career",
      image: "/images/events/event3.jpg",
      description: "Learn how to prepare for job interviews and build a professional portfolio. Our career advisors will share tips on resume writing, interview techniques, and personal branding.",
      registrationLink: "#register"
    },
    {
      id: 4,
      title: "Cultural Day Celebration",
      date: "2023-11-25",
      time: "All Day",
      location: "College Grounds",
      category: "social",
      image: "/images/events/event4.jpg",
      description: "Annual cultural day featuring performances, food, and traditional attire. Celebrate the diversity of our student body and experience different cultures through music, dance, and cuisine.",
      registrationLink: "#register"
    },
    {
      id: 5,
      title: "Inter-School Sports Tournament",
      date: "2023-12-05",
      time: "8:00 AM - 5:00 PM",
      location: "College Sports Ground",
      category: "sports",
      image: "/images/events/event5.jpg",
      description: "Annual inter-school sports tournament featuring football, basketball, volleyball, and track events. Come support our teams as they compete against other institutions.",
      registrationLink: "#register"
    },
    {
      id: 6,
      title: "Entrepreneurship Summit",
      date: "2023-12-12",
      time: "9:00 AM - 4:00 PM",
      location: "Main Hall",
      category: "career",
      image: "/images/events/event6.jpg",
      description: "Hear from successful entrepreneurs and learn how to turn your ideas into viable businesses. Networking opportunities with potential investors and mentors.",
      registrationLink: "#register"
    }
  ];

  // Sample past events data
  const pastEvents = [
    {
      id: 7,
      title: "Annual Career Fair 2023",
      date: "2023-09-28",
      time: "9:00 AM - 4:00 PM",
      location: "Main Hall",
      category: "career",
      image: "/images/events/event7.jpg",
      description: "Our annual career fair connected students with over 50 employers from various industries. Many students secured internships and job opportunities during this event.",
      registrationLink: "#",
      past: true
    },
    {
      id: 8,
      title: "Tech Week 2023",
      date: "2023-08-15",
      time: "All Week",
      location: "Campus Wide",
      category: "workshop",
      image: "/images/events/event8.jpg",
      description: "A week-long celebration of technology featuring workshops, hackathons, and guest speakers from leading tech companies. Students showcased their projects and innovations.",
      registrationLink: "#",
      past: true
    },
    {
      id: 9,
      title: "Health and Wellness Day",
      date: "2023-07-20",
      time: "10:00 AM - 2:00 PM",
      location: "College Grounds",
      category: "social",
      image: "/images/events/event9.jpg",
      description: "A day dedicated to promoting physical and mental wellbeing. Activities included yoga sessions, health screenings, nutrition talks, and mindfulness workshops.",
      registrationLink: "#",
      past: true
    }
  ];

  // Function to open modal with event details
  const openModal = (event: EventType) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
    document.body.style.overflow = 'unset';
  };

  // Filter events based on selected category
  const filteredEvents = activeTab === "upcoming" 
    ? (selectedCategory === "all" 
        ? upcomingEvents 
        : upcomingEvents.filter(event => event.category === selectedCategory))
    : (selectedCategory === "all" 
        ? pastEvents 
        : pastEvents.filter(event => event.category === selectedCategory));

  // Get featured events
  const featuredEvents = upcomingEvents.filter(event => event.featured);

  return (
    <section className="min-h-screen lg:mt-[140px] mt-[100px] w-full flex flex-col items-center justify-center pt-8 lg:px-4 px-2 bg-gradient-to-b from-blue-50 to-gray-100 pb-12">
      {/* Hero Section */}
      <div className="w-full max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">Events</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Discover upcoming events, workshops, and activities at Motech Technology Institute. Join us to learn, network, and grow.
        </p>
      </div>

      {/* Featured Events Section */}
      <div className="w-full max-w-6xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 border-b border-blue-200 pb-2">Featured Events</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image
                  src={event.image || "/images/events/default.jpg"}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs font-medium px-2.5 py-1 rounded">
                    {eventCategories.find(cat => cat.id === event.category)?.name}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span className="mx-2">•</span>
                  <span>{event.time}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-700 transition-colors">
                  {event.title}
                </h3>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                <div className="flex items-center justify-between">
                  <Link 
                    href={event.registrationLink}
                    className="px-4 py-2 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    Register Now
                  </Link>
                  <button
                    onClick={() => openModal(event)}
                    className="text-blue-700 font-medium hover:underline flex items-center"
                  >
                    View details
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

      {/* Events Tabs and Filters */}
      <div className="w-full max-w-6xl mx-auto mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex border-b border-gray-200 w-full sm:w-auto">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`py-2 px-4 font-medium ${activeTab === "upcoming" ? "text-blue-700 border-b-2 border-blue-700" : "text-gray-500 hover:text-gray-700"}`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab("past")}
                className={`py-2 px-4 font-medium ${activeTab === "past" ? "text-blue-700 border-b-2 border-blue-700" : "text-gray-500 hover:text-gray-700"}`}
              >
                Past Events
              </button>
            </div>

            <div className="flex items-center">
              <span className="text-gray-700 mr-2">Filter by:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {eventCategories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="w-full max-w-6xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          {activeTab === "upcoming" ? "Upcoming Events" : "Past Events"} 
          {selectedCategory !== "all" && `: ${eventCategories.find(cat => cat.id === selectedCategory)?.name}`}
        </h2>

        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-40 w-full">
                  <Image
                    src={event.image || "/images/events/default.jpg"}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                      {eventCategories.find(cat => cat.id === event.category)?.name}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-blue-700 transition-colors line-clamp-1">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
                  <div className="flex items-center justify-between">
                    {activeTab === "upcoming" ? (
                      <Link 
                        href={event.registrationLink}
                        className="px-3 py-1.5 bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition-colors"
                      >
                        Register
                      </Link>
                    ) : (
                      <span className="px-3 py-1.5 bg-gray-200 text-gray-700 text-sm font-medium rounded-lg">
                        Completed
                      </span>
                    )}
                    <button
                      onClick={() => openModal(event)}
                      className="text-blue-700 text-sm font-medium hover:underline flex items-center"
                    >
                      Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-800 mb-2">No events found</h3>
            <p className="text-gray-600">There are no events in this category at the moment.</p>
          </div>
        )}

        {/* Pagination */}
        {filteredEvents.length > 0 && (
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

      {/* Subscribe to Events Newsletter */}
      <div className="w-full max-w-4xl mx-auto bg-blue-800 text-white rounded-xl shadow-lg p-8 mb-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Never Miss an Event</h2>
          <p className="text-blue-100 mb-6">Subscribe to our events newsletter to stay updated on upcoming workshops, seminars, and activities.</p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-400 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Event Detail Modal */}
      {isModalOpen && selectedEvent && (
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
                src={selectedEvent.image || "/images/events/default.jpg"}
                alt={selectedEvent.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-4 left-6 text-white">
                <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded">
                  {eventCategories.find(cat => cat.id === selectedEvent.category)?.name}
                </span>
                <h2 className="text-2xl font-bold mt-2">{selectedEvent.title}</h2>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium">{new Date(selectedEvent.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Time</p>
                    <p className="font-medium">{selectedEvent.time}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">{selectedEvent.location}</p>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">About This Event</h3>
                <p className="text-gray-700">{selectedEvent.description}</p>
              </div>

              {activeTab === "upcoming" && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link 
                    href={selectedEvent.registrationLink}
                    className="inline-block px-6 py-3 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    Register for This Event
                  </Link>
                  <p className="text-sm text-gray-600 mt-2">
                    Have questions? Contact us at{" "}
                    <a href="mailto:motechtechnologytraining@gmail.com" className="text-blue-600 hover:underline">
                      motechtechnologytraining@gmail.com
                    </a>{" "}
                    or call{" "}
                    <a href="tel:+254722330670" className="text-blue-600 hover:underline">
                      +254 722-330-670
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}