import React from 'react'

interface TabButtonProps {
    active: boolean;
    selectTab: () => void;
    children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-science-blue-600 border-b-2 border-science-blue-600' : 'text-science-blue-950'

  return (
    <button onClick={selectTab}>
        <p className={`mr-5 font-semibold hover:text-science-blue-600 ${buttonClasses}`}>
        {children}
        </p>
        
        </button>
  )
}

export default TabButton