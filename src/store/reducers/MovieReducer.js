import { actionTypes } from '../actionTypes'
import { InitialState } from '../InitialState'

export const MovieReducer = (state = InitialState, action) => {
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
    case actionTypes.GET_FREE_TRAILER_START:
      return {
        ...state, isLoading: true,
      }
    case actionTypes.GET_FREE_TRAILER_SUCCESS:
      return {
        ...state, isLoading: false, freeTrailers: action.payload,
      }
    case actionTypes.GET_FREE_TRAILER_FAILED:
      return {
        ...state, isLoading: false,
      }
    case actionTypes.ADD_MOVIE_IMAGE_START:
      return {
        ...state, isLoading: true,
      }
    case actionTypes.ADD_MOVIE_IMAGE_SUCCESS:
      return {
        ...state, isLoading: false,
      }
    case actionTypes.ADD_MOVIE_IMAGE_FAILED:
      return {
        ...state, isLoading: false,
      }
    case actionTypes.GET_MOVIE_IMAGE_START:
      return {
        ...state, isLoading: true,
      }
    case actionTypes.GET_MOVIE_IMAGE_SUCCESS:
      return {
        ...state, isLoading: false, freeImages: action.payload,
      }
    case actionTypes.GET_MOVIE_IMAGE_FAILED:
      return {
        ...state, isLoading: false,
      }
    default:
      return {
        ...state,
      }
  }
}
