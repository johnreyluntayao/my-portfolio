"use client"

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { phoneImages } from '@/lib/imports';

const ImageGrid = ({ id }: { id: number }) => {

  return (
    <section className={`${id === 5 ? 'grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-center justify-center min-h-screen my-16 gap-4 p-4 max-w-max' : 'hidden'}`}>
      {phoneImages.map((p, index) => {
        const ref = React.useRef(null); 
        const inView = useInView(ref, { }); 


       
        const variants = {
          hidden: { opacity: 0, y: 20 }, 
          visible: { opacity: 1, y: 0 }, 
        };


        return (
          <motion.div
            key={index}
            ref={ref} 
            className={`relative flex items-center justify-center`}
            initial="hidden"
            animate={inView ? "visible" : "hidden"} 
            variants={variants} 
            transition={{ duration: 0.75, ease: "easeInOut", delay: index * 0.1 }}
          >
            <img
              src={p.src}
              alt={`Image ${index + 1}`}
              width={350}
              height={700}
            />
          </motion.div>
        );
      })}
    </section>
  );
};

export default ImageGrid;
