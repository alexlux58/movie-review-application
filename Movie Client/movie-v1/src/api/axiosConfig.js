import axios from "axios";

export default axios.create({
  baseURL: "https://b498-45-49-77-19.ngrok-free.app/",
  headers: { "ngrok-skip-browser-warning": "true" },
});
