import { IconType } from "react-icons";
export interface Service {
    title:string,
    about:string,
    Icon:IconType
}

export interface Iskill {
    name:string,
    level:string,
    Icon:IconType,
}


export interface IProject {
    id:number;
    name:string;
    description:string;
    image_path:string;
    deployed_url:string;
    github_url:string;
    category:Category[];
    key_techs:string[];
}
export type Category = "MERN Stack" | "React Js" | "Tailwind CSS" | "Team Work"