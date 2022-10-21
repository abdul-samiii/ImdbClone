import { BookmarkIcon } from '@heroicons/react/24/solid'
import { ChevronRight } from '@mui/icons-material'
import CommingSoon from './CommingSoon'

const Explore = () => {
  const data = [
    {
      id: 1,
      title: 'Halloween Ends',
      amount: '$40M',
    },
    {
      id: 2,
      title: 'Smile',
      amount: '$13M',
    },
    {
      id: 3,
      title: 'Lyle, Lyle, Crocodile',
      amount: '$7.4M',
    },
    {
      id: 4,
      title: 'The Women King',
      amount: '$3.7M',
    },
    {
      id: 5,
      title: 'Amsterdam',
      amount: '$2.8M',
    },
    {
      id: 6,
      title: 'Dont Worry Darling',
      amount: '$2.2M',
    },
  ]
  return (
    <div>
      <h1 className='text-[#E0B416] text-3xl font-extrabold lg:ml-[17%] ml-2 mt-12'>Explore Movies & TV Shows</h1>
      <div className='flex mt-8'>
        <h1 className='text-white text-2xl font-extrabold lg:ml-[17%] ml-2 border-l-4 pl-4 border-[#E0B416]'>Top box office (US)</h1>
        <ChevronRight className='h-7 text-white mt-1' />
      </div>
      <p className='text-gray-400 lg:ml-[17%] mt-2 ml-2'>IMDb helps you select the perfect next show or movie to watch.</p>
      <div className='grid md:grid-cols-2 grid-cols-1 md:w-[70%] lg:w-[50%] lg:ml-[10%]'>
        {
          data.map((item) => (
            <div className='flex lg:ml-[24.5%] ml-2 mt-4 hover:bg-[#1A1A1A] cursor-pointer p-2 rounded-md px-4'>
              <p className='text-white my-auto border-r-2  border-[#E0B416] pr-2'>{item.id}</p>
              <BookmarkIcon className='h-14 text-[#383535] hover:text-[#575151] relative' />
              <p className='text-white absolute ml-10 mt-2 text-xl'>+</p>
              <div className='mt-1 '>
                <p className='text-white'>{item.title}</p>
                <p className='text-white'>{item.amount}</p>
              </div>
            </div>
          ))
        }
      </div>
      <CommingSoon />
    </div>
  )
}
export default Explore
