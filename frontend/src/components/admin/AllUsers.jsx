'use client';
import React, { useEffect } from 'react';
import { useUsers } from '@/services/queries';
import { Tooltip } from '@nextui-org/react';
import axiosInstance from '@/config/axiosConfig';
import Swal from 'sweetalert2';
import { EditIcon, DeleteIcon } from '../general/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { userInfo } from '@/controllers/userAuth/userAuth';
import { Spinner } from '@nextui-org/react';

const AllUsersRecords = () => {
  const router = useRouter();
  useEffect(() => {
    const token = sessionStorage.getItem('token');

    if (!token) {
      router.push('/login');
      return;
    }

    const { role } = userInfo();

    if (!role) {
      router.push('/login');
      return;
    }

    if (role !== 'admin') {
      router.push('/');
      return;
    }

    router.refresh();
  }, [router]);

  const { data, isLoading, error } = useUsers();
  data && console.log(data);

  if (isLoading) {
    return (
      <div className='flex justify-center items-center text-6xl h-full'>
        <Spinner
          label='Please wait a moment while we get you the records'
          color='warning'
        />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='container mx-auto p-4'>
      <Link href={'/admin/dashboard'} className='mb-8'>
        Back to Dashboard
      </Link>
      <h2 className='text-2xl font-bold mb-4'>All Users Records</h2>
      <div className='overflow-x-auto'>
        <table className='min-w-full min-h-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                ID
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                User Name
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Email
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Used Leave
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Leave Balance
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Status
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Action
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {data &&
              data.users.map((record, index) => (
                <tr key={record.id}>
                  <td className='px-6 py-4 whitespace-nowrap'>{index + 1}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {record.userName
                      ? record.userName.charAt(0).toUpperCase() +
                        record.userName.slice(1)
                      : 'N/A'}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {record.userEmail}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {record.usedLeaveDays}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {record.leaveBalance}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-gray-800'>
                    <span
                      className={
                        record.status === 'absent'
                          ? 'bg-red-300 px-2 py-1 rounded-full'
                          : record.status === 'present' &&
                            'bg-green-300 px-2 py-1 rounded-full'
                      }
                    >
                      {record.status}
                    </span>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {
                      <div className='relative flex items-center gap-2'>
                        <button>
                          <Tooltip color='danger' content='Delete user'>
                            <span className='text-lg text-danger cursor-pointer active:opacity-50'>
                              <DeleteIcon />
                            </span>
                          </Tooltip>
                        </button>
                      </div>
                    }
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsersRecords;
