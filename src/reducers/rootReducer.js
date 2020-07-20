import { combineReducers } from "redux";

import { topArtist } from "./topArtist";
import { artistDetails } from "./artistDetails";
import { input } from "./input";

const rootReducer = combineReducers({
  topArtist,
  artistDetails,
  input,
});

export default rootReducer;
