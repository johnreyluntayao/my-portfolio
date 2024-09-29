import React from 'react';
import { detailedProjects } from '@/data';
import { LayoutGrid } from './ui/LayoutGrid';
import { cards } from '@/data';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ProjectAbout = ({ id }: { id: number }) => {
  const project = detailedProjects.find((p) => p.id === id);

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const ref = useRef(null);
  const inView = useInView(ref, {});

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex justify-center items-center" id="project-about">
      <div className="w-full">
        {id === 7 ? (
          cards.map((card) => (
            <div key={card.id}>
              <motion.div
                className="relative pt-24"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                variants={containerVariant}
              >
                
                <motion.h1
                  className="heading text-center text-3xl md:text-4xl lg:text-5xl text-science-blue-950 font-bold"
                  variants={itemVariant}
                >
                  {card.title}

                 
                  <motion.div
                    className="h-1 bg-science-blue-600 mt-2 mx-auto"
                    style={{
                      width: `${card.title.length * 30}px`, 
                    }}
                    initial={{ scaleX: 0 }} 
                    whileInView={{ scaleX: 1 }} 
                    viewport={{ once: false }} 
                    transition={{
                      duration: 0.6,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.h1>


              
                <motion.div
                  className="flex justify-center pt-4 pb-8"
                  variants={itemVariant}
                >
                  <p className="text-center text-science-blue-900 mt-3 font-medium text-base md:text-lg lg:text-xl">
                    {card.desc}
                  </p>
                </motion.div>
              </motion.div>

              <div
                className={`w-full ${
                  card.images.length > 4 ? 'h-[200vh]' : 'h-screen'
                } pb-8`}
              >
                <LayoutGrid card={card} />
              </div>
            </div>
          ))
        ) : project ? (
          <div className="relative pt-32">
            <motion.div
              ref={ref}
              className="flex justify-center"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={variants}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <div className="shadow-lg border-4 border-science-blue-900 rounded-lg h-full px-6 py-4 lg:px-10 lg:py-8 w-full lg:w-[60vw] md:w-[70vw] relative">
                <h1 className="heading absolute -top-8 left-1/2 transform -translate-x-1/2 text-3xl md:text-4xl lg:text-5xl text-science-blue-950 font-bold bg-[#ffffff] px-4">
                  Project{' '}
                  <span className="text-science-blue-600">Description</span>
                </h1>

                <div className="flex justify-center p-5 mt-10">
                  <p className="text-center text-science-blue-950 font-medium text-base md:text-lg lg:text-xl">
                    {project.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          <h1>not found</h1>
        )}
      </div>
    </div>
  );
};

export default ProjectAbout;
