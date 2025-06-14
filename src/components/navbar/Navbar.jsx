import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const Navbar = ({ isDark, setIsDark }) => {
  const [active, setActive] = useState(0);

  const navs = [
    {
      name: "hakkımda",
      link: "/"
    },
    {
      name: "deneyimlerim",
      link: "/expertise"
    },
    {
      name: "projelerim",
      link: "/projects"
    },
    {
      name: "iletişim",
      link: "/contact"
    }
  ];

  useEffect(() => {
    const currentPath = window.location.pathname;
    const activeIndex = navs.findIndex(nav => nav.link === currentPath);
    setActive(activeIndex >= 0 ? activeIndex : 0);
  }, [window.location.pathname]);


  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className='mt-6'>
      <div className='flex justify-between items-center'>
        <ul className='flex flex-wrap gap-x-1 sm:gap-x-4 items-center w-full justify-center overflow-x-auto'>
          {navs.map((nav, i) => (
            <Link to={nav.link} key={i}>
              <li
                className={`rounded-3xl px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-lg cursor-pointer ${
                  active === i 
                    ? (isDark ? 'bg-white text-black' : 'bg-black text-white')
                    : (isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100')
                }`}
                onClick={() => setActive(i)}
              >
                {nav.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar