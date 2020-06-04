/**
 * Updates the redux store by adding the new action passed in action.course to store.
 * Whatever is returned from the reducer becomes the new state for that reducer.
 * If the reducer receives an action that it doesn't care about, it should return the unchanged state.
 */
export default function courseReducer(state = [], action) {
  switch (action.type) {
  case "CREATE_COURSE":
    debugger;
    return [...state, { ...action.course }];
  default:
    return state;
  }
}
