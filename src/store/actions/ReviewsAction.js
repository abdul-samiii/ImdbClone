import qs from 'qs'

import { toastify, toastifyError } from '../../components/toastify'
import { actionTypes } from '../actionTypes'
import { httpRequest } from '../../config'

export const GetUsersReviewedTrailers = () => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_USERS_TRAILERS_REVIEWS_START })
    const response = await httpRequest.get(`review/trailer/${window.localStorage.getItem('uid')}`, {
      headers: {
        Authorization: `bearer ${window.localStorage.getItem('token')}`,
      },
    })
    const result = response.data
    // toastify(result.message)
    dispatch({
      type: actionTypes.GET_USERS_TRAILERS_REVIEWS_SUCCESS,
      payload: result.trailerReview,
    })
  } catch (error) {
    dispatch({ type: actionTypes.GET_USERS_TRAILERS_REVIEWS_FAILED })
    toastifyError(error.response.data.message)
  }
}

export const GetAllUserReviews = () => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_ALL_USER_RATINGS_START })
    const response = await httpRequest.get(`review/${window.localStorage.getItem('uid')}`, {
      headers: {
        Authorization: `bearer ${window.localStorage.getItem('token')}`,
      },
    })
    const result = response.data
    // toastify(result.message)
    dispatch({
      type: actionTypes.GET_ALL_USER_RATINGS_SUCCESS,
      payload: result.trailerReview,
    })
  } catch (error) {
    dispatch({ type: actionTypes.GET_ALL_USER_RATINGS_FAILED })
    toastifyError(error.response.data.message)
  }
}

export const AddTrailerReview = (data) => async dispatch => {
  console.log('hihihihihihihi')
  try {
    dispatch({ type: actionTypes.ADD_TRAILER_REVIEW_START })
    const queryData = qs.stringify(data)
    const response = await httpRequest.post('review/trailer', queryData, {
      headers: {
        Authorization: `bearer ${window.localStorage.getItem('token')}`,
      },
    })
    const result = response.data
    toastify(result.message)
    dispatch({
      type: actionTypes.ADD_TRAILER_REVIEW_SUCCESS,
      payload: result.trailerReview,
    })
  } catch (error) {
    dispatch({ type: actionTypes.ADD_TRAILER_REVIEW_FAILED })
    toastifyError(error.response.data.message)
  }
}
