import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

//default headers
instance.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`;

export default instance;
