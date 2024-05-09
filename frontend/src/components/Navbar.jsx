'use client';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <nav class='navbar flex font-teachers justify-between items-center w-screen p-8 md:pl-16 lg:pl-24 lg:pt-8 xl:pl-40 bg-gradient-to-r from-red-300 to-purple-500'>
        <h2 className='text-left font-bold text-xl font-jaro text-purple-500 xl:text-2xl'>
          Hr-GroupA
        </h2>
        <div class='flex flex-col justify-between md:flex-row pl- md:items-center md:static absolute md:w-auto w-full duration-700 ease-in text-gray-700 xl:pl-96'>
          <ul
            id='navbar-link'
            class='hidden md:flex px-16 mx-auto font-semibold font-heading space-x-12'
            className={clicked ? '#navbar-link active' : '#navbar-link'}
          >
            <li>
              <Link className='active' href={'/home'}>
                Home
              </Link>
            </li>
            <Link href={'/pricing'}>Pricing</Link>
            <Link href={'/contact'}>Contact</Link>
            <Link href={'/about'}>About</Link>
          </ul>
        </div>

        {/* <div className='search-box'>
          <input type='text' placeholder='Search' />
        </div> */}
        <Link href={'/login'}>
          <Button label='Login' />
        </Link>

        {/* <FontAwesomeIcon icon={faBars} size='2x' />
        <FontAwesomeIcon icon={faXmark} size='2x' /> */}

        <div id='mobile'>
          <span
            id='bar'
            onClick={handleClick}
            className={clicked ? 'fas fa-times' : 'fas  fa-bars'}
          ></span>
        </div>
      </nav>
      <hr class='h-px md:mb-10 bg-gray-200 border-0 dark:bg-gray-700'></hr>
    </div>
  );
}

export default Navbar;
