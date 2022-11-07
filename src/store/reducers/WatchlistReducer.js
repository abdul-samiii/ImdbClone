import { actionTypes } from '../actionTypes'
import { InitialState } from '../InitialState'

export const WatchlistReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_WATCHLIST_START:
      return {
        ...state, isLoading: true,
      }
    case actionTypes.ADD_WATCHLIST_SUCCESS:
      return {
        ...state, isLoading: false,
      }
    case actionTypes.ADD_WATCHLIST_FAILED:
      return {
        ...state, isLoading: false,
      }
    case actionTypes.GET_WATCHLIST_START:
      return {
        ...state, isLoading: true,
      }
    case actionTypes.GET_WATCHLIST_SUCCESS:
      return {
        ...state, isLoading: false, watchlist: action.payload,
      }
    case actionTypes.GET_WATCHLIST_FAILED:
      return {
        ...state, isLoading: false,
      }
    default:
      return {
        ...state,
      }
  }
}
