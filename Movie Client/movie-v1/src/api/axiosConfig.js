import axios from "axios";

export default axios.create({
  baseURL: "https://f0f6-45-49-77-19.ngrok-free.app/",
  headers: { "ngrok-skip-browser-warning": "true" },
});
