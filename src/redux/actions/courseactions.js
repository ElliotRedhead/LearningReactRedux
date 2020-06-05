import * as types from "./actiontypes";
import * as courseApi from "../../api/courseApi";

/**
 * First action creator.
 * Passes 'course' payload (uses object shorthand syntax).
 * @param {string} course The course title to display.
 * @returns  {object} Payload object to interact with store.
 */
export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

/**
 * Declares action creator.
 * @param {object} courses The chosen payload, the existing courses.
 * @return {object} The success action.
 */
export function loadCourseSuccess(courses){
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}

/**
 * First thunk, every thunk returns function that takes dispatch as arg.
 * Redux thunk injects dispatch for us, so calling code looks same for async and sync calls.
 * @return {function} 
 */
export function loadCourses() {
  return function (dispatch) {
    return courseApi.getCourses().then(courses => {
      dispatch(loadCourseSuccess(courses));
    }).catch(error => {
      throw error;
    });
  };
}