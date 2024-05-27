import dynamic from "next/dynamic";

const UpdateForm = dynamic(
  () => import("../../../components/userComponents/UpdateForm"),
  {
    ssr: false,
  }
);
function UpdateUser() {
  return <UpdateForm />;
}
export default UpdateUser;
