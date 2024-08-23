"use client"

import React, { useState, useTransition } from 'react';
import TabButton from './ui/TabButton';
import { tabData } from '@/data';


const About = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
    startTransition(() => {
        setTab(id);
    });
};
  return (
    <section className="pt-3" id='about'>
        <div className='lg:grid lg:grid-cols-2 md:grid md:grid-cols-1 grid grid-cols-1 gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className='border-t-science-blue-500 border-t-[5vh] border-t-p-2 bg-science-blue-500 rounded-2xl'>
            <img src="/Johnrey.png" alt="bg-img" height={500} width={500} className='rounded-2xl'/>
        </div>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
            About {' '} 
            <span className='text-science-blue-600'> Me</span>
        </h1>
        <p className='text-base lg:text-lg'>
        Lorem ipsum dolor sit amet. Vel amet rerum est quaerat repellendus aut enim inventore eum aliquid eveniet non culpa esse. A temporibus delectus At dolore corrupti id omnis mollitia ut autem quia. Sit perspiciatis recusandae qui earum molestias At iste minus vel blanditiis dolorum.

        Et quasi repellendus vel consequatur dolor aut rerum facilis. Quo maxime error et sunt ducimus ex deleniti galisum ut consequatur temporibus ab quaerat totam sit facere sequi. Sit amet consequatur qui doloribus maiores a odit quidem hic sunt molestiae est sapiente soluta.
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
        <div className='mt-8'>
            {tabData.find((t: string) => t.id === tab).content}
        </div>
        </div>
        </div>
    </section>
  )
}

export default About