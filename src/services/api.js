import axios from "axios";

const api = axios.create({
  baseURL: "http://18.225.6.243:3333",
});

export default api;
