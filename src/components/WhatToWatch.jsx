import { useEffect } from 'react'
import List from '@mui/icons-material/List'
import PhotoLibrary from '@mui/icons-material/PhotoLibrary'
import ChevronRight from '@mui/icons-material/ChevronRight'
import PlayArrow from '@mui/icons-material/PlayArrow'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { StarIcon, PlusIcon } from '@heroicons/react/24/solid'
import { StarIcon as StarIconO } from '@heroicons/react/24/outline'

import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../store'

const WhatToWatch = () => {
  const dispatch = useDispatch()
  const { GetAllFreeTrailers } = bindActionCreators(ActionCreators, dispatch)
  const FreeTrailerData = useSelector(item => item?.MovieReducer?.freeTrailers)
  useEffect(() => {
    GetAllFreeTrailers()
  }, [])

  // const Data = [
  //   {
  //     id: 1,
  //     img: IMAGES.watch1,
  //     ratings: 7.2,
  //     title: '777 Charlie',
  //   },
  //   {
  //     id: 2,
  //     img: IMAGES.watch2,
  //     ratings: 9.6,
  //     title: 'K.G.F Chapter 2',
  //   },
  //   {
  //     id: 3,
  //     img: IMAGES.watch3,
  //     ratings: 6.7,
  //     title: 'Karthikeya 2',
  //   },
  //   {
  //     id: 4,
  //     img: IMAGES.watch4,
  //     ratings: 5.8,
  //     title: 'Garuda Gamana Vrishabha Vahana',
  //   },
  //   {
  //     id: 5,
  //     img: IMAGES.watch5,
  //     ratings: 9.3,
  //     title: 'Vikrant Rona',
  //   },
  // ]

  return (
    <>
      <div className='flex mt-16'>
        <h1 className='text-[#E0B416] text-3xl font-extrabold lg:ml-[17%] ml-2'>What to watch</h1>
        <p className='text-xs text-blue-400 ml-[40%] font-bold cursor-pointer'>Get more recommended...</p>
        <ChevronRight className='text-blue-400 -mt-1 md:ml-0 cursor-pointer' />
      </div>
      <div className='flex mt-8'>
        <h1 className='text-white text-2xl font-extrabold lg:ml-[17%] ml-2 border-l-4 pl-4 border-[#E0B416]'>Top picks</h1>
        <ChevronRight className='h-7 text-white mt-1' />
      </div>
      <p className='text-gray-400 lg:ml-[17%] mt-2 ml-2'>TV Shows and movies just for you</p>
      <div className='flex lg:ml-[17%] lg:w-[75%] mt-4 overflow-x-scroll space-x-6 scrollbar-hide'>
        {
          FreeTrailerData.map((item) => (
            <div className='relative bg-[#1A1A1A] hover:opacity-70 rounded-b-xl pb-4'>
              {/* <img src={item.img} alt='feature-img' className='h-64 w-56' /> */}
              <video className='h-fit w-[300px] max-w-none'>
                <source src={`http://localhost:5500/uploads/videos/${item.link}`} type='video/mp4' />
              </video>
              { item.list && (
                <div className='flex absolute -mt-6'>
                  <List className=' ml-2 h-10 font-extrabold text-white' />
                  <p className='text-white font-bold ml-1'>List</p>
                </div>
              )}
              { item.photos && (
                <div className='flex absolute -mt-7'>
                  <PhotoLibrary className=' ml-2 h-10 font-extrabold text-white' />
                  <p className='text-white font-bold ml-1'>Photos</p>
                </div>
              )}
              <div className='flex m-4'>
                <StarIcon className='h-5 text-[#E0B416]' />
                <p className='text-white ml-1'>{item.ratings}</p>
                <StarIconO className='h-10 text-blue-400 ml-10 cursor-pointer hover:bg-[#534b4b] rounded-md px-2 py-2 -mt-2' />
              </div>
              <p className='text-white ml-4 w-44 cursor-pointer text-center'>{item.title}</p>
              <div className='flex justify-center mt-4 hover:bg-[#534b4b] cursor-pointer'>
                <PlusIcon className='h-6 text-blue-400' />
                <p className='text-blue-400'>Watchlist</p>
              </div>
              <div className='flex justify-center mt-2'>
                <div className='flex hover:bg-[#534b4b] p-2 rounded-sm space-x-2 cursor-pointer'>
                  <PlayArrow className='h-7 text-white' />
                  <p className='text-white'>Trailer</p>
                </div>
                <InfoOutlinedIcon className='text-white h-4 ml-4 mt-2 hover:bg-[#534b4b] rounded-3xl cursor-pointer' />
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}
export default WhatToWatch
