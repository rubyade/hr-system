"use client";
import Sidebar from "./Sidebar";
import AdminHome from "./AdminHome";
import { userInfo } from "@/controllers/userAuth/userAuth";
import { useRouter } from "next/navigation";
function AdminDashboard() {
  const router = useRouter();
  router.refresh();
  if (typeof localStorage !== "undefined") {
    const { role } = userInfo();

    if (!role) {
      router.push("/login");
      return;
    }

    if (role !== "admin") {
      router.push("/");
      return;
    }
  }

  return (
    <div>
      <Sidebar />
      <AdminHome />
    </div>
  );
}

export default AdminDashboard;
