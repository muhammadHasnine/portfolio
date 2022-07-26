import { IProject ,Iskill,Service } from "./type";
import {RiComputerLine} from "react-icons/ri"
import { FaServer } from "react-icons/fa";
import { AiOutlineApi ,AiOutlineAntDesign } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import {BsCircleFill} from "react-icons/bs"
export const services:Service[] = [
  {
    
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
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
    level:"45%",
    Icon:BsCircleFill,
  },
  {
    name:"React Js",
    level:"70%",
    Icon:BsCircleFill,
  },
  {
    name:"Node Js",
    level:"40%",
    Icon:BsCircleFill,
  },
  {
    name:"Next Js",
    level:"40%",
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
     name: 'Framer',
     level: '45%',
  },
]
export const projects: IProject[] = [
  { 
    id:1,
    name: "Personal Blog site",
    description:
      "In this app a person can post his Articles, Books , Videos. It is a CMS app that why a person can handel all those things by him self easily. Me and my Friend Khan Afif Farhan Develop this App.",
    image_path: "/images/ahmadullah-saidpury.png",
    deployed_url: "https://ahmadullahsaidpury.netlify.app/",
    github_url: "https://github.com/muhammadHasnine",
    category: ["react","node","mongo","express"],
    key_techs: [ "Mongo DB","Express","React js", "Node js","Redux"],
  }
];