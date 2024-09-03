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
    <>
    <div className="relative bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <ProjectHero id={id}/>
        <ProjectAbout id={id}/>   
      </div>
    </div>

    <div>
      <ProjectFeatures />
    </div>

    <div className="relative bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <ProjectContribution />  
    </div>
  
      <Footer />
  </div>

  </>
  )
}

export default page