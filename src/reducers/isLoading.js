import { IS_LOADING } from "../constants/ActionTypes";

export function isLoading(state = false, action) {
  switch (action.type) {
    case IS_LOADING:
      console.log(action.isLoading);
      return action.isLoading;
    default:
      return state;
  }
}
