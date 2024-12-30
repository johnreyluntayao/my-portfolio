"use client";

import React, { useEffect, useRef } from 'react';
import { companies } from '@/lib/imports';

const TechnicalSkills = () => {

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollRef.current;

    function addAnimation() {
      if (!scroller) return;

      const innerScrollers = scroller.querySelectorAll(".scrollInner");

      innerScrollers.forEach((innerScroller) => {
        if (innerScroller.getAttribute("data-cloned") === "true") return;

        const innerScrollerChildren = Array.from(innerScroller.children);

        // Clone each item to make sure that the list is continuous
        innerScrollerChildren.forEach((item) => {
          const extendList = item.cloneNode(true) as HTMLElement;
          innerScroller.appendChild(extendList);
        });

        innerScroller.setAttribute("data-cloned", "true");
      });
    }

    addAnimation();

  }, []);

  return (
    <section ref={scrollRef} className="scroller relative h-auto min-h-[50vh] -mt-14 bg-gradient-to-r from-science-blue-900 to-science-blue-500 flex justify-center items-center py-8 mb-16">
      <div className="scroller-wrapper">
        {/* First row scrolling to the left */}
        <div className="scrollInner flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 p-4 animate-infinite_scroll">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex items-center gap-2 sm:gap-3 bg-white/20 rounded-lg p-2 sm:p-3 shadow-md hover:bg-white/30 transition duration-300">
                <img
                  src={company.img}
                  alt={company.name}
                  className="w-8 sm:w-8 md:w-8 lg:w-10 object-contain filter drop-shadow-md"
                />
                <p className="text-white text-base sm:text-base md:text-base lg:text-lg font-bold">
                  {company.name}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Second row scrolling to the right */}
        <div className="scrollInner flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 p-4 animate-infinite_scroll_reverse">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex items-center gap-2 sm:gap-3 bg-white/20 rounded-lg p-2 sm:p-3 shadow-md hover:bg-white/30 transition duration-300">
                <img
                  src={company.img}
                  alt={company.name}
                  className="w-8 sm:w-8 md:w-8 lg:w-10 object-contain filter drop-shadow-md"
                />
                <p className="text-white text-base sm:text-base md:text-base lg:text-lg font-bold">
                  {company.name}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
