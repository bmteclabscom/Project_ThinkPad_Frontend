import BackendAPI from '../services/BackendAPI.js'

export function PRE_LOAD_IDEAS() {
  return function(dispatch) {
    BackendAPI.fetchIdeas()
    .then(json => { dispatch({type: "PRE_LOAD_IDEAS", payload: json })
    })
  }
}

export function SELECT_IDEA(id) {
  return {type: 'SELECT_IDEA', payload: id }
}
