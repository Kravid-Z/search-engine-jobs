import {
  FETCH_USER_SEARCH,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "../actionTypes.js";

const initialState = {
  loading: false,
  results: [],
  error: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SEARCH: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        results: action.payload,
        error: "",
      };
    }
    case FETCH_USER_FAILURE: {
      return {
        ...state,
        loading: false,
        results: [],
        error: action.payload,
      };
    }
    default:
      return state;
  }
}

export default searchReducer