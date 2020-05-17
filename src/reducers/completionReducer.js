import { SET_CURRENT_COMPLETION_AND_USER } from '../actions/actionTypes'

const completionState = {completion: {}, completionUser: {}}

const completionReducer = (state = completionState, action) => {
  switch (action.type) {
    case SET_CURRENT_COMPLETION_AND_USER:
      let count = action.payload.count += 1
      // debugger
      return {...state, ...action.payload, completion_count: count}
    default:
      return state
  }
}

export default completionReducer