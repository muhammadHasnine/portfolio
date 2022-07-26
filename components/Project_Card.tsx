import { FunctionComponent } from "react";
import { IProject } from "../type";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animation";
const Project_Card: FunctionComponent<{ project: IProject ,showDetails:number|null,setshowDetails:(id:null|number)=>void}> = ({
  project: {
    name,
    description,
    image_path,
    deployed_url,
    github_url,
    category,
    key_techs,
    id
  },
  showDetails,
  setshowDetails
}) => {
  
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setshowDetails(id)}
        width="300"
        height="150"
        layout="responsive"
      />
      <p className="text-center my-2 font-bold">{name}</p>
      {showDetails === id && (
        <div  className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 md:p-10 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white rounded-lg dark:bg-black-100">
          <motion.div variants={stagger} initial='initial' animate='animate' >
           <motion.div variants={fadeInUp}  className='border-4 border-[#5ffdc6ca] dark:border-gray-100' >
           <Image
              src={image_path}
              alt={name}
              width="300"
              height="150"
              layout="responsive"
              
            />
           </motion.div>
            <motion.div variants={fadeInUp} className="flex justify-center my-4 space-x-3">
              <a
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-black-200"
                href={github_url}
              >
                <AiFillGithub />
                <span>Github</span>
              </a>
              <a
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-black-200"
                href={deployed_url}
              >
                <AiFillProject />
                <span>Project</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div variants={stagger} initial='initial' animate='animate'>
            <motion.h2 variants={fadeInUp} className="mb-3 text-xl md:text-2xl font-medium">{name}</motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium">{description}</motion.h3>
            <motion.div variants={fadeInUp} className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wide">
              {key_techs.map((items) => (
                <span
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-black-200 rounde-sm"
                  key={items}
                >
                  {items}
                </span>
              ))}
            </motion.div>
          </motion.div>
          <button
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-black-200"
            onClick={() => setshowDetails(null)}
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Project_Card;
