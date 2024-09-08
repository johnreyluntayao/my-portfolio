import React from 'react'
import GlowingButton from './ui/GlowingButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10 bg-science-blue-50' id="contact">
        <div className='w-full absolute left-0 bottom-0 min-h-96'>
            <img 
                src="/footer-grid.svg"
                alt="grid"
                className='w-full h-full opacity-50'
            />
        </div>

        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw] text-science-blue-950'>
                Ready to <span className='text-science-blue-600'>Hire me?</span>
            </h1>
            <p className='text-science-blue-950 md:mt-10 my-5 text-center lg:text-lg md:text-base text-sm'>Reach out to me today! And let's discuss how to make you achieve your goals.</p>
            <a className='' href='mailto:johnrey.luntayao23@gmail.com'>
                <GlowingButton 
                 title="Let's get in touch"
                 icon={<FaLocationArrow />}
                 position='right'
                />
            </a>
        </div>

        <div className='flex mt-16 md:flex-row  flex-col justify-between items-center'>
            <p className='md:text-base text-small md:font-normal font-light text-science-blue-950'>Copyright © 2024 Johnrey</p>

            <div className='flex items-center md:gap-3 lg:gap-6'>
                {socialMedia.map((profile) => (
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-science-blue-100 border border-science-blue-200 rounded-full'>
                        <img src={profile.img} alt={profile.img} width={20} height={20} />
                    </div>
                ))}
            </div>
        </div>

    </footer>
  )
}

export default Footer