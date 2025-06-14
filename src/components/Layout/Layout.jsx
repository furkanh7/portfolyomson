import React, { useState, useEffect } from 'react'
import { SlSocialInstagram } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import { FaSun, FaMoon } from 'react-icons/fa';

const Layout = ({children}) => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`border mx-auto sm:my-20 my-5 rounded-2xl shadow-2xl 
      md:max-w-2xl sm:max-w-lg max-w-sm ${isDark ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-black'}`}>
        <div className='p-10 w-full'>
            {/* header */}
            <div className='flex flex-col gap-0'>
              <div className='flex items-center justify-between py-2'>
                <div className='flex flex-col'>
                  <h4 className='sm:text-3xl text-lg select-none drop-shadow-lg'>furkan hilaloğlu</h4>
                  <span className='font-extralight sm:text-xl text-base ml-1 mt-0'>- yazılım geliştirici</span>
                </div>
                <button
                  onClick={() => {
                    setIsDark(!isDark);
                    if (!isDark) {
                      document.documentElement.classList.add('dark');
                      localStorage.setItem('theme', 'dark');
                    } else {
                      document.documentElement.classList.remove('dark');
                      localStorage.setItem('theme', 'light');
                    }
                  }}
                  className={`p-2 rounded-full transition-colors ${
                    isDark 
                      ? 'bg-gray-700 hover:bg-gray-600' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {isDark ? <FaSun size={24} className="text-white" /> : <FaMoon size={24} className="text-gray-700" />}
                </button>
              </div>
            </div>
            <div className={`border-b mt-4 ${isDark ? 'border-gray-700' : ''}`}></div>
              
            {/* navbar */}
            <Navbar isDark={isDark} setIsDark={setIsDark} />

            {/* content */}
            <main>
              {children}
            </main>

            <div className={`border-b my-10 ${isDark ? 'border-gray-700' : ''}`}></div>

            {/* footer */}
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-1'>
                  <SlSocialInstagram size={24} />
                  <a 
                    href="https://www.instagram.com/furkanhilalogluu/" 
                    target='_blank'
                    rel="noopener noreferrer"
                    className={isDark ? 'text-white' : 'text-black'}
                  >
                    <span className='font-semibold text-sm'>@furkanhilalogluu</span>
                  </a>
                </div>
                <span className='font-light'>
                
                </span>
            </div>
        </div>
    </div>
  )
}

export default Layout