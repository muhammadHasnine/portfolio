import { services } from "../data";
import ServiceCard from "../components/ServiceCard";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animation";
import Head from "next/head";

const About= () => {
  return (
    <motion.div variants={routeAnimation} initial='initial' animate='animate'exit='exit' className="flex flex-col flex-grow px-6 pt-1">
      <Head>
        <title>
          Muhammad Hasnine | Web Developer | About
        </title>
      </Head>
      <h6 className="my-3 font-medium">
      I&#39;m Hasnine, a MERN Stack web developer with expertise in Next.js. With my diploma in computer engineering and experience in bug fixing and collaborating with teams, I&#39;ve honed my skills in creating dynamic and responsive web applications that are not only user-friendly but also scalable.
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
