import jwt from "jsonwebtoken";

export const userInfo = () => {
  if (typeof localStorage !== 'undefined') {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found in localStorage");
    }

    const decodeToken = jwt.decode(token);
    return decodeToken;
  } else {
    throw new Error("localStorage is not available");
  }
};
