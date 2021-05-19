import { combineReducers } from "redux";
import fetchJobs from "./fetchJobs.js";
import favorites from "./favorites.js";

export default combineReducers({fetchJobs, favorites });
