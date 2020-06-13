import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";


/**
 * Configures the redux store.
 * Adds support for Redux dev tools, allowing interaction with Redux store in the browser.
 * @param {object} initialState The initial state of the Redux store.
 * @returns {object} The updated store state.
 */
export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
}
