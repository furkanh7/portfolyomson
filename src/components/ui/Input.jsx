import React from 'react';

const Input = (props) => (
  <input
    type='text'
    className='w-full rounded-xl border border-gray-300 px-4 py-4 text-sm outline-none
      transition-colors placeholder:text-gray-400 sm:text-base
      focus:border-gray-500 focus:ring-2 focus:ring-gray-200
      dark:border-gray-600 dark:bg-gray-700 dark:text-white
      dark:placeholder:text-gray-400 dark:focus:border-gray-400 dark:focus:ring-gray-600'
    {...props}
  />
);

export default Input;
