import { UPDATE_TEAM_COMPLETION, DELETE_TEAM_COMPLETION, ADD_TEAM_COMPLETION } from './actionTypes'

export const updateTeamCompletion = (completion) => {
  return {
    type: UPDATE_TEAM_COMPLETION,
    payload: completion
  }
}

export const deleteTeamCompletion = (completionId) => {
  return {
    type: DELETE_TEAM_COMPLETION,
    payload: completionId
  }
}

export const createTeamCompletion = (completion) => {
  return {
    type: ADD_TEAM_COMPLETION,
    payload: completion
  }
}