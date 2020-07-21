import { FETCH_DATA_SUCCESS } from "../constants/ActionTypes";

export function topArtist(state = [], action) {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...action.topArtist,
        artists: action.topArtist.artists.artist,
      };

    default:
      return state;
  }
}
