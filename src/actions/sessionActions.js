import { SET_LOGIN, SET_INITIAL_STATE, SET_CHART_VIEW } from './actionTypes'

export const setLogin = () => {
  return {
    type: SET_LOGIN,
    payload: true
  }
}

export const setInitialState = (userLeagueTeamData) => {
  return {
    type: SET_INITIAL_STATE,
    payload: userLeagueTeamData
  }
}

export const setChartView = (chartView) => {
  return {
    type: SET_CHART_VIEW,
    payload: chartView
  }
}