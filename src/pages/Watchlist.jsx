import {
  FolderPlusIcon,
  Squares2X2Icon,
  StarIcon,
} from '@heroicons/react/24/outline'
import { LockClosedIcon, PencilIcon, ShareIcon } from '@heroicons/react/24/solid'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import RedirectWithoutLogin from '../AuthRedirection/RedirectWithoutLogin'

import { Footer, Nav } from '../components'
import { ActionCreators } from '../store'

const Watchlist = () => {
  const dispatch = useDispatch()
  const {
    GetWatchlistTrailer,
  } = bindActionCreators(ActionCreators, dispatch)
  const FreeTrailerData = useSelector(item => item?.WatchlistReducer?.watchlist)
  useEffect(() => {
    GetWatchlistTrailer()
  }, [])

  return (
    <>
      <RedirectWithoutLogin />
      <Nav />
      <div className='bg-gray-200 h-screen'>
        <div className='bg-white md:w-1/2 mx-auto h-screen'>
          <div className='flex justify-between p-4'>
            <div>
              <h1 className='text-2xl'>Your Watchlist</h1>
              <div className='flex text-gray-400'>
                <LockClosedIcon className='h-[15px] mt-[3px]' />
                <p className='text-sm font-bold '>PRIVATE</p>
              </div>
            </div>
            <div className='flex space-x-10'>
              <div className='text-gray-600 cursor-pointer'>
                <PencilIcon className='h-6' />
                <p className='text-sm'>EDIT</p>
              </div>
              <div className='text-gray-600 cursor-pointer'>
                <ShareIcon className='h-6' />
                <p className='text-sm'>SHARE</p>
              </div>
            </div>
          </div>
          <div className='flex justify-between text-gray-600 p-4 border-b-2 border-t-2 bg-gray-100'>
            <p>0 Titles</p>
            <div className='flex space-x-4'>
              <div>
                <lable>Sort by: </lable>
                <select className='p-2 rounded-md px-4'>
                  <option>Alphabetical</option>
                  <option>Date</option>
                </select>
              </div>
              <Squares2X2Icon className='h-7' />
              <p className='border-2 rounded-md px-2 py-1'>REFINE</p>
            </div>
          </div>
          <div className='overflow-y-scroll'>
            {FreeTrailerData
              ? (
                FreeTrailerData?.map((watchlist) => {
                  console.log()
                  return (
                    <div className='flex py-12 px-4'>
                      <div className='h-full flex group'>
                        <video className='h-[100%] w-[300px] max-w-none' controls>
                          <source src={`http://localhost:5500/uploads/videos/${watchlist?.freeVideo?.link}`} type='video/mp4' />
                        </video>
                      </div>
                      <p className='font-mono px-2 mt-1'>1.</p>
                      <div>
                        <h2 className='font-bold text-lg text-blue-600'>{watchlist?.freeVideo?.title}</h2>
                        <p className='text-xs'>{watchlist?.freeVideo.channel.channelName}</p>
                        <div className='flex py-2'>
                          <StarIcon className='h-5 text-blue-600 cursor-pointer' />
                          <p className='text-gray-600 text-sm'>Rate</p>
                        </div>
                        <p className='text-gray-600 text-sm py-4'>Released on {new Date().getDate()}-{new Date().getMonth()} -
                          {new Date().getFullYear()}
                        </p>
                        <p className='w-1/2 text-sm text-gray-700'>All the rights of this movies is reserved. You can watch the movie at demolink.com</p>
                      </div>
                    </div>
                  )
                })
              )
              : (
                <div className='m-auto mt-20'>
                  <FolderPlusIcon className='h-20 text-gray-400 m-auto' />
                  <h2 className='text-center mt-4 text-xl'>Your Rating list is empty</h2>
                  <p className='w-1/2 text-center flex mx-auto mt-8 text-gray-500'>Add movies and shows to your Watchlist to keep track of what you want to watch.</p>
                  <p className='text-blue-600 cursor-pointer hover:underline text-sm text-center'>Browse popular Movies</p>
                </div>
              )}
          </div>
        </div>
      </div>
      <div className='mt-32'>
        <Footer />
      </div>
    </>
  )
}
export default Watchlist
