import { motion } from "framer-motion"
import { FunctionComponent, useEffect, useState } from "react"
import { fadeInUp, routeAnimation, stagger } from "../animation"
import Project_Card from "../components/Project_Card"
import Project_Navbar from "../components/Project_Navbar"
import { projects as projectData } from "../data"
import { Category, IProject } from "../type"
import Axios from "axios"
const Project:FunctionComponent<{data:IProject }> = ({data}) => {
    // const [projects, setprojects] = useState(projectData)
    const [projects, setprojects] = useState(data.project)
    const [active, setactive] = useState("all")
    const [showDetails, setshowDetails] = useState<number|null >(null);
  
    const handleFilterCategory = (category:Category | "all")=>{
        if(category === "all"){
            setprojects(data.project);
            setactive(category)
            return;
        }
        const newArray = data.project.filter((project:any)=>project.category.includes(category))
        setprojects(newArray)
        setactive(category)
    }

  return (
    <motion.div variants={routeAnimation} initial='initial' animate='animate'exit='exit'  className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
            <Project_Navbar handleFilterCategory={handleFilterCategory} active={active}/>
        <motion.div variants={stagger} initial='initial' animate='animate' className="relative grid grid-cols-12 gap-4 my-3">
            {
                projects.map((items:any)=>(
                    <motion.div variants={fadeInUp} className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-black-200">
                        <Project_Card project={items} key={items.name} showDetails={showDetails} setshowDetails={setshowDetails}/>
                    </motion.div>
                ))
            }
        </motion.div>
    </motion.div>
  )
}

export async function getStaticProps() {
    const res = await fetch(`${process.env.VERCEL_URL}/api/project/get`)
    const data = await res.json()
  
    return {
      props: {
        data,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate: 10, // In seconds
    }
  }

export default Project