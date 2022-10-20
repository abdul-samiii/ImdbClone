import { BookmarkIcon } from '@heroicons/react/24/solid'
import { ChevronRight } from '@mui/icons-material'

const Explore = () => {
  console.log()
  return (
    <div>
      <h1 className='text-[#E0B416] text-3xl font-extrabold lg:ml-[25%] ml-2 mt-12'>Explore Movies & TV Shows</h1>
      <div className='flex mt-8'>
        <h1 className='text-white text-2xl font-extrabold lg:ml-[25%] ml-2 border-l-4 pl-4 border-[#E0B416]'>Top box office (US)</h1>
        <ChevronRight className='h-7 text-white mt-1' />
      </div>
      <p className='text-gray-400 lg:ml-[25%] mt-2 ml-2'>IMDb helps you select the perfect next show or movie to watch.</p>
      <div className='flex lg:ml-[24.5%] ml-2 mt-4'>
        <BookmarkIcon className='h-14 text-[#383535] hover:text-[#575151] relative' />
        <p className='text-white absolute ml-6 mt-2 text-xl'>+</p>
        <div className='mt-1 '>
          <p className='text-white'>Halloween Ends</p>
          <p className='text-white'>$40M</p>
        </div>
      </div>
    </div>
  )
}
export default Explore
