import qs from 'qs'

import { toastify, toastifyError } from '../../components/toastify'
import { actionTypes } from '../actionTypes'
import { httpRequest } from '../../config'

export const AddWatchlistTrailer = (data) => async dispatch => {
  try {
    dispatch({ type: actionTypes.ADD_WATCHLIST_START })
    const queryData = qs.stringify(data)
    const response = await httpRequest.post('watchlist', queryData, {
      headers: {
        Authorization: `bearer ${window.localStorage.getItem('token')}`,
      },
    })
    const result = response.data
    toastify(result.message)
    dispatch({ type: actionTypes.ADD_WATCHLIST_SUCCESS })
  } catch (error) {
    dispatch({ type: actionTypes.ADD_WATCHLIST_FAILED })
    toastifyError(error.response.data.message)
  }
}

export const GetWatchlistTrailer = () => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_WATCHLIST_START })
    const response = await httpRequest.get('watchlist', {
      headers: {
        Authorization: `bearer ${window.localStorage.getItem('token')}`,
        userID: window.localStorage.getItem('uid'),
      },
    })
    const result = response.data
    toastify(result.message)
    dispatch({ type: actionTypes.GET_WATCHLIST_SUCCESS, payload: result.watchlistData })
  } catch (error) {
    dispatch({ type: actionTypes.GET_WATCHLIST_FAILED })
    toastifyError(error.response.data.message)
  }
}
