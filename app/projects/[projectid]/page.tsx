'use client'

import Footer from '@/components/Footer'
import ProjectAbout from '@/components/ProjectAbout'
import ProjectContribution from '@/components/ProjectContribution'
import ProjectFeatures from '@/components/ProjectFeatures'
import ProjectHero from '@/components/ProjectHero'
import { FloatingNav } from '@/components/ui/FloatingNavbar'
import { navItems } from '@/data'
import React from 'react'

const page = ({params} : {
  params: {projectid: number}
}) => {

  const id = Number(params.projectid);


  return (
    <main className=''>
    <div className=" bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <ProjectHero id={id}/>
        <ProjectAbout id={id}/>   
      </div>
    </div>

    <div>
      <ProjectFeatures id={id}/>
    </div>

    <div className=" bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <ProjectContribution />  
    </div>
  
      <Footer />
  </div>

  </main>
  )
}

export default page