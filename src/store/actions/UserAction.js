// import { toastify, toastifyError } from '../../components/toastify'
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
