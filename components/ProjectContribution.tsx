import React from 'react'
import { BoxHover } from './ui/BoxHover'

const ProjectContribution = () => {
  return (
    <section id='project-contribution'>
        <h1 className='heading pt-10 md:pt-10 lg:pt-15'>
            My {' '} 
            <span className='text-science-blue-600'>Contributions</span>
        </h1>
        <BoxHover />
    </section>
  )
}

export default ProjectContribution