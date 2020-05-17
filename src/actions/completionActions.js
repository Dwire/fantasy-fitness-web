import { SET_CURRENT_COMPLETION_AND_USER } from './actionTypes'

export const setCurrentCompletionAndUser = (completion) => {
  return {
    type: SET_CURRENT_COMPLETION_AND_USER,
    payload: completion
  }
}
