import {ADD_LEAGUE_MESSAGE} from './actionTypes'

export const createLeagueMessage = (messages) => {
  return {
    type: ADD_LEAGUE_MESSAGE,
    payload: messages
  }
}