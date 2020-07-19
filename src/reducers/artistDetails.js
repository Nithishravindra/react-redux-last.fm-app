import { FETCH_ARTIST_DETAIL } from "../constants/ActionTypes";

export function artistDetails(state = [], action) {
  console.log("reducer ", action);
  switch (action.type) {
    case FETCH_ARTIST_DETAIL:
      return {
        ...action.artistDetails.artist,
        // artistDetails: action.artist,
      };

    default:
      return state;
  }
}
