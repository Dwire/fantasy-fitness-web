import {BASE_URL} from './baseConfig'

const completionAdapter = {
  create: (token, completionData) => fetch(`${BASE_URL}completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify(completionData)
  })
  .then(res => res.json()),
  delete: (token, completionId) => fetch(`${BASE_URL}completions/${completionId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token
    } 
  })
  .then(res => res.json()),
  update: (token, completionData, completionId) => fetch(`${BASE_URL}completions/${completionId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify(completionData)
  }).then(res => res.json())
}

export default completionAdapter


