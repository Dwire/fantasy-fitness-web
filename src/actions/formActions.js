import {SET_DROPDOWN_OPTION} from './actionTypes'


export const setDropdownOption = (formData) => {
  return {
    type: SET_DROPDOWN_OPTION,
    payload: formData
  }
}