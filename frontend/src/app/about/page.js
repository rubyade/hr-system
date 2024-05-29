'use client';

import Lists from '@/components/general/Lists.jsx';
import Person from '@/components/Person';
import { useState } from 'react';
import data from '../../data.jsx';
import Link from 'next/link.js';

export default function About() {
  const [people, setPeople] = useState(data);
  return (
    <main className='flex items-center justify-center bg-gradient-to-r from-red-300 to-purple-500'>
      <div className='container flex flex-col justify-center items-center'>
        <Link
          href={'/'}
          className='mb-8 justify-start text-white md:pr-[560px] lg:pr-[764px] text-xs'
        >
          Home
        </Link>
        <div className='flex justify-center items-center flex-col pb-8'>
          <h1 className='font-teachers font-bold text-4xl md:text-8xl text-white'>
            About
          </h1>
          <hr />
          <h3 className='font-dosis text-center text-white text-lg md:text-4xl font-extralight'>
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
