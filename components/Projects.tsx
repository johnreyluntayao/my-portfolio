"use client"

import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className='py-32' id="projects">
      <motion.h1 
        className='heading text-science-blue-950'
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{amount: 0.3,}}
      >
        Some of my {' '} 
        <span className='text-science-blue-600'>Projects</span>
      </motion.h1>
      <div className='flex flex-wrap items-center justify-center gap-x-24'>
        {projects.map(({id, title, des, img, iconLists, link}, index) => (
          <motion.div 
            key={id} 
            className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ amount: 0.3, }}
          >
            <PinContainer title={link} href={`projects/${id}`}>
              <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden md:h-[40vh] h-[30vh] mb-10'>
                <div className='relative w-full h-full overflow-hidden rounded-t-lg bg-science-blue-900'>
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img 
                  src={img}
                  alt={title}
                  className='z-10 absolute top-8 h-full rounded-lg transform'
                />
              </div>
              <h1 className='font-bold text-science-blue-950 lg:text-2xl md:text-xl text-base line-clamp-1'>
                {title}
              </h1>
              <p className='lg:text-lg pt-2 h-16 md:text-base text-science-blue-950 font-light text-sm line-clamp-2'>
                {des}
              </p>
              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className='flex items-center'>
                  {iconLists.map((icon, index) => (
                    <div key={icon} className='border border-science-blue-500/[0.2] rounded-full bg-science-blue-50 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' 
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}>
                      <img src={icon} alt={icon} className='p-2' />
                    </div>
                  ))}
                </div>
                <div className='flex justify-center items-center '>
                  <p className='flex lg:text-lg md:text-base text-sm text-science-blue-600'>Click for more detail</p>
                  <FaLocationArrow className='ms-3' color="#016dbf"/>
                </div>
              </div>
            </PinContainer>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
