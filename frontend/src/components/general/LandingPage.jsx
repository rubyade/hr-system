'use client';
import React from 'react';
import Image from 'next/image';
import Button from '../general/GeneralButton';
import List from './List';
import Link from 'next/link';
import useToken from '@/controllers/userAuth/userToken';

function LandingPage() {
  const { isAuthenticated } = useToken();

  return (
    <div>
      <div className='p-8 flex flex-col md:flex-row justify-between pt-24 md:pt-44 md:pb-20 lg:pt-60 lg:pb-44  xl:pt-52 xl:gap-16'>
        <div className='flex flex-col md:pr-2 lg:px-1 lg:w-7/12 lg:mt-28'>
          <h4 className='font-bold lg:text-2xl font-quicksand text-xs text-white uppercase  xl:text-lg'>
            automate and hire
          </h4>
          <h1 className='md:text-2xl lg:text-5xl lg:w-[509px] xl:w-full font-bold font-teachers xl:text-7xl'>
            HR, Payroll, & Benefits
          </h1>
          <h1 className='md:text-4xl lg:text-6xl font-extrabold font-teachers xl:text-8xl'>
            The Complete HR Software
          </h1>
          <p className='text-lg text-white text-left lg:w-[509px] lg:text-2xl xl:w-11/12'>
            Streamlining your business operations is crucial for efficiency, and
            one way to achieve this is by managing your HR and payroll in a
            single system and by integrating these functions.
          </p>

          {!isAuthenticated && (
            <div className='pt-2 pb-9 flex flex-row mt-4 md:pt-4'>
              <Link
                href={'/login'}
                className='md:pr-10 pr-9 md:static'
                passHref
              >
                <Button label='Get Started' />
              </Link>
              <div className='xl:ml-36'></div>
            </div>
          )}
        </div>
        <div>
          <Image
            src='/campaign-creators-gMsnXqILjp4-unsplash.jpg'
            alt='/'
            width={500}
            height={500}
            // className='rounded border md:max-w-96 lg:max-w-lg  xl:max-w-2xl lg:pl-8 lg:border-none dark:border-neutral-700 dark:bg-neutral-800'
            className='rounded border md:max-w-96 lg:max-w-md  xl:max-w-2xl lg:pt-24 lg:pl-2 lg:border-none dark:border-neutral-700 dark:bg-neutral-800 mt-4 md:mt-0 lg:mr-7 xl:mt-7'
          />
        </div>
      </div>

      <div className='mt-10'>
        <hr class='h-px bg-gray-200 border-0 dark:bg-gray-700'></hr>
        <div className='lg:mt-16'>
          <List />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
