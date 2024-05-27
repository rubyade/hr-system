'use client';

import Sidebar from '../Sidebar';
import AdminHome from './AdminHome';

import { userInfo } from '@/controllers/userAuth/userAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function AdminDashboard() {

 
  const router = useRouter();
  useEffect(() => {
    if (typeof sessionStorage !== null) {
      const token = sessionStorage.getItem("token");

      if (!token) {
        router.push("/login");
        return;
      }

      const { role } = userInfo();

      if (!role) {
        router.push("/login");
        return;
      }

      if (role !== "admin") {
        router.push("/");
        return;
      }

      router.refresh();
    }
  }, [router]);


  return (
    <div>
      <Sidebar />
      <AdminHome />
    </div>
  );
}

export default AdminDashboard;
