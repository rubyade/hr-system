'use client';
import axiosInstance from '@/config/axiosConfig';
import { useRouter } from 'next/navigation';
import React from 'react';
import Swal from 'sweetalert2';

function Button(props) {
  const { label, action } = props;
  const router = useRouter();

  const handleLogout = () => {
    if (action === 'logout') {
      Swal.fire({
        title: 'Do you want to logout?',
        showCancelButton: true,
        confirmButtonText: 'Confirm',
      }).then((result) => {
        if (result.isConfirmed) {
          sessionStorage.removeItem('token');
          Swal.fire('Successfully logged out.', '', 'success');

          router.push('/');
          setTimeout(() => {
            window.location.reload();
          }, 500);
        }
      });
    }
  };

  return (
    <div>
      <button
        onClick={handleLogout}
        className='hover:bg-purple-500 hover:text-white bg-white text-purple-500 rounded text-sm py-2 px-8'
      >
        {label}
      </button>
    </div>
  );
}

export default Button;

export function CheckinButton(props) {
  const { label, action } = props;
  const router = useRouter();

  const handleCheckin = async () => {
    try {
      if (action === 'checkin') {
        const response = await axiosInstance.post('/user/checkin');

        if (response.status === 201) {
          const { id } = response.data;
          sessionStorage.setItem('checkinId', id);

          Swal.fire({
            icon: 'success',
            title: 'Successfully checked in.',
            timer: 1500,
          });
        }

        router.push('/');
        setTimeout(() => {
          window.location.reload();
        }, 500);
      } else {
        Swal.fire({
          title: 'Do you want to checkout?',
          showCancelButton: true,
          confirmButtonText: 'Checkout',
        }).then(async (result) => {
          if (result.isConfirmed) {
            const checkinId = sessionStorage.getItem('checkinId');
            await axiosInstance.patch(`/user/checkout/${checkinId}`);
            setTimeout(() => {
              sessionStorage.removeItem('checkinId');
            }, 500);

            Swal.fire('Successfully checked out.', '', 'success');

            router.push('/');
            setTimeout(() => {
              window.location.reload();
            }, 500);
          }
        });
      }
    } catch (error) {
      console.log('Checkin error', error);
      Swal.fire({
        icon: 'error',
        title: 'Failed to complete the action',
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <button onClick={handleCheckin}>{label}</button>
    </div>
  );
}
