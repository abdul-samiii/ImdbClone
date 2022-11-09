import { toastify, toastifyError } from '../../components/toastify'
import { actionTypes } from '../actionTypes'
import { httpRequest } from '../../config'

export const GetSearchResults = (type, searchWords) => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_SEARCH_RESULTS_START })
    const response = await httpRequest.get('search', {
      headers: {
        Authorization: `bearer ${window.localStorage.getItem('token')}`,
        type,
        searchWords,
      },
    })
    const result = response.data
    toastify(result.message)
    dispatch({ type: actionTypes.GET_SEARCH_RESULTS_SUCCESS, payload: result.searchResults })
  } catch (error) {
    dispatch({ type: actionTypes.GET_SEARCH_RESULTS_FAILED })
    toastifyError(error.response.data.message)
  }
}
