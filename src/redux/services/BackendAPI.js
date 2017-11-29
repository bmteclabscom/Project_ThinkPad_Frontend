const URL = 'http://localhost:3000/'

const createPost = (obj) => {
  return {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(obj)
  }
}

export default class BackendAPI {

  static fetchIdeas() {
    return fetch(`${URL}ideas`)
    .then(res => res.json())
  }

}
