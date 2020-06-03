import { SET_INITIAL_STATE, SET_CURRENT_LEAGUE, ADD_LEAGUE_MESSAGE, ADD_LEAGUE } from '../actions/actionTypes'
// import { bindActionCreators } from 'redux'

const leagueState = {allLeagues: [], currentLeague: {teams: []}}

const leagueReducer = (state = leagueState, action) => {
  switch (action.type) {
    case SET_INITIAL_STATE:
      // debugger
      const allLeagues = action.payload.data.attributes.leagues
      if (action.payload.data.attributes.default_league_id){
        let {teams, ...currentLeague} = action.payload.data.attributes.leagues.find(league => league.id === action.payload.data.attributes.default_league_id)
        return {...state, allLeagues, currentLeague}
      }else{
        let {teams, ...currentLeague} = action.payload.data.attributes.leagues[0]
        return {...state, allLeagues, currentLeague}
      }
      // const currentTeam = currentLeague.teams.find(team => team.teammates.find(teammate => teammate.id === parseInt(action.payload.data.id)))
      
    case ADD_LEAGUE:
      const allLeaguesPlusNew = [...state.allLeagues, action.payload]
      return {...state, allLeagues: allLeaguesPlusNew}
    case SET_CURRENT_LEAGUE:
      // return {...state,  currentLeague: bindActionCreators.payload}
      return {...state,  currentLeague: action.payload}
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

export default leagueReducer