"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowNarrowDown } from "react-icons/hi";
import { Spotlight, TextGenerateEffect, GlowingButton } from "@/lib/imports" 

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className=' flex justify-center items-center h-screen mb-16' id='hero'>
      {/* Spotlight Backgrounds */}
      <div>
        <Spotlight className='-top-40 -left-10 rounded-lg md:-left-32 md:-top-20 h-screen' fill="#7cc7fd" />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw] transform rotate-180' fill="#37abf9" />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="#37abf9" />
      </div>

      {/* Overlay */}
      <div className="h-screen w-full dark:bg-black-100 dark:bg-grid-white/[0.03] bg-grid-science-blue-200/[0.3] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]" />
      </div>

      <motion.div
        className="absolute top-5 left-mobile-margin md:left-tablet-margin lg:left-laptop-margin xl:left-desktop-margin z-20 flex items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src="/Logo.svg"
          alt="Logo"
          className="h-10 md:h-12 lg:h-16 "
        />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className='flex justify-center relative my-20 z-10' 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible"
      >
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <motion.h2
            className='uppercase text-science-blue-950 tracking-widest text-xs md:text-sm text-center max-w-80'
            variants={itemVariants}
          >
            Welcome to my Portfolio
          </motion.h2>

          <TextGenerateEffect 
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
            words="Hello, my name is Johnrey!"
          />

          <motion.p
            className='text-center text-science-blue-950 md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'
            variants={itemVariants}
          >
            And I&apos;m a UI/UX Designer, Front-End Developer, and Graphic Designer!
          </motion.p>

          <motion.a 
            href="#about"
            className='lg:pt-5'
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            <GlowingButton 
              title="Know more"
              icon={<HiArrowNarrowDown />}
              position='right'
              moreClasses='text-white bg-[linear-gradient(110deg,#0d91ea,45%,#7cc7fd,55%,#0d91ea)]'
              // bg-[linear-gradient(110deg,#fd7c76,45%,#ff908a,55%,#fd7c76)]
            />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
