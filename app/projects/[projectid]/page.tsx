'use client'

import Footer from '@/components/Footer'
import ProjectHero from '@/components/ProjectHero'
import { FloatingNav } from '@/components/ui/FloatingNavbar'
import { navItems } from '@/data'
import React from 'react'

const page = ({params} : {
  params: {projectid: number}
}) => {

  const id = Number(params.projectid);


  return (
    
    <main>
       <FloatingNav navItems={navItems}/>
       <ProjectHero id={id}/>

    </main>
   
  )
}

export default page