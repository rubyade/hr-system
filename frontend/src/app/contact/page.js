'use client';
import Lists from '@/components/Lists';
import Person from '@/components/Person';
import { useState } from 'react';
import contactdata from '../../contactdata';
import List from '../../components/Lists.jsx';
import ContactLists from '@/components/Contact/ContactLists';

export default function Contact() {
  const [people, setPeople] = useState(contactdata);
  return (
    <main className='flex items-center justify-center'>
      <div className='container flex-col flex justify-center items-center'>
        <div className='flex justify-center items-center flex-col pb-8'>
          <h1 className='font-dosis font-bold text-8xl text-white '>
            Contact Us
          </h1>
          <hr />
          <h3 className='font-quicksand text-center text-white text-4xl font-extralight'>
            Email and Github repos of the Group A Team
          </h3>
        </div>
        <div className=' flex-row flex text-2xl font-teachers text-white'>
          <ContactLists people={people} />
        </div>
      </div>
    </main>
  );
}
