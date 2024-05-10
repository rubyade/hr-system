'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import Image from 'next/image';
import registerimg from '../../public/campaign-creators-gMsnXqILjp4-unsplash.jpg';

function RegisterForm() {
  const [userDetails, setuserDetails] = useState({
    userName: '',
    email: '',
    userPassword: '',
  });

  const [error, seterror] = useState('');

  const router = useRouter();
  // console.log(userDetails);

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setuserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  //registering new user
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { userName, email, userPassword } = userDetails;

    //all fields are required
    if (!userName || !email || !userPassword) {
      seterror('All fields are necessary');
      return;
    }

    try {
      const user = { username: userName, email: email, password: userPassword };

      const res = await fetch('api/v1/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      console.log(res.status);

      //Resetting the form if all is well
      const form = e.target;
      if (res.status === 500 || 404) {
        form.reset();
        // send alert
        Swal.fire({
          icon: 'error',
          title: 'Failed to register',
          showConfirmButton: false,
          timer: 2000,
          position: 'top',
        });
        console.log('unable to register user');
      } else {
        form.reset();

        //send alert
        Swal.fire({
          icon: 'success',
          title: 'Successfully registered',
          showConfirmButton: false,
          timer: 2000,
          position: 'top',
        });

        router.push('/login');
      }
    } catch (error) {
      console.log('An error occured registering user');
    }
  };

  return (
    <div className='absolute'>
      <div className='flex flex-col md:flex-row items-center justify-between mt-12'>
        <div>
          <Image
            src={registerimg}
            alt='/'
            className='rounded max-w-72 md:max-w-96 lg:max-w-lg  xl:max-w-2xl lg:pl-8 lg:border-none dark:border-neutral-700 dark:bg-neutral-800'
          />
        </div>
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
              Register
            </h2>
            <form
              className='md:p-4 py-6 flex flex-col justify-center items-center'
              onSubmit={handleSubmit}
            >
              <input
                className='w-64 md:w-72 lg:w-80 mb-4 h-10 px-3 xl:w-96 xl:h-12 xl:mb-6 rounded-lg'
                placeholder='Username'
                id=''
                name='userName'
                type='text'
                onChange={handleChange}
              />
              <input
                className='w-64 md:w-72 lg:w-80 mb-4 h-10 px-3 xl:w-96 xl:h-12 xl:mb-6 rounded-lg'
                placeholder='Email'
                onChange={handleChange}
                id=''
                name='email'
                type='text'
              />
              <input
                className='w-64 md:w-72 lg:w-80 mb-4 h-10 px-3 xl:w-96 xl:h-12 xl:mb-6 rounded-lg'
                placeholder='Password'
                onChange={handleChange}
                id=''
                name='userPassword'
                type='password'
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
                Register
              </button>{' '}
              {/* Login if already registered */}
              <p className='font-quicksand text-sm xl:text-lg mt-4 text-white '>
                Already registered?{' '}
                <Link
                  className='hover:text-blue-800 xl:text-lg text-sm text-white font-quicksand'
                  href={'/login'}
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RegisterForm;
