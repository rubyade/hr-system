"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Button(props) {
  const { label, action } = props;
  const router = useRouter();

  const handleLogout = () => {
    if (action === "logout") {
      localStorage.removeItem("token");
      window.location.reload();
      router.push("/");
    }
  };

  return (
    <div>
      <button
        onClick={handleLogout}
        className="bg-white hover:bg-purple-500 hover:text-white text-purple-500 outline-purple-500 rounded text-xs py-1 px-8"
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
