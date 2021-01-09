import { SET_LOGIN, SET_INITIAL_STATE, SET_CHART_VIEW } from '../actions/actionTypes'

const sessionsState = {loggedIn: false, chartView: 'allTime'}

const sessionsReducer = (state = sessionsState, action) => {
  switch (action.type) {
    case SET_INITIAL_STATE:
      return {...state, loggedIn: true}
    case SET_CHART_VIEW:
      return {...state, chartView: action.payload}
    case SET_LOGIN:
      return {...state, loggedIn: true}
    default:
      return state
  }
}

export default sessionsReducer