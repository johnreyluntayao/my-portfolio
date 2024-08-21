import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { items } from '@/data'

const Grid = () => {
  return (
    <section id="about">

<div className='pt-32 pb-10'>
        <p className='text-2xl flex justify-center items-center text-science-blue-600 font-semibold'>About me</p>
      </div>
       <BentoGrid>
        {items
        .map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
            <BentoGridItem 
                id={id}
                key={id}
                title={title}
                description={description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}


            />
        ))}
        </BentoGrid> 
        
    </section>
    
  )
}

export default Grid