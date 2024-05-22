import jwt from "jsonwebtoken";

export const userInfo = () => {
  if (typeof localStorage !== "undefined") {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("No authentication token");
      return;
    }

    const decodeToken = jwt.decode(token);
    return decodeToken;
  } else {
    alert("No token");
    return;
  }
};
