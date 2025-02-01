"use client";

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';
import { about, GlowingButton } from "@/lib/imports";

const About = () => {
  
    const imageRef = React.useRef(null);
    const textRef = React.useRef(null);
    const buttonRef = React.useRef(null);
    const lineRef = React.useRef(null);

    const isImageInView = useInView(imageRef, { amount: 0.3 });
    const isTextInView = useInView(textRef, { amount: 0.3 });
    const isButtonInView = useInView(buttonRef, { amount: 0.3 });
    const isLineInView = useInView(lineRef, { amount: 0.3 });

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
        },
        hover: {
          scale: 1.05,
          transition: { duration: 0.2, ease: 'easeOut' },
        },
    };

    return (
<section className="relative mt-16 md:mt-24 lg:mt-32 flex items-center justify-center px-4 lg:px-32 max-w-max" id="about">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    
    <motion.div
      ref={imageRef}
      className="order-2 md:order-1 flex justify-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isImageInView ? 1 : 0, y: isImageInView ? 0 : 100 }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Image
        src="/Johnrey2.png"
        alt="bg-img"
        width={300}
        height={0} 
        className="md:w-[400px] lg:w-[500px] h-auto"
      />

    </motion.div>

    
    <motion.div
      ref={textRef}
      className="order-1 md:order-2 flex flex-col items-center md:items-start text-center md:text-start max-w-md"
    >

      <motion.div
        ref={lineRef}
        className="w-14 h-2 bg-science-blue-600 mb-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: isLineInView ? 1 : 0, x: isLineInView ? 0 : -50 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      />

      <motion.h1 
        className="heading font-bold mb-4 text-science-blue-950"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: isTextInView ? 1 : 0, x: isTextInView ? 0 : -50 }}
        transition={{ delay: 0.4, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        About <span className="text-science-blue-600">Me</span>
      </motion.h1>

      <motion.p 
        className="text-sm md:text-base lg:text-lg font-normal text-science-blue-950 mb-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: isTextInView ? 1 : 0, x: isTextInView ? 0 : -50 }}
        transition={{ delay: 0.6, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {about.desc}
      </motion.p>

      <motion.a
        href="https://drive.google.com/file/d/1-8q5YKcTNVNhi7hULIVXUh5B00qrBpKQ/view?usp=sharing"
        className="pb-6"
        ref={buttonRef}
        variants={buttonVariants}
        initial="hidden"
        animate={isButtonInView ? "visible" : "hidden"}
        whileHover="hover"
        transition={{ delay: 0.8, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <GlowingButton
          title="My resume"
          moreClasses="text-white bg-[linear-gradient(110deg,#0d91ea,45%,#7cc7fd,55%,#0d91ea)]"
          icon={<FaArrowRight />}
          position="right"
        />
      </motion.a>
    </motion.div>
  </div>
</section>

    );
};

//bg-[linear-gradient(110deg,#fd7c76,45%,#ff908a,55%,#fd7c76)]

export default About;
