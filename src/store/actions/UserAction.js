import qs from 'qs'

import { toastify, toastifyError } from '../../components/toastify'
import { httpRequest } from '../../config'
import { actionTypes } from '../actionTypes'

// GET USER
export const GetUser = (uid) => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_USER_START })
    const response = await httpRequest.get(`user/${uid}`, {
      headers: {
        Authorization: `bearer ${window.localStorage.getItem('token')}`,
      },
    })
    dispatch({ type: actionTypes.GET_USER_SUCCESS, payload: response.data.user })
  } catch (error) {
    dispatch({ type: actionTypes.GET_USER_FAILED })
  }
}

// UPDATE USER
export const UpdateUser = (data) => async dispatch => {
  try {
    dispatch({ type: actionTypes.UPDATE_USER_START })
    const queryData = qs.stringify(data)
    const response = await httpRequest.patch('user', queryData, {
      headers: {
        Authorization: `bearer ${window.localStorage.getItem('token')}`,
      },
    })
    const result = response.data
    console.log(result.message)
    toastify(result.message)
    dispatch({ type: actionTypes.UPDATE_USER_SUCCESS, payload: response.data.user })
  } catch (error) {
    dispatch({ type: actionTypes.UPDATE_USER_FAILED })
    toastifyError(error.response.data.message)
  }
}
