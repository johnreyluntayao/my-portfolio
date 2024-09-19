import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { ProjectRole } from '@/data';

const ProjectContribution = ({ id }: { id: number }) => {
  return (
    <section className='py-10 md:py-10 lg:py-24'>
      <h1 className='heading '>
        My <span className='text-science-blue-600'>Role</span>
      </h1>
      <div className="pt-4 md:pt-8 lg:pt-16 rounded-md flex flex-col antialiased items-center justify-center relative">
        <InfiniteMovingCards
          items={ProjectRole}
          direction="right"
          speed="slow"
          id={id} 
          />
      </div>
    </section>
  );
};

export default ProjectContribution;
