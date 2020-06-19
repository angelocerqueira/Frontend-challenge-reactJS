import axios from "axios";

const api = axios.create({
  baseURL: "http://3.128.49.225:3333"
});

export default api;
