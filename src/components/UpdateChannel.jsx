import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ActionCreators } from '../store'
import Loader from './Loader'

const UpdateChannel = () => {
  const dispatch = useDispatch()
  const data = useSelector(item => item?.ChannelReducer)
  const { GetChannel, UpdateChannelAction } = bindActionCreators(ActionCreators, dispatch)
  const channelData = useSelector(item => item?.ChannelReducer?.channel)
  const [channelName, setChannelName] = useState(channelData?.channelName)
  const [description, setDescription] = useState(channelData.description)
  const handleGetChannel = async () => {
    GetChannel()
  }
  useEffect(() => {
    handleGetChannel()
  }, [])
  const handleUpdateChannel = () => {
    if (channelName && description) {
      const obj = {
        channelName,
        description,
        uid: window.localStorage.getItem('uid'),
      }
      UpdateChannelAction(obj)
    } else {
      alert('Please Fill all fields!')
    }
  }

  return (
    <div className='md:w-1/2 m-auto shadow-xl pb-32'>
      { data?.isLoading && <Loader /> }
      <h1 className='text-[#E0B416] w-[80%] m-auto text-3xl font-bold text-center pb-8 mt-28'>Edit Channel Information</h1>
      <div className='flex flex-col space-y-6 items-center'>
        <input
          value={channelName ?? channelData.channelName}
          onChange={(e) => setChannelName(e.target.value)}
          placeholder='Enter Channel Name'
          className='py-2 w-96 px-2 rounded-sm outline outline-1 outline-gray-400 capitalize'
        />
        <textarea
          value={description ?? channelData.description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter Description'
          className='py-2 w-96 px-2 rounded-sm outline outline-1 outline-gray-400'
          type='password'
        />
        <button
          type='button'
          onClick={handleUpdateChannel}
          className='py-2 w-96 px-2 rounded-sm bg-[#E0B416]'
        >
          Update Channel
        </button>
      </div>
    </div>
  )
}
export default UpdateChannel
