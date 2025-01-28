"use client";

import { projects } from '@/lib/imports';
import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section className="my-32 place-items-center" id="projects">
      <motion.h1
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-science-blue-950 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ amount: 0.5 }}
      >
        My <span className="text-science-blue-600">Projects</span>
      </motion.h1>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-16 justify-center px-4 md:px-8 lg:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {projects.map(({ id, title, des, img, iconLists, link }, index) => (
          <motion.a
            href={`projects/${id}`}
            key={id}
            className="w-full max-w-[400px] md:max-w-[450px] lg:max-w-[550px] rounded-lg overflow-hidden shadow-[0_8px_16px_rgb(0_0_0/0.2)] hover:shadow-[0_12px_24px_rgb(0_0_0/0.3)] transition-shadow duration-300 mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ amount: 0.5 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3, ease: "easeInOut" }}}
          >
           
            <motion.div 
              className="relative h-[240px] md:h-[210px] lg:h-[310px] w-full overflow-hidden bg-science-blue-900 flex items-center justify-center"
              whileHover={{ scale: 1.1, transition: { duration: 0.3, ease: "easeInOut" }}}
            >
              <img
                src={img}
                alt={title}
                className="h-full w-full pt-4 px-4 rounded-t-lg object-cover"
              />
            </motion.div>

           
            <div className="p-6">
              <h1 className="font-bold text-science-blue-950 text-lg md:text-xl lg:text-2xl line-clamp-1">
                {title}
              </h1>
              <p className="text-science-blue-950/80 font-medium text-sm md:text-base lg:text-lg mt-3 line-clamp-2">
                {des}
              </p>
              <div className="flex items-center justify-between mt-6">
         
                <div className='flex items-center'>
                  {iconLists.map((icon, index) => (
                    <motion.div 
                    key={icon} 
                    className='border border-science-blue-500/[0.2] rounded-full bg-science-blue-50 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                    initial={{ x: -5 * index * 2 }}
                    whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
                  >
                    <img src={icon} alt={icon} className='p-2' />
                  </motion.div>
                  ))}
                </div>
               
                <div className="flex items-center">
                  <p className="text-xs md:text-sm lg:text-base text-science-blue-600">
                    Click for more details
                  </p>
                  <FaLocationArrow className="ml-3 text-science-blue-600" />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;