"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { mainSkills } from '@/lib/imports';

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref); 

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.2,
        ease: "easeInOut",
      },
    }),
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <section className='relative max-w-max my-16 md:my-24 lg:my-32' id="skills" ref={ref}>
      <motion.h1
        className='heading text-science-blue-950'
        variants={headingVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"} 
      >
        My {' '}
        <span className='text-science-blue-600'>Main Skills</span>
      </motion.h1>

      <div className='mt-28 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 gap-y-20 max-w-7xl'>
        {mainSkills.map((skill, index) => (
          <motion.div
            key={skill.id}
            className="relative flex flex-col items-center p-4 bg-white shadow-lg border border-slate-100 rounded-lg h-full max-w-xs"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={index} 
            whileHover={{ scale: 1.03, rotate: 1 }}
          >
            <div className="absolute -top-12 flex items-center justify-center w-20 h-20 bg-science-blue-100 rounded-full">
              <Image
                src={skill.logo}
                alt={skill.title}
                width={48}
                height={48}
                className="text-science-blue-500"
              />
            </div>
            
            <h3 className="mt-8 mb-2 text-center text-lg lg:text-2xl md:text-xl font-bold text-science-blue-950">{skill.title}</h3>
            <p className="lg:text-base md:text-base text-sm text-science-blue-950 font-light text-center m-2">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
