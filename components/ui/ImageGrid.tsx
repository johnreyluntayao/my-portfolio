"use client";

import { phoneImages, ImageItem } from '@/lib/imports';
import { motion, useInView, useAnimation } from 'framer-motion';
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';

interface ImageGridProps {
  id: number;
}

const ImageGrid: React.FC<ImageGridProps> = ({ id }) => {

  // Refs for animation triggers
  const headerRef = useRef<HTMLHeadingElement>(null);
  const mouseRef = useRef<HTMLDivElement>(null);

  // Check if elements are in view
  const isHeaderInView = useInView(headerRef, { margin: '0px 0px -100px 0px' });
  const isMouseInView = useInView(mouseRef, { margin: '0px 0px -100px 0px' });

  // Animation controls
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
      mouseControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] },
      }).then(() => {
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

  return (
    <section className="my-32 max-w-max">
      <div className={`${id === 5 ? 'flex flex-col items-center justify-center gap-8 pb-16' : 'hidden'}`}>
        <motion.h1
          ref={headerRef}
          className="text-center heading text-science-blue-600 font-semibold"
          initial={{ opacity: 0, y: -20 }}
          animate={headerControls}
        >
          Netflix Clone Images
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

      <div
        className={`${
          id === 5
            ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6'
            : 'hidden'
        }`}
      >
        {phoneImages.map((p, index) => (
          <ImageItem key={index} src={p.src} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ImageGrid;