// src/api/sanity_check.ts
/* api for sanity check calls on server; */

import { API } from "./index";

export const getSanityCheck = async () => {
  console.log("Start request");
  try {
    const response = await API.get("/gpmodel/data/ping");
    console.log(response);
  } catch (e) {
    console.log("Sanity check GET failed:", e);
  }
};
