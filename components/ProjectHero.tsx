"use client"

import React from 'react';
import { projects } from '@/data';
import { motion } from 'framer-motion';
import { Spotlight } from './ui/spotlight';

const ProjectHero = ({ id }: { id: number }) => {
  const project = projects.find((p) => p.id === id);

  // Variants for text and image animations
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        staggerChildren: 0.3, // Stagger effect for child elements
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    // bg-gradient-to-r from-[#0069b7] to-[#009daf]
    <div
      className=' flex justify-center bg-science-blue-900 items-center py-32 mx-auto sm:px-10 px-5 h-screen'
      id='project-hero'
    >
      <div>
        <Spotlight className='-top-40 -left-10 rounded-lg md:-left-32 md:-top-20 h-screen' fill="#7cc7fd" />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw] transform rotate-180' fill="#7cc7fd" />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="#7cc7fd" />
      </div>
      {project ? (
        <motion.div
          className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl justify-center items-center'
          initial='hidden'
          animate='visible'
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h1 className='text-center font-bold text-[#42c7cf] lg:text-start text-[40px] md:text-4xl lg:text-5xl mb-8'>
              {project.title}
            </h1>
            <p className='text-center lg:text-start text-white/80 md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
              {project.des}
            </p>
          </motion.div>

          <motion.div className='flex items-center justify-center' variants={imageVariants}>
            <motion.img
              src={project.img}
              alt={project.title}
              width={500}
              height={500}
              className={`rounded-lg ${id === 5 ? "w-[15vw] h-[60vh]" : "" }`}
            />
          </motion.div>
        </motion.div>
      ) : (
        <h1>Not Found</h1>
      )}
    </div>
  );
};

export default ProjectHero;
