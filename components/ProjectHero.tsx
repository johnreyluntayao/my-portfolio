"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { detailedProjects, GlowingButton, Spotlight, GlobalTextGenerateEffect } from "@/lib/imports";
import { motion, AnimatePresence } from "framer-motion";
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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 8 }
    },
    hover: { 
      scale: 1.08, 
      transition: { duration: 0.3, ease: "easeOut" } 
    },
    tap: { scale: 0.95 },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.6 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, rotate: -2 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { 
        duration: 1.2, 
        ease: "backOut",
        scale: { type: "spring", stiffness: 100, damping: 10 }
      }
    },
    hover: {
      scale: 1.02,
      rotate: 0.5,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const NavigationButton = ({ direction, disabled, moreClass }: { direction: "prev" | "next", disabled: boolean, moreClass: string }) => (
    <motion.button
      onClick={() => handleNavigation(direction)}
      disabled={disabled}
      className={`relative ${moreClass} ${
        direction === "prev" ? "mr-5" : "ml-5"
      } bg-science-blue-700 text-white p-3 rounded-full shadow-lg ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-science-blue-600 focus:outline-none"
      }`}
      aria-label={direction === "prev" ? "Previous" : "Next"}
      whileHover={{ scale: disabled ? 1 : 1.1 }}
      whileTap={{ scale: disabled ? 1 : 0.9 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      {direction === "prev" ? <FaArrowLeft size={20} /> : <FaArrowRight size={20} />}
    </motion.button>
  );

  const MobileNavigationButtons = () => (
    <motion.div 
      className="flex justify-center mt-6 space-x-4 lg:hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
    >
      <NavigationButton direction="prev" disabled={isFirst} moreClass="flex lg:hidden"/>
      <NavigationButton direction="next" disabled={isLast} moreClass="flex lg:hidden"/>
    </motion.div>
  );

  return (
    <section className="relative flex justify-center bg-science-blue-900 items-center py-32 mb-16 md:mb-24 lg:mb-32 sm:px-10 px-5 h-screen 2xl:max-h-[75rem] -mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin xl:-mx-desktop-margin">
      <Spotlight />

      <NavigationButton direction="prev" disabled={isFirst} moreClass="hidden lg:flex"/>

      <AnimatePresence mode="wait">
        {project ? (
          <motion.div
            key={id}
            className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl justify-center items-center lg:w-[80vw]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Project Text Section */}
            <motion.div className="space-y-6">
              <GlobalTextGenerateEffect
                className="text-center md:text-center lg:text-start"
                words={project.title}
                extraClassName="font-bold text-[#45C7D1] text-2xl md:text-3xl lg:text-4xl mb-4"
                duration={1.2}
                stag={0.04}
              />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <GlobalTextGenerateEffect 
                  className="flex justify-center lg:justify-start text-center md:text-center lg:text-start"
                  words={project.desc}
                  duration={0.8}
                  extraClassName="text-science-blue-50 mb-8 text-sm md:text-base lg:text-lg max-w-xl"
                  stag={0.03}
                />
              </motion.div>

              <motion.div 
                className="flex gap-4 items-center justify-center lg:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {![1, 10, 6, 7, 9].includes(id) && (
                  <motion.a 
                    href={project.webLink} 
                    className="flex justify-center lg:justify-start"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <GlowingButton
                      title="Visit site"
                      moreClasses="bg-[linear-gradient(110deg,#fd7c76,45%,#ff908a,55%,#fd7c76)] text-white border-2 border-transparent font-medium"
                      icon={<FaArrowRight />}
                      position="right"
                    />
                  </motion.a>
                )}
                {![10, 4, 5, 8].includes(id) && (
                  <motion.a 
                    href={project.codeLink} 
                    className="flex justify-center lg:justify-start"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <GlowingButton
                      title="Source code"
                      moreClasses="text-[#fd7c76] border-2 border-[#fd7c76] bg-white font-medium"
                      icon={<FaCode />}
                      position="right"
                    />
                  </motion.a>
                )}
              </motion.div>
            </motion.div>

            {/* Project Image Section */}
            <motion.div
              className="flex flex-col items-center justify-center"
              variants={imageVariants}
              whileHover="hover"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={id === 7 ? 500 : 800}
                  height={id === 7 ? 500 : 800}
                  className={`rounded-lg shadow-2xl ${
                    id === 7
                      ? "w-[32vw] md:w-[20vw] lg:w-[250px] h-auto max-h-[550px]"
                      : "w-[90vw] sm:w-[75vw] md:w-[60vw] lg:w-[40vw] h-auto"
                  }`}
                />
              </motion.div>
            </motion.div>

            <MobileNavigationButtons />
          </motion.div>
        ) : (
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Not Found
          </motion.h1>
        )}
      </AnimatePresence>

      <NavigationButton direction="next" disabled={isLast} moreClass="hidden lg:flex"/>
    </section>
  );
};

export default ProjectHero;