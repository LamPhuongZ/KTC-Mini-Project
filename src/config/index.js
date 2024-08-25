import axios from "axios";

const instance = axios.create({
  baseURL: " https://apparently-uncommon-gopher.ngrok-free.app",
  headers: {
    "ngrok-skip-browser-warning": "69420",
  },
});

// Cấu hình headers trước khi gửi lên server:
instance.interceptors.request.use((config) => {
  const isLogin = localStorage.getItem("token") ? true : false;
  config.headers.Authorization = isLogin
    ? `Bearer ${localStorage.getItem("token")}`
    : "";
  return config;
});

export default instance;
