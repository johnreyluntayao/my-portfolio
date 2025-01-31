import React from 'react';
import { techStack, InfiniteMovingCards2 } from '@/lib/imports';

const TechStack = () => {
  return (
    <section className="relative -mt-14 py-16 bg-science-blue-900 mb-32 -mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin xl:-mx-desktop-margin">
      <div className="rounded-md flex flex-col antialiased items-center justify-center relative">
        <div className='pb-6'>
        <InfiniteMovingCards2
          items={techStack}
          direction="right"
          speed="normal"
          />
        </div>
        <div className=''>
        <InfiniteMovingCards2
          items={techStack}
          direction="left"
          speed="normal"
          />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
