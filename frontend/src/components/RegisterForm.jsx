"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

function RegisterForm() {
  const [userDetails, setuserDetails] = useState({
    userName: "",
    email: "",
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
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { userName, email, userPassword } = userDetails;

    //all fields are required
    if (!userName || !email || !userPassword) {
      seterror("All fields are necessary");
      return;
    }

    try {
      const user = { username: userName, email: email, password: userPassword };

      const res = await fetch("api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log(res.status);

      //Resetting the form if all is well
      const form = e.target;
      if (res.status === 500 || 404) {
        form.reset();
        // send alert
        Swal.fire({
          icon: "error",
          title: "Failed to register",
          showConfirmButton: false,
          timer: 2000,
          position: "top",
        });
        console.log("unable to register user");
      } else {
        form.reset();

        //send alert
        Swal.fire({
          icon: "success",
          title: "Successfully registered",
          showConfirmButton: false,
          timer: 2000,
          position: "top",
        });

        router.push("/login");
      }
    } catch (error) {
      console.log("An error occured registering user");
    }
  };

  return (
    <div className="page">
      <div className="flex items-center justify-center bg-gradient-to-r from-blue-400 via-pink-500 to-blue-800">
        <div className="relative">
          <div className="absolute -top-1 -left-1 -right-1 -bottom-1 rounded-lg bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 shadow-lg animate-pulse"></div>
          <div
            id="form-container"
            className="bg-white p-8 md:p-10 rounded-lg shadow-2xl w-80 relative transform transition duration-500 ease-in-out"
          >
            <h2
              id="form-title"
              className="text-center text-3xl font-bold mb-10 text-gray-800"
            >
              Register
            </h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                className="w-full h-12 border border-gray-800 px-3 rounded-lg"
                placeholder="Username"
                id=""
                name="userName"
                type="text"
                onChange={handleChange}
              />
              <input
                className="w-full h-12 border border-gray-800 px-3 rounded-lg"
                placeholder="Email"
                onChange={handleChange}
                id=""
                name="email"
                type="text"
              />
              <input
                className="w-full h-12 border border-gray-800 px-3 rounded-lg"
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
                className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Register
              </button>{" "}
              {/* Login if already registered */}
              <p>
                Already registered:{" "}
                <Link
                  className="text-blue-500 hover:text-blue-800 text-sm"
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
