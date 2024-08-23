import React from 'react'

interface TabButtonProps {
    active: boolean;
    selectTab: () => void;
    children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-science-blue-400 border-b border-science-blue-400' : 'text-gray'

  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-science-blue-500 ${buttonClasses}`}>
        {children}
        </p>
        
        </button>
  )
}

export default TabButton