import { combineReducers } from "redux";
import courses from "./coursereducer";
import authors from"./authorreducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  apiCallsInProgress
});

export default rootReducer;
