import axios from "axios";

const api = axios.create({
  baseURL: "https://admin.boostmybusiness.ai/react",
  withCredentials: true, // 🔥 SEND SESSION COOKIE
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
