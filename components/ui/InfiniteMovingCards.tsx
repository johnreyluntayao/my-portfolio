"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

type Item = {
  id: number;
  title: string;
  tech: {
    icon: string;
    title: string;
  }[];
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  id,
}: {
  items: Item[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  id: number;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      const directionValue = direction === "left" ? "forwards" : "reverse";
      containerRef.current.style.setProperty("--animation-direction", directionValue);
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };


  const selectedItem = items.find((item) => item.id === id);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,#bae0fd_20%,#bae0fd_80%,transparent)]",
        className
      )}
    >
      <ul
  ref={scrollerRef}
  className={cn(
    "flex min-w-full shrink-0 gap-16 py-2 w-max flex-nowrap",
    start && "animate-scroll",
    pauseOnHover && "hover:[animation-play-state:paused]"
  )}
>
  {selectedItem ? (
    selectedItem.tech.map((tech, idx) => (
      <li
        className="relative flex items-center gap-4 sm:gap-5 bg-white/20 hover:bg-white/40 rounded-lg p-4 sm:p-5 shadow-lg hover:shadow-xl transition-shadow duration-300"
        key={`${selectedItem.id}-${idx}`}
      >
        <img
          src={tech.icon}
          alt={tech.title}
          className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 object-contain rounded-full bg-white/30 p-1 shadow-md"
        />
        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-tight">
          {tech.title}
        </p>
      </li>
    ))
  ) : (
    <div className="text-center text-white">Not Found</div>
  )}
</ul>


    </div>
  );
};
