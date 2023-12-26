//React icons
import { HiBars3 as Hamburger } from "react-icons/hi2";
import { IoMdHome as Home } from "react-icons/io";
import { MdOutlineSwitchAccount as Account } from "react-icons/md";
import { IoDocumentTextOutline as Document } from "react-icons/io5";
import { FaRegFolderOpen as Folder } from "react-icons/fa";
import { MdOutlineMail as Email } from "react-icons/md";
import { FaHtml5 as HTML5 } from "react-icons/fa";
import { FaCss3Alt as CSS3 } from "react-icons/fa";
import { SiAdobephotoshop as Photoshop } from "react-icons/si";
import { SiTailwindcss as TailwindCSS } from "react-icons/si";
import { FaLinkedinIn as LinkdinIn } from "react-icons/fa";
import { FaWhatsapp as Whatsapp } from "react-icons/fa";
import { FaXTwitter as Twitter } from "react-icons/fa6";
import { FaGithub as Github } from "react-icons/fa";
import { FaFacebookF as Facebook } from "react-icons/fa";
import { FaInstagram as Instagram } from "react-icons/fa6";
import { IoMdClose as CloseBtn } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaSass } from "react-icons/fa";

//projects images
import commerce from "./assets/E-commerce2.png";
import learning from "./assets/E-learning2.png";
import flavourFiesta from "./assets/FlavourFiesta2.png";
import multistep from "./assets/multistep-form2.png";
import TintTrove from "./assets/TintTrov2.png";
import portfolio from "./assets/portfolio2.png";
import shopify from "./assets/Hackathon.png";

export {
  Hamburger,
  Home,
  Account,
  Document,
  Folder,
  Email,
  LinkdinIn,
  Whatsapp,
  Twitter,
  Github,
  Facebook,
  Instagram,
  CloseBtn,
};

//sidebar section
export const navLinks = [
  { href: "home", label: "Home", active: true, icon: Home },
  { href: "about", label: "About", active: false, icon: Account },
  { href: "experience", label: "Experience", active: false, icon: Document },
  { href: "projects", label: "Projects", active: false, icon: Folder },
  { href: "contact", label: "Contact", active: false, icon: Email },
];

//Tech Stack section
export const techStact = [
  { name: "HTML", id: 1, icon: HTML5, color: "text-red-400" },
  { name: "CSS", id: 2, icon: CSS3, color: "text-secondary" },
  { name: "TailwindCSS", id: 3, icon: TailwindCSS, color: "text-sky-400" },
  { name: "Bootstrap", id: 4, icon: FaBootstrap, color: "text-violet-600" },
  { name: "React", id: 5, icon: FaReact, color: "text-secondary" },
  { name: "SCSS", id: 6, icon: FaSass, color: "text-red-400" },
  { name: "Photoshop", id: 7, icon: Photoshop, color: "text-teal-400" },
];

//experience section
export const experience = [
  {
    name: "UCH",
    post: "Frontend Dev. (SIWES)",
    date: "Oct. 2017-Jan. 2018",
    id: 1,
    company: "University College Hospital, Oyo State, Nigeria",
    responsibilities: [
      {
        name: "Received training in front-end web development using HTML, CSS and JavaScript.",
      },
      {
        name: "Worked closely with other developers and departments on various web development projects.",
      },

      {
        name: "Demonstrated strong problem-solving skills when encountering coding challenges.",
      },
    ],
  },

  {
    name: "Midas",
    post: "Computer Operator",
    date: "Sept. 2019-Nov 2022",
    id: 2,
    company: "Midastouch CyberCafe & Business Center, Oyo State, Nigeria",
    responsibilities: [
      {
        name: "Develop various design elements, including logos, banner, poster etc.",
      },
      {
        name: "Diagnosing and resolving technical issues with computers, printers, network devices, and other IT equipment. Identifying and addressing the root cause of problems to prevent future issues.",
      },
      {
        name: "Maintain the cybercafe's internet connection and troubleshoot connectivity issues.",
      },
    ],
  },

  {
    name: "Certification",
    post: "Coursera",
    date: "2023",
    id: 3,
    company: "Meta Frontend Developer Profesional Certificate",
    responsibilities: [
      {
        name: "Programming with Javascript",
        link: "https://www.coursera.org/account/accomplishments/certificate/T6HMAHZ8HWBV",
      },
      {
        name: "Version Control",
        link: "https://www.coursera.org/account/accomplishments/certificate/WYSALHKJFE2N",
      },
      {
        name: "HTML and CSS in depth",
        link: "https://www.coursera.org/account/accomplishments/certificate/KN22Z7VESSDZ",
      },
      {
        name: "Advanced React",
        link: "https://www.coursera.org/account/accomplishments/certificate/AAZDEM8A78VM",
      },
      { name: "Principle of UI/UX(ongoing...)" },
    ],
  },

  {
    name: "HND",
    post: "Higher National Diploma",
    date: "2019 - 2022",
    id: 4,
    company: "The Polytechnic Ibadan, Oyo State, Nigeria",
    responsibilities: [
      { name: "Course: Computer-Engineering" },
      { name: "Grade: Upper-Credit" },
    ],
  },
];

export const button = [
  { status: true, name: "UCH" },
  { status: false, name: "Midas" },
  { status: false, name: "Certification" },
  { status: false, name: "HND" },
];

//projects section
export const projects = [
  {
    name: "Shopify Onboarding Dashboard",
    thumbnail: shopify,
    desc: "I participated in a hackathon project where we took on the challenge of creating an accessible and seamless onboarding experience catering for three distinct user types: Mouse users, Keyboard-only users, and Screen reader users.",
    Tools: "HTML, CSS, Javascript, Figma",
    source: "https://github.com/BBPIHF/Shopify",
    live: "https://bbpihf.github.io/Shopify/",
  },

  {
    name: "E-commerce Website",
    thumbnail: commerce,
    desc: "I developed an exciting e-commerce project, leveraging a combination of HTML, CSS, and JavaScript to create a dynamic and user-friendly online shopping experience. This project aimed to provide a seamless and visually appealing platform for users to browse products effortlessly.",
    Tools: "HTML, CSS, Javascript",
    source: "https://github.com/BBPIHF/E-commerce",
    live: "https://bbpihf.github.io/E-commerce/",
  },

  {
    name: "FlavourFiesta",
    thumbnail: flavourFiesta,
    desc: "This platform allows users to search for cocktails, Leveraged React Router DOM for seamless navigation between search results and detailed views. Overcame challenges in state management and dynamic routing.",
    Tools: "ReactJs, TailwindCSS",
    source: "https://github.com/BBPIHF/FlavourFiesta",
    live: "https://flavour-fiesta.vercel.app/",
  },

  {
    name: "Multi-step Form",
    thumbnail: multistep,
    desc: "I Designed and implemented a dynamic multi-step form, in this project i faced challenges in form validation, i successfully resolved validation issues, resulting in a streamlined and intuitive multi-step form experience.",
    Tools: "HTML, CSS, Javascript",
    source: "https://github.com/BBPIHF/multi-step-form",
    live: "https://bbpihf.github.io/multi-step-form/",
  },

  {
    name: "TintTrove",
    thumbnail: TintTrove,
    desc: "In this project users can input a hexcode, and the platform dynamically generates various shades based on the provided value, enabling users to copy generated shades to the clipboard effortlessly.",
    Tools: "ReactJs, TailwindCSS",
    source: "https://github.com/BBPIHF/TintTrove",
    live: "https://tint-trove.vercel.app/",
  },

  {
    name: "E-learning platform",
    thumbnail: learning,
    desc: "This E-learning platform allows user to create account or login, the project features also include a user-friendly interface for seamless navigation, responsive design for optimal accessibility across devices,",
    Tools: "HTML, CSS, Javascript, Bootstrap",
    source: "https://github.com/BBPIHF/E-learning",
    live: "https://bbpihf.github.io/E-learning/",
  },

  {
    name: "Portfolio",
    thumbnail: portfolio,
    desc: " Implemented dynamic content rendering and seamless navigation through React's component-based structure, overcame challenges in integrating animations for a visually appealing presentation.",
    Tools: "ReactJs, TailwindCSS, Framer-Motion",
    source: "https://github.com/BBPIHF/portfolio",
    live: "https://inaolaji.vercel.app/",
  },
];

//contact section

export const contacts = [
  {
    icon: LinkdinIn,
    name: "Linkedln",
    link: "https://linkedin.com/in/inaolaji-tope",
  },
  { icon: Github, name: "Github", link: "https://github.com/BBPIHF" },
  { icon: Whatsapp, name: "WhatsApp", link: "https://wa.me/8165881911" },
  {
    icon: Twitter,
    name: "twitter(X)",
    link: "https://twitter.com/natty_graphics",
  },
  { icon: Email, name: "Email", link: "mailto:topeinaolaji1@gmail.com" },
];
