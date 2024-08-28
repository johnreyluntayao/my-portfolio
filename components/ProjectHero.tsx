import React from 'react'
import { projects } from '@/data'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

const ProjectHero = ({id}: {id: number}) => {
    const project = projects.find((p) => p.id === id)

  return (
    <div className='pb-20 pt-36'>
        <div className="h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-science-blue-500/[0.6] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            {project ? (

                <div className='lg:grid lg:grid-cols-2 md:grid md:grid-cols-1 grid grid-cols-1 gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                    <div className='flex flex-col ml-10'>
                        <TextGenerateEffect 
                            className='text-center lg:text-start text-[40px] md:text-4xl lg:text-5xl'
                            words={project.title}
                        />
                        <p className='text-center lg:text-start text-science-blue-950 md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                            {project.des}
                        </p>
                    </div>
        
                    <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                        <img 
                        src={project.img}
                        alt={project.title}
                        />
                    </div>
                </div>

                
            ) : (
                <h1>Not Found</h1>
            )
        
            }
                
        
        </div>
    </div>
  )
}

export default ProjectHero