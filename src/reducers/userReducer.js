import { SET_INITIAL_STATE, SET_USER } from '../actions/actionTypes'

const userState = {}

export const userReducer = (state = userState, action) => {
  switch (action.type) {
    case SET_INITIAL_STATE:
      const {leagues, ...user} = {...action.payload.data.attributes, id: action.payload.data.id}
      return {...state, ...user}
    case SET_USER:
      return action.payload
    default:
      return state
  }
}

export default userReducer