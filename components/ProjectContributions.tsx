"use client"

import { ProjectRole } from '@/lib/imports';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ProjectContributions = ({id} : {id: number}) => {
  const contributions = ProjectRole.find((role) => role.id === id)
  const ref = useRef(null);
  const inView = useInView(ref); 

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.3, 
      },
    }),
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }, 
    },
  };

  return (
    <section className={`${id === 8 || id === 3 ? 'hidden' : 'flex relative max-w-max pb-16 mt-16 place-items-center justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'}`} ref={ref}>
      <motion.h1
        className='heading text-science-blue-950'
        variants={headingVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"} 
      >
        My {' '}
        <span className='text-science-blue-600'>Contributions</span>
      </motion.h1>

      {contributions ? (
            <div
            className={`w-full mt-24 grid gap-8 place-items-center
              grid-cols-1 
              md:grid-cols-${contributions.roles.length === 1 ? 1 : 2} 
              lg:grid-cols-${Math.min(contributions.roles.length, 4)}`}
          >
            {contributions.roles.map((role, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-center p-4 bg-white shadow-lg border border-slate-100 rounded-lg h-full max-w-[500px]"
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={index}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
          
                <div className="absolute -top-12 flex items-center justify-center w-20 h-20 bg-science-blue-100 rounded-full">
                
                  <img
                    src={role.icon}
                    alt={role.title}
                    className="w-12 h-12 text-science-blue-500"
                  />
                </div>
               
                <h3 className="mt-8 mb-2 text-center text-lg lg:text-2xl md:text-xl font-bold text-science-blue-950">{role.title}</h3>
                <p className="lg:text-base md:text-base text-sm text-science-blue-950 font-light text-center m-2">{role.quote}</p>
              </motion.div>
            ))}
          </div> ) : (
            <div>Not Found</div>
    )}

    </section>
  );
};

export default ProjectContributions;
