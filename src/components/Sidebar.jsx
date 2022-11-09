import { PlayCircleIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'

// import { sideData } from '../data'
import { ActionCreators } from '../store'

const Sidebar = () => {
  const dispatch = useDispatch()
  const {
    GetAllFreeTrailers,
    GetUser,
  } = bindActionCreators(ActionCreators, dispatch)
  const FreeTrailerData = useSelector(item => item?.MovieReducer?.freeTrailers)
  // const UserData = useSelector(item => item?.UserReducer?.user)
  const FreeTrailerDataSlice = FreeTrailerData.slice(0, 3)
  useEffect(() => {
    GetAllFreeTrailers()
    GetUser(window.localStorage.getItem('uid'))
  }, [window.localStorage.getItem('ratingUpdate')])

  return (
    <div className='lg:w-[30%] mt-4 lg:-ml-80 z-50 md:ml-24 ml-4 sidebarResponsive'>
      <h2 className='text-[#E0B416] text-2xl lg:mt-4 font-extrabold'>Up Next</h2>
      {FreeTrailerDataSlice.map((item) => (
        <div className='flex mt-8 hover:bg-[#121212] w-full'>
          {/* <img src={item.img} alt='side-img' className='h-36' /> */}
          <video className='h-36'>
            <source src={`http://localhost:5500/uploads/videos/${item.link}`} type='video/mp4' />
          </video>
          <div className='ml-4 mt-4'>
            <div className='flex'>
              <PlayCircleIcon className='h-7 text-white' />
              <p className='text-gray-300 ml-2 mt-1'>{item.duration}</p>
            </div>
            <div>
              <p className='text-white'>{item.title}</p>
              <p className='text-gray-500 text-sm'>Watch the Trailer</p>
            </div>
          </div>
        </div>
      ))}
      <div className='flex group w-fit cursor-pointer'>
        <Link to='/trailers' className='group-hover:text-[#E0B416] text-white text-2xl mt-4 font-bold'>Browse Trailers</Link>
        <ChevronRightIcon className='h-4 text-white group-hover:text-[#E0B416] mt-6 ml-2' />
      </div>
    </div>
  )
}
export default Sidebar
