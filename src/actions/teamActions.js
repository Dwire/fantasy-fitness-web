import { UPDATE_TEAM_COMPLETION } from './actionTypes'

export const updateTeamCompletion = (completion) => {
  return {
    type: UPDATE_TEAM_COMPLETION,
    payload: completion
  }
}