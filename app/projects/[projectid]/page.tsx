'use client'

import Footer from '@/components/Footer'
import ProjectAbout from '@/components/ProjectAbout'
import ProjectContribution from '@/components/ProjectContribution'
import ProjectHero from '@/components/ProjectHero'
import ProjectFeature2 from '@/components/ProjectFeature2'
import { FloatingNav } from '@/components/ui/FloatingNavbar'
import { navItems, detailedProjects } from '@/data'
import React from 'react'
import ImageGrid from '@/components/ui/ImageGrid'
import GlowingButton from '@/components/ui/GlowingButton'
import { motion, useInView } from 'framer-motion';
import { FaCode, FaArrowRight } from 'react-icons/fa6'


const page = ({params} : {
  params: {projectid: number}
}) => {

  const id = Number(params.projectid);
  const project = detailedProjects.find((p) => p.id === id);

  const buttonRef = React.useRef(null);
  const isButtonInView = useInView(buttonRef, { amount: 0.3 });
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
};


  return (
    <main className='relative overflow-hidden'>
      <FloatingNav navItems={navItems}/>
      <ProjectHero id={id}/>
    <div className=" flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
      
        <ProjectAbout id={id}/>   
      </div>
    </div>
    <div className={`${id === 5 ? 'flex flex-col items-center justify-center min-h-screen bg-slate-200 mt-32' : 'hidden'}`}>
      <ImageGrid />
    </div>
    <div className={`${id === 5 || id === 7 ? 'hidden' : ''}`}>
    <ProjectFeature2 id={id}/>
    

    <div className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-science-blue-900">
      <div className={`${id === 2 ? 'hidden' : ''} max-w-7xl w-full `}>
        <ProjectContribution id={id}/>  
    </div>
    </div>
          
  </div>

  {project ? (
                      <motion.a
                        href={project.srcLink}
                        className={`flex justify-center items-center my-16 ${id === 7 ? 'hidden' : ''}`}
                        ref={buttonRef}
                        variants={buttonVariants}
                        initial="hidden"
                        animate={isButtonInView ? 'visible' : 'hidden'}
                    >
                        <GlowingButton 
                            title={`${id === 3 || id === 4 ? `Visit site` : `See source code`}`}
                            moreClasses='bg-[linear-gradient(110deg,#fd7c76,45%,#ff908a,55%,#fd7c76)]'
                            //bg-[linear-gradient(110deg,#0d91ea,45%,#7cc7fd,55%,#0d91ea)]
                            icon={id === 1 || id === 5 || id === 6 ? <FaCode /> : <FaArrowRight />}
                            position='right'
                        />
                    </motion.a>
    
  ) : (
    <p>none</p>
  )}


  
  <div className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <Footer />
   </div>

  </main>
  )
}

export default page