import React from 'react'

const Button = (props) => {

  const {children,addClass, ...buttonProps} = props;

  return (
    <button className={`px-2 py-4 bg-black dark:bg-gray-600 
    text-white rounded-xl sm:w-1/3 w-full ${addClass} hover:bg-opacity-90`} {...buttonProps}>
                {children}
    </button>
  )
}

export default Button