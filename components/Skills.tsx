import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'

const Skills = () => {
  return (
    <div className='py-20' id="projects">
        <h1 className='heading'>
            My {' '} 
            <span className='text-science-blue-600'>Main Skills</span>
        </h1>
        <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
            {workExperience.map((card) => (
                <Button key={card.id} duration={Math.floor(Math.random() * 10000)} className='flex-1 border-science-blue-500 border-2 bg-science-blue-50 text-science-blue-950'>
                    <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                        <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 m:w-20 w-16' />

                        <div className='lg:ms-5'>
                            <h1 className='text-start text-xl md:text-2xl font-bold'>{card.title}</h1>
                            <p className='text-start text-science-blue-800 mt-3 font-semibold '>{card.desc}</p>
                        </div>

                    </div>
                </Button>
            ))}
        </div>
    </div>
  )
}

export default Skills