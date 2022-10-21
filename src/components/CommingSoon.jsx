import { ChevronRight, PhotoLibrary } from '@mui/icons-material'
import { List } from '@mui/material'
import { IMAGES } from './constants'

const CommingSoon = () => {
  const Data = [
    {
      id: 1,
      img: IMAGES.comming1,
      duration: '1:22',
    },
    {
      id: 2,
      img: IMAGES.comming2,
      duration: '2:32',
    },
    {
      id: 3,
      img: IMAGES.comming3,
      duration: '1:32',
    },
    {
      id: 4,
      img: IMAGES.comming4,
      duration: '4:12',
    },
  ]
  return (
    <div>
      <div className='flex mt-8'>
        <h1 className='text-white text-2xl font-extrabold lg:ml-[25%] ml-2 border-l-4 pl-4 border-[#E0B416]'>Comming soon to theaters</h1>
        <ChevronRight className='h-8 text-white mt-[6px]' />
      </div>
      <div className='flex lg:ml-[25%] mt-4 overflow-x-scroll md:w-[60%] overflow-y-hidden space-x-4'>
        {
          Data.map((item) => (
            <div className='relative hover:opacity-70'>
              <img src={item.img} alt='feature-img' className='h-64 w-[200%]' />
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
