import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animation";
import Bar from "../components/Bar";
import { languages, tools } from "../data";
const resume = () => {
  return (
    <motion.div className="px-6 py-2" variants={routeAnimation} initial='initial' animate='animate'exit='exit'>
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div variants={fadeInUp} initial='initial' animate='animate'>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Computer Technology</h5>
            <p className="font-semibold">
              Khulna Ploytechnic Institute (2017-2022)
            </p>
            <p className="my-3">
              I am currently pursuing B.tech in Computer Science Engineering
              from Academy of Technology
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial='initial' animate='animate'>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Software Developer Jr.</h5>
            <p className="font-semibold">Tata Consultancy Services</p>
            <p className="my-3">I don&apos;t know why I am doing this job</p>
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
