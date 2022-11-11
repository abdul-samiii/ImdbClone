import qs from 'qs'

import { toastify, toastifyError } from '../../components/toastify'
import { actionTypes } from '../actionTypes'
import { httpRequest } from '../../config'

export const AddCelebrityAction = (data) => async dispatch => {
  try {
    dispatch({ type: actionTypes.ADD_CELEBRITY_START })
    const queryData = qs.stringify(data)
    const response = await httpRequest.post('celebrity/create', queryData, {
      headers: {
        Authorization: `bearer ${window.localStorage.getItem('token')}`,
      },
    })
    const result = response.data
    toastify(result.message)
    dispatch({ type: actionTypes.ADD_CELEBRITY_SUCCESS, payload: result })
  } catch (error) {
    dispatch({ type: actionTypes.ADD_CELEBRITY_FAILED })
    toastifyError(error.response.data.message)
  }
}

export const GetAllCelebritiesAction = () => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_CELEBRITIES_START })
    const response = await httpRequest.get('celebrity/', {
      headers: {
        Authorization: `bearer ${window.localStorage.getItem('token')}`,
      },
    })
    const result = response.data
    // toastify(result.message)
    dispatch({ type: actionTypes.GET_CELEBRITIES_SUCCESS, payload: result.celebrities })
  } catch (error) {
    dispatch({ type: actionTypes.GET_CELEBRITIES_FAILED })
    toastifyError(error.response.data.message)
  }
}
