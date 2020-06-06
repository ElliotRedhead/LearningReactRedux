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
export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
  case types.LOAD_AUTHORS_SUCCESS:
    return action.authors;
  default:
    return state;
  }
}
