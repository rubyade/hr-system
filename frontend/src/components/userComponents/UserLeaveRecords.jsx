'use client';
import React from 'react';
import { useUserLeaveRecords } from '@/services/queries';
import { Tooltip } from '@nextui-org/react';
import { DeleteIcon } from '../general/icons';
import axiosInstance from '@/config/axiosConfig';
import Swal from 'sweetalert2';

const UserLeaveRecords = () => {
  const { data, isLoading, error } = useUserLeaveRecords();

  if (isLoading) {
    return (
      <div className='min-h-full flex justify-center items-center text-center'>
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className='min-h-full flex justify-center items-center text-center'>
        Error: {error.message}
      </div>
    );
  }

  const handleLeaveRequest = async () => {
    try {
      const confirmed = confirm(
        'Are you sure you want to make a leave request?'
      );
      if (confirmed) {
        await axiosInstance.post(`/leave/request`);
        Swal.fire({
          icon: 'success',
          title: 'Leave request successfully completed.',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Delete request
  const handleDeleteLeaveRequest = async (id) => {
    try {
      const confirmed = confirm(
        'Are you sure you want to delete this request?'
      );
      if (confirmed) {
        await axiosInstance.delete(`/leave/request/${id}`);
        Swal.fire({
          icon: 'success',
          title: 'Leave request deleted successfully',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!data || data.userLeaveRecords.length === 0) {
    return (
      <div className='flex  w-full flex-col gap-8 items-center justify-center h-[100vh]'>
        <p>No previous leave records</p>
        <button
          onClick={handleLeaveRequest}
          className='bg-white rounded-lg py-1 px-2 shadow-md text-purple-500 hover:bg-purple-500 hover:text-white'
        >
          Request Leave
        </button>
      </div>
    );
  }

  const sortedData = [...data.userLeaveRecords].sort((a, b) => {
    if (a.status === 'pending') return -1;
    if (b.status === 'pending') return 1;
    return 0;
  });

  // Request leave

  return (
    <div className='container mx-auto p-4'>
      <div className='flex justify-between mb-4 items-center'>
        <h2 className='text-2xl font-bold'>User Leave Records</h2>
        <button
          onClick={handleLeaveRequest}
          className='bg-white rounded-lg py-1 px-2 shadow-md text-purple-500 hover:bg-purple-500 hover:text-white'
        >
          Request Leave
        </button>
      </div>
      {sortedData.length > 0 && (
        <div className='overflow-x-auto'>
          <table className='min-w-full min-h-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  ID
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Start Date
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  End Date
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Total Days
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
              {sortedData.map((record, index) => (
                <tr
                  key={record.id}
                  className={
                    record.status === 'rejected'
                      ? 'bg-red-100'
                      : record.status === 'approved'
                      ? 'bg-green-100'
                      : ''
                  }
                >
                  <td className='px-6 py-4 whitespace-nowrap'>{index + 1}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {record.startDate || 'N/A'}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {record.endDate || 'N/A'}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {record.totalDays || 'N/A'}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-gray-800'>
                    <span
                      className={
                        record.status === 'pending'
                          ? 'bg-yellow-300 px-2 py-1 rounded-full'
                          : record.status === 'rejected'
                          ? 'bg-red-300 px-2 py-1 rounded-full'
                          : 'bg-green-300 px-2 py-1 rounded-full'
                      }
                    >
                      {record.status}
                    </span>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {record.status === 'pending' ? (
                      <div className='relative flex items-center gap-2'>
                        <button
                          onClick={() => handleDeleteLeaveRequest(record.id)}
                        >
                          <Tooltip color='danger' content='Delete Request'>
                            <span className='text-lg text-danger cursor-pointer active:opacity-50'>
                              <DeleteIcon />
                            </span>
                          </Tooltip>
                        </button>
                      </div>
                    ) : (
                      'None'
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserLeaveRecords;
