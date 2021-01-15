import { SET_DARK_MODE } from './actionTypes'

export const setDarkMode = (modeBoolean) => {
    console.log(modeBoolean);
    
  return {
    type: SET_DARK_MODE,
    payload: modeBoolean
  }
}