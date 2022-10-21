import { ChevronRight, PhotoLibrary } from '@mui/icons-material'
import { List } from '@mui/material'
import { IMAGES } from './constants'

const CommingSoon = () => {
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
    <div>
      <div className='flex mt-8'>
        <h1 className='text-white text-2xl font-extrabold lg:ml-[25%] ml-2 border-l-4 pl-4 border-[#E0B416]'>Comming soon to theaters</h1>
        <ChevronRight className='h-8 text-white mt-[6px]' />
      </div>
      <div className='flex lg:ml-[25%] mt-4 overflow-x-scroll overflow-y-hidden'>
        {
          Data.map((item) => (
            <div className='relative border-x-[1px] border-white hover:scale-110 hover:z-50 transition transform duration-300 ease-in-out hover:opacity-70'>
              <img src={item.img} alt='feature-img' className='h-64 w-48' />
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
    </div>
  )
}
export default CommingSoon
