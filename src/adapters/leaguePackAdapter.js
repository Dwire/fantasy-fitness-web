const BASE_URL = 'http://localhost:3000/api/v1/leagues'
const token = window.localStorage.getItem('jwt')

const leaguePackAdapter = {
  create: (leagueData) => fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify(leagueData)
  }).then(res => res.json())
}


export default leaguePackAdapter