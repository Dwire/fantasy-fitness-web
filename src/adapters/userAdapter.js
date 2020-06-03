const BASE_URL = 'http://localhost:3000/api/v1/users/'

const userAdapter = {
  create: (user) => fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(res => res.json()),
  update: (data, token, userId) => fetch(BASE_URL + `${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify(data)
  } )
}


export default userAdapter