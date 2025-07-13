import {
  aws,
  backend,
  microservice,
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
  docker,
  meta,
  hexaview,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "NodeJs Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Amazon Web Services",
    icon: aws,
  },
  {
    title: "Microservice Architecture",
    icon: microservice,
  },
];

const technologies = [
    "nodejs",
  "express",
  "react",
  "redux",
  "tailwind",
  "javascript",
  "typescript",
  "html",
  "css",
  "cpp",
  "mysql",
  "mongodb",
  "redis",
  "dynamodb",
  "firebase",
  "npm",
  "git",
  "github",
  "aws",
  "postman",
  "docker",
];

const experiences = [
  {
    title: "Application Engineer",
    company_name: "Hexaview Technologies",
    icon: hexaview,
    iconBg: "#ffffff",
    date: "April 2023 - Present",
    points: [
      "Led development of Modernizing JSP-based monolithic application to Node.js microservices, achieving a infrastructural <b>costs reduction by 15%</b> through efficient resource utilization.",
      "Designed and implemented different authorization & authentication methods like <br> -> Email/password <br> -> JWT <br> ->  SAML Based (using Azure) <br> ->  Oauth2.0 <br> ->  Firebase authentication (SSO based IdP).",
      "Designed and implemented 4 layered architecture for security of application: <br> VPN -> Outh2.0 -> database -> Role based authorization.",
      "Trained developer in React and Nodejs framework.",
    ],
  },
  {
    title: "Associate Application Engineer",
    company_name: "Hexaview Technologies",
    icon: hexaview,
    iconBg: "#ffffff",
    date: "Sept 2022 - April 2023",
    points: [
      "Gained hands-on experience with MERN, Blockchain and Web3js.",
      "Designed and deployed smart contracts using Solidity focused on creating secure, efficient & gas-optimized contracts.",
      "Worked on integration of Metamask wallet for seamless user transactions.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    image: carrent,
    source_code_link: "https://github.com/",
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

export { services, technologies, experiences, projects };