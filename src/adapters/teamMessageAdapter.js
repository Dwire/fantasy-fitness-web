import {BASE_URL} from './baseConfig'


const teamMessageAdapter = {
  create: (message, token) => fetch(`${BASE_URL}team_messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify(message)
  }).then(res => res.json())
}


export default teamMessageAdapter