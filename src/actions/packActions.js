import { SET_PACKS } from './actionTypes'

export const setPacks = (packs) => {
  return {
    type: SET_PACKS,
    payload: packs.data
  }
}

