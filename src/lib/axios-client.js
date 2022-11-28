import axios from "axios";

export const server = axios.create({
  baseURL: "https://priyo-boi-server.vercel.app",
  timeout: 15000,
  headers: { authorization: "Bearer " + localStorage.getItem("token") || "" },
});
