'use client';

import React from 'react';
import { useGlobalContext } from './context';
import Sidebar from './Sidebar';
import AdminHome from './AdminHome';

function AdminDashboard() {
  return (
    <div>
      <Sidebar />
      <AdminHome />
    </div>
  );
}

export default AdminDashboard;
