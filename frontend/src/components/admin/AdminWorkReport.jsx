"use client";
import React from "react";
import { useAdminWorkReport } from "@/services/queries";
import Link from "next/link";

const AdminWorkReport = () => {
  const { data, isLoading, error } = useAdminWorkReport();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Convert the attendance data to an array for easier mapping
  const attendanceData = Object.entries(data.attendanceData);

  console.log(attendanceData);

  return (
    <div className="container mx-auto p-4">
      <Link href={"/admin/dashboard"} className="mb-8">
        Back to Dashboard
      </Link>
      <h2 className="text-2xl font-bold mb-4">Work Summary</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full min-h-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Id
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Username
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Work Hours
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Late Arrivals
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Early Departures
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Work Records
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {attendanceData.map(([username, record], index) => (
              <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                  {index +1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  {username.charAt(0).toUpperCase() + username.slice(1)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  {record.totalWorkHours && record.totalWorkHours.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  {record.lateArrivals}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  {record.earlyDepartures}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
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
