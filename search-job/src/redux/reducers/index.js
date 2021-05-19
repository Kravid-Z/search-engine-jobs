import { combineReducers } from "redux";
import searchInput from "./searchInput.js";
import fetchJobs from "./fetchJobs.js";

export default combineReducers({ searchInput, fetchJobs });
