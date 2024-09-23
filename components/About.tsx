"use client";

import React, { useState, useTransition } from 'react';
import { motion, useInView } from 'framer-motion';
import { about } from '@/data';

const About = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const ref = React.useRef(null);
    const isInView = useInView(ref, {amount: 0.3});

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="mt-32 flex items-center justify-center px-0 lg:px-32" id='about'>
            <div className='lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 grid grid-cols-1 px-8 items-center'>
                <motion.div 
                    ref={ref}
                    className='order-2 md:order-1'
                    initial={{ opacity: 0, y: 100 }} 
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }} 
                    transition={{ duration: 1 }}
                >
                    <img src="/Johnrey2.png" alt="bg-img" height={500} width={500} />
                </motion.div>
                <motion.div 
                    ref={ref}
                    className='mt-4 md:mt-0 flex text-center md:text-start lg:items-start flex-col h-full justify-center order-1 md:order-2'
                    initial={{ opacity: 0, y: -75 }} 
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -75 }} 
                    transition={{ duration: 0.5 }}
                >
                    <h1 className='heading font-bold mb-4 text-science-blue-950 md:text-start'>
                        About <span className='text-science-blue-600'> Me</span>
                    </h1>
                    <p className='text-sm md:text-base lg:text-lg font-normal text-science-blue-950'>
                        {about.desc}
                    </p>
                    {/* Uncomment the tab buttons if needed */}
                    {/* <div className='flex flex-row mt-8 border-b-2'>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                            {" "} Skills{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("experiences")} active={tab === "experiences"}>
                            {" "} Experiences{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
                            {" "} Certifications{" "}
                        </TabButton>
                    </div>
                    <div className='mt-8 text-science-blue-950'>
                        {tabData.find((t: string) => t.id === tab).content}
                    </div> */}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
