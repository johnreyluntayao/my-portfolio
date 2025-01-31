"use client";

import React from 'react';
import { cards, LayoutGrid } from '@/lib/imports';
import { motion } from 'framer-motion';

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const TitleWithUnderline = ({ title }: { title: string }) => (
  <motion.h1
    className="heading text-center text-3xl md:text-4xl lg:text-5xl text-science-blue-950 font-bold place-items-center"
    variants={itemVariant}
  >
    {title}
    <motion.div
      className="h-1 bg-science-blue-600 mt-2"
      style={{ width: `${title.length * 30}px` }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    />
  </motion.h1>
);

const Description = ({ desc }: { desc: string }) => (
  <motion.div className="flex justify-center pt-4 pb-8" variants={itemVariant}>
    <p className="text-center text-science-blue-900 mt-3 font-medium text-base md:text-lg lg:text-xl">
      {desc}
    </p>
  </motion.div>
);

const ProjectImages = ({ id }: { id: number }) => {
  if (id !== 8) {
    return (
      <section className="hidden">
        <h1>not found</h1>
      </section>
    );
  }

  return (
    <section className="relative flex justify-center items-center flex-col overflow-hidden mx-auto mt-32 mb-16 max-w-max">
      <div className="w-full">
        {cards.map((card) => (
          <div key={card.id} className="w-full mb-16">
            <motion.div
              className="relative gap-y-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              variants={containerVariant}
            >
              <TitleWithUnderline title={card.title} />
              <Description desc={card.desc} />
            </motion.div>

            <div className={`w-full ${card.images.length > 4 ? 'h-[200vh]' : 'h-screen'}`}>
              <LayoutGrid card={card} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectImages;