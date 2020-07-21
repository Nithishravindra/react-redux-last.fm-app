import { combineReducers } from "redux";

import { topArtist } from "./topArtist";
import { artistDetails } from "./artistDetails";
import { inputValue } from "./input";
import { isLoading } from "./isLoading";
import { hasErrored } from "./hasErrored";

const rootReducer = combineReducers({
  topArtist,
  artistDetails,
  inputValue,
  isLoading,
  hasErrored,
});

export default rootReducer;
