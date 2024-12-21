"use client"

import React from 'react';
import { detailedProjects } from '@/data';
import { motion, useInView } from 'framer-motion';
import { Spotlight } from './ui/spotlight';
import GlowingButton from '@/components/ui/GlowingButton'
import { FaCode, FaArrowRight } from 'react-icons/fa6'
import { GlobalTextGenerateEffect } from './ui/TextGenerateEffect';

const ProjectHero = ({ id }: { id: number }) => {
  const project = detailedProjects.find((p) => p.id === id);

  // Variants for text and image animations
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        staggerChildren: 0.3, 
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

    const buttonRef = React.useRef(null);
    const isButtonInView = useInView(buttonRef, { amount: 0.3, once: true });
    const buttonVariants = {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: 'easeOut' },
      },
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
          className='grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl justify-center items-center'
          initial='hidden'
          animate='visible'
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <GlobalTextGenerateEffect 
            className='text-center md:text-center lg:text-start'
            words={project.title}
            extraClassName='font-bold text-[#45C7D1] text-[40px] md:text-3xl lg:text-4xl mb-[25px]'
            />
            <p className='text-center lg:text-start text-white/80 md:tracking-wider mb-[30px] text-sm md:text-md lg:text-lg'>
              {project.desc}
            </p>

            <motion.a
        href={project.srcLink}
        className={` ${id === 7 ? 'hidden' : ''} flex justify-center lg:justify-start`}
        ref={buttonRef}
        variants={buttonVariants}
        initial="hidden"
        animate={isButtonInView ? 'visible' : 'hidden'}
        >
        <GlowingButton 
            title={`${id === 3 || id === 4 ? `Visit site` : `Source code`}`}
            moreClasses='bg-[linear-gradient(110deg,#fd7c76,45%,#ff908a,55%,#fd7c76)] text-white font-bold'
            //bg-[linear-gradient(110deg,#0d91ea,45%,#7cc7fd,55%,#0d91ea)]
            icon={id === 1 || id === 5 || id === 6 ? <FaCode /> : <FaArrowRight />}
            position='right'
        />
        </motion.a>
          </motion.div>

          <motion.div className='flex items-center justify-center' variants={imageVariants}>
            <motion.img
              src={project.image}
              alt={project.title}
              width={800}
              height={800}
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
