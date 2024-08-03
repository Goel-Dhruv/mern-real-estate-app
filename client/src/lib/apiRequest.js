import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://homequest-wsqo.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;
