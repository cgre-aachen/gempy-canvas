// src/sagas/gpmodConfig.ts

import { call, takeEvery, all } from "redux-saga/effects";

import { putSketchboardResolution } from "../api/gpmodConfig";
import {
  GpmodConfigActionTypes,
  UPDATE_WINDOWSIZE
} from "../store/gpmodConfig/types";

/*************************** Subroutines *************************************/

// Saga worker: Takes in an action, makes the API call and if successful
// dispatches an action to the store;
function* putSketchboardResolutionSaga(action: GpmodConfigActionTypes) {
  try {
    yield call(putSketchboardResolution, action.payload);
  } catch (e) {
    console.log(e);
  }
}

/*************************** Watchers ***************************************/

function* watchPutSketchboardResolutionSaga() {
  yield takeEvery(UPDATE_WINDOWSIZE, putSketchboardResolutionSaga);
}

export default function* rootSaga() {
  yield all([watchPutSketchboardResolutionSaga()]);
}
