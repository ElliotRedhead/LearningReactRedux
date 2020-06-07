import * as types from "./actiontypes";
import * as courseApi from "../../api/courseApi";

/**
 * Declares action creator.
 * @param {object} courses The chosen payload, the existing courses.
 * @return {object} The success action.
 */
export function loadCourseSuccess(courses){
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}

/**
 * Declares action creator.
 * @param {object} course The chosen payload, the target course.
 * @return {object} The success action.
 */
export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

/**
 * Declares action creator.
 * @param {object} course The chosen payload, the target course.
 * @return {object} The success action.
 */
export function updateCourseSuccess(course){
  return {type: types.UPDATE_COURSE_SUCCESS, course};
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

export function saveCourse(course) {
  return function (dispatch, getState) {
    return courseApi.saveCourse(course).then(savedCourse => {
      /* If ID exists, update an existing course, else create a new course. */
      course.id
        ? dispatch(updateCourseSuccess(savedCourse))
        : dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      throw error;
    });
  };
}