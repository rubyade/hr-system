import React from 'react';
import Card from '@/components/Card';

function Project() {
  return (
    <div className='pt-8'>
      <h1 className='font-dosis bg-white w-96 ml-72 mb-4 rounded shadow-md font-bold text-center text-6xl tracking-wider text-gray-600'>
        Active Projects
      </h1>
      <hr></hr>
      <div className='rounded flex flex-row flex-wrap m-4 pt-4 justify-center items-center bg-white gap-2'>
        <Card heading='Book Entry Project' percent='12%' total='10' />
        <Card heading='The Fortune Company' percent='42%' total='7' />
        <Card heading='A&A Enterprises' percent='56% ' total='4' />
        <Card heading='Charity Project' percent='85% ' total='5' />
        <Card heading='Simpson&Gold' percent='45% ' total='12' />
        <Card heading='Vera Ventures ' percent='90% ' total='3' />
        <Card heading='Animation Project' percent='16% ' total='15' />
        <Card heading='Digital Marketing' percent='72% ' total='2' />
      </div>
    </div>
  );
}

export default Project;
