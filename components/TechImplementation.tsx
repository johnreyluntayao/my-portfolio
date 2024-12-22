import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { techImplementation } from '@/data';

const TechImplementation = ({ id }: { id: number }) => {
  return (
    <section className='relative py-10 md:py-10 lg:py-24'>
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
