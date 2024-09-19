'use client';

import React from 'react';
import { detailedProjects } from '@/data';

const ProjectFeature2 = ({ id }: { id: number }) => {
  const projectDetail = detailedProjects.find((p) => p.id === id);
  const monitorColors = ['border-[#FF8C00]', 'border-[#228B22]', 'border-[#2F4F4F]'];



  return (
    <section className=" flex items-center justify-center px-0 lg:px-32 mb-32">
      {projectDetail ? (

<div className='flex flex-col gap-16 lg:gap-32'>
<div className='flex flex-col items-center justify-center gap-8'>
<h1 className=" text-center text-2xl md:text-3xl lg:text-4xl text-science-blue-600 font-semibold">
     Features
    </h1>
    <img
      src="/mouse.svg"
       alt="mouse" 
       height={50}
       width={50} 
       className=''   
     />

    </div>  

        <div className="flex flex-col gap-16 lg:gap-60 items-center px-16">

        


          {projectDetail.features?.map((feat, idx) => (
            <React.Fragment key={idx}>
              <div
                className={`flex flex-col ${
                  idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-2`}
              >
                {/* <div className="w-full lg:w-1/2 order-1 lg:order-1">
                  <img
                    src={feat.img}
                    alt={feat.title}
                    className="w-full h-auto rounded-lg"
                    
                  />
                </div> */}

                <div className="flex items-center justify-center w-full lg:w-1/2 order-1 lg:order-1">
      
      <div className="relative rounded-lg shadow-lg flex justify-center items-center">
        
        <div className={`relative ${monitorColors[idx % monitorColors.length]} border-[15px]  rounded-lg max-h-[300px] overflow-y-auto`}>
          <img
            src={feat.img}
            alt="Product Display"
            height={500}
            width={500}
            className=""
          />
        </div>

        
        <div className="absolute bottom-[-20px] bg-gray-800 w-[100px] h-[20px] rounded-b-lg"></div>
        <div className="absolute bottom-[-40px] bg-gray-400 w-[200px] h-[20px] rounded-t-lg "></div>
      </div>
    </div>

               
                <div className="mt-10 lg:mt-0 flex flex-col justify-center w-full lg:w-1/2 text-center md:text-left lg:text-left p-4 lg:p-8 order-2 lg:order-2">
                  <h1 className="text-3xl items-center md:items-center lg:items-start font-bold mb-4 text-science-blue-950">
                    {feat.title}
                  </h1>
                  <p className="text-sm md:text-base lg:text-lg font-normal text-science-blue-950">
                    {feat.desc}
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
        </div>
      ) : (
        <p>Not found</p>
      )}
    </section>
  );
};

export default ProjectFeature2;
