import React from 'react';
import { SlSocialInstagram } from 'react-icons/sl';
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import useTheme from '../../hooks/useTheme';

const socials = [
  {
    label: '@furkanhilalogluu',
    href: 'https://www.instagram.com/furkanhilalogluu/',
    icon: SlSocialInstagram,
    name: 'Instagram',
  },
  {
    label: 'furkanh7',
    href: 'https://github.com/furkanh7',
    icon: BsGithub,
    name: 'GitHub',
  },
  {
    label: 'furkanhilaloglu',
    href: 'https://www.linkedin.com/in/furkanhilaloglu/',
    icon: AiFillLinkedin,
    name: 'LinkedIn',
  },
];

const Layout = ({ children }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div
      className='mx-auto my-5 sm:my-20 w-full max-w-sm sm:max-w-lg md:max-w-2xl
        rounded-2xl border border-gray-200 bg-white text-gray-900 shadow-xl
        transition-colors duration-200
        dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100'
    >
      <div className='w-full p-6 sm:p-10'>
        {/* header */}
        <div className='flex items-start justify-between gap-4 py-2'>
          <div className='flex flex-col'>
            <Link
              to='/'
              className='rounded-lg text-lg font-medium tracking-tight
                select-none sm:text-3xl
                focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400'
            >
              furkan hilaloğlu
            </Link>
            <span className='ml-1 text-base font-extralight text-gray-500 sm:text-xl dark:text-gray-400'>
              - yazılım geliştirici
            </span>
          </div>

          <button
            type='button'
            onClick={toggleTheme}
            className='shrink-0 rounded-full bg-gray-100 p-2 text-gray-700
              transition-colors hover:bg-gray-200
              focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400
              dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600'
            aria-label={isDark ? 'Açık temaya geç' : 'Koyu temaya geç'}
            title={isDark ? 'Açık temaya geç' : 'Koyu temaya geç'}
          >
            {isDark ? <FaSun size={22} /> : <FaMoon size={22} />}
          </button>
        </div>

        <div className='mt-4 border-b border-gray-200 dark:border-gray-700' />

        {/* navbar */}
        <Navbar />

        {/* content */}
        <main>{children}</main>

        <div className='my-10 border-b border-gray-200 dark:border-gray-700' />

        {/* footer */}
        <footer className='flex flex-wrap items-center gap-4'>
          <div className='flex items-center gap-4'>
            {socials.map(({ label, href, icon: Icon, name }) => (
              <a
                key={name}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={name}
                title={`${name}: ${label}`}
                className='rounded-lg p-1 text-gray-700 transition-colors hover:text-gray-900
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400
                  dark:text-gray-300 dark:hover:text-white'
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
