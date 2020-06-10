import * as types from "../actions/actiontypes";
import initialState from "./initialstate";

/**
 * Updates the redux store by adding the new action passed in action.course to store.
 * Whatever is returned from the reducer becomes the new state for that reducer.
 * If the reducer receives an action that it doesn't care about, it should return the unchanged state.
 * @param {array} state The properties of a component.
 * @param {object} action The payload of information sent from data from application the store.
 * @returns {object} The updated state.
 */
export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
  case types.CREATE_COURSE_SUCCESS:
    return [...state, { ...action.course }];
  /* Maps over the courses to return new array, the element is replaced with matching course.id
  When the course is found with the id that has changed */
  case types.UPDATE_COURSE_SUCCESS:
    return state.map(course => course.id === action.course.id ? action.course : course);
  case types.LOAD_COURSES_SUCCESS:
    return action.courses;
  case types.DELETE_COURSE_OPTIMISTIC:
    return state.filter(course => course.id !== action.course.id);
  default:
    return state;
  }
}
