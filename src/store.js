import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootreducer from "./reducers/rootReducer";
import artist from "./data/artist";
import song from "./data/song";

const defaultState = {
  artist,
  song,
};

console.log("store", defaultState);

const store = createStore(rootreducer, defaultState);

export default store;
