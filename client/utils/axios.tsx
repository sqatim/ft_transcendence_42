import axios from "axios";

let tokenUrl = null;
if(typeof window !== 'undefined')
    tokenUrl = localStorage.getItem("tokenURL");

const api = axios.create({
  headers: { Authorization: `Bearer ${tokenUrl}` },
});

export default api;
