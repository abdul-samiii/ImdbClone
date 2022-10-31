import { actionTypes } from '../actionTypes'
import { InitialState } from '../InitialState'

export const CelebrityReducer = (state = InitialState, action) => {
  switch (action?.type) {
    case actionTypes.ADD_CELEBRITY_START:
      return {
        ...state, isLoading: true,
      }
    case actionTypes.ADD_CELEBRITY_SUCCESS:
      return {
        ...state, isLoading: false,
      }
    case actionTypes.ADD_CELEBRITY_FAILED:
      return {
        ...state, isLoading: false,
      }
    case actionTypes.GET_CELEBRITIES_START:
      return {
        ...state, isLoading: true,
      }
    case actionTypes.GET_CELEBRITIES_SUCCESS:
      return {
        ...state, isLoading: false, celebrities: action.payload,
      }
    case actionTypes.GET_CELEBRITIES_FAILED:
      return {
        ...state, isLoading: false,
      }
    default:
      return {
        ...state,
      }
  }
}
