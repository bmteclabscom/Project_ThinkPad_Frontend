

export function rootReducer(state = {}, action) {
  switch(action.type) {
    default:
      return state;
  }
}

export default function rootReducer(
  state = { movies: [], isLoading: false },
  action
) {
  switch (action.type) {
    case "FETCHED_MOVIES":
      // Object.assign({}, state, {movies: action.payload})
      return { ...state, movies: action.payload, isLoading: false };
    case "FETCHING_MOVIES":
      return { ...state, isLoading: true };
    default:
      return state;
  }
}
