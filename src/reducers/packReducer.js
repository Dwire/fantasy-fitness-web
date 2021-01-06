import { SET_PACKS, SET_DISPLAY_PACK_ID, SET_INITIAL_STATE} from '../actions/actionTypes'

const packState = {allPacks: [], displayPackId: 0}

const packReducer = (state = packState, action) => {
  switch (action.type) {
    case SET_INITIAL_STATE:
      // LEAGE IS HARDCODDED BELOW THIS WILL BE A PROBLEM IN FUTURE!!!
      return {...state, displayPackId: action.payload.data.attributes.leagues[0].selected_pack.id}
    case SET_PACKS:
      return {...state, allPacks: action.payload}
    case SET_DISPLAY_PACK_ID:
      return {...state, displayPackId: action.payload}
    default:
      return state
  }
}

export default packReducer