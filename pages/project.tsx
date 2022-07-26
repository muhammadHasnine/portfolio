import { motion } from "framer-motion"
import Head from "next/head"
import { useState } from "react"
import { fadeInUp, routeAnimation, stagger } from "../animation"
import Project_Card from "../components/Project_Card"
import Project_Navbar from "../components/Project_Navbar"
import { projects as projectsData } from "../data";
import { Category } from "../type"
const Project = () => {
    const [projects, setprojects] = useState(projectsData)
    const [active, setactive] = useState("all")
    const [showDetails, setshowDetails] = useState<number|null >(null);
  
    const handleFilterCategory = (category:Category | "all")=>{
        if(category === "all"){
            setprojects(projectsData);
            setactive(category)
            return;
        }
        const newArray = projectsData.filter((project:any)=>project.category.includes(category))
        setprojects(newArray)
        setactive(category)
    }

  return (
    <motion.div variants={routeAnimation} initial='initial' animate='animate'exit='exit'  className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
        <Head>
        <title>
          Muhammad Hasnine | Web Developer | Project
        </title>
      </Head>
            <Project_Navbar handleFilterCategory={handleFilterCategory} active={active}/>
        <motion.div variants={stagger} initial='initial' animate='animate' className="relative grid grid-cols-12 gap-4 my-3">
            {
                projects.map((items,index)=>(
                    <motion.div key={index} variants={fadeInUp} className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-black-200">
                        <Project_Card project={items} key={items.name} showDetails={showDetails} setshowDetails={setshowDetails}/>
                    </motion.div>
                ))
            }
        </motion.div>
    </motion.div>
  )
}

export default Project