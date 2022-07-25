import { FunctionComponent } from "react";
import { Iskill } from "../type";
import { animate, motion } from "framer-motion";
import {BsCircleFill} from "react-icons/bs"
const Bar: FunctionComponent<{ value: Iskill }> = ({
  value: { level, name },
}) => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: level,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };
  return (
    <div className="my-2 text-white rounded-full bg-gray-300 dark:bg-black-300">
      <motion.div
        className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-500"
        variants={variants}
        initial="initial"
        animate="animate"
        style={{ width: level }}
      >
        <BsCircleFill className="mr-3" /> {name}
      </motion.div>
    </div>
  );
};

export default Bar;
