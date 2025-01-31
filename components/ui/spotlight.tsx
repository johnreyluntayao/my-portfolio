import React from "react";
import { motion } from "framer-motion";

type SpotlightProps = {
  gradientFirst?: string;
  gradientSecond?: string;
  gradientThird?: string;
  duration?: number;
  xOffset?: number;
};

export const Spotlight = ({
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 88%, 0.2) 0%, hsla(210, 100%, 58%, 0.1) 50%, hsla(210, 100%, 45%, 0) 80%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(250, 100%, 88%, 0.15) 0%, hsla(250, 100%, 58%, 0.06) 80%, transparent 100%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 88%, 0.1) 0%, hsla(210, 100%, 48%, 0.05) 80%, transparent 100%)",
  duration = 7,
  xOffset = 100,
}: SpotlightProps = {}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      {/* Left Spotlight */}
      <motion.div
        animate={{ x: [0, xOffset, 0] }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div
          style={{ transform: "rotate(-45deg) translateY(-350px)", background: gradientFirst }}
          className="absolute top-0 left-0 w-[230px] h-[680px] md:w-[360px] md:h-[780px] lg:w-[560px] lg:h-[1080px]"
        />
        <div
          style={{ transform: "rotate(-45deg) translate(5%, -50%)", background: gradientSecond }}
          className="absolute top-0 left-0 origin-top-left w-[150px] h-[680px] md:w-[140px] md:h-[780px] lg:w-[240px] lg:h-[1080px]"
        />
        <div
          style={{ transform: "rotate(-45deg) translate(-180%, -70%)", background: gradientThird }}
          className="absolute top-0 left-0 origin-top-left w-[150px] h-[680px] md:w-[140px] md:h-[780px] lg:w-[240px] lg:h-[1080px]"
        />
      </motion.div>

      {/* Right Spotlight */}
      <motion.div
        animate={{ x: [0, -xOffset, 0] }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div
          style={{ transform: "rotate(45deg) translateY(-350px)", background: gradientFirst }}
          className="absolute top-0 right-0 w-[230px] h-[680px] md:w-[360px] md:h-[780px] lg:w-[560px] lg:h-[1080px]"
        />
        <div
          style={{ transform: "rotate(45deg) translate(-5%, -50%)", background: gradientSecond }}
          className="absolute top-0 right-0 origin-top-right w-[150px] h-[680px] md:w-[140px] md:h-[780px] lg:w-[240px] lg:h-[1080px]"
        />
        <div
          style={{ transform: "rotate(45deg) translate(180%, -70%)", background: gradientThird }}
          className="absolute top-0 right-0 origin-top-right w-[150px] h-[680px] md:w-[140px] md:h-[780px] lg:w-[240px] lg:h-[1080px]"
        />
      </motion.div>
    </motion.div>
  );
};
