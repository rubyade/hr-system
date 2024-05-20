import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';
import { FaRegBell } from 'react-icons/fa';
import Image from 'next/image';
import hrimage from '../../public/abdullah-ali-yQA11IaTA58-unsplash.jpg';
import Card from './Card';
import Button from './Button';
import Calendar from 'react-calendar';
import { FaCalendar } from 'react-icons/fa';
import LineChart from './LineChart';
import Meeting from './Meeting';
import 'react-calendar/dist/Calendar.css';

const AdminHome = () => {
  const { openSidebar, isSidebarOpen } = useGlobalContext();

  return (
    <main className='bg-white'>
      <button onClick={openSidebar}>
        <FaBars className='icon fixed top-9 left-9 text-sm bg-transparent border-transparent cursor-pointer text-gray-600' />
      </button>
      <div className='content-container'>
        <div className='bg-gradient-to-r from-red-300 to-purple-500 flex flex-col md:flex-row md:gap-9 items-center pr-5 md:justify-end md:h-16 md:ml-16 rounded shadow-md'>
          <div className='flex flex-row justify-between ml-9 '>
            <Button label='Login' />
            <Button label='Signin' />
          </div>
          <div className='flex flex-row justify-between mt-4'>
            <div className=' flex flex-col justify-center items-center w-32'>
              <h3 className='text-sm text-gray-700 font-bold font-quicksand'>
                Hello Robert
              </h3>
              <h6 className='text-xs font-thin text-white'>Good Morning</h6>
            </div>

            <button className=' bg-slate-300 hover:bg-gray-700 hover:text-white border-2 rounded p-2 border-transparent cursor-pointer text-xl ml-2 mr-2 text-gray-700 font-bold'>
              <FaRegBell />
            </button>

            <div className='rounded bg-white text-gray-500 flex flex-row justify-center items-center w-32'>
              <Image src={hrimage} alt='hr-image' className='max-w-6'></Image>
              <div className='flex flex-col'>
                <h3 className='text-sm text-gray-700 font-bold font-quicksand'>
                  Hillary Duncan
                </h3>
                <h6 className='text-xs font-thin text-red-500'>Hr Manager</h6>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center gap-2 md:justify-end mt-7'>
          <div className='flex flex-col md:flex-row md:flex-wrap justify-end gap-1 '>
            <Card heading='Total Applicants' total='560' percent='12%' />
            <Card heading='Total Employees' total='300' percent='18%' />
            <Card heading='Total Attendance' total='1560' percent='25%' />
            <Card heading='Total Projects' total='260' percent='76%' />
          </div>
          <div className=' w-72 md:w-64 lg:w-96 h-96 md:mr-2 mt-4 rounded'>
            <Calendar />
          </div>
        </div>
        <div>
          <div className='flex justify-center items-center flex-col md:flex-row md:justify-between '>
            <LineChart />
            <Meeting />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminHome;
