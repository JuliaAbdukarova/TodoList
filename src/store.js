import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";

import thunk from "redux-thunk";

import { itemReducer, loadingReducer } from "./reducers";

const reducer = combineReducers({
  items: itemReducer,
  loading: loadingReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//console.log("INIT OF STORE HERE");

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
