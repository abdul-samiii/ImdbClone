import qs from 'qs'

import { toastify, toastifyError } from '../../components/toastify'
import { actionTypes } from '../actionTypes'
import { httpRequest } from '../../config'

export const CreateNewChannel = (data) => async dispatch => {
  try {
    dispatch({ type: actionTypes.CREATE_CHANNEL_START })
    const queryData = qs.stringify(data)
    const response = await httpRequest.post('channel/create', queryData, {
      headers: {
        Authorization: `bearer ${window.localStorage.getItem('token')}`,
      },
    })
    const result = response.data
    toastify(result.message)
    dispatch({ type: actionTypes.CREATE_CHANNEL_SUCCESS, payload: result })
  } catch (error) {
    dispatch({ type: actionTypes.CREATE_CHANNEL_FAILED })
    toastifyError(error.response.data.message)
  }
}

export const GetChannel = () => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_CHANNEL_START })
    const response = await httpRequest.get(`channel/${window.localStorage.getItem('uid')}`, {
      headers: {
        Authorization: `bearer ${window.localStorage.getItem('token')}`,
      },
    })
    const result = response.data
    toastify(result.message)
    dispatch({ type: actionTypes.GET_CHANNEL_SUCCESS, payload: result.channel })
  } catch (error) {
    dispatch({ type: actionTypes.GET_CHANNEL_FAILED })
    toastifyError(error.response.data.message)
  }
}

export const DeleteChannelAction = () => async dispatch => {
  try {
    dispatch({ type: actionTypes.DELETE_CHANNEL_START })
    const response = await httpRequest.delete(`channel/delete/${window.localStorage.getItem('uid')}`, {
      headers: {
        Authorization: `bearer ${window.localStorage.getItem('token')}`,
      },
    })
    const result = response.data
    toastify(result.message)
    dispatch({ type: actionTypes.DELETE_CHANNEL_SUCCESS, payload: result.channel })
  } catch (error) {
    dispatch({ type: actionTypes.DELETE_CHANNEL_FAILED })
    toastifyError(error.response.data.message)
  }
}

export const UpdateChannelAction = (data) => async dispatch => {
  try {
    dispatch({ type: actionTypes.UPDATE_CHANNEL_START })
    const queryData = qs.stringify(data)
    const response = await httpRequest.patch('channel/update', queryData, {
      headers: {
        Authorization: `bearer ${window.localStorage.getItem('token')}`,
      },
    })
    const result = response.data
    toastify(result.message)
    dispatch({ type: actionTypes.UPDATE_CHANNEL_SUCCESS, payload: result })
  } catch (error) {
    dispatch({ type: actionTypes.UPDATE_CHANNEL_FAILED })
    toastifyError(error.response.data.message)
  }
}
