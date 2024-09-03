
import React from 'react'
import { projects } from '@/data'
import GradientCard from './ui/GradientCard'


const ProjectAbout = ({id}: {id: number}) => {

    const project = projects.find((p) => p.id === id)

  return (

    <div className='flex justify-center items-center pb-36' id="project-about">
        
        <div className='w-[85vw] lg:w-[55vw] md:w-[65vw]'>
            {project ? (

                    <GradientCard
                        key={project.id}
                        description={project.des}
                    />
                // <Button key={project.id} duration={Math.floor(Math.random() * 10000)} className='grid border-science-blue-500 border-2 bg-white text-science-blue-950'>
                //     <h1 className='heading pt-3 md:pt-5 lg:pt-10'>
                //         Project {' '} 
                //         <span className='text-science-blue-600'>Description</span>
                //     </h1>
                //     <div className='flex items-center p-3 py-6 md:p-5 lg:p-10'>
                //         <div className=''>
                //             <p className='text-center text-science-blue-800 mt-3 font-semibold '>{project.des}</p>
                //         </div>

                //     </div>
                // </Button>
            ) : (
                <h1>not found</h1>
            )
        
            }
        </div>
    </div>
  )
}

export default ProjectAbout