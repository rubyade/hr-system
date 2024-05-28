'use client';

import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdOutlineDashboard } from 'react-icons/md';
import { RiSettings4Line } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import { FiMessageSquare } from 'react-icons/fi';
import {
  FaCalendarAlt,
  FaWpforms,
  FaGripHorizontal,
  FaPowerOff,
} from 'react-icons/fa';
import AdminHome from '../AdminHome';
import Link from 'next/link';

const UserHome = () => {
  const menus = [
    { name: 'Dashboard', url: '/admin/dashboard', icon: MdOutlineDashboard },
    { name: 'All Employees', url: '/admin/users', icon: AiOutlineUser },
    { name: 'All Projects', url: '/admin/project', icon: FiMessageSquare },
    {
      name: 'Leave Records',
      url: '/admin/leaverecords',
      icon: FaCalendarAlt,
      margin: true,
    },
    {
      name: 'Employee Work Reports',
      url: '/admin/workreport',
      icon: FaWpforms,
    },
    {
      name: 'Employee Work Records',
      url: '/admin/workrecords',
      icon: FaGripHorizontal,
    },
    {
      name: 'Settings',
      url: '/admin/dashboard',
      icon: RiSettings4Line,
      margin: true,
    },
    { name: 'Logout', url: '/admin/dashboard', icon: FaPowerOff },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className='flex gap-4 md:gap-6'>
      <div
        className={` bg-gray-600 min-h-screen ${
          open ? 'w-72' : 'w-16'
        } duration-500 text-gray-100 px-4`}
      >
        <div className='py-3 flex justify-end'>
          <HiMenuAlt3
            size={26}
            className='cursor-pointer'
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className='mt-4 flex flex-col gap-4 relative'>
          {menus?.map((menu, i) => (
            <Link
              href={`${menu.url}`}
              key={i}
              className={` ${
                menu?.margin && 'mt-5'
              } group flex items-center text-sm lg:text-lg gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: '20' })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && 'opacity-0 translate-x-28 overflow-hidden'
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && 'hidden'
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className='text-xl text-gray-900 font-semibold'>
        <AdminHome />
      </div>
    </section>
  );
};

export default UserHome;
