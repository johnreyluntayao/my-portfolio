'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { detailedProjects } from '@/lib/imports';

const ProjectFeature2 = ({ id }: { id: number }) => {
  const projectDetail = detailedProjects.find((p) => p.id === id);
  const title = id === 2;

  
  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] } }
  };

  // Ref for the header
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { margin: '0px 0px -200px 0px' });

  // Ref for the mouse icon
  const mouseRef = useRef(null);
  const isMouseInView = useInView(mouseRef, { margin: '0px 0px -200px 0px' });

  return (
    <section className={`${id === 5 || id === 7 ? 'hidden' : 'relative flex items-center justify-center lg:px-16 my-16 overflow-hidden max-w-max'}`}>
      {/* Triangle Background */}
      
      {/* <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[#eef7f7] clip-triangle"></div>
      </div> */}

      {projectDetail ? (
        <div className="relative z-10 flex flex-col gap-8">
          <div className="flex flex-col items-center justify-center gap-8">
            {title ? (
               <motion.h1
               ref={headerRef}
               className="text-center heading text-science-blue-600 font-semibold"
               initial={{ opacity: 0, y: -20 }}
               animate={isHeaderInView ? { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } } : { opacity: 0, y: -20 }}
             >
               Contributions
             </motion.h1>
            ) : (
              <motion.h1
              ref={headerRef}
              className="text-center heading text-science-blue-600 font-semibold"
              initial={{ opacity: 0, y: -20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } } : { opacity: 0, y: -20 }}
            >
              Features
            </motion.h1>
            )}
           

           
            <motion.img
              ref={mouseRef}
              src="/mouse.svg"
              alt="mouse"
              height={40}
              width={40}
              className=""
              initial={{ opacity: 0, y: 20 }}
              animate={isMouseInView ? { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } } : { opacity: 0, y: 20 }}
            />
          </div>

          <div className="flex flex-col gap-8 lg:gap-16 items-center">
            {projectDetail.features?.map((feat, idx) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { margin: '0px 0px -200px 0px' });

              return (
                <React.Fragment key={idx}>
                  <div
                    ref={ref}
                    className={`flex flex-col ${
                      idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } items-center `}
                  >
                    <motion.div
                      className="flex items-center justify-center w-full lg:h-3/4 lg:w-1/2 order-1 lg:order-1"
                      initial="hidden"
                      animate={isInView ? 'visible' : 'hidden'}
                      variants={idx % 2 === 0 ? fadeInLeft : fadeInRight}
                    >
                      <img
                        src={feat.img}
                        alt="Product Display"
                        height={600}
                        width={600}
                        className=""
                      />
                    </motion.div>

                    <motion.div
                      className="mt-10 lg:mt-0 flex flex-col justify-center w-full lg:w-[45%] lg:h-3/4 text-center lg:text-left p-4 lg:p-8 order-2 lg:order-2"
                      initial="hidden"
                      animate={isInView ? 'visible' : 'hidden'}
                      variants={idx % 2 === 0 ? fadeInRight : fadeInLeft}
                    >
                      <h1 className="text-4xl items-center md:items-center lg:items-start font-bold mb-4 text-science-blue-900">
                        {feat.title}
                      </h1>
                      <p className="text-sm md:text-base lg:text-lg font-normal text-science-blue-950">
                        {feat.desc}
                      </p>
                    </motion.div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      ) : (
        <p>Not found</p>
      )}
    </section>
  );
};

export default ProjectFeature2;
