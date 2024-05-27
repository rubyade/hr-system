"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { userInfo } from "@/controllers/userAuth/userAuth";
import axiosInstance from "@/config/axiosConfig";

function UpdateForm() {
  const { username, id } = userInfo();
  const [userDetails, setuserDetails] = useState({
    userName: username,
    userPassword: "",
  });

  const [error, seterror] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setuserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  //update user password
  const handleUpdate = async (e) => {
    e.preventDefault();

    const { userPassword } = userDetails;

    try {
      if (
        typeof window !== null &&
        typeof sessionStorage !== null
      ) {
        const token = sessionStorage.getItem("token");
        if (!token) {
          
          router.push("/login");
          return null;
        }
      }

      await axiosInstance.patch(
        `/update/user/${id}`,
        { userPassword },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      //send alert
      Swal.fire({
        icon: "success",
        title: "Successfully updated your password.",
        timer: 1500,
      });

      router.push("/");

      setTimeout(() => {
        window.location.reload;
      }, 500);

      //send error
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Unable to update user",
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center ">
        <div className="md:p-4 xl:pl-12">
          <div className="rounded-lg shadow-lg animate-pulse"></div>
          <div
            id="form-container"
            className="mt-6 rounded-lg transform transition duration-500 ease-in-out"
          >
            <h2
              id="form-title"
              className="text-center underline xl:text-3xl font-quicksand text-xl tracking-wider font-semibold mb-4 text-white"
            >
              Change Details
            </h2>
            <form
              className="md:p-4 py-6 flex flex-col justify-center items-center"
              onSubmit={handleUpdate}
            >
              <input
                className="w-64 md:w-72  text-center lg:w-80 mb-4 h-10 px-3 xl:w-96 xl:h-12 xl:mb-6 rounded-lg"
                name="userName"
                type="text"
                value={userDetails.userName}
                disabled
              />
              <input
                className="w-64 md:w-72 text-center lg:w-80 mb-4 h-10 px-3 xl:w-96 xl:h-12 xl:mb-6 rounded-lg"
                placeholder="New password"
                onChange={handleChange}
                id=""
                value={userDetails.userPassword}
                name="userPassword"
                type="password"
                required
                minLength={6}
              />
              {/* error message */}
              {error && (
                <div className="text-red-500">All fields are required</div>
              )}
              {/* registerButton */}
              <button
                type="submit"
                className="w-64 md:w-72 lg:w-80 h-10 xl:w-96 rounded-lg bg-purple-500 hover:bg-white hover:text-purple-500 text-white font-bold py-2 px-4 xl:h-12 xl:mb-6 focus:outline-none"
              >
                Update
              </button>{" "}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UpdateForm;
