import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ActionCreators } from '../store'
import Loader from './Loader'

const DeleteChannel = () => {
  const [channelName, setChannelName] = useState('')
  const dispatch = useDispatch()
  const data = useSelector(item => item?.AuthReducer)
  const { DeleteChannelAction, GetChannel } = bindActionCreators(ActionCreators, dispatch)
  const channelData = useSelector(item => item?.ChannelReducer?.channel)
  useEffect(() => {
    GetChannel()
  }, [])

  const handleDeleteChannel = () => {
    if (channelName === channelData?.channelName) {
      DeleteChannelAction()
    } else {
      alert('Enter your current channel')
    }
  }

  return (
    <div className='md:w-1/2 m-auto shadow-xl pb-32'>
      { data?.isLoading && <Loader /> }
      <h1 className='text-red-500 w-[80%] m-auto text-3xl font-bold text-center pb-8 mt-28 uppercase'>Warning!</h1>
      <div className='flex flex-col space-y-6 items-center'>
        <h2 className='w-1/2 text-center text-2xl'>This action is non-reversable. All your videos,
          images and data will be permanently deleted
        </h2>
        <h3>Please type your channel name . <span className='font-bold'>{channelData.channelName}</span></h3>
        <input
          value={channelName}
          onChange={(e) => setChannelName(e.target.value)}
          placeholder='Enter Channel Name'
          className='py-2 w-96 px-2 rounded-sm outline outline-1 outline-gray-400 capitalize'
        />
        <button
          type='button'
          onClick={handleDeleteChannel}
          className='py-2 w-96 px-2 rounded-sm bg-[#E0B416]'
        >
          Create Channel
        </button>
      </div>
    </div>
  )
}
export default DeleteChannel
