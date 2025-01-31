"use client"

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { socialMedia } from '@/lib/imports';

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

const socialMediaVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef);
  const year = new Date().getFullYear();

  return (
    <footer 
      ref={footerRef}
      className='relative z-10 w-full pb-8 mx-auto max-w-max' 
    >
      <motion.div 
        className='relative z-10 flex mt-16 md:flex-row flex-col justify-between items-center'
        variants={footerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.p 
          className='md:text-base text-small md:font-normal font-light text-science-blue-950'
          variants={textVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          Copyright © {year} Johnrey
        </motion.p>

        <motion.div
          className='my-4 md:my-0 flex items-center justify-center'
          variants={logoVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <Image 
            src="/Logo.svg" 
            alt="Johnrey Logo" 
            width={48}
            height={48}
            className="md:w-16 md:h-16"
          />
        </motion.div>

        <div className='flex items-center md:gap-3 lg:gap-6'>
          {socialMedia.map((profile, i) => (
            <motion.a 
              key={profile.id} 
              href={profile.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-science-blue-100 border border-science-blue-200 rounded-full'
              variants={socialMediaVariants}
              custom={i}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.9 }}
            >
              <Image src={profile.img} alt={profile.img} width={20} height={20} />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;