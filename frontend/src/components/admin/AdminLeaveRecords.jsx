"use client";
import React from "react";
import { useAdminLeaveRecords } from "@/services/queries";
import { Tooltip } from "@nextui-org/react";
import axiosInstance from "@/config/axiosConfig";
import Swal from "sweetalert2";
import { EditIcon, DeleteIcon } from "../general/icons";
import Link from "next/link";

const AdminLeaveRecords = () => {
  const { data, isLoading, error } = useAdminLeaveRecords();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Sort data with pending leaves appearing on top
  const sortedData = [...data.formattedLeaveRecords].sort((a, b) => {
    if (a.status === "pending") return -1;
    if (b.status === "pending") return 1;
    return 0;
  });

  //dealing with actions

  const handleRejectLeave = async (id) => {
    try {
      await axiosInstance.patch(`/leave/admin/update/${id}`, {
        leaveStatus: "rejected",
      });

      //alert
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Leave rejected successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleAcceptLeave = async (id) => {
    try {
      const { value: dates } = await Swal.fire({
        title: "Select Leave Dates",
        html:
          '<div class="flex flex-col items-start">' +
          '<label for="swal-input1" class="mb-1 text-left">Start Date:</label>' +
          '<input id="swal-input1" class="swal2-input mb-4" placeholder="Start Date" type="date">' +
          '<label for="swal-input2" class="mb-1 text-left">End Date:</label>' +
          '<input id="swal-input2" class="swal2-input" placeholder="End Date" type="date">' +
          "</div>",
        focusConfirm: false,
        didOpen: () => {
          const today = new Date().toISOString().split("T")[0];
          document.getElementById("swal-input1").min = today;
          document.getElementById("swal-input2").min = today;
        },
        preConfirm: () => {
          const startDate = document.getElementById("swal-input1").value;
          const endDate = document.getElementById("swal-input2").value;

          if (!startDate || !endDate) {
            Swal.showValidationMessage("Both dates are required");
            return null;
          }

          return [startDate, endDate];
        },
      });

      if (dates) {
        const [startDate, endDate] = dates;

        try {
          const response = await axiosInstance.patch(
            `/leave/admin/update/${id}`,
            {
              startDate: `${startDate}`,
              endDate: `${endDate}`,
              leaveStatus: "approved",
            }
          );

          console.log("Response:", response);

          Swal.fire({
            icon: "success",
            title: "Leave accepted.",
            timer: 1500,
          });
          return;
        } catch (error) {
          console.error("Error response:", error.response);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to update leave status.",
          });
        }
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to update leave status. Please try again.",
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Link href={"/admin/dashboard"} className="mb-8">
        Back to Dashboard
      </Link>
      <h2 className="text-2xl font-bold mb-4">Admin Leave Records</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full min-h-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Start Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                End Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Days
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedData.map((record, index) => (
              <tr
                key={record.id}
                className={
                  record.status === "rejected"
                    ? "bg-red-100"
                    : record.status === "approved"
                    ? "bg-green-100"
                    : ""
                }
              >
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {record.userName
                    ? record.userName.charAt(0).toUpperCase() +
                      record.userName.slice(1)
                    : "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {record.startDate ? record.startDate : "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {record.endDate ? record.endDate : "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {record.totalDays ? record.totalDays : "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-800">
                  <span
                    className={
                      record.status === "pending"
                        ? "bg-yellow-300 px-2 py-1 rounded-full"
                        : record.status === "rejected"
                        ? "bg-red-300 px-2 py-1 rounded-full"
                        : "bg-green-300 px-2 py-1 rounded-full"
                    }
                  >
                    {record.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {record.status === "pending" ? (
                    <div className="relative flex items-center gap-2">
                      <button onClick={() => handleAcceptLeave(record.id)}>
                        <Tooltip content="Approve">
                          <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                            <EditIcon />
                          </span>
                        </Tooltip>
                      </button>
                      <button onClick={() => handleRejectLeave(record.id)}>
                        <Tooltip color="danger" content="Reject">
                          <span className="text-lg text-danger cursor-pointer active:opacity-50">
                            <DeleteIcon />
                          </span>
                        </Tooltip>
                      </button>
                    </div>
                  ) : (
                    "None"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminLeaveRecords;
