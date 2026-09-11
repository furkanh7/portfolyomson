import React from 'react';
import { NavLink } from 'react-router-dom';

const navs = [
  { name: 'hakkımda', link: '/' },
  { name: 'deneyimlerim', link: '/expertise' },
  { name: 'projelerim', link: '/projects' },
  { name: 'iletişim', link: '/contact' },
];

/*
  Aktif sekme NavLink üzerinden adresten türetiliyor. Daha önce ayrı bir
  state + window.location.pathname okumasıyla tutuluyordu ve tarayıcının
  geri/ileri tuşlarında yanlış sekme işaretli kalıyordu.
*/
const Navbar = () => (
  <nav className='mt-6'>
    <ul className='flex w-full flex-wrap items-center justify-center gap-x-1 gap-y-1 sm:gap-x-3'>
      {navs.map((nav) => (
        <li key={nav.link}>
          <NavLink
            to={nav.link}
            end={nav.link === '/'}
            className={({ isActive }) =>
              `block cursor-pointer rounded-3xl px-3 py-2 text-sm transition-colors
              sm:px-4 sm:text-lg
              focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400
              ${
                isActive
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`
            }
          >
            {nav.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
