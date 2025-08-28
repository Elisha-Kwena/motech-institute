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
      { title: "History & Mission", href: "/about" },
      { title: "Leadership & Governance", href: "/about/leadership" },
      // { title: "Facts & Statistics", href: "/about/facts" },
      // { title: "College Map & Virtual Tour", href: "/about/College-tour" },
      // { title: "Diversity, Equity, and Inclusion", href: "/about/dei" },
      { title: "Contact Information", href: "/contact" },
    ],
  },
  {
    title: "Academics",
    href: "/academics",
    description: "Programs and learning",
    subitems: [
      { title: "Schools ", href: "/academics/schools" },
      // { title: "Programs of Study", href: "/academics/programs" },
      // { title: "Course Catalog", href: "/academics/catalog" },
      // { title: "Faculty Directory", href: "/academics/faculty" },
      // { title: "Research & Centers", href: "/academics/research" },
      { title: "Library", href: "/academics/library" },
    ],
  },
  {
    title: "Admission",
    href: "/admission",
    description: "Join our community",
  },
  // {
  //   title: "College Life",
  //   href: "/College-life",
  //   description: "Student experience",
  // },
  {
    title: "News & Events",
    href: "/news",
    description: "Latest updates",
  },
  {
    title: "Student Portal",
    href: "/students",
    description: "Resources and portal",
  },
  {
    title: "Alumni & Friends",
    href: "/alumni",
    description: "Stay connected",
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
//   { title: "College Life", href: "/College-life" },
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