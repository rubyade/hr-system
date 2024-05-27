
import dynamic from "next/dynamic";

const AdminDashboard = dynamic(
  () => import("../../../components/admin/AdminDashboard"),
  {
    ssr: false,
  }
);
export default function Dashboard() {
  return (
    <main>
      <AdminDashboard />
    </main>
  );
}
