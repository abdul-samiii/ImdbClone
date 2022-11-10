import qs from 'qs'

import { toastify, toastifyError } from '../../components/toastify'
import { actionTypes } from '../actionTypes'
import { httpRequest } from '../../config'

export const AddTrailerAction = (data) => async dispatch => {
  try {
    dispatch({ type: actionTypes.ADD_TRAILER_START })
    const queryData = qs.stringify(data)
    const response = await httpRequest.post('movies/addtrailer', queryData, {
      headers: {
        Authorization: `bearer ${window.localStorage.getItem('token')}`,
      },
    })
    const result = response.data
    toastify(result.message)
    dispatch({ type: actionTypes.ADD_TRAILER_SUCCESS, payload: result })
  } catch (error) {
    dispatch({ type: actionTypes.ADD_TRAILER_FAILED })
    toastifyError(error.response.data.message)
  }
}

export const GetAllFreeTrailers = () => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_FREE_TRAILER_START })
    const response = await httpRequest.get('movies/freetrailer', {
      headers: {
        Authorization: `bearer ${window.localStorage.getItem('token')}`,
      },
    })
    const result = response.data
    // toastify(result.message)
    dispatch({ type: actionTypes.GET_FREE_TRAILER_SUCCESS, payload: result.freeMovies })
  } catch (error) {
    dispatch({ type: actionTypes.GET_FREE_TRAILER_FAILED })
    toastifyError(error.response.data.message)
  }
}

export const AddMovieImageAction = (data) => async dispatch => {
  try {
    dispatch({ type: actionTypes.ADD_MOVIE_IMAGE_START })
    const queryData = qs.stringify(data)
    const response = await httpRequest.post('movies/addmovieimage', queryData, {
      headers: {
        Authorization: `bearer ${window.localStorage.getItem('token')}`,
      },
    })
    const result = response.data
    toastify(result.message)
    dispatch({ type: actionTypes.ADD_MOVIE_IMAGE_SUCCESS, payload: result })
  } catch (error) {
    dispatch({ type: actionTypes.ADD_MOVIE_IMAGE_FAILED })
    toastifyError(error.response.data.message)
  }
}

export const GetAllFreeImages = () => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_MOVIE_IMAGE_START })
    const response = await httpRequest.get('movies/freeimages', {
      headers: {
        Authorization: `bearer ${window.localStorage.getItem('token')}`,
      },
    })
    const result = response.data
    // toastify(result.message)
    dispatch({ type: actionTypes.GET_MOVIE_IMAGE_SUCCESS, payload: result.freeMoviesImage })
  } catch (error) {
    dispatch({ type: actionTypes.GET_MOVIE_IMAGE_FAILED })
    toastifyError(error.response.data.message)
  }
}
