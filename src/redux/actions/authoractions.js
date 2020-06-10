import * as types from "./actiontypes";
import * as authorApi from "../../api/authorApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";


/**
 * Declares action creator.
 * @param {object} authors The chosen payload, the existing authors.
 * @return {object} The success action.
 */
export function loadAuthorsSuccess(authors){
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

/**
 * Thunk, every thunk returns function that takes dispatch as arg.
 * Redux thunk injects dispatch for us, so calling code looks same for async and sync calls.
 * Returns a list of authors if successful, 
 * @return {function} 
 */
export function loadAuthors() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return authorApi.getAuthors()
      .then(authors => {
        dispatch(loadAuthorsSuccess(authors));})
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}