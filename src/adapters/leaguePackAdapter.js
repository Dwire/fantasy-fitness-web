import {BASE_URL} from './baseConfig'
const token = window.localStorage.getItem('jwt')

const leaguePackAdapter = {
  create: (leaguePackData) => fetch(`${BASE_URL}league_packs`, {
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