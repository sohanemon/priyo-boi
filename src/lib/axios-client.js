import axios from "axios";

export const server = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 5000,
  headers: { authorization: "Bearer" },
});
