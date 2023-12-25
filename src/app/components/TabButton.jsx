import React from 'react'

const TabButton = ({active, selectTab, title}) => {
    const buttonClasses = active ? 'text-white border-r-2 border-violet-500 bg-white bg-opacity-10' : 'text-[#ADB7BE]'

  return (
    <button onClick={selectTab}>
        <p className={`mr-3 p-8 rounded-l-xl font-semibold hover:text-white hover:bg-white hover:bg-opacity-10 text[#ADB7BE] ${buttonClasses}`}>
            {title}
        </p>
    </button>
  )
}

export default TabButton
