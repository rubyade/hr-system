'use client';

import AdminHome from '../AdminHome';
import { userInfo } from '@/controllers/userAuth/userAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import UserHome from '../users/UserHome';

function AdminDashboard() {
  // const router = useRouter();

  // useEffect(() => {
  //   if (typeof localStorage !== "undefined") {
  //     const token = localStorage.getItem("token");

  //     if (!token) {
  //       router.push("/login");
  //       return;
  //     }

  //     const { role } = userInfo();

  //     if (!role) {
  //       router.push("/login");
  //       return;
  //     }

  //     if (role !== "admin") {
  //       router.push("/");
  //       return;
  //     }

  //     router.refresh();
  //   }
  // }, [router]);

  return (
    <div>
      {/* <Sidebar /> */}
      <UserHome />
    </div>
  );
}

export default AdminDashboard;
