import dynamic from "next/dynamic";

const AllUsersRecords = dynamic(
  () => import("../../../components/admin/AllUsers"),
  {
    ssr: false,
  }
);
function Users() {
  return <AllUsersRecords />;
}
export default Users;
