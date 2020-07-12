import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import artist from "./artist";
import songs from "./songs";

const rootReducer = combineReducers({
  artist,
  songs,
  routing: routerReducer,
});

export default rootReducer;
