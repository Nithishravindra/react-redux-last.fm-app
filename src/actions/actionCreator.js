import * as types from "../constants/ActionTypes";

export function fetchIsLoading(bool) {
  return {
    type: types.FETCH_IS_LOADING,
    isLoading: bool,
  };
}

export function fetchData(url) {
  return (dispatch) => {
    dispatch(fetchIsLoading(true));
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(fetchIsLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((item) => {
        return dispatch(fetchDataSuccess(item));
      })
      .catch(() => dispatch(fetchDataErrored(true)));
  };
}

export function fetchDataSuccess(item) {
  console.log(item);
  return {
    type: types.FETCH_DATA_SUCCESS,
    topArtist: item,
  };
}

export function fetchDataErrored(bool) {
  return {
    type: types.FETCH_HAS_ERRORED,
    hasErrored: bool,
  };
}
