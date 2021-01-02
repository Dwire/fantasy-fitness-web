// const BASE_URL = 'http://localhost:3000/api/v1/league_packs'
const BASE_URL = 'https://winter-workout-challenge.herokuapp.com/api/v1/league_packs'
const token = window.localStorage.getItem('jwt')

const leaguePackAdapter = {
  create: (leaguePackData) => fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify(leaguePackData)
  }).then(res => res.json())
}


export default leaguePackAdapter