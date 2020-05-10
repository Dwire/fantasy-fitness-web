import { SET_INITIAL_STATE, SET_CURRENT_LEAGUE } from '../actions/actionTypes'

const leagueState = {allLeagues: [], currentLeague: {teams: []}}

export const userReducer = (state = leagueState, action) => {
  switch (action.type) {
    case SET_INITIAL_STATE:
      // debugger
      const allLeagues = action.payload.data.attributes.leagues
      const currentLeague = action.payload.data.attributes.leagues[0]
      return {...state, allLeagues, currentLeague}
    case SET_CURRENT_LEAGUE:
      return action.payload
    default:
      return state
  }
}

export default userReducer