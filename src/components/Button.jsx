import React from 'react'

const Button = ({
    children,
    type="button",
    className="",
    bgColor="bg-blue-600",
    textColor="white",
    ...prop



}) => {
  return (
    <button className={`px-4 py-2 ${bgColor} ${textColor} ${className} ${type}`}{...prop}>
         {children}
    </button>
    
  )
}

export default Button