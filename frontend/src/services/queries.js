import useSWR from "swr";

export function useUsers() {
  const token = localStorage.getItem("token");
  if (!token) return null;

  return useSWR("/users");
}

export function useAdminLeaveRecords() {
  return useSWR("/leave/admin/records");
}

