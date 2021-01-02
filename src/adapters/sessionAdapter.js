// const BASE_URL = 'http://localhost:3000/api/v1/'
const BASE_URL = 'https://winter-workout-challenge.herokuapp.com/api/v1/'
// const token = window.localStorage.getItem('jwt')

const sessionsAdapter = {
  login: (user) => fetch(BASE_URL + 'login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(res => res.json()),
  reauth: (token) => fetch(`${BASE_URL}reauth`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json',
            'Authorization': token
          },
          body: JSON.stringify({})
          })
          .then(res => res.json())
}



export default sessionsAdapter