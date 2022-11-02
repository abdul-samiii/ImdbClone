import { actionTypes } from '../actionTypes'
import { InitialState } from '../InitialState'

export const EventReducer = (state = InitialState, action) => {
  switch (action?.type) {
    case actionTypes.ADD_EVENT_START:
      return {
        ...state, isLoading: true,
      }
    case actionTypes.ADD_EVENT_SUCCESS:
      return {
        ...state, isLoading: false,
      }
    case actionTypes.ADD_EVENT_FAILED:
      return {
        ...state, isLoading: false,
      }
    case actionTypes.GET_EVENTS_START:
      return {
        ...state, isLoading: true,
      }
    case actionTypes.GET_EVENTS_SUCCESS:
      return {
        ...state, isLoading: false, events: action.payload,
      }
    case actionTypes.GET_EVENTS_FAILED:
      return {
        ...state, isLoading: false,
      }
    case actionTypes.GET_CHANNEL_EVENTS_START:
      return {
        ...state, isLoading: true,
      }
    case actionTypes.GET_CHANNEL_EVENTS_SUCCESS:
      return {
        ...state, isLoading: false, channelEvents: action.payload,
      }
    case actionTypes.GET_CHANNEL_EVENTS_FAILED:
      return {
        ...state, isLoading: false,
      }
    case actionTypes.DELETE_CHANNEL_EVENT_START:
      return {
        ...state, isLoading: true,
      }
    case actionTypes.DELETE_CHANNEL_EVENT_SUCCESS:
      return {
        ...state, isLoading: false,
      }
    case actionTypes.DELETE_CHANNEL_EVENT_FAILED:
      return {
        ...state, isLoading: false,
      }
    default:
      return {
        ...state,
      }
  }
}
