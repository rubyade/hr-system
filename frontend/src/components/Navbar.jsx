'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useState } from 'react';
import GeneralButton from '../components/general/GeneralButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import useToken from '@/controllers/userAuth/userToken';
import { userInfo } from '@/controllers/userAuth/userAuth';
import { Button } from '@nextui-org/react';

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [userRole, setRole] = useState('user');
  const { isAuthenticated } = useToken();
  const [checkin, setCheckin] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      const { role } = userInfo();
      setRole(role);
    }
  }, [isAuthenticated]);

  const handleClick = () => {
    setClicked(!clicked);
  };
  // userRole !== "admin" &&
  return (
    <>
      <div className='w-full fixed top-0 left-0 shadow-lg'>
        <nav className='md:px-10 py-4 px-7 md:flex justify-between items-center font-teachers  bg-gradient-to-r from-red-300 to-purple-500'>
          {/* Logo Here!! */}
          <div className='flex text-2xl cursor-pointer items-center gap-2'>
            <FontAwesomeIcon
              icon={faBusinessTime}
              size='1.5x'
              className='fill-current text-white'
            />
            <h2 className='text-left font-bold text-xl font-jaro text-white xl:text-2xl'>
              Hr-GroupA
            </h2>
          </div>

          {/* Menu Icon */}
          <div
            onClick={handleClick}
            className='absolute top-4 right-6 cursor-pointer md:hidden'
          >
            {clicked ? (
              <FontAwesomeIcon
                icon={faXmark}
                size='2x'
                className='fill-current text-white'
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                size='2x'
                className='fill-current text-white'
              />
            )}
          </div>

          {/* Nav-Links here!! */}
          <ul
            id='navbar-link'
            className={`md:flex md:pl-0 pl-9 my-2 md:flex-row md:items-center md:pb-0 absolute md:static bg-gradient-to-r from-red-300 to-purple-500 md:bg-none md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-500 ease-in ${
              clicked ? 'top-12' : 'top-[-490px]'
            }`}
          >
            {!isAuthenticated && (
              <>
                {' '}
                <li className='navLink'>
                  <Link href={'/'}>Home</Link>
                </li>
                <li className='navLink'>
                  <Link href={'/about'}>About</Link>
                </li>
                <li className='navLink'>
                  <Link href={'/contact'}>Contact</Link>
                </li>
                <Link
                  href={'/login'}
                  className='py-1 md:static md:ml-8'
                  passHref
                >
                  <GeneralButton label='Get Started' />
                </Link>
              </>
            )}

            {isAuthenticated && (
              <>
                <li className='navLink'>
                  <Link href={'/work'}>Work</Link>
                </li>
                <li className='navLink'>
                  <Link href={'/leave'}>Leave</Link>
                </li>
                <li className='navLink'>
                  <Link href={'/account'}>Account</Link>
                </li>
                <li href={''} className='py-1 md:static md:ml-8' passHref>
                  <GeneralButton label='Logout' action='logout' />
                </li>
              </>
            )}
            <li>
              <Button
                className={`hover:bg-purple-500 hover:text-white text-purple-500 bg-white rounded text-xs py-2 px-8 ml-2 ${
                  checkin
                    ? 'bg-transparent text-foreground border-default-200'
                    : ''
                }`}
                color='primary'
                radius='full'
                size='sm'
                variant={checkin ? 'bordered' : 'solid'}
                onPress={() => setCheckin(!checkin)}
              >
                {checkin ? 'Clock-In' : 'Clock-Out'}
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
