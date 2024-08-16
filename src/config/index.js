import axios from "axios";

const instance = axios.create({
  baseURL: "https://absolute-pangolin-key.ngrok-free.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
