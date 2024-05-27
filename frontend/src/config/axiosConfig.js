import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

//default headers
if (typeof window !== "undefined") {
  instance.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${sessionStorage.getItem("token")}`;
}

export default instance;
