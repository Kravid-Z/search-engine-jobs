import { ADD_TO_FAVORITES, DELETE_FROM_FAVORITES } from "./actionTypes.js";

export const addToFavoritesAction = (job) => ({
  type: ADD_TO_FAVORITES,
  payload: job,
});

export const removeFromFavoritesAction = (index) => ({
  type: DELETE_FROM_FAVORITES,
  payload: index,
});
