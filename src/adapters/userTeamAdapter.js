import {BASE_URL} from './baseConfig'

const userTeamAdapter = {
  randomize: (usererNames, token) => fetch(`${BASE_URL}user_teams/randomize`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify(usererNames)
  }).then(res => res.json())
}


export default userTeamAdapter