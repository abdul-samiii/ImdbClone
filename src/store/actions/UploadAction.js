import { toastify, toastifyError } from '../../components/toastify'
import { httpRequest } from '../../config'
import { actionTypes } from '../actionTypes'

// UPLOAD IMAGE
export const UploadImage = (imgFile) => async dispatch => {
  const formData = new FormData()
  formData.append('images', imgFile)
  try {
    dispatch({ type: actionTypes.UPLOAD_IMAGE_START })
    const response = await httpRequest.post('upload/img', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    const result = response.data
    console.log('Here we Go! ', response)
    toastify(result.imgLink)
    dispatch({ type: actionTypes.UPLOAD_IMAGE_SUCCESS, payload: result.imgLink })
  } catch (error) {
    console.log('Error : --- ', error)
    toastifyError(error.response.data.message)
    dispatch({ type: actionTypes.UPLOAD_IMAGE_FAILED })
  }
}
