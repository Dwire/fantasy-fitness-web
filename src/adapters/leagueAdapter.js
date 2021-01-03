import {BASE_URL} from './baseConfig'

const token = window.localStorage.getItem('jwt')

const leagueAdapter = {
  create: (leagueData) => fetch(`${BASE_URL}leagues`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify(leagueData)
  }).then(res => res.json())
}


export default leagueAdapter