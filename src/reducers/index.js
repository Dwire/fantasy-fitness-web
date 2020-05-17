import { combineReducers } from 'redux'
// import authReducer from './authReducer'
import userReducer from './userReducer'
import sessionsReducer from './sessionsReducer'
import leagueReducer from './leagueReducer'
import completionReducer from './completionReducer'

// import settingsAndFormReducer from './settingsAndFormReducer'

export default combineReducers({
  // auth: authReducer
  user: userReducer,
  leagues: leagueReducer,
  completions: completionReducer,
  // bookClub: bookClubReducer,
  session: sessionsReducer,
  // settingsAndFormReducer: settingsAndFormReducer
})