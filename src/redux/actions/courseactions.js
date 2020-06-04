/**
 * First action creator.
 * Passes 'course' payload (uses object shorthand syntax).
 * @param {string} course The course title to display.
 * @returns  {object} Payload object to interact with store.
 */
export function createCourse(course) {
  return { type: "CREATE_COURSE", course };
}
