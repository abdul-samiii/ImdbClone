import { actionTypes } from '../actionTypes'
import { InitialState } from '../InitialState'

export const TrailerReducer = (state = InitialState, action) => {
  switch (action?.type) {
    case actionTypes.ADD_TRAILER_START:
      return {
        ...state, isLoading: true,
      }
    case actionTypes.ADD_TRAILER_SUCCESS:
      return {
        ...state, isLoading: false,
      }
    case actionTypes.ADD_TRAILER_FAILED:
      return {
        ...state, isLoading: false,
      }
    default:
      return {
        ...state,
      }
  }
}
