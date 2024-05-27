import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';
import { FaRegBell } from 'react-icons/fa';
import Image from 'next/image';
import hrimage from '../../public/abdullah-ali-yQA11IaTA58-unsplash.jpg';
import Card from './Card';
// import Button from './Button';
import { today, getLocalTimeZone } from '@internationalized/date';
import 'react-calendar/dist/Calendar.css';
import { FaCalendar } from 'react-icons/fa';
import LineChart from './LineChart';
import { useUsers } from '@/services/queries';
import Meeting from './Meeting';
import DashboardCalendar from './dashboardCalendar';
import { User } from '@nextui-org/react';
import { Tooltip, Button } from '@nextui-org/react';

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
      {/* <button onClick={openSidebar}>
        <FaBars className="icon fixed top-9 left-9 text-sm bg-transparent border-transparent cursor-pointer text-gray-600" />
      </button> */}

      <div className='flex flex-col bg-gray-500 md:flex-row gap-2 items-center md:justify-between md:pt-10 justify-center rounded shadow-md p-7'>
        {/* <Button label='Login' />
        <Button label='Signin' /> */}
        <Tooltip content='Please Login'>
          <Button>Login</Button>
        </Tooltip>
        <Tooltip content='Logout here'>
          <Button>Logout</Button>
        </Tooltip>
        <div className=' flex flex-col justify-center items-center w-32'>
          <h3 className='text-sm text-gray-700 font-bold font-quicksand'>
            Hello Robert
          </h3>
          <h6 className='text-xs font-thin text-white'>Good Morning</h6>
        </div>
        <Tooltip content='Click to Log your Work-Hours'>
          <Button>Clock Time</Button>
        </Tooltip>
        <div className='rounded bg-white text-gray-500 flex flex-row justify-center items-center w-36 h-12'>
          <User
            name='Jane Doe'
            description='Hr Manager'
            avatarProps={{
              src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
            }}
          />
          {/* <Image src={hrimage} alt='hr-image' className='max-w-6'></Image>
          <div className='flex flex-col'>
            <h3 className='text-sm text-gray-700 font-bold font-quicksand'>
              Hillary Duncan
            </h3>
            <h6 className='text-xs font-thin text-red-500'>Hr Manager</h6>
          </div> */}
        </div>
      </div>
      <div className='flex gap-2 mt-7'>
        <div className='flex gap-4 flex-col md:flex-row md:flex-wrap lg:w-5/5 lg:h-96 '>
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
      </div>
      <div className='flex flex-col md:flex-row lg:justify-start md:justify-between lg:mt-12 md:w-80'>
        <div className='w-72'>
          <DashboardCalendar />
        </div>
        <LineChart />
      </div>
    </main>
  );
};

export default AdminHome;
