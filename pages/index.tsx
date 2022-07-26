import { services } from "../data";
import ServiceCard from "../components/ServiceCard";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animation";
import { NextPage } from "next";
const About:NextPage = () => {
  return (
    <motion.div variants={routeAnimation} initial='initial' animate='animate'exit='exit' className="flex flex-col flex-grow px-6 pt-1">
      <h6 className="my-3 font-medium">
      I am currently pursuing B.Tech Degree(Final Year) in Computer Science
        Engineering from Academy of Technology. I have 3+ years of experience in
        Web Development and I have a Youtube Channel where I teach Full Stack
        Web Development
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-black-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem"}}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">What I&#39;m doing</h4>
        <motion.div variants={stagger} initial='initial' animate='animate' className="grid gap-6 my-3 md:grid-cols-2">
          {services.map((item, index) => (
            <motion.div variants={fadeInUp} key={index} className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-black-200 md:col-span-1">
              <ServiceCard service={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
