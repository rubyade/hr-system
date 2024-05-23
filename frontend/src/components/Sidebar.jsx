'use client';

import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';
import { social, links } from '@/controllers/datasidebar';

function Sidebar() {
  const { isSidebarOpen, closeSidebar, openSidebar } = useGlobalContext();
  return (
    <aside
      className={`fixed grid left-0 w-full justify-center h-full gap-y-3 bg-white top-0 pt-4 grid-rows-[auto_1fr_auto] transition duration-300 ease-in-out all ${
        isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'
      }`}
    >
      <div className='sidebar-header flex justify-between items-center px-10 pb-8'>
        <h2 className='text-left font-bold text-xl font-jaro text-red-600 xl:text-2xl'>
          GroupA
        </h2>
        <button
          onClick={closeSidebar}
          className='bg-transparent border-transparent cursor-pointer text-xl text-red-600'
        >
          <FaTimes />
        </button>
      </div>
      <ul className=''>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id} className='links'>
              <a
                href={url}
                className='flex gap-8 items-center text-lg capitalize px-5 pb-8 text-gray-700 tracking-wide hover:bg-slate-400 hover:text-gray-800 transition duration-300 ease-in-out all'
              >
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='social-links flex justify-center pb-6 gap-1'>
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a
                href={url}
                className='text-lg mx-0 mb-4 text-blue-400 transition duration-300 ease-in-out all hover:text-blue-700 justify-self-center'
              >
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
