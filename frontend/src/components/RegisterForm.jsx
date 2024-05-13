"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Image from "next/image";
import registerimg from "../../public/campaign-creators-gMsnXqILjp4-unsplash.jpg";
import axiosInstance from "../config/axiosConfig";

function RegisterForm() {
  const [userDetails, setuserDetails] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });

  const [error, seterror] = useState("");

  const router = useRouter();
  // console.log(userDetails);

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setuserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  //registering new user
  const handleRegister = async (e) => {
    e.preventDefault();

    const { userName, userEmail, userPassword } = userDetails;

    //all fields are required
    if (!userName || !userEmail || !userPassword) {
      seterror("All fields are necessary");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        seterror("Not authenticated, please login");
        return;
      }

      await axiosInstance.post("/create/user", userDetails, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      //send alert
      Swal.fire({
        icon: "success",
        title: "Successfully registered",
        showConfirmButton: false,
        timer: 2000,
        position: "top",
      });

      router.push("/dashboard");

      //send error
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Unable to register user",
        showConfirmButton: false,
        timer: 2000,
        position: "top",
      });
    }
  };

  return (
    <div className="absolute">
      <div className="flex flex-col md:flex-row items-center justify-between mt-12">
        {/* image */}
        <div>
          <Image
            src={registerimg}
            alt="/"
            className="rounded max-w-72 md:max-w-96 lg:max-w-lg  xl:max-w-2xl lg:pl-8 lg:border-none dark:border-neutral-700 dark:bg-neutral-800"
          />
        </div>
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
              Register
            </h2>
            <form
              className="md:p-4 py-6 flex flex-col justify-center items-center"
              onSubmit={handleRegister}
            >
              <input
                className="w-64 md:w-72 lg:w-80 mb-4 h-10 px-3 xl:w-96 xl:h-12 xl:mb-6 rounded-lg"
                placeholder="Username"
                id=""
                name="userName"
                type="text"
                onChange={handleChange}
              />
              <input
                className="w-64 md:w-72 lg:w-80 mb-4 h-10 px-3 xl:w-96 xl:h-12 xl:mb-6 rounded-lg"
                placeholder="Email"
                onChange={handleChange}
                id=""
                name="userEmail"
                type="text"
              />
              <input
                className="w-64 md:w-72 lg:w-80 mb-4 h-10 px-3 xl:w-96 xl:h-12 xl:mb-6 rounded-lg"
                placeholder="Password"
                onChange={handleChange}
                id=""
                name="userPassword"
                type="password"
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
                Register
              </button>{" "}
              {/* Login if already registered */}
              <p className="font-quicksand text-sm xl:text-lg mt-4 text-white ">
                Already registered?{" "}
                <Link
                  className="hover:text-blue-800 xl:text-lg text-sm text-white font-quicksand"
                  href={"/login"}
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RegisterForm;
