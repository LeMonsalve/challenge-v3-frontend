import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL as string;

export const api = axios.create({
  baseURL: `${baseURL}/api`,
});
