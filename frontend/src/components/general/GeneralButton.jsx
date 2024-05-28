'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

function GeneralButton(props) {
  const { label, action } = props;
  const router = useRouter();

  const handleLogout = () => {
    if (action === 'logout') {
      localStorage.removeItem('token');
      router.push('/');
      setTimeout(() => {
        window.location.reload();
      }, 500);
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

export default GeneralButton;
