import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const Skill = ({}: Props) => {
  return (
    <div className="flex space-x-4 items-center">
      <p>React</p>
      <div className="w-full h-8 border border-gray-500 relative rounded">
        <motion.div
          initial={{
            padding: "0",
            width: 0,
          }}
          animate={{
            width: "50%",
            padding: "0 10px",
          }}
          transition={{ duration: 2 }}
          className="skill absolute  h-full rounded px-4 overflow-hidden flex justify-end items-center"
        >
          <span>100%</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Skill;
