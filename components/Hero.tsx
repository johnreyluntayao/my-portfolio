import React from 'react'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import GlowingButton from './ui/GlowingButton'
import { HiArrowNarrowDown } from "react-icons/hi";



const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
      <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white"/>
      <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill="purple"/>
      <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue"/>
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
    </div>
       
<div className='flex justify-center relative my-20 z-10 '>
  <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
      <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
        Johnrey Luntayao
      </h2>

      <TextGenerateEffect 
      className='text-center text-[40px] md:text-5xl lg:text-6xl'
      words="Hello its me im the problem its me"
      />

      <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
        Hi, I&apos;m Johnrey, a UI/UX Designer!
      </p>

      <a href="#about">
        <GlowingButton 
          title="Hire Me"
          icon={<HiArrowNarrowDown />}
          position='right'
        />
      </a>
  </div>
</div>

    </div>
  )
}

export default Hero