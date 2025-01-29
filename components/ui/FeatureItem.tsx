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

export const FeatureItem = ({ feat, idx }: { feat: Feature; idx: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '0px 0px -200px 0px' });

  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] } },
  };

  return (
    <React.Fragment key={idx}>
      <div
        ref={ref}
        className={`flex flex-col ${
          idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
        } items-center`}
      >
        <motion.div
          className="flex items-center justify-center w-full lg:h-3/4 lg:w-1/2 order-1 lg:order-1"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={idx % 2 === 0 ? fadeInLeft : fadeInRight}
        >
          <Image
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
};