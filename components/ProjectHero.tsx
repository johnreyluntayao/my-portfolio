"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { detailedProjects, GlowingButton, Spotlight, GlobalTextGenerateEffect } from "@/lib/imports";
import { motion } from "framer-motion";
import { FaCode, FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const ProjectHero = ({ id }: { id: number }) => {
  const router = useRouter();
  const project = detailedProjects.find((p) => p.id === id);

  const isFirst = id === 1;
  const isLast = id === detailedProjects[detailedProjects.length - 1]?.id;

  const handleNavigation = (direction: "prev" | "next") => {
    const newId = direction === "prev" ? id - 1 : id + 1;
    if (newId > 0 && newId <= detailedProjects.length) {
      router.push(`/projects/${newId}`);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative flex justify-center bg-science-blue-900 items-center py-32 mb-16 sm:px-10 px-5 h-screen 2xl:max-h-[75rem] -mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin xl:-mx-desktop-margin">
      <Spotlight />

      {/* Previous Navigation Button */}
      <button
        onClick={() => handleNavigation("prev")}
        disabled={isFirst}
        className={`relative hidden lg:flex mr-5 transform -translate-y-1/2 bg-science-blue-700 text-white p-3 rounded-full shadow-lg ${
          isFirst ? "opacity-50 cursor-not-allowed" : "hover:bg-science-blue-600 focus:outline-none transition"
        }`}
        aria-label="Previous"
      >
        <FaArrowLeft size={20} />
      </button>

      {project ? (
        <motion.div
          className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl justify-center items-center lg:w-[80vw]"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Project Text Section */}
          <motion.div variants={itemVariants}>
            <GlobalTextGenerateEffect
              className="text-center md:text-center lg:text-start"
              words={project.title}
              extraClassName="font-bold text-[#45C7D1] text-2xl md:text-3xl lg:text-4xl mb-[25px]"
            />
            <p className="text-center lg:text-start text-white/80 md:tracking-wider mb-[30px] text-sm md:text-md lg:text-lg xl:text-xl">
              {project.desc}
            </p>

            <motion.a href={project.srcLink} className={`${id === 7 ? "hidden" : ""} flex justify-center lg:justify-start`}>
              <GlowingButton
                title={`${id === 2 || id === 3 || id === 4 ? `Visit site` : `Source code`}`}
                moreClasses="bg-[linear-gradient(110deg,#fd7c76,45%,#ff908a,55%,#fd7c76)] text-white"
                icon={id === 1 || id === 5 || id === 6 ? <FaCode /> : <FaArrowRight />}
                position="right"
              />
            </motion.a>
          </motion.div>

          {/* Project Image Section */}
          <motion.div className="flex flex-col items-center justify-center" variants={imageVariants}>
            <motion.img
              src={project.image}
              alt={project.title}
              className={`rounded-lg ${
                id === 5
                  ? "w-[32vw] md:w-[20vw] lg:w-[16vw] h-auto"
                  : "w-[90vw] sm:w-[75vw] md:w-[60vw] lg:w-[40vw] h-auto"
              }`}
            />

            {/* Mobile Navigation Buttons */}
            <div className="flex justify-center mt-6 space-x-4 sm:flex lg:hidden">
              <button
                onClick={() => handleNavigation("prev")}
                disabled={isFirst}
                className={`bg-science-blue-700 text-white p-3 rounded-full shadow-lg ${
                  isFirst ? "opacity-50 cursor-not-allowed" : "hover:bg-science-blue-600 focus:outline-none transition"
                }`}
                aria-label="Previous"
              >
                <FaArrowLeft size={20} />
              </button>
              <button
                onClick={() => handleNavigation("next")}
                disabled={isLast}
                className={`bg-science-blue-700 text-white p-3 rounded-full shadow-lg ${
                  isLast ? "opacity-50 cursor-not-allowed" : "hover:bg-science-blue-600 focus:outline-none transition"
                }`}
                aria-label="Next"
              >
                <FaArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <h1>Not Found</h1>
      )}

      {/* Desktop Navigation Button */}
      <button
        onClick={() => handleNavigation("next")}
        disabled={isLast}
        className={`relative hidden lg:flex ml-5 transform -translate-y-1/2 bg-science-blue-700 text-white p-3 rounded-full shadow-lg ${
          isLast ? "opacity-50 cursor-not-allowed" : "hover:bg-science-blue-600 focus:outline-none transition"
        }`}
        aria-label="Next"
      >
        <FaArrowRight size={20} />
      </button>
    </section>
  );
};

export default ProjectHero;
