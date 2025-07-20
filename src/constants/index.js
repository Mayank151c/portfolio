import {
  aws,
  backend,
  microservice,
  web,
  hexaview,
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
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
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
  "jenkins",
  "jest",
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
    name: "Migration to Nodejs",
    description: [
      "Modernized architecture monolithic to microservice which reduced latency by 20%.",
      "Upgrade authentication from LDAP to Outh2.0 which improved system accessibility.",
      "Implemented Redis-based rate limiter to throttle requests and protect critical endpoints with 100 RPM in a window.",
      "Utilized Micro frontends (MFEs) to develop UI of the application.",
      "Using Agile principals like TDD, Sprint planning, Daily standups, Regular customer feedback.",
    ],
    techStack: ["Node.js", "React.js", "Redux", "MySQL", "S3", "SQS", "Lambda Authorizer", "JSP", "Java", "Jest"],
    colors: ["sky-500", "lime-500", "amber-500", "cyan-500", "rose-500", "violet-500"],
    image: false,
    source_code_link: false,
  },
  {
    name: "Healthcare Portals",
    description: [
      "Built scalable Rest APIs with Node.js & Express using MVC design.",
      "Developed server & serverless APIs using Express.js, AWS Serverless Framework (SLS), and AWS AppSync.",
      "Implemented centralized logging and error tracking with Winston and CloudWatch.",
      "Extended chat functionality across multiple applications using Dynamodb and Appsync.",
    ],
    techStack: ["Node", "Express", "React", "Redux", "Tailwind", "Typescript", "SQL", "DynamoDb", "AWS Cognito", "Serverless"],
    colors: ["sky-500", "lime-500", "amber-500", "cyan-500", "rose-500", "violet-500"],
    image: false,
    source_code_link: false,
  },
  {
    name: "Finance Job Portal",
    description: [
      "Integrated 2 authentication methods, Email/Password and SSO based Identity Provider (Google & Microsoft).",
      "Streamlined API documentation with Swagger helps reduce onboarding time.",
      "Role based Authorization specific permissions to administrators, advisors & providers for a smooth workflow.",
      "Integrated Firebase chat functionality for real-time communication among 3 types of end users.",
    ],
    techStack: ["Node", "Express", "React", "MySQL", "Firebase", "S3", "SNS", "Swagger", "Jenkins", "Docker"],
    colors: ["sky-500", "lime-500", "amber-500", "cyan-500", "rose-500", "violet-500"],
    image: false,
    source_code_link: false,
  },
];

export { services, technologies, experiences, projects };