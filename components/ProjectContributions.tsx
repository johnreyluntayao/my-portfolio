"use client"

import { ProjectRole } from '@/lib/imports';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const ProjectContributions = ({ id }: { id: number }) => {
  const contributions = ProjectRole.find((role) => role.id === id);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const areCardsInView = useInView(ref);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  if (id === 10 || id === 5) return null;

  return (
    <section
      ref={ref}
      className="flex relative max-w-max pb-16 md:pb-24 lg:pb-32 mt-16 md:mt-24 lg:mt-32 justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5"
    >
      <motion.h1
        className="heading text-science-blue-950"
        variants={headingVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        My <span className="text-science-blue-600">Contributions</span>
      </motion.h1>

      {!contributions ? (
        <div>Not Found</div>
      ) : (
        <div
          className={`w-full mt-28 grid gap-10 gap-y-20 max-w-7xl place-items-center
            grid-cols-1 
            ${contributions.roles.length === 1 ? 'md:grid-cols-1' : 'md:grid-cols-2'}
            lg:grid-cols-${Math.min(contributions.roles.length, 4)}`}
        >
          {contributions.roles.map((role, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center p-4 bg-white shadow-lg border border-slate-100 rounded-lg h-full max-w-[500px] w-full"
              variants={cardVariants}
              initial="hidden"
              animate={areCardsInView ? "visible" : "hidden"}
              custom={index}
              whileHover={{ 
                scale: 1.05, 
                rotate: 1,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
            >
              <div className="absolute -top-12 flex items-center justify-center w-20 h-20 bg-science-blue-100 rounded-full">
                <Image
                  src={role.icon}
                  alt={role.title}
                  width={48}
                  height={48}
                  className="text-science-blue-500"
                />
              </div>
              
              <h3 className="mt-8 mb-2 text-center text-lg lg:text-2xl md:text-xl font-bold text-science-blue-950">
                {role.title}
              </h3>
              <p className="lg:text-base md:text-base text-sm text-science-blue-950 font-light text-center m-2">
                {role.quote}
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectContributions;