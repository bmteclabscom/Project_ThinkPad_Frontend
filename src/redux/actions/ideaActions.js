import BackendAPI from '../services/BackendAPI.js'

export function PRE_LOAD_IDEAS() {
  return function(dispatch) {
    BackendAPI.fetchIdeas()
    .then(json => { dispatch({type: "PRE_LOAD_IDEAS", payload: json })
    })
  }
}
