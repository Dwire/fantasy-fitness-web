const BASE_URL = 'http://localhost:3000/api/v1/completions'

const completionAdapter = {
  create: (token, completionData) => fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify(completionData)
  })
  .then(res => res.json()),
  delete: (token, completionId) => fetch(`${BASE_URL}/${completionId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token
    } 
  })
  .then(res => res.json())
}

export default completionAdapter


