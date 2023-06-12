"use client";

import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const Contact = (props: Props) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    window.location.href = `mailto:tuff2dev@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}.\n${data.message} \n(${data.email})`;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="h-screen justify-center flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-4 mx-auto items-center pt-20"
    >
      <h3 className="text-center absolute top-24 uppercase tracking-[15px] text-2xl text-gray-500">
        Contact
      </h3>

      <div className="flex flex-col space-y-4 lg:space-y-10 w-full">
        <h4 className="text-lg md:text-3xl font-semibold space-y-10 text-center">
          Let&apos;s work together on{" "}
          <span className="underline decoration-[#F7AB0A]/50">
            something awesome.
          </span>
        </h4>

        <div className="space-y-2 lg:space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-base lg:text-2xl">+1234567890</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-base lg:text-2xl">tuff2dev@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-base lg:text-2xl">123 Developer Lane</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col space-y-2 mx-auto">
          <div className="flex flex-col md:flex-row">
            <input
              placeholder="Name"
              className="contactInput md:mr-1 flex-1 mb-2 md:mb-0"
              type="text"
              {...register("name")}
            />
            <input
              placeholder="Email"
              className="contactInput md:ml-1 flex-1"
              type="email"
              {...register("email")}
            />
          </div>
          <input
            placeholder="Subject"
            className="contactInput"
            type="text"
            {...register("subject")}
          />
          <textarea
            placeholder="Message"
            className="contactInput"
            {...register("message")}
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-2 px-4 lg:py-5 lg:px-10 rounded-md text-black font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
