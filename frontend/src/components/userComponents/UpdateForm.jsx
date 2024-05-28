'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { userInfo } from '@/controllers/userAuth/userAuth';
import axiosInstance from '@/config/axiosConfig';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from '@nextui-org/react';
import Link from 'next/link';

function UpdateForm() {
  const [isFollowed, setIsFollowed] = useState(false);
  const { username, id } = userInfo();
  const [userDetails, setuserDetails] = useState({
    userName: username,
    userPassword: '',
  });

  const [error, seterror] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setuserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  //update user password
  const handleUpdate = async (e) => {
    e.preventDefault();

    const { userPassword } = userDetails;

    try {
      if (typeof window !== null && typeof sessionStorage !== null) {
        const token = sessionStorage.getItem('token');
        if (!token) {
          router.push('/login');
          return null;
        }
        await axiosInstance.patch(
          `/update/user/${id}`,
          { userPassword },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );
        //send alert
        Swal.fire({
          icon: 'success',
          title: 'Successfully updated your password.',
          timer: 1500,
        });
        router.push('/');

        sessionStorage.removeItem('token');

        setTimeout(() => {
          window.location.reload();
        }, 500);
      }

      //send error
    } catch (error) {
      console.log('update error', error);
      Swal.fire({
        icon: 'error',
        title: 'Unable to update user',
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <div className='flex flex-col items-center justify-center h-[100vh] bg-gradient-to-r from-red-300 to-purple-500'>
        <Link
          href={'/'}
          className='mb-8 justify-start text-gray-700 pr-[560px] lg:pr-[764px] text-xs'
        >
          Home
        </Link>
        <div className='md:p-4 xl:pl-12'>
          <div className='rounded-lg shadow-lg animate-pulse'></div>
          <div
            id='form-container'
            className='mt-6 rounded-lg transform transition duration-500 ease-in-out'
          >
            <h2
              id='form-title'
              className='text-center underline xl:text-3xl font-quicksand text-xl tracking-wider font-semibold mb-4 text-white'
            >
              Change Details
            </h2>
            <form
              className='md:p-4 py-6 flex flex-col justify-center items-center'
              onSubmit={handleUpdate}
            >
              <input
                className='w-64 md:w-72  text-center lg:w-80 mb-4 h-10 px-3 xl:w-96 xl:h-12 xl:mb-6 rounded-lg'
                name='userName'
                type='text'
                value={userDetails.userName}
                disabled
              />
              <input
                className='w-64 md:w-72 text-center lg:w-80 mb-4 h-10 px-3 xl:w-96 xl:h-12 xl:mb-6 rounded-lg'
                placeholder='New password'
                onChange={handleChange}
                id=''
                value={userDetails.userPassword}
                name='userPassword'
                type='password'
                required
                minLength={6}
              />
              {/* error message */}
              {error && (
                <div className='text-red-500'>All fields are required</div>
              )}
              {/* registerButton */}
              <button
                type='submit'
                className='w-64 md:w-72 lg:w-80 h-10 xl:w-96 rounded-lg bg-purple-500 hover:bg-white hover:text-purple-500 text-white font-bold py-2 px-4 xl:h-12 xl:mb-6 focus:outline-none'
              >
                Update
              </button>{' '}
            </form>
          </div>
        </div>
        <div>
          <Card className='max-w-[340px]'>
            <CardHeader className='justify-between'>
              <div className='flex gap-5'>
                <Avatar
                  isBordered
                  radius='full'
                  size='md'
                  src='https://nextui.org/avatars/avatar-1.png'
                />
                <div className='flex flex-col gap-1 items-start justify-center'>
                  <h4 className='text-small font-semibold leading-none text-default-600'>
                    Martins Kosher
                  </h4>
                  <h5 className='text-small tracking-tight text-default-400'>
                    @zoeylang
                  </h5>
                </div>
              </div>
              <Button
                className={
                  isFollowed
                    ? 'bg-transparent text-foreground border-default-200'
                    : ''
                }
                color='primary'
                radius='full'
                size='sm'
                variant={isFollowed ? 'bordered' : 'solid'}
                onPress={() => setIsFollowed(!isFollowed)}
              >
                {isFollowed ? 'Check-in' : 'Check-out'}
              </Button>
            </CardHeader>
            <CardBody className='px-3 py-0 text-small text-default-400'>
              <p>
                Frontend developer and UI/UX enthusiast. Join me on this coding
                adventure!
              </p>
              <span className='pt-2'>
                #FrontendWithMartins
                <span className='py-2' aria-label='computer' role='img'>
                  💻
                </span>
              </span>
            </CardBody>
            <CardFooter className='gap-3'>
              <div className='flex gap-1'>
                <p className='font-semibold text-default-400 text-small'>4</p>
                <p className=' text-default-400 text-small'>Leave Days Left</p>
              </div>
              <div className='flex gap-1'>
                <p className='font-semibold text-default-400 text-small'>97</p>
                <p className='text-default-400 text-small'>Worked days</p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default UpdateForm;
