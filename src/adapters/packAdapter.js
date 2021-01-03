import {BASE_URL} from './baseConfig'

const packAdapter = {
  getAll: () => fetch(`${BASE_URL}packs`).then(res => res.json())
}


export default packAdapter