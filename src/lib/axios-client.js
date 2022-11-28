import axios from "axios";

export const server = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 15000,
  headers: { authorization: "Bearer " + localStorage.getItem("token") || "" },
});
