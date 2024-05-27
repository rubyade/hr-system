import useSWR from "swr";

export function useUsers() {
  const token = localStorage.getItem("token");
  if (!token) return null;

  return useSWR("/users");
}

export function useAdminLeaveRecords() {
  return useSWR("/leave/admin/records");
}

export function useAdminWorkRecords() {
  return useSWR("/admin/worktime");
}

export function useAdminWorkReport() {
  return useSWR("/admin/worktime/report");
}

export function useUserLeaveRecords() {
  return useSWR("/leave/records");
}
