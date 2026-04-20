import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const getPortfolio = async () => {
  const res = await axios.get(`${API}/api/portfolio`);
  return res.data?.data;
};