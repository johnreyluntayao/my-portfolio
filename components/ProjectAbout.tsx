import React from 'react';
import { detailedProjects } from '@/data';
import { LayoutGrid } from './ui/LayoutGrid';
import { cards } from '@/data';
import { motion } from 'framer-motion';

const ProjectAbout = ({ id }: { id: number }) => {
  const project = detailedProjects.find((p) => p.id === id);

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delays between the title and description animation
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="flex justify-center items-center" id="project-about">
      <div className="w-full">
        
          {id === 4 ? (

            cards.map(card => (
              <div>
              <motion.div
      className="relative pt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariant}
    >
      {/* Title animation */}
      <motion.h1
        className="heading text-center text-3xl md:text-4xl lg:text-5xl text-science-blue-600 font-bold"
        variants={itemVariant}
      >
        {card.title}
      </motion.h1>

      {/* Description animation */}
      <motion.div
        className="flex justify-center pt-4 pb-8"
        variants={itemVariant}
      >
        <p className="text-center text-science-blue-900 mt-3 font-medium text-base md:text-lg lg:text-xl">
          {card.desc}
        </p>
      </motion.div>
    </motion.div>
            <div className={`w-full ${card.images.length > 4 ? 'h-[200vh]' : 'h-screen'} pb-8`}>
              <LayoutGrid card={card} />
            </div>
            </div>
            ))
        
           
          ) :
        
        project ? (
          

          
          <div className="relative pt-24">
            <h1 className="heading pt-6 text-center text-3xl md:text-4xl lg:text-5xl text-science-blue-950 font-bold ">
              Project <span className="text-science-blue-600">Description</span>
            </h1>
            <div className="flex justify-center p-5 lg:p-10">
              <p className="text-center text-science-blue-900 mt-3 font-medium text-base md:text-lg lg:text-xl w-full lg:w-[55vw] md:w-[65vw]">
                {project.desc}
              </p>
            </div>
          </div>
          
        ) : (
          <h1>not found</h1>
        )}
      </div>
    </div>
  );
};

export default ProjectAbout;
