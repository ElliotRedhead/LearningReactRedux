import * as types from "./actiontypes";

/**
 * Action creator for begiunApiCall
 * @returns {object} Action type.
 */
export function beginApiCall() {
  return {
    type: types.BEGIN_API_CALL
  };
}