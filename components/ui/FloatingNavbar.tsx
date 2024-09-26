"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((navItem) => {
        const section = document.querySelector(navItem.link);

        if (section) {
          const rect = section.getBoundingClientRect();
          const isInSectionView =
            rect.top <= window.innerHeight / 2 && rect.bottom >= 0;

          if (isInSectionView) {
            setActiveSection(navItem.link);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-4 md:top-10 lg:top-10 inset-x-0 mx-auto border border-white/20 bg-white/30 backdrop-blur-sm rounded-full dark:bg-black shadow-[0_8px_16px_rgb(0_0_0/0.4)] z-[5000] px-10 py-5 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-science-blue-950 dark:hover:text-neutral-300 hover:text-science-blue-500 hover:font-semibold text-sm md:text-base lg:text-lg",
              activeSection === navItem.link ? "text-blue-500 font-semibold" : ""
            )}
            onClick={(e) => {
              e.preventDefault();
              const sectionId = navItem.link.replace("#", "");
              const targetSection = document.getElementById(sectionId);

              if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
              } else {
                
                router.push(`/#${sectionId}`);
              }
            }}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="sm:text-xs md:text-base lg:text-lg">{navItem.name}</span>
          </Link>
        ))}
        <button className="bg-science-blue-500 relative text-white dark:text-white px-4 py-2 rounded-full text-xs md:text-base lg:text-lg">
          <Link href="#contact">Contact Me</Link>
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
