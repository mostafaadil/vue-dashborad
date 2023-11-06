import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3030/api/",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
