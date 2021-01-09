import { SET_INITIAL_STATE, UPDATE_TEAM_COMPLETION, DELETE_TEAM_COMPLETION, ADD_TEAM_COMPLETION, ADD_TEAM_MESSAGE, SET_CURRENT_TEAM, SET_ALL_TEAMS } from '../actions/actionTypes'

const teamState = {allTeams: [], currentTeam: {}}

const teamReducer = (state = teamState, action) => {
  switch (action.type) {
    case SET_INITIAL_STATE:
      // debugger
      if (action.payload.data.attributes.default_league_id){
        const league = action.payload.data.attributes.leagues.find(league => league.id === action.payload.data.attributes.default_league_id)
        const allTeams = league.teams
        const currentTeam = allTeams.find(team => team.teammates.find(teammate => teammate.id === parseInt(action.payload.data.id)))
        return {...state, currentTeam, allTeams}
      }else{
        const allTeams = action.payload.data.attributes.leagues[0].teams
        const currentTeam = action.payload.data.attributes.leagues[0].teams.find(team => team.teammates.find(teammate => teammate.id === parseInt(action.payload.data.id)))
        return {...state, currentTeam, allTeams}
      }
    case SET_CURRENT_TEAM:
        return {...state, currentTeam: action.payload}
    case SET_ALL_TEAMS:
        return {...state, allTeams: action.payload}
    case UPDATE_TEAM_COMPLETION:
      let completionList = state.currentTeam.completions.map(completion => {
        if (completion.id === action.payload.id){
          return {...completion, ...action.payload}
        }else 
        return completion
      })
      let weekCompletionList = state.currentTeam.week_completions.map(completion => {
        if (completion.id === action.payload.id){
          return {...completion, ...action.payload}
        }else 
        return completion
      })
      let newCurrentTeam = {...state.currentTeam, completions: completionList, week_completions: weekCompletionList}
      let allTeamsPlusUpdatedCompletion = state.allTeams.map(team => team.id === newCurrentTeam.id ? newCurrentTeam : team)
      return {...state, 
        currentTeam: newCurrentTeam, 
        allTeams: allTeamsPlusUpdatedCompletion
      }
    case DELETE_TEAM_COMPLETION:
      let completions = state.currentTeam.completions.filter(completion => {
        return completion.id !== action.payload
      })
      let week_completions = state.currentTeam.week_completions.filter(completion => {
        return completion.id !== action.payload
      })
      let currentTeamMinusCompletion = {...state.currentTeam, completions: completions, week_completions: week_completions}
      let allTeamsMinusCompletion = state.allTeams.map(team => team.id === currentTeamMinusCompletion.id ? currentTeamMinusCompletion : team)
      return {...state, 
        currentTeam: currentTeamMinusCompletion,
        allTeams: allTeamsMinusCompletion
      }
    case ADD_TEAM_COMPLETION:
      let addedCompletion = [...state.currentTeam.completions, action.payload]
      let addedCompletionToWeek = [...state.currentTeam.week_completions, action.payload]

      let teamPlusCompletion = {...state.currentTeam, completions: addedCompletion, week_completions: addedCompletionToWeek}
      let allTeamsPlusCompletion = state.allTeams.map(team => team.id === teamPlusCompletion.id ? teamPlusCompletion : team)
      
      return {...state, 
        currentTeam: teamPlusCompletion, 
        allTeams: allTeamsPlusCompletion
        }
    case ADD_TEAM_MESSAGE:
      let addedMessage = [state.currentTeam.messages, ...action.payload]
      let teamPlusMessage = {...state.currentTeam, messages: addedMessage}
      let allTeamsPlusMessage = state.allTeams.map(team => team.id === teamPlusMessage.id ? teamPlusMessage : team)
  
      return {...state, 
        currentTeam: teamPlusMessage, 
        allTeams: allTeamsPlusMessage
        }
    default:
      return state
  }
}

export default teamReducer










// currentTeam should hold everything. All teams should just be a refrence 
// I should not be setting state on currentTeam and again on the same time in the allTeams array.