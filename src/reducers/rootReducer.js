import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import topArtists from "./topArtist";
import artistDetails from "./artistDetails";

const rootReducer = combineReducers({
  topArtists,
  artistDetails,
  routing: routerReducer,
});

export default rootReducer;
