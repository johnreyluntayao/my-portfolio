import React from 'react'
import { projects } from '@/data'

const ProjectFeatures = () => {
  return (
    <section className='bg-science-blue-100 grid justify-center' id='project-features'>
        <h1 className='heading pt-3 md:pt-5 lg:pt-10'>
            Project {' '} 
            <span className='text-science-blue-600'>Features</span>
        </h1>

        <div className='grid justify-center lg:grid-cols-3 gap-10 pt-3 md:pt-5 lg:pt-10 max-w-7xl w-full sm:px-10 px-5 mb-5'>
           { projects.map((project, idx) => (

            <div key={idx} className={`${idx % 2 === 0 ? 'bg-science-blue-800' : 'bg-science-blue-400'} px-5 py-5 grid rounded-lg`}>
                <img src={project.img} alt={project.title} className='flex justify-center items-center'/>
                <h1 className='py-5 text-white font-bold lg:text-2xl md:text-xl text-base'>
                    {project.title}
                </h1>
                <p className=' text-white lg:text-xl lg:font-normal font-light text-sm'>
                    {project.des}
                </p>

            </div>


            
                
            ))}
            
        </div>
    </section>
  )
}

export default ProjectFeatures