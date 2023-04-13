// redirect all requests to this server https://jsonplaceholder.typicode.com/

import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  console.log("Request was sent with this config.", config);
  return config;
});

api.interceptors.response.use((response) => {
  console.log("Response was received with this response", response);
  return response;
});

export default api;
