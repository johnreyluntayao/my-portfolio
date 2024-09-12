import React from 'react';
import { companies } from '@/data';

const TechnicalSkills = () => {
  return (
    <section className="relative h-auto min-h-[50vh] -mt-14 bg-gradient-to-r from-science-blue-900 to-science-blue-500 flex justify-center items-center py-8">
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 p-4">
        {companies.map((company) => (
          <React.Fragment key={company.id}>
            <div className="flex items-center gap-2 sm:gap-3 bg-white/20 rounded-full p-2 sm:p-3 shadow-md hover:bg-white/30 transition duration-300">
              <img
                src={company.img}
                alt={company.name}
                className="w-5 sm:w-6 md:w-8 lg:w-10 object-contain filter drop-shadow-md"
              />
              <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-bold">
                {company.name}
              </p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
