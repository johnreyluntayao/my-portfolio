"use client"

import React, { useState, useTransition } from 'react';
import TabButton from './ui/TabButton';
import { tabData, about } from '@/data';


const About = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
    startTransition(() => {
        setTab(id);
    });
};
  return (
    <section className="relative pt-24" id='about'>



        <div className='lg:grid lg:grid-cols-2 md:grid md:grid-cols-1 grid grid-cols-1 gap-8 py-8 px-4 lg:gap-16 sm:py-16 lg:px-16'>
        <div className='rounded-2xl sm:justify-center sm:items-center'>
            <img src="/Johnrey.png" alt="bg-img" height={500} width={500} className='rounded-2xl shadow-[16px_-16px_0px_0px_#0d91ea]'/>
        </div>
        <div className='mt-4 md:mt-0 text-left flex lg:items-start flex-col h-full'>
        <h1 className='heading font-bold mb-4 text-science-blue-950'>
            About {' '} 
            <span className='text-science-blue-600'> Me</span>
        </h1>
        <p className='text-base lg:text-lg text-science-blue-950'>
            {about.desc}
        </p>
        <div className='flex flex-row mt-8'>
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                {" "}
                Skills{" "}
            </TabButton>
            <TabButton selectTab={() => handleTabChange("experiences")} active={tab === "experiences"}>
                {" "}
                Experiences{" "}
            </TabButton>
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
                {" "}
                Certifications{" "}
            </TabButton>
        </div>
        <div className='mt-8 text-science-blue-950'>
            {tabData.find((t: string) => t.id === tab).content}
        </div>
        </div>
        </div>
    </section>
  )
}

export default About