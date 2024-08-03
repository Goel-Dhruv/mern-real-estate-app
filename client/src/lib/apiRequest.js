import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://homequestbackend.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;
