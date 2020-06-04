/**
 * First action creator.
 * Passes 'course' payload (uses object shorthand syntax).
 * @param {string} course
 */
export function createCourse(course) {
  return { type: "CREATE_COURSE", course };
}
