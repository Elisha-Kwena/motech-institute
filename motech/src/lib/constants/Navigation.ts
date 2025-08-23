import { IconType } from 'react-icons'; // Import the type
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa';
export const socialIcons: Record<string, IconType> = {
  Facebook: FaFacebookF,
  Twitter: FaTwitter,
  Instagram: FaInstagram,
  LinkedIn: FaLinkedinIn,
  YouTube: FaYoutube,
};
// Define the base type for a navigation item
export type NavItem = {
  title: string;
  href: string;
  external?: boolean; // If it links to an external site
  description?: string;
  icon?:IconType;
  subitems?:NavItem[];
};

// A special type for footer sections, which have a title and an array of links
export type FooterSection = {
  title: string;
  links: NavItem[];
};
// src/lib/constants/navigation.ts


export const mainNav: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
    description: "Who we are",
    subitems: [
      { title: "History & Mission", href: "/about/history" },
      { title: "Leadership & Governance", href: "/about/leadership" },
      { title: "Facts & Statistics", href: "/about/facts" },
      { title: "Campus Map & Virtual Tour", href: "/about/campus-tour" },
      { title: "Diversity, Equity, and Inclusion", href: "/about/dei" },
      { title: "Contact Information", href: "/contact" },
    ],
  },
  {
    title: "Academics",
    href: "/academics",
    description: "Programs and learning",
    subitems: [
      { title: "Schools & Colleges", href: "/academics/schools" },
      { title: "Programs of Study", href: "/academics/programs" },
      { title: "Course Catalog", href: "/academics/catalog" },
      { title: "Faculty Directory", href: "/academics/faculty" },
      { title: "Research & Centers", href: "/academics/research" },
      { title: "Libraries", href: "/academics/libraries" },
    ],
  },
  {
    title: "Admission",
    href: "/admission",
    description: "Join our community",
    subitems: [
      { title: "Apply Now", href: "/admission/apply", description: "Start your application" },
      { title: "Undergraduate Admission", href: "/admission/undergraduate" },
      { title: "Graduate Admission", href: "/admission/graduate" },
      { title: "Financial Aid & Scholarships", href: "/admission/financial-aid" },
      { title: "Tuition & Costs", href: "/admission/tuition" },
      { title: "Campus Visits & Tours", href: "/admission/visits" },
      { title: "Request Information", href: "/admission/request-info" },
    ],
  },
  {
    title: "Campus Life",
    href: "/campus-life",
    description: "Student experience",
    subitems: [
      { title: "Housing & Dining", href: "/campus-life/housing" },
      { title: "Student Organizations & Clubs", href: "/campus-life/organizations" },
      { title: "Athletics & Recreation", href: "/campus-life/athletics" },
      { title: "Arts & Culture", href: "/campus-life/arts" },
      { title: "Health & Wellness Services", href: "/campus-life/health" },
      { title: "Student Support Services", href: "/campus-life/support" },
    ],
  },
  {
    title: "News & Events",
    href: "/news",
    description: "Latest updates",
    subitems: [
      { title: "University Newsroom", href: "/news" },
      { title: "Calendar of Events", href: "/events" },
      { title: "Social Media Feeds", href: "/social", external: true },
    ],
  },
  {
    title: "Current Students",
    href: "/students",
    description: "Resources and portal",
    subitems: [
      { title: "Student Portal", href: "https://portal.college.edu", external: true },
      { title: "Email Access", href: "https://mail.college.edu", external: true },
      { title: "Class Schedules & Registration", href: "/students/registration" },
      { title: "Career Services", href: "/students/careers" },
      { title: "IT Help Desk", href: "/students/it-help", external: true },
    ],
  },
  {
    title: "Alumni & Friends",
    href: "/alumni",
    description: "Stay connected",
    subitems: [
      { title: "Alumni Association", href: "/alumni/association" },
      { title: "Events & Reunions", href: "/alumni/events" },
      { title: "Ways to Give", href: "/alumni/give" },
    ],
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

// Main Navigation (for the header)
// export const mainNav: NavItem[] = [
//   { title: "Home", href: "/" },
//   { title: "About us", href: "/about" },
//   { title: "Academics", href: "/academics", description: "Explore our programs and courses" },
//   { title: "Admission", href: "/admission" },
//   { title: "Campus Life", href: "/campus-life" },
//   { title: "News&Events", href: "/news" },
//   { title: "Contact", href: "/contact" },
// ];


// Social Media Links (often used in footer)
export const socialLinks: NavItem[] = [
  { 
    title: "Facebook", 
    href: "https://www.facebook.com/profile.php?id=61572381666851#", 
    external: true,
    icon: FaFacebookF // Assign the icon component
  },
  { 
    title: "Twitter", 
    href: "https://twitter.com/college", 
    external: true,
    icon: FaTwitter
  },
  { 
    title: "Instagram", 
    href: "https://instagram.com/college", 
    external: true,
    icon: FaInstagram
  },
  { 
    title: "LinkedIn", 
    href: "https://linkedin.com/school/college", 
    external: true,
    icon: FaLinkedinIn
  },
  { 
    title: "YouTube", 
    href: "https://youtube.com/college", 
    external: true,
    icon: FaYoutube
  },
];

// Legal/Utility Links (for the very bottom of the footer)
export const legalLinks: NavItem[] = [
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Terms of Service", href: "/terms" },
  { title: "Accessibility", href: "/accessibility" },
  { title: "Disclaimer", href: "/disclaimer" },
];