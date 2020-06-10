import * as types from "./actiontypes";

/**
 * Action creator for beginApiCall
 * @returns {object} Action type.
 */
export function beginApiCall() {
  return {
    type: types.BEGIN_API_CALL
  };
}

/**
 * Action creator for apiCallError.
 * @returns {object} Action type.
 */
export function apiCallError(){
  return { type: types.API_CALL_ERROR };
}