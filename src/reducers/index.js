import { combineReducers } from 'redux'
// import authReducer from './authReducer'
import userReducer from './userReducer'
import sessionsReducer from './sessionsReducer'
import leagueReducer from './leagueReducer'
import teamReducer from './teamReducer'
import packReducer from './packReducer'
import formReducer from './formReducer'
import settingsReducer from './settingsReducer'

// import settingsAndFormReducer from './settingsAndFormReducer'

export default combineReducers({
  // auth: authReducer
  user: userReducer,
  leagues: leagueReducer,
  teams: teamReducer,
  session: sessionsReducer,
  packs: packReducer,
  forms: formReducer,
  settings: settingsReducer
  // settingsAndFormReducer: settingsAndFormReducer
})