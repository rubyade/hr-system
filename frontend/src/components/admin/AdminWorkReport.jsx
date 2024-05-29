'use client';
import React, { useEffect } from 'react';
import { useAdminWorkReport } from '@/services/queries';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { userInfo } from '@/controllers/userAuth/userAuth';
import { Spinner } from '@nextui-org/react';

const AdminWorkReport = () => {
  const router = useRouter();
  useEffect(() => {
    if (typeof sessionStorage !== null) {
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
    }
  }, [router]);

  const { data, isLoading, error } = useAdminWorkReport();

  if (isLoading) {
    return (
      <div className='flex justify-center items-center text-6xl h-screen'>
        <Spinner label='Loading...' color='warning' />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || !data.attendanceData) {
    return <div>No leave records found.</div>;
  }

  // Convert the attendance data to an array for easier mapping
  const attendanceData = Object.entries(data.attendanceData);

  return (
    <div className='container mx-auto p-4'>
      <Link href={'/admin/dashboard'} className='mb-8'>
        Back to Dashboard
      </Link>
      <h2 className='text-2xl font-bold mb-4'>Work Summary</h2>
      <div className='overflow-x-auto'>
        <table className='min-w-full min-h-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Id
              </th>
              <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Username
              </th>
              <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Total Work Hours
              </th>
              <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Late Arrivals
              </th>
              <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Early Departures
              </th>
              <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Total Work Records
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {attendanceData.map(([username, record], index) => (
              <tr key={index}>
                <td className='px-6 py-4 whitespace-nowrap text-center'>
                  {index + 1}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-center'>
                  {username.charAt(0).toUpperCase() + username.slice(1)}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-center'>
                  {record.totalWorkHours && record.totalWorkHours.toFixed(2)}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-center'>
                  {record.lateArrivals}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-center'>
                  {record.earlyDepartures}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-center'>
                  {record.totalRecords}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminWorkReport;
