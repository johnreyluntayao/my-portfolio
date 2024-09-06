import React from 'react'

interface TabButtonProps {
    active: boolean;
    selectTab: () => void;
    children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-science-blue-950 font-semibold border-b-4 border-science-blue-500' : 'text-science-blue-950'

  return (
    <button onClick={selectTab}>
        <p className={`mr-5 font-light pb-2 ${buttonClasses}`}>
        {children}
        </p>
        
        </button>
  )
}

export default TabButton