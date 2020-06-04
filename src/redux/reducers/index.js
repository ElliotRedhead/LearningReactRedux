import { combineReducers } from "redux";
import courses from "./coursereducer";

const rootReducer = combineReducers({
  courses,
});

export default rootReducer;
