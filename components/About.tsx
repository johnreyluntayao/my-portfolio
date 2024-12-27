"use client";

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa6';
import { about, GlowingButton } from "@/lib/imports"

const About = () => {
  
    const imageRef = React.useRef(null);
    const textRef = React.useRef(null);
    const buttonRef = React.useRef(null);

    const isImageInView = useInView(imageRef, { amount: 0.3 });
    const isTextInView = useInView(textRef, { amount: 0.3 });
    const isButtonInView = useInView(buttonRef, { amount: 0.3 });

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
<section className="mt-32 flex items-center justify-center px-4 lg:px-32" id="about">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    
    <motion.div
      ref={imageRef}
      className="order-2 md:order-1 flex justify-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isImageInView ? 1 : 0, y: isImageInView ? 0 : 100 }}
      transition={{ duration: 1 }}
    >
      <img 
        src="/Johnrey2.png" 
        alt="bg-img" 
        className="w-[300px] md:w-[400px] lg:w-[500px] h-auto" 
      />
    </motion.div>

    
    <motion.div
      ref={textRef}
      className="order-1 md:order-2 flex flex-col items-center md:items-start text-center md:text-start"
      initial={{ opacity: 0, y: -75 }}
      animate={{ opacity: isTextInView ? 1 : 0, y: isTextInView ? 0 : -75 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="heading font-bold mb-4 text-science-blue-950">
        About <span className="text-science-blue-600">Me</span>
      </h1>
      <p className="text-sm md:text-base lg:text-lg font-normal text-science-blue-950 mb-6">
        {about.desc}
      </p>

      
      <motion.a
        href="https://drive.google.com/file/d/1JiBDlFyAMUZmmyEdkYV7HkozYJNyDXw0/view?usp=sharing"
        className="pb-6"
        ref={buttonRef}
        variants={buttonVariants}
        initial="hidden"
        animate={isButtonInView ? "visible" : "hidden"}
      >
        <GlowingButton
          title="See my resume"
          moreClasses="text-white font-bold bg-[linear-gradient(110deg,#0d91ea,45%,#7cc7fd,55%,#0d91ea)]"
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
