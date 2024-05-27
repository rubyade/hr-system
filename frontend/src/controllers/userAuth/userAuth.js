import jwt from "jsonwebtoken";

export const userInfo = () => {
  if (typeof sessionStorage !== "undefined") {
    const token = sessionStorage.getItem("token");
    if (!token) {
      return;
    }

    const decodeToken = jwt.decode(token);
    return decodeToken;
  } else {
    alert("No token");
    return;
  }
};
