'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

interface Feature {
  id: number;
  title: string;
  img: string;
  desc: string;
}

const fadeInVariants = (x: number, delay: number = 0) => ({
  hidden: { opacity: 0, x },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: [0.43, 0.13, 0.23, 0.96],
      delay,
    },
  },
});

export const FeatureItem = ({ feat, idx }: { feat: Feature; idx: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '0px 0px -200px 0px' });

  const isEvenIndex = idx % 2 === 0;
  const imageVariants = isEvenIndex ? fadeInVariants(-100) : fadeInVariants(100);
  const textVariants = isEvenIndex ? fadeInVariants(100) : fadeInVariants(-100);
  const textDelayVariants = isEvenIndex ? fadeInVariants(100, 0.2) : fadeInVariants(-100, 0.2);

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-4 items-center place-items-center ${
        !isEvenIndex ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''
      }`}
    >
      <motion.div
        className="flex items-center justify-center max-w-xl lg:max-w-full h-full"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={imageVariants}
      >
        <Image
          src={feat.img}
          alt="Feature Display"
          height={600}
          width={600}
          className="w-full h-auto"
        />
      </motion.div>

      <motion.div
        className={`flex flex-col justify-center max-w-2xl h-full text-center ${
          isEvenIndex ? 'lg:text-left' : 'lg:text-right'
        } p-4 lg:p-8`}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={textVariants}
      >
        <motion.h1
          className="text-4xl font-bold mb-4 text-science-blue-900"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={textVariants}
        >
          {feat.title}
        </motion.h1>
        <motion.p
          className="text-sm md:text-base lg:text-lg font-normal text-science-blue-950"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={textDelayVariants}
        >
          {feat.desc}
        </motion.p>
      </motion.div>
    </div>
  );
};