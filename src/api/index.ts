// src/api/index.ts
/* axios configuration */

import axios from "axios";

export const API = axios.create({
  baseURL: "http://127.0.0.1:5000",
  responseType: "json"
});

export function getSanityCheck() {
  axios
    .get("http://127.0.0.1:5000/gpmodel/data/ping")
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}
