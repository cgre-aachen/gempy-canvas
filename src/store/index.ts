import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
// import { logger } from "redux-logger";

// redux-reducers
import { pointsReducer } from "./points/reducers";
import { counterReducer } from "./counter/reducers";
import { gpmodConfigReducers } from "./gpmodConfig/reducers";

// middleware
import rootSaga from "../sagas";

// combine reducers
const rootReducer = combineReducers({
  points: pointsReducer,
  counter: counterReducer,
  gpmodConfig: gpmodConfigReducers
});

// export type of RootState
export type RootState = ReturnType<typeof rootReducer>;

// create middelwares
const sagaMiddleware = createSagaMiddleware();

// configure and create store
export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
  // applyMiddleware(sagaMiddleware logger)
);

// start saga
sagaMiddleware.run(rootSaga);
