import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../general/context';
import { FaRegBell } from 'react-icons/fa';
import Image from 'next/image';
import Card from './Card';
// import Button from '../components/general/Button';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaCalendar } from 'react-icons/fa';
import LineChart from './LineChart';
import { useUsers } from '@/services/queries';

const AdminHome = () => {
  const [userData, setUsersData] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const { openSidebar } = useGlobalContext();
  const { data } = useUsers();

  useEffect(() => {
    if (data?.users) {
      setUsersData(data.users);

      const attendees = data.users.filter((user) => user.status === 'present');

      setAttendance(attendees);
    }
  }, [data]);

  return (
    <main className=''>
      <button onClick={openSidebar}>
        <FaBars className='icon fixed top-9 left-9 text-sm bg-transparent border-transparent cursor-pointer text-gray-600' />
      </button>

      <div className='flex gap-9 items-center pr-5 justify-end'>
        {/* <Button label='Login' />
        <Button label='Signin' /> */}
        <div className=' flex flex-col justify-center items-center w-32'>
          <h3 className='text-sm text-gray-700 font-bold font-quicksand'>
            Hello Robert
          </h3>
          <h6 className='text-xs font-thin text-white'>Good Morning</h6>
        </div>

        <button className=' bg-slate-300 hover:bg-gray-700 border-2 rounded p-2 border-transparent cursor-pointer text-xl text-gray-700 font-bold'>
          <FaRegBell />
        </button>
        <div className='rounded bg-white text-gray-500 flex flex-row justify-center items-center w-32'>
          {/* <Image src={hrimage} alt='hr-image' className='max-w-6'></Image> */}
          <div className='flex flex-col'>
            <h3 className='text-sm text-gray-700 font-bold font-quicksand'>
              Hillary Duncan
            </h3>
            <h6 className='text-xs font-thin text-red-500'>Hr Manager</h6>
          </div>
        </div>
      </div>
      <div className='flex gap-2 justify-end mt-7'>
        <div className='flex w-96 justify-start flex-wrap gap-1 '>
          <Card
            date='update:Feb 16 2024'
            heading='Total Applicants'
            total='560'
            percent='12'
          />
          <Card
            date='update:Jan 12 2024'
            heading='Total Employees'
            total={userData.length.toString().padStart(2, '0')}
            percent='18'
          />
          <Card
            date='update:May 12 2024'
            heading='Total Attendance'
            total={attendance.length.toString().padStart(2, '0')}
            percent='12'
          />
          <Card
            date='update:Mar 6 2024'
            heading='Total Projects'
            total='260'
            percent='12'
          />
        </div>
        <div className='w-72 h-72 mr-4 rounded'>
          <Calendar />
        </div>
      </div>

      <div className='flex justify-end '>
        <LineChart />
      </div>
    </main>
  );
};

export default AdminHome;
