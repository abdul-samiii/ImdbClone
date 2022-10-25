import { actionTypes } from '../actionTypes'
import { InitialState } from '../InitialState'

export const UserReducer = (state = InitialState, action) => {
  switch(action.type) {
    case actionTypes.GET_USER_START:
      return {
        ...state, isLoading: true,
      }
    case actionTypes.GET_USER_SUCCESS:
      return {
        ...state, isLoading: false, user: action.payload,
      }
    case actionTypes.GET_USER_FAILED:
      return {
        ...state, isLoading: false,
      }
    default:
      return {
        ...state,
      }
  }
}
