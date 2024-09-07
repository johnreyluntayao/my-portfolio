import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { ProjectRole } from '@/data';

const ProjectContribution = ({ id }: { id: number }) => {
  return (
    <section id='project-contribution'>
      <h1 className='heading pt-10 md:pt-10 lg:pt-15'>
        My <span className='text-science-blue-600'>Role</span>
      </h1>
      <div className="pt-3 md:pt-5 lg:pt-10 rounded-md flex flex-col antialiased  items-center justify-center relative">
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
