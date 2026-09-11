import React from 'react';

const Button = ({ children, addClass = '', ...buttonProps }) => (
  <button
    className={`w-full rounded-xl bg-black px-2 py-4 text-white transition-colors
      hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-1/3
      focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400
      dark:bg-white dark:text-black dark:hover:bg-gray-200 ${addClass}`}
    {...buttonProps}
  >
    {children}
  </button>
);

export default Button;
