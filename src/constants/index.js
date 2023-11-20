import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  pace,
  meltek,
  jungle,
  jungle1,
  carrent,
  revolutionart,
  revolutionArtIcon,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "introduction",
    title: "Introduction",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "CPA",
    title: "CPA",
  },
  {
    id: "Art",
    title: "Art",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Graduate Research Assistant",
    company_name: "Pace University, Lubin School of Business",
    icon: pace,
    iconBg: "#FFFFFF",
    date: "Jan 2020 - Jul 2021",
    points: [
      "Integrated & processed data to draw conclusions about default risks, annual returns, & dividends of NY banks using Excel, accelerating 2.5hr task to 15 minutes by developing self-learning VBA code to calculate complex formulas in batches.",
      "Leveraged Moody's Bank & Finance Manual to mine historical data in money market using Excel to discover retail changes.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Meltek Inc.",
    icon: meltek,
    iconBg: "#FFFFFF",
    date: "Feb 2023 - Jun 2023",
    points: [
      "Develops and troubleshoot enhancements on business process automation on Microsoft Azure to streamline workflows.",
      "Integrate third-party APIs using RESTful API & JSON to enhance user interaction and improve user experience (UX).",
      "Corporates with energy company such as Con Edison to increase revenue, improve competitiveness and increase efficiency.",
    ],
  },
  {
    title: "Founder",
    company_name: "JungleKidCoders",
    icon: jungle1,
    iconBg: "#FFFFFF",
    date: "June 2023 - Present",
    points: [
      "Founded and established JungleKidCoders, a technology company focused on empowering young minds with coding and digital skills, fostering a new generation of tech-savvy innovators and problem solvers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Revolution Art",
    role: "Lead Developer",
    description:
      "Web-based platform that allows selllers to upload & sell their artworks, and allows buyers to search, buy, like artworks, providing a convenient and efficient solution for artwork-selling needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: revolutionart,
    source_code_link: "https://github.com/zdisanto/RevolutionArt.git",
    image_website: revolutionArtIcon,
    source_code_link_website: "https://revolution-art.netlify.app/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };