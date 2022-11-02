import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ChevronRight } from '@mui/icons-material'
import { PlayCircleIcon } from '@heroicons/react/24/outline'
import { BookmarkIcon } from '@heroicons/react/24/solid'

import { ActionCreators } from '../store'

const CommingSoon = () => {
  const dispatch = useDispatch()
  const { GetAllFreeTrailers } = bindActionCreators(ActionCreators, dispatch)
  const FreeTrailerData = useSelector(item => item?.MovieReducer?.freeTrailers)
  useEffect(() => {
    GetAllFreeTrailers()
  }, [])
  // const Data = [
  //   {
  //     id: 1,
  //     img: IMAGES.comming1,
  //     date: 'DEC 21',
  //     title: 'Black Adam',
  //     duration: '1:22',
  //   },
  //   {
  //     id: 2,
  //     img: IMAGES.comming2,
  //     date: 'DEC 21',
  //     title: 'Spirited',
  //     duration: '2:32',
  //   },
  //   {
  //     id: 3,
  //     img: IMAGES.comming3,
  //     date: 'DEC 10',
  //     title: 'Black Panther: Wakanda Forever',
  //     duration: '1:32',
  //   },
  //   {
  //     id: 4,
  //     img: IMAGES.comming4,
  //     date: 'DEC 5',
  //     title: 'The Banshees of Inisherin',
  //     duration: '4:12',
  //   },
  // ]
  return (
    <div>
      <div className='flex mt-8'>
        <h1 className='text-white text-2xl font-extrabold lg:ml-[17%] ml-2 border-l-4 pl-4 border-[#E0B416]'>Comming soon to theaters</h1>
        <ChevronRight className='h-8 text-white mt-[6px]' />
      </div>
      <div className='flex lg:ml-[17%] mt-4 overflow-x-scroll lg:w-[75%] space-x-4 h-full pb-28 scrollbar-hide'>
        {
          FreeTrailerData?.map((item) => (
            <div className='hover:opacity-90 group'>
              {/* <img src='http://localhost:5500/uploads/videos/1666977999403.mp4' alt='feature-img' className='h-[100%] w-[300px] max-w-none' /> */}
              <video className='h-[100%] w-[300px] max-w-none' controls>
                <source src={`http://localhost:5500/uploads/videos/${item.link}`} type='video/mp4' />
              </video>
              <div className='flex -mt-8'>
                <PlayCircleIcon className=' ml-2 h-7 font-extrabold text-white group-hover:text-[#E0B416]' />
                <p className='text-white font-bold ml-1 mt-[2px] group-hover:text-[#E0B416]'>{item.duration}</p>
              </div>
              <div className='flex mt-2'>
                <div className='cursor-pointer'>
                  <BookmarkIcon className='h-12 text-[#383535] hover:text-[#575151]' />
                  <p className='text-white ml-[18px] -mt-10 z-50 text-xl'>+</p>
                </div>
                <div className='mt-1 ml-2'>
                  <p className='text-white'>{item.duration}</p>
                  <p className=' cursor-pointer text-white z-50 font-thin'>{item.title}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default CommingSoon
