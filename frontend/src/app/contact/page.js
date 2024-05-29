'use client';
import Lists from '@/components/general/Lists';
import Person from '@/components/Person';
import { useState } from 'react';
import contactdata from '../../contactdata';
import List from '../../components/general/Lists.jsx';
import ContactLists from '@/components/Contact/ContactLists';
import Link from 'next/link';

export default function Contact() {
  const [people, setPeople] = useState(contactdata);
  return (
    <main className='flex items-center justify-center bg-gradient-to-r from-red-300 to-purple-500'>
      <div className='container flex-col flex justify-center items-center'>
        <Link
          href={'/'}
          className='mb-8 justify-start text-white text-xs lg:pr-[764px] md:pr-[560px]'
        >
          Home
        </Link>
        <div className='flex justify-center items-center flex-col pb-8'>
          <h1 className='font-teachers font-bold text-4xl md:text-8xl text-white '>
            Contact Us
          </h1>
          <hr />
          <h3 className='font-dosis text-center text-white text-lg md:text-4xl font-extralight'>
            Email and Github repos of the Group A Team
          </h3>
        </div>
        <div className='flex text-2xl font-teachers text-white'>
          <ContactLists people={people} />
        </div>
      </div>
    </main>
  );
}
