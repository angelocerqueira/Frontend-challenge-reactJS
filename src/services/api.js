import axios from "axios";

const api = axios.create({

  baseURL: "http://api.angel-prototypes.online:3333",
});

export default api;
