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
        Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzU2OGQ3MWMxOWFkMzQ0MWZkYmQ4ZjQiLCJlbWFpbCI6ImRlbW9AZ21haWwuY29tIiwibmFtZSI6ImFiIHNhbWkiLCJpYXQiOjE2NjY2NzkyODcsImV4cCI6MTY2Njc2NTY4N30.CVv8F4YF_o2WrXqCwl_u8ZBb1aNH159rJxdn8JJqo3c',
      },
    })
    dispatch({ type: actionTypes.GET_USER_SUCCESS, payload: response.data.user })
  } catch (error) {
    dispatch({ type: actionTypes.GET_USER_FAILED })
  }
}
