import { useEffect } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
import { StarIcon as StarIconO } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Footer, Nav } from '../components'
import { ActionCreators } from '../store'
import { baseurl } from '../config'

const TrailerSearchResults = () => {
  const dispatch = useDispatch()
  const {
    GetChannel,
    GetUser,
    GetAllFreeTrailers,
    AddTrailerReview,
  } = bindActionCreators(ActionCreators, dispatch)
  // const channelData = useSelector(item => item?.ChannelReducer?.channel)
  const userData = useSelector(item => item?.UserReducer?.user)
  const FreeTrailerData = useSelector(item => item?.SearchReducer?.searchData)
  console.log('Search data : ', useSelector(item => item?.Reducer))
  let sum = 0
  let starFlag = 0
  const handleAddTrailerReview = (trailerId, ratings) => {
    window.localStorage.setItem('ratingUpdate', 0)
    window.localStorage.setItem('ratingUpdate', ratings)

    const obj = {
      channel: userData?.channel,
      trailerId,
      ratings,
      trailer: true,
      user: window.localStorage.getItem('uid'),
    }
    AddTrailerReview(obj)
    GetAllFreeTrailers()
  }

  useEffect(() => {
    GetUser(window.localStorage.getItem('uid'))
    GetChannel()
    GetAllFreeTrailers()
  }, [window.localStorage.getItem('ratingUpdate')])

  return (
    <div>
      <Nav />
      <div className='h-fit pb-44'>
        <div className='mt-14 text-white lg:ml-16 text-center'>
          {/* <h1 className='text-2xl'>Welcome to
          <span className='text-[#E0B416]'>{channelData?.channelName}</span></h1> */}
          <h1 className='text-2xl tracking-widest'>{FreeTrailerData.length} Results Found</h1>
        </div>
        <div className='mt-14 grid justify-center lg:grid-cols-4 md:grid-cols-2 gap-y-12 h-full mx-2 md:ml-[5%] scrollbar-hide'>
          {
          FreeTrailerData?.map((watchlist) => (
            <div className='hover:opacity-90 group'>
              <div className='hidden'>
                {
                watchlist?.reviews?.map((review) => {
                  if (review?.ratings) {
                    sum += review.ratings
                  }
                  userData?.reviews?.map((userReview) => {
                    if (review?._id === userReview?._id) {
                      starFlag = userReview?.ratings
                      console.log('starFlag', starFlag)
                    }
                    return 0
                  })
                  return 0
                })
                }
              </div>
              <video className='h-fit w-[350px] max-w-none rounded-t-lg' controls>
                <source src={`${baseurl}uploads/videos/${watchlist.link}`} type='video/mp4' />
              </video>
              <div className='w-[350px] bg-[#1A1A1A] p-4 rounded-b-lg'>
                <div className='flex'>
                  <div>
                    <p className=' cursor-pointer text-white'>{watchlist.title}</p>
                    <p className='text-gray-500 cursor-pointer text-xs font-thin'>{watchlist.channel.channelName}</p>
                  </div>
                  <div className='flex ml-20 m-auto'>
                    <StarIcon className='h-5 text-[#E0B416]' />
                    <p className=' ml-1 -mt-[1px] text-white'>{watchlist?.reviews[0] ? Number(sum / watchlist.reviews.length).toFixed(2) : 0 }{watchlist.reviews.length > 0 && `(${watchlist.reviews.length})` }</p>
                    <p className='text-gray-600 text-sm mx-2'>Rating</p>
                  </div>
                </div>
                <div className='flex mb-4'>
                  { starFlag >= 1
                    ? (
                      <StarIcon
                        className='h-10 text-[#E0B416] ml-2 cursor-pointer hover:bg-[#534b4b] rounded-md px-2 py-2 -mt-2'
                        onClick={() => handleAddTrailerReview(watchlist?._id, 1)}
                      />
                    )
                    : (
                      <StarIconO
                        className='h-10 text-[#E0B416] ml-2 cursor-pointer hover:bg-[#534b4b] rounded-md px-2 py-2 -mt-2'
                        onClick={() => handleAddTrailerReview(watchlist?._id, 1)}
                      />
                    )}
                  { starFlag >= 2
                    ? (
                      <StarIcon
                        className='h-10 text-[#E0B416] ml-2 cursor-pointer hover:bg-[#534b4b] rounded-md px-2 py-2 -mt-2'
                        onClick={() => handleAddTrailerReview(watchlist?._id, 2)}
                      />
                    )
                    : (
                      <StarIconO
                        className='h-10 text-[#E0B416] ml-2 cursor-pointer hover:bg-[#534b4b] rounded-md px-2 py-2 -mt-2'
                        onClick={() => handleAddTrailerReview(watchlist?._id, 2)}
                      />
                    )}
                  { starFlag >= 3
                    ? (
                      <StarIcon
                        className='h-10 text-[#E0B416] ml-2 cursor-pointer hover:bg-[#534b4b] rounded-md px-2 py-2 -mt-2'
                        onClick={() => handleAddTrailerReview(watchlist?._id, 3)}
                      />
                    )
                    : (
                      <StarIconO
                        className='h-10 text-[#E0B416] ml-2 cursor-pointer hover:bg-[#534b4b] rounded-md px-2 py-2 -mt-2'
                        onClick={() => handleAddTrailerReview(watchlist?._id, 3)}
                      />
                    )}
                  { starFlag >= 4
                    ? (
                      <StarIcon
                        className='h-10 text-[#E0B416] ml-2 cursor-pointer hover:bg-[#534b4b] rounded-md px-2 py-2 -mt-2'
                        onClick={() => handleAddTrailerReview(watchlist?._id, 4)}
                      />
                    )
                    : (
                      <StarIconO
                        className='h-10 text-[#E0B416] ml-2 cursor-pointer hover:bg-[#534b4b] rounded-md px-2 py-2 -mt-2'
                        onClick={() => handleAddTrailerReview(watchlist?._id, 4)}
                      />
                    )}
                  { starFlag === 5
                    ? (
                      <StarIcon
                        className='h-10 text-[#E0B416] ml-2 cursor-pointer hover:bg-[#534b4b] rounded-md px-2 py-2 -mt-2'
                        onClick={() => handleAddTrailerReview(watchlist?._id, 5)}
                      />
                    )
                    : (
                      <StarIconO
                        className='h-10 text-[#E0B416] ml-2 cursor-pointer hover:bg-[#534b4b] rounded-md px-2 py-2 -mt-2'
                        onClick={() => handleAddTrailerReview(watchlist?._id, 5)}
                      />
                    )}
                </div>
              </div>
              <div className='hidden'>
                { starFlag = 0 }
                { sum = 0 }
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
export default TrailerSearchResults
