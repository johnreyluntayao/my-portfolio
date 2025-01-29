"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GlowingButton } from "@/lib/imports";
import { FaLocationArrow } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      ease: "easeOut",
      duration: 0.8,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 10 },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 8 },
  },
  hover: { scale: 1.08, transition: { duration: 0.2 } },
  tap: { scale: 0.95 },
};

const Contact = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { margin: "-50px" });

  return (
    <section
      ref={footerRef}
      className="relative mb-16 p-[100px] max-w-max mx-auto sm:px-10 px-5 bg-gradient-to-r from-science-blue-500 to-science-blue-800 rounded-tl-[100px] rounded-br-[100px] rounded-bl-[100px] md:rounded-bl-none shadow-lg"
      id="contact"
    >
      <motion.div
        className="relative z-10 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h1 className="heading lg:max-w-[45vw] text-white" variants={headingVariants}>
          Ready to Hire me?
        </motion.h1>
        <motion.p
          className="text-white md:mt-8 my-5 text-center lg:text-lg md:text-base text-sm"
          variants={textVariants}
        >
          Reach out to me today! Let&apos;s discuss how to make you achieve your goals.
        </motion.p>
        <motion.a
          className="mt-8"
          href="mailto:johnrey.luntayao23@gmail.com"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <GlowingButton
            title="Let's Connect!"
            icon={<FaLocationArrow />}
            position="right"
            moreClasses="text-science-blue-500 font-semibold bg-white"
          />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Contact;
