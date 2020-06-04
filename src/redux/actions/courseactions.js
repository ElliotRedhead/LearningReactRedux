import * as types from "./actiontypes";

/**
 * First action creator.
 * Passes 'course' payload (uses object shorthand syntax).
 * @param {string} course The course title to display.
 * @returns  {object} Payload object to interact with store.
 */
export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}
