"use client";

import React from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export const ImageItem = ({ src, index }: {src: string, index: number}) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, {});

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className="relative flex items-center justify-center"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.75, ease: "easeInOut", delay: index * 0.1 }}
    >
      <Image
        src={src}
        alt={`Image ${index + 1}`}
        width={350}
        height={700}
      />
    </motion.div>
  );
};
