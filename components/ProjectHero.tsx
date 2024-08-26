import React from 'react'
import { Spotlight } from './ui/spotlight'
import { projects } from '@/data'

const ProjectHero = ({id}: {id: number}) => {
    const project = projects.find((p) => p.id === id)

  return (
    <div className='pb-20 pt-36'>
        <div className="h-screen w-full dark:bg-black-100 bg-science-blue-500 flex items-center justify-center absolute top-0 left-0">
            {project ? (
                <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-science-blue-500'>
                    <img src="/bg.png" alt="bg-img" />
                </div>
                <img 
                    src={project.img}
                    alt={project.title}
                    className='z-10 absolute bottom-0 '
                />
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