import { SET_INITIAL_STATE, SET_DARK_MODE } from '../actions/actionTypes'

const settingsState = {darkMode: false}

const settingsReducer = (state = settingsState, action) => {
  switch (action.type) {
    case SET_INITIAL_STATE:
      const checkDarkMode = !!window.localStorage.getItem('color')
      return {...state, darkMode: checkDarkMode}
    case SET_DARK_MODE:
      return {...state, darkMode: action.payload}
    default:
      return state
  }
}

export default settingsReducer