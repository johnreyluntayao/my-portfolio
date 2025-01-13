"use client";

import { projects } from '@/lib/imports';
import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section className="mt-24 mb-16 place-items-center" id="projects">
      <motion.h1
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-science-blue-950 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.5 }}
      >
        Some of my <span className="text-science-blue-600">Projects</span>
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 justify-center">
        {projects.map(({ id, title, des, img, iconLists, link }, index) => (
          <motion.a
            href={`projects/${id}`}
            key={id}
            className="max-w-[500px] max-h-[530px] rounded-lg overflow-hidden shadow-[0_8px_16px_rgb(0_0_0/0.2)]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
            viewport={{ amount: 0.5 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 }}}
            animate={{ scale: 1, transition: { duration: 0.3 } }} 
          >

        
              {/* Card Image */}
              <div className="relative h-[230px] md:h-[200px] lg:h-[300px] overflow-hidden bg-science-blue-900 flex items-center justify-center">
                <img
                  src={img}
                  alt={title}
                  className="h-full px-4 pt-4 rounded-t-3xl"
                />
              </div>

              {/* Card Content */}
              <div className="p-4">
                <h1 className="font-bold text-science-blue-950 text-lg md:text-xl lg:text-2xl line-clamp-1">
                  {title}
                </h1>
                <p className="text-science-blue-950/80 font-medium text-sm md:text-base lg:text-lg mt-3 line-clamp-2">
                  {des}
                </p>
                <div className="flex items-center justify-between mt-6">
                  {/* Icons */}
                  <div className='flex items-center'>
                    {iconLists.map((icon, index) => (
                      <div key={icon} className='border border-science-blue-500/[0.2] rounded-full bg-science-blue-50 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' 
                        style={{ transform: `translateX(-${5 * index * 2}px)` }}>
                        <img src={icon} alt={icon} className='p-2' />
                      </div>
                    ))}
                  </div>
                        {/* Details Link */}
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
      </div>
    </section>
  );
};

export default Projects;
