import React from 'react';
import { detailedProjects } from '@/data';

const ProjectAbout = ({ id }: { id: number }) => {
  const project = detailedProjects.find((p) => p.id === id);

  return (
    <div className="flex justify-center items-center pb-36" id="project-about">
      <div className="w-full lg:w-[55vw] md:w-[65vw]">
        {project ? (
          <div className="relative bg-gradient-to-r from-white to-blue-50 border border-science-blue-500 rounded-lg shadow-xl transition hover:shadow-2xl">
            <h1 className="heading pt-6 text-center text-3xl md:text-4xl lg:text-5xl text-science-blue-950 font-bold">
              Project <span className="text-science-blue-600">Description</span>
            </h1>
            <div className="flex justify-center p-5 lg:p-10">
              <p className="text-center text-science-blue-900 mt-3 font-medium text-base md:text-lg lg:text-xl">
                {project.desc}
              </p>
            </div>
          </div>
        ) : (
          <h1>not found</h1>
        )}
      </div>
    </div>
  );
};

export default ProjectAbout;
