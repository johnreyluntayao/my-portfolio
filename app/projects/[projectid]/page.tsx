'use client'

import Footer from '@/components/Footer'
import ProjectImages from '@/components/ProjectImages'
import ProjectHero from '@/components/ProjectHero'
import ProjectFeature2 from '@/components/ProjectFeature2'
import { FloatingNav } from '@/components/ui/FloatingNavbar'
import { navItems} from '@/data'
import React from 'react'
import ImageGrid from '@/components/ui/ImageGrid'
import TechImplementation from '@/components/TechImplementation'



const page = ({params} : {
  params: {projectid: number}
}) => {

  const id = Number(params.projectid);




  return (
    <main className='relative overflow-hidden'>
      <FloatingNav navItems={navItems}/>
      <ProjectHero id={id}/>
    <div className={`${id === 7 ? 'flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5' : 'hidden'}`}>
      <div className="max-w-7xl w-full">      
        <ProjectImages id={id}/>   
      </div>
    </div>
    <div className={`${id === 5 ? 'flex flex-col items-center justify-center min-h-screen bg-slate-200 mt-32' : 'hidden'}`}>
      <ImageGrid />
    </div>
    <div className={`${id === 5 || id === 7 ? 'hidden' : ''}`}>
    <ProjectFeature2 id={id}/>
    

    <div className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-science-blue-900">
      <div className={`${id === 2 ? 'hidden' : ''} max-w-7xl w-full `}>
        <TechImplementation id={id}/>  
    </div>
    </div>
          
  </div>


  
  <div className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <Footer />
   </div>

  </main>
  )
}

export default page