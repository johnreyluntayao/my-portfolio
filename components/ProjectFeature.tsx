"use client";

import { detailedProjects, FeatureItem } from '@/lib/imports';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const ProjectFeature = ({ id }: { id: number }) => {
  const projectDetail = detailedProjects.find((p) => p.id === id);
  const title = id === 2;

  // Ref for the header
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { margin: '0px 0px -200px 0px' });

  // Ref for the mouse icon
  const mouseRef = useRef(null);
  const isMouseInView = useInView(mouseRef, { margin: '0px 0px -200px 0px' });

  return (
    <section className={`${id === 5 || id === 8 ? 'hidden' : 'relative flex items-center justify-center lg:px-16 my-16 overflow-hidden max-w-max'}`}>
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

            <motion.div
              ref={mouseRef}
              initial={{ opacity: 0, y: 20 }}
              animate={isMouseInView ? { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } } : { opacity: 0, y: 20 }}
            >
              <Image
                src="/mouse.svg"
                alt="mouse"
                height={40}
                width={40}
                className=""
              />
            </motion.div>
          </div>

          <div className="flex flex-col gap-8 lg:gap-16 items-center">
            {projectDetail.features?.map((feat, idx) => (
              <FeatureItem key={idx} feat={feat} idx={idx} />
            ))}
          </div>
        </div>
      ) : (
        <p>Not found</p>
      )}
    </section>
  );
};

export default ProjectFeature;