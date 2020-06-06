import { combineReducers } from "redux";
import courses from "./coursereducer";
import authors from"./authorreducer";

const rootReducer = combineReducers({
  courses,
  authors
});

export default rootReducer;
