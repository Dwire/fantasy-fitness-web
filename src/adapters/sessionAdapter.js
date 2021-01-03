import {BASE_URL} from './baseConfig'
// const token = window.localStorage.getItem('jwt')

const sessionsAdapter = {
  login: (user) => fetch(`${BASE_URL}login`, {
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