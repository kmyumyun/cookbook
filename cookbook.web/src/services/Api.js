import axios from "axios";
import db from "../resources/db.config.json"

const instance = axios.create({
  baseURL: db.apiURL,
  headers: { "Content-Type": "application/json" }
});

// Add token to every request
instance.interceptors.request.use(config => {
  // header -> Authorization (Basic/Kinvey)
  config.headers.Authorization = "Bearer " + localStorage.getItem("token");

  return config;
});

export default instance;
