import { UPDATE_COMPLETION } from '../actions/actionTypes'

const completionState = {completion: {}, completionUser: {}}

const completionReducer = (state = completionState, action) => {
  switch (action.type) {
    case UPDATE_COMPLETION:
      debugger
      return {...state}
    default:
      return state
  }
}

export default completionReducer