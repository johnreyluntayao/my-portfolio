"use client";

import React from "react";
import { motion } from "framer-motion";
import { myApproach } from "@/lib/imports";
import { FaArrowDown } from "react-icons/fa";

const variants = {
  hidden: { opacity: 0, y: -50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  }),
};

const MyApproach = () => {
  return (
    <section className="my-16 md:my-24 lg:my-32 max-w-max" id="myApproach">
      <motion.div
        className="flex flex-col justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <motion.div
          className="flex items-center justify-center"
          variants={variants}
        >
          <div className="bg-science-blue-600 border-8 border-science-blue-100 text-white p-4 rounded-full">
            <span className="text-xl">
              <FaArrowDown />
            </span>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center items-center pt-8"
          variants={variants}
          custom={0.2}
        >
          <h1 className="heading text-science-blue-950">
            My <span className="text-science-blue-600">Approach</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-sm md:text-base lg:text-lg font-medium text-science-blue-950 pt-8 text-center max-w-2xl pb-16"
          variants={variants}
          custom={0.4}
        >
          I use <em>Agile Methodology</em> in development or even in UI/UX designing because of its
          flexibility and adaptability, enabling quick responses to changes and improving product
          quality and customer satisfaction.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myApproach.map((card, index) => (
            <motion.div
              key={card.id}
              className="bg-science-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition max-w-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.2,
                    duration: 0.8,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.div
                  className="bg-science-blue-600 text-white text-base md:text-lg lg:text-xl w-12 h-12 flex items-center justify-center rounded-md"
                  whileHover={{
                    scale: 1.1,
                    rotate: 10,
                    transition: { duration: 0.2 },
                  }}
                >
                  {card.id}
                </motion.div>
              </div>

              <h3 className="text-base md:text-xl lg:text-2xl font-bold text-science-blue-950 mb-2">
                {card.title}
              </h3>

              <p className="text-science-blue-950 text-sm md:text-base lg:text-lg">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MyApproach;
