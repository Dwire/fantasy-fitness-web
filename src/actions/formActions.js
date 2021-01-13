import {SET_DROPDOWN_OPTION, CLEAR_FILTERS} from './actionTypes'


export const setDropdownOption = (formData) => {
  return {
    type: SET_DROPDOWN_OPTION,
    payload: formData
  }
}

export const clearFilters = () => {
  return {
    type: CLEAR_FILTERS,
  }
}