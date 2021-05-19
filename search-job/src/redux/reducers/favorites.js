import { ADD_TO_FAVORITES, DELETE_FROM_FAVORITES } from "../actionTypes.js";

const initialState = {
  favorites: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.concat(action.payload),
      };
    case DELETE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((job, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default mainReducer;
