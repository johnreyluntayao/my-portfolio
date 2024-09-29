"use client"

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import GlowingButton from './ui/GlowingButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, {}); // Set `once: true` to animate only once

  return (
    <footer 
      ref={footerRef}
      className='relative z-10 w-full pt-32 pb-10 mx-auto sm:px-10 px-5' 
      id="contact"
    >
      <div className='absolute left-0 bottom-0 w-full min-h-96 z-0'>
        <img 
          src="/footer-grid.svg"
          alt="grid"
          className='w-full h-full opacity-50'
        />
      </div>

      <motion.div 
        className='relative z-10 flex flex-col items-center'
        variants={footerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h1 
          className='heading lg:max-w-[45vw] text-science-blue-950'
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          Ready to <span className='text-science-blue-600'>Hire me?</span>
        </motion.h1>
        <motion.p 
          className='text-science-blue-950 md:mt-10 my-5 text-center lg:text-lg md:text-base text-sm'
          variants={textVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          Reach out to me today! And let's discuss how to make you achieve your goals.
        </motion.p>
        <motion.a 
          className=''
          href='mailto:johnrey.luntayao23@gmail.com'
          variants={buttonVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <GlowingButton 
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position='right'
            moreClasses='bg-[linear-gradient(110deg,#0d91ea,45%,#7cc7fd,55%,#0d91ea)]'
          />
        </motion.a>
      </motion.div>

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
          Copyright © 2024 Johnrey
        </motion.p>

        <div className='flex items-center md:gap-3 lg:gap-6'>
          {socialMedia.map((profile) => (
            <motion.a 
              key={profile.id} 
              href={profile.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-science-blue-100 border border-science-blue-200 rounded-full'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src={profile.img} alt={profile.img} width={20} height={20} />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
