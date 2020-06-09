import * as types from "../actions/actiontypes";
import initialState from "./initialstate";

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length -8) === "_SUCCESS";
}

/**
 * Increments state by one on new API call.
 * @param {object} state Initial state.
 * @param {object} action The specific action.
 * @returns {object} New state.
 */
export default function apiCallStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  if (action.type === types.BEGIN_API_CALL){
    return state + 1;
  } else if (actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }

  return state;
}