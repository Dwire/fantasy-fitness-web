// const BASE_URL = 'http://localhost:3000/api/v1/packs'
const BASE_URL = 'https://winter-workout-challenge.herokuapp.com/api/v1/packs'

const packAdapter = {
  getAll: () => fetch(BASE_URL).then(res => res.json())
}


export default packAdapter