import React from 'react'
import { BoxHover } from './ui/BoxHover'

const ProjectContribution = () => {
  return (
    <section id='project-contribution'>
        <h1 className='heading pt-3 md:pt-5 lg:pt-10'>
            My {' '} 
            <span className='text-science-blue-600'>Contributions</span>
        </h1>
        <BoxHover />
    </section>
  )
}

export default ProjectContribution