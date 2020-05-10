const BASE_URL = 'http://localhost:3000/api/v1/users'

const userAdapter = {
  create: (user) => fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(res => res.json())
}


export default userAdapter