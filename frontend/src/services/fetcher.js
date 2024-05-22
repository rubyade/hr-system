import axiosInstance from "../config/axiosConfig";

const fetcher = async (url) => {
  // for all data fetching queries
  try {
    const res = await axiosInstance.get(url);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default fetcher;
