import { SET_INITIAL_STATE, SET_CURRENT_LEAGUE, UPDATE_TEAM_COMPLETION } from '../actions/actionTypes'

const teamState = {allTeams: [], currentTeam: {}}

const userReducer = (state = teamState, action) => {
  switch (action.type) {
    case SET_INITIAL_STATE:
      // debugger
      const allTeams = action.payload.data.attributes.leagues[0].teams
      const currentTeam = action.payload.data.attributes.leagues[0].teams.find(team => team.teammates.find(teammate => teammate.id === parseInt(action.payload.data.id)))
      return {...state, currentTeam, allTeams}
    case SET_CURRENT_LEAGUE:
      return action.payload
    case UPDATE_TEAM_COMPLETION:
      let completionList = state.currentTeam.completions.map(completion => {
        if (completion.id === action.payload.id){
          return {...completion, ...action.payload}
        }else 
        return completion
      })
      let newCurrentTeam = {...state.currentTeam, completions: completionList}
      return {...state, currentTeam: newCurrentTeam}
    default:
      return state
  }
}

export default userReducer