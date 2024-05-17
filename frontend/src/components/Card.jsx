import React from 'react';
import { FaUserFriends, FaFireAlt } from 'react-icons/fa';

const card = (props) => {
  const heading = props.heading;
  const date = props.date;
  const percent = props.percent;
  const total = props.total;
  const currDate = new Date().toLocaleDateString();
  return (
    <div className='card shadow-md mb-4 ml-2 md:ml-0 p-6 gap-4 h-40 w-72 md:w-52 lg:w-72 lg:ml-4 rounded flex flex-col bg-white border-0 border-gray-400'>
      <div className='flex gap-1 items-center'>
        <button className=' bg-slate-50 shadow-md hover:bg-gray-700 border-4 border-transparent cursor-pointer text-xs text-blue-500 font-bold'>
          <FaUserFriends />
        </button>
        <h6 className='text-sm font-teachers'>{heading}</h6>
      </div>
      <div className='flex justify-between'>
        <h1 className='font-bold font-quicksand text-3xl'>{total}</h1>
        {/* <div className='flex justify-center w-14 h-7 gap-1 items-center bg-teal-100 shadow-md'>
          <button className=' text-teal-500 text-xs bg-teal-300'></button>
          <FaFireAlt />
          <h6 className='text-xs font-quicksand font-semibold text-green-300'>
            {percent}
          </h6>
        </div> */}
      </div>
      <h6 className='font-quicksand font-thin text-xs capitalize mt-4'>
        Update: {currDate}
      </h6>
    </div>
  );
};

export default card;
