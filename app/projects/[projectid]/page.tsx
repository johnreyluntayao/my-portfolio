'use client'

import React from 'react'
import {
  FloatingNav,
  navItems,
  ProjectHero,
  ProjectImages,
  ImageGrid,
  ProjectFeature,
  TechImplementation,
  ProjectContributions,
  Contact,
  Footer,
  BackToTop
} from "@/lib/imports"

const page = ({params} : {
  params: {projectid: number}
}) => {

  const id = Number(params.projectid);

  return (
    <main className='relative overflow-hidden bg-white'>
      <div className="px-mobile-margin md:px-tablet-margin lg:px-laptop-margin xl:px-desktop-margin place-items-center">
         <FloatingNav navItems={navItems}/>
         <div className='w-full'>
          <ProjectHero id={id}/>
         </div>
         <ProjectImages id={id}/> 
         <ImageGrid id={id}/>
         <ProjectFeature id={id}/>
         <div className='w-full'>
          <TechImplementation id={id}/>
        </div>
         <ProjectContributions id={id}/> 
         <Contact />
         <Footer />
         <BackToTop />
      </div>
    </main>
  )
}

export default page