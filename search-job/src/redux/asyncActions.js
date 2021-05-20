import {
  FETCH_USER_SEARCH,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./actionTypes";

export const fetchUserSearch =  (location, positition) => {
  return async (dispatch, getState) =>{try {
    // dispatch({ type: FETCH_USER_SEARCH });
    let resp = await fetch(
      `https://striveschool-api.herokuapp.com/api/jobs?description=${location}&location=${positition}`
    );
    let results = await resp.json();
    console.log(results)
    if (resp.ok) {
      dispatch({ type: FETCH_USER_SUCCESS, payload: results });
    } else {
      window.alert("something went wrong");
    }
  } catch (error) {
    dispatch({ type: FETCH_USER_FAILURE, payload: error });
  }}
};
