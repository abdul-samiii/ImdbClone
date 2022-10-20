import { PlayCircleIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

import { sideData } from '../data'

const Sidebar = () => {
  console.log()
  return (
    <div className='lg:w-[30%] ml-4 mt-4'>
      <h2 className='text-[#E0B416] text-2xl lg:mt-4 font-extrabold'>Up Next</h2>
      {sideData.map((item) => (
        <div className='flex mt-8 hover:bg-[#121212] w-full'>
          <img src={item.img} alt='side-img' className='h-36' />
          <div className='ml-4 mt-4'>
            <div className='flex'>
              <PlayCircleIcon className='h-7 text-white' />
              <p className='text-gray-300 ml-2 mt-1'>{item.duration}</p>
            </div>
            <div>
              <p className='text-white'>Sylvester Stallone Is the &quot;Tulsa King&quot;</p>
              <p className='text-gray-300'>Watch the Trailer</p>
            </div>
          </div>
        </div>
      ))}
      <div className='flex group w-fit cursor-pointer'>
        <h2 className='group-hover:text-[#E0B416] text-white text-2xl mt-4 font-bold'>Browse Trailers</h2>
        <ChevronRightIcon className='h-4 text-white group-hover:text-[#E0B416] mt-6 ml-2' />
      </div>
    </div>
  )
}
export default Sidebar
