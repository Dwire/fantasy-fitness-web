const BASE_URL = 'http://localhost:3000/api/v1/user_teams/'

const userTeamAdapter = {
  randomize: (usererNames, token) => fetch(BASE_URL + 'randomize', {
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