import React from 'react';

import { myApproach } from '@/lib/imports';
import { FaArrowDown, FaArrowRight } from "react-icons/fa";


const MyApproach = () => {

  return (
    <section className="my-32" id="myApproach">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <div className="flex-1">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="bg-science-blue-500 border-8 border-science-blue-100 text-white p-4 rounded-full">
              <span className="text-xl">
                <span className='hidden lg:block'><FaArrowRight/></span>
                <span className='block lg:hidden'><FaArrowDown/></span>
              </span>
            </div>
          </div>
          <div className='flex justify-center md:justify-start md:text-start pt-8'>
            <h1 className='heading text-science-blue-950'>
                  My {' '} 
                  <span className='text-science-blue-600'>Approach</span>
            </h1>
          </div>
          <p className="text-sm md:text-base lg:text-lg font-normal text-science-blue-950 pt-4 text-center md:text-start">
            Lorem ipsum dolor sit amet. Vel amet rerum est quaerat repellendus aut enim inventore eum aliquid eveniet non culpa esse.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-[2] grid grid-cols-1 sm:grid-cols-2 gap-6">
          {myApproach.map((card) => (
            <div
              key={card.id}
              className="bg-science-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-science-blue-500 text-white text-base md:text-lg lg:text-xl w-12 h-12 flex items-center justify-center rounded-md">
                  {card.id}
                </div>
              </div>
              <h3 className="text-base md:text-xl lg:text-2xl font-bold text-science-blue-950 mb-2">
                  {card.title}
                </h3>
              <p className="text-science-blue-950 text-sm md:text-base lg:text-lg">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyApproach;
