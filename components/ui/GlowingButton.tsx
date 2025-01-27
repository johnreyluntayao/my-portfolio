import React from 'react'

const GlowingButton = ({title, icon, position, functionClick, moreClasses}: {
    title: string;
    icon?: React.ReactNode;
    position?: string;
    functionClick?: () => void;
    moreClasses?: string;
}) => {


  return (
    
    <button className={`inline-flex animate-shimmer items-center justify-center rounded-lg bg-[length:200%_100%] gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white ${moreClasses}
      text-xs px-4 py-2
      md:text-sm md:px-5 md:py-3 
      lg:text-base lg:px-6 lg:py-3
    `}>
    {position === 'left' && icon}
    {title}
    {position === 'right' && icon}
  </button>
  )
}

export default GlowingButton