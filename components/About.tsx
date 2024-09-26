"use client";

import React, { useState, useTransition } from 'react';
import { motion, useInView } from 'framer-motion';
import { about } from '@/data';
import GlowingButton from './ui/GlowingButton';

const About = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    // Separate refs for each section to control their own animation
    const imageRef = React.useRef(null);
    const textRef = React.useRef(null);
    const buttonRef = React.useRef(null);

    const isImageInView = useInView(imageRef, { amount: 0.3 });
    const isTextInView = useInView(textRef, { amount: 0.3 });
    const isButtonInView = useInView(buttonRef, { amount: 0.3 });

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section className="mt-32 flex items-center justify-center px-0 lg:px-32" id='about'>
            <div className='lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 grid grid-cols-1 px-8 items-center'>
                
           
                <motion.div 
                    ref={imageRef}
                    className='order-2 md:order-1'
                    initial={{ opacity: 0, y: 100 }} 
                    animate={{ opacity: isImageInView ? 1 : 0, y: isImageInView ? 0 : 100 }} 
                    transition={{ duration: 1 }}
                >
                    <img src="/Johnrey2.png" alt="bg-img" height={500} width={500} />
                </motion.div>

        
                <motion.div 
                    ref={textRef}
                    className='mt-4 md:mt-0 flex text-center md:text-start lg:items-start flex-col h-full justify-center order-1 md:order-2'
                    initial={{ opacity: 0, y: -75 }} 
                    animate={{ opacity: isTextInView ? 1 : 0, y: isTextInView ? 0 : -75 }} 
                    transition={{ duration: 0.5 }}
                >
                    <h1 className='heading font-bold mb-4 text-science-blue-950 md:text-start'>
                        About <span className='text-science-blue-600'> Me</span>
                    </h1>
                    <p className='text-sm md:text-base lg:text-lg font-normal text-science-blue-950'>
                        {about.desc}
                    </p>

                 
                    <motion.a
                        href="https://www.google.com/"
                        className="lg:pt-5"
                        ref={buttonRef}
                        variants={buttonVariants}
                        initial="hidden"
                        animate={isButtonInView ? 'visible' : 'hidden'}
                    >
                        <GlowingButton 
                            title="See my resume!"
                            moreClasses='bg-[linear-gradient(110deg,#0d91ea,45%,#7cc7fd,55%,#0d91ea)]'
                            //bg-[linear-gradient(110deg,#fd7c76,45%,#ff908a,55%,#fd7c76)]
                        />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
