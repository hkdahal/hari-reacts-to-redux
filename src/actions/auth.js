import * as actionTypes from '../constants/actionTypes'
import {setTracks} from '../actions/track'

const API_ENDPOINT = '//127.0.0.1:8000/api/v1/song/'

export function pullAudios() {
  console.log('hmm')
  return function (dispatch) {
    dispatch({type: actionTypes.PULL_AUDIOS})
    dispatch(fetchStream())
  }
}

function fetchStream() {
  return function (dispatch) {
    fetch(
      API_ENDPOINT,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        }
      }
    )
      .then(response => response.json())
      .then((data) => {
        dispatch(setTracks(data.audios))
      })
  }
}