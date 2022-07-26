import { motion } from "framer-motion";
import Head from "next/head";
import { fadeInUp, routeAnimation } from "../animation";
import Bar from "../components/Bar";
import { languages, tools } from "../data";
const resume = () => {
  return (
    <motion.div className="px-6 py-2" variants={routeAnimation} initial='initial' animate='animate'exit='exit'>
      <div className="grid md:grid-cols-2 gap-6">
      <Head>
        <title>
          Muhammad Hasnine | Web Developer | Resume
        </title>
      </Head>
        <motion.div variants={fadeInUp} initial='initial' animate='animate'>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Computer Technology</h5>
            <p className="font-semibold">
              Khulna Ploytechnic Institute (2017-2022)
            </p>
            <p className="my-3">
            I&#39;m a Diploma Engineer in Computer Technology from Khulna Polytechnic Institute.
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial='initial' animate='animate'>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">React Js Developer</h5>
            <p className="font-semibold">Learning Support Kit (LSKit)</p>
            <p className="my-3">I hade done this job for experience </p>
          </div>
        </motion.div>
      </div>
      {/* Languages & tools  */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Fremwork</h5>
          <div className="my-2">
            {languages.map((lang, i) => (
              <Bar value={lang} key={i} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Software</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
