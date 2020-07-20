import { INPUT_CHANGE } from "../constants/ActionTypes";

export function input(state = [], action) {
  switch (action.type) {
    case INPUT_CHANGE: {
      return {
        ...state,
        input: action.text,
      };
    }

    default:
      return state;
  }
}
