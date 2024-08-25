import axios from "axios";

const instance = axios.create({
  baseURL: "https://apparently-uncommon-gopher.ngrok-free.app",
  headers: {
    "ngrok-skip-browser-warning": "69420",
  },
});

export default instance;
