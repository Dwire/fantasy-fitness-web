const BASE_URL = 'http://localhost:3000/api/v1/league_messages'
const token = window.localStorage.getItem('jwt')

const leagueMessageAdapter = {
  create: (message) => fetch(BASE_URL, {
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