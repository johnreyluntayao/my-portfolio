'use client'

import React from 'react'
import {
  FloatingNav,
  navItems,
  ProjectHero,
  ProjectImages,
  ImageGrid,
  ProjectFeature2,
  TechImplementation,
  ProjectContributions,
  Contact,
  Footer
} from "@/lib/imports"

const page = ({params} : {
  params: {projectid: number}
}) => {

  const id = Number(params.projectid);

  return (
    <main className='relative overflow-hidden bg-white'>
      <div className="px-mobile-margin md:px-tablet-margin lg:px-laptop-margin xl:px-desktop-margin 2xl:container">
         <FloatingNav navItems={navItems}/>
         <ProjectHero id={id}/>
         <ProjectImages id={id}/> 
         <ImageGrid id={id}/>
         <ProjectFeature2 id={id}/>
         <TechImplementation id={id}/>
         <ProjectContributions id={id}/> 
         <Contact />
         <Footer />
      </div>
    </main>
  )
}

export default page