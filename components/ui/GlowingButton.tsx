import React from 'react'

const GlowingButton = ({title, icon, position, functionClick, moreClasses}: {
    title: string;
    icon?: React.ReactNode;
    position?: string;
    functionClick?: () => void;
    moreClasses?: string;
}) => {


  return (
    
    <button className={`inline-flex text-sm px-4 py-2 md:text-base md:px-6 md:py-3 lgd:text-lg lg:px-8 lg:py-4 animate-shimmer items-center justify-center rounded-full bg-[length:200%_100%] gap-2 font-base transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white ${moreClasses}`}>
    {/* <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e0effe_0%,#7cc7fd_50%,#0d91ea_100%)]" /> */}
    {/* <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-science-blue-500 px-6 text-sm font-semibold text-white backdrop-blur-3xl gap-2 ${moreClasses}`}> */}
    {position === 'left' && icon}
    {title}
    {position === 'right' && icon}
    {/* </span> */}
  </button>

//     <button className="relative w-full inline-flex h-16 overflow-hidden rounded-full p-[5px] focus:outline-none md:w-44 md:mt-10">
  
// </button>
  )
}

export default GlowingButton