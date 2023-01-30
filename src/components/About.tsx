import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import me from "public/me.jpg";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="h-screen justify-center flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-8 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[15px] text-2xl text-gray-500">
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-[300px] relative m-8"
      >
        <Image
          src={me}
          alt="me"
          className="rounded-full md:rounded-lg object-contain"
        />
      </motion.div>

      <div className="space-y-10 md:px-10">
        <h4 className="text-xl md:text-3xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A] text-2xl md:text-4xl">
            little
          </span>{" "}
          background
        </h4>
        <p className="text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
