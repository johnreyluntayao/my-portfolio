"use client";

import { detailedProjects, FeatureItem } from '@/lib/imports';
import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Image from 'next/image';

const ProjectFeature = ({ id }: { id: number }) => {
  const projectDetail = detailedProjects.find((p) => p.id === id);
  const isContributionsPage = id === 2;

  // Refs and animations
  const headerRef = useRef(null);
  const mouseRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { margin: '0px 0px -100px 0px'});
  const isMouseInView = useInView(mouseRef, { margin: '0px 0px -100px 0px' });
  const headerControls = useAnimation();
  const mouseControls = useAnimation();

  // Header animation
  useEffect(() => {
    if (isHeaderInView) {
      headerControls.start({
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 120, damping: 20, mass: 0.5 },
      });
    }
  }, [isHeaderInView, headerControls]);

  // Mouse animation
  useEffect(() => {
    if (isMouseInView) {
      mouseControls
        .start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] },
        })
        .then(() => {
          mouseControls.start({
            y: [0, -10, 0],
            transition: {
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          });
        });
    }
  }, [isMouseInView, mouseControls]);

  if (!projectDetail) {
    return <p>Project not found</p>;
  }

  return (
    <section
      className={`${
        id === 5 || id === 8
          ? 'hidden'
          : 'relative flex items-center justify-center lg:px-8 my-32 overflow-hidden max-w-max'
      }`}
    >
      <div className="relative z-10 flex flex-col gap-8">
        <div className="flex flex-col items-center justify-center gap-8">
          <motion.h1
            ref={headerRef}
            className="text-center heading text-science-blue-600 font-semibold"
            initial={{ opacity: 0, y: -20 }}
            animate={headerControls}
          >
            {isContributionsPage ? "Contributions" : "Features"}
          </motion.h1>

          <motion.div
            ref={mouseRef}
            initial={{ opacity: 0, y: 20 }}
            animate={mouseControls}
          >
            <Image
              src="/mouse.svg"
              alt="mouse"
              height={40}
              width={40}
              className="opacity-75"
            />
          </motion.div>
        </div>

        <div className="flex flex-col gap-4 items-center">
          {projectDetail.features?.map((feat, idx) => (
            <FeatureItem key={idx} feat={feat} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectFeature;