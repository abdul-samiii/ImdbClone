import { actionTypes } from '../actionTypes'
import { InitialState } from '../InitialState'

export const ReviewReducer = (state = InitialState, action) => {
  switch (action?.type) {
    case actionTypes.GET_ALL_USER_RATINGS_START:
      return {
        ...state, isLoading: true,
      }
    case actionTypes.GET_ALL_USER_RATINGS_SUCCESS:
      return {
        ...state, isLoading: false, userRatings: action.payload,
      }
    case actionTypes.GET_ALL_USER_RATINGS_FAILED:
      return {
        ...state, isLoading: false,
      }
    default:
      return {
        ...state,
      }
  }
}