'use client'

import Footer from '@/components/Footer'
import ProjectAbout from '@/components/ProjectAbout'
import ProjectContribution from '@/components/ProjectContribution'
import ProjectFeatures from '@/components/ProjectFeatures'
import ProjectHero from '@/components/ProjectHero'
import ProjectFeature2 from '@/components/ProjectFeature2'
import { FloatingNav } from '@/components/ui/FloatingNavbar'
import { navItems } from '@/data'
import React from 'react'

const page = ({params} : {
  params: {projectid: number}
}) => {

  const id = Number(params.projectid);


  return (
    <main className=''>
      <FloatingNav navItems={navItems}/>
      <ProjectHero id={id}/>
    <div className=" flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
      
        <ProjectAbout id={id}/>   
      </div>
    </div>
    <div className={`${id === 4 ? 'hidden' : ''}`}>
    <ProjectFeature2 id={id}/>
    

    <div className=" flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-gray-200">
      <div className="max-w-7xl w-full">
        <ProjectContribution id={id}/>  
    </div>
    </div>
    

    
      
  </div>
  <div className=" bg-science-blue-50/25 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    
      <Footer />
   </div>

  </main>
  )
}

export default page