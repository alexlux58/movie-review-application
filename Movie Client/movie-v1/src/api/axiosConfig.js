import axios from "axios";

export default axios.create({
  baseURL: "https://4d38-45-49-77-19.ngrok-free.app/",
  headers: { "ngrok-skip-browser-warning": "true" },
});
