"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiTriangle } from "react-icons/fi";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50"
    >
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="flex items-center p-4 bg-science-blue-100 text-science-blue-900 rounded-full shadow-[0_8px_16px_rgb(0_0_0/0.4)] hover:bg-science-blue-200 focus:outline-none"
          aria-label="Back to Top"
        >
          <FiTriangle size={20}/>
        </button>
      )}
    </motion.div>
  );
}
