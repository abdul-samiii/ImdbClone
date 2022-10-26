import qs from 'qs'

import { toastify, toastifyError } from '../../components/toastify'
import { httpRequest } from '../../config'
import { actionTypes } from '../actionTypes'

// REGISTER
export const Register = (data) => async dispatch => {
  console.log(data)
  const queryData = qs.stringify(data)
  console.log('query : ', queryData)
  try {
    dispatch({ type: actionTypes.SIGNUP_START })
    const response = await httpRequest.post('auth/register', queryData)
    const result = response.data
    console.log('Here we Go! ', result)
    toastify(result.message)
    dispatch({ type: actionTypes.SIGNUP_SUCCESS, payload: result })
  } catch (error) {
    console.log('Error : --- ', error)
    toastifyError(error.response.data.message)
    dispatch({ type: actionTypes.SIGNUP_FAILED })
  }
}

// LOGIN
export const Signin = (data) => async dispatch => {
  const queryData = qs.stringify(data)
  try {
    dispatch({ type: actionTypes.LOGIN_START })
    const response = await httpRequest.post('auth/login', queryData)
    const result = response.data
    window.localStorage.setItem('token', result.token)
    window.localStorage.setItem('uid', result.uid)
    toastify(result.message)
    dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: result })
  } catch (error) {
    console.log('Error : ---- ', error)
    toastifyError(error.response.data.message)
    dispatch({ type: actionTypes.LOGIN_FAILED })
  }
}
