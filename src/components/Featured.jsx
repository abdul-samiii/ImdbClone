import List from '@mui/icons-material/List'
import PhotoLibrary from '@mui/icons-material/PhotoLibrary'
import ChevronRight from '@mui/icons-material/ChevronRight'

import { IMAGES } from './constants'

const Featured = () => {
  const Data = [
    {
      id: 1,
      img: IMAGES.feature1,
      list: true,
      photos: false,
    },
    {
      id: 2,
      img: IMAGES.feature2,
      list: false,
      photos: false,
    },
    {
      id: 3,
      img: IMAGES.feature3,
      list: false,
      photos: false,
    },
    {
      id: 4,
      img: IMAGES.feature4,
      list: false,
      photos: true,
    },
    {
      id: 5,
      img: IMAGES.feature5,
      list: false,
      photos: false,
    },
  ]

  return (
    <>
      <div className='flex mt-8'>
        <h1 className='text-[#E0B416] text-3xl font-extrabold lg:ml-[17%] ml-2'>Featured Today</h1>
        <p className='text-xs text-blue-400 ml-[40%] font-bold cursor-pointer'>Get more recommended...</p>
        <ChevronRight className='text-blue-400 -mt-1 md:ml-0 cursor-pointer' />
      </div>
      <div className='flex lg:ml-[17%] lg:w-[75%] mt-4 overflow-x-scroll overflow-y-hidden scrollbar-hide'>
        {
          Data.map((item) => (
            <div className='relative border-x-[1px] border-white hover:scale-110 hover:z-50 transition transform duration-300 ease-in-out hover:opacity-70'>
              <img src={item.img} alt='feature-img' className='h-64 w-60' />
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
              <p className='ml-4 w-44 cursor-pointer'>.</p>
            </div>
          ))
        }
      </div>
    </>
  )
}
export default Featured
