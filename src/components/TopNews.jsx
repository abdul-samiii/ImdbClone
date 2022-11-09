import ChevronRight from '@mui/icons-material/ChevronRight'
import { ChevronRight as ChevronRightIcon } from '@mui/icons-material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import { ActionCreators } from '../store'

const TopNews = () => {
  const dispatch = useDispatch()
  const { GetAllEventsAction } = bindActionCreators(ActionCreators, dispatch)
  const EventsData = useSelector(item => item?.EventReducer?.events)
  useEffect(() => {
    GetAllEventsAction()
  }, [])

  return (
    <div>
      <div className=''>
        <div className='flex mt-8'>
          <h1 className='text-white text-2xl font-extrabold lg:ml-[17%] ml-2 border-l-4 pl-4 border-[#E0B416]'>Top news</h1>
          <ChevronRightIcon className='h-7 text-white mt-1' />
        </div>
        <Link to='/events' className='text-xs text-blue-400 md:ml-[70%] ml-[50%] font-bold cursor-pointer'>Get more recommended...</Link>
        <ChevronRight className='text-blue-400 -mt-1 md:ml-0 cursor-pointer' />
      </div>
      <div className='flex lg:ml-[17%] mt-4 overflow-x-scroll lg:w-[70%] space-x-4 h-full scrollbar-hide'>
        {
          EventsData.map((item) => (
            <div className='hover:opacity-90 group flex w-[70%]'>
              <img src={`http://localhost:5500/uploads/images/${item.img}`} alt='feature-img' className='h-[100%]' />
              <div className='w-[380px] ml-4'>
                <p className=' cursor-pointer text-white mt-2'>{item.title}</p>
                <p className='text-gray-500 cursor-pointer'>{item.channel.channelName}</p>
              </div>
            </div>
          ))
        }
      </div>
      <div className='flex space-x-2 md:space-x-4 ml-2 lg:ml-[17%] mt-6'>
        <p className='text-gray-400 border-[1px] w-fit py-1 px-2 text-sm rounded-3xl border-gray-400 cursor-pointer hover:text-white hover:border-white'>Top news</p>
        <p className='text-gray-400 border-[1px] w-fit py-1 px-2 text-sm rounded-3xl border-gray-400 cursor-pointer hover:text-white hover:border-white'>Movie news</p>
        <p className='text-gray-400 border-[1px] w-fit py-1 px-2 text-sm rounded-3xl border-gray-400 cursor-pointer hover:text-white hover:border-white'>TV news</p>
        <p className='text-gray-400 border-[1px] w-fit py-1 px-2 text-sm rounded-3xl border-gray-400 cursor-pointer hover:text-white hover:border-white'>Celebrity news</p>
      </div>
    </div>
  )
}
export default TopNews
