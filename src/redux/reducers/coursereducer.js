import * as types from "../actions/actiontypes";
/**
 * Updates the redux store by adding the new action passed in action.course to store.
 * Whatever is returned from the reducer becomes the new state for that reducer.
 * If the reducer receives an action that it doesn't care about, it should return the unchanged state.
 * @param {array} state The properties of a component.
 * @param {object} action The payload of information sent from data from application the store.
 * @returns {object} The updated state.
 */
export default function courseReducer(state = [], action) {
  switch (action.type) {
  case types.CREATE_COURSE:
    return [...state, { ...action.course }];
  case types.LOAD_COURSES_SUCCESS:
    return action.courses;
  default:
    return state;
  }
}
