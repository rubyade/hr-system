"use client";
import React from "react";
import { useAdminWorkRecords } from "@/services/queries";
import Link from "next/link";

const AdminWorkRecords = () => {
  const { data, isLoading, error } = useAdminWorkRecords();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Sort data by loginTime (most recent first)
  const sortedData = [...data.workTime].sort(
    (a, b) => new Date(b.loginTime) - new Date(a.loginTime)
  );

  return (
    <div className="container mx-auto p-4">
      <Link href={"/admin/dashboard"} className="mb-8">
        Back to Dashboard
      </Link>
      <h2 className="text-2xl font-bold mb-4">Admin Work Records</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full min-h-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Username
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Checkin Time
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Checkout Time
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Work Hours
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedData.map((record, index) => (
              <tr key={record.id}>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  {record.username
                    ? record.username.charAt(0).toUpperCase() +
                      record.username.slice(1)
                    : "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  {record.loginTime ? record.loginTime : "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  {record.logoutTime ? record.logoutTime : "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  {record.totalworkHours
                    ? record.totalworkHours.toFixed(2)
                    : "N/A"}
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
