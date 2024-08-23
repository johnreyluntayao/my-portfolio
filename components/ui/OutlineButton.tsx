import React from 'react'

const OutlineButton = ({title, icon, position, functionClick, moreClasses}: {
    title: string;
    icon: React.ReactNode;
    position: string;
    functionClick?: () => void;
    moreClasses?: string;
}) => {
  return (
    <button className="relative w-full inline-flex h-16 overflow-hidden rounded-full p-[5px] focus:outline-none md:w-44 md:mt-10">
  {/* <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e0effe_0%,#7cc7fd_50%,#0d91ea_100%)]" /> */}
  <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-science-blue-50 px-6 text-sm font-bold text-science-blue-950 backdrop-blur-3xl gap-2 border-4 border-science-blue-500 ${moreClasses}`}>
    {position === 'left' && icon}
    {title}
    {position === 'right' && icon}
  </span>
</button>
  )
}

export default OutlineButton