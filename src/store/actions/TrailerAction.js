import qs from 'qs'

import { toastify, toastifyError } from '../../components/toastify'
import { actionTypes } from '../actionTypes'
import { httpRequest } from '../../config'

export const AddTrailerAction = (data) => async dispatch => {
  try {
    dispatch({ type: actionTypes.ADD_TRAILER_START })
    const queryData = qs.stringify(data)
    const response = await httpRequest.post('movies/create', queryData, {
      headers: {
        Authorization: `bearer ${window.localStorage.getItem('token')}`,
      },
    })
    const result = response.data
    toastify(result.message)
    dispatch({ type: actionTypes.ADD_TRAILER_SUCCESS, payload: result })
  } catch (error) {
    dispatch({ type: actionTypes.ADD_TRAILER_FAILED })
    toastifyError(error.response.data.message)
  }
}
