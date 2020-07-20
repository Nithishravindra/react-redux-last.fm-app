import { combineReducers } from "redux";

import { topArtist } from "./topArtist";
import { artistDetails } from "./artistDetails";
import { inputValue } from "./input";

const rootReducer = combineReducers({
  topArtist,
  artistDetails,
  inputValue,
});

export default rootReducer;
