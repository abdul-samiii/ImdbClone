import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../store'

const ChannelMenu = () => {
  const dispatch = useDispatch()
  const { GetChannel } = bindActionCreators(ActionCreators, dispatch)
  const channelData = useSelector(item => item?.ChannelReducer?.channel)
  useEffect(() => {
    GetChannel()
  }, [])

  return (
    <div className='lg:ml-[40%] md:ml-[25%]'>
      <h1 className='text-2xl mt-20 text-white ml-16'>Welcome to <span className='text-[#E0B416]'>{channelData?.channelName}</span></h1>
      <div className='flex space-x-2 mx-2 mt-14'>
        <div className='space-y-2'>
          <h2 className='text-white font-bold text-lg bg-[#363232] w-52 text-center p-2 rounded-sm hover:scale-105  transition duration-300 ease-in-out cursor-pointer'><Link to='/addevent'>Add an Event</Link></h2>
          <h2 className='text-white font-bold text-lg bg-[#363232] w-52 text-center p-2 rounded-sm hover:scale-105  transition duration-300 ease-in-out cursor-pointer'><Link to='/addtrailer'>Add a Trailer</Link></h2>
        </div>
        <div className='space-y-2'>
          <h2 className='text-white font-bold text-lg bg-[#363232] w-52 text-center p-2 rounded-sm hover:scale-105  transition duration-300 ease-in-out cursor-pointer'>Add a Celebrity</h2>
          <h2 className='text-white font-bold text-lg bg-[#363232] w-52 text-center p-2 rounded-sm hover:scale-105  transition duration-300 ease-in-out cursor-pointer'>Upload DP</h2>
        </div>
      </div>
    </div>
  )
}
export default ChannelMenu
