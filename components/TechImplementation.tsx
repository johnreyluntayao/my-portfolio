import React from 'react';
import { techImplementation, InfiniteMovingCards } from '@/lib/imports';

const TechImplementation = ({ id }: { id: number }) => {
  return (
    <section className={`relative py-16 bg-science-blue-900 -mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin xl:-mx-desktop-margin ${
      id === 8 || id === 3 ? 'mb-32' : ''
    }`}>
      <div className="rounded-md flex flex-col antialiased items-center justify-center relative">
        <InfiniteMovingCards
          items={techImplementation}
          direction="right"
          speed="fast"
          id={id} 
          />
      </div>
    </section>
  );
};

export default TechImplementation;
