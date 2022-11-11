import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Footer, Nav } from '../components'
import { baseurl } from '../config'
import { ActionCreators } from '../store'

const BrowseEvents = () => {
  const dispatch = useDispatch()
  const {
    GetChannel,
    GetAllEventsAction,
    GetUser,
  } = bindActionCreators(ActionCreators, dispatch)
  const channelData = useSelector(item => item?.ChannelReducer?.channel)
  const userData = useSelector(item => item?.UserReducer?.user)
  const EventsData = useSelector(item => item?.EventReducer?.events)

  useEffect(() => {
    GetUser(window.localStorage.getItem('uid'))
    GetChannel()
    GetAllEventsAction()
  }, [userData?.channel])

  return (
    <div>
      <Nav />
      <div className=''>
        <h1 className='text-2xl mt-20 text-white ml-16 text-center'>Welcome to <span className='text-[#E0B416]'>{channelData?.channelName}</span></h1>
        <div className='mt-4 grid lg:grid-cols-4 md:grid-cols-2 gap-y-4 h-full mx-2 md:ml-[10%] scrollbar-hide'>
          {
          EventsData?.map((item) => (
            <div className='hover:opacity-90 group flex'>
              <img src={`${baseurl}uploads/images/${item.img}`} alt='feature-img' className='h-[100%]' />
              <div className='w-[380px] ml-4'>
                <p className=' cursor-pointer text-white mt-2'>{item.title}</p>
                <p className='text-gray-500 cursor-pointer'>{item.channel.channelName}</p>
                {/* <div className='flex text-xs font-bold space-x-2 cursor-pointer w-fit'
                  onClick={() => handleDeleteEvent(item._id)} role='presentation'>
                  <TrashIcon
                  className='h-4 mt-[1px] text-white font-bold group-hover:text-[#E0B416]' />
                  <p className='text-white group-hover:text-[#E0B416]'>Delete</p>
                </div> */}
              </div>
            </div>
          ))
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default BrowseEvents
