import React from 'react'

const TabButton = ({active, selectTab, title}) => {
    const buttonClasses = active ? ' text-white border-b border-purple-500' : 'text-[#ADB7BE]'

  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white text[#ADB7BE] ${buttonClasses}`}>
            {title}
        </p>
    </button>
  )
}

export default TabButton
