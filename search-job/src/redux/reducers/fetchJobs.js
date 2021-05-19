import {
  FETCH_USER_SEARCH,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "../actionTypes.js";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export default function (state = initialState, action) {
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
        data: action.payload,
        error: "",
      };
    }
    case FETCH_USER_FAILURE: {
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    }
    default:
      return state;
  }
}
