'use client';
import Lists from '@/components/Lists';
import Person from '@/components/Person';
import { useState } from 'react';
import data from '../../data.jsx';

export default function Login() {
  const [people, setPeople] = useState(data);
  return (
    <main className='flex items-center justify-center'>
      <div className='container flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center flex-col pb-8'>
          <h1 className='font-dosis font-bold text-8xl text-white '>About</h1>
          <hr />
          <h3 className='font-quicksand text-center text-white text-4xl font-extralight'>
            {people.length} Members of the Group A Team
          </h3>
        </div>
        <div className='text-2xl font-teachers text-white'>
          <Lists people={people} />
        </div>
      </div>
    </main>
  );
}
