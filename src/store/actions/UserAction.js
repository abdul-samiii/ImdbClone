// import { toastify, toastifyError } from '../../components/toastify'
import { httpRequest } from '../../config'
import { actionTypes } from '../actionTypes'

// GET USER
export const GetUser = (uid) => async dispatch => {
  console.log(uid)
  try {
    dispatch({ type: actionTypes.GET_USER_START })
    const response = await httpRequest.get('user/63568d71c19ad3441fdbd8f4', {
      headers: {
        Authorization: `bearer ${window.localStorage.getItem('token')}`,
      },
    })
    dispatch({ type: actionTypes.GET_USER_SUCCESS, payload: response.data.user })
  } catch (error) {
    dispatch({ type: actionTypes.GET_USER_FAILED })
  }
}
