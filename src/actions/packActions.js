import { SET_PACKS, SET_DISPLAY_PACK_ID } from './actionTypes'

export const setPacks = (packs) => {
  return {
    type: SET_PACKS,
    payload: packs.data
  }
}

export const setDisplayPackId = (packId) => {
  return {
    type: SET_DISPLAY_PACK_ID,
    payload: packId
  }
}