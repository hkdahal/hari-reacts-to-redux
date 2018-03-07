import * as actionTypes from '../constants/actionTypes'

const initialState = {}

export default function (state = initialState, action) {
  if (action.type === actionTypes.PULL_AUDIOS) {
    return {...state}
  }
  return state
}