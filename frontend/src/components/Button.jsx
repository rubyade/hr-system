"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Button(props) {
  const label = props.label;
  const action = props.action;
  const router = useRouter();

  const handleLogout = () => {
    if (action === "logout") {
      localStorage.removeItem("token");

      router.refresh();
      router.push("/");
    }
  };

  return (
    <div>
      <button
        onClick={action && handleLogout}
        className="bg-white hover:bg-purple-500 hover:text-white text-purple-500 outline-purple-500 rounded text-xs py-1 px-8"
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
