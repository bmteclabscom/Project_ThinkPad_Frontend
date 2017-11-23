export default class MovieApi {
  static fetchMovies() {
    return fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=84ff24e54dc5337932a5dcb4614390b3"
    ).then(res => res.json());
  }

  static createMovie(params) {
    return fetch("http://localhost:3000/movies", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
}
