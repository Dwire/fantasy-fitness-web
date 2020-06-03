import {ADD_LEAGUE_MESSAGE, SET_CURRENT_LEAGUE, ADD_LEAGUE} from './actionTypes'


export const setCurrentLeague = (league) => {
  return {
    type: SET_CURRENT_LEAGUE,
    payload: league
  }
}

export const addLeague = (league) => {
  return {
    type: ADD_LEAGUE,
    payload: league
  }
}

export const createLeagueMessage = (messages) => {
  return {
    type: ADD_LEAGUE_MESSAGE,
    payload: messages
  }
}
