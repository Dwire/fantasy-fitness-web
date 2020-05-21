import { SET_INITIAL_STATE, UPDATE_TEAM_COMPLETION, DELETE_TEAM_COMPLETION, ADD_TEAM_COMPLETION } from '../actions/actionTypes'

const teamState = {allTeams: [], currentTeam: {}}

const userReducer = (state = teamState, action) => {
  switch (action.type) {
    case SET_INITIAL_STATE:
      // debugger
      const allTeams = action.payload.data.attributes.leagues[0].teams
      const currentTeam = action.payload.data.attributes.leagues[0].teams.find(team => team.teammates.find(teammate => teammate.id === parseInt(action.payload.data.id)))
      return {...state, currentTeam, allTeams}
    case UPDATE_TEAM_COMPLETION:
      let completionList = state.currentTeam.completions.map(completion => {
        if (completion.id === action.payload.id){
          return {...completion, ...action.payload}
        }else 
        return completion
      })
      let newCurrentTeam = {...state.currentTeam, completions: completionList}
      let allTeamsPlusUpdatedCompletion = state.allTeams.map(team => team.id === newCurrentTeam.id ? newCurrentTeam : team)
      return {...state, 
        currentTeam: newCurrentTeam, 
        allTeams: allTeamsPlusUpdatedCompletion
      }
    case DELETE_TEAM_COMPLETION:
      let completions = state.currentTeam.completions.filter(completion => {
        return completion.id !== action.payload
      })
      let currentTeamMinusCompletion = {...state.currentTeam, completions: completions}
      let allTeamsMinusCompletion = state.allTeams.map(team => team.id === currentTeamMinusCompletion.id ? currentTeamMinusCompletion : team)
      return {...state, 
        currentTeam: currentTeamMinusCompletion,
        allTeams: allTeamsMinusCompletion
      }
    case ADD_TEAM_COMPLETION:
      let addedCompletion = [...state.currentTeam.completions, action.payload]
      let teamPlusCompletion = {...state.currentTeam, completions: addedCompletion}
      let allTeamsPlusCompletion = state.allTeams.map(team => team.id === teamPlusCompletion.id ? teamPlusCompletion : team)
      
      return {...state, 
        currentTeam: teamPlusCompletion, 
        allTeams: allTeamsPlusCompletion
        }
    default:
      return state
  }
}

export default userReducer