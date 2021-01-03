import {BASE_URL} from './baseConfig'

const userAdapter = {
  create: (user) => fetch(`${BASE_URL}users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(res => res.json()),
  update: (data, token, userId) => fetch(`${BASE_URL}users/${userId}`, {
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