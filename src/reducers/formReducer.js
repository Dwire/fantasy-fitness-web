import {SET_DROPDOWN_OPTION} from '../actions/actionTypes'

const packState = {challengeDropdowns: {userId: "all", status: "all", category: "all"}}

const packReducer = (state = packState, action) => {
  switch (action.type) {
    case SET_DROPDOWN_OPTION:
        let addedFormData = {...state.challengeDropdowns, ...action.payload}
      return {...state, challengeDropdowns:  addedFormData}
    default:
      return state
  }
}

export default packReducer