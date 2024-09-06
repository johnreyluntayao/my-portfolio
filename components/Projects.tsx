import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'


const Projects = () => {
  return (
    <div className='pt-24' id="projects">
        <h1 className='heading'>
            Some of my {' '} 
            <span className='text-science-blue-600'>Projects</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center gap-x-24'>
            {projects.map(({id, title, des, img, iconLists, link}) => (
                <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                    <PinContainer title={link} href={`projects/${id}`}>
                        <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden md:h-[40vh] h-[30vh] mb-10'>
                            <div className='relative w-full h-full overflow-hidden rounded-t-lg bg-science-blue-500'>
                                <img src="/bg.png" alt="bg-img" />
                            </div>
                            <img 
                                src={img}
                                alt={title}
                                className='z-10 absolute bottom-0 h-full rounded-lg transform skew-y-6 -skew-x-6'
                            />
                        </div>
                        <h1 className='font-bold text-science-blue-950 lg:text-2xl md:text-xl text-base line-clamp-1'>
                            {title}
                        </h1>
                        <p className='lg:text-lg md:text-base text-science-blue-950 font-light text-sm line-clamp-2'>
                            {des}
                        </p>
                        <div className='flex items-center justify-between mt-7 mb-3 '>
                            <div className='flex items-center'>
                                {iconLists.map((icon, index) =>
                                    <div key={icon} className='border border-science-blue-500/[0.2] rounded-full bg-science-blue-50 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' style={{transform: `translateX(-${5 * index * 2}px)`}}>
                                        <img src={icon} alt={icon} className='p-2' />
                                    </div>
                                )}
                            </div>
                            <div className='flex justify-center items-center '>
                                <p className='flex lg:text-lg md:text-base text-sm text-science-blue-600'>Click for more detail</p>
                                <FaLocationArrow className='ms-3' color="#016dbf"/>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects