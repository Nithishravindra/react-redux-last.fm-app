import { combineReducers } from "redux";

import { topArtist } from "./topArtist";
import artistDetails from "./artistDetails";

const rootReducer = combineReducers({
  topArtist,
  artistDetails,
});

export default rootReducer;
