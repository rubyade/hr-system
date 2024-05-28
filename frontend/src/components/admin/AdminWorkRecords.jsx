'use client';
import React, { useEffect, useState } from 'react';
import { useAdminWorkRecords } from '@/services/queries';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { userInfo } from '@/controllers/userAuth/userAuth';
import { Spinner } from '@nextui-org/react';

const AdminWorkRecords = () => {
  const router = useRouter();
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (typeof sessionStorage !== 'undefined') {
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

      setRole(role);
      router.refresh();
    }
  }, [router]);

  const { data, isLoading, error } = useAdminWorkRecords();

  if (isLoading) {
    return (
      <div className='flex justify-center items-center text-6xl h-full'>
        <Spinner label='Please Wait a Moment' color='warning' />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || !data.workTime) {
    return <div>No work records found.</div>;
  }

  // Sort data by loginTime (most recent first)
  const sortedData = [...data.workTime].sort(
    (a, b) => new Date(b.loginTime) - new Date(a.loginTime)
  );

  return (
    <div className='container mx-auto p-4'>
      <Link href={'/admin/dashboard'} className='mb-8'>
        Back to Dashboard
      </Link>
      <h2 className='text-2xl font-bold mb-4'>Admin Work Records</h2>
      <div className='overflow-x-auto'>
        <table className='min-w-full min-h-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>
                ID
              </th>
              <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Username
              </th>
              <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Checkin Time
              </th>
              <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Checkout Time
              </th>
              <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Total Work Hours
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {sortedData.map((record, index) => (
              <tr key={record.id}>
                <td className='px-6 py-4 whitespace-nowrap text-center'>
                  {index + 1}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-center'>
                  {record.username
                    ? record.username.charAt(0).toUpperCase() +
                      record.username.slice(1)
                    : 'N/A'}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-center'>
                  {record.loginTime ? record.loginTime : 'N/A'}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-center'>
                  {record.logoutTime ? record.logoutTime : 'N/A'}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-center'>
                  {record.totalworkHours
                    ? record.totalworkHours.toFixed(2)
                    : 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminWorkRecords;
