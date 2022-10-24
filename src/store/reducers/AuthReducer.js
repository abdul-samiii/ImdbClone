import { actionTypes } from '../actionTypes'
import { InitialState } from '../InitialState'

export const AuthReducer = (state = InitialState, action) => {
  switch (action?.type) {
    case actionTypes.LOGIN_START:
      return {
        ...state, isLoading: true,
      }
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state, isLoading: false,
      }
    case actionTypes.LOGIN_FAILED:
      return {
        ...state, isLoading: false,
      }
    case actionTypes.LOGOUT_START:
      return {
        ...state, isLoading: true,
      }
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state, isLoading: false,
      }
    case actionTypes.LOGOUT_FAILED:
      return {
        ...state, isLoading: false,
      }
    default:
      return {
        ...state,
      }
  }
}
