import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="h-screen flex relative flex-col text-center md:text-left max-w-[2000px] xl:px-10 min-h-screen justify-center  mx-auto items-center"
    >
      <h3 className="absolute top-20 lg:top-24 uppercase tracking-[15px] text-2xl text-gray-500">
        Skills
      </h3>

      <div className="flex flex-col max-w-xl w-full px-4 space-y-3 lg:space-y-8">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
};

export default Skills;
