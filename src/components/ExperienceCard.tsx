"use client";

import urlFor from "@/lib/urlFor";
import { motion } from "framer-motion";
import Image from "next/image";
import me from "public/me.jpg";
import { Experience } from "typings";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="mt-12 flex flex-col rounded-lg items-center space-y-5 flex-shrink-0  md:w-[600px] xl:w-[700px] snap-center bg-[#292929] p-8 opacity-50 hover:opacity-100 cursor-pointer transition-opacity overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-28 h-28 xl:w-[200px] xl:h-[200px] object-cover"
      >
        <Image src={me} alt="do something" className="rounded-full" />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-xl lg:text-3xl font-light">
          {experience.jobTitle}
        </h4>
        <p className="font-bold text-lg lg:text-xl mt-2">
          {experience.company}
        </p>
        <div className="flex space-x-2 lg:space-x-4 my-4">
          {experience.technologies.map((tech) => (
            <Image
              key={`${experience.jobTitle}-${tech.title}`}
              src={urlFor(tech.image).url()}
              alt={tech.title}
              width={50}
              height={50}
            />
          ))}

          {/* Tech Used */}
          {/* Tech Used */}
          {/* Tech Used */}
          {/* Tech Used */}
        </div>
        <p className="uppercase text-base py-2 text-gray-300">
          Started... ended
        </p>
        <ul className="list-disc space-y-2 lg:space-y-4 ml-5 text-sm lg:text-base">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
