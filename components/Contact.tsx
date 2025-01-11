"use client"

import React, {useRef} from 'react'
import { motion, useInView } from 'framer-motion';
import { GlowingButton } from '@/lib/imports';
import { FaLocationArrow } from 'react-icons/fa';


const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };
  
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

const Contact = () => {
      const footerRef = useRef(null);
      const isInView = useInView(footerRef, {});
  return (
    <section
    ref={footerRef}
      className='relative mt-16 p-[100px] w-full mx-auto sm:px-10 px-5 bg-gradient-to-r from-science-blue-500 to-science-blue-800 rounded-tl-[100px] rounded-br-[100px] rounded-bl-[100px] md:rounded-bl-none' 
      id="contact"
    >
         <motion.div 
        className='relative z-10 flex flex-col items-center'
        variants={footerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h1 
          className='heading lg:max-w-[45vw] text-white'
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          Ready to Hire me?
        </motion.h1>
        <motion.p 
          className='text-white md:mt-8 my-5 text-center lg:text-lg md:text-base text-sm'
          variants={textVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          Reach out to me today! And let's discuss how to make you achieve your goals.
        </motion.p>
        <motion.a 
          className='mt-8'
          href='mailto:johnrey.luntayao23@gmail.com'
          variants={buttonVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <GlowingButton 
            title="Let's Connect!"
            icon={<FaLocationArrow />}
            position='right'
            moreClasses='text-science-blue-500 font-semibold bg-white'
            //bg-[linear-gradient(110deg,#ffffff,45%,#7cc7fd,55%,#ffffff)]
          />
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Contact