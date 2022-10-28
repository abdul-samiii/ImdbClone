import qs from 'qs'

import { toastify, toastifyError } from '../../components/toastify'
import { actionTypes } from '../actionTypes'
import { httpRequest } from '../../config'

export const AddEventAction = (data) => async dispatch => {
  try {
    dispatch({ type: actionTypes.ADD_EVENT_START })
    const queryData = qs.stringify(data)
    const response = await httpRequest.post('event/create', queryData, {
      headers: {
        Authorization: `bearer ${window.localStorage.getItem('token')}`,
      },
    })
    const result = response.data
    toastify(result.message)
    dispatch({ type: actionTypes.ADD_EVENT_SUCCESS, payload: result })
  } catch (error) {
    dispatch({ type: actionTypes.ADD_EVENT_FAILED })
    toastifyError(error.response.data.message)
  }
}
