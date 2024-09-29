"use client"

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { phoneImages } from '@/data';

const ImageGrid = () => {
  return (
    <div className="pt-16 pb-16 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
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
            className={`relative`}
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
    </div>
  );
};

export default ImageGrid;
