import { FETCH_DATA_SUCCESS } from "../constants/ActionTypes";

export function topArtist(state = [], action) {
  console.log("reducer ", action);
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...action.topArtist,
        artist: action.topArtist.artists.artist,
      };

    default:
      return state;
  }
}
