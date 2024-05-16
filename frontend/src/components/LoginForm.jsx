"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import img from "../../public/krakenimages-376KN_ISplE-unsplash.jpg";
import Image from "next/image";
import Swal from "sweetalert2";
import axiosInstance from "../config/axiosConfig";

function LoginForm() {
  const [userDetails, setuserDetails] = useState({
    userName: "",
    userPassword: "",
  });
  const [error, seterror] = useState("");

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setuserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));

    e.preventDefault();
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { userName, userPassword } = userDetails;

    if (!userName || !userPassword) {
      seterror("All fields are necessary");
      return null;
    }

    try {
      const res = await axiosInstance.post("/auth/user/login", userDetails);

      //set token
      localStorage.setItem("token", res.data.token);

      //redirect to home
      router.push("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Unable to authenticate user.",
        showConfirmButton: false,
        timer: 2000,
        position: "top",
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-24">
      {/* image */}
      <div>
        <Image
          src={img}
          alt="/"
          className="rounded max-w-72 md:max-w-96 lg:max-w-lg  xl:max-w-2xl lg:pl-8 lg:border-none dark:border-neutral-700 dark:bg-neutral-800"
        />
      </div>
      <div className="md:p-4 xl:pl-12">
        <div className="rounded-lg shadow-lg animate-pulse"></div>
        <div
          id="form-container"
          className="mt-6 rounded-lg transform transition duration-500 ease-in-out
          "
        >
          <h2
            id="form-title"
            className="text-center underline font-quicksand text-xl xl:text-4xl tracking-wider font-semibold text-white lg:text-3xl"
          >
            Login
          </h2>
          <form
            className="md:p-4 py-6 flex flex-col justify-center items-center"
            onSubmit={handleLogin}
          >
            <input
              className="w-64 md:w-72 lg:w-80 mb-4 h-10 px-3 xl:w-96 xl:h-12 xl:mb-6 rounded-lg"
              placeholder="User name"
              name="userName"
              type="text"
              onChange={handleChange}
            />
            <input
              className="w-64 md:w-72 lg:w-80 mb-4 h-10 px-3 xl:w-96 xl:h-12 xl:mb-6 rounded-lg"
              placeholder="Password"
              name="userPassword"
              onChange={handleChange}
              type="password"
            />

            <button
              type="submit"
              className="w-64 md:w-72 lg:w-80 h-10 xl:w-96 rounded-lg bg-purple-500 hover:bg-white hover:text-purple-500 text-white font-bold py-2 px-4 xl:h-12 xl:mb-6 focus:outline-none"
            >
              Sign in
            </button>
            {error && <p className="text-red-800 text-xs text-left">{error}</p>}
            <Link
              className="text-white mt-4 font-quicksand hover:text-purple-500 text-sm xl:text-lg"
              href="#"
            >
              Forgot Password?
            </Link>

            {/* Create account if not yet registered */}
            <div className="md:mt-0">
              <p className="font-quicksand text-gray-950 xl:text-lg">
                No account?{" "}
                <Link
                  className="text-white md:mt-1 font-quicksand hover:text-purple-500 text-sm xl:text-lg"
                  href="/register"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default LoginForm;
