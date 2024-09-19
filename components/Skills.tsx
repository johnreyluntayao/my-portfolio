import { mainSkills, workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'

const Skills = () => {
  return (


    <div className='relative pt-32' id="skills">

        <h1 className='heading text-science-blue-950'>
             My {' '} 
             <span className='text-science-blue-600'>Main Skills</span>
         </h1>

         <div className='w-full mt-32 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 gap-y-20 lg:gap-10'>
            {mainSkills.map((skill) => (
                 <div key={skill.id} className="relative flex flex-col items-center p-4 bg-white shadow-lg border border-slate-100 rounded-lg h-full">
                 {/* Icon Container */}
                 <div className="absolute -top-12 flex items-center justify-center w-20 h-20 bg-science-blue-100 rounded-full">
                   {/* Icon */}
                   <img
                  src={skill.logo}
                  alt={skill.title}
                  className="w-12 h-12 text-science-blue-500"
                    />

                 </div>
                 {/* Card Content */}
                 
                 <h3 className="mt-8 mb-2 text-center text-lg lg:text-2xl md:text-xl font-bold text-science-blue-950">{skill.title}</h3>
                 <p className="lg:text-base md:text-base text-sm text-science-blue-950 font-light text-center m-2">{skill.desc}</p>
                 
               </div>

            ))}

        
      </div>
    </div>


   
    // <div className='pt-24' id="skills">
    //    <h1 className='heading text-science-blue-950'>
    //         My {' '} 
    //         <span className='text-science-blue-600'>Main Skills</span>
    //     </h1>
    //     <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
    //         {workExperience.map((card) => (
    //             <Button key={card.id} duration={Math.floor(Math.random() * 10000)} className='flex-1 bg-science-blue-100 border-none text-science-blue-950'>
    //                 <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
    //                     <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 m:w-20 w-16' />

    //                     <div className='lg:ms-5'>
    //                         <h1 className='text-start text-xl md:text-2xl font-bold'>{card.title}</h1>
    //                         <p className='text-start text-science-blue-800 mt-3 font-semibold '>{card.desc}</p>
    //                     </div>

    //                 </div>
    //             </Button>
    //         ))}
    //     </div>
    // </div>
  )
}

export default Skills