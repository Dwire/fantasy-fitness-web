import { SET_LOGIN, SET_INITIAL_STATE } from '../actions/actionTypes'

const sessionsState = {loggedIn: false}

const sessionsReducer = (state = sessionsState, action) => {
  switch (action.type) {
    case SET_INITIAL_STATE:
      return {...state, loggedIn: true}
    case SET_LOGIN:
      return {...state, loggedIn: true}
    default:
      return state
  }
}

export default sessionsReducer