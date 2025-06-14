import React from 'react'

const Input = (props) => {
  return (
    <input type="text" className='px-4 py-4 outline-none 
          border w-full rounded-xl sm:text-base text-sm dark:text-black' {...props}/>
  )
}

export default Input