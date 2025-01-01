import { IProject ,Iskill,Service } from "./type";
import {RiComputerLine} from "react-icons/ri"
import { FaServer } from "react-icons/fa";
import { AiOutlineApi ,AiOutlineAntDesign } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import {  BsCircleFill } from "react-icons/bs"
export const services:Service[] = [
  {
    
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>,<b>React.js</b> and <b>Next.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b>",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>Node API</b> ",
  },
]
export const languages:Iskill[] = [
  {
    name:"HTML",
    level:"85%",
    Icon:BsCircleFill,
  },
  {
    name:"CSS",
    level:"80%",
    Icon:BsCircleFill,
  },
  {
    name:"Javascript",
    level:"70%",
    Icon:BsCircleFill,
  },
  {
    name:"React Js",
    level:"80%",
    Icon:BsCircleFill,
  },
  {
    name:"Node Js",
    level:"50%",
    Icon:BsCircleFill,
  },
  {
    name:"Next Js",
    level:"80%",
    Icon:BsCircleFill,
  },
  {
    name:"Tailwind CSS",
    level:"70%",
    Icon:BsCircleFill,
  },
]
export const tools: Iskill[] = [
 
  {
     Icon: BsCircleFill,
     name: 'Photoshop',
     level: '45%',
  },
  {
     Icon: BsCircleFill,
     name: 'Illustrator',
     level: '40%',
  },
  {
     Icon: BsCircleFill,
     name: 'Figma',
     level: '45%',
  },
  {
     Icon: BsCircleFill,
     name: 'Postman',
     level: '80%',
  },
]
export const projects: IProject[] = [
  { 
    id:1,
    name: "Personal Blog site",
    description:
      `This project is a personal blog website that was built by a team using the MERN stack. The site includes an admin panel for site administrators to manipulate posts, videos, and books. It features tools for creating, editing, and deleting posts, managing user accounts, and site settings. The site has a modern and dynamic web interface that makes it easy to manage content and share it with the audience. Admins can upload and display videos on a dedicated page for viewers to watch and create a book list page to display recommended books. This was a collaborative effort between you and your friend to design, build, and launch the website.`,
    image_path: "/images/ahmadullah-saidpury.png",
    deployed_url: "https://ahmadullahsaidpury.netlify.app/",
    github_url: "https://github.com/muhammadHasnine",
    category: ["MERN Stack","Team Work"],
    key_techs: [ "Mongo DB","Express","React js", "Node js","Redux"],
  },
  { 
    id:2,
    name: "Shikkah",
    description:
      "Shikkah is a course selling website built using the MERN stack (MongoDB, Express, React, and Node.js). The site uses the Stripe subscription payment system and includes an admin panel to maintain the website. User authentication is implemented using JWT tokens, and the site features user login and logout functionality. The frontend UI is built using Chakra UI, and Redux toolkit is used to manage the state of the application. Overall, the project provides a seamless experience for users to purchase courses and for admins to manage the website.",
    image_path: "/images/shikkah.png",
    deployed_url: "https://shikkah.vercel.app",
    github_url: "https://github.com/muhammadHasnine",
    category: ["MERN Stack"],
    key_techs: [ "Mongo DB","Express","React js", "Node js","Redux-toolkit","Stripe","Chakra UI","Cloudinary","Nodemailer","JWT","React Hot Toast","CORS"],
  },
  { 
    id:3,
    name: "Ajtimae",
    description:`Ajtimae is a social media website built using the MERN stack (MongoDB, Express, React, and Node.js). The site includes a login/logout system and features like, comment, and follow functionality for users to interact with each other. Users can create posts through their profiles, maintain their profiles by changing their profile picture, name, and email, and can reset their password using NodeMailer. Images are stored in Cloudinary, and Redux toolkit is used to manage the state of the application. Overall, the project provides a modern and dynamic social media experience for users to interact and share content with each other.`,
    image_path: "/images/ajtimae.png",
    deployed_url: "https://ajtimae.netlify.app",
    github_url: "https://github.com/muhammadHasnine",
    category: ["MERN Stack"],
    key_techs: [ "Mongo DB","Express","React js", "Node js","Redux-toolkit","Cloudinary","JWT","React Toastify","CORS"],
  },
  { 
    id:4,
    name: "Martcom",
    description:"Martcom is an ecommerce website built using the MERN stack (MongoDB, Express, React, and Node.js). The site includes all the necessary functionalities required to run an ecommerce business, such as product listings, shopping cart, checkout, payment gateway integration, order tracking, and customer reviews. The site also includes a user registration and login system for customers to manage their orders and payment information. The project provides a seamless and user-friendly ecommerce experience for customers to shop for products and for the site owner to manage their business efficiently.",
    image_path: "/images/ecommerce.png",
    deployed_url: "https://martcom.vercel.app/",
    github_url: "https://github.com/muhammadHasnine",
    category: ["MERN Stack","Tailwind CSS"],
    key_techs: [ "Mongo DB","Express","React js", "Node js","Redux","Cloudinary","JWT","React Toastify","CORS","Tailwind CSS",],
  },
  { 
    id:5,
    name: "Sweets Wala",
    description:"Sweet wala is a web-based platform for selling sweets, built using the MERN (MongoDB, Express, React, Node.js) stack. The frontend of the website has been completed, while the backend is still under development. Once fully functional, the website will offer a user-friendly interface that allows customers to browse and purchase sweets from a variety of vendors. The website will leverage the power of MongoDB for data storage, Express for server-side web application framework, React for frontend development, and Node.js for server-side JavaScript. With this technology stack, Sweet wala will be a robust and scalable solution that provides an engaging shopping experience for customers.",
    image_path: "/images/sweets-wala.png",
    deployed_url: "https://sweets-wala.netlify.app/",
    github_url: "https://github.com/muhammadHasnine",
    category: ["React Js"],
    key_techs: [ "React js","Framer motion"],
  },
  { 
    id:6,
    name: "My new Portfolio",
    description:"This is my new portfolio where i'm showcasing my projects.",
    image_path: "https://res.cloudinary.com/dd77bcaju/image/upload/v1735706218/Portfolio-projects/hasnineoldportfolio_r0hwln.png",
    deployed_url: "https://hasnine.vercel.app",
    github_url: "#",
    category: ["React Js"],
    key_techs: [ "React js","Framer motion"],
  },
];
