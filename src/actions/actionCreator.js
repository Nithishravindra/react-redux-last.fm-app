import * as types from "../constants/ActionTypes";

export function fetchIsLoading(bool) {
  return {
    type: types.FETCH_IS_LOADING,
    isLoading: bool,
  };
}

export function fetchData(url, type) {
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
        return dispatch(fetchDataSuccess(item, type));
      })
      .catch((err) => {
        console.log("err", err);
        return dispatch(fetchDataErrored(true));
      });
  };
}

export function fetchDataSuccess(item, type) {
  console.log(item);
  if (type === "topArtist") {
    return {
      type: types.FETCH_DATA_SUCCESS,
      topArtist: item,
    };
  } else {
    return {
      type: types.FETCH_ARTIST_DETAIL,
      artistDetails: item,
    };
  }
}

export function fetchDataErrored(bool) {
  return {
    type: types.FETCH_HAS_ERRORED,
    hasErrored: bool,
  };
}

export function handleinput(e) {
  console.log("inputchange - actionCreator");
  return {
    type: types.INPUT_CHANGE,
    text: e.target.value,
  };
}
