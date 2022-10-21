import { ChevronRight } from '@mui/icons-material'
import { IMAGES } from './constants'

const TopNews = () => {
  const Data = [
    {
      id: 1,
      img: IMAGES.news1,
      news: 'Psychological Thriller ‘The Eye’ Starring Shruti Haasan & Mark Rowley Starts Production',
      channel: 'Deadline film + TV',
    },
    {
      id: 2,
      img: IMAGES.news2,
      news: ' Stephen Curry Doc ‘Underrated’ From A24 Lands at Apple ',
      channel: 'The Wrap',
    },
    {
      id: 3,
      img: IMAGES.news3,
      news: 'Peeling Back ‘Glass Onion’: Netflix’s ‘Knives Out’ Theater Plan Sparks Box Office Controversy',
      channel: 'The Hollywood Reporter',
    },
    {
      id: 4,
      img: IMAGES.news4,
      news: 'Anil Kapoor, Madhuri Dixit Hit ‘Jamai Raja’ Gets Reboot From Shemaroo, Imen (Exclusive)',
      channel: 'Variety Films',
    },
    {
      id: 5,
      img: IMAGES.news5,
      news: '‘From Scratch’ Creators on Cooking Up a Very Personal Netflix Series',
      channel: 'The Hollywood Reporter',
    },
  ]
  return (
    <div>
      <div className='flex mt-8'>
        <h1 className='text-white text-2xl font-extrabold lg:ml-[17%] ml-2 border-l-4 pl-4 border-[#E0B416]'>Top news</h1>
        <ChevronRight className='h-7 text-white mt-1' />
      </div>
      <div className='flex lg:ml-[17%] mt-4 overflow-x-scroll lg:w-[70%] space-x-4 h-full scrollbar-hide'>
        {
          Data.map((item) => (
            <div className='hover:opacity-90 group flex w-[70%]'>
              <img src={item.img} alt='feature-img' className='h-[100%]' />
              <div className='w-[380px] ml-4'>
                <p className=' cursor-pointer text-white mt-2'>{item.news}</p>
                <p className='text-gray-500 cursor-pointer'>{item.channel}</p>
              </div>
            </div>
          ))
        }
      </div>
      <div className='flex space-x-2 md:space-x-4 ml-2 lg:ml-[17%] mt-6'>
        <p className='text-gray-400 border-[1px] w-fit py-1 px-2 text-sm rounded-3xl border-gray-400 cursor-pointer hover:text-white hover:border-white'>Top news</p>
        <p className='text-gray-400 border-[1px] w-fit py-1 px-2 text-sm rounded-3xl border-gray-400 cursor-pointer hover:text-white hover:border-white'>Movie news</p>
        <p className='text-gray-400 border-[1px] w-fit py-1 px-2 text-sm rounded-3xl border-gray-400 cursor-pointer hover:text-white hover:border-white'>TV news</p>
        <p className='text-gray-400 border-[1px] w-fit py-1 px-2 text-sm rounded-3xl border-gray-400 cursor-pointer hover:text-white hover:border-white'>Celebrity news</p>
      </div>
    </div>
  )
}
export default TopNews
