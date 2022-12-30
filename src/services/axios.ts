import authHandler from "../utils/auth-handler";
import axios from "axios";

const { getJwt } = authHandler();

console.log(process.env.REACT_APP_BASE_URL);

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    authorization: getJwt() ?? "",
  },
});

export default axiosInstance;
