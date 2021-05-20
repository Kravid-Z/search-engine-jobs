import { ADD_TO_FAVORITES, DELETE_FROM_FAVORITES } from "../actionTypes.js";

const initialState = {
  favorites: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
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

export default favoritesReducer;
