// src/api/gpmodConfig.ts

/* Api call functions regarding the gempy-model configuration */

import { API } from "./index";
import { SizeInPx } from "../store/gpmodConfig/types";

// PUT new sketchboard resolution;
export const putSketchboardResolution = async (newResolution: SizeInPx) => {
  try {
    const response = await API.put("/gpmodel/config/sketchboard_resolution", {
      newResolution
    });
    console.log("PUT request responded: ", response);
    return response;
  } catch (e) {
    // If failed revoke last action
    console.log("PUT request faild: ", e);
  }
};
