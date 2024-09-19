import React from 'react'
import { projects } from '@/data'


const ProjectHero = ({id}: {id: number}) => {
    const project = projects.find((p) => p.id === id)

  return (
    <div className='bg-gradient-to-r from-[#0069b7] to-[#009daf] flex justify-center items-center py-32 mx-auto sm:px-10 px-5 h-screen' id='project-hero'>
        {/* <div className="h-full w-full dark:bg-black dark:bg-dot-white/[0.2] bg-dot-science-blue-500/[0.6] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
            
            {project ? ( 

                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl justify-center items-center">
                   <div className=''>
                        <h1 className='text-center font-bold text-[#42c7cf] lg:text-start text-[40px] md:text-4xl lg:text-5xl mb-8'>
                             
                             {project.title}
                             </h1> 
                         <p className='text-center lg:text-start text-white/80 md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                             {project.des}
                         </p>
                   </div>
        
                     <div className='flex items-center justify-center'>
                         <img 
                         src={project.img}
                         alt={project.title}
                         width={300}
                         height={300}
                         className='rounded-lg'
                         />
                     </div>
                 </div>

                
//                 <div className="flex flex-col bg-science-blue-50 overflow-hidden">
// <ContainerScroll
//   titleComponent={
//     <>

//       <h1 className="text-4xl font-medium text-gray-500 dark:text-white">
//         {project.des} <br />
//         <span className=" text-science-blue-950 text-[6rem] font-bold mt-1 leading-none">
//           {project.title}
//         </span>
//       </h1>

   
//     </>
//   }
// >
//   <img 
//     src={project.img}
//     alt="hero"
//     className="mx-auto w-fit h-fit rounded-2xl object-cover object-left-top"
//     draggable={false}
//   />
// </ContainerScroll>
// </div>

            ) : (
                <h1>Not Found</h1>
            )
        
            }
                
        
        {/* </div> */}
    </div>
  )
}

export default ProjectHero