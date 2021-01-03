import {BASE_URL} from './baseConfig'

const leagueMessageAdapter = {
  create: (message, token) => fetch(`${BASE_URL}league_messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify(message)
  }).then(res => res.json())
}


export default leagueMessageAdapter