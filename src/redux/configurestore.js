import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutatableStateInvariant from "redux-immutable-state-invariant";

/**
 * Configures the redux store.
 * Adds support for Redux dev tools, allowing interaction with Redux store in the browser.
 * @param {*} initialState The initial state of the Redux store.
 * @returns The updated store state.
 */
export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutatableStateInvariant()))
  );
}
