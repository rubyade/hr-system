import React from 'react';

function Meeting() {
  return (
    <div className='meeting bg-white rounded p-4 w-72 mb-8 shadow-md md:mr-4 md:w-2/6 md:h-72'>
      <h1 className='font-dosis font-bold text-center '>MEETING SCHEDULE</h1>
      <hr />
      <div className='flex mt-4 justify-between'>
        <div className='py-8'>
          <h2 className='font-dosis font-thin'>Stand-Up</h2>
          <h2 className='font-dosis font-thin'>Meeting with MD</h2>
          <h2 className='font-dosis font-thin'>Project Discussions</h2>
          <h2 className='font-dosis font-thin'>Interview with Applicants</h2>
        </div>
        <div className='py-8'>
          <h4 className='font-dosis font-thin'>Time: 9.00AM</h4>
          <h4 className='font-dosis font-thin'>Time: 10.15AM</h4>
          <h4 className='font-dosis font-thin'>Time: 12.00PM</h4>
          <h4 className='font-dosis font-thin'>Time: 2.00PM</h4>
        </div>
      </div>
    </div>
  );
}

export default Meeting;
