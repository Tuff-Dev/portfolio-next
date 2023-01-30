"use client";

import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Software Engineer.", "Web Developer.", "Squash Player."],
    delaySpeed: 1000,
    deleteSpeed: 40,
    typeSpeed: 50,
    loop: false,
  });
  return (
    <div className="h-[90vh] flex flex-col md:space-y-6 items-center justify-center text-center ">
      <BackgroundCircles />
      {/* TODO: Replace with Next Image component */}
      <Image
        src="/me.jpg"
        alt="me"
        width="140"
        height="140"
        className="rounded-full z-20"
      />
      <div className="z-20">
        <h1 className="text-xl md:text-2xl text-gray-500 tracking-widest">
          Will Tuffin
        </h1>

        <h2 className="text-xl md:text-3xl font-semibold">
          <span className="">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h2>

        <div className="pt-4">
          <a href="#about" className="heroButton">
            About
          </a>
          <a href="#experience" className="heroButton">
            Experience
          </a>
          <a href="#skills" className="heroButton">
            Skills
          </a>
          <a href="#projects" className="heroButton">
            Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
