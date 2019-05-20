import axios from "axios";
import md5 from "md5";

let ts = Number(new Date());
let codg = md5(
  ts + process.env.REACT_APP_API_KEY_PRIVATE + process.env.REACT_APP_API_KEY
);

const api = axios.create({
  baseURL: "http://gateway.marvel.com",
  params: { apikey: process.env.REACT_APP_API_KEY, ts: ts, hash: codg }
});

export default api;
