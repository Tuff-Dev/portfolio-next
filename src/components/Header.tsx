"use client";

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { PageInfo, Social } from "typings";
// import Link from "next/link";

type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
        }}
        className="flex"
      >
        {/* Social Icons */}
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>
      <motion.div
        onClick={() => {
          location.hash = "#contact";
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
        }}
      >
        <SocialIcon
          network="email"
          fgColor="gray"
          className="cursor-pointer"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
