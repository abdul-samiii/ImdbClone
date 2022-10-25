import {
  FolderPlusIcon,
  PlayCircleIcon,
  Squares2X2Icon,
  StarIcon,
} from '@heroicons/react/24/outline'
import { LockClosedIcon, PencilIcon, ShareIcon } from '@heroicons/react/24/solid'

import { Footer, Nav } from '../components'
import { IMAGES } from '../components/constants'

const Watchlist = () => {
  const watchList = true
  return (
    <>
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
          {watchList ? (
            <div className='flex py-12 px-4'>
              <div className='h-full flex group'>
                <img src={IMAGES.feature3} alt='feature-img' className='h-[10%] w-[200px] max-w-none relative hover:opacity-80 transform duration-300 ease-in-out' />
                <PlayCircleIcon className='h-12 text-white my-28 ml-20 absolute z-50 hidden group-hover:inline cursor-pointer' />
              </div>
              <p className='font-mono px-2 mt-1'>1.</p>
              <div>
                <h2 className='font-bold text-lg text-blue-600'>House of the dragon</h2>
                <p className='text-xs'>Hollywood news internationl</p>
                <div className='flex py-2'>
                  <StarIcon className='h-5 text-blue-600 cursor-pointer' />
                  <p className='text-gray-600 text-sm'>Rate</p>
                </div>
                <p className='text-gray-600 text-sm py-4'>Released on {new Date().getDate()}-{new Date().getMonth()} -
                  {new Date().getFullYear()}
                </p>
                <p className='w-1/2 text-sm text-gray-700'>An internal succession war within House Targaryen
                  at the height of its power, 172 years before the birth of Daenerys Targaryen.
                </p>
              </div>
            </div>
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
      <div className='mt-32'>
        <Footer />
      </div>
    </>
  )
}
export default Watchlist
