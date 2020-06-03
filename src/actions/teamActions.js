import {SET_CURRENT_TEAM, SET_ALL_TEAMS, UPDATE_TEAM_COMPLETION, DELETE_TEAM_COMPLETION, ADD_TEAM_COMPLETION, ADD_TEAM_MESSAGE } from './actionTypes'


export const setCurrentTeam = (team) => {
  return {
    type: SET_CURRENT_TEAM,
    payload: team
  }
}

export const setAllTeams = (teams) => {
  return {
    type: SET_ALL_TEAMS,
    payload: teams
  }
}

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

export const createTeamMessage = (messageArray) => {
  debugger
  return {
    type: ADD_TEAM_MESSAGE,
    payload: messageArray
  }
}