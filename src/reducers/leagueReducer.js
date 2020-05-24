import { SET_INITIAL_STATE, SET_CURRENT_LEAGUE, ADD_LEAGUE_MESSAGE } from '../actions/actionTypes'
import { bindActionCreators } from 'redux'

const leagueState = {allLeagues: [], currentLeague: {teams: []}}

const userReducer = (state = leagueState, action) => {
  switch (action.type) {
    case SET_INITIAL_STATE:
      // debugger
      const allLeagues = action.payload.data.attributes.leagues
      const {teams, ...currentLeague} = action.payload.data.attributes.leagues[0]
      // const currentTeam = currentLeague.teams.find(team => team.teammates.find(teammate => teammate.id === parseInt(action.payload.data.id)))
      
      return {...state, allLeagues, currentLeague}
    case SET_CURRENT_LEAGUE:
      return {...state,  currentLeague: bindActionCreators.payload}
    case ADD_LEAGUE_MESSAGE:
    let addedMessage = [state.currentLeague.messages, ...action.payload]
    let leaguePlusMessage = {...state.currentLeague, messages: addedMessage}
    let allLeaguesPlusMessage = state.allLeagues.map(league => league.id === leaguePlusMessage.id ? leaguePlusMessage : league)

    return {...state, 
      currentLeague: leaguePlusMessage, 
      allLeagues: allLeaguesPlusMessage
      }
    default:
      return state
  }
}

export default userReducer