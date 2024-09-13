import React from 'react';
import { detailedProjects } from '@/data';

const ProjectFeatures = ({ id }: { id: number }) => {
  const projectDetail = detailedProjects.find((p) => p.id === id);

  return (
    <div className="bg-gradient-to-b from-[#0c416e] to-[#0d91ea] flex flex-col items-center py-16 mb-36" id="project-features">
      <h1 className="text-5xl font-extrabold text-white mb-12">
        Project <span className="text-[#a1d1f2]">Features</span>
      </h1>

      {projectDetail ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full px-6 sm:px-10">
          {projectDetail.features?.map((feat, idx) => (
            <div
              key={idx}
              className="relative bg-white/90 shadow-lg rounded-xl transition-transform transform hover:scale-105 hover:shadow-2xl backdrop-blur-md"
              style={{
                backgroundColor: idx % 2 === 0 ? '#0b3555' : '#0b5875',
                color: '#f1f9ff',
              }}
            >
              <img
                src={feat.img}
                alt={feat.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-6">
                <h2 className="text-xl lg:text-2xl font-semibold mb-3">{feat.title}</h2>
                <p className="text-sm lg:text-lg font-light leading-relaxed">{feat.desc}</p>
              </div>
              {/* Optional: Gradient overlay to enhance readability over images */}
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30 rounded-t-xl pointer-events-none"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-300">Not found</div>
      )}
    </div>
  );
};

export default ProjectFeatures;
