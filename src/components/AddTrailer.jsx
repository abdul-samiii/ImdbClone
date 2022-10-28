import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../store'
import { toastify, toastifyError } from './toastify'

const AddTrailer = () => {
  const [pro, setPro] = useState(false)
  const [free, setFree] = useState(true)
  const [title, setTitle] = useState('')

  const handleTrailerType = () => {
    setPro(!pro)
    setFree(!free)
  }
  const dispatch = useDispatch()
  const videoLink = useSelector(item => item?.UploadReducer?.videoLink)
  const channel = useSelector(item => item?.ChannelReducer?.channel?._id)
  const { UploadVideo, GetChannel, AddTrailerAction } = bindActionCreators(ActionCreators, dispatch)

  const handleVideoUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      UploadVideo(file)
    }
    toastify(videoLink)
  }
  const handleUploadEvent = () => {
    const type = free ? 'free' : 'pro'
    if (title && channel) {
      if (videoLink) {
        const obj = {
          title, videoLink, channel, type,
        }
        AddTrailerAction(obj)
      } else {
        toastifyError('Something went wrong with image upload')
      }
    } else {
      toastifyError('Fill all fields')
    }
  }

  useEffect(() => {
    GetChannel()
  }, [])

  return (
    <div className=' lg:ml-[40%] ml-8 md:ml-[35%]'>
      <h1 className='text-[#E0B416] w-[80%] text-3xl font-bold ml-8  pb-8 mt-28'>Add Trailer on Channel</h1>
      <div className=''>
        <input
          placeholder='Enter Movie Title'
          className='p-2 py-3 rounded-lg w-96'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='mt-4'>
        <div>
          <input
            type='radio'
            value={free}
            onChange={handleTrailerType}
            checked={free && true}
          />
          <label className='text-white ml-2'>For free members</label>
        </div>
        <div>
          <input
            type='radio'
            value={pro}
            onChange={handleTrailerType}
            checked={pro && true}
          />
          <label className='text-white ml-2'>For Pro members</label>
        </div>
      </div>
      <div className='flex items-center p-4'>
        <p className='text-white p-2'>Upload Trailer of Movie</p>
        <label htmlFor='files' className='text-white font-bold border-2 p-1 py-2 rounded-lg hover:bg-[#E0B416] hover:border-[#E0B416]'>Upload Video</label>
        <input
          type='file'
          id='files'
          placeholder='Upload Video'
          className='hidden'
          onChange={handleVideoUpload}
        />
      </div>
      <button
        className='p-2 rounded-lg w-96 bg-[#E0B416]'
        type='button'
        onClick={handleUploadEvent}
      >
        Add Trailer
      </button>
    </div>
  )
}
export default AddTrailer
