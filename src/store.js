import { createStore } from "redux";
// import thunk from "redux-thunk";
import rootreducer from "./reducers/rootReducer";
import topArtists from "./data/topArtist";
import artistDetails from "./data/artistDetails";

const defaultState = {
  topArtists,
  artistDetails,
};

console.log("deafult store = ", defaultState);

const store = createStore(rootreducer, defaultState);

export default store;
