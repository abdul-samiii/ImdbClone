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
  const {
    GetAllFreeTrailers,
    GetUser,
    AddTrailerReview,
    AddWatchlistTrailer,
  } = bindActionCreators(ActionCreators, dispatch)
  const FreeTrailerData = useSelector(item => item?.MovieReducer?.freeTrailers)
  const UserData = useSelector(item => item?.UserReducer?.user)

  let sum = 0
  let starFlag = 0

  const handleAddTrailerReview = (trailerId, ratings) => {
    window.localStorage.setItem('ratingUpdate', 0)
    window.localStorage.setItem('ratingUpdate', ratings)
    const obj = {
      channel: UserData?.channel,
      trailerId,
      ratings,
      trailer: true,
      user: window.localStorage.getItem('uid'),
    }
    AddTrailerReview(obj)
    GetAllFreeTrailers()
  }
  const handleAddToWatchlist = (trailerID, channel, type) => {
    const obj = {
      trailerID, channel, type,
    }
    AddWatchlistTrailer(obj)
  }

  useEffect(() => {
    GetAllFreeTrailers()
    GetUser(window.localStorage.getItem('uid'))
  }, [window.localStorage.getItem('ratingUpdate')])

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
              <div className='hidden'>
                {
              item?.reviews?.map((review) => {
                if (review.ratings) {
                  sum += review.ratings
                }
                UserData?.reviews?.map((userReview) => {
                  if (review._id === userReview._id) {
                    starFlag = userReview.ratings
                    console.log(starFlag)
                  }
                  return 0
                })
                return 0
              })
              }
                {
                  console.log('hihihihih', item.reviews.length)
                }
              </div>
              <video className='h-fit w-[300px] max-w-none rounded-t-xl'>
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
              <div className='justify-center mt-4'>
                <div className='flex justify-center'>
                  <StarIcon className='h-5 text-[#E0B416]' />
                  <p className='text-white ml-1 -mt-[1px]'>{item?.reviews[0] ? (sum / item.reviews.length) : 0 }</p>
                </div>
                <div className='flex justify-center mt-4 mb-4'>
                  { starFlag >= 1
                    ? (
                      <StarIcon
                        className='h-10 text-[#E0B416] ml-2 cursor-pointer hover:bg-[#534b4b] rounded-md px-2 py-2 -mt-2'
                        onClick={() => handleAddTrailerReview(item._id, 1)}
                      />
                    )
                    : (
                      <StarIconO
                        className='h-10 text-[#E0B416] ml-2 cursor-pointer hover:bg-[#534b4b] rounded-md px-2 py-2 -mt-2'
                        onClick={() => handleAddTrailerReview(item._id, 1)}
                      />
                    )}
                  { starFlag >= 2
                    ? (
                      <StarIcon
                        className='h-10 text-[#E0B416] ml-2 cursor-pointer hover:bg-[#534b4b] rounded-md px-2 py-2 -mt-2'
                        onClick={() => handleAddTrailerReview(item._id, 2)}
                      />
                    )
                    : (
                      <StarIconO
                        className='h-10 text-[#E0B416] ml-2 cursor-pointer hover:bg-[#534b4b] rounded-md px-2 py-2 -mt-2'
                        onClick={() => handleAddTrailerReview(item._id, 2)}
                      />
                    )}
                  { starFlag >= 3
                    ? (
                      <StarIcon
                        className='h-10 text-[#E0B416] ml-2 cursor-pointer hover:bg-[#534b4b] rounded-md px-2 py-2 -mt-2'
                        onClick={() => handleAddTrailerReview(item._id, 3)}
                      />
                    )
                    : (
                      <StarIconO
                        className='h-10 text-[#E0B416] ml-2 cursor-pointer hover:bg-[#534b4b] rounded-md px-2 py-2 -mt-2'
                        onClick={() => handleAddTrailerReview(item._id, 3)}
                      />
                    )}
                  { starFlag >= 4
                    ? (
                      <StarIcon
                        className='h-10 text-[#E0B416] ml-2 cursor-pointer hover:bg-[#534b4b] rounded-md px-2 py-2 -mt-2'
                        onClick={() => handleAddTrailerReview(item._id, 4)}
                      />
                    )
                    : (
                      <StarIconO
                        className='h-10 text-[#E0B416] ml-2 cursor-pointer hover:bg-[#534b4b] rounded-md px-2 py-2 -mt-2'
                        onClick={() => handleAddTrailerReview(item._id, 4)}
                      />
                    )}
                  { starFlag === 5
                    ? (
                      <StarIcon
                        className='h-10 text-[#E0B416] ml-2 cursor-pointer hover:bg-[#534b4b] rounded-md px-2 py-2 -mt-2'
                        onClick={() => handleAddTrailerReview(item._id, 5)}
                      />
                    )
                    : (
                      <StarIconO
                        className='h-10 text-[#E0B416] ml-2 cursor-pointer hover:bg-[#534b4b] rounded-md px-2 py-2 -mt-2'
                        onClick={() => handleAddTrailerReview(item._id, 5)}
                      />
                    )}
                </div>
              </div>
              <p className='text-white ml-4 cursor-pointer text-center'>{item.title}</p>
              <div
                className='flex justify-center mt-4 hover:bg-[#534b4b] cursor-pointer'
                onClick={() => handleAddToWatchlist(item._id, item.channel, 'free')}
                role='presentation'
              >
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
              <div className='hidden'>
                { starFlag = 0 }
                { sum = 0 }
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}
export default WhatToWatch
