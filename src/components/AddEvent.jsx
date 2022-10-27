import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../store'
import { toastifyError } from './toastify'

const AddEvent = () => {
  const dispatch = useDispatch()
  const imgLink = useSelector(item => item?.UploadReducer)
  const { UploadImage } = bindActionCreators(ActionCreators, dispatch)
  const [image] = useState()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleFile = (e) => {
    const file = e.target.files[0]
    if (file) {
      UploadImage(file)
    }
  }
  const handleUploadEvent = () => {
    if (title && description) {
      if (imgLink) {
        // WIP
      } else {
        toastifyError('Something went wrong with image upload')
      }
    } else {
      toastifyError('Fill all fields')
    }
  }

  return (
    <div className=' lg:ml-[40%] ml-8 md:ml-[35%]'>
      <h1 className='text-[#E0B416] w-[80%] text-3xl font-bold ml-8  pb-8 mt-28'>Add Event on Channel</h1>
      <div className=''>
        <input
          placeholder='Enter event title'
          className='p-2 py-3 rounded-lg w-96'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='mt-4'>
        <textarea
          placeholder='Enter event description'
          className='p-2 rounded-lg w-96'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className='flex items-center p-4'>
        <p className='text-white p-2'>Upload the images of event</p>
        <label htmlFor='files' className='text-white font-bold border-2 p-1 py-2 rounded-lg hover:bg-[#E0B416] hover:border-[#E0B416]'>Upload Image</label>
        <input
          type='file'
          id='files'
          placeholder='Upload Image'
          className='hidden'
          value={image}
          onChange={(e) => handleFile(e)}
        />
      </div>
      <button
        className='p-2 rounded-lg w-96 bg-[#E0B416]'
        type='button'
        onClick={handleUploadEvent}
      >
        Add Event
      </button>
    </div>
  )
}
export default AddEvent
