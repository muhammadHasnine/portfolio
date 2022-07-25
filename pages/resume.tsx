import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { fadeInUp, routeAnimation } from "../animation";
import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { Iskill } from "../type";

// Fetching Api with ISR(Incremental Static Regeneration)
export async function getStaticProps() {
  const res = await fetch(`${process.env.VERCEL_URL}/api/skilllang/get`)
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


const resume:FunctionComponent<{data:Iskill}> = ({data}) => {
// console.log("data",data.skill_lang[0].language)
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
            <p className="my-3">I don't know why I am doing this job</p>
          </div>
        </motion.div>
      </div>
      {/* Languages & tools  */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Fremwork</h5>
          <div className="my-2">
            {data.skill_lang[0].language.map((lang:any, i:number) => (
              <Bar value={lang} key={i} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Software</h5>
          <div className="my-2">
            {data.skill_lang[0].tools.map((tool:any, i:number) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
