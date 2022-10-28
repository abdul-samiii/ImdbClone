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
    default:
      return {
        ...state,
      }
  }
}
