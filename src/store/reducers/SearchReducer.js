import { actionTypes } from '../actionTypes'
import { InitialState } from '../InitialState'

export const SearchReducer = (state = InitialState, action) => {
  switch (action?.type) {
    case actionTypes.GET_SEARCH_RESULTS_START:
      return {
        ...state, isLoading: true,
      }
    case actionTypes.GET_SEARCH_RESULTS_SUCCESS:
      return {
        ...state, isLoading: false, searchData: action.payload,
      }
    case actionTypes.GET_SEARCH_RESULTS_FAILED:
      return {
        ...state, isLoading: false,
      }
    default:
      return {
        ...state,
      }
  }
}
