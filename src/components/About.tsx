"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PageInfo } from "typings";
import urlFor from "@/lib/urlFor";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
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
        className="max-w-[300px] w-72 h-72 relative m-8 flex-1"
      >
        <Image
          src={urlFor(pageInfo.heroImage).url()}
          alt="About me picture"
          fill
          className="rounded-lg object-contain"
        />
      </motion.div>

      <div className="space-y-10 md:px-10 flex-1">
        <h4 className="text-xl md:text-3xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A] text-2xl md:text-4xl">
            little
          </span>{" "}
          background
        </h4>
        <p className="text-sm md:text-base">{pageInfo.backgroundInformation}</p>
      </div>
    </motion.div>
  );
};

export default About;
