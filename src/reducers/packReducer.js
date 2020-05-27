import { SET_PACKS } from '../actions/actionTypes'

const packState = {allPacks: []}

const sessionsReducer = (state = packState, action) => {
  switch (action.type) {
    case SET_PACKS:
      return {...state, allPacks: action.payload}
    default:
      return state
  }
}

export default sessionsReducer