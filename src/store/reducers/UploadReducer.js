import { actionTypes } from '../actionTypes'
import { InitialState } from '../InitialState'

export const UploadReducer = (state = InitialState, action) => {
  switch (action?.type) {
    case actionTypes.UPLOAD_IMAGE_START:
      return {
        ...state, isLoading: true,
      }
    case actionTypes.UPLOAD_IMAGE_SUCCESS:
      return {
        ...state, isLoading: false, imgLink: action.payload,
      }
    case actionTypes.UPLOAD_IMAGE_FAILED:
      return {
        ...state, isLoading: false,
      }
    case actionTypes.UPLOAD_VIDEO_START:
      return {
        ...state, isLoading: true,
      }
    case actionTypes.UPLOAD_VIDEO_SUCCESS:
      return {
        ...state, isLoading: false, videoLink: action.payload,
      }
    case actionTypes.UPLOAD_VIDEO_FAILED:
      return {
        ...state, isLoading: false,
      }
    default:
      return {
        ...state,
      }
  }
}
