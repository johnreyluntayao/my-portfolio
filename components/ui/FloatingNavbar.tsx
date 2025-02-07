"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";

interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const router = useRouter();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
        if (direction >= 0) setIsMobileMenuOpen(false);
      }
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((navItem) => {
        const section = document.querySelector(navItem.link);
        if (section) {
          const rect = section.getBoundingClientRect();
          const isInSectionView = rect.top <= window.innerHeight / 2 && rect.bottom >= 0;
          if (isInSectionView) setActiveSection(navItem.link);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const menuVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  const handleNavClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    const sectionId = link.replace("#", "");
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${sectionId}`);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-4 md:top-10 lg:top-10 left-4 md:left-auto md:inset-x-0 mx-auto border border-white/20 bg-white/30 backdrop-blur-sm rounded-full dark:bg-black shadow-[0_8px_16px_rgb(0_0_0/0.4)] z-[5000] px-8 md:px-16 py-5 items-center justify-center space-x-4",
          className
        )}
      >
        <div className="block md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center text-science-blue-900"
            aria-label="Toggle mobile menu"
          >
            <GiHamburgerMenu />
          </button>
        </div>
        <div className={cn("hidden md:flex gap-4 items-center")}>
          {navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex justify-center text-science-blue-950 dark:hover:text-neutral-300 border-b-4 border-b-transparent hover:border-science-blue-500 text-sm md:text-base lg:text-lg",
                activeSection === navItem.link ? "border-b-4 border-science-blue-500" : ""
              )}
              onClick={(e) => handleNavClick(e, navItem.link)}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="sm:text-xs md:text-base lg:text-lg">{navItem.name}</span>
            </Link>
          ))}
          <button className="bg-science-blue-500 relative text-white dark:text-white px-4 py-2 ml-2 rounded-lg text-xs md:text-base lg:text-lg">
            <Link href="#contact">Contact Me!</Link>
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-[70px] left-[20px] rounded-lg w-64 bg-white dark:bg-black shadow-xl p-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((navItem, idx) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className={cn(
                    "relative dark:text-neutral-50 items-start flex text-left space-x-1 text-science-blue-950 dark:hover:text-neutral-300 hover:border-l-4 hover:border-science-blue-500 w-full text-sm md:text-base lg:text-lg p-2",
                    activeSection === navItem.link ? "border-l-4 border-science-blue-500" : ""
                  )}
                  onClick={(e) => handleNavClick(e, navItem.link)}
                >
                  <span className="sm:text-xs md:text-base lg:text-lg">{navItem.name}</span>
                </Link>
              ))}
              <button className="bg-science-blue-500 rounded-lg text-white dark:text-white px-4 py-2 text-sm md:text-base lg:text-lg w-auto text-center">
                <Link href="#contact">Contact Me!</Link>
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};