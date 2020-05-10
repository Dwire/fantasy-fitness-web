const BASE_URL = 'http://localhost:3000/api/v1/'

const sessionsAdapter = {
  login: (user) => fetch(BASE_URL + 'login', {
          method: 'POST',
          headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
          body: JSON.stringify(user)
        })
        .then(res => res.json())
}


export default sessionsAdapter