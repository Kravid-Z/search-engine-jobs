import {
  FETCH_USER_SEARCH,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./actionTypes";

export const fetchUserSearch = async (dispatch, getState, {POSITION, LOCATION}) => {
  try {
    dispatch({ type: FETCH_USER_SEARCH });
    let resp = await fetch(
      `https://striveschool-api.herokuapp.com/api/jobs?description=${POSITION}&location=${LOCATION}`
    );
    let results = await resp.json();
    if (resp.ok) {
      dispatch({ type: FETCH_USER_SUCCESS, payload: results });
    } else {
      window.alert("something went wrong");
    }
  } catch (error) {
    dispatch({ type: FETCH_USER_FAILURE, payload: error });
  }
};
