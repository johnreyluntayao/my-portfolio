import React from 'react';
import { detailedProjects } from '@/data';

const ProjectFeatures = ({ id }: { id: number }) => {
  const projectDetail = detailedProjects.find((p) => p.id === id);

  return (
    <div
      className='!max-w-full bg-science-blue-200 grid justify-center pb-10 mb-36'
      id='project-features'
    >
      <h1 className='heading p-10 md:pt-10 lg:pt-16'>
        Project <span className='text-science-blue-600'>Features</span>
      </h1>

      {projectDetail ? (
        <div className='grid justify-center text-center lg:grid-cols-3 gap-10 pt-3 md:pt-5 lg:pt-10 max-w-7xl w-full sm:px-10 px-5 mb-5'>
          {projectDetail.features?.map((feat, idx) => (
            <div
              key={idx}
              className={`${
                idx % 2 === 0 ? 'bg-science-blue-800' : 'bg-science-blue-500'
              } p-8 rounded-lg flex flex-col items-center`}
            >
              <img
                src={feat.img || '/path/to/default-image.jpg'} // Provide a fallback if img is empty
                alt={feat.title}
                className='flex justify-center items-center'
              />
              <h1 className='py-5 font-bold lg:text-2xl md:text-xl text-lg text-gray-200'>
                {feat.title}
              </h1>
              <p className='text-gray-200 lg:text-xl lg:font-normal font-light text-sm'>
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div>Not found</div>
      )}
    </div>
  );
};

export default ProjectFeatures;
