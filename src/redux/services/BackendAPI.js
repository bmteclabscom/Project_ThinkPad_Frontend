const IP = 'http://192.168.2.204:3000/'
// const URL = 'http://localhost:3000/'

const createPost = (obj) => {
  return {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
  }
}

export default class BackendAPI {

  static fetchIdeas() {
    return fetch(`${IP}ideas`)
    .then(res => res.json())
  }

}
