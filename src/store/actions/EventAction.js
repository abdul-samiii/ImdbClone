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

export const GetAllEventsAction = () => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_EVENTS_START })
    const response = await httpRequest.get('event/', {
      headers: {
        Authorization: `bearer ${window.localStorage.getItem('token')}`,
      },
    })
    const result = response.data
    toastify(result.message)
    dispatch({ type: actionTypes.GET_EVENTS_SUCCESS, payload: result.events })
  } catch (error) {
    dispatch({ type: actionTypes.GET_EVENTS_FAILED })
    toastifyError(error.response.data.message)
  }
}

export const GetChannelEventsAction = (channelID) => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_CHANNEL_EVENTS_START })
    const response = await httpRequest.get(`event/channelevents/${channelID}`, {
      headers: {
        Authorization: `bearer ${window.localStorage.getItem('token')}`,
      },
    })
    const result = response.data
    toastify(result.message)
    dispatch({ type: actionTypes.GET_CHANNEL_EVENTS_SUCCESS, payload: result.channelEvents })
  } catch (error) {
    dispatch({ type: actionTypes.GET_CHANNEL_EVENTS_FAILED })
    toastifyError(error.response.data.message)
  }
}

export const DeleteChannelEventAction = (channelID, eventId) => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_CHANNEL_EVENTS_START })
    const response = await httpRequest.delete(`event/${eventId}`, {
      headers: {
        Authorization: `bearer ${window.localStorage.getItem('token')}`,
        channel: channelID,
      },
    })
    const result = response.data
    toastify(result.message)
    dispatch({ type: actionTypes.GET_CHANNEL_EVENTS_SUCCESS, payload: result.channelEvents })
  } catch (error) {
    dispatch({ type: actionTypes.GET_CHANNEL_EVENTS_FAILED })
    toastifyError(error.response.data.message)
  }
}
