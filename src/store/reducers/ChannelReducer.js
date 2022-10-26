import { actionTypes } from '../actionTypes'
import { InitialState } from '../InitialState'

export const ChannelReducer = (state = InitialState, action) => {
  switch (action?.type) {
    case actionTypes.CREATE_CHANNEL_START:
      return {
        ...state, isLoading: true,
      }
    case actionTypes.CREATE_CHANNEL_SUCCESS:
      return {
        ...state, isLoading: false,
      }
    case actionTypes.CREATE_CHANNEL_FAILED:
      return {
        ...state, isLoading: false,
      }
    case actionTypes.GET_CHANNEL_START:
      return {
        ...state, isLoading: true,
      }
    case actionTypes.GET_CHANNEL_SUCCESS:
      return {
        ...state, isLoading: false, channel: action?.payload,
      }
    case actionTypes.GET_CHANNEL_FAILED:
      return {
        ...state, isLoading: false,
      }
    case actionTypes.DELETE_CHANNEL_START:
      return {
        ...state, isLoading: true,
      }
    case actionTypes.DELETE_CHANNEL_SUCCESS:
      return {
        ...state, isLoading: false,
      }
    case actionTypes.DELETE_CHANNEL_FAILED:
      return {
        ...state, isLoading: false,
      }
    case actionTypes.UPDATE_CHANNEL_START:
      return {
        ...state, isLoading: true,
      }
    case actionTypes.UPDATE_CHANNEL_SUCCESS:
      return {
        ...state, isLoading: false,
      }
    case actionTypes.UPDATE_CHANNEL_FAILED:
      return {
        ...state, isLoading: false,
      }
    default:
      return {
        ...state,
      }
  }
}
