import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ActionCreators } from '../store'
import Loader from './Loader'

const CreateChannel = () => {
  const [channelName, setChannelName] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()
  const data = useSelector(item => item?.AuthReducer)
  const { CreateNewChannel } = bindActionCreators(ActionCreators, dispatch)

  const handleCreateChannel = () => {
    if (channelName && description) {
      const obj = {
        channelName,
        description,
        uid: window.localStorage.getItem('uid'),
      }
      CreateNewChannel(obj)
    } else {
      alert('Please Fill all fields!')
    }
  }
  return (
    <div className='md:w-1/2 m-auto shadow-xl pb-32'>
      { data?.isLoading && <Loader /> }
      <h1 className='text-[#E0B416] w-[80%] m-auto text-3xl font-bold text-center pb-8 mt-28'>You are one step away from becomming a Content Creator</h1>
      <div className='flex flex-col space-y-6 items-center'>
        <input
          value={channelName}
          onChange={(e) => setChannelName(e.target.value)}
          placeholder='Enter Channel Name'
          className='py-2 w-96 px-2 rounded-sm outline outline-1 outline-gray-400 capitalize'
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter Description'
          className='py-2 w-96 px-2 rounded-sm outline outline-1 outline-gray-400'
          type='password'
        />
        <button
          type='button'
          onClick={handleCreateChannel}
          className='py-2 w-96 px-2 rounded-sm bg-[#E0B416]'
        >
          Create Channel
        </button>
      </div>
    </div>
  )
}
export default CreateChannel
