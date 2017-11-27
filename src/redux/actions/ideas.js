
export function FADER() {
  return {type: 'FADER'}
}




//
// import MovieApi from "../services/movieapi";
// export function fetchMovies() {
//   return function(dispatch) {
//     dispatch(fetchingMovies());
//     MovieApi.fetchMovies().then(movies => {
//       dispatch(fetchedMovies(movies.results));
//     });
//   };
// }
//
// function fetchedMovies(movies) {
//   return {
//     type: "FETCHED_MOVIES",
//     payload: movies
//   };
// }
//
// function fetchingMovies() {
//   return { type: "FETCHING_MOVIES" };
// }
//
// export function createMovie(params) {
//   return function(dispatch) {
//     MovieApi.createMovie(params).then(movie => {
//       dispatch({});
//     });
//   };
// }
//
// function someAction() {
//   return {};
// }
