"use client";
import Sidebar from "./Sidebar";
import AdminHome from "./AdminHome";
import { userInfo } from "@/controllers/userAuth/userAuth";
import { useRouter } from "next/navigation";
function AdminDashboard() {
  const router = useRouter();
  if (typeof localStorage !== "undefined") {
    const { role } = userInfo();

    if (!role) {
      router.push("/login");
    }

    if (role !== "admin") {
      router.push("/");
    }
  }
  return (
    <div >
      <Sidebar />
      <AdminHome />
    </div>
  );
}

export default AdminDashboard;
