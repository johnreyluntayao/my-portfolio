// components/ProjectCard.tsx
import React from 'react';

interface ProjectCardProps {
  description: string;
  key: number;
}

const GradientCard = ({description, key}: ProjectCardProps) => {
  return (
    <div
        key={key}
      className="p-6 rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] text-left"
      style={{
        background: 'radial-gradient(circle at top left, #a7d3ff 10%, #ffffff 70%)'
      }}
    >
      <h1 className='heading pt-3 md:pt-5 lg:pt-10'>
             Project {' '} 
            <span className='text-science-blue-600'>Description</span>
    </h1>
      <p className="text-center text-science-blue-950 mt-8 font-semibold">{description}</p>
    </div>
  );
};

export default GradientCard;
